import React from 'react';

const Differentiators: React.FC = () => {
  return (
    <section className="diff-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2>
            The <span className="text-primary">Consultec</span> Difference
          </h2>
        </div>

        <div className="diff-grid">
          {/* Column 1 */}
          <div className="diff-item">
            <h3>Core Principles</h3>
            <ul className="check-list">
              <li>End-to-End HR Partner</li>
              <li>Tailor-Made for SMEs</li>
              <li>Long-Term Partnership</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="diff-item">
            <h3>Technology</h3>
            <ul className="check-list">
              <li><strong>Employee Nest Platform</strong></li>
              <li>Real Business Insight</li>
              <li>Result-Driven Focus</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="diff-item">
            <h3>Reliability</h3>
            <ul className="check-list">
              <li>Transparent Processes</li>
              <li>Complete Confidentiality</li>
              <li>Stress-free Compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;