import React from "react";
import "../Pricing/Pricing.css";
import arrow from "../../assets/right.png";
import { CgInfo } from "react-icons/cg";
import cross from "../../assets/cross.png";
import Banner from "../../Component/banner/Banner";

function Pricing() {
  return (
    <>
      <Banner pageName="Pricing" />

      <div className="pricing-container">
        <div className="pricing-content">
        <div className="padding">

          <table >
            <thead className="sticky" >
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
            <tr>
              <td className="text-with-icon feature-name">
                Unlimited Card Sharing
                <CgInfo />
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
                <CgInfo />
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
                Hide FILTA Branding
                <CgInfo />
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
              <td className="feature-name">Save Contact</td>
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
                Multiple Sharing Option <CgInfo />
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
            {/* <--------Des ign------> */}
            <tr className="black-header">
              <td colSpan="4" className="merged-header">
                Design
              </td>
            </tr>
            <tr>
              <td className="text-with-icon feature-name">
                Mobile Responsive <CgInfo />
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
                Voice Message <CgInfo />
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
                Multi Language Interface <CgInfo />
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
                Call to Action Button <CgInfo />
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
                Team Member Details
                <CgInfo />
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
                Limited Time Offer Banner
                <CgInfo />
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
              <span className="pop-up">

                POP-UP Greetings Message
                </span>
                <CgInfo className="set-icon" />
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
              <span className="pop-up">
                Latest Statistics of Business
                </span>
                <CgInfo className="set-icon-2" />
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
                Presentation Deck
                <CgInfo />
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
                Card View Counter
                <CgInfo />
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
                Live Chat Assistant
                <CgInfo />
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
                Offline Sharing
                <CgInfo />
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
                AI Assistant
                <CgInfo />
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
                Payment Options
                <CgInfo />
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
                Clickable Links
                <CgInfo />
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
                Customised QR Code
                <CgInfo />
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
            <tr >
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
              <td className="border-bottom-none feature-name">FILTA Branding</td>
              <td >
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
