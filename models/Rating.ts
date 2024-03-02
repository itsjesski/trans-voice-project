import mongoose from "mongoose";

export interface Rating extends mongoose.Document {
  id: number;
  rating: number;
  comment: string /* Optional, not sure if we'll use this or not. */;
}

/* RatingSchema will correspond to a collection in your MongoDB database. */
const RatingSchema = new mongoose.Schema<Rating>({
  id: {
    type: Number,
    required: [true, "Please provide an id for this rating."],
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating for this voice."],
  },
  comment: {
    type: String,
    maxlength: [100, "Comment cannot be more than 100 characters"],
  },
});

export default mongoose.models.Rating ||
  mongoose.model<Rating>("Rating", RatingSchema);
