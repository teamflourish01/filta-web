
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Faq from "./Pages/Faq/Faq";
import Banner from "./Component/banner/Banner";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import { FaQ } from "react-icons/fa6";
import Products from "./Pages/Products/Products";
import Resources from "./Pages/Resources/Resources";
import ResouceDetails from "./Component/ResourceDetails/ResouceDetails";
import Pricing from "./Pages/Pricing/Pricing";
import Features from './Pages/Features/Features';

import Contact from "./Component/Contactus/Contact";
import Home from "./Component/Homebanner/Home";
import Cursor from "./Component/cursor/Cursor";
import ChooseUs from "./Component/ChooseUs/ChooseUs";
import ResourceDetailTwo from "./Component/ResourceDetailTwo/ResourceDetailTwo";
import ResourceDetailThree from "./Component/ResourceDetailThree/ResourceDetailThree";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";


function App() {
  return (
    <>
      <Navbar />

      <div className="content-wrapper">
        <Cursor/>
        <Routes>
          <Route path="/about" element={<About />} />6
          <Route path="/faqs" element={<Faq />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resourcedetails" element={<ResouceDetails/>}/>
          <Route path="/resourcedetailtwo" element={<ResourceDetailTwo/>}/>
          <Route path="/resourcedetailthree" element={<ResourceDetailThree/>}/>
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/features" element={<Features/>}/>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home/>} />
          <Route path="/ChooseUs" element={<ChooseUs />} />
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/products" element={<Products/>}/>


        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
