import mongoose, { Schema, Types } from "mongoose";

export interface User {
  discordId: string;
  username: string;
  avatarUrl?: string;
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
    username: {
      type: String,
      required: [true, "Username required"],
    },
    avatarUrl: {
      type: String,
      required: false,
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
  (mongoose.models.User as mongoose.Model<User>) ??
  mongoose.model<User>("User", UserSchema);
