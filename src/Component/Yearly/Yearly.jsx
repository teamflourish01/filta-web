import React from 'react';
import '../Yearly/Yearly.css'
import "../Monthly/Monthly.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import GreenBtn from "../GreenBtn/GreenBtn";
import WhiteGrnBtn from "../WhiteGrnBtn/WhiteGrnBtn";
function Yearly() {
  return (
    <div>
      <div className="yearly-container">
    
      <div className="monthly-card-container">
        {/* card One */}
        <div className="monthly-price-card">
          <div className="free">
            <p className="free-text">free</p>
            <div className="rupees">
              <FaIndianRupeeSign />
              <p className="amount">0</p>
            </div>
            <div className="g-b-m-y">
              <GreenBtn greenBtnName="Create your card" />
            </div>
          </div>
          <div className="box">
            <p className="box-text">Unique Digital Business Card</p>
          </div>
          <div className="box">
            <p className="box-text">Unlimited Card Sharing</p>
          </div>
          <div className="box">
            <p className="box-text">Personal Information</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">SSL Certificate</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">Save Contact</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">Mobile Responsive</p>
          </div>
          <div className="box">
            <p className="box-text">Profile Photo</p>
          </div>
          <div className="box">
            <p className="box-text">Company Logo</p>
          </div>
          <div className="box">
            <p className="box-text">Cover Photo</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">About (Company Introduction)</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">POP-UP Greetings Message</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">Card View Counter</p>
          </div>
          <div className="box">
            <p className="box-text">Multimedia (Photo / Video)</p>
          </div>
          <div className="box">
            <p className="box-text">Live Chat Assistant</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">Clickable Links</p>
          </div>
          {/* <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div>
          <div className="box">
            <p className="box-text">-</p>
          </div> */}
          <div className="box">
            <p className="box-text">Filta Branding</p>
          </div>
        </div>
        {/* card two */}
        <div className="monthly-price-card">
          <div className="free">
            <p className="free-text">PREMIUM</p>
            <div className="rupees">
              <FaIndianRupeeSign />
              <p className="amount">
                1199/-
                <span className="p-mont-grey">(Per Year)</span>
              </p>
            </div>
            <div className="g-b-m">
              <WhiteGrnBtn name=" Get Started" />
            </div>
          </div>
          {/* <div className="box">
            <p className="box-text">1 Card</p>
          </div> */}
          <div className="box">
            <p className="box-text bold-include">
              Everything included in Free, plus:
            </p>
          </div>
          {/* <div className="box">
            <p className="box-text">Personal Information</p>
          </div> */}
          <div className="box">
            <p className="box-text">Customer Support</p>
          </div>
          <div className="box">
            <p className="box-text">Hide Filta Branding</p>
          </div>
          {/* <div className="box">
            <p className="box-text">SSL Certificate</p>
          </div> */}
          <div className="box">
            <p className="box-text">Contact Form</p>
          </div>
          {/* <div className="box">
            <p className="box-text">Save Contact</p>
          </div> */}
          <div className="box">
            <p className="box-text">Multiple Sharing Option</p>
          </div>
          {/* <div className="box">
            <p className="box-text">Mobile Responsive</p>
          </div> */}
          {/* <div className="box">
            <p className="box-text">Profile Photo</p>
          </div> */}
          {/* <div className="box">
            <p className="box-text">Company Logo</p>
          </div>
          <div className="box">
            <p className="box-text">Cover Photo</p>
          </div> */}
          <div className="box">
            <p className="box-text">Custom Color</p>
          </div>
          <div className="box">
            <p className="box-text">Custom Font</p>
          </div>
          <div className="box">
            <p className="box-text">Voice Message</p>
          </div>
          <div className="box">
            <p className="box-text">Multi Language Interface</p>
          </div>
          <div className="box">
            <p className="box-text">Call to Action Button</p>
          </div>
          {/* <div className="box">
            <p className="box-text">About (Company Introduction)</p>
          </div> */}
          <div className="box">
            <p className="box-text">Attach Documents</p>
          </div>
          <div className="box">
            <p className="box-text">Team Member Details</p>
          </div>
          <div className="box">
            <p className="box-text">Limited Time Offer Banner</p>
          </div>
          {/* <div className="box">
            <p className="box-text">POP-UP Greetings Message</p>
          </div> */}
          <div className="box">
            <p className="box-text">Latest Statistics of Business</p>
          </div>
          <div className="box">
            <p className="box-text">Presentation Desk</p>
          </div>
          <div className="box">
            <p className="box-text">Product Gallery</p>
          </div>
          <div className="box">
            <p className="box-text">Card View Counter</p>
          </div>
          {/* <div className="box">
            <p className="box-text">Multimedia (Photo / Video)</p>
          </div> */}
          {/* <div className="box">
            <p className="box-text">Live Chat Assistant</p>
          </div> */}
          <div className="box">
            <p className="box-text">Offline Sharing</p>
          </div>
          <div className="box">
            <p className="box-text">AI Assistant</p>
          </div>
          <div className="box">
            <p className="box-text">Payment Options</p>
          </div>
          {/* <div className="box">
            <p className="box-text">Clickable Links</p>
          </div> */}
          <div className="box">
            <p className="box-text">Customised QR Code</p>
          </div>
          <div className="box">
            <p className="box-text">Customised Background</p>
          </div>
          <div className="box">
            <p className="box-text">QR Code</p>
          </div>
        </div>
        {/* card three */}
        <div className="monthly-price-card">
          <div className="free">
            <p className="free-text">team</p>
            <div className="rupees-h">
              {/* <FaIndianRupeeSign /> */}
              <p className="amount"></p>
            </div>
            <div className="g-b-m">
              <WhiteGrnBtn name="Contact Sales" />
            </div>
          </div>
          <div className="box">
            <p className="box-text bold-include">
              Everything included in Premium, plus:
            </p>
          </div>
          <div className="box">
            <p className="box-text">Costume Dashboard Design</p>
          </div>
          <div className="box">
            <p className="box-text">Costume Company Branding</p>
          </div>
          <div className="box">
            <p className="box-text">Unlimited Lead Storage</p>
          </div>
          <div className="box">
            <p className="box-text">Team and Sub-team Manager</p>
          </div>
          <div className="box">
            <p className="box-text">Multiple Template Theme</p>
          </div>
          <div className="box">
            <p className="box-text">Export Data</p>
          </div>
          <div className="box">
            <p className="box-text">Business Level Support</p>
          </div>
        </div>
      </div>
    
      </div>
    </div>
  );
}

export default Yearly;
