"use client";
import React, { useEffect } from 'react';
import BlogCard from '../Cards/BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/store';
import { fetchBlogs } from '@/app/Redux/Slices/blogSlices';
import { Blog } from '@/types/BlogListValue';

const BlogsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log("blogs",blogs)

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
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsContainer;
