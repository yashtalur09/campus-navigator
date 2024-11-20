const express = require("express");
const router = express.Router();
const College = require("../models/college");

// GET /api/colleges
router.get("/", async (req, res) => {
    const rank = parseInt(req.query.rank, 10);

    if (isNaN(rank)) {
        return res.status(400).json({ message: "Invalid rank provided" });
    }

    try {
        const colleges = await College.find({ cutoff: { $gte: rank } }).sort({ cutoff: 1 });
        res.json(colleges);
    } catch (error) {
        console.error("Error fetching colleges:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
