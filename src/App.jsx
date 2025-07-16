import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <h1>BRANZINO RECORDS</h1>
        <p>A Brooklyn producer and DJ pushing the boundaries of electronic music</p>
        <a
          href="https://soundcloud.com/jonathanja"
          target="_blank"
          rel="noopener noreferrer"
          className="soundcloud-btn"
        >
          LISTEN ON SOUNDCLOUD
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
