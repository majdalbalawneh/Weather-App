<?php
require "./connection.php";

$name         = $_REQUEST['name'];
$email        = $_REQUEST['email'];

$sql = "INSERT INTO new_settler (name,email) VALUES (?,?)";
$result  = $conn->prepare($sql);

$result->execute([$name,$email]);

?>