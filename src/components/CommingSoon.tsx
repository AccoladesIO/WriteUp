import React from 'react'

type comingSoonProps = {
    title: string
}

const CommingSoon = (props: comingSoonProps) => {
    const {title} = props
  return (
    <div className='w-full h-screen flex justify-center items-center text-3xl font-bold bg-purple-200'>{title}ComingSoon</div>
  )
}

export default CommingSoon