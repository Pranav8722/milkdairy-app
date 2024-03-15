<?php
$username = $_POST['username'];
$userid = $_POST['userid'];
$quantity = $_POST['quantity'];
$fat_content = $_POST['fat_content'];
$price = $_POST['price'];

// Your price calculation logic goes here

// Connect to MySQL database
$servername = "localhost";
$username_db = "root";
$password_db = "";
$database = "milk_collection";

$conn = new mysqli($servername, $username_db, $password_db, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into the database
$sql = "INSERT INTO milk_records (username, userid, quantity, fat_content, price) VALUES ('$username', '$userid', '$quantity', '$fat_content', '$price')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
