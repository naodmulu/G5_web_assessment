import Image from 'next/image';
import { faComment } from '@/../../../node_modules/@fortawesome/free-regular-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

const RelatedBlogCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image 
        src="/images/laptop.png" // replace with your actual image path
        alt="Coding on a laptop"
        width={400}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Design Liberalized Exchange Rate Management</div>
        <p className="text-gray-700 text-base">by <span className="text-indigo-600 font-semibold">Fred Boone</span> &bull; Jan 10, 2020</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">UI/UX</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DEVELOPMENT</span>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm">
          A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-gray-700 text-sm flex gap-3 text-nowrap">
            <FontAwesomeIcon icon={faComment} size='xl' className="w-5"/>    
            2.3k Likes
        </span>
        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold">Read More</a>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
