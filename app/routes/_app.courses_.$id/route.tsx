import { Form, redirect } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { getCourse } from "../_app.courses/courses";
import { Clock, Share2, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import Tags from "~/components/custom/tags";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.id) throw new Error("Bad Request")
        const { slice, is_enrolled } = await getCourse(params.id);
        return { slice, is_enrolled };
    } catch ({ response }: any) {
        return redirect('/courses')
    }
}

export default function ShowCourse({ loaderData }: Route.ComponentProps) {
    const { slice, is_enrolled }: any = loaderData;

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

                <div className="mb-10 flex flex-col md:flex-row md:items-start gap-8">
                    <div className="basis-8/12">
                        <div className="font-bold mb-4 text-xl">
                            Course overview
                        </div>
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
                            ? <Button
                                disabled
                                className="w-full py-6 text-sm font-bold uppercase rounded-lg">
                                Already enrolled
                            </Button>

                            : <Form
                                action={`/courses/enroll/${slice.id}`}
                                method="POST">
                                <Button className="w-full py-6 text-sm font-bold uppercase rounded-lg">
                                    Enroll now
                                </Button>
                            </Form>
                        }
                    </div>
                </div>

                <div className="mb-10">
                    <Button className="flex items-center gap-1 rounded-full w-full md:w-max px-6 py-5" variant={"outline"}>
                        <Share2 /> <span>Share this course</span>
                    </Button>
                </div>

            </section>
        </section >

    )
}
