import NextAuth from "next-auth";
import type { User } from "../../models/User";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  //   interface Session {
  //     user: User & { id: string; _id: string };
  //   }
}
