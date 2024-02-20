import { authMiddleware } from "@clerk/nextjs";

// The user cannot access any pages without signing in
export default authMiddleware({
  publicRoutes: ["/", "/posts", "/admin"],
});
// publicRoutes:['/'] inside {} to give access without sign up
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
