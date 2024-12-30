import React from "react";
import "./About.css";
import greenstar from "../../assets/greenstar.png";
import ChooseUs from "../../Component/ChooseUs/ChooseUs";
import Banner from "../../Component/banner/Banner";
import Contact from "../../Component/Contactus/Contact";
import uptodate from "../../assets/uptodate.png";
import customization from "../../assets/customization.png";
import quality from "../../assets/quality.png";
import approach from "../../assets/approach.png";
import CardChoose from "../../Component/ChooseUs/CardChoose/CardChoose";

function About() {
  return (
    <div>
      <Banner pageName="About Us" />

      <div className="About-cotainer">
        <div className="padding-30-about">
          <div className="about-desc">
            <p className="empowering-title">Empowering Modern Networking</p>
            <div className="num-txt-abt">
              <div className="grn-str-point">
                <img src={greenstar} alt="" className="green-star-abt" />
              </div>
              <p className="empowering-desc">
                Welcome to Filta, where we revolutionize the way you connect and
                network in today’s digital world. Our goal is to give you a
                strong, eco-friendly alternative to traditional business cards
                that not only saves time but also leaves a lasting impression.
              </p>
            </div>
            <div className="num-txt-abt padding-empo">
              <div className="grn-str-point">
                <img src={greenstar} alt="" className="green-star-abt" />
              </div>{" "}
              <p className="empowering-desc ">
                We believe that your business card should be as dynamic and
                versatile as you are. Our digital business cards are designed to
                be customizable, shareable with one touch or scan, and kept
                up-to-date with simplicity.
              </p>
            </div>
            <div className="num-txt-abt padding-empo">
              <div className="grn-str-point">
                <img src={greenstar} alt="" className="green-star-abt" />
              </div>{" "}
              <p className="empowering-desc ">
                Whether you’re a solo entrepreneur, a small business owner, any
                professional, or a small or large enterprise, our platform makes
                sure that your contact details are always available to you and
                ready to be shared.
              </p>
            </div>
            <div className="num-txt-abt padding-empo">
              <div className="grn-str-point">
                <img src={greenstar} alt="" className="green-star-abt" />
              </div>{" "}
              <p className="empowering-desc ">
                At Filta, we’re more than just a digital business card provider,
                we’re your partner in modern networking. Join thousands of
                professionals who have made the switch to digital and start
                making smarter connections today.
              </p>
            </div>
            <div className="vision-mission-c">
              <div className="mission">
                <p className="mission-title">Our Mission</p>
                <p className="empowering-desc">
                  At Filta, our mission is simple: to empower you with the tools
                  you need to stand out in an increasingly digital world. We
                  believe that first impressions matter, and we are committed to
                  helping you create memorable and impactful connections that
                  drive your business forward.
                </p>
              </div>
              <div className="divider"></div>
              <div className="mission">
                <p className="mission-title res-vision">Our Vision</p>
                <p className="empowering-desc">
                  At Filta, our vision is to revolutionize the way businesses
                  connect, network, and grow in the digital age. We believe in a
                  future where networking is smart, sustainable, and empowering.
                  Join us on this journey to redefine how businesses connect and
                  thrive in the digital era.
                </p>
              </div>
            </div>
          </div>
          <div className="ChooseUs-main-about">
            <div className="why-choose-us-about">Why Choose Us?</div>
            <div className="why-choose-us-cards-about">
              <div className="choose-cards-left-about">
                <CardChoose
                  title="Staying Up-To-Date"
                  description="We stay ahead of the curve by integrating the latest technology into our products, ensuring you have the most advanced tools at your fingertips."
                  chooseusimg={uptodate}
                />
                <CardChoose
                  title="Customization"
                  description="We understand that your brand is unique. That’s why we offer fully customizable solutions that reflect your style and meet your specific needs."
                  chooseusimg={customization}
                />
              </div>
              <div className="choose-cards-right-about">
                <CardChoose
                  title="Quality"
                  description="Our products are crafted with attention to detail and a commitment to quality, ensuring they not only look great but also function seamlessly."
                  chooseusimg={quality}
                />
                <CardChoose
                  title="Customer-Centric Approach"
                  description="We pride ourselves on delivering exceptional customer service and support. Your satisfaction is our top priority."
                  chooseusimg={approach}
                />
              </div>
            </div>
          </div>

          <Contact />
        </div>
      </div>
    </div>
  );
}

export default About;
