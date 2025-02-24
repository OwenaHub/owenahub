import { Await, Link, redirect, useFetcher, useNavigate } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { ChevronLeft, Pencil, Trash } from "lucide-react";
import { CreateBite } from "./create-bite";
import { toast } from "~/hooks/use-toast";
import { Suspense } from "react";
import { createBite, getBites, getCourse } from "./mentor-courses";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "~/components/ui/alert-dialog"
import { Button } from "~/components/ui/button";

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
    const fetcher = useFetcher();
    const navigate = useNavigate();

    return (
        <section className="md:px-10 mt-10">
            <section>
                <div className="md:mt-20">
                    <div className="mb-4">
                        <Link to={"#"} onClick={() => navigate(-1)}
                            className="flex gap-1 text-xs items-center uppercase hover:underline hover:underline-offset-2">
                            <ChevronLeft size={18} strokeWidth={2} /> <span>Back</span>
                        </Link>
                    </div>
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
                                            <div key={bite.id} className="border rounded-lg p-3 gap-3">
                                                <div>
                                                    <h5 className="font-bold text-black mb-1 flex items-center justify-between">
                                                        <span>{bite.title}</span>
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <Trash size={18} className="text-destructive" />
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        Delete <span className="font-bold">
                                                                            {bite.title}.
                                                                        </span> This action cannot be undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <fetcher.Form
                                                                        method="POST"
                                                                        action={`/courses/bite/${bite.id}/delete`}
                                                                        className="rounded-full hover:bg-gray-100 cursor-pointer"
                                                                    >
                                                                        <Button
                                                                            type="submit"
                                                                            disabled={fetcher.state !== "idle"}
                                                                            className="bg-destructive text-white px-4 py-2 rounded-md"
                                                                        >
                                                                            Delete
                                                                        </Button>
                                                                    </fetcher.Form>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </h5>
                                                    <p className="text-sm">
                                                        <div className="font-light text-xs flex items-center gap-3">
                                                            <span>
                                                                {bite.description}
                                                            </span>
                                                            <Link to={`bite/${bite.id}/edit`} className="hover:bg-gray-100 rounded-full p-1">
                                                                <Pencil size={18} />
                                                            </Link>
                                                        </div>
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
