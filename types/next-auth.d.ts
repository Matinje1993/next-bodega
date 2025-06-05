import NextAuth, { DefaultSession } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
  }

  interface JWT {
    id: string;
    name?: string;
    email?: string;
  }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
    }
}