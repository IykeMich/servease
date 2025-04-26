import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

export default function Transform() {
  return (
    <section className="bg-sGreen">
      <main className="px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-beetween overflow-hidden">
            <div className="heroSectionOne w-full text-center md:text-start px-6 md:px-0 md:w-[60%] text-white pb-12">
                <div className="headings gap-6 py-12 md:pr-6 lg:pr-12">
                    <h1 className="font-outfit font-semibold text-4xl lg:text-5xl lg:leading-normal pb-4">
                    Transform Your Daily life <br/> with ServEase
                    </h1>
                    <p className="font-outfit font-medium text-base md:text-sm tracking-wider md:tracking-wide leading-normal">
                    Experience the convenience of professional services at your fingertips. 
                    From home cleaning to errands, we&apos;re here to make your life easier and more 
                    enjoyable. Join thousands of satisfied customers who have discovered the 
                    perfect balance between work and life.
                    </p>
                </div>
                <div className="buttons flex flex-col md:flex-row gap-6 justify-between w-full md:pr-7 lg:pr-14">
                    <Button className='flex shadow-sm bg-white text-sGreen
                    hover:bg-black hover:text-gray-500 hover:shadow-gray-500 !px-2 !my-0 border border-sGreen hover:border-none'>
                        <p className='font-outfit font-medium !text-sm  lg:text-2xl !p-0 lg:!py-4 lg:!px-8 flex items-center space-x-2'>     
                        <span><FaGooglePlay/></span>
                        <span> Download on Google App </span>
                        </p>
                    </Button>
                    <Button className='flex shadow-sm bg-white text-sGreen
                    hover:bg-black hover:text-gray-500 hover:shadow-gray-500 !px-2 !my-0 border border-sGreen hover:border-none'>
                        <p className='font-outfit font-medium !text-sm  lg:text-2xl !p-0 lg:!py-4 lg:!px-8 flex items-center space-x-2'>     
                        <span><BsApple/></span>
                        <span> Download on App  Store</span>
                        </p>
                    </Button>
                </div>
            </div>
            <div className="heroSectionTwo w-full md:w-[40%] flex items-center relative overflow-hidden">
                <div className="absolute -bottom-[60%]">
                    <Image src="/assets/homepage/whychooseus/phone1.svg" alt="Servease" width={400} height={400} 
                    className="" />
                </div>
            </div>
        </div>
        
      </main>
    </section>
  )
}
