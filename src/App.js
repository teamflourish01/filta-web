import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
