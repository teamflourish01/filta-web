import React from "react";
import "../feature/feature.css";
import feature from "../../assets/featurebg.png";

const Feature = () => {
  return (
    <>
      <div className="feature-container-home">Exclusive Features!</div>
      <div className="exclusive-container">
        <div className="voice-over">
          <img
            src={feature}
            alt="Feature background"
            className="feature-image-home"
          />
          <p className="overlay-text">Voice Over</p>
          <p className="personalized">
            Set personalized voice messages directly on your digital business
            card. Enhance client engagement with a personal touch, making your
            communication more memorable and effective.
          </p>
        </div>

        <div className="voice-over">
          <img
            src={feature}
            alt="Feature background"
            className="feature-image-home"
          />
          <p className="overlay-text">Multilanguage Support</p>
          <p className="personalized">
            Connect globally with our multilanguage support feature. Communicate
            in your client's preferred language, breaking down barriers and
            fostering stronger, more inclusive relationships.
          </p>
        </div>
        <div className="voice-over">
          <img
            src={feature}
            alt="Feature background"
            className="feature-image-home"
          />
          <p className="overlay-text">Lead finder</p>
          <p className="personalized">
            Easily discover and connect with potential clients using our lead
            finder tool. Streamline your networking process and grow your
            business with targeted, high-quality leads.
          </p>
        </div>
        <div className="voice-over">
          <img
            src={feature}
            alt="Feature background"
            className="feature-image-home"
          />
          <p className="overlay-text">AI-powered content suggestions</p>
          <p className="personalized">
            Boost your communication with AI-powered content suggestions. Get
            intelligent recommendations for messages, ensuring your content is
            relevant, engaging, and effective.
          </p>
        </div>
        <div className="voice-over">
          <img
            src={feature}
            alt="Feature background"
            className="feature-image-home"
          />
          <p className="overlay-text">Personalized messages</p>
          <p className="personalized">
            Create impactful connections with personalized messages. Tailor your
            communication to each contact, increasing the likelihood of a
            positive response and building stronger relationships.
          </p>
        </div>
        <div className="voice-over">
          <img
            src={feature}
            alt="Feature background"
            className="feature-image-home"
          />
          <p className="overlay-text">Social proof widgets</p>
          <p className="personalized">
            Embed social proof elements, such as recent testimonials, live
            social media feeds, or a real-time counter of satisfied
            clients/customers, directly into the digital business card.
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
