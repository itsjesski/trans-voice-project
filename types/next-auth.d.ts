import NextAuth, { type DefaultSession, type DefaultUser } from "next-auth";
import type { User } from "../../models/User";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      isAdmin: boolean;
      isBanned: boolean;
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    isAdmin: boolean;
    isBanned: boolean;
  }
}
