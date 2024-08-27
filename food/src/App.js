import "./App.css";
import Home from "./component/Home";
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Testimonial from './component/Testimonial';
import Work from './component/Work';


function App() {
  return (
    <div className='App'>
     
     <Home />
     <About />
     <Contact /> 
     <Footer />
     <Navbar />
     <Testimonial />
     <Work />
    </div>
  )
}

export default App;
