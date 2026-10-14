# 🛍️ ShopCart - Modern E-Commerce React Application

A full-featured e-commerce fashion web application built with **React 19**, **Vite**, and **React Router 7**. The project includes a catalog of over 150+ women's clothing items and footwear, category filtering, attribute selection (size & color), interactive cart overlay, multi-currency conversion, and a multi-step validated checkout process.

![ShopCart Preview](./src/assets/images/project-preview.webp)

---

## ✨ Features & Functionality

### 1. 👗 Catalog & Category Filtering
- **Category Browsing**: Filter through **Dresses**, **Blouses**, **Jeans**, and **Shoes**, or browse the **All Products** collection.
- **Product Details**: View product images, descriptions, pricing, brand tags, and attribute options.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens with smooth transitions and hover states.

### 2. 🛒 Shopping Cart & Overlay
- **Quick Add to Cart**: Add items directly from the catalog with size and color attribute selection.
- **Cart Overlay Drawer**: Preview cart contents anytime without leaving your current page.
- **Quantity Adjustment**: Increment or decrement quantities (+ / -) or remove items entirely.
- **Tax & Total Calculations**: Real-time computation of subtotals and 21% taxes.

### 3. 💱 Multi-Currency Support
- Switch seamlessly between currencies with live converted amounts:
  - **USD** ($)
  - **EUR** (€)
  - **GBP** (£)
  - **AUD** (A$)
  - **JPY** (¥)
  - **RUB** (₽)

### 4. 📝 Multi-Step Checkout & Form Validation
- **Step 1: Personal Details**: Name, email, and phone validation.
- **Step 2: Shipping Address**: Country, city, postal code, and street address validation.
- **Step 3: Payment**: Card number, expiry date, and CVV checks.
- **Order Summary**: Confirmation screen with order number, receipt printing, and order breakdown.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite 6
- **Routing**: React Router DOM 7
- **Styling**: Vanilla CSS (Custom Design System with CSS variables)
- **Utilities**: UUID for order generation, React Simple Image Slider

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vickkky404/ShopCart.git
   cd ShopCart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
ShopCart/
├── public/                 # Static assets & favicons
├── src/
│   ├── assets/             # Images, icons, banners
│   ├── components/         # Reusable UI components
│   │   ├── attributes/     # Size & color attribute pickers
│   │   ├── cart-overlay/   # Slide-out cart drawer
│   │   ├── currency-overlay/# Currency switcher dropdown
│   │   ├── footer/         # Page footer
│   │   └── header/         # Sticky navigation header
│   ├── core-ui/            # Global styles, variables, typography
│   ├── data/               # Catalog dataset (150+ items & currencies)
│   ├── database/           # Firebase configuration
│   ├── helpers/            # Navigation and location utilities
│   ├── routes/             # App views (Landing, Catalog, Product, Cart, Checkout, Order)
│   ├── App.jsx             # Main router & global state
│   └── index.jsx           # App entry point
├── package.json
└── vite.config.js
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
"# ShoppCart" 
