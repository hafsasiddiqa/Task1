import React from 'react'
import Link from 'next/link';
import { FaPhone, FaClock, FaFacebook, FaInstagram, FaBehance, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className="bg-blue-700 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
            <FaPhone className="mr-2 ml-10"/>  +92 3455555396
            </div>
            <div className="flex items-center space-x-1">
             <FaLocationPin className="mr-2 ml-10" /> Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
            </div>
            <div className="flex items-center space-x-1">
             <FaClock className="ml-10 mr-2" /> Mon - Fri 8.00 - 20.00
            </div>
          </div>
          <div className="flex space-x-4  ">
            <Link href={"/"} className="hover:underline "><FaFacebook /></Link>
            <Link href={"/"} className="hover:underline "><FaInstagram /></Link>
            <Link href={"/"} className="hover:underline "><FaBehance /></Link>
            <Link href={"/"} className="hover:underline"><FaLinkedin /></Link>
            <Link href={"/"} className="hover:underline"><FaYoutube /></Link>
          </div>
          <div className="flex space-x-2">
            <Link href={"/"} className="hover:underline"><span>👤</span> Login</Link>
            <Link href={"/"} className="hover:underline"><span className="text-gray-400">|</span> Register</Link>
          </div>
        </div>
      </div>
  )
}
