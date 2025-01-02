import React, { useState } from "react";
import "../smartnfc/smart.css";
import nfcreview from "../../assets/nfcreview.svg";
import youtubemockup from "../../assets/youtubemockup.svg";
import instamockup from "../../assets/Instagrammockup.svg";
import googlemockup from "../../assets/googlemockup.svg";
import reviewimg from "../../assets/reviewimg.png";
import watchyoutube from "../../assets/watchyoutube.svg";
import followinsta from "../../assets/followinsta.svg";
import filearrow from "../../assets/filearrow.svg";
import payment from "../../assets/payment.svg";
import ecofriendly from "../../assets/ecofriendly.svg";
import madeindia from "../../assets/madeindia.svg";
import sharing from "../../assets/sharing.svg";
import shipping from "../../assets/shipping.svg";
import GreenBtn from "../GreenBtn/GreenBtn";
const Smartnfc = () => {
  const [activeButton, setActiveButton] = useState("Google Review");
  const [showInput, setShowInput] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Without Customize");
  const [quantity, setQuantity] = useState(1);

  const productPrice = 499; // Price per product

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = productPrice * quantity; // Calculate total price based on quantity

  return (
    <>
      <div className="smart-nfc-container">
        <div className="smart-nfc-inner-padding">
          <div className="smart-nfc-inner">
            <div className="smart-nfc-tab">
              <div className="smart-nfc-buttons">
                {["Google Review", "Insta style", "Youtube"].map(
                  (buttonName) => (
                    <button
                      key={buttonName}
                      onClick={() => handleButtonClick(buttonName)}
                      className={activeButton === buttonName ? "active" : ""}
                    >
                      {buttonName}
                    </button>
                  )
                )}
              </div>
            </div>

            <hr />
            <div className="smart-nfc-review-main">
              <div className="smart-nfc-review-flex">
                <div className="smart-nfc-review-left">
                  <div className="smart-nfc-review-top">
                    {activeButton === "Google Review" && (
                      <img
                        src={
                          selectedOption === "With Customize"
                            ? googlemockup
                            : nfcreview
                        }
                        alt="Google Review"
                        className="smart-nfc-img"
                      />
                    )}
                    {activeButton === "Insta style" && (
                      <img
                        src={
                          selectedOption === "With Customize"
                            ? instamockup
                            : followinsta
                        }
                        alt="Instagram Mockup"
                        className="smart-nfc-img"
                      />
                    )}
                    {activeButton === "Youtube" && (
                      <img
                        src={
                          selectedOption === "With Customize"
                            ? youtubemockup
                            : watchyoutube
                        }
                        alt="YouTube Mockup"
                        className="smart-nfc-img"
                      />
                    )}
                  </div>

                  <div className="review-img">
                    <img
                      src={reviewimg}
                      alt=""
                      className="smart-nfc-review-img"
                    />
                    <img
                      src={reviewimg}
                      alt=""
                      className="smart-nfc-review-img"
                    />
                    <img
                      src={reviewimg}
                      alt=""
                      className="smart-nfc-review-img"
                    />
                    <img
                      src={reviewimg}
                      alt=""
                      className="smart-nfc-review-img"
                    />
                  </div>
                </div>

                <div className="smart-nfc-right">
                  <div className="smart-nfc-title">Smart NFC Review Card</div>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                  <div className="capture">
                    Capture Reviews Anytime, Anywhere
                  </div>
                  <div className="review-help">
                    The Smart NFC Review Card helps you collect valuable
                    customer feedback in real-time. Compact and portable, it
                    ensures that gathering reviews becomes an effortless part of
                    your interaction with customers, no matter where you are.
                  </div>
                  <div className="portable-list">
                  <ul>
                  <li className="build-trust-padding">
                      <span>Portable and Convenient:</span> Perfect for
                      on-the-go businesses and service providers.
                    </li>
                  </ul>
                   
                    <ul>
                    <li className=" build-trust-padding">
                      <span>Quick Feedback Collection:</span> Customers can
                      leave reviews with just a tap or scan.
                    </li>
                    </ul>
                    <ul>
                      <li className="build-trust-padding">
                        <span>Build Trust:</span> Showcase genuine customer
                        testimonials to strengthen your brand reputation.
                      </li>
                    </ul>
                    <ul>
                    <li className="build-trust-padding">
                      <span>Encourages Engagement:</span> Simplifies the
                      feedback process, boosting response rates.
                    </li>
                    </ul>
                  </div>

                  <div className="smart-nfc-radio">
                    <div className="label-with-input">
                      <label className="without-label">Without Customize</label>
                      <input
                        type="radio"
                        name="customization"
                        value="Without Customize"
                        className="radio-smart"
                        checked={selectedOption === "Without Customize"}
                        onChange={handleRadioChange}
                      />
                    </div>
                    <div className="label-with-input">
                      <label className="without-label">With Customize</label>
                      <input
                        type="radio"
                        name="customization"
                        value="With Customize"
                        className="radio-smart"
                        checked={selectedOption === "With Customize"}
                        onChange={handleRadioChange}
                      />
                    </div>
                  </div>

                  {selectedOption === "With Customize" && (
                    <>
                      <div className="with-customize-radio">
                        <div className="customize-logo">
                          <label htmlFor="" className="customize-logo-label">
                            Logo
                          </label>
                          <input
                            type="radio"
                            name="customizeOption"
                            id="logoOption"
                            className="radio-smart"
                            onChange={() => setShowInput(false)} // Hide input box
                            checked={!showInput} // Set default checked to true for Logo
                          />
                        </div>
                        <div className="customize-name">
                          <label htmlFor="" className="customize-name-label">
                            Name
                          </label>
                          <input
                            type="radio"
                            name="customizeOption"
                            id="nameOption"
                            className="radio-smart"
                            onChange={() => setShowInput(true)} // Show input box when Name is selected
                            checked={showInput} // Set checked for Name radio button
                          />
                        </div>
                      </div>

                      {/* Conditionally show the input box for 'Name' radio selection */}
                      {showInput && (
                        <div className="name-input-box-smart">
                          <input
                            type="text"
                            id="nameInput"
                            className="name-input-smart"
                            placeholder="Enter your name"
                          />
                        </div>
                      )}

                      {/* Hide the file-arrow-box if Name option is selected */}
                      {!showInput && (
                        <div className="file-arrow-box">
                          <img
                            src={filearrow}
                            alt="Upload"
                            className="file-arrow"
                          />
                          <input
                            type="file"
                            id="fileInput"
                            className="file-input"
                          />
                        </div>
                      )}

                      {/* Show the Save button only when "With Customize" is selected */}
                      <button className="smart-save-btn">Save</button>
                    </>
                  )}

                  <div className="product-card">
                    <div className="product-price">
                      <span className="original-price">Rs. {productPrice}</span>
                      <span className="discounted-price">Rs. {totalPrice}</span>
                    </div>

                    <div className="quantity-selector">
                      <button
                        onClick={decreaseQuantity}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <div className="quantity-display">{quantity}</div>
                      <button
                        onClick={increaseQuantity}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>

                    <div className="action-buttons">
                      <button className="add-to-cart">Add to cart</button>
                      <button className="buy-it-now">Buy It Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smart-key-point-container">
        <p className="smart-key-point-p">Key Point</p>
        <div className="smart-key-container-eco">
          <div className="smart-key-container-flex">
            <div className="one-time-payment align-icon-desc">
              <div className="one-time-radius">
                <img
                  src={payment}
                  alt=""
                  srcset=""
                  className="one-time-payment-img"
                />
              </div>
              <p className="made-top-p">One Time Payment, Lifetime Free</p>
            </div>
            <div className="Eco-Friendly align-icon-desc">
              <div className="one-time-radius">
                <img
                  src={ecofriendly}
                  alt=""
                  srcset=""
                  className="one-time-payment-img"
                />
              </div>

              <p className="made-top-p">Eco Friendly</p>
            </div>
            <div className="Fast-Shipping  align-icon-desc">
              <div className="one-time-radius">
                <img
                  src={shipping}
                  alt=""
                  srcset=""
                  className="one-time-payment-img"
                />
              </div>
              <p className="made-top-p">Fast Shipping</p>
            </div>
            <div className="Unlimited-Sharing align-icon-desc">
              <div className="one-time-radius">
                <img
                  src={sharing}
                  alt=""
                  srcset=""
                  className="one-time-payment-img"
                />
              </div>
              <p className="made-top-p">Unlimited Sharing</p>
            </div>
            <div className="Made-In-India align-icon-desc">
              <div className="one-time-radius">
                <img
                  src={madeindia}
                  alt=""
                  srcset=""
                  className="one-time-payment-img"
                />
              </div>
              <p className="made-top-p">Made In India</p>
            </div>
          </div>
          <div className="how-it-work">How It Works</div>
          <div className="how-it-work-card">
            <div className="how-it-work-card-flex">
              <div className="design-smart-review">
                <div className="design-smart-box"></div>
                <div className="design-smart-box-p">
                  <p className="design-smart-inner-p">
                    Design Your Smart Review Card
                  </p>
                  <p className="design-smart-para">
                    Customize a review card with your brand's logo and a link to
                    your preferred review platform.
                  </p>
                </div>
              </div>
              <div className="boost-trustability">
                <div className="design-smart-box"></div>

                <div className="design-smart-box-p">
                  <p className="design-smart-inner-p">Boost Trustability</p>
                  <p className="design-smart-para">
                    Display positive reviews on your digital profiles to build
                    trust and attract new customers.
                  </p>
                </div>
              </div>
              <div className="collect-feedback">
                <div className="design-smart-box-p">
                  <div className="design-smart-box"></div>

                  <p className="design-smart-inner-p">
                    Collect Feedback Instantly
                  </p>
                  <p className="design-smart-para">
                    Share the review card with your customers via QR code or
                    tap, making it easy for them to leave feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="technical-s-container">
            <div className="technical-specification">
              Technical Specifications
            </div>
            <p>Size:</p>
            <p>Material:</p>
            <p>Compatibility:</p>
            <p>Weight:</p>
            <p>Print Type:</p>
          </div>

          <div className="smart-card-offer-section">
            <div className="offer-title">Offers</div>
            <p>1.Flat 20% off on your first Filta's NFC products purchase.</p>
            <p className="offer-title-p-padding">
              1.Buy any two Filta’s NFC product and get 20% off.
            </p>
            <p>1.Avail 15% on all Filta’s products off till 31st January.</p>
          </div>
          <div className="unlock-exclusive">
            <p className="unclock-exclusive-p">
              Unlock Exclusive Benefits with Bulk Orders!{" "}
            </p>
            <p className="take-your">
              Take your business networking to the next level with Filta’s bulk
              order solutions.
            </p>
            <div className="smart-contact-us">
              <GreenBtn greenBtnName="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smartnfc;
