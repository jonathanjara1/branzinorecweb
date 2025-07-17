// import './styles/App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <main>
//         <h1>BRANZINO RECORDS</h1>
//         <p>A Brooklyn producer and DJ pushing the boundaries of electronic music</p>
//         <a
//           href="https://soundcloud.com/jonathanja"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="soundcloud-btn"
//         >
//           LISTEN ON SOUNDCLOUD
//         </a>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
