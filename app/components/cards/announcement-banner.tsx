import { ArrowRight, Megaphone, X } from 'lucide-react'
import { useState } from 'react'

export default function AnnouncementBanner() {
    const [open, setOpen] = useState(true);

    return (
        <>
            {open && (
                <section className="bg-[#F1F2F9] py-3 relative border-b-2 border-white">
                    <div className="container mx-auto font-light md:w-max text-sm flex gap-3 items-start">
                        <Megaphone size={18} className='mt-1 md:mt-0' />
                        <span>Launching a new product soon <br className='md:hidden' /> <b className="font-semibold inline-block mt-1 md:mt-0">Get Notified <ArrowRight size={14} className="inline-block -top-[2px] left-1 relative" /></b></span>
                    </div>

                    <X size={16} strokeWidth={3} className="absolute md:top-3.5 top-2 md:right-18 right-2" onClick={() => setOpen(false)} />
                </section>
            )}
        </>
    )
}
