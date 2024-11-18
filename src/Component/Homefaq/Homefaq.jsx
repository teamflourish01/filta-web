import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import GreenBtn from "../GreenBtn/GreenBtn";
import "../Homefaq/Homefaq.css";
import faq from "../../Pages/Faq/Faq"
const Homefaq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="under-1380">
        <div>
          
          <div className="faq-home">
            <p className="faqs-head">FAQ’S</p>
          </div>
          <div className="notable-ol">
            {[
              {
                question: "What is a digital business card?",
                answer:
                  "A digital business card is an online version of a traditional paper business card. It contains your contact information and can be easily shared via email, text, or QR code.",
                index: 0,
              },
              {
                question: "What is an NFC card?",
                answer:
                  "An NFC card uses Near Field Communication technology to share your contact details with a simple tap on a smartphone, making networking faster and easier.",
                index: 1,
              },
              {
                question: "What is a digital review card?",
                answer:
                  "A digital review card is a tool that helps businesses collect customer reviews online. It can be shared digitally, encouraging customers to leave feedback quickly and conveniently.",
                index: 2,
              },
              {
                question: "What is an email signature?",
                answer:
                  "An email signature is a block of text or images added to the end of an email, typically containing your contact information, logo, and links to your website or social media profiles.",
                index: 3,
              },
              {
                question: "What is a virtual background?",
                answer:
                  "A virtual background is a digital image or video used to replace your physical background during video calls, enhancing privacy and professionalism.",
                index: 4,
              },
            ].map(({ question, answer, index }) => (
              <div
                className={`notable-card-${index + 1}`}
                key={index}
                onClick={() => handleToggle(index)} // Moved the onClick handler here
              >
                <div
                  className={`notable-cards ${
                    expandedIndex === index ? "expanded-margin" : ""
                  }`}
                >
                  <div
                    className={`title-cards ${
                      expandedIndex === index ? "expanding" : "collaps-faq"
                    }`}
                  >
                    <div
                      className={`li-title ${
                        expandedIndex === index ? "expanded" : ""
                      }`}
                    >
                      <div className="li-class">{question}</div>
                    </div>
                    <div
                      className={`icon-down-arrow ${
                        expandedIndex === index ? "rotated" : ""
                      }`}
                    >
                      <SlArrowDown />
                    </div>
                  </div>
                  <div
                    className={`notabal-card-content ${
                      expandedIndex === index ? "show" : ""
                    }`}
                  >
                    <p className="ans-padding">{answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-bottom-btn">
            <Link to="/faqs"> {/* Wrap GreenBtn inside Link */}
              <GreenBtn greenBtnName="View All" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homefaq;
