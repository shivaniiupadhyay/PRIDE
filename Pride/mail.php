<?php


$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
//$mail->SMTPDebug = 1;
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = "smtp.gmail.com";   // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'supu270@gmail.com';                 // SMTP username
$mail->Password = 'BeBrave11';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
//$mail->SMTPDebug = 2;


//$mail->setFrom('manvick95@gmail.com', 'Mailer');
$mail->addAddress('shivani.upadhyay@spsu.ac.in', 'shivani upadhyay');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Here is the subject';
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>