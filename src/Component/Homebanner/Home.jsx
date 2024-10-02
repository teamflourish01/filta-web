import React,{useEffect} from "react";
import "../Homebanner/Home.css";
import star from "../../assets/star.png";
import smallstar from "../../assets/small.png";
import Digitalcard from "../digitalcard/Digitalcard";
import Diffrent from "../Diffrent/Diffrent";
import Feature from "../feature/Feature";
import thcard from "../../assets/thrstar.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Work from "../work/Work";
import Transform from "../Transform/Transform";
import ChooseUs from '../ChooseUs/ChooseUs';
import Homefaq from "../Homefaq/Homefaq";
import GreenBtn from "../GreenBtn/GreenBtn";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  
  return (
    <>
      <div className="home-conatiner">
        
        <div className="wrapper" >
          <div className="now" data-aos="slide-down">
            <p>The Way of Networking,Now</p>

            <span className="words">
              <span className="eco-friendly">Eco-friendly</span>
              <span>Digital</span>
              <span>Faster</span>
              <span>Dynamic</span>
            </span>
          </div>
        </div>
      </div>
      <div className="simple-star-flex">
        <div className="background left-star-wrapper">
          <img src={star} alt="" srcset="" className="left-star" />
          <img src={smallstar} alt="small star" className="small-left-star" />
        </div>
        <div className="simple">
          <p className="network" data-aos="slide-down">
            Networking Made Simple and Easier with India’s Smartest Digital
            Business Card Platform.
          </p>
        </div>

        <div className="background">
          <img src={star} alt="" srcset="" className="right-star" />
        </div>
      </div>


      <div className="card-container">
        <div className="card-left"></div>
        <div className="card-center"></div>
        <div className="card-right"></div>
        <img src={thcard} alt="" srcset="" className="side-image" />
      </div>

      <div className="hr">
        <div className="hrs"></div>
        <img src={star} alt="" srcset="" />
      </div>





      <section className="welcome">
            <div className="welcome-to">
                <p className="filta">Welcome to Filta!</p>
                <p className="all-in">India’s all-in-one platform for seamless digital networking solutions. Whether you are an entrepreneur, individual professional, corporate professional, or small or large enterprise, we provide innovative products like digital business cards, NFC cards, review stickers/cards, and email signatures to help you build stronger connections effortlessly.</p>
            </div>
      </section>
      <ChooseUs/>
      <Digitalcard/>
      <Diffrent/>
      <Feature/>
      <Work/>

      <Transform/>
      

      <Homefaq/>
    </>
  );
};

export default Home;
