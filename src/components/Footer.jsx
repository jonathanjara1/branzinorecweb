import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <a
        href="https://open.spotify.com/user/jonathanjaramillo45-us"
        target="_blank"
        rel="noopener noreferrer"
        className="spotify-link"
      >
        <img src="/spotify_icon.png" alt="Spotify" className="spotify-logo" />
      </a>
    </footer>
  );
}
