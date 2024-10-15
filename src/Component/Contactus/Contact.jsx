import React, { useState } from "react";
import "../Contactus/Contact.css";
import GreenBtn from "../GreenBtn/GreenBtn";

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    mobile: "",
    email: "",
    companyName: "",
    city: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const isFilled = (value) => value.trim() !== "";

  return (
    <div className="contact-form">
      <div className="container-form">
        <div className="container">
          <div className="contact-us">
            <p className="us">Contact Us For Better Connections</p>
          </div>
          <div className="container-padding">
            <div className={`inputs ${isFilled(inputValues.name) ? "filled" : ""}`}>
              <input
                type="text"
                name="name"
                value={inputValues.name}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <div className="border-green-div"></div>
              <label>Name</label>
            </div>

            <div className="input-flex input-padding">
              <div className={`inputs ${isFilled(inputValues.mobile) ? "filled" : ""}`}>
                <input
                  type="text"
                  name="mobile"
                  value={inputValues.mobile}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                />
                <div className="border-green-div"></div>
                <label>Mobile Number</label>
              </div>

              <div className={`inputs ${isFilled(inputValues.email) ? "filled" : ""}`}>
                <input
                  type="text"
                  name="email"
                  value={inputValues.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                />
                <div className="border-green-div"></div>
                <label>Email</label>
              </div>
            </div>

            <div className="input-flex padding-bottom">
              <div className={`inputs ${isFilled(inputValues.companyName) ? "filled" : ""}`}>
                <input
                  type="text"
                  name="companyName"
                  value={inputValues.companyName}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                />
                <div className="border-green-div"></div>
                <label>Company Name</label>
              </div>

              <div className={`inputs ${isFilled(inputValues.city) ? "filled" : ""}`}>
                <input
                  type="text"
                  name="city"
                  value={inputValues.city}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                />
                <div className="border-green-div"></div>
                <label>City</label>
              </div>
            </div>

            <div className={`inputs ${isFilled(inputValues.message) ? "filled" : ""}`}>
              <input
                type="text"
                name="message"
                value={inputValues.message}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <div className="border-green-div"></div>
              <label>Message</label>
            </div>

            <div className="submit-button">
              <GreenBtn greenBtnName="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
