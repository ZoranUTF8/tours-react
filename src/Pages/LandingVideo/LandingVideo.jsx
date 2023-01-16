import "./landingVideo.css";
import videoBg from "../../assets/video/backgroundVideo.mp4";

const LandingVideo = () => {
  return (
      <div className="video-background-container">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>
            From city breaks to remote wilderness, let us show you the world in
            all its beauty.
          </h1>
        </div>
      </div>

  );
};

export default LandingVideo;
