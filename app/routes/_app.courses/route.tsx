import { Link, redirect, useOutletContext, type MetaFunction } from 'react-router';
import { IsAdmin } from '~/components/permissions/admin';
import type { Route } from '../_app.courses/+types/route';
import { getCreatedCourses } from './courses';
import { toast } from '~/hooks/use-toast';
import { ToastAction } from '~/components/ui/toast';
import Tags from '~/components/custom/tags';

export const meta: MetaFunction = () => {
    return [
        { title: "Courses | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    try {
        const { slices } = await getCreatedCourses();
        console.log(slices)
        return { slices }
    } catch ({ response }: any) {
        toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "Reload this page, or try logging in again",
            action:
                <ToastAction altText="Report issue" className='text-sm' onClick={() => window.location.reload()}>
                    Refresh
                </ToastAction>,
        })
        return redirect('/');
    }
}

export default function Courses({ loaderData }: Route.ComponentProps) {
    const user: User = useOutletContext();
    const { slices } = loaderData;

    return (
        <section className="md:px-10 mt-10">
            <section>
                <div className=" md:mt-20 flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl text-primary-foreground font-bold">
                        Courses
                    </h1>

                    <IsAdmin user={user}>
                        <Link
                            to={"create"}
                            className='py-2 bg-secondary text-secondary-foreground px-6 rounded-md font-bold uppercase text-xs hover:opacity-50 transition'
                        >
                            Create
                        </Link>
                    </IsAdmin>
                </div>
                <p className="py-7 text-sm text-gray-500 ">
                    You aren't enrolled in any courses
                </p>
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
                        <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
                            {slices.map((slice: Slice, index: number) => (
                                <div key={index} className="group p-2 relative border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                                    <div className="mb-1 aspect-video bg-slate-50 w-full rounded group-hover:opacity-75 lg:aspect-video">
                                        <img
                                            src={slice.image_path ? slice.image_path : "/images/banners/default-course-img.png"}
                                            className="max-w-full object-fill"
                                        />
                                    </div>
                                    <div className="py-2">
                                        <div className='mb-2'>
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-1">
                                                    <h4 className="text-sm text-gray-700">
                                                        <Link to={slice.id} className="!text-sm md:text-sm font-bold">
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            {slice.title}
                                                        </Link>
                                                    </h4>
                                                </div>
                                                <p className="text-xs text-sky-800 font-bold px-1 py-0.5 rounded-md">
                                                    {slice.price.toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="text-light text-xs mb-1">
                                                {slice.about}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            <Tags args={slice.tags} />
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </IsAdmin>

            <div>
                <div className="mb-5">
                    <h4 className="md:mt-20 text-xl text-primary-foreground mb-3 font-bold">
                        Suggested courses?
                    </h4>
                    <p className="text-sm leading-7">
                        Enroll into our collection of courses and practice exercises.
                    </p>
                </div>
                <div className="mx-auto max-w-2xl pb-10 sm:pb-16 lg:max-w-7xl">
                    <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
                        <p className="text-sm leading-7">
                            ____
                        </p>
                        {/* <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
                        {slices ? slices.map((track, index) => (
                            <div key={index} className="group p-2 relative border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                                <div className="mb-1 aspect-video p-2 bg-slate-50 w-full rounded group-hover:opacity-75 lg:aspect-auto lg:h-36">
                                    <div className="min-h-full text-gray-700 flex flex-col justify-center font-semibold text-2xl md:text-xl">
                                        {track.title}
                                    </div>
                                </div>
                                <div className="py-2">
                                    <div className='mb-2'>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <div className="h-5 w-5 rounded-full flex justify-center items-center">
                                                    <UserRound className="inline-block text-gray-400" size={16} />
                                                </div>
                                                <h4 className="text-sm text-gray-700">
                                                    <a href="https://forms.gle/JYjmF9iUcLjWHMor6" target="_blank" className="!text-xs md:text-sm">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {track.tutor}
                                                    </a>
                                                </h4>
                                            </div>
                                            <p className="text-xs text-sky-800 font-bold px-1 py-0.5 rounded-md">
                                                {track.price}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">{track.level}</p>
                                </div>
                            </div>
                        )) : (
                            <p className="text-sm leading-7">
                                No courses found. Please check back later.
                            </p>
                        )} */}
                    </div>
                </div>
            </div>
        </section >
    )
}
