import React from 'react'

export const SmartSearchBar = () => {
  return (
    <div className='flex justify-center p-[10%]'>
        <form className=' bg-black w-1/2 grid grid-cols-12 rounded-lg'>
            <input type='text' className='p-4 m-4 col-span-9' placeholder='What would you like to watch today?'/>
            <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg'>
                Search
            </button>

        </form>
    </div>
  )
}
