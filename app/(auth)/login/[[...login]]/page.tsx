import LoginForm from "./LoginForm";

export const metadata = {
    title: "Login",
    description: `Cart for e-ecommerce, selling products, and new productivity`,
};

export default function Page({ searchParams }: { searchParams: { filledEmail?: string, redirect?: string } }) {
    return (
        <LoginForm email={searchParams.filledEmail} redirect={searchParams.redirect} />
    );
}