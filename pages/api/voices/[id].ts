import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import { VoiceModel } from "../../../models/Voice";

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
        const voice = await VoiceModel.findById(id);
        if (!voice) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: voice });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const voice = await VoiceModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!voice) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: voice });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedVoice = await VoiceModel.deleteOne({ _id: id });
        if (!deletedVoice) {
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
