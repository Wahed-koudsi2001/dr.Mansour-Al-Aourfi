<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']); // User's name
    $userEmail = htmlspecialchars($_POST['email']); // User's email
    $subject = htmlspecialchars($_POST['subject']); // Subject from the user
    $message = htmlspecialchars($_POST['message']); // Message from the user

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mohammedkoudsi48@gmail.com'; // Your Gmail address
        $mail->Password = 'ettstouvnpqgslpf'; // Your app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Set the "From" address as your email
        $mail->setFrom('mohammedkoudsi48@gmail.com', 'Your Name'); // Sender's email and name
        // Set the recipient's email address
        $mail->addAddress('Mansour.alourfi@outlook.com'); // Email to send to

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = "Name: $name\nEmail: $userEmail\nMessage:\n$message";

        // Send the email
        $mail->send();
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
