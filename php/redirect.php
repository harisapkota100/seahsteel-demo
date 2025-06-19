<?php
// Replace with your actual WhatsApp number below (without + or dashes)
$phone_number = "971554490542"; // Example: 971501234567

// Optional: You can add a default message
$default_message = "Hello%20SeAH%20Steel%20UAE%20Team"; // URL-encoded

// Redirect to WhatsApp chat
header("Location: https://wa.me/" . $phone_number . "?text=" . $default_message);
exit();
?>
