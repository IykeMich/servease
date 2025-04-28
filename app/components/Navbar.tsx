// import Link from 'next/link'
// import Image from 'next/image'
// import logo from '../../public/logo.svg'
// import { Button } from '@/components/ui/button';
// import Hamburger from './Hamburger';

// export default function Navbar() {

//   const navLinks: {name: string; url: string}[] = [
//     {name: "Home", url: "/"},
//     {name: "Services", url: "#services"},
//     {name: "How it works", url: "#howItWorks"},
//     {name: "Contact us", url: "#footer"},
//     {name: "For Providers", url: "#providers"},
//   ];

//   return (
//     <>
//     <main className="w-full bg-white z-50 mb-1">
//         <div className="flex items-center justify-between px-4 pt-2 md:px-8 xl:px-12">
//             {/* Logo */}
//             <div className="Logo">
//                <Link href="/"> <Image className=' h-auto' 
//                src={logo} alt="Logo" width={200} height={50} /></Link>
//             </div>
//             {/* NavLinks */}
//             <div className="navLinks hidden md:flex gap-3 lg:gap-6 xl:gap-12">
//                 {navLinks.map((nav, index) => (
//                     <Link key={index} href={nav.url}
//                     className='font-outfit font-normal text-base lg:text-xl
//                     hover:text-sGreen ease-in animate duration-100'>{nav.name}</Link>
//                 ))}
//             </div>
//             {/* Login Button */}
//             <div className="button">
//                 <Button className='hidden md:flex shadow-sm bg-sGreen text-white
//                 hover:bg-black hover:shadow-ccOrange !px-2 !my-0 animate-pulse duration-[2]'>
//                     <p className='font-outfit font-medium !text-[8.6px] md:!text-sm  lg:text-2xl !p-0 lg:!py-4 lg:!px-12'>Download App</p>
//                 </Button>
//                 <div className="flex md:hidden"> 
//                     <Hamburger />
//                 </div>
//             </div>
//         </div>
//     </main>
//     </>
// )
// }

'use client';

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { Button } from '@/components/ui/button';
import Hamburger from './Hamburger';
import { useState, useEffect } from 'react';

export default function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks: {name: string; url: string}[] = [
    {name: "Home", url: "/"},
    {name: "Services", url: "#services"},
    {name: "How it works", url: "#howItWorks"},
    {name: "Contact us", url: "#footer"},
    {name: "For Providers", url: "#providers"},
  ];

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down -> hide navbar
      } else {
        setShowNavbar(true); // scrolling up -> show navbar
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  return (
    <>
    <main className={`w-full bg-white z-50 mb-1 transition-transform duration-300 fixed top-0 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between px-4 pt-2 md:px-8 xl:px-12">
            {/* Logo */}
            <div className="Logo">
               <Link href="/"> 
                 <Image className=' h-auto' src={logo} alt="Logo" width={200} height={50} />
               </Link>
            </div>

            {/* NavLinks */}
            <div className="navLinks hidden md:flex gap-3 lg:gap-6 xl:gap-12">
                {navLinks.map((nav, index) => (
                    <Link key={index} href={nav.url}
                    className='font-outfit font-normal text-base lg:text-xl
                    hover:text-sGreen ease-in animate duration-100'>{nav.name}</Link>
                ))}
            </div>

            {/* Login Button */}
            <div className="button">
                <Button className='hidden md:flex shadow-sm bg-sGreen text-white
                hover:bg-black hover:shadow-ccOrange !px-2 !my-0 animate-pulse duration-[2]'>
                    <p className='font-outfit font-medium !text-[8.6px] md:!text-sm lg:!text-2xl !p-0 lg:!py-4 lg:!px-12'>
                      Download App
                    </p>
                </Button>
                <div className="flex md:hidden"> 
                    <Hamburger />
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

