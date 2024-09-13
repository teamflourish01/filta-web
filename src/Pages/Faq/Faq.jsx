import React, { useEffect, useState } from "react";
import "../Faq/Faq.css"

import { SlArrowDown } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 40,
    });
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="background-color">
    <div className="under-1380">
    <div className="notable-container">
      <div className="title">
        <p className="maintitle">Digital Business Card:</p>
      </div>
      <div className="notable-ol">
        {[{
          question: "What is a digital business card?",
          answer: "A digital business card is an online version of a traditional paper business card. It contains your contact information and can be easily shared via email, text, or QR code.",
          index: 0
        }, {
          question: "How do I create a digital business card?",
          answer: "Creating a digital business card is simple. Sign up on our platform, choose a template, customize it with your details, and share it instantly.",
          index: 1
        }, {
          question: "Can I update my digital business card after sharing?",
          answer: "Yes, you can update your digital business card anytime. Changes are automatically reflected, ensuring your contacts always have the latest information.",
          index: 2
        }, {
          question: "Are digital business cards eco-friendly?",
          answer: "Absolutely! Digital business cards reduce paper waste, making them an environmentally friendly alternative to traditional cards.",
          index: 3
        }].map(({ question, answer, index }) => (
          <div className={`notable-card-${index + 1}`} key={index}>
            <div className="notable-cards">
              <div className="title-cards">
                <div className={`li-title ${expandedIndex === index ? 'expanded' : ''}`}>
                  <div className="li-class">
                    {question}
                  </div>
                </div>
                <div 
                  className={`icon-down-arrow ${expandedIndex === index ? 'rotated' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <SlArrowDown />
                </div>
              </div>
              <div 
                className={`notabal-card-content ${expandedIndex === index ? 'show' : ''}`}
              >
                <p className="ans-padding">{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div className="title title-padding">
        <p className="maintitle">NFC Card:</p>
      </div>



      <div className="notable-ol">
        {[{
          question: "What is an NFC card?",
          answer: "An NFC card uses Near Field Communication technology to share your contact details with a simple tap on a smartphone, making networking faster and easier.",
          index: 5
        }, {
          question: "How do NFC business cards work?",
          answer: "Just tap your NFC card on a compatible smartphone, and your contact information is instantly shared. No apps or Bluetooth required.",
          index: 6
        }, {
          question: "Can I customize my NFC card?",
          answer: "Yes, our NFC cards are fully customizable, allowing you to design them to match your brand’s identity.",
          index: 7
        }, {
          question: "Do NFC cards work with all smartphones?",
          answer: "NFC cards are compatible with most modern smartphones that support NFC technology. However, older models may not have NFC capabilities.",
          index: 8
        }].map(({ question, answer, index }) => (
          <div className={`notable-card-${index + 1}`} key={index}>
            <div className="notable-cards">
              <div className="title-cards">
                <div className={`li-title ${expandedIndex === index ? 'expanded' : ''}`}>
                  <div className="li-class">
                    {question}
                  </div>
                </div>
                <div 
                  className={`icon-down-arrow ${expandedIndex === index ? 'rotated' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <SlArrowDown />
                </div>
              </div>
              <div 
                className={`notabal-card-content ${expandedIndex === index ? 'show' : ''}`}
              >
                <p className="ans-padding">{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>





      <div className="title title-padding">
        <p className="maintitle">Digital Review Card/Sticker:</p>
      </div>



      <div className="notable-ol">
        {[{
          question: "What is a digital review card?",
          answer: "A digital review card is a tool that helps businesses collect customer reviews online. It can be shared digitally, encouraging customers to leave feedback quickly and conveniently.",
          index: 9
        }, {
          question: "How can digital review cards benefit my business?",
          answer: "Digital review cards make it easier for customers to leave reviews, which can enhance your online reputation and attract more clients.",
          index: 10
        }, {
          question: "Are digital review cards customizable?",
          answer: "Yes, you can customize your digital review cards with your brand’s logo, colors, and personalized messages to make them more engaging.",
          index: 11
        }, {
          question: "How do I share a digital review card?",
          answer: "You can share your digital review card via email, text, or social media, making it easy for customers to leave a review from any device.",
          index: 12
        }].map(({ question, answer, index }) => (
          <div className={`notable-card-${index + 1}`} key={index}>
            <div className="notable-cards">
              <div className="title-cards">
                <div className={`li-title ${expandedIndex === index ? 'expanded' : ''}`}>
                  <div className="li-class">
                    {question}
                  </div>
                </div>
                <div 
                  className={`icon-down-arrow ${expandedIndex === index ? 'rotated' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <SlArrowDown />
                </div>
              </div>
              <div 
                className={`notabal-card-content ${expandedIndex === index ? 'show' : ''}`}
              >
                <p className="ans-padding">{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>




      <div className="title title-padding">
        <p className="maintitle">Email Signature:</p>
      </div>

      <div className="notable-ol">
        {[{
          question: "What is an email signature?",
          answer: "An email signature is a block of text or images added to the end of an email, typically containing your contact information, logo, and links to your website or social media profiles.",
          index: 13
        }, {
          question: "How do I create a professional email signature?",
          answer: "Our platform allows you to create a professional email signature by selecting a template, adding your details, and customizing the design to match your brand.",
          index: 14

        }, {
          question: "Can I include links in my email signature?",
          answer: "Yes, you can include clickable links to your website, social media profiles, and other online resources in your email signature.",
          index: 15
        }, {
          question: "Why is an email signature important?",
          answer: "A well-designed email signature enhances your professionalism, provides easy access to your contact information, and promotes your brand with every email you send.",
          index: 16
        }].map(({ question, answer, index }) => (
          <div className={`notable-card-${index + 1}`} key={index}>
            <div className="notable-cards">
              <div className="title-cards">
                <div className={`li-title ${expandedIndex === index ? 'expanded' : ''}`}>
                  <div className="li-class">
                    {question}
                  </div>
                </div>
                <div 
                  className={`icon-down-arrow ${expandedIndex === index ? 'rotated' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <SlArrowDown />
                </div>
              </div>
              <div 
                className={`notabal-card-content ${expandedIndex === index ? 'show' : ''}`}
              >
                <p className="ans-padding">{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>




      <div className="title title-padding">
        <p className="maintitle">Virtual Background:</p>
      </div>
<div className="padding-bottom">
      <div className="notable-ol">
        {[{
          question: "What is a virtual background?",
          answer: "A virtual background is a digital image or video used to replace your physical background during video calls, enhancing privacy and professionalism.",
          index: 17
        }, {
          question: "How do I use a virtual background?",
          answer: "Our platform offers easy-to-use virtual backgrounds. Simply select a background from our library or upload your own, and it will be applied during your video calls.",
          index: 18
        }, {
          question: "Can I customize my virtual background?",
          answer: "Yes, you can upload your own images or choose from our range of customizable templates to create a unique virtual background that reflects your brand.",
          index: 19
        }, {
          question: "Do virtual backgrounds work with all video conferencing platforms?",
          answer: "Most popular video conferencing platforms support virtual backgrounds. However, it's always best to check compatibility with your chosen platform.",
          index: 20
        }].map(({ question, answer, index }) => (
          <div className={`notable-card-${index + 1}`} key={index}>
            <div className="notable-cards">
              <div className="title-cards">
                <div className={`li-title ${expandedIndex === index ? 'expanded green-text' : ''}`}>
                  <div className="li-class">
                    {question}
                  </div>
                </div>
                <div 
                  className={`icon-down-arrow ${expandedIndex === index ? 'rotated' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <SlArrowDown />
                </div>
              </div>
              <div 
                className={`notabal-card-content ${expandedIndex === index ? 'show' : ''}`}
              >
                <p className="ans-padding">{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      
      {/* Repeat similar structure for other sections */}
    </div>
    </div>
    </div>




  );
};

export default Faq;
