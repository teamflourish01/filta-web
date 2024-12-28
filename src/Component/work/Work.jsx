import React, { useEffect, useRef } from "react";
import "../work/work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const topContainerRef = useRef(null);
  const customizeRef = useRef(null);
  const informationRef = useRef(null);
  const chooseTemplateRef = useRef(null);


  useEffect(() => {
    const card1 = chooseTemplateRef.current;
    const card2 = informationRef.current;
    const card3 = customizeRef.current;
  
    const screenWidth = window.innerWidth;
    if (
      screenWidth > 1024 &&
      topContainerRef.current &&
      customizeRef.current &&
      informationRef.current &&
      chooseTemplateRef.current
    ) {
      gsap.set(card1, { y: 0 });
      gsap.set(card2, { y: 120 });
      gsap.set(card3, { y: 220 });
  
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: topContainerRef.current,
          start: "top 20%",
          end: "bottom top",
          scrub: 0.1, 
          pin: topContainerRef.current,
          toggleActions: "play reverse play reverse",
        },
      });
  
      // Phase 1: Move the third card to align with the second card
      timeline.to(card3, {
        y: 120, 
        ease: "power2.out",
        duration: 0.1, 
      });
  
      // Phase 2: Move both the second and third cards together to align with the first card
      timeline.to(
        [card2, card3],
        {
          y: 0, 
          ease: "power2.out",
          duration: 0, 
        },
        "+=0.2" 
      );
    }
  }, []);

  return (
    <div className="top-container-wrapper">
      <div className="top-container" ref={topContainerRef}>
        <div className="main-work-container">
          <div className="work-container">
            <p className="work">How It Works?</p>

            <div className="simple-step-container">
              <p className="create">Create Your Card in 3 Simple Steps</p>
              <p className="process">
                We developed a process that is simple and easy to deliver the
                way you want. Here are the simple steps to create your digital
                business card to boost your connectivity.
              </p>
            </div>

            <div className="choose-flex">
              {/* First card */}
              <div className="choose-template" ref={chooseTemplateRef}>
                <div className="choose"></div>
                <div className="box-text-work">
                  <p className="text">01</p>
                  <p className="template">Choose a Template:</p>
                </div>
                <div className="selecting">
                  Start by selecting from our wide range of professionally
                  designed templates. Each template is fully responsive,
                  ensuring your digital business card looks great on any device.
                </div>
              </div>

              {/* Second card */}
              <div className="information" ref={informationRef}>
                <div className="choose"></div>
                <div className="box-text-work">
                  <p className="text">02</p>
                  <p className="template">Customize Your Information:</p>
                </div>
                <div className="selecting">
                  Next, easily add your name, job title, company information,
                  and contact details. You are always free to customize colors,
                  fonts and layouts to reflect your brand identity.
                </div>
              </div>

              {/* Third card */}
              <div className="customize" ref={customizeRef}>
                <div className="choose"></div>
                <div className="box-text-work">
                  <p className="text">03</p>
                  <p className="template">Share Instantly with QR code/ link:</p>
                </div>
                <div className="selecting hei">
                  Once your digital business card is ready, sharing it is simple
                  and instant. Generate a unique QR code or shareable link that
                  you can give to anyone, anywhere.
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
