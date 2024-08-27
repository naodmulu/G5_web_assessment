import Image from 'next/image';
import React from 'react';
import { Blog } from '@/types/BlogListValue';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg flex content-center gap-x-4 p-6 shadow-md min-w-5xl max-w-6xl border-b border-gray-300 font-montserrat">
      {/* Blog Content */}
      <div className='w-3/4'>
        {/* Profile Section */}
        <div className="flex items-center text-wrap mb-4">
          <Image
            src={blog.author?.image || "/images/profile.png"} // Use author's image or a default
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="ml-4">
            {/* Name and Date */}
            <div className='flex items-center'>
              <h2 className="font-semibold mr-2">{blog.author?.name || 'Unknown Author'}</h2>
              <p className="text-gray-500 text-sm">{new Date(blog.createdAt).toLocaleDateString()}</p>
            </div>
            {/* Profession */}
            <p className="text-gray-500 text-sm">{blog.author?.role || 'Unknown Role'}</p>
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-2xl font-bold mb-2">
          {blog.title}
        </h1>

        {/* Article Description */}
        <p
          className="text-gray-600 mb-6"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {/* Tags */}
        <div className="flex space-x-4">
          {blog.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {/* Blog Image */}
      <div className="flex items-center">
        <Image
          src={blog.image}
          height={200}
          width={300}
          alt="Blog contents"
          className="w-[300px] h-[300px] rounded"
        />
      </div>
    </div>
  );
};

export default BlogCard;
