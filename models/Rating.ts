import mongoose, { Schema, Types } from "mongoose";

export interface Rating extends mongoose.Document {
  voice?: Types.ObjectId;
  createdBy?: Types.ObjectId;
  value: unknown /* Not sure what this will be yet. */;
  comment?: string /* MVP + 1 */;
}

const RatingSchema = new mongoose.Schema<Rating>(
  {
    voice: {
      type: Schema.Types.ObjectId,
      ref: "Voice",
      required: [true, "Voice ref required"],
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

export const RatingModel =
  mongoose.models.Rating || mongoose.model<Rating>("Rating", RatingSchema);
