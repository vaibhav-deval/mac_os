import MacWindow from "./MacWindow";
import "./Spotify.scss";
const Spotify = () => {
  return (
    <MacWindow>
      <div className="spotify-Window">
        <iframe
          data-testid="embed-iframe"
          style={{borderRadius:'12px'}}
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMWDif5SCBJq?utm_source=generator"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
