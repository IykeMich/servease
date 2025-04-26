import Image from "next/image";
import Hero from "./components/homepage/Hero";
import Achievements from "./components/homepage/Achievements";
import Services from "./components/homepage/Services";
import HowServeWorks from "./components/homepage/HowServeWorks";
import HappyCustomers from "./components/homepage/HappyCustomers";
import WhyChooseUs from "./components/homepage/WhyChooseUs";
import Faq from "./components/homepage/Faq";
import Transform from "./components/homepage/Transform";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Achievements />
      <Services />
      <HowServeWorks />
      <HappyCustomers />
      <WhyChooseUs />
      <Faq />
      <Transform />
    </div>
  );
}
