"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return null; 

}




// import { useEffect } from 'react';
// import 'aos/dist/aos.css';
// import aos from 'aos';

// const AosWrapper = ({ children }) => {
//   useEffect(() => {
//     aos.init({
//       // Global settings:
//       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//       startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//       initClassName: 'aos-init', // classes applied after initialization
//       animatedClassName: 'aos-animate', // classes applied on animation
//       useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//       disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//       debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//       throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
//     });
//   }, []);

//   return <>{children}</>;
// };

// export default AosWrapper;