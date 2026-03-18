import React from 'react'

const Booklist = ({books}) => {
    return (
        <div>
            <div className='w-1/2 '>
                <ul className="list bg-base-100 rounded-box  shadow-md ">
                    {books.map((book,index) => (
                    <li className="list-row mt-2 border border-neutral-500 items-center">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">{index+1}</div>
                        <div><img className="size-15 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                        <div className="list-col-grow">
                            <div className='text-lg font-bold'>{book.name}</div>
                            <div className="text-xs uppercase font-semibold opacity-50">{book.author}</div>
                            <button className="btn mt-1 btn-xs bg-green-700 border border-neutral-500 rounded-lg p-1">{book.status}</button>
                        </div>
                        <div className=''>
                            <button className="mr-2 btn  bg-transparent border border-neutral-500">{book.status}</button>
                            <button className="font-thin  btn btn-square btn-ghost items-center border border-neutral-500">❌</button>
                        </div>
                    </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

export default Booklist