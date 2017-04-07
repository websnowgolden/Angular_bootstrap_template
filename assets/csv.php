<?php


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
$time = date('Y/m/d H:i:s');
echo $time;
$all[] = array_merge($all_rows,$time);
//echo json_encode($all_rows);