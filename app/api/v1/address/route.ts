import { auth } from '@clerk/nextjs/server'
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { userId } = auth()
    if (!userId) return new Response('Unauthorized', { status: 401 })

    const data = await req.json()

    const {
        number,
        building,
        street,
        area,
        landmark,
        instructions,
        deliveryInstructions,
        country,
        phone,
        fullName,
        addressLabel,
        lat,
        lon,
    } = data

    const address = await prisma.address.create({
        data: {
            number,
            building,
            street,
            area,
            landmark,
            instructions,
            deliveryInstructions,
            country,
            phone,
            fullName,
            addressLabel,
            latitude: parseFloat(lat),
            longitude: parseFloat(lon),
            clerkUserId: userId,
        },
    })

    return Response.json(address)
}