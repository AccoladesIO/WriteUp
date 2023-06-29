import Footer from '@/components/Footer'
import Heads from '@/components/Heads'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PostCard from '@/components/PostCard'
import Head from 'next/head'
import React from 'react'
import { useContext } from 'react'
import { WriteUpContext } from '../../context/WriteUpContext'


const Blog = () => {
  const {posts, users} = useContext(WriteUpContext)

  // console.log(users, 'users exists') 
  // console.log(posts, 'Posts exists')
  return (
    <>
      <Heads title='Blog | WriteUp' content='Read the top stories for today' />
      <Navbar />
      <Hero heading={'Stay Curious'} message={'Discover stories, thinking , and expertise from writers on any topic.'} ></Hero>

      <div className='p-4'>
        {
          posts.map((post: any) =>(
            <PostCard  post={post} key={post.id}/>
          ))
        }
      </div>

      <Footer />
    </>
  )
}

export default Blog