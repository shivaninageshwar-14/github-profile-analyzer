const { getGithubProfile } = require("../services/githubService");
const {
    saveProfile,
    getAllProfiles,
    getProfileByUsername
} = require("../models/profileModel");

// Analyze GitHub Profile and Save
const analyzeProfile = async (req, res) => {
    try {
        const username = req.params.username;

        const profile = await getGithubProfile(username);

        saveProfile(profile, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Database Error",
                    error: err.message
                });
            }

            res.status(200).json({
                message: "Profile Analyzed and Saved Successfully",
                data: profile
            });
        });

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

// Get All Profiles
const fetchAllProfiles = (req, res) => {
    getAllProfiles((err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(results);
    });
};

// Get Single Profile
const fetchSingleProfile = (req, res) => {
    const username = req.params.username;

    getProfileByUsername(username, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Profile Not Found"
            });
        }

        res.status(200).json(results[0]);
    });
};

module.exports = {
    analyzeProfile,
    fetchAllProfiles,
    fetchSingleProfile
};