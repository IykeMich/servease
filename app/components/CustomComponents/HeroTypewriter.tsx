// 'use client'
// import { useEffect, useState } from "react";
// import { Typewriter } from "react-simple-typewriter";

// export default function HeroTypewriter() {
//     const [startTyping, setStartTyping] = useState(false);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setStartTyping(true);
//       }, 800); // match your fade-in duration (800ms)
  
//       return () => clearTimeout(timer);
//     }, []);
//   return (
//     <>
    
//             {startTyping && (
//     <Typewriter
//         words={['one click.']}
//         loop={1}
//         cursor={false}
//         typeSpeed={60} // smoother typing
//     />
//     )}
//     </>
//   )
// }


'use client';
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroTypewriter() {
    const [startTyping, setStartTyping] = useState(false);
    const [firstDone, setFirstDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 600); // match your fade-in duration (800ms)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {startTyping && (
                <>
                    {!firstDone ? (
                        <>
                        <span className="text-black">
                            <Typewriter
                                words={['in just ']} 
                                loop={1}
                                cursor={false}
                                typeSpeed={40}
                                onLoopDone={() => setFirstDone(true)}
                            />
                        </span> 
                        <span className="text-sGreen">
                            <Typewriter
                                words={['one click.']}
                                loop={1}
                                cursor={false}
                                typeSpeed={40}
                            />
                        </span>
                        </>
                    ) : (
                        null
                    )}
                </>
            )}
        </>
    );
}

