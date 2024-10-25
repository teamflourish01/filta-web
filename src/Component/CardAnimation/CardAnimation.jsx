import React, { useEffect, useRef } from 'react';
import '../CardAnimation/CardAnimation.css'; // Importing the CSS file

const CardAnimation = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Card 1 stays at the top
            cardsRef.current[0].style.transform = `translateY(${Math.min(scrollTop, 50)}px)`; // Adjust the value (50) as needed

            // Cards 2 and 3 move together until they reach Card 1's position
            if (scrollTop >= 50) {
                cardsRef.current[1].style.transform = `translateY(${scrollTop - 50}px)`;
                cardsRef.current[2].style.transform = `translateY(${scrollTop - 50}px)`;
            } else {
                cardsRef.current[1].style.transform = `translateY(50px)`; // Initial position of Card 2
                cardsRef.current[2].style.transform = `translateY(50px)`; // Initial position of Card 3
            }

            // After Card 2 reaches Card 1's position, Card 3 will move down
            if (scrollTop >= 100) { // When Card 2 reaches Card 1's position
                cardsRef.current[2].style.transform = `translateY(${scrollTop - 100}px)`; // Adjust Card 3's position
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <div className="card" ref={el => (cardsRef.current[0] = el)}>Card 1</div>
            <div className="card" ref={el => (cardsRef.current[1] = el)}>Card 2</div>
            <div className="card" ref={el => (cardsRef.current[2] = el)}>Card 3</div>
        </div>
    );
};

export default CardAnimation;
