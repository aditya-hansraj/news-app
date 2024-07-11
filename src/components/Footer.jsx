// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start text-light">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">DailyNews</h5>
            <p>&copy; {new Date().getFullYear()} DailyNews. All rights reserved.</p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Credits</h5>
            <p>Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
