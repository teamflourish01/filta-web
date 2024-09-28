import React,{useEffect} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {trigger} from "gsap/ScrollTrigger"
import "../Diffrent/Diffrent.css"


gsap.registerPlugin(ScrollTrigger);
const Diffrent = () => {
    useEffect(() => {
        gsap.fromTo(
          ".innovation",
          {
            x: -500, // Start point: Left se aaye
            rotation: -360, // Rotate start se clockwise
            opacity: 0, // Invisible starting me
            scale:0.5,
          },
          {
            x: 0, // End point: Apni jagah pe aa jaye
           
          
            rotation: 0, // End me normal rotation
            opacity: 1, // Full visibility
            duration: 1.5, // Animation duration
            scale: 1,
            ease: "power2.out", // Smooth ease effect
            scrollTrigger: {
              trigger: ".innovation", // Kis element par scroll trigger ho
              start: "top 90%", // Scroll kab start ho (viewport 80%)
              end: "top 0%", // Scroll kab end ho
              scrub: true, // Smooth animation scroll ke sath
             // Testing ke liye markers enable karein
            },
          }
        );




        gsap.fromTo(
            ".trigger",
            {
              x: 500, // Start point: Left se aaye
              rotation: 360, // Rotate start se clockwise
              opacity: 0, // Invisible starting me
              scale: 0.5,
             
            },
            {
              x: 0, // End point: Apni jagah pe aa jaye
           scale:1,
             
              rotation: 0, // End me normal rotation
              opacity: 1, // Full visibility
              duration: 1.5, // Animation duration
              ease: "power2.out", // Smooth ease effect
              scrollTrigger: {
                trigger: ".trigger", // Kis element par scroll trigger ho
                start: "top 90%", // Scroll kab start ho (viewport 80%)
                end: "top 0%", // Scroll kab end ho
                scrub: true, // Smooth animation scroll ke sath
               // Testing ke liye markers enable karein
              },
            }
          );
      }, []);
    



      
  return (
    <div>
      {" "}
      {/* Ensure enough scrollable area */}
      {/* <p className="web">
        Web development company in Ahmedabad Welcome to Flourish Creations Pvt.
        Ltd., a progressive web development company in Ahmedabad. We specialize
        in creating exceptional websites that elevate your brand and drive
        online success. Our experienced team is dedicated to providing
        high-class website development services that set your business apart. As
        the best web development company in Ahmedabad, we take pride in our
        comprehensive approach to creating excellent online experiences. Our
        services extend beyond standard website development; we craft strategic
        solutions that resonate with your audience and contribute to your
        business growth. Film Production company in Ahmedabad Our team
        understands that a website is more than just a digital presence. It’s an
        opportunity to engage, interact, and convert visitors into loyal
        customers. As the top web development company, we generate creativity,
        cutting-edge technology, and user-centric design to build websites that
        leave a lasting impact. Choosing Flourish Creations Pvt. Ltd. means
        choosing a true partnership. We prioritize collaboration, ensuring your
        insights and ideas guide our process. We believe that our success is
        linked to yours, and together, we can achieve remarkable online results.
        How We Different From Other Strategic Approach to Design What sets us
        apart as the best web development company in Ahmedabad is our strategic
        design process. Our designs aren’t just visually appealing; they’re
        strategically crafted to align with your brand and resonate with your
        target audience. Each element is carefully considered to guide visitors
        toward your desired actions. Custom Solutions, No Shortcuts Unlike other
        companies, we don’t believe in one-size-fits-all solutions. As a
        top-tier web design company in ahmedabad, we understand the uniqueness
        of every business. Our developers create custom solutions that ensure
        ideal user experiences and unmatched functionality. Transparency and
        Communication Transparency is key to our success. We keep you informed
        every step of the way, providing regular updates and open discussions.
        As the best web development company in Ahmedabad, we value clear
        communication to ensure your project meets your expectations.
      </p> */}
      <div className="diffrent">
        <div className="all-flex">
        <div className="innovation-main">
            <div className="innovation"></div>
          <div className="innovation-container">
            <div className="in-div">
              <div className="p">
                <span>Innovative Technology :</span> We use the latest
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
                <span>Innovative Technology :</span> We use the latest
                technology to create digital business cards that are
                interactive, engaging, and highly customizable.
              </div>
            </div>
          </div>




          </div>




          <div className="innovation-main">
            <div className="trigger"></div>
          <div className="innovation-container">
            <div className="in-div">
              <div className="p">
                <span>Innovative Technology :</span> We use the latest
                technology to create digital business cards that are
                interactive, engaging, and highly customizable.
              </div>
            </div>
          </div>




          </div>




          <div className="innovation-main">
            <div className="trigger"></div>
          <div className="innovation-container">
            <div className="in-div">
              <div className="p">
                <span>Innovative Technology :</span> We use the latest
                technology to create digital business cards that are
                interactive, engaging, and highly customizable.
              </div>
            </div>
          </div>




          </div>
        </div>
      </div>
      {/* <p className="web">
        Web development company in Ahmedabad Welcome to Flourish Creations Pvt.
        Ltd., a progressive web development company in Ahmedabad. We specialize
        in creating exceptional websites that elevate your brand and drive
        online success. Our experienced team is dedicated to providing
        high-class website development services that set your business apart. As
        the best web development company in Ahmedabad, we take pride in our
        comprehensive approach to creating excellent online experiences. Our
        services extend beyond standard website development; we craft strategic
        solutions that resonate with your audience and contribute to your
        business growth. Film Production company in Ahmedabad Our team
        understands that a website is more than just a digital presence. It’s an
        opportunity to engage, interact, and convert visitors into loyal
        customers. As the top web development company, we generate creativity,
        cutting-edge technology, and user-centric design to build websites that
        leave a lasting impact. Choosing Flourish Creations Pvt. Ltd. means
        choosing a true partnership. We prioritize collaboration, ensuring your
        insights and ideas guide our process. We believe that our success is
        linked to yours, and together, we can achieve remarkable online results.
        How We Different From Other Strategic Approach to Design What sets us
        apart as the best web development company in Ahmedabad is our strategic
        design process. Our designs aren’t just visually appealing; they’re
        strategically crafted to align with your brand and resonate with your
        target audience. Each element is carefully considered to guide visitors
        toward your desired actions. Custom Solutions, No Shortcuts Unlike other
        companies, we don’t believe in one-size-fits-all solutions. As a
        top-tier web design company in ahmedabad, we understand the uniqueness
        of every business. Our developers create custom solutions that ensure
        ideal user experiences and unmatched functionality. Transparency and
        Communication Transparency is key to our success. We keep you informed
        every step of the way, providing regular updates and open discussions.
        As the best web development company in Ahmedabad, we value clear
        communication to ensure your project meets your expectations.
      </p> */}
    </div>
  )
}

export default Diffrent