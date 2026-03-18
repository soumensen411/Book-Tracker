import React from 'react'

const Input = () => {
    return (
        <div>
            <div className='bg-neutral-700 p-10 w-1/2 rounded border border-neutral-200'>
                <p className='text-lg font-bold'>Add a new book</p>
                <div className='flex  items-center'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Title</legend>
                        <input type="text" className="input  bg-transparent" placeholder="Book Tilte.." />
                    </fieldset>

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Author</legend>
                        <input type="text" className="input bg-transparent" placeholder="Author Name.." />
                    </fieldset>
                </div>
                <label className="text-sm mb-2 mt-5 text-gray-300">Status</label>
                <div className='w-full mt-2 flex items-center  gap-2'>
                     
                    <select name="" id="" className='select select-bordered  w-full bg-neutral-700 '>
                        <option value="">Want to read</option>
                        <option value="">Currently Reading</option>
                        <option value="">Completed</option>
                    </select>
                    <button className="btn  bg-transparent border border-neutral-500">Add Book</button>
                    </div>
            </div>
        </div>
    )
}

export default Input