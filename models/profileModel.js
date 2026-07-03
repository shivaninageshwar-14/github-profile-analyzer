const axios = require("axios");

const getGithubProfile = async (username) => {
    try {
        const url = `${process.env.GITHUB_API_URL}/${username}`;
        console.log("GitHub URL:", url);

        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error("GitHub API Error:", error.response?.status);
        console.error(error.response?.data || error.message);
        throw error;
    }
};

module.exports = {
    getGithubProfile
};