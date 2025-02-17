import { Link, redirect, useLocation, useNavigate } from "react-router";
import type { Route } from "../_app.courses_.$id/+types/route";
import { getEnrolledCourse } from "../_app.courses/courses";
import { ChevronLeft } from "lucide-react";

export async function clientLoader({ params, request }: Route.ClientLoaderArgs) {
    const url = new URL(request.url);

    const searchParams = new URLSearchParams(url.search);

    const bite_index = searchParams.get("bite");

    try {
        if (!params.id || !bite_index) throw new Error("Bad Request");

        const { bite, bite_list } = await getEnrolledCourse(params.id, bite_index);

        return { bite, bite_list };
    } catch ({ response }: any) {
        return redirect('/courses')
    }

}

export default function CourseLearn({ loaderData }: Route.ComponentProps) {
    const { bite, bite_list }: any = loaderData;
    console.log(bite);


    const navigate = useNavigate();
    const location = useLocation();

    const handleBiteChange = (biteId: number) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("bite", biteId.toString());
        navigate(`${location.pathname}?${searchParams.toString()}`);

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
                                    <p className="text-sm leading-7">
                                        {bite.description}
                                    </p>
                                </div>
                                <div>
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
                                            {bite.title}
                                        </h5>
                                        <p className="text-xs">{bite.description}</p>
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
