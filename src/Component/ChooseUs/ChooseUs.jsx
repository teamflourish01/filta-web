import React, { useEffect, useRef } from "react";
import '../ChooseUs/ChooseUs.css'
import CardChoose from "./CardChoose/CardChoose";
import uptodate from "../../assets/uptodate.png";
import customization from '../../assets/customization.png';
import quality from '../../assets/quality.png';
import approach from '../../assets/approach.png';
import timesaving from '../../assets/timesaving.png';
import ecofriendly from '../../assets/ecofriendly.png';
import instantsharing from '../../assets/instantsharing.png'
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import BenifitCard from "../BenifitCard/BenifitCard";

gsap.registerPlugin(ScrollTrigger);

function ChooseUs() {
  const cardsLeftRef = useRef(null);
  const cardsRightRef = useRef(null);
  const chooseUsMainRef = useRef(null);

  useEffect(() => {
    const cardsLeft = cardsLeftRef.current;
    const cardsRight = cardsRightRef.current;
    const chooseUsMain = chooseUsMainRef.current;

    // Reverse class addition on scroll up
    ScrollTrigger.create({
      trigger: chooseUsMain,
      start: "top 100%",
      end: "bottom top",
      onEnter: () => chooseUsMain.classList.remove("reverse"),
      onLeaveBack: () => chooseUsMain.classList.add("reverse"),
    });

    // Left cards animation: from left to center
    gsap.fromTo(cardsLeft, {
      x: "-100%",
      opacity: 0,
    }, {
      x: "0%", // Move to center
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: chooseUsMain,
        start: "top 60%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play reverse play reverse", 
      },
    });

    // Right cards animation: from right to center
    gsap.fromTo(cardsRight, {
      x: "100%",
      opacity: 0,
    }, {
      x: "0%", // Move to center
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: chooseUsMain,
        start: "top 60%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    // Handle reverse animation for scrolling up
    gsap.fromTo(cardsLeft, {
      x: "0%", // At the center
    }, {
      x: "-100%", // Move out to the left on reverse scroll
      scrollTrigger: {
        trigger: chooseUsMain,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        toggleActions: "reverse none reverse none",
        // onLeaveBack: () => gsap.to(cardsLeft, { x: "-100%", duration: 2 }),
      },
    });

    gsap.fromTo(cardsRight, {
      x: "0%", // At the center
    }, {
      x: "100%", // Move out to the right on reverse scroll
      scrollTrigger: {
        trigger: chooseUsMain,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        toggleActions: "reverse none reverse none",
        // onLeaveBack: () => gsap.to(cardsRight, { x: "100%", duration: 2 }),
      },
    });
  }, []);

  return (
    <div ref={chooseUsMainRef} className="ChooseUs-main">
      <div className="why-choose-us">Benefits of Using Filta
                {/* <span className="filta-logo-text-title">
                  f<span className="i-green">i</span>lta
                </span>{" "} */}
                </div>
      <div className="why-choose-us-cards">
        <div className="choose-cards-left" ref={cardsLeftRef}>
          <BenifitCard
            title="Time Saving"
            description="Create, share, and update your business card in minutes. Save time by connecting instantly, without the hassle of printing or carrying physical cards."
            chooseusimg={timesaving}
          />
          <BenifitCard
            title="Customizable & Professional"
            description="Make your card look as professional as possible. Completely customizable with your logo, multimedia, & colors to guarantee a professional first impression each and every time."
            chooseusimg={customization}
          />
        </div>
        <div className="choose-cards-right" ref={cardsRightRef}>
          <BenifitCard
            title="Eco-Friendly & Cost-Effective"
            description="Discard paper cards to reduce printing expenses. Our eco-friendly cards save the environment and will not harm your bank balance."
            chooseusimg={ecofriendly}
          />
          <BenifitCard
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
