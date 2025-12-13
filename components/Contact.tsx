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
                <a href="mailto:crmhrctec@gmail.com" aria-label="Email us at crmhrctec@gmail.com">crmhrctec@gmail.com</a>
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
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                const subject = `Contact Request from ${name}`;
                const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;

                window.location.href = `mailto:crmhrctec@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
              }}
              aria-label="Contact form"
            >
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
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
                  name="email"
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
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
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