import React,{useEffect} from "react";
import "../Features/Features.css";
import greenstar from "../../assets/greenstar.png";
import ToggleBtn from "../../Component/ToggleBtn/ToggleBtn";
import Banner from "../../Component/banner/Banner";
import GreenBtn from "../../Component/GreenBtn/GreenBtn";
import "aos/dist/aos.css"; 
import AOS from "aos"; // Import AOS library

function Features() {
  useEffect(() => {
    AOS.init({duration: 2000}); // Initialize AOS animations
  }, []);
  return (
    <>
      <Banner pageName="Features" />

      <div className="feature" data-aos="fade-up" data-aos-duration="2000">
        <div className="feature-container">
          <div className="title-feature">
            Unlock The Future Of Networking With Filta
          </div>
          <div className="cards-feature">
            <div className="card-feature">
              <div className="gray-card-left"></div>

              <div className="content-01">
                <p className="text-01">01</p>
                <p className="useful-for-everyone">Useful for everyone:</p>
                <p className="feature-card-desc">
                  Unlock the unlimited possibilities of networking with every
                  useful features to connect better.
                </p>
                <div className="points-featutre">
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">
                      Endless possibilities to connect
                    </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">Seamless mobile view </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">Showcase images/videos </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">Connect instantly with links </p>
                  </div>

                </div>
                <GreenBtn greenBtnName="Create your card" />

              </div>
            </div>
            <div className="card-feature-2-4">
              <div className="content-02">
                <div className="text-01">02</div>
                <p className="useful-for-everyone">Customize as you want:</p>
                <p className="feature-card-desc">
                  You can create cards according to your choice of details and
                  themes to enhance your online presence.
                </p>
                <div className="points-featutre">
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">
                      Enhance view of card with custom themes
                    </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">Create unique QR codes </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">Craft greeting message </p>
                  </div>
                </div>
                <GreenBtn greenBtnName="Create your card" />

              </div>
              <div className="gray-card-right"></div>
            </div>
            <div className="card-feature">
              <div className="gray-card-left"></div>

              <div className="content-01">
                <div className="text-01">03</div>
                <p className="useful-for-everyone">A step ahead:</p>
                <p className="feature-card-desc">
                  Develop a strong networking with advanced features that make
                  sure you are always connect better.
                </p>
                <div className="points-featutre">
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">
                      Quick access of contacts with universal scanner
                    </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">
                      Use voice message to develop trust
                    </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">Unfold writing skills with AI </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">unlock multi-language support </p>
                  </div>
                </div>
                <GreenBtn greenBtnName="Create your card" />

              </div>
            </div>
            <div className="card-feature-2-4">
              <div className="content-02">
                <div className="text-01">04</div>
                <p className="useful-for-everyone">For Teams</p>
                <p className="feature-card-desc">
                  The big team wants better networking opportunities that open
                  unlimited sources.
                </p>
                <div className="points-featutre">
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text text-14">Easily manage team details </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">All leads at your fingertips </p>
                  </div>
                  <div className="point-green-star">
                    <img src={greenstar} alt="" />
                    <p className="point-text">Business-Level Support </p>
                  </div>
                </div>
                <GreenBtn greenBtnName="Create your card" />

              </div>
              <div className="gray-card-right"></div>
            </div>
          </div>
          <div className="feature-pricing-plans">
            <div className="feature-pricing-plans-title">Pricing Plans</div>
            <div className="feature-pricing-text-desc">
              We are here to make your networking better, smoother, and smarter.
              Start creating your digital impression today!
            </div>
            <ToggleBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
