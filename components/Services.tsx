import React from 'react';
import { BookOpen, DollarSign, Shield, BarChart2 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon-box">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Services</h2>
          <p>
            Integrated HR solutions powered by <strong>Employee Nest</strong> to ensure operational clarity and efficiency.
          </p>
        </div>

        <div className="services-grid">
          <ServiceCard 
            icon={<BookOpen />}
            title="HR Policy Making"
            description="Establishing professional policies based on industry standards for operational clarity."
          />
          <ServiceCard 
            icon={<DollarSign />}
            title="Payroll Management"
            description="End-to-end administration using Employee Nest for accuracy, timeliness, and compliance."
          />
          <ServiceCard 
            icon={<Shield />}
            title="Statutory Compliance"
            description="Navigating legislation, reducing risk, and managing PF/ESI filing via our platform."
          />
          <ServiceCard 
            icon={<BarChart2 />}
            title="Performance Mgmt"
            description="Structuring appraisals, bonuses, and reviews to drive excellence and accountability."
          />
        </div>

        <div className="service-list-container">
          <h3 className="text-center" style={{ marginBottom: '2rem' }}>Full Lifecycle Support</h3>
          <div className="service-list-grid check-list">
            <ul>
              {[
                "Recruitment & Onboarding",
                "Employee Exit Management",
                "KPI and KRA Setting",
                "Performance Appraisals"
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <ul>
              {[
                "Training & Development",
                "PF & ESI Registration",
                "Organogram Creation",
                "Job Description Development"
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <ul>
              {[
                "Compensation Structuring",
                "WPS Support",
                "Minimum Wages Advisory",
                "Antecedent Verification"
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;