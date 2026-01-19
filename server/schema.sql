CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(120) UNIQUE,
  image_url VARCHAR(500),
  description TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  slug VARCHAR(160) UNIQUE,
  price DECIMAL(10, 2) NOT NULL,
  compare_at DECIMAL(10, 2),
  tag VARCHAR(40),
  image_url VARCHAR(500),
  image_secondary_url VARCHAR(500),
  is_trending TINYINT(1) DEFAULT 0,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE promos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tag VARCHAR(40),
  title VARCHAR(140) NOT NULL,
  copy TEXT,
  image_url VARCHAR(500),
  sort_order INT DEFAULT 0
);

CREATE TABLE testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  quote TEXT NOT NULL,
  name VARCHAR(120),
  title VARCHAR(120),
  sort_order INT DEFAULT 0
);
