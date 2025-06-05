import { redirect } from "next/navigation";
import { PrismaClient } from '@/lib/generated/prisma';
import CheckoutClient from "./CheckoutClient";
import { getServerSession } from "@/lib/auth";

const prisma = new PrismaClient();

export default async function CheckoutPage() {
    const session = await getServerSession();

    if (!session) redirect("/login?redirect=%2Fapp%2Fcheckout");

    const defaultAddress = await prisma.address.findFirst({
        where: {
            clerkUserId: session.user.id,
            isDefault: true,
        },
    })

    const addressToUse = defaultAddress ?? (
        await prisma.address.findFirst({
            where: { clerkUserId: session.user.id },
            orderBy: { createdAt: 'desc' }
        })
    )

    return <CheckoutClient address={addressToUse} />;
}