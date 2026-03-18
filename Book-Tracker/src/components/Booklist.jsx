import React from 'react'

const Booklist = () => {
    return (
        <div>
            <div className='w-1/2 bg-green-700'>
                <ul className="list bg-base-100 rounded-box  shadow-md ">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

                    <li className="list-row mt-2 border border-neutral-500">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                        <div className="list-col-grow">
                            <div>Dio Lupa</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </div>
                        <div className=''>
                            <button className="mr-2 btn  bg-transparent border border-neutral-500">Add Book</button>
                            <button className="font-thin  btn btn-square btn-ghost items-center border border-neutral-500">❌</button>
                        </div>
                    </li>
                    <li className="list-row mt-2 border border-neutral-500">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                        <div className="list-col-grow">
                            <div>Dio Lupa</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </div>
                        <div className=''>
                            <button className="mr-2 btn  bg-transparent border border-neutral-500">Add Book</button>
                            <button className="font-thin  btn btn-square btn-ghost items-center border border-neutral-500">❌</button>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Booklist