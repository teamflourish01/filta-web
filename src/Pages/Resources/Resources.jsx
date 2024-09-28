import React from "react";
import blogImg from "../../assets/blog1.png";
import "../Resources/Resources.css";
import ResourcesCard from '../../Component/ResourcesCard/ResourcesCard';
import Banner from "../../Component/banner/Banner";
import blogImg2 from '../../assets/blog2.png'
import blogImg3 from '../../assets/blog3.png'

function Resources() {
  return (
    <>
    <Banner pageName="Resources"/>
      <div className="resources-container">
        <div className="resources-content">
          <ResourcesCard
            date="August 20, 2022"
            title="The Impact of Technology on : "
            text="At Filta, our mission is simple: to empower you with the tools you need to..."
            image={blogImg}
            link="/resourcedetails"
          />
          <ResourcesCard
            date="August 20, 2022"
            title="The Impact of Technology on : "
            text="At Filta, our mission is simple: to empower you with the tools you need to..."
            image={blogImg2}
            link="/blog/blogsocialmedia"
          />
          <ResourcesCard
            date="August 20, 2022"
            title="The Impact of Technology on : "
            text="At Filta, our mission is simple: to empower you with the tools you need to..."
            image={blogImg3}
            link="/blog/blogsocialmedia"
          />
        </div>
      </div>
    </>
  );
}

export default Resources;
