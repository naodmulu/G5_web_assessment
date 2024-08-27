"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from '@/node_modules/next/navigation';

const NavBar = () => {
    const currentPath = usePathname();

    // check url path is active
    const isActive = (path:string) =>{
        return currentPath === path
    }
    // Navigation items with URLs
    const navigations = [
        { title: "Home", url: "/" },
        { title: "Teams", url: "/teams" },
        { title: "Success Stories", url: "/success-stories" },
        { title: "About Us", url: "/about-us" },
        { title: "Blogs", url: "/blogs" },
        { title: "Get Involved", url: "/get-involved" }
    ];

    return (
        <div className="w-full absoulte top-0 flex justify-between items-center py-4 px-8">
            {/* LOGO */}
            <div className="flex items-center">
            <Image
                src="/icons/A2SV_logo.svg"
                alt="Logo"
                width={150}
                height={150}
            />
            
            </div>

            {/* NAVIGATIONS */}
            <div className="flex space-x-8">
                {navigations.map((navItem, index) => (
                    <Link key={index} href={navItem.url}>
                        <div className="relative text-gray-700 hover:text-blue-600 flex flex-col items-center">
                            {navItem.title}
                            {/* Blue line under active link */}
                            {isActive(navItem.url) && (
                                <div className="w-full h-1 rounded-md bg-blue-600 mt-1"></div>
                            )}
                            
                        </div>
                    </Link>
                ))}
            </div>

            {/* LOGIN and DONATE Buttons */}
            <div className="flex space-x-4">
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600">
                    Login
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Donate
                </button>
            </div>
        </div>
    );
};

export default NavBar;
