import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Media = () => {
  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/waheedbasiru_19549104?igsh=MWh6Y3owazc1Njh1bg%3D%3D&utm_source=qr" },
    { icon: <FaTwitter />, link: "https://x.com/refresh_0303?s=21" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/waheed-basiru-46b860233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { icon: <IoLogoWhatsapp />, link: "https://wa.me/+2349063836085" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-bold text-white tracking-wide">Connect</h2>
      <div className="flex gap-4">
        {socials.map((social, i) => (
          <a
            href={social.link}
            key={i}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-gray-50 text-midnightBlue text-xl flex items-center justify-center rounded-2xl shadow-sm border border-gray-100 hover:bg-midnightBlue hover:text-white hover:-translate-y-1.5 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Media;