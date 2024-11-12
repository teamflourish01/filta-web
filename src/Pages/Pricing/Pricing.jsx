import React, { useState } from "react";
import "../Pricing/Pricing.css";
import arrow from "../../assets/right.png";
import { CgInfo } from "react-icons/cg";
import cross from "../../assets/cross.png";
import Banner from "../../Component/banner/Banner";
import "../../Component/Info/Info.css";

function Pricing() {
  const [tooltips, setTooltips] = useState({
    tooltip1: false,
    tooltip2: false,
    tooltip3: false,
    tooltip4: false,
    tooltip5: false,
    tooltip6: false,
    tooltip7: false,
    tooltip8: false,
    tooltip9: false,
    tooltip10: false,
    tooltip11: false,
    tooltip12: false,
    tooltip13: false,
    tooltip14: false,
    tooltip15: false,
    tooltip16: false,
    tooltip17: false,
    tooltip18: false,
    tooltip19: false,
    tooltip20: false,
    tooltip21: false,
  });
  const handleMouseEnter = (tooltipKey) => {
    setTooltips((prevTooltips) => ({ ...prevTooltips, [tooltipKey]: true }));
  };

  const handleMouseLeave = (tooltipKey) => {
    setTooltips((prevTooltips) => ({ ...prevTooltips, [tooltipKey]: false }));
  };
  // const handleMouseEnter = (tooltipKey) => {
  //   setTooltips((prevTooltips) => ({ ...prevTooltips, [tooltipKey]: true }));
  // };

  // const handleMouseLeave = (tooltipKey) => {
  //   setTooltips((prevTooltips) => ({ ...prevTooltips, [tooltipKey]: false }));
  // };
  return (
    <>
      <Banner pageName="Pricing" />

      <div className="pricing-container">
        <div className="pricing-content">
          <div className="padding">
            <table>
              <thead className="sticky">
                <tr className="black-header">
                  <th className="w-330 b-radius">Features</th>
                  <th className="w-300">Free</th>
                  <th className="w-300">Premium</th>
                  <th className="w-300 r-radius">Team</th>
                </tr>
                <tr className="price-month-year">
                  <td>
                    PRICE / MONTH
                    <p className="p-15">PRICE / YEAR</p>
                  </td>
                  <td>
                    N.A
                    <p className="p-15"> N.A</p>
                  </td>
                  <td>
                    119/<p className="p-15">-</p>
                  </td>
                  <td>
                    499/<p className="p-15">-</p>
                  </td>
                </tr>
              </thead>

              <tr>
                <td className="feature-name">Unique Digital Business Card</td>
                <td className="feature-name">1 Card</td>
                <td className="feature-name">1 Card</td>
                <td className="feature-name">Upto 10 Cards</td>
              </tr>
              <tr className="ab-posi">
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Unlimited Card Sharing
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip1")}
                      onMouseLeave={() => handleMouseLeave("tooltip1")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip1 && (
                      <div className="tooltip position-1">
                        Share your card with everyone
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Personal Information</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  Customer Support
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Hide FILTA Branding
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip2")}
                      onMouseLeave={() => handleMouseLeave("tooltip2")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip2 && (
                      <div className="tooltip position-2">
                        Remove Filta branding
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    SSL Certificate
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip3")}
                      onMouseLeave={() => handleMouseLeave("tooltip3")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip3 && (
                      <div className="tooltip position-3">
                        Filta always ensures SSL certificates
                        <br /> for enhance protection
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr className="black-header">
                <td colSpan="4" className="merged-header">
                  FILTA Connect
                </td>
              </tr>
              <tr>
                <td className="feature-name">Contact Form</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Save Contact
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip4")}
                      onMouseLeave={() => handleMouseLeave("tooltip4")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip4 && (
                      <div className="tooltip position-4">
                        Visitors can save your contact <br />
                        direct to their phone
                      </div>
                    )}
                  </div>
                </td>

                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Multiple Sharing Option
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip5")}
                      onMouseLeave={() => handleMouseLeave("tooltip5")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip5 && (
                      <div className="tooltip position-5">
                        Multiple platforms to
                        <br /> share your card
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              {/* <--------Design------> */}
              <tr className="black-header">
                <td colSpan="4" className="merged-header">
                  Design
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Mobile Responsive
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip6")}
                      onMouseLeave={() => handleMouseLeave("tooltip6")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip6 && (
                      <div className="tooltip position-6">
                        Perfect design of your card <br />
                        for mobile viewers
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Profile Photo</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Company Logo</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Cover Photo</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Custom Color</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Custom Font</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr className="black-header">
                <td colSpan="4" className="merged-header">
                  Features
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Voice Message
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip7")}
                      onMouseLeave={() => handleMouseLeave("tooltip7")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip7 && (
                      <div className="tooltip position-7">
                        Record a message for instant
                        <br /> information
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Multi Language Interface
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip8")}
                      onMouseLeave={() => handleMouseLeave("tooltip8")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip8 && (
                      <div className="tooltip position-8">
                        Create your card in
                        <br /> your langauge
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Call to Action Button
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip9")}
                      onMouseLeave={() => handleMouseLeave("tooltip9")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip9 && (
                      <div className="tooltip position-9">
                        Multiple CTA button
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">About (Company Introduction)</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Attach Documents</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Team Member Details
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip10")}
                      onMouseLeave={() => handleMouseLeave("tooltip10")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip10 && (
                      <div className="tooltip position-10">
                        Add your team member details
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Limited Time Offer Banner
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip11")}
                      onMouseLeave={() => handleMouseLeave("tooltip11")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip11 && (
                      <div className="tooltip position-11">
                        For instant information <br />
                        on latest updates
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className=" feature-name icon-top">
                  <div className="absolute-p b-5">
                    <span className="pop-up">POP-UP Greetings Message</span>
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip12")}
                      onMouseLeave={() => handleMouseLeave("tooltip12")}
                    >
                      <CgInfo className="set-icon" />
                    </span>
                    {tooltips.tooltip12 && (
                      <div className="tooltip position-12">
                        Welcome visitors by <br />
                        personalizing your message
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="icon-top feature-name">
                  <div className="absolute-p  b-5">
                    <span className="pop-up">
                      Latest Statistics of Business
                    </span>
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip13")}
                      onMouseLeave={() => handleMouseLeave("tooltip13")}
                    >
                      <CgInfo className="set-icon-2" />
                    </span>
                    {tooltips.tooltip13 && (
                      <div className="tooltip position-13">
                        Share latest information
                        <br /> on your business
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Product Gallery
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip14")}
                      onMouseLeave={() => handleMouseLeave("tooltip14")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip14 && (
                      <div className="tooltip position-14">
                        Display your products with <br />
                        price and buy button
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Card View Counter
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip15")}
                      onMouseLeave={() => handleMouseLeave("tooltip15")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip15 && (
                      <div className="tooltip position-15">
                        The number of visitors
                        <br /> to your card
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Multimedia (Photo / Video)</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Live Chat Assistant
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip16")}
                      onMouseLeave={() => handleMouseLeave("tooltip16")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip16 && (
                      <div className="tooltip position-16">
                        Clear your doubts anytime
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Offline Sharing
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip17")}
                      onMouseLeave={() => handleMouseLeave("tooltip17")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip17 && (
                      <div className="tooltip position-17">
                        Share offline your card
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    AI Assistant
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip18")}
                      onMouseLeave={() => handleMouseLeave("tooltip18")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip18 && (
                      <div className="tooltip position-18">
                        AI assistant will help
                        <br /> you to write for you
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Payment Options
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip19")}
                      onMouseLeave={() => handleMouseLeave("tooltip19")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip19 && (
                      <div className="tooltip position-19">
                        Accept payments in
                        <br /> various modes
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Clickable Links
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip20")}
                      onMouseLeave={() => handleMouseLeave("tooltip20")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip20 && (
                      <div className="tooltip position-20">
                        Add multiple links to <br />
                        enhance your network
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-with-icon feature-name">
                  <div className="absolute-p">
                    Customised QR Code
                    <span
                      className="i-center"
                      onMouseEnter={() => handleMouseEnter("tooltip21")}
                      onMouseLeave={() => handleMouseLeave("tooltip21")}
                    >
                      <CgInfo />
                    </span>
                    {tooltips.tooltip21 && (
                      <div className="tooltip position-21">
                        Custom your QR code
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr className="black-header">
                <td colSpan="4" className="merged-header">
                  E-Mail Signature
                </td>
              </tr>
              <tr>
                <td className="feature-name">Customised QR Code</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">QR Code</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Profile Photo</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">FILTA Branding</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
              </tr>
              <tr className="black-header">
                <td colSpan="4" className="merged-header">
                  Virtual Background
                </td>
              </tr>
              <tr>
                <td className="feature-name">Customised QR Code</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">QR Code</td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr>
                <td className="feature-name">Profile Photo</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              <tr className="border-bottom-none">
                <td className="border-bottom-none feature-name">
                  FILTA Branding
                </td>
                <td>
                  <img src={arrow} alt="" />
                </td>
                <td>
                  <img src={cross} alt="" />
                </td>
                <td className="border-bottom-none">
                  <img src={cross} alt="" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
