import Image from 'next/image'
import React from 'react'

const BlogCard = () => {
  return (
        <div className="bg-white rounded-lg flex content-center gap-x-4 p-6 shadow-md max-w-5xl border-b border-gray-300">
            {/* Blog Content */}
            <div className='w-3/4'>
                {/* Profile Section */}
                <div className="flex items-center text-wrap mb-4 ">
                    <Image
                    src="/images/profile.png" // Replace with your profile image
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="rounded-full"
                    />
                    <div className="ml-4">
                        {/* Name and Date */}
                        <div className='flex items-center'>
                            <h2 className="font-semibold mr-2">Yididiya Kebede</h2>
                            <p className="text-gray-500 text-sm">Apr 16, 2022</p>
                        </div>
                        {/* Profession */}
                        <p className="text-gray-500 text-sm">Software Engineer</p>
                    </div>
                </div>

                {/* Article Title */}
                <h1 className="text-2xl font-bold mb-2">
                    The essential guide to Competitive Programming
                </h1>
                <h2 className="text-xl font-semibold mb-2">
                    Tab System On React: 3 ways to do it.
                </h2>

                {/* Article Description */}
                <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                </p>

                {/* Tags */}
                <div className="flex space-x-4">
                    <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full">UI/UX</span>
                    <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full">Development</span>
                </div>
            </div>

            {/* Blog Image */}
            <div className="flex items-center">
                <Image
                    src="/icons/blog_picture.svg"
                    height={200}
                    width={100}
                    alt="Blog contents"
                    className="w-[300px] h-[300px] rounded"
                />
            </div>

        </div>
  )
}

export default BlogCard