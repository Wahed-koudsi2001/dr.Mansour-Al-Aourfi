<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve data from the form using the `name` attributes
    $clinic = isset($_POST['clinic']) ? trim($_POST['clinic']) : '';
    $phoneNumber = isset($_POST['phoneNumber']) ? trim($_POST['phoneNumber']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Prepare PHPMailer
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mohammedkoudsi48@gmail.com';
        $mail->Password   = 'ettstouvnpqgslpf';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('mohammedkoudsi48@gmail.com', $clinic);
        $mail->addAddress('Mansour.alourfi@outlook.com', 'Endak');

        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'New Contribution Request';

        // Email body
        $mail->Body = "<h1>New Contribution Request</h1>"
            . "<p><strong>العيادة:</strong> {$clinic}</p>"
            . "<p><strong>رقم الهاتف:</strong> {$phoneNumber}</p>"
            . "<p><strong>رسالة:</strong> {$message}</p>";

        $mail->send();

//        echo "<script>
//                alert('Your message has been sent successfully!');
//                window.location.href='index.html';
//              </script>";
//
//        exit();

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
