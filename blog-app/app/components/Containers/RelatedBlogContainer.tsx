import React from 'react'
import RelatedBlogCard from '../Cards/RelatedBlogCard'

const RelatedBlogContainer = () => {
  return (
    <div className='w-full flex justify-around'>
        <RelatedBlogCard/>
        <RelatedBlogCard/>
        <RelatedBlogCard/>

    </div>
  )
}

export default RelatedBlogContainer