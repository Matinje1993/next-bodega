import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/:path*"],
});

export const config = {
  matcher: ["/((?!api|trpc|_next|.*\\..*).*)"], // Don't run middleware on /api, _next, or static files
};