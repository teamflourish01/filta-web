import React from "react";
import "../banner/banner.css";
import { MdArrowForwardIos } from "react-icons/md";

const Banner = () => {
  return (
    <section className="section-p">
      <div className="section-bg">
        <div className="banner-head">
            <div className="home">Home</div>
            <MdArrowForwardIos className="right-icon"/>
            <div className="faq">FAQ's</div> 
        </div>
        <p className="main-head">FAQ’S</p>      
      </div>
    </section>
  );
};

export default Banner;
