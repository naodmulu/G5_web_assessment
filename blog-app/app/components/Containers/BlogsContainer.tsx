import React from 'react';
import BlogCard from '../Cards/BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const BlogsContainer = () => {
  return (
    <div className='flex flex-col items-center p-5'>
      <h1 className='text-2xl font-bold mb-4 self-start'>Blogs</h1>

      {/* Blog search and Blog add */}
      <div className='flex items-center gap-x-1 mb-4 w-full max-w-md '>
        <input 
          type="text" 
          placeholder="Search blogs..." 
          className='flex-grow py-2 px-6 border  border-gray-300 rounded-3xl'
        />
        <button 
          className='p-2 flex items-center bg-blue-500 text-white rounded-3xl hover:bg-blue-600'
        >
            <FontAwesomeIcon icon={faPlus} className='h-3 mr-2' size="xl" />
          New Blog
        </button>
      </div>

      {/* Blog Cards */}
      <div className='w-full max-w-4xl flex flex-wrap gap-0'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        {/* Add more BlogCard components as needed */}
      </div>
    </div>
  );
};

export default BlogsContainer;
