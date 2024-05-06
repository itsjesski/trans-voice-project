import { withAuth } from "next-auth/middleware";

export const config = {
  matcher: "/((?!assets|$|login|_next/image|.*\\.png$|.*\\.svg$).*)",
};

export default withAuth({
  callbacks: {
    authorized: async ({ token, req }) => {
      console.log("checking auth for", req.nextUrl.pathname);
      if (!token) {
        return false;
      }
      if (
        (req.nextUrl.pathname.startsWith("/admin") ||
          req.nextUrl.pathname.startsWith("/api/admin")) &&
        !token.isAdmin
      ) {
        return false;
      }
      return true;
    },
  },
});
