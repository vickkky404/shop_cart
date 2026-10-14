import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../cart-overlay/CartIcon.jsx";
import SuccessMessage from "../SuccessMessage.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import CurrencyIcon from "../currency-overlay/CurrencyIcon.jsx";
import "./header.css";
import inactiveHamburger from "../../assets/images/inactive-hamburger.png";
import activeHamburger from "../../assets/images/active-hamburger.png";

const Navigation = ({
  allCategories,
  changeCategory,
  activeCategory,
  selectedCurrency,
  allCurrencies,
  changeCurrency,
  amountOfItems,
  totalPayment,
  productsQuantity,
  handleRemoveProduct,
  handleAddProduct,
  cartItems,
  clearCart,
}) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const closeMenu = () => setActiveMenu(false);

  return (
    <header className="site-header">
      <div className="header-top-bar">
        <p>🎉 Welcome to Shopping Time — Free delivery on orders over $50! ✨</p>
      </div>
      <div className="header-container">
        <NavLink
          to="/"
          onClick={() => {
            changeCategory("");
            closeMenu();
          }}
          className="header-brand"
        >
          <span className="brand-logo-icon">🛍️</span>
          <div className="brand-names">
            <h1 className="brand-title">Shopping Time</h1>
            <span className="brand-badge">Student Boutique</span>
          </div>
        </NavLink>

        <nav className={`header-nav ${activeMenu ? "active-menu" : ""}`}>
          <CategoryMenu
            allCategories={allCategories}
            changeCategory={changeCategory}
            activeCategory={activeCategory}
            closeMenu={closeMenu}
          />
        </nav>

        <section className="icons-section">
          <CurrencyIcon
            selectedCurrency={selectedCurrency}
            allCurrencies={allCurrencies}
            changeCurrency={changeCurrency}
          />

          <CartIcon
            handleRemoveProduct={handleRemoveProduct}
            handleAddProduct={handleAddProduct}
            productsQuantity={productsQuantity}
            amountOfItems={amountOfItems}
            totalPayment={totalPayment}
            cartItems={cartItems}
            selectedCurrency={selectedCurrency}
            activeMenu={activeMenu}
            clearCart={clearCart}
            setActiveMenu={setActiveMenu}
            toggleMenu={toggleMenu}
          />

          <img
            className="hamburger"
            width={36}
            height={36}
            src={activeMenu ? activeHamburger : inactiveHamburger}
            alt="toggle menu"
            onClick={toggleMenu}
          />
        </section>
      </div>
      <SuccessMessage />
    </header>
  );
};

export default Navigation;
