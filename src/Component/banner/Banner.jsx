import React from "react";
import "../banner/banner.css";
import { SlArrowRight } from "react-icons/sl";

const Banner = () => {
  return (
    <section className="section-p">
      <div className="section-bg">
        <div className="banner-head">
            <div className="home">Home</div>
            <SlArrowRight className="right-icon"/>
            <div className="faq">FAQ's</div> 
        </div>
        <p className="main-head">FAQ’S</p>      
      </div>
    </section>
  );
};

export default Banner;
