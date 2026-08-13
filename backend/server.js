const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);

// Serve Frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Frontend homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});