'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsApple, BsPeopleFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


export default function Hero() {
    const heroServices: {title: string; image:string}[] = [
        {title: 'Trusted Service', image: "/assets/homepage/heroService1.svg"},
        {title: '24/7 Support', image: "/assets/homepage/heroService2.svg"},
        {title: 'Secure Booking', image: "/assets/homepage/heroService3.svg"},
    ]
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 800); // match your fade-in duration (800ms)
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <section id="hero" className="">
      <main className="px-2 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-beetween overflow-hidden">
            <div className="heroSectionOne w-full md:w-[60%] px-3 md:px-0">
                <div className="headings gap-6 pt-4 pb-12 md:pr-12 text-center md:text-start">
                    <h1
                        className="font-outfit font-semibold text-5xl leading-snug lg:leading-normal pb-4 opacity-0 animate-fade-in"
                        data-aos="fade-in"
                        data-aos-duration="800"
                        data-aos-once="true"
                        >
                        <span className="text-sGreen">Get services </span>
                        that simplify living—in just 
                        <span className="text-sGreen typing-animation ml-2">
                            {startTyping && (
                            <Typewriter
                                words={['one click.']}
                                loop={1}
                                cursor={false}
                                typeSpeed={60} // smoother typing
                            />
                            )}
                        </span>
                    </h1>

                    <p className="font-outfit font-medium text-sm tracking-wide
                    px-2.5 md:px-0"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-once="true">
                    From cleaning to laundry to errands, we connect you with 
                    reliable local helpers to make your life easier and more enjoyable.
                    </p>
                </div>
                <div className="buttons gap-4 mx-6 md:mx-0 flex flex-col md:flex-row md:justify-between md:w-full md:pr-14">
                    <Button className='flex shadow-sm bg-white text-sGreen
                    hover:bg-sGreen hover:text-white hover:shadow-sGreen !px-2 !my-0 border border-sGreen hover:border-none'>
                        <p className='font-outfit font-medium !text-sm  lg:text-2xl !p-0 lg:!py-4 lg:!px-8 flex items-center space-x-2'>     
                        <span><FaGooglePlay/></span>
                        <span> Download on Google App </span>
                        </p>
                    </Button>
                    <Button className='flex shadow-sm bg-white text-sGreen
                    hover:bg-sGreen hover:text-white hover:shadow-sGreen !px-2 !my-0 border border-sGreen hover:border-none'>
                        <p className='font-outfit font-medium !text-sm  lg:text-2xl !p-0 lg:!py-4 lg:!px-8 flex items-center space-x-2'>     
                        <span><BsApple/></span>
                        <span> Download on App  Store</span>
                        </p>
                    </Button>
                </div>
                <div className="Join py-8">
                    <p className="flex space-x-1.5 items-center text-sm">
                        {/* <span><GoPeople /></span> */}
                        <span className="text-sGreen"><BsPeopleFill size={20} /></span>
                        <span>Join 20,000+ happy, stress-free users already enjoying ServEase.</span>
                    </p>
                    <div className="mt-8 flex space-x-6 items-center">
                        {heroServices.map((service,index) => (
                            <div key={index} className="">
                                <div className="flex flex-col justify-center text-center items-center space-y-1">
                                <Image src={service.image} alt={service.title} width={50} height={50} className="w-8 h-8" 
                                data-aos="zoom-in" data-aos-duration="1500" priority unoptimized/>
                                <p className="font-outfit text-sm">{service.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="heroSectionTwo w-full justify-center md:w-[40%] hidden md:flex items-center">
                <div>
                    <Image src="/assets/homepage/heroImage.svg" alt="Servease" width={400} height={400} priority
                    data-aos="zoom-in" data-aos-duration="1500" className="h-screen md:h-[50%] lg:h-screen"/>
                </div>
            </div>
        </div>
        
      </main>
    </section>
  )
}


