import { Link } from "react-router";
import { Album, ArrowRight, Briefcase, Check, Code, Facebook, Instagram, LaptopMinimalCheck, LayoutTemplate, MonitorIcon, Regex, SquareUserRound, Twitter, User, UserRound } from "lucide-react";
import Badge from "~/components/custom/badge";

const categories = [
    {
        title: "Web Development",
        icon: <LayoutTemplate size={15} />
    },
    {
        title: "Data & Algorithms",
        icon: <Code size={15} />
    },
    {
        title: "Development methodologies",
        icon: <Regex size={15} />
    },
    {
        title: "Career Development",
        icon: <Briefcase size={15} />
    },
]

const tracks = [
    {
        title: "Web develeopment: HTML & CSS",
        tutor: "Ernest Haruna",
        price: "FREE",
        level: "Beginner"
    },
    {
        title: "Web development: JavaScript",
        tutor: "Jacob Williams",
        price: "Paid",
        level: "Intermediate"
    },
    {
        title: "Web development: React & TypeScript",
        tutor: "James Arua",
        price: "Paid",
        level: "Upper intermediate"
    },
    {
        title: "Javascript: Master class ",
        tutor: "Ernest Haruna",
        price: "Paid",
        level: "Advanced"
    },
    {
        title: "Styling with Tailwind",
        tutor: "Abdulhameed",
        price: "FREE",
        level: "Intermediate"
    },
    {
        title: "Project Management: Scrum & Agile",
        tutor: "Yvonne Johnson",
        price: "FREE",
        level: "Beginner"
    },
    {
        title: "Data Structures & Algorithms",
        tutor: "Tanko Mahmood",
        price: "Paid",
        level: "Upper-intermediate"
    },
]

