import React, { useEffect } from "react";
import "../work/work.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,
       
    });
    AOS.refresh(); // Refresh AOS on component mount
}, []);
 ;
  

  return (
    <div className="top-container-wrapper">
      <div className="top-container">
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
              {/* First card - Fades up immediately */}
              <div
                className="choose-template"
                data-aos="fade-up"
                data-aos-delay="0"
              >
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

              {/* Second card - Delays by 2 seconds */}
              <div
                className="information"
                data-aos="fade-up"
                data-aos-delay="1500"
              >
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

              {/* Third card - Delays by 4 seconds */}
              <div
                className="customize"
                data-aos="fade-up"
                data-aos-delay="2500"
              >
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
