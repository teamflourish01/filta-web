import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const WhiteGrnBtn = ({name}) => {
  return (
    <div>
      <button type="button" className="navbar-create-new-card w-monthly-f">
        <span className="create-new-card">
          {name}
          <div className="star-2">
            <PiStarFourFill className="stars-create" />
          </div>
          <div className="star-3">
            <PiStarFourFill className="stars-create" />
          </div>
          <div className="star-4">
            <PiStarFourFill className="stars-create" />
          </div>
          <div className="star-6">
            <PiStarFourFill className="stars-create" />
          </div>
        </span>
      </button>
    </div>
  );
};

export default WhiteGrnBtn;
