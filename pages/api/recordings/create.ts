import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import { getSignedFileUrl, uploadFile } from "@/lib/r2-service";
import {
  applyRateLimitMiddleware,
  createCustomRateLimitMiddlewares,
} from "@/lib/rate-limit";
import { RecordingModel } from "@/models/Recording";
import dbConnect from "@/lib/db/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

// disable the default body parser to handle multipart form data
export const config = {
  api: {
    bodyParser: false,
  },
};

const rateLimitMiddlewares = createCustomRateLimitMiddlewares({
  limit: 1,
  windowMs: 60 * 1000,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await applyRateLimitMiddleware(req, res, rateLimitMiddlewares);
  } catch (e) {
    return res.status(429).json({ message: "Too many requests" });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { file, fields } = await parseFormData(req, res);
  if (!file) {
    return res.status(400).json({ message: "No files received." });
  }

  const recordingName = fields.recordingName;
  if (!recordingName) {
    return res.status(400).json({ message: "Recording name is required." });
  }

  const fileKey = await uploadFile(file.buffer);

  await dbConnect();

  const savedRecording = await RecordingModel.create({
    name: recordingName,
    fileKey,
    status: "public",
    createdBy: session.user.id,
  });

  const signedUrl = await getSignedFileUrl(fileKey);

  try {
    return res.status(201).json({
      ...savedRecording.toJSON(),
      url: signedUrl,
      ratings: [],
    });
  } catch (error) {
    console.log("Error occurred ", error);
    return res.status(500).json({ message: "Failed" });
  }
}

async function parseFormData(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<{ fields: Record<string, string>; file: Express.Multer.File }> {
  const storage = multer.memoryStorage();

  const parseFile = multer({
    storage: storage,
    limits: { fieldSize: 1048576 * 5 },
  }).single("file");

  return new Promise((resolve, reject) => {
    parseFile(req as any, res as any, (err) => {
      if (err) {
        return reject(err);
      }
      resolve({
        fields: req.body,
        file: (req as any).file as Express.Multer.File,
      });
    });
  });
}
