import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        
        {/* About Text */}
        <div className="about-text">
          <span className="badge" style={{ background: 'white', border: '1px solid #E5E7EB' }}>
            About Us
          </span>
          <h2>Strategic Value for Your Organization</h2>
          <p>
            We are a team of seasoned HR specialists going beyond traditional recruitment. We design, structure, and implement tailored HR systems that enable smooth operations, allowing you to focus on your core business.
          </p>
          <p>
            A key differentiator is <strong>Employee Nest</strong>, our proprietary in-house HR software, built to streamline workforce management and support the full employee lifecycle.
          </p>
        </div>

        {/* Vision/Mission Box */}
        <div className="vision-box">
          <div>
            <h3>Our Vision</h3>
            <p>
              To empower small and medium enterprises with globally benchmarked HR solutions that develop talent, inspire engagement, and enable sustainable profitability.
            </p>
          </div>
          
          <div className="vision-divider"></div>
          
          <div>
            <h3>Our Mission</h3>
            <p>
              Deliver high-quality HR services that are timely, cost-effective, and rooted in ethical practice and complete confidentiality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;