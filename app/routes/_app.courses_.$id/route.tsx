import { Await, Form, Link, redirect } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { createBite, getBites, getCourse } from "../_app.courses/courses";
import { Clock, SquareChartGantt, User } from "lucide-react";
import { Suspense } from "react";
import { Button } from "~/components/ui/button";
import Tags from "~/components/custom/tags";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.id) throw new Error("Bad Request")
        const { slice, is_enrolled } = await getCourse(params.id);
        const bites = getBites(params.id);
        return { slice, bites, is_enrolled };
    } catch ({ response }: any) {
        return redirect('/courses')
    }
}

export default function ShowCourse({ loaderData }: Route.ComponentProps) {
    const { slice, bites, is_enrolled }: any = loaderData;

    return (
        <section className="md:px-10 mt-10">
            <section>
                <div className="py-10 px-5 mb-8 rounded-2xl md:mt-20 border border-sky-700 text-sky-900 bg-sky-100">
                    <h1 className="text-2xl md:text-3xl text-primary-foreground font-bold">
                        {slice.title}
                    </h1>
                    <p className="text-sm mt-2 leading-tight">
                        {slice.about}
                    </p>

                    <div className="mt-6 font-semibold text-sm">
                        <p className="flex items-center gap-1 mb-1">
                            <User size={18} />
                            <span>OwenaHub</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <Clock size={18} />
                            <span>{slice.duration} weeks</span>
                        </p>
                    </div>
                </div>
                {/* <hr className="my-5" /> */}

                <div className="mb-14 flex flex-col md:flex-row md:items-start gap-8">
                    <div className="basis-8/12">
                        <div className="font-bold mb-4">Course overview</div>
                        <div className="text-light">
                            {slice.overview}
                        </div>
                        <div className="mt-5">
                            <Tags args={slice.tags} />
                        </div>
                    </div>
                    <div className="p-4 border rounded-xl basis-4/12">
                        <div className="text-primary text-xl font-bold">
                            {slice.price ? (
                                <span className="">
                                    &#8358;{parseFloat(slice.price).toLocaleString()} {" "}
                                    <span className="line-through font-normal text-gray-500">
                                        &#8358;{(parseInt(slice.price) + 4000).toLocaleString()}
                                    </span>
                                </span>
                            ) : "FREE"}
                        </div>
                        <hr className="my-5" />
                        {is_enrolled
                            ? <Form
                                action={`/courses/enroll/${slice.id}`}
                                method="POST"
                            >
                                <Button
                                    disabled
                                    className="w-full py-6 text-sm font-bold uppercase rounded-lg"
                                >
                                    Already enrolled
                                </Button>
                            </Form>
                            : <Button className="w-full py-6 text-sm font-bold uppercase rounded-lg">
                                Enroll now
                            </Button>
                        }
                    </div>
                </div>

                <div className="mb-10">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-bold">
                            Course content
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
                        <Suspense fallback={<p className="text-gray-500 text-sm">Loading bites</p>}>
                            <Await resolve={bites}>
                                {(bites) => (
                                    bites.length ? (
                                        bites.map((bite: any) => (
                                            <div key={bite.id} className="border rounded-lg p-3 flex-1 flex items-center gap-3">
                                                <div>
                                                    <SquareChartGantt size={40} strokeWidth={1} />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-[#083156] mb-2">{bite.title}</h5>
                                                    <p className="text-sm">
                                                        <a href="tel:+2348026658956" className="font-bold text-sky-600 uppercase text-xs flex items-center gap-1">
                                                            <span>
                                                                {bite.description}
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 text-sm">No bites available</p>
                                    )
                                )}
                            </Await>
                        </Suspense>

                    </div>
                </div>

            </section>
        </section>

    )
}
