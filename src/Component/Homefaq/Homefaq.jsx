import React,{useState} from 'react'
import { SlArrowDown } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import GreenBtn from '../GreenBtn/GreenBtn';
import "../Homefaq/Homefaq.css"
const Homefaq = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div>
     <div className="under-1380">
          <div >
            <div className="faq-btn">
      <GreenBtn greenBtnName="Explore Now" />
      </div>
      <div className="faq-home">
        <p className="faq-head">FAQ’S</p>
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
                  question: "How do I create a digital business card?",
                  answer:
                    "Creating a digital business card is simple. Sign up on our platform, choose a template, customize it with your details, and share it instantly.",
                  index: 1,
                },
                {
                  question:
                    "Can I update my digital business card after sharing?",
                  answer:
                    "Yes, you can update your digital business card anytime. Changes are automatically reflected, ensuring your contacts always have the latest information.",
                  index: 2,
                },
                {
                  question: "Are digital business cards eco-friendly?",
                  answer:
                    "Absolutely! Digital business cards reduce paper waste, making them an environmentally friendly alternative to traditional cards.",
                  index: 3,
                },
              ].map(({ question, answer, index }) => (
                <div className={`notable-card-${index + 1}`} key={index}>
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
                        onClick={() => handleToggle(index)}
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
      <GreenBtn greenBtnName="View All" />
      </div>

          </div>

          {/* Repeat similar structure for other sections */}
        </div>
    </div>
  )
}

export default Homefaq
