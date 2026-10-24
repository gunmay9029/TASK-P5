
import bannerImage from "../assets/banner.jpg";

function Hero() {
  return (
    <>
      <header className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">PORTFOLIO • 2026</p>

          <h1>
            Gunmay
            <br />
            <span>Sehgal</span>
          </h1>

          <p className="hero-subtitle">
            AI/ML Student • Developer • Problem Solver
          </p>

          <a className="hero-button" href="#about">
            Explore My Work ↓
          </a>
        </div>

        <div className="hero-orb" aria-hidden="true" />
      </header>

      <div className="banner-image-wrap">
        <img src={bannerImage} alt="Portfolio banner" />
        <div className="banner-overlay">
          <p>Ideas become experiences.</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
