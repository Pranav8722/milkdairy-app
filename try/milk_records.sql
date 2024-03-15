CREATE DATABASE IF NOT EXISTS milk_collection;

USE milk_collection;

CREATE TABLE IF NOT EXISTS milk_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    userid VARCHAR(20) NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    fat_content DECIMAL(5, 2) NOT NULL,
    price DECIMAL(10, 2),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
