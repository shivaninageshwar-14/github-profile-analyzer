const db = require("../config/database");

// Save GitHub Profile
const saveProfile = (profile, callback) => {

    const sql = `
    INSERT INTO github_profiles
    (
        username,
        github_id,
        name,
        bio,
        company,
        location,
        public_repos,
        followers,
        following,
        public_gists,
        avatar_url,
        profile_url,
        account_created
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

    ON DUPLICATE KEY UPDATE
        github_id = VALUES(github_id),
        name = VALUES(name),
        bio = VALUES(bio),
        company = VALUES(company),
        location = VALUES(location),
        public_repos = VALUES(public_repos),
        followers = VALUES(followers),
        following = VALUES(following),
        public_gists = VALUES(public_gists),
        avatar_url = VALUES(avatar_url),
        profile_url = VALUES(profile_url),
        account_created = VALUES(account_created)
    `;

    const values = [
        profile.login,
        profile.id,
        profile.name,
        profile.bio,
        profile.company,
        profile.location,
        profile.public_repos,
        profile.followers,
        profile.following,
        profile.public_gists,
        profile.avatar_url,
        profile.html_url,
        new Date(profile.created_at)
    ];

    db.query(sql, values, callback);
};

// Get all profiles
const getAllProfiles = (callback) => {
    db.query("SELECT * FROM github_profiles", callback);
};

// Get one profile
const getProfileByUsername = (username, callback) => {
    db.query(
        "SELECT * FROM github_profiles WHERE username = ?",
        [username],
        callback
    );
};

module.exports = {
    saveProfile,
    getAllProfiles,
    getProfileByUsername
};