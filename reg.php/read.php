<?php
require "./connection.php";


    $email    =  $_REQUEST['email'];
   
    $password = ($_REQUEST['password']);
    
    $password = md5($password);

    // if (isset($_POST['login'])){
    
    // $email = ($_POST['email']);
    
    // ensure that form fields are filled properly 
    
    // if (empty($email)){
    //    echo( "Email is  required ");
    // }
    // if (empty($password)){
    //     echo("password is  required ");
    // }
//    if(count($errors) == 0){
  
    
    // $query = "SELECT * FROM users WHERE  email='$email';";
    // $result  = $conn->prepare($query);

    // $result->execute();

    try {
    
        $sql = "SELECT *
                   FROM users
                   WHERE  email='$email' AND password='$password'";
    
        $q = $conn->query($sql);
        $q->setFetchMode(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Could not connect to the database $dbname :" . $e->getMessage());
    }
     while ($row = $q->fetch()): 
            echo htmlspecialchars($row['user_id']);
  
     endwhile; 
     ?>
