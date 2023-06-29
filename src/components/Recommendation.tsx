import React, {useContext, useEffect, useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import next from '../../public/next.svg'
import vercel from '../../public/vercel.svg'
import Image from 'next/image'
import person from '../../public/person.jpg'
import img from '../../public/icon.jpg'
import { WriteUpContext } from '../../context/WriteUpContext'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import ArticleCard from './ArticleCard'



type recommendationProps = {
    author: any
}
const Recommendation = (props: recommendationProps) => {

    const [authorData, setAuthorData] = useState<any | null>(null);
    const { posts} = useContext(WriteUpContext)

   
  
    const {author} = props
    // console.log(posts, 'posts')
    console.log(author, 'author')
    return (
        <div className='h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-8 overflow-scroll'> 
            <div className='flex items-center justify-center text-sm bg-purple-200 text-purple-800 my-[2rem] py-[.6rem] rounded-full'>Get Unlimited Access</div>
            <div className='flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full'>
                <AiOutlineSearch />
                <input type="text" className='border-none outline-none bg-none w-full' placeholder='Search' />
            </div>
            <div className='mt-[2rem]'>
                <div className='h-[5rem] w-[5rem] rounded-full overflow-hidden'>
                    <Image src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`} width={100} height={100} alt='/' />
                </div>
                <div className='font-semibold mb-[.2rem] mt-[.5rem] '>{author?.data?.name} </div>
                <div className='text-gray-400'>{author?.data?.followersCount} Followers</div>
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
                            
                            posts?.map((post: any|null) =>(
                                <ArticleCard  post={post} key={post.id}/>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default Recommendation