export default function HomePage() {
    return (
        <>
            <div className="bg-muted">
                <nav className="container py-10 flex items-center gap-2">
                    <img src="/images/logos/logo.png" width={25} />
                    <Link to="/" className="font-bold">OwenaHub</Link>
                </nav>
                <header className="py-6 lg:pt-10">
                    <section className="md:flex container items-center gap-20">
                        <div className="text-start md:text-start">
                            <h1 className="my-3 z-10 capitalize text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground">
                                Build your <br className="block md:hidden" />
                                career <br className="hidden md:block" /> with
                                <br className="block md:hidden" /> <span className="text-foreground">Expert mentors</span>
                            </h1>

                            <section className="flex flex-col gap-5 text-muted-foreground my-12">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-md p-1.5 bg-secondary">
                                        <Check size={14} strokeWidth={4} className="text-secondary-foreground" />
                                    </div>
                                    <h2>Learn online, from professionals</h2>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-md p-1.5 bg-secondary">
                                        <Check size={14} strokeWidth={4} className="text-secondary-foreground" />
                                    </div>
                                    <h2>Get results in 3 months</h2>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-md p-1.5 bg-secondary">
                                        <Check size={14} strokeWidth={4} className="text-secondary-foreground" />
                                    </div>
                                    <h2>A fraction of the cost of other platforms</h2>
                                </div>
                            </section>

                            <div className="z-10 flex flex-col md:flex-row items-center gap-5">
                                <Link to="/register" className="transition block md:inline-block text-center w-full md:w-max rounded-xl font-bold px-10 py-3 shadow-md text-[#FBE56D] bg-[#083156] hover:bg-gray-800">
                                    GET STARTED
                                </Link>
                                <Link to="#learn-more"
                                    className="block md:inline-block text-center w-full md:w-max rounded-xl font-bold px-10 py-3 outline outline-1 outline-[#083156] text-[#083156] bg-white hover:shadow-lg">
                                    Learn more
                                </Link>
                            </div>

                        </div>
                        <div className="hidden md:block me-14 flex-1">
                            <img
                                src="/images/personalised.png"
                                alt="..."
                                className="block mx-auto w-[440px] h-[440px]pointer-events-none"
                            />
                        </div>
                    </section>
                </header>
                <hr className="border-gray-200" />
                <section className="py-10 container">
                    <div className="mx-auto">
                        <div className="lg:flex items-center justify-between opacity-90">
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3">
                                <LaptopMinimalCheck className="text-[#39546A] opacity-50" size={40} />
                                <div>
                                    <strong className="block font-semibold text-lg text-[#4B4B4B]">Virtual Teams</strong>
                                    <p className="leading-tight text-[#76818B]">
                                        Join teams to work on <br className="hidden sm:inline" />
                                        real-life projects.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3">
                                <SquareUserRound className="text-[#39546A] opacity-50" size={40} />
                                <div>
                                    <strong className="block font-semibold text-lg text-[#4B4B4B]">Expert Sessions</strong>
                                    <p className="leading-tight text-[#76818B]">
                                        Connect With Skilled Mentors <br className="hidden sm:inline" />
                                        That Inspire You.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3">
                                <MonitorIcon className="text-[#39546A] opacity-50" size={40} />
                                <div>
                                    <strong className="block font-semibold text-lg text-[#4B4B4B]">Swift Sips</strong>
                                    <p className="leading-tight text-[#76818B]">
                                        Get into our short courses; <br className="hidden sm:inline" />
                                        compact and focused.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-2 my-8 lg:mx-4 lg:my-6 flex flex-row gap-3">
                                <Album className="text-[#39546A] opacity-50" size={40} />
                                <div>
                                    <strong className="block font-semibold text-lg text-[#4B4B4B]">Enriching Repository</strong>
                                    <p className="leading-tight text-[#76818B]">
                                        Access a Wealth of Informative Articles <br className="hidden sm:inline" />
                                        on our Blog.
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
                        <div className="lg:text-start pb-5">
                            <h2 className="text-gray-800 pb-2 font-bold text-3xl md:text-4xl">
                                Expand your skillset <br className="md:hidden" /> with <span className="text-primary">OwenaHub</span>.
                            </h2>
                            <p className="text-gray-500">
                                Find resources curated by our team for Tech Enthusiasts.
                            </p>
                        </div>

                        <section className="flex flex-wrap mb-20 items-center gap-2 whitespace-nowrap">
                            {categories.map((category, index) => (
                                <Badge
                                    key={index}
                                    icon={category.icon}
                                    title={category.title}
                                />
                            ))}
                        </section>

                        <section>
                            <div className="mx-auto max-w-2xl pb-10 sm:pb-16 lg:max-w-7xl">
                                <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
                                    {tracks.map((track, index) => (
                                        <div key={index} className="group p-2 relative border border-gray-200 border-b-4 rounded hover:border-b transition-all">
                                            <div className="aspect-square p-2 bg-slate-100 w-full roundedbg-slate-100 group-hover:opacity-75 lg:aspect-auto lg:h-36">
                                                <div className="min-h-full text-secondary-foreground flex flex-col justify-center font-semibold md:text-2xl">
                                                    {track.title}
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <div>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-1">
                                                            <div className="h-5 w-5 border rounded-full flex justify-center items-center">
                                                                <UserRound className="inline-block text-gray-400" size={16} />
                                                            </div>
                                                            <h4 className="text-sm text-gray-700">
                                                                <a href="https://forms.gle/JYjmF9iUcLjWHMor6" target="_blank" className="!text-xs md:text-sm">
                                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                                    {track.tutor}
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <p className="text-xs border border-primary bg-muted text-primary font-medium px-1 py-0.5 rounded-md">
                                                            {track.price}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500">{track.level}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="pb-20 lg:pb-9 container" id="learn-more">
                <div className="md:flex items-center justify-evenly gap-5 pt-5">
                    <div>
                        <img src="/images/personalised.png" alt="Personalized Learning" className="w-full" />
                    </div>

                    <div>
                        <div className="text-gray-800 pt-5 lg:px-4">
                            <div>
                                <h3 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
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

            <div className="container mb-16">
                <section className="bg-primary-foreground shadow-xl rounded-3xl mx-auto py-10">
                    <div>
                        <div className="text-center px-5">
                            <div className="mb-6 text-white">
                                <h2 className="text-2xl lg:text-4xl font-bold mb-5">
                                    Get started
                                </h2>
                                <p className="my-3 text-sm leading-loose">
                                    Sign up now and start acquiring in demand tech skills today. Start online anytime, anywhere. <br className="hidden md:block" />
                                    Fill out the form and have mentor reach out. Start your learning journey.
                                </p>
                            </div>
                            <div>
                                <a href="https://forms.gle/JYjmF9iUcLjWHMor6" target="_blank"
                                    className="inline-block w-full md:w-max bg-secondary-auxiliary text-black rounded-xl shadow font-bold px-6 py-3.5 hover:bg-gray-800 transition">
                                    GET STARTED
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="bg-gray-50 py-8 text-gray-700" id="footer">
                <div className="container text-sm">
                    <div className="block md:flex justify-between items-center">
                        <div>
                            <div className="flex items-center space-x-2">
                                <img src="/images/logos/logo.png" alt="..." className="w-6 h-6 relative top-[2px]" />
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
                        <div>
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
                                OwenaHub Blog
                            </a>
                            <a href="#"
                                className="block hover:underline text-xs pb-2">
                                Slices: <span className="text-theme font-semibold">Swift Swips</span>
                            </a>
                            <a href="#"
                                className="block hover:underline text-xs pb-2">
                                Private Sessions
                            </a>
                        </div>
                        <div>
                            <h2 className="text-sm pb-2 font-semibold">COMMUNITIES</h2>
                            <a href="https://linkedin.com/company/owenahub" target="_blank"
                                className="block hover:underline text-xs pb-2">
                                LinkedIn Community
                            </a>
                            <a href="https://www.facebook.com/groups/896520008575738/?ref=share" target="_blank"
                                className="block hover:underline text-xs pb-2">
                                Facebook Community
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 block md:flex-row justify-between items-center text-xs text-gray-500">
                        <p className="m-0">&copy; 2025, OwenaHub. All Rights Reserved.</p>
                        <p className="m-0">
                            <Link to="#" className="hover:underline">Privacy Policy</Link> &middot; {" "}
                            <Link to="#" className="hover:underline">Terms of Service</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
