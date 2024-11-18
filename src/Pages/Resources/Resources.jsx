import React from "react";
import blogImg from "../../assets/b1.png";
import "../Resources/Resources.css";
import ResourcesCard from '../../Component/ResourcesCard/ResourcesCard';
import Banner from "../../Component/banner/Banner";
import blogImg2 from '../../assets/b2.png'
import blogImg3 from '../../assets/b2.png'

function Resources() {
  return (
    <>
    <Banner pageName="Resources"/>
      <div className="resources-container">
        <div className="resources-content">
          <ResourcesCard
            date="December 01, 2024"
            title="Why Professionals Should Switch to Digital Business Cards ? "
            image={blogImg}
            link="/resourcedetails"
          />
          <ResourcesCard
            date="November 20, 2024"
            title="How a Digital Business Card Can Boost Your Brand Image"
            image={blogImg2}
            link="/resourcedetailtwo"
          />
          <ResourcesCard
            date="November 08, 2024"
            title="Top Benefits of Using a Digital Business Card for Networking"
            image={blogImg3}
            link="/resourcedetailthree"
          />
        </div>
      </div>
    </>
  );
}

export default Resources;
