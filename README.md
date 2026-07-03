# GitHub Profile Analyzer API

## Overview
A REST API built using Node.js, Express.js, MySQL, and the GitHub Public API.

## Features
- Analyze GitHub user profiles
- Store profile data in MySQL
- Fetch all analyzed profiles
- Fetch a single profile by username

## Technologies Used
- Node.js
- Express.js
- MySQL
- Axios
- GitHub API

## Installation

```bash
npm install
```

Create a `.env` file:

```env
DB_HOST=your_host
DB_PORT=your_port
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database

PORT=3000
GITHUB_API_URL=https://api.github.com/users
```

Run the project:

```bash
npm start
```

## API Endpoints

### Analyze GitHub Profile

```
GET /