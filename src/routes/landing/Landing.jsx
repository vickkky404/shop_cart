import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroCover from "../../assets/images/landing-images/hero-cover.webp";
import gridOne from "../../assets/images/landing-images/gridOne.webp";
import gridTwo from "../../assets/images/landing-images/gridTwo.webp";
import gridThree from "../../assets/images/landing-images/gridThree.webp";
import gridFour from "../../assets/images/landing-images/gridFour.webp";
import gridFive from "../../assets/images/landing-images/gridFive.webp";
import "./landing.css";
import { ResetLocation } from "../../helpers/ResetLocation";

const Landing = ({ changeCategory }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    document.title = "Shopping Time | Trendy Fashion & Apparel";
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <main className="landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <span className="hero-pill-badge">✨ NEW SEASON COLLECTION 2026</span>
            <h1 className="hero-heading">
              Trendy Fashion at <span>Student Prices!</span>
            </h1>
            <p className="hero-description">
              Welcome to <strong>Shopping Time</strong>! Discover over 150+ hand-picked women's
              clothing styles, stylish denim jeans, elegant blouses, and trendy shoes.
              High quality, everyday comfort, and fast delivery.
            </p>
            <div className="hero-action-buttons">
              <Link
                to="/store/all"
                className="hero-btn-primary"
                onClick={() => {
                  changeCategory("all");
                  ResetLocation();
                }}
              >
                Shop All Collections 🛍️
              </Link>
              <a href="#featured-categories" className="hero-btn-secondary">
                Browse Categories ↓
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <strong>150+</strong>
                <span>Trendy Products</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <strong>6 Currencies</strong>
                <span>Worldwide Shop</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <strong>4.9 ★</strong>
                <span>Customer Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={HeroCover} alt="Shopping Time Fashion Collection" className="hero-banner-img" />
            <div className="hero-floating-card">
              <span className="floating-card-icon">🔥</span>
              <div>
                <p className="floating-card-title">Season Sale Active</p>
                <p className="floating-card-subtitle">Up to 30% off selected styles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Perks Bar */}
      <section className="perks-section">
        <div className="perks-container">
          <div className="perk-card">
            <span className="perk-icon">🚚</span>
            <div className="perk-info">
              <h4>Free Shipping</h4>
              <p>On all orders over $50</p>
            </div>
          </div>
          <div className="perk-card">
            <span className="perk-icon">🔄</span>
            <div className="perk-info">
              <h4>Easy 30-Day Returns</h4>
              <p>Hassle-free exchange policy</p>
            </div>
          </div>
          <div className="perk-card">
            <span className="perk-icon">💳</span>
            <div className="perk-info">
              <h4>100% Secure Checkout</h4>
              <p>Supports USD, EUR, GBP & more</p>
            </div>
          </div>
          <div className="perk-card">
            <span className="perk-icon">⭐</span>
            <div className="perk-info">
              <h4>Top Quality Guaranteed</h4>
              <p>Hand-curated fabrics & fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="categories-showcase" id="featured-categories">
        <div className="section-header">
          <span className="section-tag">POPULAR COLLECTIONS</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Find your favorite styles across our organized apparel collections
          </p>
        </div>

        <div className="category-cards-grid">
          {/* Card 1: Blouses */}
          <div className="category-card">
            <div
              className="category-card-img"
              style={{ backgroundImage: `url(${gridOne})` }}
            >
              <span className="category-count-badge">Top Picks</span>
            </div>
            <div className="category-card-body">
              <h3 className="category-card-title">👚 Blouses & Tops</h3>
              <p className="category-card-desc">
                From chic casual tees to elegant office shirts and puff tops.
              </p>
              <Link
                to="/store/blouses"
                className="category-card-btn"
                onClick={() => {
                  changeCategory("blouses");
                  ResetLocation();
                }}
              >
                Shop Blouses →
              </Link>
            </div>
          </div>

          {/* Card 2: Jeans */}
          <div className="category-card">
            <div
              className="category-card-img"
              style={{ backgroundImage: `url(${gridTwo})` }}
            >
              <span className="category-count-badge">Trending</span>
            </div>
            <div className="category-card-body">
              <h3 className="category-card-title">👖 Jeans & Denim</h3>
              <p className="category-card-desc">
                High-waist, skinny, bootcut and relaxed fits for everyday comfort.
              </p>
              <Link
                to="/store/jeans"
                className="category-card-btn"
                onClick={() => {
                  changeCategory("jeans");
                  ResetLocation();
                }}
              >
                Shop Jeans →
              </Link>
            </div>
          </div>

          {/* Card 3: Shoes */}
          <div className="category-card">
            <div
              className="category-card-img"
              style={{ backgroundImage: `url(${gridThree})` }}
            >
              <span className="category-count-badge">Must-Haves</span>
            </div>
            <div className="category-card-body">
              <h3 className="category-card-title">👠 Shoes & Footwear</h3>
              <p className="category-card-desc">
                Stylish heels, versatile flats, boots, and everyday sneakers.
              </p>
              <Link
                to="/store/shoes"
                className="category-card-btn"
                onClick={() => {
                  changeCategory("shoes");
                  ResetLocation();
                }}
              >
                Shop Shoes →
              </Link>
            </div>
          </div>

          {/* Card 4: Dresses */}
          <div className="category-card">
            <div
              className="category-card-img"
              style={{ backgroundImage: `url(${gridFour})` }}
            >
              <span className="category-count-badge">Bestseller</span>
            </div>
            <div className="category-card-body">
              <h3 className="category-card-title">👗 Dresses</h3>
              <p className="category-card-desc">
                Puff sleeves, floral prints, bodycon silhouettes, and party midi cuts.
              </p>
              <Link
                to="/store/dresses"
                className="category-card-btn"
                onClick={() => {
                  changeCategory("dresses");
                  ResetLocation();
                }}
              >
                Shop Dresses →
              </Link>
            </div>
          </div>

          {/* Card 5: All Products / Store */}
          <div className="category-card category-card-highlight">
            <div
              className="category-card-img"
              style={{ backgroundImage: `url(${gridFive})` }}
            >
              <span className="category-count-badge highlight">150+ Items</span>
            </div>
            <div className="category-card-body">
              <h3 className="category-card-title">✨ Full Catalog</h3>
              <p className="category-card-desc">
                Browse our entire catalog with interactive currency conversion and filtering.
              </p>
              <Link
                to="/store/all"
                className="category-card-btn highlight-btn"
                onClick={() => {
                  changeCategory("all");
                  ResetLocation();
                }}
              >
                Explore All Products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Promo Box */}
      <section className="newsletter-section">
        <div className="newsletter-card">
          <div className="newsletter-info">
            <span className="newsletter-tag">SPECIAL PROMOTION</span>
            <h3>Get 15% Off Your Next Order! 🎁</h3>
            <p>
              Sign up for our newsletter to get student discounts, new product alerts,
              and weekly outfit inspiration.
            </p>
          </div>
          {subscribed ? (
            <div className="newsletter-success">
              <span>🎉 Thanks for subscribing! Check your inbox for your 15% discount code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address..."
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Landing;
