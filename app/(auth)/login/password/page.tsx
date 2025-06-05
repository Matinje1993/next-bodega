import { redirect } from 'next/navigation';
import Form from './Form';

export const metadata = {
    title: "Login",
    description: `Cart for e-ecommerce, selling products, and new productivity`,
};

export default function Page({ searchParams }: { searchParams: { email?: string; redirect?: string; } }) {
    if (!searchParams.email) {
        redirect('/login');
    }

    return (
        <Form email={searchParams.email} redirect={searchParams.redirect} />
    );
}