import React, { useState, useEffect } from "react";
import "../feature/feature.css";
import feature from "../../assets/featurebg.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Feature = () => {
  const [expandedFeature, setExpandedFeature] = useState("voice-over"); // Default card expanded

  const handleClick = (featureName) => {
    setExpandedFeature((prev) => (prev === featureName ? null : featureName));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      offset: 100, // Offset from the viewport
      once: true, // Animation happens only once
    });
  }, []);

  const isExpanded = (featureName) => expandedFeature === featureName;

  return (
    <div className="feature-1380">
      <div className="feature-1320"  >
        <div className="feature-container-home">Exclusive Features!</div>
        <div className="exclusive-container" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200">
          {/* Voice Over - Open by default */}
          <div
            className={`voice-over ${isExpanded("voice-over") ? "active" : ""}`}
            onMouseEnter={() => handleClick("voice-over")}
           
          >
            <img
              src={feature}
              alt="Feature background"
              className={`feature-image-home ${
                isExpanded("voice-over") ? "expanded" : ""
              }`}
            />
            <div className="feature-left-padding">
              <p className="overlay-text">Voice Over</p>
              <p className="personalized">
                Set personalized voice messages directly on your digital
                business card. Enhance client engagement with a personal touch,
                making your communication more memorable and effective.
              </p>
            </div>
          </div>

          {/* Multilanguage Support */}
          <div
            className={`voice-over ${
              isExpanded("multilanguage") ? "active" : ""
            }`}
            onMouseEnter={() => handleClick("multilanguage")}
          >
            <img
              src={feature}
              alt="Feature background"
              className={`feature-image-home ${
                isExpanded("multilanguage") ? "expanded" : ""
              }`}
            />
            <p className="overlay-text">Multilanguage Support</p>
            <p className="personalized">
              Connect globally with our multilanguage support feature.
              Communicate in your client's preferred language, breaking down
              barriers and fostering stronger, more inclusive relationships.
            </p>
          </div>

          {/* Lead Finder */}
          <div
            className={`voice-over ${
              isExpanded("lead-finder") ? "active" : ""
            }`}
            onMouseEnter={() => handleClick("lead-finder")}
          >
            <img
              src={feature}
              alt="Feature background"
              className={`feature-image-home ${
                isExpanded("lead-finder") ? "expanded" : ""
              }`}
            />
            <p className="overlay-text">Lead finder</p>
            <p className="personalized">
              Easily discover and connect with potential clients using our lead
              finder tool. Streamline your networking process and grow your
              business with targeted, high-quality leads.
            </p>
          </div>

          {/* AI-Powered Content Suggestions */}
          <div
            className={`voice-over ${isExpanded("ai-content") ? "active" : ""}`}
            onMouseEnter={() => handleClick("ai-content")}
          >
            <img
              src={feature}
              alt="Feature background"
              className={`feature-image-home ${
                isExpanded("ai-content") ? "expanded" : ""
              }`}
            />
            <p className="overlay-text">AI-powered content suggestions</p>
            <p className="personalized">
              Boost your communication with AI-powered content suggestions. Get
              intelligent recommendations for messages, ensuring your content is
              relevant, engaging, and effective.
            </p>
          </div>

          {/* Personalized Messages */}
          <div
            className={`voice-over ${
              isExpanded("personalized-messages") ? "active" : ""
            }`}
            onMouseEnter={() => handleClick("personalized-messages")}
          >
            <img
              src={feature}
              alt="Feature background"
              className={`feature-image-home ${
                isExpanded("personalized-messages") ? "expanded" : ""
              }`}
            />
            <p className="overlay-text">Personalized messages</p>
            <p className="personalized">
              Create impactful connections with personalized messages. Tailor
              your communication to each contact, increasing the likelihood of a
              positive response and building stronger relationships.
            </p>
          </div>

          {/* Social Proof Widgets */}
          <div
            className={`voice-over ${
              isExpanded("social-widgets") ? "active" : ""
            }`}
            onMouseEnter={() => handleClick("social-widgets")}
          >
            <img
              src={feature}
              alt="Feature background"
              className={`feature-image-home ${
                isExpanded("social-widgets") ? "expanded" : ""
              }`}
            />
            <p className="overlay-text">Social proof widgets</p>
            <p className="personalized">
              Embed social proof elements, such as recent testimonials, live
              social media feeds, or a real-time counter of satisfied
              clients/customers, directly into the digital business card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
