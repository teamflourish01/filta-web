import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trigger } from "gsap/ScrollTrigger";
import "../Diffrent/Diffrent.css";

gsap.registerPlugin(ScrollTrigger);
const Diffrent = () => {
  useEffect(() => {
    // First two cards animation (from top left to bottom)
    gsap.fromTo(
      ".innovation",
      {
        x: -300, // Left side
        y: -200, // Top side
        rotation: -360,
        opacity: 0,
        scale: 0.5,
      },
      {
        x: 0,
        y: 0, // Move to their original position
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".innovation",
          start: "top center",
          end: "top 0%",
          scrub: true,
        },
      }
    );

    // Last two cards animation (from top right to bottom)
    gsap.fromTo(
      ".trigger",
      {
        x: 100, // Right side
        y: -200, // Top side
        rotation: 360,
        opacity: 0,
        scale: 0.5,
      },
      {
        x: 0,
        y: 0, // Move to their original position
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "top 0%",
          scrub: true,
        },
      }
    );

    // Move text from center to bottom when cards appear
    gsap.fromTo(
      ".p-container",
      {
        y: 0, // Centered initially
      },
      {
        y: 200, // Move to bottom when cards appear
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".p-container",
          start: "top center",
          scrub: true,
          top: 50,


        },
        
          x: 0,
          y: 0, // Move to their original position
          rotation: 0,
          opacity: 1,
          duration: 2,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".trigger",
            start: "top center",
            end: "top 0%",
            scrub: true,
          },
        }
      );
  
      // Move text from center to bottom when cards appear
      gsap.fromTo(
        ".p-container",
        {
          y: 0, // Centered initially

        },
      
    );
 }, []);

  return (
    <div>
      {" "}
      <div className="diffrent">
        <div className="d-title">Why Are We Different?</div>
        <div className="all-flex">
          <div className="innovation-main">
            <div className="innovation"></div>
            <div className="innovation-container">
              <div className="in-div">
                <div className="p">
                  <span>Innovative Technology:</span> We use the latest
                  technology to create digital business cards that are
                  interactive, engaging, and highly customizable.
                </div>
              </div>
            </div>
          </div>

          <div className="innovation-main">
            <div className="innovation"></div>
            <div className="innovation-container">
              <div className="in-div">
                <div className="p">
                  <span>User-Friendly Design:</span>Our platform is designed
                  with you in mind, making it simple and quick to create and
                  manage your digital business cards.
                </div>
              </div>
            </div>
          </div>

          <div className="innovation-main">
            <div className="trigger"></div>
            <div className="innovation-container">
              <div className="in-div">
                <div className="p">
                  <span>Global Accessibility:</span>Your digital business card
                  is accessible from anywhere in the world, making it easier to
                  connect with people across the globe.
                </div>
              </div>
            </div>
          </div>

          <div className="innovation-main">
            <div className="trigger"></div>
            <div className="innovation-container">
              <div className="in-div">
                <div className="p">
                  <span>Continuous Improvement:</span> 
                  We are constantlyinnovating, adding new features, and
                  improving our service to ensure you have the best experience
                  possible.
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Diffrent;
