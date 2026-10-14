import React from "react";
import { Link } from "react-router-dom";
import { ResetLocation } from "../../helpers/ResetLocation";
import "./footer.css";

const Footer = ({ changeCategory }) => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col footer-brand-col">
          <div className="footer-logo">
            <span className="footer-icon">🛍️</span>
            <h3>Shopping Time</h3>
          </div>
          <p className="footer-tagline">
            Your friendly online fashion boutique. Explore over 150+ stylish
            dresses, blouses, jeans, and shoes designed for everyday comfort.
          </p>
          <div className="junior-badge">
            <span>✨ Junior Web Developer Portfolio Project</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/" onClick={() => { changeCategory(""); ResetLocation(); }}>
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/store/all" onClick={() => { changeCategory("all"); ResetLocation(); }}>
                All Collections
              </Link>
            </li>
            <li>
              <Link to="/store/dresses" onClick={() => { changeCategory("dresses"); ResetLocation(); }}>
                Dresses
              </Link>
            </li>
            <li>
              <Link to="/store/blouses" onClick={() => { changeCategory("blouses"); ResetLocation(); }}>
                Blouses & Tops
              </Link>
            </li>
            <li>
              <Link to="/store/jeans" onClick={() => { changeCategory("jeans"); ResetLocation(); }}>
                Jeans & Denim
              </Link>
            </li>
            <li>
              <Link to="/store/shoes" onClick={() => { changeCategory("shoes"); ResetLocation(); }}>
                Shoes & Footwear
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={ResetLocation}>
                My Shopping Cart
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><span>🚚 Free Shipping on orders $50+</span></li>
            <li><span>🔄 30-Day Money-Back Guarantee</span></li>
            <li><span>💳 Multiple Currency Support</span></li>
            <li><span>🔒 256-Bit SSL Encrypted Checkout</span></li>
            <li><span>📧 Support: support@shoppingtime.com</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Tech Stack</h4>
          <div className="tech-pills">
            <span className="tech-pill">React 19</span>
            <span className="tech-pill">Vite</span>
            <span className="tech-pill">React Router 7</span>
            <span className="tech-pill">Vanilla CSS</span>
            <span className="tech-pill">UUID</span>
            <span className="tech-pill">Firestore</span>
          </div>
          <p className="tech-note">
            Crafted with clean code, responsive layouts, and interactive state management.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Shopping Time. All rights reserved. Created with 💙 by a Junior Developer.</p>
          <div className="footer-bottom-links">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
