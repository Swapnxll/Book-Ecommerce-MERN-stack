import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="text-center">All Rights Reserved &copy; Swappy</h1>
        <p className="text-center mt-3">
          <Link to="/about" className="footer-link">About</Link>
          <span className="separator">|</span>
          <Link to="/contact" className="footer-link">Contact</Link>
          <span className="separator">|</span>
          <Link to="/policy" className="footer-link">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
