import React, { useEffect, useState } from "react";
import Banner from "../../Component/banner/Banner";
import "../Products/Products.css";
import greenstar from "../../assets/greenstar.png";
import WhiteGrnBtn from "../../Component/WhiteGrnBtn/WhiteGrnBtn";
import GreenBtn from "../../Component/GreenBtn/GreenBtn";
import businessnfc from "../../assets/smartbusinessnfc.svg";
import businessnfc2 from "../../assets/businessnfc2.svg";
import businessnfc3 from "../../assets/businessnfc3.svg";
import businessnfc4 from "../../assets/businessnfc4.svg";

import smart2 from "../../assets/smart2.svg";
import smart3 from "../../assets/smart3.svg";
import effort from "../../assets/effort.svg";
import future from "../../assets/future.svg";
import customizable from "../../assets/customizable.svg";
import enhance from "../../assets/enhance.svg";
import eco from "../../assets/eco.svg";
import { PiArrowsHorizontalThin } from "react-icons/pi";
import updown from "../../assets/updown.svg";
import cost from "../../assets/cost-effective.svg";
import review1 from "../../assets/review1.svg";
import review2 from "../../assets/review2.svg";
import standee2 from "../../assets/standee2.svg";
import standee3 from "../../assets/standee3.svg";

const Products = () => {
  const images = [businessnfc, businessnfc2, businessnfc3, businessnfc4];
  const reviewCard = [smart2, review1, review2];
  const standee = [smart3, standee2, standee3];
  const [currentImage, setCurrentImage] = useState(0);
  const [reviewCardImg, setReviewCardImg] = useState(0);
  const [standeeCardImg, setStandeeCardImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    const interval2 = setInterval(() => {
      setReviewCardImg((prevImage) => (prevImage + 1) % reviewCard.length);
    }, 1000); 

    const interval3 = setInterval(() => {
      setStandeeCardImg((prevImage) => (prevImage + 1) % standee.length);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2); 
      clearInterval(interval3); 
    };
  }, []);
  return (
    <>
      <Banner pageName="Products" />
      <div className="produts-page">
        <div className="products-container">
          {/* Top arrow section start  */}

          <div className="top-product-section-p-p">
            <div className="top-2-section-flex">
              <div className="left-cotent-top-2">
                <p className="grn-title-top-2">All-in-One Solution:</p>
                <p className="black-desc-top-2">
                  From digital networking to reputation management, Filta
                  simplifies it all in a single, user-friendly platform.
                </p>
              </div>
              <div className="right-content-top-2">
                <p className="grn-title-top-2">For Every Businesses :</p>
                <p className="black-desc-top-2">
                  Ideal for startups, corporates, and freelancers looking to
                  build impactful connections and streamline workflows.
                </p>
              </div>
            </div>
            <div className="top-2-center-flex-p-p">
              <div className="arrow-container-product">
                <img src={updown} alt="" className="img-arrow-p-p" />
                {/* <div class="vertical-line-with-arrows">
                  <span class="arrow-top-arrow"></span>
                  <div class="vertical-line"></div>
                  <span class="arrow-bottom-arrow"></span>
                </div> */}
                
                <div class="horizontal-line-left"></div>
              </div>
              
              <div className="box-center-top-2">
                <p className="grn-title-top-2">Filta's Innovation :</p>
                <p className="black-desc-top-2">
                  Filta offers a range of smart NFC products that enhance
                  business interactions and streamline feedback collection.
                </p>
              </div>
              <div className="arrow-container-product">
                <div class="horizontal-line-left"></div>
                <img src={updown} alt="" className="img-arrow-p-p-r" />

                {/* <div class="vertical-line-with-arrows">
                  <span class="arrow-top-arrow"></span>
                  <div class="vertical-line"></div>
                  <span class="arrow-bottom-arrow"></span>
                </div> */}
              </div>
            </div>
            <div className="top-2-section-flex">
              <div className="left-cotent-top-2">
                <p className="grn-title-top-2">
                  Pioneering Modern Networking :
                </p>
                <p className="black-desc-top-2">
                  As a leader in digital solutions, Filta is setting new
                  benchmarks for business communication in the global market.
                </p>
              </div>
              <div className="right-content-top-2">
                <p className="grn-title-top-2">Ready for the Future :</p>
                <p className="black-desc-top-2">
                  Stay ahead of the curve with Filta’s tools designed for the
                  evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
          {/* Explore smart nfc product section start  */}

          <div className="smart-nfc-container">
            <p className="title-products">Explore Our Smart NFC Products</p>
            <div className="card-smart-nfc">
              <div className="gray-card-left-products">
                <img src={images[currentImage]} alt="" />
              </div>

              <div className="s-n-business-card">
                <p className="s-n-b-c-title">Smart NFC Business Card</p>
                <p className="s-n-b-c-desc">
                  Create lasting impressions with a digital twist. With just one
                  tap, your clients can access your contact details, website,
                  and social media links—all while showcasing your brand's
                  tech-savvy side.
                </p>
                <GreenBtn greenBtnName="Create Now" />
              </div>
            </div>
            <div className="card-smart-nfc p-30-products">
              <div className="s-n-business-card">
                <p className="s-n-b-c-title">Smart NFC Review Card</p>
                <p className="s-n-b-c-desc">
                  Seamlessly gather customer feedback and testimonials. These
                  portable, easy-to-use cards ensure that you never miss an
                  opportunity to hear what your customers think.
                  <p className="shipping-grn">Rs. 500.00 + Shiping</p>
                </p>
                <GreenBtn greenBtnName="Smart Card" />
              </div>
              <div className="gray-card-left-products-r">
                <img src={reviewCard[reviewCardImg]} alt="" />
              </div>
            </div>
            <div className="card-smart-nfc">
              <div className="gray-card-left-products">
                <img src={standee[standeeCardImg]} alt="" />
              </div>

              <div className="s-n-business-card">
                <p className="s-n-b-c-title">Smart NFC Review Standee</p>
                <p className="s-n-b-c-desc">
                  Designed for physical spaces, this standee allows your
                  customers to leave reviews effortlessly by scanning or
                  tapping, perfect for retail stores, restaurants, and events.
                  <p className="shipping-grn">Rs. 1,500.00 + Free Shiping</p>
                </p>
                <GreenBtn greenBtnName="Smart Standee" />
              </div>
            </div>
          </div>

          {/* why-choose-filta section start  */}
          <div className="why-choose-filta-products">
            <p className="title-products">Why Choose Filta?</p>
            <p className="s-n-b-c-desc-why">
              Our NFC-enabled products blend cutting-edge technology with sleek,
              user-friendly designs, ensuring that your brand remains memorable
              and your processes remain seamless.
            </p>
            <div className="why-c-f-points-p">
              <div className="effortless-connectivity-container">
                <div className="circle-icon-w-c-f-p-p">
                  <img src={effort} alt="" className="img-w-c-f-p-p-s" />
                </div>
                <p className="e-c-w-c-f-title">Effortless Connectivity</p>
                <p className="e-c-w-c-f-desc w-effortless">
                  Instantly share contact details, social media profiles, and
                  more with a simple tap.
                </p>
              </div>
              <div className="effortless-connectivity-container">
                <div className="circle-icon-w-c-f-p-p">
                  <img src={future} alt="" className="img-w-c-f-p-p-s" />
                </div>
                <p className="e-c-w-c-f-title">Future-Proof Solutions</p>
                <p className="e-c-w-c-f-desc w-future-proof">
                  Stay ahead of the curve with cutting-edge NFC technology.
                </p>
              </div>
              <div className="effortless-connectivity-container">
                <div className="circle-icon-w-c-f-p-p">
                  <img src={customizable} alt="" className="img-w-c-f-p-p-s" />
                </div>
                <p className="e-c-w-c-f-title">Customizable Designs</p>
                <p className="e-c-w-c-f-desc w-future-proof">
                  Tailor your NFC products to reflect your brand's identity and
                  aesthetics.
                </p>
              </div>
              <div className="effortless-connectivity-container">
                <div className="circle-icon-w-c-f-p-p">
                  <img src={enhance} alt="" className="img-w-c-f-p-p-s" />
                </div>
                <p className="e-c-w-c-f-title">Enhanced Customer Feedback</p>
                <p className="e-c-w-c-f-desc w-effortless">
                  Collect real-time reviews with ease, increasing credibility
                  and customer trust.
                </p>
              </div>
              <div className="effortless-connectivity-container">
                <div className="circle-icon-w-c-f-p-p">
                  <img src={eco} alt="" className="img-w-c-f-p-p-s" />
                </div>
                <p className="e-c-w-c-f-title">Eco-Friendly</p>
                <p className="e-c-w-c-f-desc w-eco-frd">
                  Say goodbye to paper-based cards and review forms—Filta
                  supports sustainable practices with reusable solutions.
                </p>
              </div>
              <div className="effortless-connectivity-container">
                <div className="circle-icon-w-c-f-p-p">
                  <img src={cost} alt="" className="img-w-c-f-p-p-s" />
                </div>
                <p className="e-c-w-c-f-title">Cost-Effective</p>
                <p className="e-c-w-c-f-desc w-effortless">
                  Eliminate recurring costs for printing and storage of
                  traditional materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start journey section start  */}
      <div className="start-journey">
        <div className="p-b-start">
          <p className="start-journey-txt">
            Start your journey with Filta today !
            <br />
            {/* </p>
          <p className="start-journey-txt"> */}
            smart solutions for smarter businesses !
          </p>
        </div>
        <GreenBtn greenBtnName="Create Your Card" />
      </div>
    </>
  );
};

export default Products;
