import { getServerSession as getNextAuthSession } from "next-auth";
import { authOptions } from "@/lib/auth-options"; // wherever you define your NextAuth config

export async function getServerSession() {
    return await getNextAuthSession(authOptions);
}