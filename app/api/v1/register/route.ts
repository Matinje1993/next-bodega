import { PrismaClient } from '@/lib/generated/prisma';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const {
        firstName,
        lastName,
        email,
        password,
        countryCode,
        phoneNumber
    } = await req.json()

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
        return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            countryCode,
            phoneNumber
        }
    })

    return new Response(JSON.stringify({
        message: 'User created',
        user: { id: user.id, email: user.email }
    }), { status: 201 })
}