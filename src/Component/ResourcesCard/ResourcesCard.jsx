import React from "react";
import "../ResourcesCard/ResourcesCard.css";
import { GoArrowRight } from "react-icons/go";

function ResourcesCard({ date, title, text, image, link }) {
  return (
    <>
      <div className="blog-card-container">
        <div className="blog-img-container">
          <img className="blog-img" src={image} alt="Blog" />
        </div>
        <div className="blog-content">
          {/* <a href={link} className="link-remove"> */}
            <p className="date">{date}</p>
            <hr className="dashed-hr-blog" />
            <p className="blog-card-title">
              {title}
              <span className="blog-card-text">{text}</span>
            </p>
          {/* </a> */}
          <hr className="dashed-hr-blog" />
          <a href={link} className="link-remove">
            <div className="view-more-btn">
              <div className="view-more-blog">View More</div>
              <div className="view-more-btn-arrow">
                <GoArrowRight />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ResourcesCard;
