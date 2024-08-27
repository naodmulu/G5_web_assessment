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
        <div className='w-full py-2 px-8 flex justify-between'>
            {/* Rights reserved */}
            <div className="mb-4">
                &copy; 2020 Africa to Silicon Valley, Inc. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-x-6">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 bg-red-900 hover:text-blue-600"
                    >
                        .
                        <FontAwesomeIcon alt={link.name} icon={link.icon} size="lg" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LinkToSocialMedia;
