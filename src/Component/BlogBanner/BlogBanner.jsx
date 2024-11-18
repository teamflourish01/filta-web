import React from "react";
import "../BlogBanner/BlogBanner.css";

function BlogBanner({ title, img }) {
  return (
    <>
      <section className="Blog-banner">
        <div className="section-bg-blog">
          <div className="blog-banner-flex">
            <div className="title-blog-banner">{title}</div>
            <div className="img-vectore">
              <img src={img} alt="" className="img-vecter"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogBanner;
