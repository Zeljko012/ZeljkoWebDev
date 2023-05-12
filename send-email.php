<?php
require 'PHPMailer-master';
require 'PHPMailer-master\src\SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$name = $_POST['name'];
$email = $_POST['_replyto'];
$message = $_POST['message'];

// Inicijalizacija PHPMailer objekta
$mail = new PHPMailer();

// Postavke poslužitelja za slanje e-pošte
$mail->isSMTP();
$mail->Host = 'smtp.example.com';
$mail->SMTPAuth = true;
$mail->Username = 'your_username';
$mail->Password = 'your_password';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Postavke e-pošte
$mail->setFrom($email, $name);
$mail->addAddress('proviczeljko@gmail.com');
$mail->Subject = 'Nova poruka sa sajta';
$mail->Body = "Ime: $name\nEmail: $email\nPoruka:\n$message";

// Slanje e-pošte
if ($mail->send()) {
    echo 'Vaša poruka je uspješno poslana.';
} else {
    echo 'Došlo je do pogreške prilikom slanja poruke: ' . $mail->ErrorInfo;
}
?>
