import React from "react";
import "../banner/banner.css";
import { SlArrowRight } from "react-icons/sl";

function Banner({pageName , title}) {
  return (
    <section className="section-p">
      <div className="section-bg">
        <div className="banner-head">
            <div className="home">Home</div>
            <SlArrowRight className="right-icon"/>
            <div className="faq">{pageName}</div> 
        </div>
        <p className="main-head">{pageName}</p>      
      </div>
    </section>
  );
};

export default Banner;
