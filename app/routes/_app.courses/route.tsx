import { Await, Link, useOutletContext, type MetaFunction } from 'react-router';
import { IsAdmin } from '~/components/permissions/admin';
import type { Route } from '../_app.courses/+types/route';
import { getCourses, getEnrolledCourses } from './courses';
import Tags from '~/components/custom/tags';
import useSession from '~/lib/session';
import { getCreatedCourses } from '../_app.courses_.my_.$id/mentor-courses';
import { Suspense } from 'react';
import { SquareChartGantt } from 'lucide-react';
import { truncateText } from '~/lib/texts';
import { STORAGE_URL } from '~/lib/utils';
import { formatRelativeDate } from '~/components/time-pipes/relative-date';

export const meta: MetaFunction = () => {
    return [
        { title: "Courses | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    const { getUserType } = useSession();
    try {
        const enrolledSlices = await getEnrolledCourses();

        const slices = getCourses();

        const role = await getUserType();
        const mentorSlices = role === "admin" ? getCreatedCourses() : null;

        return { mentorSlices, slices, enrolledSlices };
    } catch ({ response }: any) {
        console.log(response);
        return;
    }
}

export default function Courses({ loaderData }: Route.ComponentProps) {
    const user: User = useOutletContext();
    const { mentorSlices, slices, enrolledSlices }: any = loaderData;

    return (
        <section className="md:px-10 mt-10">
            <section>
                <div className=" md:mt-20 mb-8 flex justify-between items-start">
                    <div>
                        <h4 className="text-xl text-primary-foreground mb-3 font-bold">
                            Courses
                        </h4>
                        <p className="text-sm leading-7">
                            Here are coureses you have enrolled in
                        </p>
                    </div>

                    <IsAdmin user={user}>
                        <Link
                            to={"create"}
                            className='py-2 bg-secondary text-secondary-foreground px-6 rounded-md font-bold uppercase text-xs hover:opacity-50 transition'
                        >
                            Create
                        </Link>
                    </IsAdmin>
                </div>
                <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-3">
                    {enrolledSlices.length
                        ? (
                            enrolledSlices.map((enrolled: any) => (
                                <div key={enrolled.id} className="border rounded-lg p-3 flex-1 flex items-center gap-3">
                                    <div>
                                        <SquareChartGantt size={40} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-[#083156] mb-2">{enrolled.slice.title}</h5>
                                        <p className="text-sm">
                                            <Link to={`${enrolled.slice_id}/learn/bite/1`} className="font-normal text-gray-600 text-xs flex items-center gap-1">
                                                <span>
                                                    {formatRelativeDate(enrolled.slice.start_date)} •
                                                </span>
                                                <span className='font-medium underline underline-offset-1 text-blue-600'>
                                                    continue
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            ))
                        )
                        : <p className="text-gray-500 text-sm border px-3 py-1.5 w-max rounded">You haven't enrolled in any slices</p>
                    }
                </div>
            </section>

            <hr className="my-10" />

            <IsAdmin user={user}>
                <div className='mb-10 md:mb-0'>
                    <div className="mb-5">
                        <h4 className="md:mt-20 text-xl text-primary-foreground mb-3 font-bold">
                            Your courses
                        </h4>
                        <p className="text-sm leading-7">
                            Here are courses you have created on OwenaHub
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl pb-5 sm:pb-16 lg:max-w-7xl">
                        <Suspense fallback={<p className="text-gray-500 text-sm">Loading your courses...</p>}>
                            <Await resolve={mentorSlices}>
                                {(mentorSlices) => (
                                    <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-3">
                                        {(mentorSlices ?? []).map((slice: Slice, index: number) => (
                                            <div key={index} className="group p-2 relative border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                                                <div className="mb-1 aspect-video bg-slate-50 w-full rounded group-hover:opacity-75 lg:aspect-video">
                                                    <img
                                                        src={slice.image_path
                                                            ? `${STORAGE_URL}/${slice.image_path}`
                                                            : "/images/banners/default-course-img.png"}
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                                <div className="py-2">
                                                    <div className='mb-2'>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center gap-1">
                                                                <h4 className="text-sm text-gray-700">
                                                                    <Link to={`my/${slice.id}`} className="!text-sm md:text-sm font-bold">
                                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                                        {slice.title}
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                            <p className="text-sm text-sky-800 font-bold px-1 py-0.5 rounded-md">
                                                                {slice.price ? `₦${parseInt(slice.price).toLocaleString()}` : "FREE"}
                                                            </p>

                                                        </div>
                                                        <div className="text-light text-xs mb-1">
                                                            {truncateText(slice.about)}
                                                        </div>
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        <Tags args={slice.tags} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Await>
                        </Suspense>
                    </div>
                </div>
            </IsAdmin>

            <div>
                <div className="mb-5">
                    <h4 className="md:mt-20 text-xl text-primary-foreground mb-3 font-bold">
                        Suggested courses?
                    </h4>
                    <p className="text-sm leading-7">
                        Here are courses you have created on OwenaHub
                    </p>
                </div>

                <div className="mx-auto max-w-2xl pb-5 sm:pb-16 lg:max-w-7xl">
                    <Suspense fallback={<p className="text-gray-500 text-sm">Loading suggested courses...</p>}>
                        <Await resolve={slices}>
                            {(slices) => (
                                <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-3">
                                    {slices.length
                                        ? slices.map((slice: Slice, index: number) => (
                                            <div key={index} className="group p-2 relative border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                                                <div className="mb-1 aspect-video bg-slate-50 w-full rounded group-hover:opacity-75 lg:aspect-video">
                                                    <img
                                                        src={slice.image_path
                                                            ? `${STORAGE_URL}/${slice.image_path}`
                                                            : "/images/banners/default-course-img.png"}
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                                <div className="py-2">
                                                    <div className='mb-2'>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center gap-1">
                                                                <h4 className="text-sm text-gray-700">
                                                                    <Link to={slice.id} className="!text-sm md:text-sm font-bold">
                                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                                        {slice.title}
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                            <p className="text-sm text-sky-800 font-bold px-1 py-0.5 rounded-md">
                                                                {slice.price ? `₦${parseInt(slice.price).toLocaleString()}` : "FREE"}
                                                            </p>
                                                        </div>
                                                        <div className="text-light text-xs mb-1">
                                                            {truncateText(slice.about)}
                                                        </div>
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        <Tags args={slice.tags} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : <p className="text-gray-500 text-sm border px-3 py-1.5 w-max rounded">Nothing here yet</p>
                                    }
                                </div>
                            )}
                        </Await>
                    </Suspense>
                </div>

            </div>
        </section >
    )
}
