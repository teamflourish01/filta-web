import React from "react";
import "../CardChoose/CardChoose.css";

function CardChoose({ title, description, chooseusimg }) {
  return (
    <div className="CardChoose-container">
      <div className="CardChoose-card about-CardChoose-card ">
        <div className="CardChoose-title">
          <div className="img-title">
            <img src={chooseusimg} alt={title} />
          </div>
          <p className="title-chooseus">{title}</p>
        </div>
        <hr className="dashed-hr" />

        <div className="CardChoose-desc">
          <p className="p-choose-desc">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardChoose;
