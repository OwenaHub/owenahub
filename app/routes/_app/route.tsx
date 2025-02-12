import { Link, Outlet, redirect, useNavigation, type MetaFunction } from 'react-router'
import { ArrowRight, ArrowUpNarrowWide, ChevronRight, Send, TrendingUp } from 'lucide-react'
import AppName from '~/components/custom/app-name'
import MobileNav from '~/components/navigation/mobile-nav'
import NavButton from '~/components/navigation/nav-button'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { toast } from '~/hooks/use-toast'
import APP_TABS from '~/components/navigation/app-tabs'
import useSession from '~/lib/session'
import type { Route } from '../_app/+types/route'

export const meta: MetaFunction = () => {
    return [
        { title: "Home | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export async function clientLoader() {
    const { validateSession } = useSession();
    try {
        let user = await validateSession();
        return { user }
    } catch ({ response }: any) {
        toast({
            variant: "destructive",
            title: "Your session has expired!",
            description: "Login again to continue using Kribb",
        })
        return redirect('/login');
    }
}

export default function ProtectedLayout({ loaderData }: Route.ComponentProps) {
    const { state } = useNavigation();
    let busy: boolean = state === "submitting" || state === "loading";

    let { user }: { user: User } = loaderData;

    return (
        <>
            <div className="container mx-auto px-4">
                <section className="flex flex-col md:flex-row min-h-screen">
                    <aside className="md:block hidden py-6 pr-3 md:basis-1/5 sticky top-0 max-h-screen border-e">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <Link to={"/"} className='flex items-center gap-1'>
                                    <img src='/images/logos/logo.png' width={25} /> <AppName size='base' />
                                </Link>
                                <nav className="py-8">
                                    {APP_TABS.map((item) => (
                                        <NavButton key={item.href} href={item.href} label={item.title} icon={item.icon} />
                                    ))}
                                </nav>
                            </div>
                            <section>
                                <div className="text-sm bg-muted rounded-md p-3 mb-4">
                                    <div className="font-semibold pb-2 text-base">Upgrade to premium</div>
                                    <p className="text-xs pb-3">
                                        Unlock all features and get unlimited access to our support team.
                                    </p>
                                    <button className="rounded-md w-full py-2 px-4 text-xs bg-primary font-medium text-white">Subscribe</button>
                                </div>
                                <div className="text-sm bg-muted rounded-md p-3">
                                    <h3 className="font-bold text-primary">{user?.name}</h3>
                                    <p className="text-black text-xs">{user?.email}</p>
                                </div>
                            </section>
                        </div>
                    </aside>

                    <main className={`pt-6 flex-1 md:basis-1/2 w-full transition ${busy && "opacity-35"}`}>
                        <Outlet context={user} />
                    </main>
                </section>
            </div>
            <div className='md:hidden pt-20'>
                <MobileNav />
            </div>
        </>
    )
}
