<?php

$servername = "localhost";
$username = "slava";
$password = "upwork";
$dbname = "upwork";

$all_rows = array();
$header = null;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT symbol,snaptime,message,snapdate FROM messageinfo";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // echo "id: " . $row["id"]. " - Name: " . $row["testid"]. " " . $row["symbol"]. "<br>";
      //   if ($header === null) {
	     //     $header = $row;
	     //     continue;
	     // }
	     // $all_rows[] = array_combine($header, $row);

        $all_rows[] = $row;
    }
    echo json_encode($all_rows);
} else {
    echo "0 results";
}
$conn->close();

// $all_rows = array();
// $header = null;
// $id = $_GET['id'];
// $element = 'assets/csv_files/csv'.$id.'.csv';
// $file = fopen($element, 'r');
// while (($row = fgetcsv($file)) !== FALSE) {
// 	if ($header === null) {
//         $header = $row;
//         continue;
//     }
//     $all_rows[] = array_combine($header, $row);
// }

// echo json_encode($all_rows);