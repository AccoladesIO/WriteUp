import Link from 'next/link'
import React from 'react'
import person from '../../public/person.jpg'
import Image from 'next/legacy/image'
import img from '../../public/icon.jpg'

const PostCard = () => {
  return (
    <div className='flex justify-between items-start gap-3 flex-col-reverse sm:flex-row p-4 mb-4'>

      <Link href={'/post/123'}>
        <div className='max-w-[1024px] mx-auto p-8 mt-4 flex flex-col justify-center items-start text-left border'>
          <div className='flex items-center justify-center gap-2 text-left'>
            <div className=' w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center border border-purple-400'>
              <Image src={person} alt='/' className='object-cover' />

            </div>
            <span className='text-[16px] leading-3 font-bold'>Accolades</span>
          </div>
          <h1 className='text-2xl font-bold text-left mt-4'> Top 5 Programming language to learn 2025</h1>
          <p className='text-[16px] font-light text-gray-400 text-left mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, unde?</p>
          <div className='text-sm text-gray-400 mt-4 text-left'>Jun 12 * 5 mins read * <span className='text-sm text-purple-800 bg-purple-200 rounded-md p-2 '>post tag </span> </div>
        </div>
      </Link>

      <div className='flex justify-center items-center max-w-[400px] mx-auto border border-purple-300 mt-4'>
      <Image src={img} alt='/' className='object-cover' />
        
      </div>
    </div>
  )
}

export default PostCard