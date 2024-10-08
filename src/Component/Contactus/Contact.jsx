import React from "react";
import "../Contactus/Contact.css";
import GreenBtn from "../GreenBtn/GreenBtn";

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="container-form">
        <div className="container">
          <div className="contact-us">
            <p className="us">Contact Us For Better Connections </p>
          </div>
          <div className="container-padding">
            <div className="inputs">
              <input type="text" />
              <label>Name</label>
            </div>

            <div className="input-flex input-padding">
              <div className="inputs">
                <input type="text" />
                <label>Mobile Number</label>
              </div>

              <div className="inputs">
                <input type="text" />
                <label>Email</label>
              </div>
            </div>

            <div className="input-flex padding-bottom">
              <div className="inputs">
                <input type="text" />
                <label>Company Name</label>
              </div>

              <div className="inputs">
                <input type="text" />
                <label>City</label>
              </div>
            </div>

            <div className="inputs">
              <input type="text" />
              <label>Message</label>
            </div>

            <div className="submit-button">
              {/* <button className="submit">Submit</button> */}
              <GreenBtn greenBtnName="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
