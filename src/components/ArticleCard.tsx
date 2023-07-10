import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import Article from './Article'
import { WriteUpContext } from '../../context/WriteUpContext'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'


type articleProps = {
    post: any,
}
const ArticleCard = (props: articleProps) => {

    const {post} = props

    const [authorData, setAuthorData] = useState<any | null>(null);

  useEffect(() => {
    const getAuthorData = async () => {
      // console.log((await getDoc(doc(db, 'users', post.data.author))).data(), 'update')
      setAuthorData((await getDoc(doc(db, 'users', post.data.author))).data());
    };
    // console.log(authorData)
    getAuthorData();
  }, []);

    return (
        <div className='flex gap-[.6rem] md:flex-col items-center justify-between border-b-2 py-4 pl-2 w-full'>

    <Link href={`/post/${post.id}`}>    

            <div className='flex items-center justify-between cursor-pointer my-4 sm:w-[100%] w-[70%]'>
                <div className='flex flex-col items-start '>
                    <div className='flex flex-row justify-center items-center gap-2'>

                        <div className='rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]'>
                            <Image src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`} width={100} height={100} alt='' />
                        </div>

                        <div className='text-sm '>{authorData?.name}</div>
                    </div>
                    <div className='font-bold text-[16px]'>{post?.data?.title}</div>
                </div>
            </div>


            <div className='flex flex-1 items-center justify-center w-[28%] sm:w-full relative'>
                <Image src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`} alt='' width={300} height={300} className='object-cover'/>
            </div>
        </Link>
        </div>
    )
}

export default ArticleCard