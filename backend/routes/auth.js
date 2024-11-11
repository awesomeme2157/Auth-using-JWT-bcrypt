const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/usermodel");

// Register route
router.post("/register", async (req, res) => {
    const { username, name, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            name,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "User created successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "There was an error creating the user!" });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "No such username exists!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password!" });
        }

        const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });

        res.json({ token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while logging in!" });
    }
});

module.exports = router;
