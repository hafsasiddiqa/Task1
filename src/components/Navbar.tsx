import React from 'react'
import Logo from "../components/Logo"
import Link from 'next/link'


export default function Navbar() {
  return (
    
    <header className=" text-white p-4">
      
        <div className="container mx-auto flex justify-between items-center ">
      
        <Logo />
      <nav className="space-x-4 ">
        <Link href={"/"} className="hover:underline ">Home</Link>
        <Link href={"/"} className="hover:underline ">About Us</Link>
        <Link href={"/"} className="hover:underline">Certifications</Link>
        <Link href={"/"} className="hover:underline">Careers</Link>
        <Link href={"/"} className="hover:underline">Seminars</Link>
        <Link href={"/"} className="hover:underline">Tech Blogs</Link>
        <Link href={"/"} className="hover:underline">IPortal Login</Link>
       
      </nav>
      </div>
      
  </header>
  )
}
