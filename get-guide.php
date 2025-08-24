<?php
// get-guide.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize values
    $firstName = isset($_POST['firstName']) ? htmlspecialchars(trim($_POST['firstName'])) : '';
    $email     = isset($_POST['email'])     ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $agree     = isset($_POST['terms'])     ? 'Agreed to terms' : 'Did not agree to terms';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address';
        exit;
    }

    // Prepare email content
    $to      = "info@globalcareeradvisorllc.com";
    $subject = "New Guide Download Request";
    $message = "First Name: " . $firstName . "\n"
             . "Email: " . $email . "\n"
             . "Agreement: " . $agree;
    $headers = "From: no-reply@globalcareeradvisorllc.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "fail";
    }
}
?>