import { Link, Outlet, redirect } from "react-router";
import type { Route } from "../_auth/+types/route";
import useSession from "~/lib/session";

export async function clientLoader(_: Route.ClientLoaderArgs) {
    const { validateSession } = useSession();

    try {
        await validateSession();
        return redirect('/home');
    } catch ({ response }: any) {
        return {};
    }
}

export default function AuthLayout(_: Route.ComponentProps) {
    return (
        <main className="transition">
            <header className="container py-4 flex justify-center">
                <div className="flex items-center gap-2">
                    <img width="30" className="inline-block" src="/images/logos/logo.png" />
                    <Link to="/" className="text-popover-foreground">
                        <span className="font-extrabold">OwenaHub </span>
                        <span className="font-normal">the learners hub</span>
                    </Link>
                </div>
            </header>
            <Outlet />
        </main>
    )
}