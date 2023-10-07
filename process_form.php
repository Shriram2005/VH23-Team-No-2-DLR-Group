<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "documents";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$candidate_name = $_POST['candidate_name'];
$certification_name = $_POST['certification_name'];
$starting_date = $_POST['starting_date'];
$ending_date = $_POST['ending_date'];

// Insert data into the table
$sql = "INSERT INTO candidates (candidate_name, certification_name, starting_date, ending_date)
        VALUES ('$candidate_name', '$certification_name', '$starting_date', '$ending_date')";

if ($conn->query($sql) === TRUE) {
    echo "Record added successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
