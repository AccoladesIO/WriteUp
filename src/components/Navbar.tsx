import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {BiMenuAltRight } from 'react-icons/bi'

const Navbar = () => {

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
                    <li className='p-4'>
                        <Link href='/contact'>Contacts</Link>
                    </li>
                </ul>
                <div className='sm:flex items-center justify-center hidden'>
                    <li className='p-[8px_18px] bg-purple-700 text-white rounded-sm list-none'>
                        <Link href='/authS'>Sign in</Link>
                    </li>
                </div>
                {/* Mobile button */}
                <div className='block sm:hidden z-10'>
                    {
                        !nav && <BiMenuAltRight size={20} onClick={handleChange} style={{ color: `${textColor}` }} />
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
                        <li onClick={handleChange} className='p-4 text-2xl hover:text-purple-700 text-purple-400'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li onClick={handleChange} className='p-4 text-2xl hover:text-purple-700 text-purple-400'>
                            <Link href='/blog'>Blog</Link>
                        </li>
                    </ul>
                    <div className='flex items-center justify-center'>
                        <li className='p-[8px_18px] bg-purple-700 text-white rounded-sm list-none'>
                            <Link href='/auth'>Sign in</Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar