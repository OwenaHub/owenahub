import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Classes | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export default function Clases() {
    return (
        <section className="md:px-10 mt-10">
            <section>
                <h1 className="md:mt-20 text-xl md:text-2xl text-primary-foreground mb-3 font-bold">
                    Classes
                </h1>
                <p className="py-7 text-sm text-gray-500 ">
                    No upcoming classes yet
                </p>
            </section>
            <hr className="my-10" />

            <section>
                <div className="mb-5">
                    <h4 className="md:mt-20 text-xl text-primary-foreground mb-5 font-bold">
                        These courses are available
                    </h4>
                    <p className="text-sm leading-7">
                        No problem! Prepare with our collection of reference materials and practice exercises.
                    </p>
                </div>
                <div className='border rounded-lg pb-10'>
                    <div className="p-5">
                        <h2 className='text-xl font-medium text-secondary-foreground'>Getting started</h2>
                    </div>
                    <div className="p-5 text-sm border-t">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum explicabo ullam dolorem, architecto laudantium possimus nobis obcaecati labore vitae, porro minus adipisci magni odit. Excepturi officiis quibusdam accusantium facilis! Quod ipsa sit pariatur fuga non recusandae provident nihil? Natus saepe rerum libero alias eum? Libero officia a et eaque.
                    </div>
                    <div className="px-5">
                        <Link to="/courses" className="inline-block rounded-md px-6 py-2 text-sm font-bold bg-[#F0FAFF] border border-[#2285D0] text-secondary-foreground uppercase hover:bg-white transition">
                            To Courses
                        </Link>
                    </div>
                </div>
            </section>

        </section>
    )
}
