import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import next from '../../public/next.svg'
import vercel from '../../public/vercel.svg'
import Image from 'next/image'
import person from '../../public/person.jpg'
import img from '../../public/icon.jpg'


const recommendedPosts = [
    {
        title: 'what can you do at altschool',
        image: img,
        author: {
            name: 'Accolades',
            image: person,
        }
    },
    {
        title: 'meet the developer',
        image: person,
        author: {
            name: 'Accolades',
            image: person,
        }
    },
    {
        title: 'what can you do with vercel',
        image: vercel,
        author: {
            name: 'Accolades',
            image: person,
        }
    },
]

const Recommendation = () => {
    return (
        <div className='h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-8'> 
            <div className='flex items-center justify-center text-sm bg-purple-200 text-purple-800 my-[2rem] py-[.6rem] rounded-full'>Get Unlimited Access</div>
            <div className='flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full'>
                <AiOutlineSearch />
                <input type="text" className='border-none outline-none bg-none w-full' placeholder='Search' />
            </div>
            <div className='mt-[2rem]'>
                <div className='h-[5rem] w-[5rem] rounded-full overflow-hidden'>
                    <Image src={person} width={100} height={100} alt='/' />
                </div>
                <div className='font-semibold mb-[.2rem] mt-[.5rem] '>Accolades </div>
                <div className='text-gray-400'>1M followers</div>
                <div className='flex gap-[.6rem] m-2'>
                    <button className='bg-purple-700 text-white rounded-full p-[.6rem_.4rem] text-sm '>Follow</button>
                    <button className='bg-purple-700 text-white rounded-full p-[.6rem_.4rem] text-sm '><MdMarkEmailUnread /> </button>
                </div>
            </div>

            {/* recomendation container */}
            <div>
                <div className='mt-4 mb-4 text-xl font-semibold'>More from WriteUp</div>
                <div>
                    {/* author profile */}
                        {
                            recommendedPosts?.map((post, i) =>(
                                <div className='flex gap-[.6rem] flex-col items-start border-b-2 pb-4 pl-2' key={i}>


                                <div className='flex items-center justify-between cursor-pointer my-4'>
                                    <div className='flex flex-col items-start w-[60%]'>
                                    <div className='flex flex-row justify-center items-center gap-2'>
        
                                        <div className='rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]'>
                                            <Image src={post.author.image} width={100} height={100} alt='' />
                                        </div>
        
                                        <div className='text-sm '>{post.author.name}</div>
                                    </div>
                                        <div className='font-bold text-[16px]'>{post.title}</div>
                                </div>
                                </div>
        
        
                                <div className='flex flex-1 items-center justify-center'>
                                    <Image src={post.image} alt='' height={200} width={200} />
                                </div>
        
                            </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default Recommendation