import mongoose, { Types } from "mongoose";

export interface Report extends mongoose.Document {
  reportType: "voice" | "rating-comment";
  createdBy: Types.ObjectId;
  voice?: Types.ObjectId;
  rating?: Types.ObjectId;
  comment?: string;
}

const ReportSchema = new mongoose.Schema<Report>(
  {
    reportType: {
      type: String,
      enum: ["voice", "rating-comment"],
      default: "voice",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Created by required"],
    },
    voice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Voice",
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
