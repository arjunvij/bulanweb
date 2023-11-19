<?php

echo "from contact up page Connected successfully";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


echo "before Connected successfully";
//database connection 
$conn = new mysqli('localhost' , 'root' , '' ,'bulanbymannatvij');
if($conn->connect_error){
    die("connection failed :" . $conn->connect_error);
    echo "Connected failed";
}else{
    echo "Inside Sent successfully";
    echo $name;
    echo $email;
    echo $phone;
    echo $message;

    $stmt = $conn->prepare("INSERT INTO contact_us (name, email , phone , message) 
    VALUES(?, ?, ?, ?)");
    echo "prepare successfully";
    $stmt->bind_param("ssis" , $name , $email , $phone , $message);
    echo "bind successfully";
    $stmt->execute();
    echo "Message Sent successfully";
    $stmt->close();
    $conn->close();

}


?>