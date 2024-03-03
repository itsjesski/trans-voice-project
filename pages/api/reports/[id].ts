import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import { ReportModel } from "../../../models/Report";

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
        const report = await ReportModel.findById(id);
        if (!report) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: report });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const report = await ReportModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!report) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: report });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedReport = await ReportModel.deleteOne({ _id: id });
        if (!deletedReport) {
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
