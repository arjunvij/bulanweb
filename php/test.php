<?php

echo "first php draft";
$name = $_POST['name'];
$name = $_POST['email'];
$name = $_POST['phone'];
$name = $_POST['message'];
echo "after php draft";
echo "before Connected successfully";
$conn = new mysqli('localhost' , 'root' , '' ,'bulanbymannatvij');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
echo "Connected successfully";

?>