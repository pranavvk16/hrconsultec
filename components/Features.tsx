import React from 'react';
import { Layers, Activity, TrendingUp, Award, Cpu } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  isAccent?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, description, image, icon, isAccent }) => {
  return (
    <div className="flip-card fade-in-up">
      <div className="card-inner">
        
        {/* Front Face */}
        <div 
          className="card-front"
          style={{
             backgroundImage: isAccent 
              ? `linear-gradient(rgba(239,246,255,0.9), rgba(239,246,255,0.9)), url('${image}')`
              : `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('${image}')`,
             backgroundSize: 'cover'
          }}
        >
          <div className="icon-box" data-tooltip={title}>
            {icon}
          </div>
          <h4 className={isAccent ? 'text-primary' : ''}>{title}</h4>
          <p className="text-small">{subtitle}</p>
        </div>

        {/* Back Face */}
        <div 
          className="card-back"
          style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('${image}')`,
             backgroundSize: 'cover'
          }}
        >
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="text-center">
          <h2 style={{ fontSize: '1.5rem' }}>Why Companies Choose Us</h2>
        </div>
        
        <div className="features-grid">
          <FeatureCard 
            title="Integrated HR"
            subtitle="SME Solutions"
            description="Seamlessly blend HR processes with your business goals for maximum efficiency."
            image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=60"
            icon={<Layers />}
          />
          <FeatureCard 
            title="Productivity"
            subtitle="Higher Engagement"
            description="Boost employee output with tools designed to reduce friction and enhance focus."
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
            icon={<Activity />}
          />
          <FeatureCard 
            title="Growth"
            subtitle="Sustainable Profit"
            description="Scale your workforce confidently with systems that grow with you."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60"
            icon={<TrendingUp />}
          />
          <FeatureCard 
            title="Expertise"
            subtitle="Proven Talent"
            description="Leverage decades of HR experience distilled into actionable strategies."
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60"
            icon={<Award />}
          />
          <FeatureCard 
            title="Employee Nest"
            subtitle="In-House App"
            description="Experience the future of HR management with our AI-driven platform."
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60"
            icon={<Cpu />}
            isAccent={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;