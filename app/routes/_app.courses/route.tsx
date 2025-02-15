import { UserRound } from 'lucide-react';
import { Link, useOutletContext, type MetaFunction } from 'react-router';
import { IsAdmin } from '~/components/permissions/admin';
import { Button } from '~/components/ui/button';

const tracks = [
    {
        title: "Web develeopment: HTML & CSS",
        tutor: "Ernest Haruna",
        price: "FREE",
        level: "Beginner"
    },
    {
        title: "Web development: JavaScript",
        tutor: "Jacob Williams",
        price: "N9,200",
        level: "Intermediate"
    },
    {
        title: "Web development: React & TypeScript",
        tutor: "James Arua",
        price: "10,000",
        level: "Upper intermediate"
    },
    {
        title: "Javascript: Master class ",
        tutor: "Ernest Haruna",
        price: "Paid",
        level: "Advanced"
    },
    {
        title: "Styling with Tailwind",
        tutor: "Abdulhameed",
        price: "FREE",
        level: "Intermediate"
    },
    {
        title: "Project Management: Scrum & Agile",
        tutor: "Yvonne Johnson",
        price: "FREE",
        level: "Beginner"
    },
    {
        title: "Data Structures & Algorithms",
        tutor: "Tanko Mahmood",
        price: "12,500",
        level: "Upper-intermediate"
    },
];

export const meta: MetaFunction = () => {
    return [
        { title: "Courses | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export default function Courses() {
    const user: User = useOutletContext();
    console.log(user);

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
                        {tracks.map((track, index) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
