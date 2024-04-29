import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import person from '../../public/person.jpg';
import Image from 'next/legacy/image';
import img from '../../public/icon.jpg';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { WriteUpContext } from '../../context/WriteUpContext';

type postCardProps = {
  post: any[] | any;
};

const PostCard = ({ post }: postCardProps) => {

  const [authorData, setAuthorData] = useState<any | null>(null);

  useEffect(() => {
    const getAuthorData = async () => {
      // console.log((await getDoc(doc(db, 'users', post.data.author))).data(), 'update')
      setAuthorData((await getDoc(doc(db, 'users', post.data.author))).data());
    };
    // console.log(authorData)
    getAuthorData();
  }, []);

  const formattedDate = post.data.postedOn
    ? new Date(post.data.postedOn).toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
    })
    : '';

  return (
    <div className='flex justify-between items-center gap-1 flex-col-reverse sm:flex-row p-2 mb-4 rounded-md border border-purple-400 max-w-[1000px] mx-auto'>
      <Link href={`/post/${post.id}`}>
        <div className=' w-[350px] sm:w-[500px] md:w-[700px] p-2 mt-4 flex flex-col justify-center items-start text-left gap-3'>
          <div className='flex items-center justify-center gap-2 text-left'>
            <div className=' w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center  relative'>
              <Image src={`${authorData?.imageUrl}`} alt='/' className='object-cover' layout='fill' />
            </div>
            <span className='text-[16px] leading-3 font-bold'>{authorData?.name}</span>
          </div>
          <h1 className='text-2xl font-bold text-left mt-4'>{post?.data?.title}</h1>
          <p className='text-[16px] font-light text-gray-400 text-left mt-2'>{post?.data?.brief}</p>
          <div className='text-sm text-gray-400 mt-4 text-left flex-wrap'>
            {formattedDate} * {post?.data.postLength} mins read *{' '}
            <span className='text-sm text-purple-800 bg-purple-200 rounded-md p-2 '>{post?.data?.category}</span>
          </div>
        </div>
      </Link>

      <div className='flex justify-center items-start sm:items-center w-[350px] sm:w-[200px] mx-auto border border-purple-300 mt-4 h-[200px] relative'>
        <Image
          src={`${post.data.bannerImage}`}
          alt="Banner Image"
          height={100}
          width={100}
          className="object-cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PostCard;
