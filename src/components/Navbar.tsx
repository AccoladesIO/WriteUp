import Link from 'next/link'
import Image from 'next/legacy/image'
import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import { WriteUpContext } from '../../context/WriteUpContext'
import { ToastContainer } from 'react-toastify'

const Navbar = () => {
    const { currUser, handleUserSignOut } = useContext(WriteUpContext)
    // console.log(currUser)


    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleChange = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#fff')
                setTextColor('purple')
            } else {
                setColor('transparent')
                setTextColor('#fff')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    return (
        <div style={{ background: `${color}` }} className=' drop-shadow-md fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/' >
                    <h1 style={{ color: `${textColor}` }} className='font-bold text-3xl drop-shadow-xl '>WriteUp</h1>
                </Link>
                <ul className='hidden sm:flex' style={{ color: `${textColor}` }}>
                    <li className='p-4'>
                        <Link href='/#hero'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#about'>About</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    {!currUser ? (
                        <li className='p-4'>
                            <Link href='/contact'>Contacts</Link>
                        </li>
                    ) :
                        (
                            <li className='p-4'>
                                <Link href={`/dashboard/${currUser.uid}`}>Dashboard</Link>
                            </li>
                        )
                    }
                </ul>
                {
                    currUser ? (
                        <div className='sm:flex items-center justify-center hidden gap-4'>
                            <li className='p-[8px_18px] bg-purple-700 text-white rounded-sm list-none' onClick={handleUserSignOut}>
                                <Link href='/auth' >Sign Out</Link>
                            </li>
                            <div className=' w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center border border-purple-400 relative'>
                            <Image src={`https://res.cloudinary.com/demo/image/fetch/${currUser.photoURL}`} alt='/' className='object-cover' layout='fill' />
                        </div>
                        </div>
                    ) :
                        (
                            <div className='sm:flex items-center justify-center hidden'>
                                <li className='p-[8px_18px] bg-purple-700 text-white rounded-sm list-none'>
                                    <Link href='/auth' >Sign in</Link>
                                </li>
                            </div>
                        )
                }
                
                {/* Mobile button */}
                <div className='block sm:hidden z-10'>
                    {
                        !nav && <RiMenu3Fill size={20} onClick={handleChange} style={{ color: `${textColor}` }} />
                    }
                </div>
                {/* Mobile Menu */}
                <div className={
                    nav ? 'sm:hidden absolute top-0 left-0 right-[-10%] bottom-0 flex flex-col gap-8 justify-center items-center w-[350px] h-screen bg-white text-left ease-in duration-300' :
                        'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-[0] h-screen bg-white text-left ease-in duration-300'
                }>
                    <div className='absolute top-[50px] left-[50px] bg-purple-200 p-2 rounded-sm'>
                        {
                            nav && <AiOutlineClose size={20} onClick={handleChange} style={{ color: `purple` }} />
                        }
                    </div>
                    <ul>
                        <li onClick={handleChange} className='p-4 text-2xl hover:text-purple-700 text-purple-400'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleChange} className='p-4 text-2xl hover:text-purple-700 text-purple-400'>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li className='p-4 hover:text-purple-700 text-purple-400 text-2xl'>
                                <Link href={`${currUser ? `/dashboard/${currUser.uid}` : '/contact'}`}>{currUser  ? 'Dashboard' : 'Contact'}</Link>
                            </li>
                        <li onClick={handleChange} className='p-4 text-2xl hover:text-purple-700 text-purple-400'>
                            <Link href='/blog'>Blog</Link>
                        </li>
                    </ul>
                    {
                        currUser ? (
                            <div className='flex items-center justify-center'>
                                <li className='p-[8px_18px] bg-purple-700 text-white rounded-sm list-none' onClick={handleUserSignOut}>
                                    <Link href='/auth'>Sign Out</Link>
                                </li>
                            </div>
                        ) :
                            (<div className='flex items-center justify-center'>
                                <li className='p-[8px_18px] bg-purple-700 text-white rounded-sm list-none'>
                                    <Link href='/auth'>Sign in</Link>
                                </li>
                            </div>)
                    }
                    {
                        currUser && (
                            <div className=' w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center border border-purple-400 relative'>
                                <Image src={`https://res.cloudinary.com/demo/image/fetch/${currUser.photoURL}`} alt='/' className='object-cover' layout='fill' />
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar