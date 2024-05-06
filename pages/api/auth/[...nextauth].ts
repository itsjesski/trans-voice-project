import NextAuth, { type AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { dbConnect } from "../../../lib/dbConnect";
import { UserModel } from "../../../models/User";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
      async profile(profile, tokens) {
        await dbConnect();

        const avatarUrl = profile.avatar
          ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
          : undefined;

        let user = await UserModel.findOne({ discordId: profile.id });

        if (!user) {
          user = await UserModel.create({
            discordId: profile.id,
            username: profile.username,
            email: profile.email,
            avatarUrl: avatarUrl,
            isAdmin: false,
            isBanned: false,
          });
        } else {
          user.username = profile.username;
          if (avatarUrl) {
            user.avatarUrl = avatarUrl;
          }
          await user.save();
        }

        return {
          // next auth expects these fields
          id: user._id.toHexString(),
          name: user.username,
          image: user.avatarUrl,
          isAdmin: user.isAdmin,
          isBanned: user.isBanned,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.isBanned = token.isBanned as boolean;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
        token.isBanned = user.isBanned;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
