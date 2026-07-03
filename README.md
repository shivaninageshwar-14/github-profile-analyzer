# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a RESTful backend application built using **Node.js**, **Express.js**, **MySQL**, and the **GitHub Public API**. The application fetches public GitHub user profile information, analyzes useful profile details, stores the data in a MySQL database, and provides REST APIs to retrieve the stored profile data.

---

## Features

- Fetch GitHub user profile using username
- Analyze GitHub profile information
- Store profile data in MySQL database
- Retrieve all analyzed GitHub profiles
- Retrieve a single analyzed profile by username
- RESTful API architecture
- Environment variable support using dotenv
- Deployed on Railway

---

## Tech Stack

- Node.js
- Express.js
- MySQL (Aiven Cloud)
- Axios
- GitHub REST API
- Railway
- dotenv

---

## Project Structure

```
github-profile-analyzer/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── githubController.js
│
├── models/
│   └── profileModel.js
│
├── routes/
│   └── githubRoutes.js
│
├── services/
│   └── githubService.js
│
├── .env
├── package.json
├── server.js
├── README.md
└── schema.sql
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/shivaninageshwar-14/github-profile-analyzer.git
```

### Move into the Project Directory

```bash
cd github-profile-analyzer
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root and add the following:

```env
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

PORT=3000

GITHUB_API_URL=https://api.github.com/users
```

---

## Running the Application

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

The application runs on:

```
http://localhost:3000
```

---

## API Endpoints

### 1. Home

```
GET /
```

Response

```
GitHub Profile Analyzer API Running...
```

---

### 2. Analyze GitHub Profile

```
GET /api/github/analyze/:username
```

Example

```
GET /api/github/analyze/octocat
```

Description

- Fetches GitHub profile information
- Stores profile details into MySQL
- Returns analyzed profile data

---

### 3. Fetch All Profiles

```
GET /api/github
```

Description

Returns all stored GitHub profiles.

---

### 4. Fetch Single Profile

```
GET /api/github/:username
```

Example

```
GET /api/github/octocat
```

Description

Returns the stored profile information for the specified GitHub username.

---

## Testing the API

The API can be tested using:

- Google Chrome
- Postman
- Thunder Client (VS Code Extension)

### Home

Open in browser:

```
https://github-profile-analyzer-production-25e7.up.railway.app/
```

Expected Response

```
GitHub Profile Analyzer API Running...
```

### Analyze Profile

```
https://github-profile-analyzer-production-25e7.up.railway.app/api/github/analyze/octocat
```

### Fetch All Profiles

```
https://github-profile-analyzer-production-25e7.up.railway.app/api/github
```

### Fetch Single Profile

```
https://github-profile-analyzer-production-25e7.up.railway.app/api/github/octocat
```

---

## Database Schema

The application stores the following information:

- Username
- GitHub ID
- Name
- Bio
- Company
- Location
- Public Repositories
- Followers
- Following
- Public Gists
- Avatar URL
- GitHub Profile URL
- Account Creation Date

The SQL table structure is available in the `schema.sql` file.

---

## Live Deployment

Railway Deployment

```
https://github-profile-analyzer-production-25e7.up.railway.app
```

---

## GitHub Repository

```
https://github.com/shivaninageshwar-14/github-profile-analyzer
```

---

## Sample Response

```json
{
  "username": "octocat",
  "github_id": 583231,
  "public_repos": 8,
  "followers": 18000,
  "following": 9,
  "public_gists": 8,
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "profile_url": "https://github.com/octocat"
}
```

---

## Future Improvements

- GitHub Personal Access Token Authentication
- Repository Analytics
- Programming Language Statistics
- Search and Filter Functionality
- Pagination Support
- Swagger API Documentation
- Unit Testing using Jest

---

## Author

**Shivani Nageshwar**

---

## License

This  Backend Assessment using Node.js, Express.js, MySQL, and the GitHub Public API.