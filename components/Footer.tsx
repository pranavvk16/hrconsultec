import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '1rem',
          paddingBottom: '1rem'
        }}>
          {/* Social Media Links */}
          <div
            className="social-links"
            style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center'
            }}
            role="navigation"
            aria-label="Social media links"
          >
            <a
              href="https://www.instagram.com/hrconsultec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              style={{
                minHeight: '44px',
                minWidth: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'var(--transition)'
              }}
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/hrconsultec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
              style={{
                minHeight: '44px',
                minWidth: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'var(--transition)'
              }}
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.facebook.com/hrconsultec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              style={{
                minHeight: '44px',
                minWidth: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'var(--transition)'
              }}
            >
              <Facebook size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p style={{ margin: 0 }}>
            &copy; {currentYear} HR Consultec. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;