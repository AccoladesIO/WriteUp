import CommingSoon from '@/components/CommingSoon'
import ReadersNav from '@/components/ReadersNav'
import React from 'react'

const Notification = () => {
  return (
    <ReadersNav>
    <div className='w-full h-screen text-xl flex items-center justify-center'>
        <CommingSoon title='Notification' />    
     </div>
     </ReadersNav>
  )
}

export default Notification