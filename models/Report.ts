import mongoose from "mongoose";

export interface Report extends mongoose.Document {
  id: number;
  comment: string /* Optional, not sure if we'll use this or not. */;
}

/* ReportSchema will correspond to a collection in your MongoDB database. */
const ReportSchema = new mongoose.Schema<Report>({
  id: {
    type: Number,
    required: [true, "Please provide an id for this report."],
  },
  comment: {
    type: String,
    maxlength: [100, "Comment cannot be more than 100 characters"],
  },
});

export default mongoose.models.Report ||
  mongoose.model<Report>("Report", ReportSchema);
