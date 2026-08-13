const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [
    {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with clear sound and comfortable design.",
        price: 1499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        category: "Electronics",
        stock: 20
    },
    {
        name: "Smart Watch",
        description: "Smart watch with fitness tracking, notifications and modern design.",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Electronics",
        stock: 15
    },
    {
        name: "Running Shoes",
        description: "Lightweight and comfortable running shoes for everyday workouts.",
        price: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        category: "Fashion",
        stock: 25
    },
    {
        name: "Classic Backpack",
        description: "Spacious everyday backpack suitable for college, office and travel.",
        price: 999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        category: "Fashion",
        stock: 30
    },
    {
        name: "Coffee Mug",
        description: "Premium ceramic coffee mug suitable for home and office.",
        price: 299,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
        category: "Home",
        stock: 40
    },
    {
        name: "Desk Lamp",
        description: "Modern LED desk lamp with adjustable brightness for study and work.",
        price: 799,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        category: "Home",
        stock: 18
    },
    {
        name: "Organic Green Tea",
        description: "Refreshing organic green tea made from carefully selected tea leaves.",
        price: 399,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
        category: "Grocery",
        stock: 50
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with powerful audio and compact design.",
        price: 1299,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        category: "Electronics",
        stock: 22
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected ✅");

        await Product.deleteMany();

        await Product.insertMany(products);

        console.log("Products inserted successfully 🎉");

        await mongoose.connection.close();

        console.log("Database connection closed.");

    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
};

seedDatabase();