import React from "react";
import '../BenifitCard/BenifitCard.css';

function BenifitCard({ title, description, chooseusimg }) {
  return (
    <div className="CardChoose-container-Benifit">
      <div className="CardChoose-card-Benifit ">
        <div className="CardChoose-title-Benifit">
          <div className="img-title-Benifit">
            <img src={chooseusimg} alt={title} />
          </div>
          <p className="title-chooseus-Benifit">{title}</p>
        </div>
        <hr className="dashed-hr" />

        <div className="CardChoose-desc-Benifit">
          <p className="p-choose-desc-Benifit">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BenifitCard;
