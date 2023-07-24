<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoloader
// Include PHPMailer autoloader
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/Exception.php';


// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $subject = $_POST['subject'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer();

    // Enable SMTP debugging (0 = off, 1 = commands, 2 = commands and data)
    $mail->SMTPDebug = 0;

    // Set the mailer to use SMTP
    $mail->isSMTP();

    // SMTP settings
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'azzuavr@gmail.com'; // Replace with your SMTP username
    $mail->Password = 'bemmabaowuzcmite'; // Replace with your SMTP password
    $mail->SMTPSecure = 'tls'; // Enable TLS encryption (ssl also possible, but tls is more common)
    $mail->Port = 587; // TCP port to connect to

    // Set sender and recipient
    $mail->setFrom('azzuavr@gmail.com', 'Azad singh S'); // Replace with your email and name
    $mail->addAddress('singhazad84074@gmail.com', 'Recipient Name'); // Replace with recipient email and name

    // Set email subject and body
    $mail->Subject = $subject;
    $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nQuery: $address";

    // Send the email
    if (!$mail->send()) {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent successfully!';
    }
}
?>
