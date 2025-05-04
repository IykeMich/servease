import { Button } from '@/components/ui/button';
import { div } from 'motion/react-client';
import Image from 'next/image';
import React from 'react'

export default function WhyChooseUs() {
    const reasons: {id:number; title:string; image:string}[] = [
        {id: 1, title: "Vetted professionals", image: "/assets/homepage/whychooseus/wcu1.svg"},
        {id: 2, title: "Transparent pricing", image: "/assets/homepage/whychooseus/wcu2.svg"},
        {id: 3, title: "Speedy delivery", image: "/assets/homepage/whychooseus/wcu3.svg"},
        {id: 4, title: "Reliable 24/7 Support", image: "/assets/homepage/whychooseus/wcu4.svg"},
    ]
  return (
    <section>
        <div className="ashDiagonal">
            <div className="py-12 lg:py-16 gap-12 text-center px-4">
                <h1 className="text-2xl md:text-3xl font-medium leading-relaxed"
                data-aos="fade-in-down"
                data-aos-duration="1000"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"                   
                >
                    Why Choose ServEase?
                </h1>
                <p className="text-sm"
                    data-aos="fade-in-up"
                    data-aos-duration="2000"
                    data-aos-offset="150"
                    data-aos-easing="ease-in-sine"
                >Why 10,000+ Users Love ServEase</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8 px-8 lg:px-12 pb-12">
                {reasons.map((reason) => (
                    <div key={reason.id} className='bg-[#E5E5E5]/35 py-6 px-12 gap-4 flex flex-col justify-center items-center cursor-pointer'
                    data-aos="fade-up"
                    data-aos-delay={`${reason.id * 200}`} // Stagger by 100ms per item
                    data-aos-duration="800"
                    data-aos-once="true">
                        <Image src={reason.image} alt={reason.title} width={50} height={50} />

                        <p className='text-sm'>{reason.title}</p>

                    </div>
                ))}
            </div>
        </div>  
        <div id="providers" className="bg-sGreen flex flex-col md:flex-row justify-between overflow-x-hidden">
                <div className="px-8 lg:px-12 py-8 gap-6 block text-center md:text-start text-white">
                    <h1 className='text-3xl pb-2'>Become a Service Provider</h1>
                    <p className="pb-6 md:pr-12">
                    Join our network of trusted pros. Set your schedule, get steady gigs, and earn great pay doing what you&apos;re good at.
                    </p>
                    <Button className="bg-white hover:bg-black text-sGreen hover:text-gray-500 rounded-lg py-3 px-12" >   Apply Now  </Button>
                </div>
                <div className='relative overflow-hidden md:flex lg:pr-8 hidden'>
                    <Image src="/assets/homepage/whychooseus/phone1.svg" alt="Phone" width={200} height={200} className='-bottom-4'/>
                    <Image src="/assets/homepage/whychooseus/phone2.svg" alt="Phone" width={200} height={200} className='-top-4'/>
                </div>
        </div>    
    </section>
  )
}
