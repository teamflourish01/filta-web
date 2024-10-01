import React, { useEffect, useRef } from "react";

  import "../work/work.css";
  const Work = () => {
    return (
      <>
        <div className="work-container">
          <p className="work">How It Works? </p>

          <div className="simple-step-container">
            <p className="create">Create Your Card in 3 Simple Steps</p>
            <p className="process">
              We developed a process that is simple and easy to deliver the way
              you want. Here are the simple steps to create your digital business
              card to boost your connectivity.
            </p>
          </div>
          <div className="choose-flex">
            <div className="choose-template">
              <div className="choose"></div>
              <div className="box-text-work">
                <p className="text">01</p>
                <p className="template">Choose a Template:</p>
              </div>
              <div className="selecting">
                Start by selecting from our wide range of professionally designed
                templates. Each template is fully responsive, ensuring your
                digital business card looks great on any device.
              </div>
            </div>
            <div className="information">
              <div className="choose"></div>
              <div className="box-text-work">
                <p className="text">02</p>
                <p className="template">Customize Your Information:</p>
              </div>
              <div className="selecting">
                Next, Easily add your name, job title, company information, and
                contact details. you are always free to customize colors, fonts
                and layouts to reflect your brand identity.
              </div>
            </div>
            <div className="customize">
              <div className="choose"></div>
              <div className="box-text-work">
                <p className="text">03</p>
                <p className="template">Customize Your Information:</p>
              </div>
              <div className="selecting">
                Once your digital business card is ready, sharing it is simple and
                instant. Generate a unique QR code or shareable link that you can
                give to anyone, anywhere.
              </div>
            </div>
          </div>



          
        </div>
      </>
    );
  };

  export default Work;
