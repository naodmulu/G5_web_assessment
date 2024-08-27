import Image from 'next/image';

const BlogDiscriptionContaner = () => {

  return (
    <div className="max-w-4xl  px-4 pt-[152px]">
      {/* Blog Description Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The essential guide to Competitive Programming
      </h1>
      
      {/* Subheading */}
      <p className="text-center text-gray-600 text-sm md:text-base flex items-center justify-center mb-6">
        PROGRAMMING, TECH 
        <span className="inline-block w-px bg-gray-400 mx-2 h-4"></span> 
        6 MIN READ
      </p>

      {/* Blog Description Image */}
      <div className="relative h-64 md:h-80 mb-8">
        <Image
          src="/icons/Blog_picture.svg"
          alt="Competitive Programming"
          layout="fill"
          objectFit="cover"
          className="rounded"
          />
      </div>

      {/* Author Information */}
      <div className="flex flex-col items-center justify-center mb-8">
        
        <Image
          src="/images/chaltu_profile.png"
          alt="Author Avatar"
          width={70}
          height={70}
          className="rounded-full "
        />
        <div className="ml-4 text-center">
            <div className='flex justify-around'>
          <p className="text-sm font-semibold">CHALTU KEBEDE</p>
          <span className="inline-block w-px bg-gray-400 mx-2 h-4"></span> 
          <p className="text-sm font-semibold">SOFTWARE ENGINEER</p>

            </div>
          <p className="text-xs text-blue-600">@CHALTU_KEBEDE</p>
        </div>
      </div>

      {/* Blog Description Content */}
      <div
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{
          __html: '<p>We know that data structure and algorithm can seem hard at first glance. And you may not be familiar with advanced algorithms, but there are simple steps you can follow to see outstanding results in a short period of time.</p>',
        }}
      ></div>

      {/* Additional Blog Description Content */}
      <div className="prose prose-lg mb-8 max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="prose prose-lg mb-8 max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="prose prose-lg mb-8 max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    </div>
  );
};

export default BlogDiscriptionContaner;
