import { Link, Outlet, redirect, useNavigation } from 'react-router'
import AppName from '~/components/custom/app-name'
import MobileNav from '~/components/navigation/mobile-nav'
import NavButton from '~/components/navigation/nav-button'
import APP_TABS from '~/components/navigation/app-tabs'
import useSession from '~/lib/session'
import type { Route } from '../_app/+types/route'
import { toast } from '~/hooks/use-toast'

export async function clientLoader() {
    const { validateSession, intendedRoute } = useSession();

    try {
        let user = await validateSession();
        return user
    } catch ({ response }: any) {
        toast({
            variant: "destructive",
            title: "Your session has expired!",
            description: "Login again to continue using OwenaHub",
        });
        intendedRoute(window.location.pathname);
        return redirect('/login');
    }
}

export default function ProtectedLayout({ loaderData }: Route.ComponentProps) {
    const { state } = useNavigation();
    let busy: boolean = state === "submitting" || state === "loading";

    const user: User = loaderData;

    return (
        <>
            <div className="container mx-auto p">
                <section className="flex flex-col md:flex-row min-h-screen">
                    <aside className="md:block hidden py-6 pr-5 md:basis-1/5 sticky top-0 border-e max-h-screen">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <Link to={"/"} className='flex items-center gap-1'>
                                    <img src='/images/logos/logo.png' width={25} /> <AppName size='base' />
                                </Link>
                                <nav className="py-8 uppercase text-sm">
                                    {APP_TABS.map((item) => (
                                        <NavButton key={item.href} href={item.href} label={item.title} icon={item.icon} />
                                    ))}
                                </nav>
                            </div>
                            <section>
                                <div className="text-sm border rounded-md p-3 mb-4">
                                    <div className="font-bold pb-2 text-base">Upgrade to premium</div>
                                    <p className="text-xs pb-3">
                                        Get full access to all courses offered on OwenaHub with a one time payment.
                                    </p>
                                    <button className="rounded-md w-full py-2 px-4 text-xs bg-primary-foreground font-bold text-secondary-auxiliary">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="text-sm border rounded-md p-3">
                                    <h3 className="font-bold text-[#001836]">{user?.name}</h3>
                                    <p className="text-black text-xs">{user?.email}</p>
                                </div>
                            </section>
                        </div>
                    </aside>

                    <main className="w-full flex-1 transition">
                        <header className='py-5 md:hidden'>
                            <div className='flex items-center gap-1'>
                                <img src='/images/logos/logo.png' width={25} /> <AppName size='base' />
                            </div>
                        </header>
                        <div className={`${busy && "opacity-35"} transition overflow-x-hidden`}>
                            <Outlet context={user} />
                        </div>
                    </main>
                </section>
            </div>
            <div className='md:hidden pt-20'>
                <MobileNav />
            </div>
        </>
    )
}
