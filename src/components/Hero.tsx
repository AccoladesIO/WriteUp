import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS here
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { WriteUpContext } from '../../context/WriteUpContext';
import { ToastContainer } from 'react-toastify';

type Herotype = {
  heading: string,
  message: string
}

const Hero = (props: Herotype) => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const { currUser, handleUserSignOut, getUnlimitedAccess } = useContext(WriteUpContext)


  const router = useRouter()
  const handleRoute = () => {
    router.push('/auth')
  }
  const { heading, message } = props
  return (
    <div
      className='flex items-center justify-center h-[100vh] bg-fixed bg-center bg-cover custom-img w-full relative' 
      id='hero'

    >
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-purple-800/50 z-[2]'></div>
      <div className='p-5 text-white z-[2] max-w-[700px] mx-auto'
        data-aos="fade-up" // Add the data-aos attribute for the fade-in animation
        data-aos-offset="50" // Adjust the offset as per your preference
        data-aos-duration="800" // Adjust the duration of the animation'
      >
        <h2 className='text-3xl sm:text-4xl font-bold'>{heading}</h2>
        <p className='py-5 text-[18px] sm:text-xl'>{message}</p>
        {
          currUser ? (
            <button onClick={getUnlimitedAccess} className='px-8 py-2 border-none bg-purple-800 text-white hover:bg-white hover:text-purple-800 ease-in-out duration-300 hover:font-bold rounded-sm'>Get Unlimited Access</button>
          ) :
            (
              <button onClick={handleRoute} className='px-8 py-2 border-none bg-purple-800 text-white hover:bg-white hover:text-purple-800 ease-in-out duration-300 hover:font-bold rounded-sm'>Get Started</button>
            )
        }
        <ToastContainer />
      </div>
    </div>
  )
}

export default Hero