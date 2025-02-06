import { Link } from "react-router";
import type { Route } from "../+types/root";
import { Album, ArrowRight, Briefcase, Check, Code, Facebook, Instagram, LayoutTemplate, MonitorIcon, Regex, SquareUserRound, Twitter, Users } from "lucide-react";

export function meta(_: Route.MetaArgs) {
    return [
        { title: "OwenaHub" },
        { name: "description", content: "Build your career with expert mentors" },
    ];
}

export default function HomePage() {
    return (
        <>
            <div className="bg-[#FFFAED]">
                <nav className="container py-10 flex items-center gap-2">
                    <img src="/images/logo.png" width={25} />
                    <Link to="/" className="font-bold">OwenaHub</Link>
                </nav>
                <header className="py-6 lg:pt-10" >
                    <div className="container text-center md:text-start relative">
                        <h1 className="my-3 z-10 text-4xl lg:text-6xl font-extrabold tracking-tight text-[#4B4B4B]">
                            Build your career <br className="hidden md:block" /> with expert mentors
                        </h1>
                        {/* <h2 className="mt-7 z-10 mb-5 text-base lg:text-xl text-[#3D4D5C]">
                            We offer a vibrant platform for learners to build successful <br className="hidden md:block" />
                            careers by learning from experienced mentors.
                        </h2> */}

                        <section className="flex flex-col gap-5 text-[#3D4D5C] my-12">
                            <div className="flex items-center gap-4">
                                <div className="rounded-md p-1.5 bg-[#FFE1BC]">
                                    <Check size={14} strokeWidth={4} className="text-[#083156]" />
                                </div>
                                <h2>Learn online, from professionals</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="rounded-md p-1.5 bg-[#FFE1BC]">
                                    <Check size={14} strokeWidth={4} className="text-[#083156]" />
                                </div>
                                <h2>Get results in 3 months</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="rounded-md p-1.5 bg-[#FFE1BC]">
                                    <Check size={14} strokeWidth={4} className="text-[#083156]" />
                                </div>
                                <h2>A fraction of the cost of other platforms</h2>
                            </div>
                        </section>

                        <div className="z-10 flex flex-col md:flex-row items-center gap-5">
                            <a href="https://forms.gle/JYjmF9iUcLjWHMor6"
                                target="_blank"
                                className="block md:inline-block text-center w-full md:w-max text-sm rounded-lg font-bold px-7 py-2.5 shadow-md text-[#FBE56D] bg-[#083156] hover:bg-gray-800">
                                GET STARTED
                            </a>
                            <a href="#"
                                target="_blank"
                                className="block md:inline-block text-center w-full md:w-max text-sm rounded-lg font-bold px-7 py-2.5 outline outline-1 outline-[#083156] text-[#083156] bg-white hover:text-[#FBE56D]">
                                Learn more
                            </a>
                        </div>

                        <img
                            src="/images/person-bulb.png"
                            alt="..."
                            className="absolute inline-block w-[440px] h-[440px] -top-28 lg:right-60 -right-0 z-0 pointer-events-none lg:opacity-100 opacity-20"
                        />
                    </div>
                </header>

                <section className="py-10 container">
                    <div className="mx-auto">
                        <div className="shadow-lg rounded-2xl border bg-white backdrop-blur-sm px-4 py-2 lg:px-8 lg:py-4 lg:flex items-center justify-between">
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3 lg:flex-col">
                                <MonitorIcon className="text-[#39546A] w-8 h-8" strokeWidth={2} />
                                <div>
                                    <strong className="block font-semibold text-base text-[#4B4B4B]">Swift Sips</strong>
                                    <p className="leading-tight text-xs text-[#76818B]">
                                        Get into our short courses; <br className="hidden sm:inline" />
                                        compact and focused.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3 lg:flex-col">
                                <SquareUserRound className="text-[#39546A] w-8 h-8" strokeWidth={2} />
                                <div>
                                    <strong className="block font-semibold text-base text-[#4B4B4B]">Expert Sessions</strong>
                                    <p className="leading-tight text-xs text-[#76818B]">
                                        Connect With Skilled Mentors <br className="hidden sm:inline" />
                                        That Inspire You.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3 lg:flex-col">
                                <Album className="text-[#39546A] w-8 h-8" strokeWidth={2} />
                                <div>
                                    <strong className="block font-semibold text-base text-[#4B4B4B]">Enriching Repository</strong>
                                    <p className="leading-tight text-xs text-[#76818B]">
                                        Access a Wealth of Informative Articles <br className="hidden sm:inline" />
                                        on our Blog.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3 lg:flex-col">
                                <Users className="text-[#39546A] w-8 h-8" strokeWidth={2} />
                                <div>
                                    <strong className="block font-semibold text-base text-[#4B4B4B]">Virtual Teams</strong>
                                    <p className="leading-tight text-xs text-[#76818B]">
                                        Join teams to work on <br className="hidden sm:inline" />
                                        real-life projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="py-10">
                <div className="container mx-auto">
                    <div className="py-5">
                        <div className="lg:text-center pb-8">
                            <h2 className="text-gray-800 font-bold text-3xl md:text-4xl">
                                Expand your skillset <br className="md:hidden" /> with <span className="animate-pulse text-[#F6A700]">OwenaHub</span>.
                            </h2>
                            <p className="text-gray-500">
                                Find resources curated by our team for Tech Enthusiasts.
                            </p>
                        </div>

                        <div className="lg:flex lg:justify-center gap-6">
                            <div className="rounded-xl p-3 shadow-sm bg-white border border-gray-200 border-b-4  mb-3 flex items-center">
                                <div className="mr-3 rounded-full bg-[#FFE2BB] p-2">
                                    <LayoutTemplate className="w-6 h-6 text-[#39546A]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 m-0">Web Engineering</h3>
                                    <p className="m-0">
                                        <a className="text-gray-800 hover:text-indigo-600 text-sm" href="{{ route('guest.slices.index') }}">
                                            View Resource
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl p-3 shadow-sm bg-white border border-gray-200 border-b-4  mb-3 flex items-center">
                                <div className="mr-3 rounded-full bg-[#FFE2BB] p-2">
                                    <Code className="w-6 h-6 text-[#39546A]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 m-0">Programming</h3>
                                    <p className="m-0">
                                        <a className="text-gray-800 hover:text-indigo-600 text-sm" href="{{ route('guest.slices.index') }}">
                                            View Resource
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex lg:justify-center gap-6">
                            <div className="rounded-xl p-3 shadow-sm bg-white border border-gray-200 border-b-4  mb-3 flex items-center">
                                <div className="mr-3 rounded-full bg-[#FFE2BB] p-2">
                                    <Regex className="w-6 h-6 text-[#39546A]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 m-0">Software Development Methodologies</h3>
                                    <p className="m-0">
                                        <a className="text-gray-800 hover:text-indigo-600 text-sm" href="{{ route('guest.slices.index') }}">
                                            View Resource
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl p-3 shadow-sm bg-white border border-gray-200 border-b-4  mb-3 flex items-center">
                                <div className="mr-3 rounded-full bg-[#FFE2BB] p-2">
                                    <Briefcase className="w-6 h-6 text-[#39546A]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 m-0">Career & Development</h3>
                                    <p className="m-0">
                                        <a className="text-gray-800 hover:text-indigo-600 text-sm" href="{{ route('guest.slices.index') }}">
                                            View Resource
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 lg:pb-9 container">
                <div className="md:flex items-center justify-evenly gap-5 pt-5">
                    <div>
                        <img src="/images/personalised.png" alt="Personalized Learning" className="w-full" />
                    </div>

                    <div>
                        <div className="text-gray-800 pt-5 lg:px-4">
                            <div>
                                <h3 className="text-[#4B4B4B] text-3xl md:text-4xl font-bold mb-4">
                                    Personalised learning
                                </h3>
                                <p className="text-base leading-snug mb-4">
                                    OwenaHub offers courses focused on mentorship. <br className="hidden lg:block" />
                                    Enroll in mentorship courses & learn at your own pace.
                                </p>
                                <a href="#" className="inline-block bg-[#FFE1BC] text-[#3D4D5C] rounded-xl px-6 py-2 font-bold hover:bg-gray-800 hover:text-white transition">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 lg:pb-9 container">
                <div className=" mx-auto">
                    <div className="md:flex items-center justify-evenly gap-5 flex-row-reverse">
                        <div className="pt-5">
                            <img src="/images/long-term-goals.png" alt="Long-Term Goals" className="w-full" />
                        </div>
                        <div className="text-gray-800 pt-5 lg:px-4">
                            <div className="mb-5">
                                <span className="text-red-500 text-lg font-bold">Visions Into Reality</span>
                                <h3 className="text-4xl font-bold text-[#4B4B4B] mt-3 mb-4">
                                    Stop dreaming, start achieving
                                </h3>
                                <p className="text-lg leading-relaxed mb-4">
                                    Work towards long-term goals by connecting <br className="hidden lg:block" /> with mentors for private sessions.
                                </p>
                                <a href="#" target="_blank"
                                    className="inline-block bg-[#FFE1BC] text-[#3D4D5C] rounded-xl px-6 py-2 font-bold hover:bg-gray-800 hover:text-white transition">
                                    See mentors for you <ArrowRight className="inline-block relative ms-1" size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 lg:pb-9 container">
                <div className="mx-auto">
                    <div className="md:flex items-center justify-evenly gap-5">
                        <div className="pt-5">
                            <img src="/images/get-access.png" alt="Get Access" className="w-full" />
                        </div>
                        <div className="text-gray-800 py-5 lg:px-4">
                            <div className="mb-5">
                                <span className="text-[#F6A600] text-lg font-bold">Talk With Experts</span>
                                <h3 className="text-4xl font-bold text-[#4B4B4B] mt-3 mb-4">
                                    Easy access to the <br className="hidden lg:block" /> world’s best
                                </h3>
                                <p className="text-lg leading-relaxed mb-4">
                                    From Web Development to Software Engineering, <br className="hidden lg:block" /> there are thousands of top
                                    experts, you can get access for free.
                                </p>
                                <a href="https://youtube.com/@owenahub"
                                    className="inline-block bg-[#FFE1BC] text-[#3D4D5C] rounded-xl px-6 py-2 font-bold hover:bg-gray-800 hover:text-white transition">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#FFFAED]">
                <section className="container mx-auto py-10">
                    <div>
                        <div className="text-center">
                            <div className="mb-6">
                                <h2 className="text-2xl lg:text-5xl font-normal">
                                    Get started <br className="hidden md:block" /> for free today
                                </h2>
                                <p className="my-3 text-sm text-gray-700">
                                    Our community awaits your grand entrance! <br /> Be part of an inspiring platform
                                </p>
                            </div>
                            <div>
                                <a href="/getstarted"
                                    className="inline-block bg-black text-white rounded-md shadow font-semibold text-xs px-4 py-2 hover:bg-gray-800 transition">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="bg-white py-8 text-gray-700" id="footer">
                <div className="container text-sm">
                    <div className="block md:flex justify-between items-center">
                        <div>
                            <div className="flex items-center space-x-2">
                                <img src="/images/logo.png" alt="..." className="w-6 h-6 relative top-[2px]" />
                                <div className="font-bold relative top-[3px]">OwenaHub</div>
                            </div>
                        </div>
                        <p className="mt-6 md:mt-0">
                            <span className="font-semibold">The Learner's Hub</span> <br />
                            <span className="text-xs"> Fostering global connections, leveraging experts <br /> to empower learners through mentorship.</span>
                        </p>
                    </div>
                    <hr className="my-8 border-gray-200" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3">
                        <div className="">
                            <h2 className="text-sm pb-2 font-semibold">SOCIALS</h2>
                            <a href="https://instagram.com/owenahub?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                                target="_blank"
                                className="flex items-center gap-2 hover:underline text-xs pb-2">
                                <Instagram size={14} className="inline-block" /> <span>Instagram</span>
                            </a>
                            <a href="https://x.com/owenahub?t=i4-Iz4K9RaKJ4vWP1QuLlA&s=08"
                                target="_blank"
                                className="flex items-center gap-2 hover:underline text-xs pb-2">
                                <Twitter size={14} className="inline-block" /> <span>Twitter</span>
                            </a>
                            <a href="https://www.facebook.com/owenahub?mibextid=ZbWKwL"
                                target="_blank"
                                className="flex items-center gap-2 hover:underline text-xs pb-2">
                                <Facebook size={14} className="inline-block" /> <span>Facebook</span>
                            </a>
                        </div>
                        <div>
                            <h2 className="text-sm pb-2 font-semibold">CONTACT</h2>
                            <a href="mailto:hello@owenahub.com"
                                className="block hover:underline text-xs pb-2">hello@owenahub.com</a>
                            <a href="mailto:ernest@owenahub.com"
                                className="block hover:underline text-xs pb-2">ernest@owenahub.com</a>
                            <a href="mailto:ernestharuna1@gmail.com"
                                className="block hover:underline text-xs pb-2">ernestharuna1@gmail.com</a>
                        </div>
                        <div>
                            <h2 className="text-sm pb-2 font-semibold">QUICK LINKS</h2>
                            <a href="/articles" className="block hover:underline text-xs pb-2">
                                OwenaHub Blog <i className="bi bi-arrow-right-short"></i>
                            </a>
                            <a href="{{ route('guest.slices.index') }}"
                                className="block hover:underline text-xs pb-2">
                                Slices: <span className="text-theme font-semibold">Swift Swips</span> <i className="bi bi-arrow-right-short"></i>
                            </a>
                            <a href="{{ route('user.session.index') }}"
                                className="block hover:underline text-xs pb-2">
                                Private Sessions <i className="bi bi-arrow-right-short"></i>
                            </a>
                        </div>
                        <div>
                            <h2 className="text-sm pb-2 font-semibold">COMMUNITIES</h2>
                            <a href="https://linkedin.com/company/owenahub"
                                className="block hover:underline text-xs pb-2">
                                LinkedIn Community <i className="bi bi-arrow-right-short"></i>
                            </a>
                            <a href="https://www.facebook.com/groups/896520008575738/?ref=share"
                                className="block hover:underline text-xs pb-2">
                                Facebook Community <i className="bi bi-arrow-right-short"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 block md:flex-row justify-between items-center text-xs text-gray-500">
                        <p className="m-0">&copy; 2025, OwenaHub. All Rights Reserved.</p>
                        <p className="m-0">
                            <a href="#" className="hover:underline">Privacy Policy</a> &middot;
                            <a href="#}" className="hover:underline">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
