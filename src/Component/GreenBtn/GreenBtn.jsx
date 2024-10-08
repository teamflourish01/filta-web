import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import '../GreenBtn/GreenBtn.css';

function GreenBtn({greenBtnName}) {
  return (
    <>
      <button type="button" className="btn-green">
        <span className="login-text feature-create-your-card-text">
          {greenBtnName}
          <div className="green-star-2">
            <PiStarFourFill className="stars-login" />
          </div>
          <div className="green-star-3">
            <PiStarFourFill className="stars-login" />
          </div>
          <div className="green-star-4">
            <PiStarFourFill className="stars-login" />
          </div>
          <div className="green-star-6">
            <PiStarFourFill className="stars-login" />
          </div>
        </span>
      </button>
    </>
  );
}

export default GreenBtn;
