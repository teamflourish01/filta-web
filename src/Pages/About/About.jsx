import React from "react";
import "./About.css";
import ChooseUs from "../../Component/ChooseUs/ChooseUs";
import Banner from "../../Component/banner/Banner";

function About() {
  return (
    <div>
      <Banner pageName="About Us" />

      <div className="About-cotainer">
        <div className="about-desc">
          <p className="empowering-title">Empowering Modern Networking</p>
          <p className="empowering-desc">
            Welcome to Filta, where we revolutionize the way you connect and
            network in today’s digital world. Our goal is to give you a strong,
            eco-friendly alternative to traditional business cards that not only
            saves time but also leaves a lasting impression.
          </p>
          <p className="empowering-desc padding-empo">
            We believe that your business card should be as dynamic and
            versatile as you are. Our digital business cards are designed to be
            customizable, shareable with one touch or scan, and kept up-to-date
            with simplicity.
          </p>
          <p className="empowering-desc padding-empo">
            Whether you’re a solo entrepreneur, a small business owner, any
            professional, or a small or large enterprise, our platform makes
            sure that your contact details are always available to you and ready
            to be shared.
          </p>
          <p className="empowering-desc padding-empo">
            At Filta, we’re more than just a digital business card provider,
            we’re your partner in modern networking. Join thousands of
            professionals who have made the switch to digital and start making
            smarter connections today.
          </p>
          <div className="mission">
            <p className="mission-title">Our Mission</p>
            <p className="empowering-desc">
              At Filta, our mission is simple: to empower you with the tools you
              need to stand out in an increasingly digital world. We believe
              that first impressions matter, and we are committed to helping you
              create memorable and impactful connections that drive your
              business forward.
            </p>
          </div>
        </div>
        <ChooseUs />
      </div>
    </div>
  );
}

export default About;
