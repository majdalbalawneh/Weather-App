<?php
require "./connection.php";

$name         = $_REQUEST['name'];
$phone_number = $_REQUEST['phone_number'];
$email        = $_REQUEST['email'];
$password     = $_REQUEST['password'];
$location     = $_REQUEST['location'];

$password = md5($password);

$sql = "INSERT INTO users (name,phone_number,email,password) VALUES (?,?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$name,$phone_number,$email,$password]);

?>