import React from 'react'

export default function Tags({ args }: { args: string }) {
    let tags = args.split(',');
    console.log(tags);
    return (
        <div className='flex gap-1 flex-wrap'>
            {tags.map(tag => (
                <span className='border px-2 rounded-lg border-sky-700 bg-sky-100 text-sky-900 text-xs'>{tag}</span>
            ))}
        </div>
    )
}
