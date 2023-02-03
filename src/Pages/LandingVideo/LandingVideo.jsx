import "./landingVideo.css";
import videoBg from "../../assets/video/backgroundVideo.webm";

const LandingVideo = () => {
  return (
      <div className="video-background-container">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className="content">
          <h1>
            Let us show you Japan in
            all its beauty.
          </h1>
        </div>
      </div>

  );
};

export default LandingVideo;
