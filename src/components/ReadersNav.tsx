import React, { useContext } from 'react'
import Logo from '../../public/next.svg'
import { HiOutlineHome, HiOutlineLogout } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine, RiDashboardFill } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Image from 'next/image'
import person from '../../public/person.jpg'
import Link from 'next/link'
import { WriteUpContext } from '../../context/WriteUpContext'

type ReadersNavProps = {
    children: React.ReactNode
}

const ReadersNav = ({ children }: ReadersNavProps) => {
    const { currUser, handleUserSignOut } = useContext(WriteUpContext)
    return (
        <div className="flex">
            <div className=' w-[4rem] sm:w-[5rem] h-screen flex flex-col justify-between items-center p-4 fixed border-r'>
                <Link href={'/'} >
                    <div className='cursor-pointer  '>
                        <p className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'><HiOutlineHome /> </p>
                    </div>
                </Link>
                <div className='flex-1 flex flex-col justify-center items-center gap-6 text-2xl text-purple-400'>
                    <Link href={`${currUser ? `/dashboard/${currUser.uid}` : '/auth/'}`} className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'>
                        <RiDashboardFill />
                    </Link>

                    <Link href={`${currUser ? '/dashboard/notification' : '/auth/'}`} className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'>
                        <FiBell />
                    </Link>

                    <Link href={`${currUser ? '/dashboard/bookmarks' : '/auth/'}`} className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'>
                        <BiBookmarks />
                    </Link>

                    <Link href={`${currUser ? '/dashboard/draft' : '/auth/'}`} className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'>
                        <RiArticleLine />
                    </Link>

                    <div className='border-b '></div>
                    <Link href={`${currUser ? '/dashboard/write' : '/auth/'}`} className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'>
                        <BsPencilSquare />
                    </Link>
                </div>

                {/* profile */}

                {
                    currUser && (
                        <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className=' w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center border border-purple-400 relative '>
                            <Link href={'/dashboard/' } >
                            <Image src={`${currUser.photoURL}`} alt='/' className='object-cover' layout='fill' />
                            </Link>
                        </div>
                        <Link href={'/dashboard/write'} className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'>
                        <HiOutlineLogout onClick={handleUserSignOut} />
                        </Link>
                        </div>
                    )
                }
            </div>

            <main className="sm:ml-20 ml-[4rem] w-full">{children}</main>
        </div>
    )
}

export default ReadersNav