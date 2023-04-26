<?php
// postavite varijable s podacima iz obrasca
$name = $_POST['name'];
$email = $_POST['_replyto'];
$message = $_POST['message'];

// postavite adresu e-pošte na koju želite poslati poruku
$to = 'proviczeljko@gmail.com';

// postavite naslov e-pošte
$subject = 'Nova poruka sa sajta';

// postavite poruku e-pošte
$body = "Ime: $name\nEmail: $email\nPoruka:\n$message";

// postavite zaglavlje e-pošte
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// pošaljite e-poštu
if (mail($to, $subject, $body, $headers)) {
    echo 'Vaša poruka je uspješno poslana.';
} else {
    echo 'Došlo je do pogreške prilikom slanja poruke.';
}
?>
