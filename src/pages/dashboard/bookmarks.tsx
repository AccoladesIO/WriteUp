import CommingSoon from '@/components/CommingSoon'
import ReadersNav from '@/components/ReadersNav'
import React from 'react'

const Bookmarks = () => {
  return (
    <ReadersNav>
    <div className='w-full h-screen flex items-center justify-center'>
        <CommingSoon title='Bookmarks'/>
    </div>
    </ReadersNav>
  )
}

export default Bookmarks