import mongoose, { Types } from "mongoose";

export interface Report extends mongoose.Document {
  reportType: "recording" | "rating-comment";
  createdBy: Types.ObjectId;
  recording?: Types.ObjectId;
  rating?: Types.ObjectId;
  comment?: string;
}

const ReportSchema = new mongoose.Schema<Report>(
  {
    reportType: {
      type: String,
      enum: ["recording", "rating-comment"],
      default: "recording",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Created by required"],
    },
    recording: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recording",
      required: false,
    },
    rating: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
      required: false,
    },
    comment: {
      type: String,
      required: false,
      maxlength: [100, "Comment cannot be more than 100 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export const ReportModel =
  mongoose.models.Report || mongoose.model<Report>("Report", ReportSchema);
