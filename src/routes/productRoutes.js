const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// CREATE - Them san pham
router.post("/", async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ - Lay tat ca san pham
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ - Lay san pham theo pid
router.get("/:pid", async (req, res) => {
    try {
        const product = await Product.findOne({ pid: req.params.pid });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE - Cap nhat san pham theo pid
router.put("/:pid", async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            { pid: req.params.pid },
            req.body,
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE - Xoa san pham theo pid
router.delete("/:pid", async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({
            pid: req.params.pid
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;