import Image from "next/image";
import { BiCheck } from "react-icons/bi";


export default function Services() {
  return (
    <section>
        <div id="services" className="py-12 lg:py-16 gap-12 px-4 text-center">
            <h1 className="text-4xl font-medium leading-relaxed"
            data-aos="fade-in-down"
            data-aos-duration="800"
            data-aos-once="true">Our Core Services</h1>
            <p className="text-sm lg:text-base"
            data-aos="fade-in-up"
            data-aos-duration="1600"
            data-aos-once="true"            
            >We provide a range of high-quality home services to make your life easier and your home more enjoyable.</p>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-0">
            {services.map((service) => (
                <div key={service.id} className={`${service.id === 2 || service.id === 4 ? "bg-sYellow2" : "bg-sGreen2"} 
                ${service.id === 2 || service.id === 3 ? "text-sYellow" : "text-sGreen"} 
                w-full ${servide.id < 3 ? "md:w-1/3" : "md:w-1/2"}`}>
                    <div className={`p-8 lg:px-16 gap-4`}>
                        <Image src={service.image} alt={service.title} width={50} height={50} className="w-12 h-12"/>
                        <h4 className={`font-outfit font-medium text-xl pt-4`}>{service.title} </h4>
                        <p className="text-sm text-black py-4 leading-normal">{service.subtitle}</p>
                        <div className="checks">
                            {service.checks.map((check, index) => (
                                <div key={index} className="">
                                    <div className="flex items-center text-sm gap-3">
                                    <BiCheck />
                                    <p className="text-black">{check}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    </section>
  )
}

const services: {id: number; title: string; subtitle: string; image: string; checks:string[]}[] = [
    {id:1, 
        title: "Home Cleaning", 
        image: "/assets/homepage/services/service1.svg", 
        subtitle: "Book professional cleaners for deep cleans, routine tidying, or special occasions—customized to your space.", 
        checks: ["House Cleaning", "Deep Cleaning", "Move In/Out Cleaning", "Custom cleaning plans"]},
    {id:2, title:"Delivery Services", image: "/assets/homepage/services/service2.svg", subtitle: "Send or receive packages, groceries, or goods—reliably, safely, and right on time.", checks: ["Food delivery", "Package delivery", "Same-day delivery", "Scheduled deliveries"]},
    {id:3, title:"Errands", subtitle: "Save time with our reliable errand running services. From pickng up dry cleaning to dropping off parcels, our errand runners save you hours every week.", image: "/assets/homepage/services/service3.svg", checks: ["Glocery shopping", "Prescription pickup", "Package delivery", "General errands"]},
    {id:4, title:"Home Maintenance", subtitle: "From broken switches to leaky faucets, our skilled handyman handle all your home fixes--so you don't have to", image: "/assets/homepage/services/service4.svg", checks: ["plumbing repairs", "Electrical work", "Furniture assembly", "General handyman tasks"]},
    {id:5, title:"Escrow Payments", subtitle: "Your money stays protected until the job is done-guaranteed.", image: "/assets/homepage/services/service5.svg", checks: ["Payment held securely until service is completed", "Reduces risk for both customers and providers", "Ensures fairness and satisfaction for every task", "Simple, automatic release once the job is verified"]},
]
