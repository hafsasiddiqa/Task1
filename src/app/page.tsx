'use client'
import Image from "next/image"
import Link from "next/link";
import Topbar from "../components/Topbar"
import { ImWhatsapp} from "react-icons/im";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import backgroundcode from '../assets/background-code.jpg'
import Navbar from "../components/Navbar"



export default function Home() {
  const [index, setIndex] = useState(0);
  const texts = ['Social Skills', 'Marketing', 'Programming', 'Web Design'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <Topbar />
    
      
      <main className="flex flex-col items-center justify-between" >
        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
          
      <Image
      src={backgroundcode}
      alt="background image"
      className="w-full"
      width={1000}
      height={1000}
      />
      </div>
      <div className="max-w-screen-lg m-auto h-[200vh] py-5 px-5 text-center ">
       <Navbar />
     
      
      <div className="container mx-auto py-24 text-center">
          <h1 className="text-5xl md:text-5xl font-bold text-slate-500 mb-4 mt-11">
            Learn the fundamentals with our
          </h1>
          <h1 className="text-5xl md:text-5xl font-bold text-slate-500 mb-4">
            Experts in {' '}
            <motion.span
              key={texts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-purple-600 ml-3"
            >
              {texts[index]}
            </motion.span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Utilize Effective Learning to Reach Your Potential!
          </p>
          <div className="relative max-w-lg mx-auto">
          
            <input
           
              type="text"
              className="w-full py-3 px-4 text-gray-800 rounded-md"
              placeholder="Search courses..." 
              />
              
               
               <h3 className="mt-2 text-white mr-10 ">
                Explore our more useful products ♡
               </h3>
               <footer className="mr-80">
     <div className=" bg-white text-blue-900 px-4 py-2 mt-20 rounded-2xl border-gray-300">
      <ImWhatsapp className="text-green-500 text-xl" /> 
      <input
        type="text"
        className="rounded-full"
        placeholder="Need Help?Chat with us ..."
      />
    </div>
    
     </footer>
          </div>
        </div>
        </div>
      </div>
     
      </main>
      </>
  );
}
     
      
       

