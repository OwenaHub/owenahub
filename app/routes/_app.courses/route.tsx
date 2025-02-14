import { UserRound } from 'lucide-react';
import type { MetaFunction } from 'react-router';


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
        price: "Paid",
        level: "Intermediate"
    },
    {
        title: "Web development: React & TypeScript",
        tutor: "James Arua",
        price: "Paid",
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
        price: "Paid",
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
    return (
        <section className="md:px-10 mt-10">
            <section>
                <h1 className="md:mt-20 text-xl md:text-2xl text-primary-foreground mb-3 font-bold">
                    Courses
                </h1>
                <p className="py-7 text-sm text-gray-500 ">
                    You aren't enrolled in any courses
                </p>
            </section>
            <hr className="my-10" />
            <div>
                <div className="mx-auto max-w-2xl pb-10 sm:pb-16 lg:max-w-7xl">
                    <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
                        {tracks.map((track, index) => (
                            <div key={index} className="group p-2 relative border border-gray-200 border-b-4 rounded hover:border-b transition-all">
                                <div className="aspect-square p-2 bg-slate-100 w-full roundedbg-slate-100 group-hover:opacity-75 lg:aspect-auto lg:h-36">
                                    <div className="min-h-full text-secondary-foreground flex flex-col justify-center font-semibold md:text-xl">
                                        {track.title}
                                    </div>
                                </div>
                                <div className="py-2">
                                    <div>
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
                                            <p className="text-xs border border-primary bg-muted text-primary font-medium px-1 py-0.5 rounded-md">
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
