import { Link } from 'react-router'
import Rating from '~/components/custom/rating'
import Tags from '~/components/custom/tags'
import { truncateText } from '~/lib/texts'
import { STORAGE_URL } from '~/lib/utils'

export default function Slices({ slices, mentorProfile }: { slices: Slice[], mentorProfile?: boolean }) {
    return (
        <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-3">
            {slices.length
                ? slices.map((slice: Slice) => (
                    <SliceCard
                        slice={slice}
                        mentorProfile={mentorProfile}
                        key={slice.id}
                    />
                ))
                : <p className="text-gray-500 text-sm border px-3 py-1.5 w-max rounded">Nothing here yet</p>
            }
        </div>
    )
}

function SliceCard({ slice, mentorProfile }: { slice: Slice, mentorProfile?: boolean }) {
    return (
        <div key={slice.id} className="group p-2 relative border border-gray-200 rounded-lg hover:border-gray-300 transition-all animated fadeIn">
            <div className="mb-1 aspect-video bg-slate-50 w-full rounded group-hover:opacity-75 lg:aspect-video overflow-hidden">
                <img
                    src={slice.image_path
                        ? `${STORAGE_URL}/${slice.image_path}`
                        : "/images/banners/default-course-img.png"}
                    className="w-full h-full object-cover rounded"
                />
            </div>

            <div className="flex flex-col justify-between flex-grow mt-2">
                {/* Title & Description */}
                <div className="flex flex-col gap-1.5 mb-1.5">
                    <div className="flex items-center">
                        <h4 className="text-primary-foreground font-bold">
                            <span className="leading-[-5px]">{slice.title}</span>
                            {mentorProfile
                                ? <Link to={"my/" + slice.id} className="!text-sm md:text-sm font-bold">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                </Link>

                                : <Link to={slice.id} className="!text-sm md:text-sm font-bold">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                </Link>
                            }
                        </h4>
                    </div>
                    <div>
                        <div className="font-light text-xs mb-1.5">
                            {truncateText(slice.about, 100)}
                        </div>
                        <Tags args={slice.tags} />
                    </div>
                </div>

                {/* Rating & Price - Pushed to the bottom */}
                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-1">
                        <p className="font-extrabold text-yellow-800">4.5</p>
                        <div className="flex gap-1">
                            <Rating />
                        </div>
                        <p className='text-xs'>(50+)</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm py-0.5">
                            {slice.price
                                ? <p className='text-black font-bold flex gap-2 items-center'>
                                    <span>
                                        ₦{parseInt(slice.price).toLocaleString()}
                                    </span>
                                    <span className="font-light line-through">
                                        ₦{(parseInt(slice.price) + 4000).toLocaleString()}
                                    </span>
                                </p>
                                : <p className='flex items-center gap-3'>
                                    <span className='border rounded px-1.5 py-0.5 flex items-center gap-2 text-xs uppercase'>
                                        <span className='font-bold'>Free</span>
                                    </span>
                                    <span className="font-light line-through">
                                        ₦{parseInt("8700").toLocaleString()}
                                    </span>
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
