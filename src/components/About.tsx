import React, { useEffect } from 'react';
import Image from 'next/legacy/image';
import { BsGraphUpArrow, BsPeople, BsNewspaper } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className='max-w-[1024px] mx-auto px-8 md:px-16'>
      <div className='flex flex-wrap-reverse md:flex-nowrap justify-between items-center p-4 max-w-[1024px] mx-auto min-h-[500px] my-8' id='about' data-aos='fade-up'>
        <div className='sm:p-8 w-full md:w-[60%]'
         data-aos="fade-up" // Add the data-aos attribute for the fade-in animation
         data-aos-offset="50" // Adjust the offset as per your preference
         data-aos-duration="1000" // Adjust the duration of the animation
         >
          <h2 className='text-3xl font-bold mb-5'>About WriteUp</h2>
          <p className='w-full'>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm&apos;s heaven and a blog to get access to more text-based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
        </div>
        <div className='border-purple-800 w-full md:w-[40%] h-full relative' data-aos='fade-left relative'>
          {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'></div> */}
          <Image
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="object-cover w-full h-full rounded-md"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className='w-full md:w-[90%] mx-auto my-8' data-aos='fade-up' data-aos-duration='1000'>
        <h2 className='text-3xl font-bold mb-5 text-center'>
          Why you should join WriteUp
        </h2>
        <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</p>

        <div className='grid md:grid-cols-3 grid-cols-1w-full gap-4 mt-4'>
          <div className='border border-gray-200 rounded-md p-4 w-full h-full flex flex-col gap-2' data-aos='fade-up' data-aos-duration='1000'>
            <div className='bg-purple-200 p-4 rounded-full w-[50px] h-[50px]'>
              <BsGraphUpArrow size={20} style={{ color: 'purple' }} />
            </div>
            <h3 className='text-[16px] font-semibold'>Analytics</h3>
            <p className='text-[14px]'>Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time</p>
          </div>
          <div className='border border-gray-200 rounded-md p-4 w-full h-full flex flex-col gap-2' data-aos='fade-up' data-aos-duration='1000'>
            <span className='bg-purple-200 p-4 rounded-full w-[50px] h-[50px]'>
              <BsPeople size={20} style={{ color: 'purple' }} />
            </span>
            <h3 className='text-[16px] font-semibold'>Social Interaction</h3>
            <p className='text-[14px]'>Users on the platform can interact with posts they like, comment and engage in discussions</p>
          </div>
          <div className='border border-gray-200 rounded-md p-4 w-full h-full flex flex-col gap-2' data-aos='fade-up' data-aos-duration='1000'>
            <span className='bg-purple-200 p-4 rounded-full w-[50px] h-[50px]'>
              <BsNewspaper size={20} style={{ color: 'purple' }} />
            </span>
            <h3 className='text-[16px] font-semibold'>Content Creation</h3>
            <p className='text-[14px]'>Write nice and appealing with our in-built markdown, a rich text editor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
