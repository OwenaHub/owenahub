import { Await, Link, redirect } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { SquareChartGantt } from "lucide-react";
import { CreateBite } from "./create-bite";
import { toast } from "~/hooks/use-toast";
import { Suspense } from "react";
import { createBite, getBites, getCourse } from "./mentor-courses";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.id) throw new Error("Bad Request")
        const slice = await getCourse(params.id);
        const bites = getBites(params.id);
        return { slice, bites };
    } catch ({ response }: any) {
        return redirect('/courses')
    }
}

export async function clientAction({ request }: Route.ClientActionArgs) {
    const formData = Object.fromEntries(await request.formData());
    try {
        await createBite(formData);
        toast({
            variant: 'default',
            description: 'Slice created successfully!'
        })
        return redirect(`/courses/my/${formData.slice_id}`)
    } catch ({ response }: any) {
        const error: any = response?.data?.error;
        return error;
    }

}

export default function ShowCourse({ loaderData, actionData }: Route.ComponentProps) {
    const { slice, bites }: any = loaderData;
    const error = actionData;

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

                <div className="px-4 py-4 mb-14 rounded-lg bg-gray-50 shadow">
                    <div className="mb-3">
                        <div className="font-bold mb-1">Course price</div>
                        <div className="text-light text-sm">
                            {slice.price ? `₦${parseInt(slice.price).toLocaleString()}` : "FREE"}
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
                            <div dangerouslySetInnerHTML={{ __html: slice.overview }} />
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-base md:text-2xl text-gray-600 font-bold">
                            Course Bites
                        </h2>
                        <CreateBite
                            slice={slice}
                            error={error}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-3">
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
