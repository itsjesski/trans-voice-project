import mongoose, { Schema, Types } from "mongoose";

export interface User extends mongoose.Document {
  discordId: string;
  isBanned: boolean;
  isAdmin: boolean;
  voices: Types.ObjectId[];
}

const UserSchema = new mongoose.Schema<User>(
  {
    discordId: {
      type: String,
      required: [true, "Discord ID required"],
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    voices: [{ type: Schema.Types.ObjectId, ref: "Voice" }],
  },
  {
    timestamps: true,
  }
);

export const UserModel =
  mongoose.models.User ?? mongoose.model<User>("User", UserSchema);
