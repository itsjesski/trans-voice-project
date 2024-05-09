import NextAuth, { type AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { MongoAuthAdapter } from "@/lib/db/mongo-auth-adapter";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  adapter: MongoAuthAdapter(),
  session: {
    strategy: "jwt",
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          scope: "identify",
        },
      },
      async profile(profile, tokens) {
        const avatarUrl = profile.avatar
          ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
          : undefined;

        return {
          id: profile.id,
          name: profile.username,
          image: avatarUrl,
          isAdmin: false,
          isBanned: false,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.isBanned = token.isBanned as boolean;
        session.user.id = token.sub as string;
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
