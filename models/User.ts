import mongoose from "mongoose";

export interface User extends mongoose.Document {
  id: number;
  ratings: number[];
  voices: number[];
  reports: number[];
  banned: boolean;
}

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<User>({
  id: {
    type: Number,
    required: [true, "Please provide an id for this user."],
  },
  ratings: {
    type: [Number],
    required: [true, "Please provide ratings associated with this user."],
  },
  voices: {
    type: [Number],
    required: [true, "Please provide voices associated with this user."],
  },
  reports: {
    type: [Number],
    required: [true, "Please provide reports associated with this user."],
  },
  banned: {
    type: Boolean,
    required: [true, "Please provide a ban status for this user."],
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
