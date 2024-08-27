import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const LinkToSocialMedia = () => {
    // Social Media Links
    const links = [
        { name: "Twitter", url: "https://www.twitter.com", icon: faTwitter },
        { name: "Facebook", url: "https://www.facebook.com", icon: faFacebook },
        { name: "YouTube", url: "https://www.youtube.com", icon: faYoutube },
        { name: "LinkedIn", url: "https://www.linkedin.com", icon: faLinkedin },
        { name: "Instagram", url: "https://www.instagram.com", icon: faInstagram }
    ];

    return (
        <div className='w-full py-2 px-4 mx-4 flex justify-between items-center '>
            {/* Rights reserved */}
            <div className="text-gray-700">
                &copy; 2020 Africa to Silicon Valley, Inc. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex px-5 gap-x-6">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9CA3AF] hover:text-blue-600"
                    >
                        <div className='w-6'>
                            
                        <FontAwesomeIcon aria-label={link.name} icon={link.icon} size="lg" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LinkToSocialMedia;
