import { redirect, useSearchParams } from "react-router";
import type { Route } from "../_app.courses_.$id/+types/route";
import { getEnrolledCourse } from "../_app.courses/courses";

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

    return (
        <section className="md:px-10 mt-10">
            <div className="md:mt-20 mb-8">
                <div className="flex md:flex-row flex-col gap-10 md:gap-4">
                    <div className="basis-9/12">
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
                    </div>
                    <div className="basis-3/12">
                        <div className="border p-3 rounded-xl">
                            <h4 className="font-bold text-secondary-foreground">
                                All lessons
                            </h4>
                            {bite_list.length
                                ? bite_list.map((bite: any) => (
                                    <div key={bite.position} className="border-b border-gray-200 py-3 cursor-pointer">
                                        <h5 className="text-sm text-gray-500 mb-2">
                                            {bite.title}
                                        </h5>
                                        <p className="text-xs">{bite.description}</p>
                                    </div>
                                ))
                                : <p className="text-sm text-gray-500 mb-2">No lessons found</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
