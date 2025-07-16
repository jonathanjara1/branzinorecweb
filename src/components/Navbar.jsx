import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/branzinorecords3.svg" alt="Branzino Records" />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
