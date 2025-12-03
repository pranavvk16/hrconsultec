import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-wrapper">

          <div className="contact-info">
            <h2 id="contact-heading">Let's build your thriving team.</h2>

            <div className="contact-detail">
              <Mail aria-hidden="true" />
              <div>
                <h4>Email</h4>
                <a href="mailto:crm@hrconsultec.com" aria-label="Email us at crm@hrconsultec.com">crm@hrconsultec.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <Globe aria-hidden="true" />
              <div>
                <h4>Web</h4>
                <a href="#" aria-label="Visit our website at www.hrconsultec.com">www.hrconsultec.com</a>
              </div>
            </div>

            <div className="contact-detail" style={{ alignItems: 'flex-start' }}>
              <MapPin style={{ marginTop: '0.2rem' }} aria-hidden="true" />
              <div>
                <h4>Office</h4>
                <address style={{ fontWeight: 400, maxWidth: '200px', fontStyle: 'normal' }}>
                  29/848, ABC complex,<br />
                  Pottammal-Palazhi Road<br />
                  Kozhikode, PIN 673016
                </address>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form
              action="mailto:pranavvk16@gmail.com"
              method="post"
              encType="text/plain"
              aria-label="Contact form"
            >
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Work Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@company.com"
                  className="form-input"
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="How can we help?"
                  className="form-input"
                  required
                  aria-required="true"
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