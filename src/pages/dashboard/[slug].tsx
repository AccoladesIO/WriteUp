import ReadersNav from '@/components/ReadersNav'
import Image from 'next/legacy/image'
import React, { useContext } from 'react'
import { WriteUpContext } from '../../../context/WriteUpContext'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare, BsPeople } from 'react-icons/bs'


const Index = () => {

  const {currUser} = useContext(WriteUpContext)
  // console.log(currUser, 'items from dash slug')
  return (
    <>
    <ReadersNav>
      <div className='max-w-[1024px] min-h-screen overflow-scroll mx-auto flex flex-col justify-start items-start p-2 pt-8 bg-purple-200'>
        <nav className='bg-white p-4 w-[95%] mx-auto h-[100px] rounded-md flex justify-between items-center'>
          <p className='flex flex-col items-center justify-center text-[18px]'>
            <span className='text-[22px] font-bold'>
              Welcome,
            </span>
            {currUser?.displayName}
          </p>
          <div className='w-16 h-16 rounded-full border border-purple-700'>
              <Image src={`https://res.cloudinary.com/demo/image/fetch/${currUser?.photoURL}`} alt='/' width={100} height={100} className='object-cover rounded-full' />
          </div>
        </nav>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[95%] mx-auto mt-12 gap-4'>
          <div className='flex justify-betwen items-center p-4 rounded-sm bg-white gap-4 h-[100px]'>
          <p className='flex justify-between items-center gap-4'>
            <span className='flex-col items-start justify-center bg-purple-300 text-purple-800 text-2xl p-2'>
            <BsPeople />
            </span>
            <span className='flex-col items-start justify-center text-[18px]'>
              <p>X</p>
              <p>Followers</p>
            </span>
          </p>
          </div>
          <div className='flex justify-betwen items-center p-4 rounded-sm bg-white gap-4 h-[100px]'>
          <p className='flex justify-between items-center gap-4'>
            <span className='flex-col items-start justify-center bg-purple-300 text-purple-800 text-2xl p-2'>
            <BiBookmarks />
            </span>
            <span className='flex-col items-start justify-center text-[18px]'>
              <p>X</p>
              <p>Bookmarks</p>
            </span>
          </p>
          </div>
          <div className='flex justify-betwen items-center p-4 rounded-sm bg-white gap-4 h-[100px]'>
          <p className='flex justify-between items-center gap-4'>
            <span className='flex-col items-start justify-center bg-purple-300 text-purple-800 text-2xl p-2'>
            <BsPencilSquare />
            </span>
            <span className='flex-col items-start justify-center text-[18px]'>
              <p>X</p>
              <p>Articles</p>
            </span>
          </p>
          </div>
          <div className='flex justify-betwen items-center p-4 rounded-sm bg-white gap-4 h-[100px]'>
          <p className='flex justify-between items-center gap-4'>
            <span className='flex-col items-start justify-center bg-purple-300 text-purple-800 text-2xl p-2'>
            <RiArticleLine />
            </span>
            <span className='flex-col items-start justify-center text-[18px]'>
              <p>X</p>
              <p>Drafts</p>
            </span>
          </p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-[95%] mx-auto mt-12 gap-4'>
          <div className='bg-white flex flex-col items-start justify-center gap-4 rounded-sm p-4'>

          </div>
          <div className='bg-white flex flex-col items-start justify-center gap-4 rounded-sm p-4'></div>
        </div>
      </div>
    </ReadersNav>
    </>
  )
}

export default Index