const axios = require("axios");

const getGithubProfile = async (username) => {
    try {
        const response = await axios.get(
            `${process.env.GITHUB_API_URL}/${username}`
        );

        return response.data;
    } catch (error) {
        throw new Error("GitHub User Not Found");
    }
};

module.exports = {
    getGithubProfile
};