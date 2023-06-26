import './App.css';
import TQ from  "./screen/ThankYou";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screen/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
    
  return (
    <div>
      <Navbar />
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tq" element={<TQ />} />
      </Routes>
    </Router>
      <Footer />
    </div>
  );
}

export default App;