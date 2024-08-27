import BlogDiscriptionContainer from '@/app/components/Containers/BlogDiscriptionContainer'
import RelatedBlogContainer from '@/app/components/Containers/RelatedBlogContainer'
import React from 'react'

const BlogsPage = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <BlogDiscriptionContainer/>
      <RelatedBlogContainer/>
    </div>
  )
}

export default BlogsPage