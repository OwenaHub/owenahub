import { Link, redirect, useNavigate } from "react-router";
import type { Route } from "../_app.courses_.$id/+types/route";
import { getEnrolledCourse } from "../_app.courses/courses";
import { ChevronLeft } from "lucide-react";
import { toast } from "~/hooks/use-toast";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.id || !params.bite) throw new Error("Bad Request");

        const { bite, bite_list } = await getEnrolledCourse(params.id, params.bite);

        return { bite, bite_list };
    } catch ({ response }: any) {
        let message = response.data.error ??= "Something went wrong";
        toast({
            variant: 'warning',
            title: 'Content unavailable!',
            description: message
        })
        return redirect('/courses')
    }

}

export default function CourseLearn({ loaderData, params }: Route.ComponentProps) {
    const { bite, bite_list }: any = loaderData;

    const navigate = useNavigate();

    const handleBiteChange = (biteId: number) => {
        navigate(`/courses/${params.id}/learn/bite/${biteId}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="md:px-10 mt-10">
            <div className="md:mt-20 mb-8">
                <div className="flex md:flex-row flex-col gap-10 md:gap-4">
                    <div className="basis-2/3">
                        <div className="mb-4">
                            <Link to="/courses" className="flex gap-1 text-xs items-center uppercase hover:underline hover:underline-offset-2">
                                <ChevronLeft size={18} strokeWidth={2} /> <span>Courses</span>
                            </Link>
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
                                <div className="font-sans">
                                    <div dangerouslySetInnerHTML={{ __html: bite.content }} />
                                </div>
                            </>
                            : <p className="text-gray-500 text-sm">No content available</p>
                        }
                    </div>
                    <div className="basis-1/3">
                        <div className="border py-3 rounded-xl">
                            <h4 className="text-secondary-foreground uppercase text-lg border-b px-3 pb-2">
                                Lessons
                            </h4>
                            {bite_list.length
                                ? bite_list.map((item: any, index: number) => (
                                    <div
                                        key={item.position}
                                        className={`border-gray-200 p-3 cursor-pointer hover:text-secondary transition ${item.id === bite.id && "bg-secondary-foreground text-white hover:text-secondary"}`}
                                        onClick={() => handleBiteChange(index + 1)}
                                    >
                                        <h5 className="text-sm font-bold">
                                            {item.title}
                                        </h5>
                                        <p className="text-xs">{item.description}</p>
                                    </div>
                                ))
                                : <p className="text-sm text-gray-500 my-2 p-3">No lessons found</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
