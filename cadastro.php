<?php 

include("conexao.php");

$nome=$_POST['nome'];
$email=$_POST['email'];
$telefone=$_POST['telefone'];
$mensagem=$_POST['mensagem'];

$sql="INSERT INTO cliente (nome,email,telefone,mensagem)
 VALUES('$nome','$email','$telefone','$mensagem')";

if(mysqli_query($conexao, $sql)) {
      echo"Fico muito feliz pelo seu interesse no meu trabalho e estarei revisando suas informações para entrar em contato o mais breve possível.!";
 }

 else {
    echo"ERRO".mysqli_connect_error($conexao);
 }

 mysqli_close($conexao);

?>