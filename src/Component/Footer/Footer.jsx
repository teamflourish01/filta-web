import React from "react";
import "../Footer/Footer.css";
import filta from "../../assets/footerlogo.png";

import { FaWhatsapp } from "react-icons/fa6";

import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-filta">
            <div className="footer-section-one">
              <div className="footer-logo">
                <img src={filta} alt="filta_logo" />
              </div>
              <p className="footer-desc">
                Empower your networking with Filta's innovative digital business
                cards and more. Seamlessly share, connect, and make lasting
                impressions—anytime, anywhere. Join the future of networking
                today.
              </p>
              <div className="social-icon-footer">
                <div className="icons-f">
                  <TfiEmail />
                </div>
                <div className="icons-f">
                  <FaWhatsapp />
                </div>
                <div className="fbi">
                  <div className="icons-f ">
                    <svg
                      width="14"
                      height="24"
                      viewBox="0 0 14 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1304 1.14258H9.90014C8.47228 1.14258 7.1029 1.70979 6.09325 2.71944C5.0836 3.72909 4.51638 5.09847 4.51638 6.52633V9.75658H1.28613V14.0636H4.51638V22.6776H8.82339V14.0636H12.0536L13.1304 9.75658H8.82339V6.52633C8.82339 6.24076 8.93683 5.96688 9.13876 5.76495C9.34069 5.56302 9.61457 5.44958 9.90014 5.44958H13.1304V1.14258Z"
                        stroke="white"
                        strokeWidth="1.14286"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icons-f">
                  <FaInstagram />
                </div>
                <div className="icons-f">
                  <span className="in-icon">
                    <SlSocialLinkedin />
                  </span>
                </div>
                {/* <img src={whatsapp} alt="whatsapp" /> */}
                {/* <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" /> */}
              </div>
            </div>
            <hr className="hr-rotate"></hr>
            <div className="footer-section-two">
              <p className="page-name padding-company">Company</p>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
                Resources
              </NavLink>
            </div>
            <hr className="hr-rotate"></hr>

            <div className="footer-section-three">
              <p className="page-name padding-company width-help">Help & Information</p>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
               FAQ’s
              </NavLink>
              
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
               Privacy Policy
              </NavLink>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  isActive ? "page-name active-link" : "page-name hover-color"
                }
              >
               Terms & Conditions
              </NavLink>
            </div>
            <hr className="hr-rotate"></hr>

            <div className="footer-section-four">
              <p className="page-name padding-company">Contact Info </p>
              <p className="page-name hover-color">+91 85110 24422</p>
              <p className="page-name hover-color">filta.india@gmail.com</p>
            </div>
          </div>
          <hr className="hr-color"></hr>
          <div className="footer-copyright">
            <p className="copyright">
              Copyrights © 2024 Filta All rights reserved.
            </p>
            <p className="copyright">
              Design & Developed By: FLOURISH CREATIONS PVT. LTD.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
