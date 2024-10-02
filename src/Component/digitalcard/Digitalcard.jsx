import React, { useState, useEffect } from "react";
import "../digitalcard/digital.css";
import AOS from "aos";
import GreenBtn from "../GreenBtn/GreenBtn";


const Digitalcard = () => {
  const [activeCard, setActiveCard] = useState("Review-card");

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const handleCardClick = (cardName) => {
    // Set the active card; if it's already active, close it
    setActiveCard((prevCard) => (prevCard === cardName ? "" : cardName));
  };

  return (
    <>
      <section>
        <div className="under-1320">
          <div className="what">What We Offer?</div>

          {/* Digital Business Card */}
          <div className="dashed-border" onClick={() => handleCardClick("Review-card")}>
            {!activeCard.includes("Review-card") && <p className="title">Digital Business Card</p>}
          </div>
          {activeCard === "Review-card" && (
            <div className="Digital-flex open-card" data-aos="fade-up" data-aos-duration="6000">
              <div className="digital-card">
                <p className="business">Digital Business Card</p>
                <p className="business-card">
                  Create your digital business card with ease. Share your professional details instantly with a sleek, customizable design. Perfect for modern networking.
                </p>
                <div className="btn">
                  <button className="b">Create Now</button>
                </div>
              </div>
              <div className="cardcontainer"></div>
            </div>
          )}

          {/* NFC Card */}
          <div className="dashed-border" onClick={() => handleCardClick("nfcCard")}>
            {!activeCard.includes("nfcCard") && <p className="title">NFC Card</p>}
          </div>
          {activeCard === "nfcCard" && (
            <div className="Digital-flex open-card" data-aos="fade-up" data-aos-duration="6000">
              <div className="digital-card">
                <p className="business">NFC Card</p>
                <p className="business-card">
                  Create your NFC card for quick sharing of your details.
                </p>
                <div className="btn">
                  <button className="b">Create Now</button>
                </div>
              </div>
              <div className="cardcontainer"></div>
            </div>
          )}

          {/* Digital Review Card */}
          <div className="dashed-border" onClick={() => handleCardClick("reviewCard")}>
            {!activeCard.includes("reviewCard") && <p className="title">Digital Review Card</p>}
          </div>
          {activeCard === "reviewCard" && (
            <div className="Digital-flex open-card" data-aos="fade-up" data-aos-duration="6000">
              <div className="digital-card">
                <p className="business">Digital Review Card</p>
                <p className="business-card">
                  Showcase your reviews in style with our digital review card.
                </p>
                <div className="btn">
                  <button className="b">Create Now</button>
                </div>
              </div>
              <div className="cardcontainer"></div>
            </div>
          )}

          {/* Email Signature */}
          <div className="dashed-border" onClick={() => handleCardClick("emailSignature")}>
            {!activeCard.includes("emailSignature") && <p className="title">Email Signature</p>}
          </div>
          {activeCard === "emailSignature" && (
            <div className="Digital-flex open-card" data-aos="fade-up" data-aos-duration="6000">
              <div className="digital-card">
                <p className="business">Email Signature</p>
                <p className="business-card">
                  Create a professional email signature easily.
                </p>
                <div className="btn">
                <GreenBtn greenBtnName="Create Now" />

                </div>
              </div>
              <div className="cardcontainer"></div>
            </div>
          )}

          {/* Virtual Background */}
          <div className="dashed-border" onClick={() => handleCardClick("virtualBackground")}>
            {!activeCard.includes("virtualBackground") && <p className="title">Virtual Background</p>}
          </div>
          {activeCard === "virtualBackground" && (
            <div className="Digital-flex open-card" data-aos="fade-up" data-aos-duration="6000">
              <div className="digital-card">
                <p className="business">Virtual Background</p>
                <p className="business-card">
                  Design your custom virtual background for meetings.
                </p>
                <div className="btn">
                <GreenBtn greenBtnName="Create Now" />

                </div>
              </div>
              <div className="cardcontainer"></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Digitalcard;
