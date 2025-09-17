<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router for navigation
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 54a17b0016ff063c3e9e3a9b5557134554c61ebf
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
<<<<<<< HEAD
import './App.css'; // Importing the CSS styles for the app
=======
import './App.css';
>>>>>>> 54a17b0016ff063c3e9e3a9b5557134554c61ebf

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App; // Exporting the App component to be used in other parts of the app
=======
export default App;
>>>>>>> 54a17b0016ff063c3e9e3a9b5557134554c61ebf

