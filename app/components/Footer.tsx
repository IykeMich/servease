import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiEnvelope } from "react-icons/bi";
import { BsTiktok, BsTwitterX, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function Footer() {
  return (
    <section className="bg-[#161C2D] text-white">
      <div className="pt-16 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-12 justify-between">
        <div className="first-section flex w-full md:w-1/3">
            <div className="flex flex-col gap-4">
                <Link href="#hero" ><Image src="/logo2.svg" alt="Servease" width={150} height={100} /></Link>
                <p className="text-sm">
                We are a team of passionate experts who take pride in delivering the 
                highest standard of service. With years of experience in the industry, 
                we’ve perfected our cleaning methods to ensure every job is done right.
                </p>
                <div className="flex w-[80%] md:w-[50%] justify-between items-center pt-8 socials">
                    <Link href="contact"><FaFacebook /></Link>
                    <Link href="contact"><BsTwitterX /></Link>
                    <Link href="contact"><BsWhatsapp /></Link>
                    <Link href="contact"><BsTiktok /></Link>
                    <Link href="contact"><BsYoutube /></Link>
                </div>
            </div>
        </div>
        <div className="second-section flex flex-col md:flex-row justify-between gap-4 md:space-x-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-xl font-bold">Company</h1>
                <ul className="text-sm text-[#A6A6A6] cursor-pointer grid gap-1.5 md:gap-3">
                    <Link href="hero">Home </Link>
                    <Link href="services">Our Services</Link>
                    <Link href="/">Projects</Link>
                    <Link href="about">About Us</Link>
                    <Link href="/">Blog</Link>
                    <Link href="contact">Contact</Link>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-xl font-bold">Services</h1>
                <ul className="text-sm text-[#A6A6A6] cursor-pointer grid gap-1.5 md:gap-3">
                    <li>Registered cleaning</li>
                    <li>Delivery services</li>
                    <li>Shopping</li>
                    <li>Errand runs</li>
                    <li>Plumbing services</li>
                    <Link href="services">Company services</Link>
                </ul>
            </div>
        </div>

        <div className="third-section grid gap-6">
            <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold flex items-center gap-2"><span><Clock /></span>We&apos;re Open</h1>
                <p>Monday - Saturday 08.00 - 18.00</p>
            </div>
            <div className="flex flex-col">
                <Link href="https://maps.google.com/maps?q=Lekki+Pennisula+II,+Lagos" target="_blank">
                    <h1 className="text-white text-lg font-bold flex items-center gap-2">
                        <span> <GoLocation /> </span> Office Location</h1>
                    <p>@ Bola Ahmed St, Lagos, Nigeria.</p>
                </Link>
            </div>            
            <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold flex items-center gap-2"><span><BiEnvelope /></span>Send a Message</h1>
                <Link href="mailto:info@servease.com">info@servease.com</Link>
            </div>            
        </div>
      </div>
      <div className="w-full mt-8 border-t border-gray-500">
            <div className="flex text-xs md:text-sm text-[#A6A6A6] pt-6 py-8 justify-between px-2 md:px-8 lg:px-12">
                <div className="copyright">
                    <p>ServEase. Copyright © 2025 </p>
                </div>
                <div className="lg:pr-6">
                    <p>Privacy Policy | Terms & Conditions</p>
                </div>
            </div>
      </div>
    </section>
  )
}
