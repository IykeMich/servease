'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const feats: { id: number; title: string; image: string; total: number }[] = [
  { id: 1, title: "Homes Cleaned", total: 15000, image: "/assets/homepage/feat1.svg" },
  { id: 2, title: "Happy Customers", total: 20000, image: "/assets/homepage/feat2.svg" },
  { id: 3, title: "Verified Service Pros", total: 150, image: "/assets/homepage/feat3.svg" },
  { id: 4, title: "Years of Industry Experience", total: 5, image: "/assets/homepage/feat4.svg" },
];

export default function Achievements() {
    const [counters, setCounters] = useState<number[]>(feats.map(() => 0));
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    // Intersection Observer to detect when the section is in view
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Run animation only once
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the section is visible
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    // Smooth counter animation using requestAnimationFrame
    useEffect(() => {
      if (!isVisible) return;
  
      const duration = 3000; // Animation duration in milliseconds
      const startTime = performance.now();
  
      const easeOutQuad = (t: number) => 1 - (1 - t) ** 2; // Ease-out function
  
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0 to 1
        const easedProgress = easeOutQuad(progress);
  
        setCounters(
          feats.map((feat) => {
            const current = feat.total * easedProgress;
            return progress === 1 ? feat.total : current; // Ensure exact final value
          })
        );
  
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
  
      requestAnimationFrame(animate);
    }, [isVisible]);
  
    return (
      <section id="achievements" ref={sectionRef} className="bg-sGreen">
        <div className="space-y-1 pt-1">
          <div className="h-px w-full bg-gray-300"></div>
          <div className="h-px w-full bg-gray-300"></div>
        </div>
  
        <div className="px-4 md:px-8 lg:px-12 my-8 lg:mr-8">
          <div className="gap-12 grid grid-cols-2 md:flex md:flex-row items-center justify-between text-white">
            {feats.map((feat, index) => (
              <div key={feat.id} className="flex flex-col text-center md:text-start items-center md:items-start gap-2"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Stagger by 100ms per item
                data-aos-duration="800"
                data-aos-once="true">
                <Image
                  src={feat.image}
                  alt={feat.title}
                  height={50}
                  width={50}
                  unoptimized
                  priority
                />
                <div className="texts gap-2">
                  <h1 className="text-sYellow font-outfit font-bold text-3xl">
                    {Math.floor(counters[index]).toLocaleString()}+
                  </h1>
                  <h1 className="font-outfit text-sm">{feat.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="space-y-1 pb-1">
          <div className="h-px w-full bg-gray-300"></div>
          <div className="h-px w-full bg-gray-300"></div>
        </div>
      </section>
    );
  }




// import Image from "next/image"

// export default function Achievements() {
//     const feats: {id: number; title: string; image: string; total:number}[] = [
//         {id:1, title: "Homes Cleaned", total: 15000, image: "/assets/homepage/heroService1.svg"},
//         {id:2, title: "Happy Customers", total: 20000, image: "/assets/homepage/feat2.svg"},
//         {id:3, title: "Verified Service Pros", total: 150, image: "/assets/homepage/feat3.svg"},
//         {id:4, title: "Years of Industry Experience", total: 5, image: "/assets/homepage/feat4.svg"},
//     ]
//   return (
//     <section className="bg-sGreen">
//         <div className="space-y-1 pt-1">
//             <div className="border border-gray-300"></div>
//             <div className="border border-gray-300"></div>
//         </div>

//         <div className="px-4 md:px-8 lg:px-12 my-8 lg:mr-8 ml-4 md:ml-0">
//             <div className="grid grid-cols-2 gap-12 md:flex items-center justify-between text-white">
//                 {feats.map((feat) => (
//                     <div key={feat.id} className="flex flex-col text-start items-start gap-2">
//                         <Image src={feat.image} alt={feat.title} height={50} width={50} priority/>
//                         <div className="texts gap-2">
//                             <h1 className="text-sYellow font-outfit font-bold text-3xl">{feat.total}+</h1>
//                             <h1 className="font-outfit text-sm">{feat.title}</h1>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         <div className="space-y-1 pb-1">
//             <div className="border border-gray-300"></div>
//             <div className="border border-gray-300"></div>
//         </div>
      
//     </section>
//   )
// }
