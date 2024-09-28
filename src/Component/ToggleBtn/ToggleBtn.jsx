import React, { useState } from "react";
import Monthly from '../Monthly/Monthly'
import '../ToggleBtn/ToggleBtn.css'; // Assuming you have this CSS file for styling
import Yearly from "../Yearly/Yearly";

const ToggleBtn = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
    <div className="toggle-center">
      <div className="toggle-button-container">
     <div className="toggle-container">
        <button
          className={`toggle-btn ${isMonthly ? "active" : ""}`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`toggle-btn ${!isMonthly ? "active" : ""}`}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </button>
      </div>
      </div>

      <div className="width1320">
        {isMonthly ? (
            <Monthly/>
        ) : (
         <Yearly/>
        )}
      </div>
      </div>
    </>
  );
};

export default ToggleBtn;

