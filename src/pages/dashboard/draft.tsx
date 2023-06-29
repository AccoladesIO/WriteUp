import CommingSoon from '@/components/CommingSoon'
import ReadersNav from '@/components/ReadersNav'
import React from 'react'

const Draft = () => {
  return (
    <ReadersNav>
    <div className='w-full h-full text-xl flex items-center justify-center'>
        Draft
        <CommingSoon />
    </div>
    </ReadersNav>
  )
}

export default Draft