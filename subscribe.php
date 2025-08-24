<?php
// subscribe.php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo 'Invalid email';
        exit;
    }

    // Email to send to
    $to = "info@globalcareeradvisorllc.com";
    $subject = "New Newsletter Subscriber";
    $message = "A new user has subscribed with the email address: " . $email;
    $headers = "From: no-reply@globalcareeradvisorllc.com\r\n";
    $headers .= "Reply-To: no-reply@globalcareeradvisorllc.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent';
    } else {
        echo 'Failed to send';
    }
}