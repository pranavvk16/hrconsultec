import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="homepage" className="hero">
      <div className="container hero-layout">
        
        {/* Text Content */}
        <div className="hero-content">
          <span className="badge">
            Powered by Employee Nest
          </span>
          <h1>
            Empowering Business with <span className="text-primary">World-Class HR</span>
          </h1>
          <p>
            We partner with growing organizations to build strong, productive, and engaged teams through state-of-the-art talent management processes and our proprietary platform.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-img-wrapper">
          <img 
            src="/heroimage.png" 
            alt="Employee Nest Dashboard - Modern HR Management Platform" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;