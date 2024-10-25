import React, { useState, useEffect, useRef } from "react";
import "../digitalcard/digital.css";
import AOS from "aos";
import GreenBtn from "../GreenBtn/GreenBtn";

const Digitalcard = () => {
  const [activeCard, setActiveCard] = useState("Review-card");
  const [isOpen, setIsOpen] = useState(false);

  const reviewCardRef = useRef(null);
  const nfcCardRef = useRef(null);
  const emailSignatureRef = useRef(null);
  const virtualBackgroundRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const handleCardClick = (cardName, ref) => {
    setActiveCard((prevCard) => {
      const newCard = prevCard === cardName ? "" : cardName;
      setIsOpen(newCard !== ""); // Show or hide backdrop based on card open state
      return newCard;
    });
  
    if (ref && cardName !== activeCard) {
      // Get the position of the card element
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const elementHeight = ref.current.offsetHeight;
      const viewportHeight = window.innerHeight;
  
      // Adjust for fixed header (if applicable)
      const headerHeight = 260; // Height of your fixed header (in pixels)
      const offsetMargin = 0; // Margin adjustment for centering
  
      // Calculate the final position to scroll to
      const offsetPosition = elementPosition - (viewportHeight / 2) + (elementHeight / 2) + offsetMargin;
  
      // Ensure finalPosition does not go out of bounds
      const documentHeight = document.body.scrollHeight;
      const maxScrollPosition = documentHeight - viewportHeight;
  
      // Calculate the final position ensuring it's not below 0 or above maxScrollPosition
      const finalPosition = Math.max(0, Math.min(maxScrollPosition, offsetPosition - headerHeight));
  
      console.log("finalPosition:", finalPosition);
      console.log("elementHeight:", elementHeight);
      console.log(elementPosition,"elementPosition")
  
      // Scroll smoothly to the calculated position
      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
        block:"center"
      });
    }
  };
  

  


  return (
    <>
      {isOpen && <div className={`backdrop ${isOpen ? 'visible' : ''}`} onClick={() => setIsOpen(false)}></div>}

      <section>
        <div className="under-1380-digital">
          <div className="under-1320">
            <div className="what">What We Offer?</div>

            {/* Digital Business Card */}
            <div
              className={`dashed-border ${activeCard === "Review-card" ? "no-border-top" : ""}`}
              onClick={() => handleCardClick("Review-card", reviewCardRef)}
              ref={reviewCardRef}
            >
              {!activeCard.includes("Review-card") && (
                <p className="title-digital-digital">Digital Business Card</p>
              )}
            </div>
            {activeCard === "Review-card" && (
              <div className="Digital-flex open-card">
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
              onClick={() => handleCardClick("nfcCard", nfcCardRef)}
              ref={nfcCardRef}
            >
              {!activeCard.includes("nfcCard") && (
                <p className="title-digital-digital">NFC Card</p>
              )}
            </div>
            {activeCard === "nfcCard" && (
              <div className="Digital-flex open-card">
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
              onClick={() => handleCardClick("reviewCard", reviewCardRef)}
              ref={reviewCardRef}
            >
              {!activeCard.includes("reviewCard") && (
                <p className="title-digital-digital">Digital Review Card</p>
              )}
            </div>
            {activeCard === "reviewCard" && (
              <div className="Digital-flex open-card">
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
              onClick={() => handleCardClick("emailSignature", emailSignatureRef)}
              ref={emailSignatureRef}
            >
              {!activeCard.includes("emailSignature") && (
                <p className="title-digital-digital">Email Signature</p>
              )}
            </div>
            {activeCard === "emailSignature" && (
              <div className="Digital-flex open-card">
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
              onClick={() => handleCardClick("virtualBackground", virtualBackgroundRef)}
              ref={virtualBackgroundRef}
            >
              {!activeCard.includes("virtualBackground") && (
                <p className="title-digital-digital">Virtual Background</p>
              )}
            </div>
            {activeCard === "virtualBackground" && (
              <div className="Digital-flex open-card">
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
