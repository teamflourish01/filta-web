import React, { useState, useEffect } from "react";
import "../digitalcard/digital.css";
import AOS from "aos";
import GreenBtn from "../GreenBtn/GreenBtn";

const Digitalcard = () => {
  const [activeCard, setActiveCard] = useState("Review-card");

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const handleCardClick = (cardName) => {
    // Set the active card; if it's already active, close it
    setActiveCard((prevCard) => (prevCard === cardName ? "" : cardName));
  };

  return (
    <>
      <section>
        <div className="under-1380-digital">
          <div className="under-1320">
            <div className="what">What We Offer?</div>

            {/* Digital Business Card */}
            <div
              className={`dashed-border ${activeCard === "Review-card" ? "no-border-top" : ""}`}
              onClick={() => handleCardClick("Review-card")}
            >
              {!activeCard.includes("Review-card") && (
                <p className="title-digital-digital">Digital Business Card</p>
              )}
            </div>
            {activeCard === "Review-card" && (
              <div
                className="Digital-flex open-card"
                data-aos="fade-up"
                data-aos-duration="6000"
              >
                <div className="digital-card">
                  <p className="business">Digital Business Card</p>
                  <p className="business-card">
                    Create your digital business card with ease. Share your
                    professional details instantly with a sleek, customizable design.
                    Perfect for modern networking.
                  </p>
                  <div className="btn">
                    <GreenBtn greenBtnName="Create Now" />
                  </div>
                </div>
                <div className="cardcontainer"></div>
              </div>
            )}

            {/* NFC Card */}
            <div
              className={`dashed-border ${activeCard === "nfcCard" ? "no-padding" : ""}`}
              onClick={() => handleCardClick("nfcCard")}
            >
              {!activeCard.includes("nfcCard") && (
                <p className="title-digital-digital">NFC Card</p>
              )}
            </div>
            {activeCard === "nfcCard" && (
              <div
                className="Digital-flex open-card"
                data-aos="fade-up"
                data-aos-duration="6000"
              >
                <div className="digital-card">
                  <p className="business">NFC Card</p>
                  <p className="business-card">
                    Simplify connections with NFC cards. Instantly share your
                    contact info, social profiles, and more with a tap. Ideal for
                    quick, seamless networking.
                  </p>
                  <div className="btn">
                    <GreenBtn greenBtnName="Create Now" />
                  </div>
                </div>
                <div className="cardcontainer"></div>
              </div>
            )}

            {/* Digital Review Card */}
            <div
              className={`dashed-border ${activeCard === "reviewCard" ? "no-padding" : ""}`}
              onClick={() => handleCardClick("reviewCard")}
            >
              {!activeCard.includes("reviewCard") && (
                <p className="title-digital-digital">Digital Review Card</p>
              )}
            </div>
            {activeCard === "reviewCard" && (
              <div
                className="Digital-flex open-card"
                data-aos="fade-up"
                data-aos-duration="6000"
              >
                <div className="digital-card">
                  <p className="business">Digital Review Card</p>
                  <p className="business-card">
                    Boost your credibility with review stickers/cards. Collect and
                    showcase customer reviews effortlessly, enhancing trust and
                    online reputation.
                  </p>
                  <div className="btn">
                    <GreenBtn greenBtnName="Create Now" />
                  </div>
                </div>
                <div className="cardcontainer"></div>
              </div>
            )} 

            {/* Email Signature */}
            <div
              className={`dashed-border ${activeCard === "emailSignature" ? "no-padding" : ""}`}
              onClick={() => handleCardClick("emailSignature")}
            >
              {!activeCard.includes("emailSignature") && (
                <p className="title-digital-digital">Email Signature</p>
              )}
            </div>
            {activeCard === "emailSignature" && (
              <div
                className="Digital-flex open-card"
                data-aos="fade-up"
                data-aos-duration="6000"
              >
                <div className="digital-card">
                  <p className="business">Email Signature</p>
                  <p className="business-card">
                    Design professional email signatures that leave a lasting
                    impression. Personalize your communications with custom
                    signatures for your brand.
                  </p>
                  <div className="btn">
                    <GreenBtn greenBtnName="Create Now" />
                  </div>
                </div>
                <div className="cardcontainer"></div>
              </div>
            )}

            {/* Virtual Background */}
            <div
              className={`dashed-border ${activeCard === "virtualBackground" ? "no-padding" : ""}`}
              onClick={() => handleCardClick("virtualBackground")}
            >
              {!activeCard.includes("virtualBackground") && (
                <p className="title-digital-digital">Virtual Background</p>
              )}
            </div>
            {activeCard === "virtualBackground" && (
              <div
                className="Digital-flex open-card"
                data-aos="fade-up"
                data-aos-duration="6000"
              >
                <div className="digital-card">
                  <p className="business">Virtual Background</p>
                  <p className="business-card">
                    Elevate your online presence with custom virtual backgrounds.
                    Stand out in video calls with professionally designed,
                    brand-aligned backdrops.
                  </p>
                  <div className="btn">
                    <GreenBtn greenBtnName="Create Now" />
                  </div>
                </div>
                <div className="cardcontainer"></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Digitalcard;
