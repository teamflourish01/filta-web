// import React, { useEffect, useRef } from "react";
// import "../ChooseUs/ChooseUs.css";
// import CardChoose from "./CardChoose/CardChoose";
// import uptodate from "../../assets/uptodate.png";
// import customization from '../../assets/customization.png';
// import quality from '../../assets/quality.png';
// import approach from '../../assets/approach.png';
// import { gsap } from "gsap"; // Add this import
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Add this import

// gsap.registerPlugin(ScrollTrigger); // Register the plugin

// function ChooseUs() {
//   const cardsLeftRef = useRef(null);
//   const cardsRightRef = useRef(null);

//   useEffect(() => {
//     const cardsLeft = cardsLeftRef.current;
//     const cardsRight = cardsRightRef.current;

//     gsap.fromTo(
//       cardsLeft,
//       { x: "-100%", opacity: 0 },
//       {
//         x: "0%",
//         opacity: 1,
//         duration: 4,
//         scrollTrigger: {
//           trigger: cardsLeft,
//           start: "top 80%", 
//           end: "top 20%", 
//           toggleActions: "play reverse play reverse",
//         },
//       }
//     );

//     gsap.fromTo(
//       cardsRight,
//       { x: "100%", opacity: 0 },
//       {
//         x: "0%",
//         opacity: 1,
//         duration: 4,
//         scrollTrigger: {
//           trigger: cardsRight,
//           start: "top 80%", 
//           end: "top 20%",
//           toggleActions: "play reverse play reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="ChooseUs-main">
//       <div className="why-choose-us">Why Choose Us?</div>
//       <div className="why-choose-us-cards">
//         <div className="choose-cards-left" ref={cardsLeftRef}>
//           <CardChoose
//             title="Staying Up-To-Date"
//             description="We stay ahead of the curve by integrating the latest technology into our products, ensuring you have the most advanced tools at your fingertips."
//             chooseusimg={uptodate}
//           />
//           <CardChoose
//             title="Customization"
//             description="We understand that your brand is unique. That’s why we offer fully customizable solutions that reflect your style and meet your specific needs."
//             chooseusimg={customization}
//           />
//         </div>
//         <div className="choose-cards-right" ref={cardsRightRef}>
//           <CardChoose
//             title="Quality"
//             description="Our products are crafted with attention to detail and a commitment to quality, ensuring they not only look great but also function seamlessly."
//             chooseusimg={quality}
//           />
//           <CardChoose
//             title="Customer-Centric Approach"
//             description="We pride ourselves on delivering exceptional customer service and support. Your satisfaction is our top priority."
//             chooseusimg={approach}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChooseUs;



import React, { useEffect, useRef } from "react";
import "../ChooseUs/ChooseUs.css";
import CardChoose from "./CardChoose/CardChoose";
import uptodate from "../../assets/uptodate.png";
import customization from '../../assets/customization.png';
import quality from '../../assets/quality.png';
import approach from '../../assets/approach.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ChooseUs() {
  const cardsLeftRef = useRef(null);
  const cardsRightRef = useRef(null);

  useEffect(() => {
    const cardsLeft = cardsLeftRef.current;
    const cardsRight = cardsRightRef.current;

    // Left cards animation: from left to center on scroll down and up
    gsap.fromTo(cardsLeft, {
      x: "-100%",
      opacity: 0,
    }, {
      x: "0%", // Moves to center
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsLeft,
        start: "top 85%", 
        end: "bottom 50%",
        scrub: 2, // Slower scrub for smooth animation
        onLeave: () => {
          gsap.to(cardsLeft, {
            x: "-100%", // Move out to the left on scroll down
            opacity: 0,
            duration: 2, // Slow down on leave
          });
        },
        onEnterBack: () => {
          gsap.to(cardsLeft, {
            x: "0%", // Slide back to the center when scrolling up
            opacity: 1,
            duration: 2, // Slow down the return animation
          });
        },
        onLeaveBack: () => {
          gsap.to(cardsLeft, {
            x: "-100%", // Slide back out to the left when scrolling up past the section
            opacity: 0,
            duration: 2,
          });
        }
      },
    });

    // Right cards animation: from right to center on scroll down and up
    gsap.fromTo(cardsRight, {
      x: "100%",
      opacity: 0,
    }, {
      x: "0%", // Moves to center
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRight,
        start: "top 85%", 
        end: "bottom 50%",
        scrub: 2, // Slower scrub for smooth animation
        onLeave: () => {
          gsap.to(cardsRight, {
            x: "100%", // Move out to the right on scroll down
            opacity: 0,
            duration: 2,
          });
        },
        onEnterBack: () => {
          gsap.to(cardsRight, {
            x: "0%", // Slide back to the center when scrolling up
            opacity: 1,
            duration: 2,
          });
        },
        onLeaveBack: () => {
          gsap.to(cardsRight, {
            x: "100%", // Slide back out to the right when scrolling up past the section
            opacity: 0,
            duration: 2,
          });
        }
      },
    });
  }, []);

  return (
    <div className="ChooseUs-main">
      <div className="why-choose-us">Why Choose Us?</div>
      <div className="why-choose-us-cards">
        <div className="choose-cards-left" ref={cardsLeftRef}>
          <CardChoose
            title="Staying Up-To-Date"
            description="We stay ahead of the curve by integrating the latest technology into our products, ensuring you have the most advanced tools at your fingertips."
            chooseusimg={uptodate}
          />
          <CardChoose
            title="Customization"
            description="We understand that your brand is unique. That’s why we offer fully customizable solutions that reflect your style and meet your specific needs."
            chooseusimg={customization}
          />
        </div>
        <div className="choose-cards-right" ref={cardsRightRef}>
          <CardChoose
            title="Quality"
            description="Our products are crafted with attention to detail and a commitment to quality, ensuring they not only look great but also function seamlessly."
            chooseusimg={quality}
          />
          <CardChoose
            title="Customer-Centric Approach"
            description="We pride ourselves on delivering exceptional customer service and support. Your satisfaction is our top priority."
            chooseusimg={approach}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;