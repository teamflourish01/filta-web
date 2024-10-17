import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "../Transform/Transform.css";
import "../GreenBtn/GreenBtn";
import GreenBtn from "../GreenBtn/GreenBtn";

const Transform = () => {
  const textRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const textElement = textRef.current;
    const letters = textElement.querySelectorAll(".letter");

    // Handle letter jump animation on hover
    const handleLetterEnter = (e) => {
      const letter = e.target;
      letter.classList.add("jump");

      // Restart animation to ensure it plays properly
      letter.style.animation = "none";
      requestAnimationFrame(() => {
        letter.style.animation = "";
      });
    };

    const handleLetterLeave = (e) => {
      const letter = e.target;
      // Remove 'jump' class after the animation completes
      setTimeout(() => {
        letter.classList.remove("jump");
      }, 500); // Match animation duration
    };

    // Add event listeners to each letter
    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", handleLetterEnter);
      letter.addEventListener("mouseleave", handleLetterLeave);
    });

    // Cleanup listeners on component unmount
    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", handleLetterEnter);
        letter.removeEventListener("mouseleave", handleLetterLeave);
      });
    };
  }, []);

  const text = "Ready to transform your connections digitally?";

  return (
    <div className="under-1380-transform">
      <div className="container-word" data-aos="fade-up" data-aos-duration="2000">
        <p ref={textRef} className="word-padding">
          {text.split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>
        <div className="faq-btn">
          <GreenBtn greenBtnName="Explore Now" />
        </div>
      </div>
    </div>
  );
};

export default Transform;
