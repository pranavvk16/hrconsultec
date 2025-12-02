import React from 'react';
import { Users, Clock, FileText, ShieldCheck } from 'lucide-react';

interface ShowcaseCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ icon, title, features }) => {
  return (
    <div className="app-feature-card">
      <div className="icon-box">
        {icon}
      </div>
      <h3>{title}</h3>
      <ul>
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const EmployeeNest: React.FC = () => {
  return (
    <section id="employeenest" className="employee-nest">
      <div className="container">
        <div className="text-center fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge">
            AI Powered Technology
          </span>
          <h2>
            Meet <span className="text-primary">Employee Nest</span>
          </h2>
          <p>
            <strong>Note:</strong> Employee Nest is a specialized software tool we provide as part of our comprehensive HR consultancy services. It is designed to automate and streamline your employee operations, payroll, and compliance.
          </p>
        </div>

        <div className="app-showcase-grid">
          <ShowcaseCard 
            icon={<Users />}
            title="Employee Management"
            features={[
              "Onboarding & Profiles",
              "Document Uploads",
              "Department Structures",
              "Status Tracking"
            ]}
          />
           <ShowcaseCard 
            icon={<Clock />}
            title="Smart Attendance"
            features={[
              "Track Work Hours",
              "Leave Management",
              "Holiday Calendars",
              "Real-time Records"
            ]}
          />
           <ShowcaseCard 
            icon={<FileText />}
            title="Payroll Engine"
            features={[
              "Auto-Generate Payslips",
              "Salary Structures",
              "Tax (TDS) Calculation",
              "Bank Integration"
            ]}
          />
           <ShowcaseCard 
            icon={<ShieldCheck />}
            title="Statutory Compliance"
            features={[
              "PF & ESI Tracking",
              "Compliance Reports",
              "Deduction Management",
              "Audit Ready Data"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EmployeeNest;