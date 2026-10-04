require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Trang kiem tra API
app.get("/", (req, res) => {
    res.json({ message: "Product API is running" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Product API
app.use("/api/products", productRoutes);

// Ket noi MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Product API running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    });