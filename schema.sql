CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    github_id BIGINT NOT NULL,
    name VARCHAR(255),
    bio TEXT,
    company VARCHAR(255),
    location VARCHAR(255),
    public_repos INT,
    followers INT,
    following INT,
    public_gists INT,
    avatar_url TEXT,
    profile_url TEXT,
    account_created DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);