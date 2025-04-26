import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HowServeWorks() {
  return (
    <section className="w-full">
        {/* <div className="bg-[#7e6363]"> */}
        <div className="bg-[#f7f7f7] mb-12">
            <div className="py-12 lg:py-16 gap-12 text-center px-4">
                <h1 className="text-4xl font-medium leading-relaxed"
                data-aos="fade-in-down"
                data-aos-duration="1000"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"            
                >How ServEase Works</h1>
                <p className="text-sm"
                data-aos="fade-in-up"
                data-aos-duration="2000"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                              
                >Getting a helping hand has never been easier. Our simple process connects you with reliable service providers in just a few steps.</p>
            </div>
            <div className="flex flex-col justify-evenly gap-8 md:flex-row md:flex-wrap px-8 lg:px-12 pb-4">
                {guidelines.map((guideline) => (
                    <div key={guideline.id} className="flex flex-col items-center justify-center gap-4 px-8 lg:px-8 py-8 bg-white shadow-lg rounded-xl
                    border-t-4 border-sGreen md:w-1/4 lg:w-1/6"
                    data-aos="fade-up"
                    data-aos-delay={`${guideline.id * 100}`} // Stagger by 100ms per item
                    data-aos-duration="800"
                    data-aos-once="true">
                        <div className="rounded-lg flex flex-col items-center justify-center mt-4">
                            <div className="rounded-lg w-full h-20 bg-sGreen2 relative items-center flex justify-center">
                                <div className="absolute bg-sGreen text-white items-center py-2 px-4 rounded-full -top-6">
                                {guideline.id} 
                                </div>
                                <Image src={guideline.image} alt={guideline.title}  width={25} height={25} className="w-8 h-8"/>
                            </div>
                            <h4 className={`font-outfit pt-4`}>{guideline.title}</h4>
                            <p className="text-sm text-black py-4 leading-normal">{guideline.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full mb-12">
                <div className="flex flex-col-reverse md:flex-row gap-4 justify-center items-center px-4 md:px-8 lg:px-20">
                    <div className="w-full h-auto hidden md:flex">
                        <Image src="/assets/homepage/illustration.svg" alt="Who we are" width={400} height={400}/>
                    </div>
                    <div className="bg-sGreen text-white rounded-t-full rounded-b-[200%] md:rounded-b-none md:!rounded-e-full rounded-s-none md:rounded-tl-none ">
                        <div className="pt-24 pb-8 md:py-12 px-8 md:px-12 lg:px-16 gap-4 text-center md:text-start">
                            <h1 className=" text-3xl leading-normal">Too much to do in little time? <br/> Allow us lighten the load</h1>
                            <p className="text-sm pt-2 pb-4 text-gray-200">
                                Whether it&apos;s cleaning, fixing, shopping, or running errands—We&apos;ll take care of the tasks that steal your time.
                                Just open the app, make a request, and get back to doing what you love.
                            </p>
                            <Button className="bg-white hover:bg-black text-sGreen hover:text-gray-500 rounded-md py-3 px-12 w-full md:w-[50%]" > Download App </Button>
                        </div>
                    </div>

                </div>
        </div>



      
    </section>
  )
}

const guidelines: {id:number; image:string; title:string; description:string}[] = [
    {id:1, image: "/assets/homepage/guidelines/guideline1.svg", title: "Select Your Service", description: "Browse and pick from a range of trusted home services — cleaning, repairs, errands...."},
    {id:2, image: "/assets/homepage/guidelines/guideline2.svg", title: "SChoose time & location", description: "Tell us when and where you need help — we'll match you with the right professional."},
    {id:3, image: "/assets/homepage/guidelines/guideline3.svg", title: "Confirm & Pay", description: "Secure your booking in seconds with easy online payment and instant confirmation."},
    {id:4, image: "/assets/homepage/guidelines/guideline4.svg", title: "Relax we'll take care of it", description: "Sit back and enjoy — our vetted pros will handle the job with care and efficiency."},
    {id:5, image: "/assets/homepage/guidelines/guideline5.svg", title: "Track your service", description: "Know exactly what's happening at every step of your service order"},
]
