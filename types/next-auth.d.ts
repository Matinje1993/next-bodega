import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // add id to user session
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }

  interface JWT {
    id: string;
  }
}