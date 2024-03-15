<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "milk_collection";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch recent entries
$sql = "SELECT * FROM milk_records ORDER BY date DESC LIMIT 10"; // Change LIMIT as needed

$result = $conn->query($sql);

$rows = array();

if ($result->num_rows > 0) {
    // Fetch rows
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}

// Return data as JSON
echo json_encode($rows);

$conn->close();
?>
