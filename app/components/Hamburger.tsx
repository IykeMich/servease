'use client'
import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {X, Menu} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}
                className="text-ccBlue p-2 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} /> }
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{x: "100%"}} animate={{x: 0}} exit={{x: "100%"}} transition={{duration: 0.4, ease: "easeInOut"}}
                    className="fixed top-0 right-0 h-screen w-full justify-center bg-white pb-6 px-6 shadow-lg z-50">
                        <div className="flex justify-between items-center">
                            <Image src="/logo.svg" alt="Serve with Ease" width={200} height={100} priority unoptimized />
                            <button onClick={() => setIsOpen(false)} className="top-8 right-4 text-sGreen">
                                <X size={28} /> 
                            </button>
                        </div>

                        <nav className="flex flex-col items-start text-start space-y-6 text-lg mt-12">
                            {navLinks.map((item) => (
                                <Link key={item.url} href={item.url.toLowerCase()} onClick={() => setIsOpen(false)}
                                className="text-black hover:text-sGreen gap-3 text-lg"> {item.name} </Link>
                            ))}
                        </nav>

                        <div className="button flex items-start w-[90%] mt-12">
                            <Button className='shadow-sm bg-sGreen text-white
                            hover:bg-black hover:text-gray-500 hover:shadow-sGreen !px-2 !my-0 w-full animate-pulse duration-[2000]'>
                                <p className='font-medium text-base !p-0 lg:!p-4'>Download App</p>
                            </Button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const navLinks: {name: string; url: string}[] = [
    {name: "Home", url: "/"},
    {name: "Services", url: "#services"},
    {name: "How it works", url: "#howItWorks"},
    {name: "Contact us", url: "#contact"},
    {name: "For Providers", url: "#providers"},
  ];