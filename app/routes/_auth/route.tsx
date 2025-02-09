import { Link, Outlet } from "react-router";
import type { Route } from "../_auth/+types/route";

export default function AuthLayout(_: Route.ComponentProps) {
    return (
        <main className="transition">
            <header className="container py-4 flex justify-center">
                <div className="flex items-center gap-2">
                    <img width="30" className="inline-block" src="/images/logos/logo.png" />
                    <Link to="/">
                        <span className="font-extrabold">OwenaHub </span>
                        <span className="font-light">the learners hub</span>
                    </Link>
                </div>
            </header>
            <Outlet />
        </main>
    )
}