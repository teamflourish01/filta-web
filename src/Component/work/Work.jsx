
  // import React from "react";
  // import "../work/work.css";
  // const Work = () => {
  //   return (
  //     <>
  //       <div className="work-container">
  //         <p className="work">How It Works? </p>

  //         <div className="simple-step-container">
  //           <p className="create">Create Your Card in 3 Simple Steps</p>
  //           <p className="process">
  //             We developed a process that is simple and easy to deliver the way
  //             you want. Here are the simple steps to create your digital business
  //             card to boost your connectivity.
  //           </p>
  //         </div>
  //         <div className="choose-flex">
  //           <div className="choose-template">
  //             <div className="choose"></div>
  //             <div className="box-text-work">
  //               <p className="text">01</p>
  //               <p className="template">Choose a Template:</p>
  //             </div>
  //             <div className="selecting">
  //               Start by selecting from our wide range of professionally designed
  //               templates. Each template is fully responsive, ensuring your
  //               digital business card looks great on any device.
  //             </div>
  //           </div>
  //           <div className="information">
  //             <div className="choose"></div>
  //             <div className="box-text-work-work">
  //               <p className="text">02</p>
  //               <p className="template">Customize Your Information:</p>
  //             </div>
  //             <div className="selecting">
  //               Next, Easily add your name, job title, company information, and
  //               contact details. you are always free to customize colors, fonts
  //               and layouts to reflect your brand identity.
  //             </div>
  //           </div>
  //           <div className="customize">
  //             <div className="choose"></div>
  //             <div className="box-text-work">
  //               <p className="text">03</p>
  //               <p className="template">Customize Your Information:</p>
  //             </div>
  //             <div className="selecting">
  //               Once your digital business card is ready, sharing it is simple and
  //               instant. Generate a unique QR code or shareable link that you can
  //               give to anyone, anywhere.
  //             </div>
  //           </div>
  //         </div>



          
  //       </div>
  //     </>
  //   );
  // };

  // export default Work;



import React, { useEffect } from "react";
import "../work/work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".top-container",
        start: "top 20%",
        end: "bottom top",
        scrub: true,
        pin: true, // Pin the container during the scroll
      },
    });
  
    // Set initial positions of the cards
    gsap.set(".customize", { y: 190, opacity: 1 }); // Third card starts lower
    gsap.set(".information", { y: 120, opacity: 1 }); // Second card starts lower
    gsap.set(".choose-template", { y: 0, opacity: 1 }); // First card is in place
  
    // Animation sequence
    timeline
      // First, the third card moves to align with the second card
      .to(".customize", { y: 120, opacity: 1, duration: 1 })
      // Then, both the second and third cards move together to align with the first card
      .to(".information", { y: 0, opacity: 1, duration: 1 }, "-=0.5") // Second card moves to its final position
      .to(".customize", { y: 0, opacity: 1, duration: 1 }, "-=1"); // Third card moves to align with the first
  }, []);
  
  return (
    <>
    <div className="top-container">
    <div className="main-work-container">
      <div className="work-container">
        <p className="work">How It Works? </p>

        <div className="simple-step-container">
          <p className="create">Create Your Card in 3 Simple Steps</p>
          <p className="process">
            We developed a process that is simple and easy to deliver the way you
            want. Here are the simple steps to create your digital business card to
            boost your connectivity.
          </p>
        </div>

        <div className="choose-flex">
          {/* First card */}
          <div className="choose-template">
            <div className="choose"></div>
            <div className="box-text-work">
              <p className="text">01</p>
              <p className="template">Choose a Template:</p>

            </div>
            <div className="selecting">
              Start by selecting from our wide range of professionally designed
              templates. Each template is fully responsive, ensuring your digital
              business card looks great on any device.
            </div>
          </div>

          {/* Second card */}
          <div className="information">
            <div className="choose"></div>
            <div className="box-text-work-work">
              <p className="text">02</p>
              <p className="template">Customize Your Information:</p>
            </div>
            <div className="selecting">
              Next, Easily add your name, job title, company information, and
              contact details. You are always free to customize colors, fonts
              and layouts to reflect your brand identity.
            </div>
          </div>

          {/* Third card */}
          <div className="customize">
            <div className="choose"></div>
            <div className="box-text-work">
              <p className="text">03</p>
              <p className="template">Share Your Card:</p>
            </div>
            <div className="selecting">
              Once your digital business card is ready, sharing it is simple and
              instant. Generate a unique QR code or shareable link that you can
              give to anyone, anywhere.
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Work;

