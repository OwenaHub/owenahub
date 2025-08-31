import { Link } from "react-router";
import type { Route } from "../_guest._index/+types/route";
import { BrMd } from "~/components/utility/line-break";
import { Button } from "~/components/ui/button";
import { ArrowRight, Music, Piano, Shapes } from "lucide-react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"

export default function Home(_: Route.ComponentProps) {
    return (
        <div className="fadeIn animated">
            <div className="relative isolate px-6 pt-5 lg:px-8 -z-10">
                <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-100 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>

            <header>
                <section className="container my-16 flex flex-col gap-16">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold md:leading-13 text-primary tracking-tighter">
                            <span className="font-light text-xl md:text-3xl tracking-tight">Welcome to</span>
                            <br /> <span className="text-[#F6A700]">Owenahub Collective:</span> <br />
                            Where Passions Converge
                        </h1>
                        <p className="text-primary text-sm md:text-base mt-5 leading-6">
                            {/* Your gateway to a world of opportunities in technology, arts, and culture. <BrMd />    */}
                            We are a home for lifelong learners, innovators, and creators <BrMd /> who are committed to both their professional and personal growth.
                        </p>
                    </div>

                    <div className="text-center flex flex-col md:flex-row gap-5 w-full md:w-max mx-auto">
                        <Link to="#products">
                            <Button className="w-full bg-[#3A3546] md:w-max mx-auto py-6 px-10 rounded-4xl">
                                Get Started
                            </Button>
                        </Link>


                        <Dialog>
                            <div>
                                <DialogTrigger asChild>
                                    <Button variant={"outline"} className="w-full md:w-max mx-auto py-6 px-10  rounded-4xl">
                                        Contact Us
                                    </Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[525px] rounded-4xl">
                                    <DialogHeader>
                                        <DialogTitle>Contact OwenaHub</DialogTitle>
                                        <DialogDescription>
                                            All eamils are sent directly to our Founder or the Support Team
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col gap-2">
                                        <a href="mailto:ernest@owenahub.com" className="border py-4 px-6 rounded-lg hover:bg-gray-50 transition">
                                            <small className="text-xs font-light">EMAIL</small>
                                            <span className="block">ernest@owenahub.com</span>
                                        </a>
                                        <a href="mailto:support@owenahub.com" className="border py-4 px-6 rounded-lg hover:bg-gray-50 transition">
                                            <small className="text-xs font-light">EMAIL</small>
                                            <span className="block">support@owenahub.com</span>
                                        </a>
                                        <a href="tel:+2348026658956" className="border py-4 px-6 rounded-lg hover:bg-gray-50 transition">
                                            <small className="text-xs font-light">PHONE</small>
                                            <span className="block">Phone Call</span>
                                        </a>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline" className="rounded-full py-4">
                                                Ok, Thanks!
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </div>
                        </Dialog>
                    </div>
                </section>
            </header>

            <main className="bg-[#F1F2F9] py-18">
                <div className="container" id="products">
                    <div className="text-center">
                        <h2 className="font-medium mb-5 tracking-tight text-2xl md:text-3xl">
                            Tools of Innovation and Cultural Development
                        </h2>
                        <p className="font-light text-base md:text-lg">
                            Gain access to use our technologies
                        </p>
                    </div>

                    <div className="flex gap-6 flex-col lg:flex-row items-stretch justify-center mt-18">
                        <div className="flex-1 rounded-2xl bg-white p-8 flex flex-col gap-10 hover:shadow-xl transition relative overflow-hidden">
                            <div className="flex flex-col gap-2">
                                <small>
                                    OwenaHub <span className="text-[#f6a700]">SkillSprint</span>
                                </small>
                                <h3 className="font-medium tracking-tight text-2xl">Skill Sprint</h3>
                                <div>
                                    {["Learn", "Build", "Mentor", "Tech"].map((item, index) => (
                                        <span
                                            key={item + index}
                                            className="text-nowrap px-3 py-1 mr-1 border border-gray-200 text-xs font-light rounded-full hover:bg-gray-50"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="https://skillsprint.owenahub.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground flex gap-3 items-center"
                            >
                                <Button variant={"ghost"} size={"sm"} className="p-0 border text-slate-400 text-xs">
                                    Join 100+ Learners  <ArrowRight />
                                </Button>
                            </a>

                            <Shapes className="absolute opacity-70 -right-10 -bottom-8 h-40 w-40 text-[#f6a700]" strokeWidth={1} />
                        </div>
                        <div className="flex-1 rounded-2xl bg-white p-8 flex flex-col gap-10 hover:shadow-xl transition relative overflow-hidden">
                            <div className="flex flex-col gap-2">
                                <small>
                                    OwenaHub <span className="text-[#625df5]">AriaPass</span>
                                </small>
                                <h3 className="font-medium tracking-tight text-2xl">AriaPass</h3>
                                <div>
                                    {["Opera", "Choral", "Music", "Events"].map((item, index) => (
                                        <span
                                            key={item + index}
                                            className="text-nowrap px-3 py-1 mr-1 border border-gray-200 text-xs font-light rounded-full hover:bg-gray-50"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="https://ariapass.owenahub.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground flex gap-3 items-center"
                            >
                                <Button variant={"ghost"} size={"sm"} className="p-0 border text-slate-400 text-xs">
                                    Find Events  <ArrowRight />
                                </Button>
                            </a>
                            <Piano className="absolute opacity-70 -right-10 -bottom-8 h-40 w-40 text-[#625DF5]" strokeWidth={1} />
                        </div>

                        <div className="flex-1 rounded-2xl bg-white p-8 flex flex-col gap-10 hover:shadow-xl transition relative overflow-hidden">
                            <div className="flex flex-col gap-2">
                                <small>
                                    OwenaHub <span className="text-[#439775]">Music</span>
                                </small>
                                <h3 className="font-medium tracking-tight text-2xl">Music Education</h3>
                                <div>
                                    {["Theory", "Certifications", "Play", "Master Music"].map((item, index) => (
                                        <span
                                            key={item + index}
                                            className="text-nowrap px-3 py-1 mr-1 border border-gray-200 text-xs font-light rounded-full hover:bg-gray-50"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <Button variant={"ghost"} size={"sm"} className="p-0 border text-slate-400 text-xs">
                                    Learn Music  <ArrowRight />
                                </Button>
                            </div>

                            <Music className="absolute opacity-50 -right-6 -bottom-8 h-40 w-40 text-[#439775" strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

