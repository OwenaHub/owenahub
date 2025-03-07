import { Form, Link, redirect } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { Clock, User } from "lucide-react";
import Tags from "~/components/custom/tags";

import { Button } from "~/components/ui/button"
import SharePage from "~/components/navigation/share-page";
import { getCourse } from "./get-course";
import EnrollSlice from "./enroll-slice";

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
    // console.log(slice);


    return (
        <section className="md:px-10 mt-10 animated fadeIn">
            <section>
                <div className="rounded-2xl md:mt-20 ">
                    <h1 className="text-2xl md:text-3xl text-secondary-foreground font-extrabold mb-5">
                        {slice.title}
                    </h1>

                    <p className="mt-2 max-w-3xl text-sm border-s-4 ps-4 mb-5">
                        {slice.about}
                    </p>

                    <div className="mb-5">
                        <Tags args={slice.tags} />
                    </div>

                    <div className="mt-5 flex gap-5 font-semibold text-sm">
                        <p className="flex items-center gap-1">
                            <User size={18} />
                            <span>OwenaHub</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <Clock size={18} />
                            <span>{slice.duration} weeks</span>
                        </p>
                    </div>
                </div>

                <hr className="my-10 bg-gray-50" />

                <div className="mb-10 flex flex-col md:flex-row md:items-start gap-8">
                    <div className="basis-8/12">
                        <div className="text-light">
                            <div dangerouslySetInnerHTML={{ __html: slice.overview }} />
                        </div>
                    </div>
                    <div className="p-4 border rounded-xl basis-4/12">
                        <div className="text-primary text-xl font-bold">
                            {slice.price ? (
                                <p className='flex items-center gap-3'>
                                    <span className='bg-secondary text-secondary-foreground rounded-lg px-3 py-0.5 flex items-center gap-2'>
                                        &#8358;{parseFloat(slice.price).toLocaleString()}
                                    </span>
                                    <span className="line-through font-normal text-gray-500">
                                        &#8358;{(parseInt(slice.price) + 4000).toLocaleString()}
                                    </span>
                                </p>
                            ) :
                                <p className='flex items-center gap-3'>
                                    <span className='bg-secondary text-secondary-foreground rounded-lg px-3 py-0.5 flex items-center gap-2'>
                                        <span className='font-bold'>₦0.00</span>
                                    </span>
                                    <span className="font-light text-secondary-foreground line-through">
                                        ₦{parseInt("8700").toLocaleString()}
                                    </span>
                                </p>
                            }
                        </div>

                        <hr className="my-5" />

                        {is_enrolled
                            ? <div>
                                <Button
                                    disabled
                                    variant="outline"
                                    className="w-full py-6 text-sm font-bold uppercase rounded-lg">
                                    Already enrolled
                                </Button>
                                <Link
                                    to={`/courses/${slice.id}/learn`}
                                    className="mt-3 inline-block text-blue-500 text-center text-xs font-light uppercase w-full hover:underline underline-offset-2">
                                    Go to course
                                </Link>
                            </div>

                            : <EnrollSlice sliceId={slice.id} price={slice.price} />
                        }
                    </div>
                </div>

                <div className="mb-10">
                    <SharePage />
                </div>

            </section>
        </section >

    )
}
