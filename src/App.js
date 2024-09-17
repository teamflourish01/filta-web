import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import About from './Pages/About/About';
import Faq from './Pages/Faq/Faq';
import Banner from './Component/banner/Banner';
import Contact from './Component/Contactus/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {/* <About/> */}
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
