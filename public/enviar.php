<?php
require 'conection.php';

$json_data = file_get_contents("php://input");
$x = json_decode($json_data);

$query = "INSERT INTO `sumasNiveles` (`nombre`, `puntaje`, `nivel`) VALUES ('Mr.X', 5, '".$x->level."')";

if ($conn->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}
?>