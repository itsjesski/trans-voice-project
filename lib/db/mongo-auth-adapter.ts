import type { Adapter, AdapterUser } from "next-auth/adapters";
import dbConnect from "./dbConnect";
import { User, UserModel } from "@/models/User";
import mongoose from "mongoose";

export function MongoAuthAdapter(): Adapter {
  return {
    async createUser(user) {
      await dbConnect();
      const dbUser = await UserModel.create({
        username: user.name,
        avatarUrl: user.image,
        isAdmin: false,
        isBanned: false,
      });
      return mapMongoUserToNextAuthUser(dbUser);
    },
    async getUser(id) {
      await dbConnect();
      let dbUser = await UserModel.findOne({ _id: id });
      if (!dbUser) {
        return null;
      }
      return mapMongoUserToNextAuthUser(dbUser);
    },
    async getUserByAccount(providerAccount) {
      await dbConnect();
      let dbUser = await UserModel.findOne({
        discordId: providerAccount.providerAccountId,
      });
      if (!dbUser) {
        return null;
      }
      return mapMongoUserToNextAuthUser(dbUser);
    },
    async updateUser(user) {
      await dbConnect();
      let dbUser = await UserModel.findOne({ _id: user.id });
      if (!dbUser) {
        throw new Error(`Cannot update user. User not found: ${user.id}`);
      }
      dbUser.username = user.name!;
      dbUser.avatarUrl = user.image!;

      await dbUser.save();
      return mapMongoUserToNextAuthUser(dbUser);
    },
    async linkAccount(account) {
      await dbConnect();
      let dbUser = await UserModel.findOne({ _id: account.userId });
      if (!dbUser) {
        throw new Error(
          `Cannot link account. User not found: ${account.userId}`
        );
      }
      dbUser.discordId = account.providerAccountId;

      await dbUser.save();
    },
  };
}

type ModelDocument<Model> = mongoose.Document<unknown, {}, Model> &
  Model & {
    _id: mongoose.Types.ObjectId;
  };

const mapMongoUserToNextAuthUser = (user: ModelDocument<User>): AdapterUser => {
  return {
    id: user._id.toHexString(),
    name: user.username,
    image: user.avatarUrl,
    email: "",
    emailVerified: null,
    isAdmin: user.isAdmin,
    isBanned: user.isBanned,
  };
};
