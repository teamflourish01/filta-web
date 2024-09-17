// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Component/Navbar/Navbar';
// import Footer from './Component/Footer/Footer';
// import About from './Pages/About/About';
// import Faq from './Pages/Faq/Faq';
// import Banner from './Component/banner/Banner';

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Banner/>
//     <div className="background-color">

//       {/* <About/> */}
//       <Faq/>

//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default App;
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Faq from "./Pages/Faq/Faq";
import Banner from "./Component/banner/Banner";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import { FaQ } from "react-icons/fa6";

function App() {
  return (
    <>
      <Navbar />

      <div className="content-wrapper">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faq />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
