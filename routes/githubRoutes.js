const express = require("express");
const router = express.Router();

const {
    analyzeProfile,
    fetchAllProfiles,
    fetchSingleProfile
} = require("../controllers/githubController");

// Analyze GitHub profile and save to DB
router.get("/analyze/:username", analyzeProfile);

// Get all saved profiles
router.get("/", fetchAllProfiles);

// Get single saved profile
router.get("/:username", fetchSingleProfile);

module.exports = router;