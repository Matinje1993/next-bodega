import { NextResponse } from 'next/server';
import { prisma } from "@/lib/db";
import { getServerSession } from '@/lib/auth';

export async function POST(request: Request) {
    const session = await getServerSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const body = await request.json();

        const {
            deliveryAddressId,
            items,
        } = body;

        if (!deliveryAddressId || !items || items.length === 0) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const totalPrice = items.reduce((total, item) => {
            return total + Number(item.totalPrice);
        }, 0);

        const order = await prisma.order.create({
            data: {
                clerkUserId: session.user.id,
                status: '1',
                totalAmount: totalPrice,
                deliveryFee: 500,
                deliveryAddressId,
                items: {
                    create: items.map((item: any) => ({
                        productId: item.id,
                        quantity: item.quantity,
                        price: item.price.price,
                    })),
                },
            },
            include: {
                items: true,
                deliveryAddress: true,
            },
        });

        return NextResponse.json(order, { status: 201 });
    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}