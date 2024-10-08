import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Diffrent/Diffrent.css";

gsap.registerPlugin(ScrollTrigger);

const Diffrent = () => {
  useEffect(() => {
    // Slide down animation for all '.in-div' elements
    gsap.fromTo(
      ".in-div",
      {
        y: -400, // Start 300px above its normal position
        opacity: 2,
      },
      {
        y: 0, // Slide to its original position
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".in-div", // Trigger animation when '.in-div' comes into view
          start: "top 80%", // Animation starts when top of '.in-div' is 80% down the viewport
          end: "top 50%", // Ends when '.in-div' reaches 30% from the top
          scrub: true, // Links the animation to the scroll position
        },
      }
    );

    // First two cards animation (from top left to bottom)
    gsap.fromTo(
      ".innovation",
      {
        x: -300, // Start from the left side
        y: -200, // Start from the top
        rotation: -180,
        opacity: 0,
        scale: 0.5,
      },
      {
        x: 0,
        y: 0, // Move to original position
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
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
        x: 100, // Start from the right side
        y: -200, // Start from the top
        rotation: 360,
        opacity: 0,
        scale: 0.5,
      },
      {
        x: 0,
        y: 0, // Move to original position
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "top 0%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="diffrent">
      <div className="d-title">Why Are We Different?</div>
      <div className="card-max">

      <div className="all-flex">
        {/* Card 1 */}
        <div className="innovation-main">
          <div className="innovation"></div>
          <div className="innovation-container">
            <div className="in-div">
              <div className="p">
                <span>Innovative Technology:</span> We use the latest technology to create digital business cards that are interactive, engaging, and highly customizable.
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="innovation-main">
          <div className="innovation"></div>
          <div className="innovation-container">
            <div className="in-div">
              <div className="p">
                <span>User-Friendly Design:</span> Our platform is designed with you in mind, making it simple and quick to create and manage your digital business cards.
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="innovation-main">
          <div className="trigger"></div>
          <div className="innovation-container">
            <div className="in-div">
              <div className="p">
                <span>Global Accessibility:</span> Your digital business card is accessible from anywhere in the world, making it easier to connect with people across the globe.
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="innovation-main">
          <div className="trigger"></div>
          <div className="innovation-container">
            <div className="in-div">
              <div className="p">
                <span>Continuous Improvement:</span> We are constantly innovating, adding new features, and improving our service to ensure you have the best experience possible.
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
