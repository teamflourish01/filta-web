import React, { useEffect, useRef } from "react";
import "../Transform/Transform.css";

const Transform = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const letters = textElement.querySelectorAll('.letter');

    const handleMouseMove = (e) => {
      let closestLetter = null;
      let closestDistance = Infinity;

      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const letterX = rect.left + rect.width / 2; // X center of letter
        const letterY = rect.top + rect.height / 2; // Y center of letter

        const distanceX = e.clientX - letterX;
        const distanceY = e.clientY - letterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // Find the closest letter to the cursor
        if (distance < closestDistance) {
          closestDistance = distance;
          closestLetter = letter;
        }
      });

      // Apply jump effect to the closest letter if within distance threshold
      if (closestDistance < 50) { // Distance threshold
        closestLetter.classList.add('jump');
      } else {
        letters.forEach((letter) => letter.classList.remove('jump'));
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Wrapping each letter in a span
  const text = "Ready to Transform Your Networking Digitally ?";
  
  return (
    <div className="container-word">
      <p ref={textRef}>
        {text.split('').map((letter, index) => (
          <span key={index} className="letter">
            {letter === ' ' ? '\u00A0' : letter} {/* Preserve spaces */}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Transform;
