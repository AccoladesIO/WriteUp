import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Navbar />
        <Hero heading='Have any suggestion?' message='Reach out to the team or drop a message here.'/>
        <Contact />
        <Footer />
    </div>
  )
}

export default contact