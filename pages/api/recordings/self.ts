import {
  applyRateLimitMiddleware,
  createCustomRateLimitMiddlewares,
} from "@/lib/rate-limit";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "@/lib/db/dbConnect";
import { RecordingModel, RecordingWithRatings } from "@/models/Recording";
import { Types } from "mongoose";
import { getSignedFileUrl } from "@/lib/r2-service";

const rateLimitMiddlewares = createCustomRateLimitMiddlewares({
  limit: 10,
  windowMs: 60 * 1000,
  delayAfter: Math.round(10 / 2),
  delayMs: 500,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await applyRateLimitMiddleware(req, res, rateLimitMiddlewares);
  } catch (e) {
    return res.status(429).json({ message: "Too many requests" });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  await dbConnect();

  const recordingsWithRatings =
    await RecordingModel.aggregate<RecordingWithRatings>([
      {
        $match: {
          createdBy: new Types.ObjectId("663c44dd34ee800b648f929e"),
        },
      },
      {
        $lookup: {
          from: "ratings",
          localField: "_id",
          foreignField: "recording",
          as: "ratings",
        },
      },
      {
        $addFields: {
          ratings: "$ratings",
        },
      },
      {
        $project: {
          name: 1,
          fileKey: 1,
          status: 1,
          createdAt: 1,
          ratings: {
            _id: 1,
            recording: 1,
            value: 1,
          },
        },
      },
    ]).exec();

  const recordingsWithRatingsAndUrls = await Promise.all(
    recordingsWithRatings.map(async (recording) => {
      recording.url = await getSignedFileUrl(recording.fileKey);
      return recording;
    })
  );

  return res.status(200).json(recordingsWithRatingsAndUrls);
}
