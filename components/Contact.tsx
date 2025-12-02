import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          
          {/* Info Side */}
          <div className="contact-info">
            <h2>Let's build your thriving team.</h2>
            
            <div className="contact-detail">
              <Mail />
              <div>
                <h4>Email</h4>
                <a href="mailto:crm@hrconsultec.com">crm@hrconsultec.com</a>
              </div>
            </div>
            
            <div className="contact-detail">
              <Globe />
              <div>
                 <h4>Web</h4>
                <a href="#">www.hrconsultec.com</a>
              </div>
            </div>

            <div className="contact-detail" style={{ alignItems: 'flex-start' }}>
              <MapPin style={{ marginTop: '0.2rem' }} />
              <div>
                 <h4>Office</h4>
                <p style={{ fontWeight: 400, maxWidth: '200px' }}>
                  29/848, ABC complex,<br />
                  Pottammal-Palazhi Road<br />
                  Kozhikode, PIN 673016
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-wrapper">
            <form 
              action="mailto:pranavvk16@gmail.com" 
              method="post" 
              encType="text/plain"
            >
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Work Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help?" 
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;