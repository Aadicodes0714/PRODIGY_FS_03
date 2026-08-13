# PRODIGY_FS_03
# 🛒 LocalMart - Local Store E-Commerce Platform

LocalMart is a full-stack e-commerce web application developed as part of my **Full Stack Web Development Internship at Prodigy InfoTech – Task 03**.

The platform allows customers to browse products from a local store, search and filter products, sort products by price, and manage their shopping cart through a simple and responsive interface.

---

## 🌐 Live Demo

🚀 **[Visit LocalMart Live →](https://prodigy-fs-03-az76.onrender.com)**

## 📂 GitHub Repository

🔗 **[View Source Code →](https://github.com/Aadicodes0714/PRODIGY_FS_03)**

---
## 📌 Project Overview

The goal of this project was to build an e-commerce platform for a local store where customers can:

- Browse available products
- View product information
- Search for products
- Filter products by category
- Sort products according to price
- Add products to a shopping cart
- Increase or decrease product quantity
- Remove products from the cart
- View subtotal and total amount
- Clear the entire cart

The application uses a **Node.js + Express.js backend**, **MongoDB database**, and a **HTML/CSS/JavaScript frontend**.

---

## ✨ Features

### 🛍️ Product Listing

Products are dynamically retrieved from MongoDB through a REST API.

Each product contains:

- Product name
- Description
- Price
- Product image
- Category
- Stock quantity

---

### 🔍 Product Search

Users can search for products using the search bar.

The search functionality can match:

- Product name
- Product description
- Product category

---

### 🏷️ Category Filtering

Products can be filtered according to their category.

Available categories include:

- Electronics
- Fashion
- Home
- Grocery

---

### ↕️ Product Sorting

Users can sort products based on price:

- Price: Low → High
- Price: High → Low

---

### 🛒 Shopping Cart

The application includes a functional shopping cart with:

- Add to Cart
- Remove from Cart
- Increase quantity
- Decrease quantity
- Cart item counter
- Subtotal calculation
- Total amount calculation
- Clear Cart
- Persistent cart data using LocalStorage

---

### 💾 LocalStorage

Cart information is stored in the browser's LocalStorage.

This allows the cart to remain available even when the user refreshes the page.

---

### 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Git
- GitHub
- Nodemon
- VS Code

---

## 📂 Project Structure
```
PRODIGY_FS_03/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   │
│   ├── index.html
│   ├── cart.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── app.js
│       └── cart.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
## 🏗️ Project Architecture

The project follows a simple full-stack architecture:

```text
                    USER
                     │
                     ▼
              ┌─────────────┐
              │  FRONTEND   │
              │ HTML/CSS/JS │
              └──────┬──────┘
                     │
                     │ HTTP Request
                     ▼
              ┌─────────────┐
              │  EXPRESS.JS │
              │   SERVER    │
              └──────┬──────┘
                     │
                     ▼
              ┌─────────────┐
              │   MONGOOSE  │
              └──────┬──────┘
                     │
                     ▼
              ┌─────────────┐
              │   MONGODB   │
              │   DATABASE  │
              └─────────────┘
