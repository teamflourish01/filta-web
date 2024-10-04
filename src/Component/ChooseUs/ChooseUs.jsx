import React, { useEffect, useRef } from "react";
import "../ChooseUs/ChooseUs.css";
import CardChoose from "./CardChoose/CardChoose";
import uptodate from "../../assets/uptodate.png";
import customization from '../../assets/customization.png';
import quality from '../../assets/quality.png';
import approach from '../../assets/approach.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timesaving from '../../assets/timesaving.png';
import ecofriendly from '../../assets/ecofriendly.png';
import instantsharing from '../../assets/instantsharing.png'

gsap.registerPlugin(ScrollTrigger);

function ChooseUs() {
  const cardsLeftRef = useRef(null);
  const cardsRightRef = useRef(null);

  // useEffect(() => {
  //   const cardsLeft = cardsLeftRef.current;
  //   const cardsRight = cardsRightRef.current;

  //   // Left cards animation: from left to center on scroll down and up
  //   gsap.fromTo(cardsLeft, {
  //     x: "-100%",
  //     opacity: 0,
  //   }, {
  //     x: "0%", // Moves to center
  //     opacity: 1,
  //     duration: 2,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: cardsLeft,
  //       start: "top 85%", 
  //       end: "bottom 50%",
  //       scrub: 2, // Slower scrub for smooth animation
  //       onLeave: () => {
  //         gsap.to(cardsLeft, {
  //           x: "-100%", // Move out to the left on scroll down
  //           opacity: 0,
  //           duration: 2, // Slow down on leave
  //         });
  //       },
  //       onEnterBack: () => {
  //         gsap.to(cardsLeft, {
  //           x: "0%", // Slide back to the center when scrolling up
  //           opacity: 1,
  //           duration: 2, // Slow down the return animation
  //         });
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(cardsLeft, {
  //           x: "-100%", // Slide back out to the left when scrolling up past the section
  //           opacity: 0,
  //           duration: 2,
  //         });
  //       }
  //     },
  //   });

  //   // Right cards animation: from right to center on scroll down and up
  //   gsap.fromTo(cardsRight, {
  //     x: "100%",
  //     opacity: 0,
  //   }, {
  //     x: "0%", // Moves to center
  //     opacity: 1,
  //     duration: 2,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: cardsRight,
  //       start: "top 85%", 
  //       end: "bottom 50%",
  //       scrub: 2, // Slower scrub for smooth animation
  //       onLeave: () => {
  //         gsap.to(cardsRight, {
  //           x: "100%", // Move out to the right on scroll down
  //           opacity: 0,
  //           duration: 2,
  //         });
  //       },
  //       onEnterBack: () => {
  //         gsap.to(cardsRight, {
  //           x: "0%", // Slide back to the center when scrolling up
  //           opacity: 1,
  //           duration: 2,
  //         });
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(cardsRight, {
  //           x: "100%", // Slide back out to the right when scrolling up past the section
  //           opacity: 0,
  //           duration: 2,
  //         });
  //       }
  //     },
  //   });
  // }, []);
  
  
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
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsLeft,
        start: "top 80%", // Trigger animation earlier
        end: "bottom 60%",
        scrub: 1, // Smoother scrub for precise control
        // toggleActions: "play reverse play reverse", // Animation actions
        onLeave: () => {
          gsap.to(cardsLeft, {
            x: "-100%", // Move out to the left when leaving
            duration: 9,
          });
        },
        onEnterBack: () => {
          gsap.fromTo(cardsLeft, {
            x: "-100%", // Start from outside left again when scrolling back
          }, {
            x: "0%", // Re-enter from the left
            ease: "power3.out",
            scrub: 2, // Smooth transition based on scroll
            duration:8,
          });
        },
        onLeaveBack: () => {
          gsap.to(cardsLeft, {
            x: "-100%", // Exit left when scrolling up
            duration:2,
          });
        },
      },
    });
  
    // Right cards animation: from right to center on scroll down and up
    gsap.fromTo(cardsRight, {
      x: "100%",
      opacity: 0,
    }, {
      x: "0%", // Moves to center
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRight,
        start: "top 80%", // Trigger animation earlier
        end: "bottom 60%",
        scrub: 1,
        onLeave: () => {
          gsap.to(cardsRight, {
            x: "100%", // Move out to the right when leaving
            duration:9,
          });
        },
        onEnterBack: () => {
          gsap.fromTo(cardsRight, {
            x: "100%", // Start from outside right again when scrolling back
            scrub:2,
          }, {
            x: "0%", // Re-enter from the right
            ease: "power3.out",
            scrub: 2, // Smooth transition based on scroll
            duration:8,
          });
        },
        onLeaveBack: () => {
          gsap.to(cardsRight, {
            x: "100%", // Exit right when scrolling up
          });
        },
        // toggleActions: "play reverse play reverse", // Ensure smooth entry and exit
      },
      
    });
  }, []);
  
  return (
    <div className="ChooseUs-main">
      <div className="why-choose-us">Why Choose Us?</div>
      <div className="why-choose-us-cards">
        <div className="choose-cards-left" ref={cardsLeftRef}>
          <CardChoose
            title="Time Saving"
            description="Create, share, and update your business card in minutes. Save time by connecting instantly, without the hassle of printing or carrying physical cards."
            chooseusimg={timesaving}
          />
          <CardChoose
            title="Customizable & Professional"
            description="Make your card look as professional as possible. Completely customizable with your logo, multimedia, & colors to guarantee a professional first impression each and every time."
            chooseusimg={customization}
          />
        </div>
        <div className="choose-cards-right" ref={cardsRightRef}>
          <CardChoose
            title="Eco-Friendly & Cost-Effective"
            description="Discard paper cards to reduce printing expenses. Our eco-friendly cards save the environment and will not harm your bank balance."
            chooseusimg={ecofriendly}
          />
          <CardChoose
            title="Instant Sharing"
            description="Quickly share your business card by email, WhatsApp, or QR code. Connect instantly, without having to wait or have worries about missing your card."
            chooseusimg={instantsharing}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;





// import React, { useEffect, useRef } from "react";
// import "../ChooseUs/ChooseUs.css";
// import CardChoose from "./CardChoose/CardChoose";
// import uptodate from "../../assets/uptodate.png";
// import customization from '../../assets/customization.png';
// import quality from '../../assets/quality.png';
// import approach from '../../assets/approach.png';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function ChooseUs() {
//   const cardsLeftRef = useRef(null);
//   const cardsRightRef = useRef(null);

//   useEffect(() => {
//     const cardsLeft = cardsLeftRef.current;
//     const cardsRight = cardsRightRef.current;

//     // Left cards enter from the left and exit back to the left
//     gsap.fromTo(cardsLeft, {
//       x: "-100%",
//       opacity: 0,
//     }, {
//       x: "0%", // Moves to center
//             opacity: 1,
//             duration: 2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: cardsLeft,
//               start: "top 85%", 
//               end: "bottom 50%",
//               scrub: 2, // Slower scrub for smooth animation
//               onLeave: () => {
//                 gsap.to(cardsLeft, {
//                   x: "-100%", // Move out to the left on scroll down
//                   opacity: 0,
//                   duration: 2, // Slow down on leave
//                 });
//               },
//               onEnterBack: () => {
//                 gsap.to(cardsLeft, {
//                   x: "0%", // Slide back to the center when scrolling up
//                   opacity: 1,
//                   duration: 2, // Slow down the return animation
//                 });
//               },
//               onLeaveBack: () => {
//                 gsap.to(cardsLeft, {
//                   x: "-100%", // Slide back out to the left when scrolling up past the section
//                   opacity: 0,
//                   duration: 2,
//                 });
//               }
//             },
//           });

//     // Right cards enter from the right and exit back to the right
//     gsap.fromTo(cardsRight, {
//       x: "100%",
//       opacity: 1,
//     }, {
//       x: "0%",
//       opacity: 1,
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: cardsRight,
//         start: "top 80%",
//         end: "top 40%",
//         scrub: true,
//         toggleActions: " reverse", // Reverse when scrolling up
//       }
//     });

//     // Left cards exit to the left when scrolling up past the section
//     gsap.to(cardsLeft, {
//       x: "-100%", // Move out to the left
//       opacity: 1,
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: cardsLeft,
//         start: "bottom 40%", // Start when leaving the section
//         end: "bottom top",   // End when completely off-screen
//         scrub: true,
//         toggleActions: " reverse", // Reverse on scrolling down
//       }
//     });

//     // Right cards exit to the right when scrolling up past the section
//     gsap.to(cardsRight, {
//       x: "100%",
//       opacity: 0,
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: cardsRight,
//         start: "bottom 40%",
//         end: "bottom top",
//         scrub: true,
//         toggleActions: " reverse",
//       }
//     });

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
