import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '@/components/About'
import Testimonial from '@/components/Testimonial'
import Heads from '@/components/Heads'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Heads title='WriteUp' content='Welcome to WriteUp: A Haven for Text-Based Content' />
      <div>

      <Navbar />
      <Hero heading='Welcome to WriteUp: A Haven for Text-Based Content'  message='Unleash the Power of Words, Connect with Like-minded Readers and Writers' />
      <About />
      <Testimonial />
      <Footer />
      </div>
    </>
  )
}
