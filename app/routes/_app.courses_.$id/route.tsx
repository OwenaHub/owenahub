import { Link, redirect } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { getCourse } from "../_app.courses/courses";
import { Button } from "~/components/ui/button";
import { ChevronRight, Headset, SearchCheck } from "lucide-react";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.id) throw new Error("Bad Request")
        const slice = await getCourse(params.id);
        return { slice };
    } catch ({ response }: any) {
        console.log(response);
        return redirect('/courses')
    }
}

export default function ShowCourse({ loaderData }: Route.ComponentProps) {
    const { slice }: any = loaderData;

    return (
        <section className="md:px-10 mt-10">
            <section>
                <div className="md:mt-20">
                    <p className="text-sm rounded-md w-max mb-4 border border-sky-700 text-sky-900 px-2 bg-sky-100">
                        <Link to="/courses">Your slices </Link> / {slice.title}
                    </p>
                    <h1 className="text-xl md:text-2xl text-primary-foreground font-bold">
                        {slice.title}
                    </h1>
                </div>
                <p className="text-sm text-gray-500 ">
                    {slice.about}
                </p>
                <hr className="my-5" />

                <div className="px-4 py-2 mb-10 rounded-lg bg-gray-100 shadow">
                    <div className="mb-3">
                        <div className="font-bold mb-1">Course price</div>
                        <div className="text-light text-sm">
                            {slice.price} Weeks
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="font-bold mb-1">Course duration</div>
                        <div className="text-light text-sm">
                            {slice.duration} Weeks
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="font-bold mb-1">Course overview</div>
                        <div className="text-light text-sm">
                            {slice.overview}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-base md:text-2xl text-gray-600 font-bold">
                            Course Bites
                        </h2>
                        <Button variant="outline" className="uppercase text-xs">
                            Add a bite
                        </Button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
                        <div className="border rounded-lg p-3 flex-1 flex items-center gap-3">
                            <div>
                                <Headset size={40} strokeWidth={1} />
                            </div>
                            <div>
                                <h5 className="font-bold text-[#083156] mb-2">Talk to a today</h5>
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
                                    <Link to="#" className="font-bold text-sky-600 uppercase text-xs flex items-center gap-1">
                                        <span>Learn more </span> <ChevronRight strokeWidth={3} size={12} />
                                    </Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </section>

    )
}
