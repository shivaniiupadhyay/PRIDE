<?php
echo !extension_loaded('openssl')?"Not Available":"Available";
require 'PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;                               
$mail->Username = 'supu270@gmail.com';                 
$mail->Password = 'BeBrave11';                          
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->addAddress('shivani.upadhyay@spsu.ac.in', 'shivani upadhyay');
$mail->isHTML(true); 
$siteOwnersEmail = 'supu270@gmail.com';
if($_POST) {
	$subject1="";
	$message="";
	
   $name = trim(stripslashes($_POST['contactFname']));
   $mno = $_POST['mobileNum'];
   $email = trim(stripslashes($_POST['contactEmail']));
   $subject2 = trim(stripslashes($_POST['contactSubject']));
   $contact_message = trim(stripslashes($_POST['contactMessage']));

   // Check First Name
	if (strlen($name) < 2) {
		$error['name'] = "Please enter your name.";
	}
	// Check Last Name
	/*
	if (strlen($lname) < 2) {
		$error['lname'] = "Please enter your last name.";
	}*/
	// Check Email
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Please enter a valid email address.";
	}
	// Check Message
	if (strlen($contact_message) < 15) {
		$error['message'] = "Please enter your message. It should have at least 15 characters.";
	}
   // Subject
	if ($subject1 == '') { $subject = "Registration of new Participant"; }

	// Set Name
	//$name = $fname . " " . $lname;
 if(isset($_POST["submit"])){
	if($_POST['events1']==1)
	$message = "Volleyball". "<br/>";
	if($_POST['events2']==1)
	$message = "Cricket". "<br/>";
	if($_POST['events3']==1)
	$message = "Basketball". "<br/>";
	if($_POST['events4']==1)
	$message = "Football". "<br/>";
	if($_POST['events5']==1)
	$message = "Badminton". "<br/>";
	if($_POST['events6']==1)
	$message = "Table Tennis". "<br/>";
	if($_POST['events7']==1)
	$message = "Athletics". "<br/>";
	if($_POST['events8']==1)
	$message = "Impulse". "<br/>";
	if($_POST['events9']==1)
	$message = "Chess". "<br/>";
	if($_POST['events10']==1)
	$message = "Carrom". "<br/>";
	if($_POST['events11']==1)
	$message .= "Talent Hunt". "<br/>";
	if($_POST['events12']==1)
	$message .= "Rang Manch". "<br/>";
	} 
	
	 $mail-> Subject = "Registration from " . " " . $name . " <" . $email . ">";
   // Set Message
  $mail->Body =  "Name of Participant: " . $name . "<br />". 
	"Email address: " . $email . "<br />" .
	 "College Name: " . $subject2 . "<br/>" .
	 "Mobile Number: " . $mno . "<br/>" .
	  "Selected Events:" . $message . "<br/>" .
   "Message:" . $contact_message . "<br/>" .
   "<br /> ----- <br /> This email was sent from your site's register form. <br />";

   // Set From: header
  

   // Email Headers
	//$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   if (!isset($error)) {

      ini_set("sendmail_from", $siteOwnersEmail); // for windows server
      $mail = mail($siteOwnersEmail, $subject, $message, $headers);

		if ($mail) { echo "OK"; }
      else { echo "Something went wrong. Please try again."; }
		
	} # end if - no validation error

	else {

		$response = (isset($error['fname'])) ? $error['fname'] . "<br /> \n" : null;
		$response .= (isset($error['mobile'])) ? $error['mobile'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		//$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		
		echo $response;

	} # end if - there was a validation error

}


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>