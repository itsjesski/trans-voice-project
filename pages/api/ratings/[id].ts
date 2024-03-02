import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Rating from "../../../models/Rating";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const rating = await Rating.findById(id);
        if (!rating) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: rating });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const rating = await Rating.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!rating) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: rating });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedRating = await Rating.deleteOne({ _id: id });
        if (!deletedRating) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
