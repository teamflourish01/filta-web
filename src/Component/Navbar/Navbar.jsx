import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import filta from "../../assets/filta.png";
import { PiStarFourFill } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // const [showTabs, setShowTabs] = useState(false);

  return (
    <>
      <div className={`navbar ${menuOpen ? "expanded" : ""}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <div className="filta-logo">
              {/* <p className="filta-logo-text">
                f<span className="i-green">i</span>lta
              </p> */}
              <img src={filta} alt="filta_logo" className="filta-logo-size" />
            </div>

            <div className="navbar-tabs hide-nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "tab-name active" : "tab-name"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "tab-name active" : "tab-name"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "tab-name active" : "tab-name"
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "tab-name active" : "tab-name"
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "tab-name active" : "tab-name"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? "tab-name active" : "tab-name"
                }
              >
                Resources
              </NavLink>
            </div>
            <div className="navbar-buttons">
              <div className="buttons-both hide">
                <button type="button" className="navbar-login">
                  <span className="login-text-nav">
                    Login
                    <div className="login-star-2">
                      <PiStarFourFill className="stars-login" />
                    </div>
                    <div className="login-star-3">
                      <PiStarFourFill className="stars-login" />
                    </div>
                    <div className="login-star-4">
                      <PiStarFourFill className="stars-login" />
                    </div>
                    <div className="login-star-6">
                      <PiStarFourFill className="stars-login" />
                    </div>
                  </span>
                </button>
                <button type="button" className="navbar-create-new-card">
                  <span className="create-new-card">
                    Create Your Card
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

              <div
                className="hamburger "
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <CgClose
                    className={`icon-resize ${
                      menuOpen ? " visible" : "hidden"
                    }`}
                  />
                ) : (
                  <div
                    className={`hamburger ${menuOpen ? "hidden" : "visible"}`}
                  >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* { menuOpen && ( */}
          <div
            className={`navbar-tabs res-hide ${
              menuOpen ? "open" : "collapsed "
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "tab-name active" : "tab-name"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? "tab-name active" : "tab-name"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Features
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "tab-name active" : "tab-name"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "tab-name active" : "tab-name"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive ? "tab-name active" : "tab-name"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Resources
            </NavLink>
            <div className="buttons-both button-768">
              <button type="button" className="navbar-login">
                <span className="login-text-nav">
                  Login
                  <div className="login-star-2">
                    <PiStarFourFill className="stars-login" />
                  </div>
                  <div className="login-star-3">
                    <PiStarFourFill className="stars-login" />
                  </div>
                  <div className="login-star-4">
                    <PiStarFourFill className="stars-login" />
                  </div>
                  <div className="login-star-6">
                    <PiStarFourFill className="stars-login" />
                  </div>
                </span>
              </button>
              <button type="button" className="navbar-create-new-card">
                <span className="create-new-card">
                  Create Your Card
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
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
