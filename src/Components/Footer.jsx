import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        
        {/* Column 1: Logo & About */}
        <div className="footer-column about">
          <Link to="/" className="footer-logo">
            Eventra<span className="logo-accent">Weddings</span>
          </Link>
          <p className="footer-tagline">
            Your trusted partner for event services in Bihar.
          </p>
          <div className="social-links">
            <a href="#fb">📘</a>
            <a href="#insta">📸</a>
            <a href="#youtube">▶️</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column links">
          <h4>Quick Links</h4>
          <Link to="/vendors">Find Vendors</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>
          <Link to="/vendor-register">Register as Vendor</Link>
        </div>

        {/* Column 3: Platform Info */}
        <div className="footer-column info">
          <h4>Legal & Support</h4>
          <Link to="/profile">My Profile</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column contact">
          <h4>Contact Us</h4>
          <p>Patna, Bihar 800001</p>
          <p>Email: support@ew.com</p>
          <p>Phone: +91 99999 99999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BiharWeddings. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;