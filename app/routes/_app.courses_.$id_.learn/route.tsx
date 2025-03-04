import { redirect } from 'react-router';
import { toast } from '~/hooks/use-toast';
import type { Route } from '../_app.courses_.$id_.learn/+types/route';
import { Link } from 'react-router';
import { truncateText } from '~/lib/texts';
import { ChevronLeft, CircleCheck } from 'lucide-react';
import { getBites } from './get-bites';

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.id) throw new Error("Bad Request");

        const { bites, slice } = await getBites(params.id);

        return { bites, slice };
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

export default function SliceBites({ loaderData }: Route.ComponentProps) {
    const { bites, slice }: { bites: Bite[], slice: Slice } = loaderData;

    return (
        <section className="md:px-10 mt-10 pb-8">
            <div className="md:mt-20 mb-8">
                <div>
                    <h4 className="text-xl text-primary-foreground mb-3 font-bold">
                        {slice.title}
                    </h4>
                    <p className="text-sm leading-snug text-gray-600">
                        {slice.about}
                    </p>
                </div>
            </div>

            <hr className='my-8' />

            <div className="mb-6">
                <Link to="/courses" className="flex gap-1 text-xs items-center uppercase hover:underline hover:underline-offset-2">
                    <ChevronLeft size={18} strokeWidth={2} /> <span>Courses</span>
                </Link>
            </div>

            <div className="flex flex-col gap-4">
                {bites.length
                    ? (bites.map((bite: Bite, index: number) => (
                        <div key={bite.id} className="border border-b-2 relative rounded-lg p-3 flex items-center justify-between hover:top-[1px] hover:border-b transition-all">
                            <div className="flex items-start gap-5">
                                <div className='text-2xl text-foreground font-light'>
                                    {index + 1}
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#083156] mb-1">{bite.title}</h5>
                                    <p className="text-sm">
                                        <Link to={`bite/${index + 1}`} className="font-normal text-gray-600 text-xs flex items-center gap-1">
                                            {truncateText(bite.description, 50)}
                                            <span aria-hidden="true" className="absolute inset-0" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    {bite.completed
                                        ? <div className='bg-green-200 rounded-full'>
                                            <CircleCheck
                                                className="text-white bg-green-0 fill-green-500 rounded-full p-1"
                                                strokeWidth={1}
                                                size={40}
                                            />
                                        </div>

                                        : <CircleCheck
                                            className="text-foreground rounded-full p-1"
                                            strokeWidth={1}
                                            size={40}
                                        />}
                                </div>
                            </div>
                        </div>
                    )))
                    : <p className="text-gray-500 text-sm py-1.5 w-max rounded">Nothing here yet</p>
                }
            </div>
        </section >
    )
}
