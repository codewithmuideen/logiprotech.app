<?php
// contact.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = htmlspecialchars(trim($_POST['firstName'] ?? ''));
    $lastName  = htmlspecialchars(trim($_POST['lastName']  ?? ''));
    $email     = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone     = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $message   = htmlspecialchars(trim($_POST['message'] ?? ''));
    $terms     = isset($_POST['terms']) ? 'Agreed' : 'Not agreed';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email';
        exit;
    }

    // Mail content
    $to      = "info@globalcareeradvisorllc.com";
    $subject = "New Contact Form Submission";
    $body    = "First Name: $firstName\n"
             . "Last Name: $lastName\n"
             . "Email: $email\n"
             . "Phone: $phone\n"
             . "Terms Accepted: $terms\n"
             . "Message:\n$message";
    $headers = "From: no-reply@globalcareeradvisorllc.com\r\n"
             . "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}