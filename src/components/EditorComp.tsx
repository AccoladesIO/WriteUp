import React from 'react'

const EditorComp = () => {
  return (
    <div className='w-full p-8 min-h-[100vh] flex flex-col justify-start items-center border-2 overflow-scroll'>
        <p className='rounded-md text-2xl text-purple-800 bg-purple-200 p-4 font-semibold'>
            Create a New Post
        </p>


        <div className='max-w-[900px] w-[90%] sm:w-[70%] mt-12 mx-auto flex flex-col items-start justify-center gap-4'>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Title</h2>
                <input type="text" name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Project title' />

            </div>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Brief</h2>
                <input type="text" name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Project description' />

            </div>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Banner Image</h2>
                <input type="text" name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Banner Image URL' />

            </div>
            <div className="flex flex-col sm:flex-row  justiy-between gap-3 w-full">
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Estimated Read Length</h2>
                <input type="text" name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Estimated Read Length' />

            </div>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Category</h2>
                <input type="text" name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Project category e.g productivity, coding, career' />

            </div>

            </div>

            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Article Text</h2>
                <textarea  rows={12} id="" className='w-full p-4 border border-2-purple'placeholder='Edit this field to start' />

            </div>

        </div>
    </div>
  )
}

export default EditorComp