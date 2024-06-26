import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import img from '../../public/person.jpg'
import banner from '../../public/icon.jpg'
import { AiFillPlayCircle, AiOutlinePlayCircle } from 'react-icons/ai'
// import {IoLogoGithub} from 'react-icons/io'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { BiBookmark } from 'react-icons/bi'
import { HiOutlineLink } from 'react-icons/hi'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import Comment from './Comment'
import Link from 'next/link'

function Article({post, author}: any ) {
    
    console.log(post)
    return (
        <section className='flex flex-col items-start justify-center flex-[3] sm:border-l sm:border-r h-screen relative'>
            {/* <span className=' bg-purple-200 p-4 m-4 rounded-lg w-[100px]'>
                <Link href={'/blog'} className='text-purple text-[14px]'>&larr; Back</Link>
            </span> */}
            {/* wrapper */}
            <div className='h-screen overflow-scroll p-8 w-full'>
                {/* content */}
                <div className='flex justify-between items-center mt-[2.2rem] mb-[1.2rem] gap-4'>
                    {/* post header */}
                    <div className='flex gap-4'>
                        {/* author */}
                        <div className='h-12 w-12 grid center rounded-full overflow-hidden'>
                            {/* author img */}
                            <Image src={`${author?.data?.imageUrl}`} alt='' width={100} height={100} className='object-cover' />
                        </div> 
                        <div className='flex flex-col justify-center'>
                            {/* author column and post details */}
                            <div>{author?.data?.name}</div>
                            <div className='flex gap-[.2rem] text-gray-500 flex-wrap'>
                                {/* post deets */}
                                <span> * {post?.data?.postLength} min read</span> <span className='flex items-center text-purple-700'> <AiFillPlayCircle /> Listen</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 text-gray cursor-pointer'>
                        <FaTwitter />
                        <FaGithub />
                        <HiOutlineLink />
                        <div className='w-2'>
                            <BiBookmark />
                        </div>
                    </div>
                </div>
                <div className='--c-article flex flex-col gap-4'>
                    <div className='--c-banner h-[18rem] w-full grid center overflow-hidden mb-8'>
                        <Image src={`${post?.data?.bannerImage}`} alt='/' height={100} width={100} className='object-cover' />
                    </div>
                    <h1 className="styles-title font-bold text-3xl ">
                        {post?.data?.title}
                    </h1>
                    <h4 className='font-medium text-[1.4rem] text-[#292929]'>
                        <p>
                            {author?.data?.name} {' '}
                            {new Date(post?.data?.postedOn).toLocaleString('en-US', {day: 'numeric', month:'short', year:'numeric'})}
                            </p>
                        <p>
                            {post?.data?.brief}
                        </p>
                    </h4>
                    <div className="article text-[16px] text-[#292929]">
                        {post?.data?.body}
                    </div>

                </div>

            <Comment />
            </div>
        </section>
    )
}

export default Article