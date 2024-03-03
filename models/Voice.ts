import mongoose, { Schema, Types } from "mongoose";

export interface Voice extends mongoose.Document {
  url: string;
  title: string;
  status: "public" | "unlisted" | "private";
  createdBy: Types.ObjectId;
  ratings: Types.ObjectId[];
  allowComments?: boolean;
}

const VoiceSchema = new mongoose.Schema<Voice>(
  {
    url: {
      type: String,
      required: [true, "URL required"],
    },
    title: {
      type: String,
      required: [true, "Title required"],
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
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
    allowComments: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const VoiceModel =
  mongoose.models.Voice || mongoose.model<Voice>("Voice", VoiceSchema);
