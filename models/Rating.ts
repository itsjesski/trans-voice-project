import mongoose, { Schema, Types } from "mongoose";

export interface Rating extends mongoose.Document {
  recording?: Types.ObjectId;
  createdBy?: Types.ObjectId;
  value: unknown /* Not sure what this will be yet. */;
}

const RatingSchema = new mongoose.Schema<Rating>(
  {
    recording: {
      type: Schema.Types.ObjectId,
      ref: "Recording",
      required: [true, "recording ref required"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    value: {
      type: Schema.Types
        .Mixed /* TODO: update this to the correct type once we know */,
      required: [true, "Value required"],
    },
  },
  {
    timestamps: true,
  }
);

export const RatingModel =
  mongoose.models.Rating || mongoose.model<Rating>("Rating", RatingSchema);
