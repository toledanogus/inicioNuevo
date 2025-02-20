<?php
require 'conection.php';

$json_data = file_get_contents("php://input");
$x = json_decode($json_data);

$respuesta = mysqli_query($conn, "SELECT nombre, puntaje, nivel FROM sumasNiveles WHERE nombre = '".$x->name."' ");


$row = mysqli_fetch_row($respuesta);


echo json_encode($row, JSON_NUMERIC_CHECK);
?>