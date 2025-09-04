<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $firstName = htmlspecialchars(trim($_POST['firstName'] ?? ''));
    $lastName  = htmlspecialchars(trim($_POST['lastName'] ?? ''));
    $email     = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $phone     = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $message   = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Validate required fields
    if (!$firstName || !$lastName || !$email || !$phone || !$message) {
        echo "All fields are required.";
        exit;
    }

    // Email details
    $to = "info@logiprotech.app, hello@logiprotech.app"; // send to both
    $subject = "New Contact Form Submission";
    $body = "
First Name: $firstName
Last Name: $lastName
Email: $email
Phone: $phone
Message: $message
    ";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    mail($to, $subject, $body, $headers);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Message Sent</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    $(document).ready(function() {
        // Show modal
        $('#successModal').modal('show');

        // Redirect after 5 seconds
        setTimeout(function() {
            window.location.href = 'https://logiprotech.app';
        }, 5000);
    });
    </script>
</head>

<body>
    <!-- Modal -->
    <div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title" id="successModalLabel">Message Sent!</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    Thank you, <strong><?php echo $firstName; ?></strong>! Your message has been sent successfully. <br>
                    You will be redirected to <a href="https://logiprotech.app">logiprotech.app</a> in 5 seconds.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">Close Now</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>