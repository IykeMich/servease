import Image from 'next/image';
import React from 'react'

export default function HappyCustomers() {
  return (
    <section id='customers' className='w-full overflow-hidden ashRadial'>
        <div className='px-4 md:px-8 lg:px-12 mb-12'>
            <h1 className="text-3xl text-center font-medium leading-relaxed
            py-12 lg:py-16">
                Our Happy Customers
            </h1>
            <div className="customers-section flex flex-wrap flex-col md:flex-row justify-between gap-4 md:gap-0">
                {customers.map((customer) => (
                    <div key={customer.id} className="customer-card rounded-xl p-4 md:w-1/4 lg:w-1/5">
                        <div className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start gap-1 lg:gap-3">
                            <Image src={customer.image} alt={customer.name} width={70} height={70} className="w-20 h-20 md:w-12 md:h-12 rounded-full"/>
                            <h4 className="font-outfit font-medium text-xl md:hidden block">{customer.name}</h4>
                            <div className="flex items-center md:mt-2">
                                {[...Array(customer.stars)].map((_, index) => (
                                    <span key={index} className="text-yellow-500">★</span>
                                ))}
                            </div>
                            <div>
                                <h4 className="font-outfit font-medium text-xl hidden md:block">{customer.name}</h4>
                                <p className="text-sm text-gray-600">{customer.review}</p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}


const customers: {id: number; image: string; name: string; review: string; stars: number}[] = [
    {id: 1, image: "/assets/homepage/customers/customer1.svg", name: "Amaka Cristopher", review: "Absolutely love this service. They’re prompt, thorough, and friendly. I can trust them to clean my home exactly how I want it. Plus, they’re affordable and use safe, green products.", stars: 5},
    {id: 2, image: "/assets/homepage/customers/customer2.svg", name: "Taiwo Musa", review: "ServEase sent a technician within an hour to fix my broken kitchen tap. Super professional, no drama, and the price was right. Honestly a lifesaver!", stars: 5},
    {id: 3, image: "/assets/homepage/customers/customer3.svg", name: "Morah ThankGod", review: "I forgot a few essentials and couldn’t leave work. ServEase picked up my groceries and delivered them on time—everything was fresh. Huge time-saver!", stars: 5},
    {id: 4, image: "/assets/homepage/customers/customer4.svg", name: "Bekky Amoghon", review: "My bathroom flooded on a Sunday and I didn’t know what to do. Found ServEase, and a plumber showed up in 45 minutes. Fixed it fast and cleaned up after. Unreal.", stars: 5}
]