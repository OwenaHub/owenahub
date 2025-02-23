import { Link } from 'react-router'
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
        <div key={slice.id} className="group p-2 relative border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
            <div className="mb-1 aspect-video bg-slate-50 w-full rounded group-hover:opacity-75 lg:aspect-video">
                <img
                    src={slice.image_path
                        ? `${STORAGE_URL}/${slice.image_path}`
                        : "/images/banners/default-course-img.png"}
                    className="w-full h-full object-cover rounded"
                />
            </div>
            <div className="py-2">
                <div className='mb-4'>
                    <div className="flex items-start gap-4 justify-between">
                        <div className="flex items-center gap-1 mb-2">
                            <h4 className="text-sm text-gray-700">
                                <div className="text-base font-bold">
                                    {slice.title}
                                </div>
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
                        <p className="text-sm text-sky-800 font-bold px-1 py-0.5 rounded-md">
                            {slice.price ? `₦${parseInt(slice.price).toLocaleString()}` : "FREE"}
                        </p>
                    </div>
                    <div className="text-light text-xs">
                        {truncateText(slice.about)}
                    </div>
                </div>
                <div className="text-xs text-gray-500">
                    <Tags args={slice.tags} />
                </div>
            </div>
        </div>
    )
}
