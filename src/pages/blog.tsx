import Footer from '@/components/Footer'
import Heads from '@/components/Heads'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PostCard from '@/components/PostCard'
import Head from 'next/head'
import React from 'react'

const blog = () => {
  return (
    <>
      <Heads title='Blog | WriteUp' content='Read the top stories for today' />
      <Navbar />
      <Hero heading={'Stay Curious'} message={'Discover stories, thinking , and expertise from writers on any topic.'} ></Hero>

      <div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      </div>

      <Footer />
    </>
  )
}

export default blog