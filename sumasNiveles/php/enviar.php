<?php
require 'conection.php';

$json_data = file_get_contents("php://input");
$x = json_decode($json_data);

$peticion = mysqli_query($conn, "SELECT nombre FROM sumasNiveles WHERE nombre = '".$x->name."'");

if (mysqli_num_rows($peticion) == 0) {
    mysqli_query($conn, "INSERT INTO `sumasNiveles` (`nombre`, `puntaje`, `nivel`) VALUES ('".$x->name."', 5, '".$x->level."')") ;
} else {
    $respuesta = mysqli_query($conn, "SELECT nombre, puntaje, nivel FROM sumasNiveles WHERE nombre = '".$x->name."' ");

    $row = mysqli_fetch_row($respuesta);
    echo json_encode($row, JSON_NUMERIC_CHECK);
}
?>
