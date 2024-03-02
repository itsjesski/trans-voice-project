import mongoose from "mongoose";

export interface Voice extends mongoose.Document {
  id: number;
  ratings: number[];
  reports: number[];
}

/* VoiceSchema will correspond to a collection in your MongoDB database. */
const VoiceSchema = new mongoose.Schema<Voice>({
  id: {
    type: Number,
    required: [true, "Please provide an id for this voice."],
  },
  ratings: {
    /* This is an array of rating_ids to associate ratings with this voice. */
    type: [Number],
  },
  reports: {
    /* This is an array of report_ids to associate reports with this voice. */
    type: [Number],
  },
});

export default mongoose.models.Voice ||
  mongoose.model<Voice>("Voice", VoiceSchema);
