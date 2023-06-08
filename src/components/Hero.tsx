import React from 'react'

type Herotype = {
    heading: string,
    message: string
}

const Hero = (props: Herotype) => {
    const {heading, message} = props
  return (
    <div className='flex items-center justify-center h-[100vh] bg-fixed bg-center  bg-cover custom-img' id='hero'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-purple-800/50 z-[2]'></div>
      <div className='p-5 text-white z-[2] max-w-[700px] mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold'>{heading}</h2>
        <p className='py-5 text-[18px] sm:text-xl'>{message}</p>
        <button className='px-8 py-2 border-none bg-purple-800 text-white hover:bg-white hover:text-purple-800 ease-in-out duration-300 hover:font-bold rounded-sm'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero