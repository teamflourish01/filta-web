// import React from "react";
// import "../Navbar/Navbar.css";
// import filta from '../assets/filta.png';

// function Navbar() {
//   return (
//     <>
//       <div className="navbar">
//         <div className="navbar-container">
//           <div className="logo-container">
//             <div className="filta-logo">
//               <img src={filta} alt="filta_logo" />
//             </div>
//             <div className="navbar-tabs">
//                 <p className="tab-name">Home</p>
//                 <p className="tab-name">Features</p>
//                 <p className="tab-name">Pricing</p>
//                 <p className="tab-name">About Us</p>
//                 <p className="tab-name">Resources</p>
//             </div>
//             <div className="navbar-buttons">
//                 <button type="button" className="navbar-login"> <span className="login-text">Login </span></button>
//                 <button type="button" className="navbar-create-new-card"> <span className="create-new-card">Create your card</span></button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React from "react";
import "../Navbar/Navbar.css";
import filta from "../../assets/filta.png";
import { PiStarFourFill } from "react-icons/pi";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <div className="filta-logo">
              <img src={filta} alt="filta_logo" />
            </div>
            <div className="navbar-tabs">
              <p className="tab-name">Home</p>
              <p className="tab-name">Features</p>
              <p className="tab-name">Pricing</p>
              <p className="tab-name">About Us</p>
              <p className="tab-name">Resources</p>
            </div>
            <div className="navbar-buttons">
              <button type="button" className="navbar-login">
                {" "}
                <span className="login-text">
                  Login
                  <div class="login-star-2">
                    <PiStarFourFill className="stars-login" />
                  </div>
                  <div class="login-star-3">
                    <PiStarFourFill className="stars-login" />
                  </div>
                  <div class="login-star-4">
                    <PiStarFourFill className="stars-login" />
                  </div>
                  <div class="login-star-6">
                    <PiStarFourFill className="stars-login" />
                  </div>
                </span>
              </button>
              <button type="button" className="navbar-create-new-card">
                <span className="create-new-card">
                  Create Your Card
                  <div class="star-2">
                    <PiStarFourFill className="stars-create" />
                  </div>
                  <div class="star-3">
                    <PiStarFourFill className="stars-create" />
                  </div>
                  <div class="star-4">
                    <PiStarFourFill className="stars-create" />
                  </div>
                  <div class="star-6">
                    <PiStarFourFill className="stars-create" />
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
