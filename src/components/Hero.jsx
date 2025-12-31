import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">Affordable Mechanic with Hoist</h2>
          <p className="hero-subtitle">Mississauga (Near Pearson Airport)</p>
          <p className="hero-description">
            I'm a local service technician with over 10 years of experience. I take on additional 
            services for clients outside of my day job. I work on a hoist offering high-quality work 
            at very affordable prices!
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="checkmark">✅</span>
              <span>All makes and models</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✅</span>
              <span>Clear and affordable pricing</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✅</span>
              <span>High-quality parts</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✅</span>
              <span>Fast turnaround - same-day appointments when available</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

