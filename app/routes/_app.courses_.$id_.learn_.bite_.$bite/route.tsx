import { Form, redirect, useNavigate } from "react-router";
import type { Route } from "../_app.courses_.$id/+types/route";
import { createUserBite, getBite } from "../_app.courses/course";
import { ChevronLeft } from "lucide-react";
import { toast } from "~/hooks/use-toast";
import { Button } from "~/components/ui/button";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.id || !params.bite) throw new Error("Bad Request");

        const { bite } = await getBite(params.id, params.bite);

        return { bite };
    } catch ({ response }: any) {
        let message = response.data.error ??= "Something went wrong";
        toast({
            variant: 'warning',
            title: 'Content unavailable!',
            description: message
        })
        return redirect('/courses');
    }
}

export async function clientAction({ request, params }: Route.ClientActionArgs) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    console.log(credentials);

    try {
        const res = await createUserBite(credentials);
        console.log(res);
        toast({
            title: "Fantastic 🎊",
            description: "You've completed this bite, keep going!",
        })
        return redirect(`/courses/${params.id}/learn`);
    } catch ({ response }: any) {
        console.error(response);
        toast({
            variant: 'destructive',
            title: 'Something went wrong!',
            description: 'Oh well, try again later then'
        })
        const error: any = response?.data?.errors;
        return error;
    }

}

export default function CourseLearn({ loaderData }: Route.ComponentProps) {
    const { bite }: any = loaderData;
    const navigate = useNavigate();

    return (
        <section className="md:px-10 mt-10">
            <div className="md:mt-20 mb-8">
                <div className="flex md:flex-row flex-col gap-10 md:gap-4">
                    <div className="basis-5/6">
                        <div className="mb-4">
                            <button onClick={() => navigate(-1)} className="flex gap-1 text-xs items-center uppercase hover:underline hover:underline-offset-2">
                                <ChevronLeft size={18} strokeWidth={2} /> <span>Bites</span>
                            </button>
                        </div>
                        {bite
                            ? <>
                                <div className="mb-10">
                                    <h4 className="text-xl text-primary-foreground mb-3 font-bold">
                                        {bite.title}
                                    </h4>
                                    <p className="text-sm leading-tight px-2 py-4 border bg-gray-50 rounded-md">
                                        {bite.description}
                                    </p>
                                </div>

                                <div className="reader_content">
                                    <div dangerouslySetInnerHTML={{ __html: bite.content }} />
                                </div>

                                <div className="my-8">
                                    {bite.completed
                                        ? <Button
                                            disabled
                                            type="button"
                                            className="bg-secondary font-light w-full md:w-max px-6 rounded-full"
                                        >
                                            Completed
                                        </Button>
                                        : <Form method="POST">
                                            <input type="hidden" name="completed" value={1} />
                                            <input type="hidden" name="bite_id" value={bite.id} />
                                            <Button className="font-light w-full md:w-max px-6 rounded-full" variant="outline">
                                                Mark complete <span className="text-xs">🎉</span>
                                            </Button>
                                        </Form>
                                    }
                                </div>
                            </>
                            : <p className="text-gray-500 text-sm">No content available</p>
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
