import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { PrismaClient } from '@/lib/generated/prisma';
import CheckoutClient from "./CheckoutClient";

const prisma = new PrismaClient();

export default async function CheckoutPage() {
    const { userId } = auth();

    if (!userId) redirect("/login?redirect_url=%2Fapp%2Fcheckout");

    const defaultAddress = await prisma.address.findFirst({
        where: {
            clerkUserId: userId,
            isDefault: true,
        },
    })

    const addressToUse = defaultAddress ?? (
        await prisma.address.findFirst({
            where: { clerkUserId: userId },
            orderBy: { createdAt: 'desc' }
        })
    )

    return <CheckoutClient address={addressToUse} />;
}