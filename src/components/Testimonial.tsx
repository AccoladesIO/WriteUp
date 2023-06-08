import React from 'react'

const Testimonial = () => {
  return (
    <section>
    <div className='w-full my-8 p-8 md:px-16 flex items-center justify-center flex-col md:flex-row bg-[lavender] min-h-[400px] gap-6'>
    <div className='border-purple-800 w-full md:w-[50%] relative'>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[-1]'></div>
                <img
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="object-cover w-full h-full rounded-lg relative"
                />
            </div>
        <div className='flex flex-col gap-2 items-center justify-evenly'>
            <p>"WriteUp has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.”</p>
            <span className='w-full text-left mt-8'><em> Ononobi Praise,</em> software developer, WriteUp. <br />
            <button className='px-8 py-2 border-none bg-purple-800 text-white hover:bg-white hover:text-purple-800 ease-in-out duration-300 hover:font-bold rounded-sm mt-6'>Join WriteUp</button>
            </span>

        </div>
    </div>

    {/*  */}

    <div className='w-full my-8 p-24 flex items-center justify-center flex-col sm:flex-row  min-h-[400px]'>
        <div className='w-[200px] h-[200px] sm:w-full'>

        </div>
        <div className='flex flex-col gap-2 items-center justify-evenly'>
            <h2 className='text-3xl font-bold mb-5 text-left'>Write, read and connect with great minds on chatter</h2>
            <span className='w-full text-left mt-8'>
                <p>Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals  </p>
            <button className='px-8 py-2 border-none bg-purple-800 text-white hover:bg-white hover:text-purple-800 ease-in-out duration-300 hover:font-bold rounded-sm mt-6'>Join WriteUp</button>
            </span>

        </div>
    </div>
    </section>
  )
}

export default Testimonial