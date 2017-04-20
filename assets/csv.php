<?php

// csv file read
$all_rows = array();
$all = array();
$header = null;
$id = $_GET['id'];
$element = 'csv_files/csv'.$id.'.csv';
$file = fopen($element, 'r');
while (($row = fgetcsv($file)) !== FALSE) {
    if ($header === null) {
        $header = $row;
        continue;
    }
    $all_rows[] = array_combine($header, $row);
}

//echo json_encode($all_rows);

$time = date('m/d/Y H:i');
$all[] = array_merge($all_rows,array($time));

echo json_encode(array('result1'=>$all_rows,'result2'=>$time));