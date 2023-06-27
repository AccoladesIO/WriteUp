import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import person from '../../public/person.jpg';
import Image from 'next/legacy/image';
import img from '../../public/icon.jpg';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

type postCardProps = {
  post: any[] | any;
};

const PostCard = ({ post }: postCardProps) => {
  const [authorData, setAuthorData] = useState<any | null>(null);

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData((await getDoc(doc(db, 'users', post.data.author))).data());
    };
    getAuthorData();
  }, [post]);

  const formattedDate = post.data.postedOn
    ? new Date(post.data.postedOn).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
      })
    : '';

  return (
    <div className='flex justify-between items-start gap-3 flex-col-reverse sm:flex-row p-4 mb-4'>
      <Link href={`/post/${post.id}`}>
        <div className='max-w-[1024px] mx-auto p-8 mt-4 flex flex-col justify-center items-start text-left border'>
          <div className='flex items-center justify-center gap-2 text-left'>
            <div className=' w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center border border-purple-400'>
              <Image src={post.data.imageUrl} alt='/' className='object-cover' />
            </div>
            <span className='text-[16px] leading-3 font-bold'>{post?.data?.author.toUpperCase()}</span>
          </div>
          <h1 className='text-2xl font-bold text-left mt-4'>{post?.data?.title}</h1>
          <p className='text-[16px] font-light text-gray-400 text-left mt-2'>{post?.data?.brief}</p>
          <div className='text-sm text-gray-400 mt-4 text-left'>
            {formattedDate} * {post?.data.postLength} mins read *{' '}
            <span className='text-sm text-purple-800 bg-purple-200 rounded-md p-2 '>{post?.data?.category}</span>
          </div>
        </div>
      </Link>

      <div className='flex justify-center items-center max-w-[400px] mx-auto border border-purple-300 mt-4 placeholder:'>
        <Image
          src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
          alt='/'
          className='object-cover'
          width={450}
          height={230}
        />
      </div>
    </div>
  );
};

export default PostCard;
