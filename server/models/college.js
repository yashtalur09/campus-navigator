const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nirfRank: { type: Number, required: true },
    place: { type: String, required: true },
    cutoff: { type: Number, required: true },
    placements: { type: String, required: true },
});

// Use 'college-list' as the collection name in MongoDB
module.exports = mongoose.model("College", CollegeSchema, "college-list");
