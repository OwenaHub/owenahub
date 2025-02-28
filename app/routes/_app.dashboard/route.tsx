import { ChevronRight, Headset, SearchCheck } from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
    return [
        { title: "Dashboard | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export default function Home() {
    return (
        <section className="md:px-10 mt-10 animated fadeIn">
            <div className="md:flex items- justify-between gap-5 ">
                <div>
                    <div className="mb-8">
                        <h1 className="md:mt-20 text-xl md:text-2xl text-primary-foreground mb-3 font-bold">
                            Start your learning journey today!
                        </h1>
                        <p className="text-sm leading-7">
                            Join hundreds of students who have changed their lives with tech.
                        </p>
                    </div>

                    <Link to="/courses">
                        <Button className="bg-secondary-foreground text-white text-xs font-bold px-5 py-0 uppercase w-full md:w-max">
                            buy now
                        </Button>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <img
                        src="/images/get-access.png"
                        alt="Home Page Mockup"
                        className="object-cover w-4/5"
                    />
                </div>
            </div>

            <hr className="my-10" />

            <div>
                <div className="mb-5">
                    <h4 className="md:mt-20 text-xl text-primary-foreground mb-3 font-bold">
                        Not quite ready?
                    </h4>
                    <p className="text-sm leading-7">
                        No problem! Prepare with our collection of reference materials and practice exercises.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
                    <div className="border rounded-lg p-3 flex-1 flex items-center gap-3">
                        <div>
                            <Headset size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h5 className="font-bold text-[#083156] mb-2">Talk to a mentor</h5>
                            <p className="text-sm">
                                <a href="tel:+2348026658956" className="font-bold text-sky-600 uppercase text-xs flex items-center gap-1">
                                    <span>Make a call </span> <ChevronRight strokeWidth={3} size={12} />
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-lg p-3 flex-1 flex items-center gap-3">
                        <div>
                            <SearchCheck size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h5 className="font-bold text-[#083156] mb-2">Learn about the program</h5>
                            <p className="text-sm">
                                <a href="https://youtu.be/hBDECFvIk8w?si=G_1qfFhyCYJWwVv8" className="font-bold text-sky-600 uppercase text-xs flex items-center gap-1">
                                    <span>Learn more </span> <ChevronRight strokeWidth={3} size={12} />
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
