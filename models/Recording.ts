import mongoose, { Schema, Types } from "mongoose";
import { Rating } from "./Rating";

export interface Recording {
  fileKey: string;
  url?: string;
  name: string;
  status: "public" | "unlisted" | "private";
  createdBy: Types.ObjectId;
  createdAt: Date;
}

export interface RecordingWithRatings extends Recording {
  ratings: Rating[];
}

const RecordingSchema = new mongoose.Schema<Recording>(
  {
    fileKey: {
      type: String,
      required: [true, "File key required"],
    },
    name: {
      type: String,
      required: [true, "Name required"],
    },
    status: {
      type: String,
      enum: ["public", "unlisted", "private"],
      required: [true, "Status required"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Created by required"],
    },
  },
  {
    timestamps: true,
  }
);

export const RecordingModel =
  (mongoose.models.Recording as mongoose.Model<Recording>) ??
  mongoose.model<Recording>("Recording", RecordingSchema);
