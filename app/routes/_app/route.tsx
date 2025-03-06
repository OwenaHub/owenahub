import { Link, Outlet, redirect, useNavigation } from 'react-router'
import AppName from '~/components/custom/app-name'
import MobileNav from '~/components/navigation/mobile-nav'
import NavButton from '~/components/navigation/nav-button'
import APP_TABS from '~/components/navigation/app-tabs'
import useSession from '~/lib/session'
import type { Route } from '../_app/+types/route'
import { toast } from '~/hooks/use-toast'
import { ToastAction } from '~/components/ui/toast'
import { RotateCcw } from 'lucide-react'
import CustomAvatar from '~/components/custom/custom-avatar'
import AppNotification from './app-notification'
import { getNotifications } from './app'

export async function clientLoader() {
    const { validateSession, intendedRoute } = useSession();

    try {
        const user = await validateSession();
        const notifications = getNotifications();

        return { user, notifications };
    } catch ({ response }: any) {
        if (response.status === 401) {
            toast({
                variant: "destructive",
                title: "Your session has expired!",
                description: "Login again to continue using OwenaHub",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Something went wrong",
                description: "Try reloading this page",
                action: (
                    <ToastAction altText="Reload">
                        <RotateCcw size={18} />
                    </ToastAction>
                ),
            });
        }

        intendedRoute(window.location.pathname);
        return redirect('/login');
    }
}

export default function ProtectedLayout({ loaderData }: Route.ComponentProps) {
    const { state } = useNavigation();
    let busy: boolean = state === "submitting" || state === "loading";

    let { user, notifications }: { user: User, notifications: any } = loaderData;

    return (
        <>
            <div className="container mx-auto p">
                <section className="flex flex-col md:flex-row min-h-screen">
                    <aside className="md:block hidden py-6 pr-5 md:basis-1/5 sticky top-0 border-e max-h-screen">
                        <div className="flex flex-col justify-between h-full">
                            <div id='nav-container'>
                                <div className="flex justify-between items-center">
                                    <Link to={"/"} className='flex items-center gap-1'>
                                        <img src='/images/logos/logo.png' width={25} /> <AppName size='base' />
                                    </Link>

                                    <AppNotification notifications={notifications} />
                                </div>
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
                                <div className="text-sm rounded-md px-1 py-3 bg-gray-100 border border-gray-200">
                                    <div className="flex gap-2 items-start">
                                        <CustomAvatar name={user?.name} />
                                        <div>
                                            <h3 className="font-bold text-[#001836]">{user?.name}</h3>
                                            <p className="text-black text-xs">{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </aside>

                    <main className="w-full flex-1 transition">
                        <header className='py-5 md:hidden flex justify-between items-center'>
                            <div className='flex items-center gap-1'>
                                <img src='/images/logos/logo.png' width={25} /> <AppName size='base' />
                            </div>
                            <AppNotification notifications={notifications} />
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