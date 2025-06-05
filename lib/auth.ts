import { cookies } from 'next/headers';

export async function getServerSession() {
    const cookieStore = cookies();
    const cookie =
        cookieStore.get('next-auth.session-token')?.value ||
        cookieStore.get('__Secure-next-auth.session-token')?.value;

    if (!cookie) {
        return null; // no session cookie found
    }

    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

    const res = await fetch(`${baseUrl}/api/auth/session`, {
        headers: {
            cookie: `next-auth.session-token=${cookie}`, // send session cookie with request
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        return null;
    }

    const session = await res.json();
    return session;
}