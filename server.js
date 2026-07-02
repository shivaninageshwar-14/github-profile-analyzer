require("dotenv").config();

const express = require("express");
const app = express();

const db = require("./config/database");
const githubRoutes = require("./routes/githubRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("GitHub Profile Analyzer API Running...");
});

app.use("/api/github", githubRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});