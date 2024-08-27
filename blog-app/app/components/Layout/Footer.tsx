import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkToSocialMedia from './LinkToSocialMedia';

const Footer = () => {
  // Navigations with URLs
  const navigations = [
    { title: "Home", url: "/" },
    { title: "Teams", url: "/teams" },
    { title: "Success Stories", url: "/success-stories" },
    { title: "About Us", url: "/about-us" },
    { title: "Blogs", url: "/blogs" },
    { title: "Get Involved", url: "/get-involved" }
  ];

  // Teams with URLs
  const teams = [
    { title: "Board Members", url: "/teams/board-members" },
    { title: "Advisors/Mentors", url: "/teams/advisors-mentors" },
    { title: "Executives", url: "/teams/executives" },
    { title: "Staff", url: "/teams/staff" }
  ];

  // Blogs suggestions
  const blogs = [
    { title: "Recent Blogs", url: "/blogs/recent" },
    { title: "New Blog", url: "/blogs/new" }
  ];

  return (
    <div className="w-full flex flex-col  py-12 px-8">
      {/* Support Us Section */}
      <div className=" flex gap-4 px-4 border-y py-4 border-gray-300">
        <div className="flex justify-around mb-6 px-4">
          <Image
            src="/icons/Support.svg" // Replace with your support image
            alt="Support Us"
            width={300}
            height={300}
          />
          <div className="text-center p-6">
              <h2 className="text-lg font-semibold mb-4">
                  Get involved in improving tech education in Africa!
              </h2>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
                  Support Us
              </button>
          </div>
        </div>
        {/* Navigation, Teams, Blogs Links */}
        <div className="flex justify-around w-[70%] mb-7">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul>
              {navigations.map((navItem, index) => (
                <li key={index} className="mb-2">
                  <Link href={navItem.url}>
                    <div className="text-gray-700 hover:text-blue-600">
                      {navItem.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Teams</h3>
            <ul>
              {teams.map((teamItem, index) => (
                <li key={index} className="mb-2">
                  <Link href={teamItem.url}>
                    <div className="text-gray-700 hover:text-blue-600">
                      {teamItem.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Blogs</h3>
            <ul>
              {blogs.map((blogItem, index) => (
                <li key={index} className="mb-2">
                  <Link href={blogItem.url}>
                    <div className="text-gray-700 hover:text-blue-600">
                      {blogItem.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Social Media Links */}
      <LinkToSocialMedia />
    </div>
  );
};

export default Footer;
