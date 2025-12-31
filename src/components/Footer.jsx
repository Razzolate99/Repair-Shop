import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Affordable Mechanic</h3>
            <p>Professional automotive service with over 10 years of experience</p>
          </div>
          <div className="footer-section">
            <h4>Location</h4>
            <p>📍 Mississauga, near Pearson Airport</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Regular Maintenance</li>
              <li>Brake & Suspension</li>
              <li>Exhaust & Gaskets</li>
              <li>Diagnostics</li>
              <li>Engine/Transmission Swaps</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Affordable Mechanic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

