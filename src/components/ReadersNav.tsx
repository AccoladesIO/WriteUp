import React from 'react'
import Logo from '../../public/next.svg'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine, RiStackshareLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Image from 'next/image'
import person from '../../public/person.jpg'
import Link from 'next/link'

type ReadersNavProps = {
    children: React.ReactNode
}

const ReadersNav = ({children}: ReadersNavProps) => {
    return (
        <div className="flex">
        <div className=' w-[3rem] sm:w-[5rem] h-screen flex flex-col justify-between items-center p-4 fixed'>
            <Link href={'/'} >
                <div className='cursor-pointer  '>
                    <p className='bg-purple-200 rounded-[5px] text-[20px] font-bold text-purple-800 p-2 w-full flex items-center justify-center'><RiStackshareLine/> </p>
                </div>
            </Link>
            <div className='flex-1 flex flex-col justify-center items-center gap-6 text-2xl text-purple-400'>
            <HiOutlineHome />
            <FiBell />
            <BiBookmarks />
            <RiArticleLine />
            <div className='border-b '></div>
            <BsPencilSquare />
            </div>

            {/* profile */}

            <div className=' w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center border border-purple-400'>
                <Image  src={person} alt='/' className='object-cover'/>

            </div>
        </div>

        <main className="sm:ml-20 ml-10 w-full">{children}</main>
        </div>
    )
}

export default ReadersNav