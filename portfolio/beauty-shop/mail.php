<?php

// $site_name  = "Вeauty Shop";
// $admin_email = "dessid@yandex.ru";
// $form_subject   = "Заявка с сайта Вeauty Shop";

$site_name = trim($_POST["site-name"]);
$admin_email  = trim($_POST["admin-email"]);
$form_subject = trim($_POST["form-subject"]);

$guest_name = trim($_POST["guest-name"]);
$guest_phone = trim($_POST["guest-tel"]);
$guest_mail = trim($_POST["guest-mail"]);
$service_name = trim($_POST["service-name"]);
$form_name = trim($_POST["form-name"]);

$message = "
Имя: $guest_name <br>
Телефон: $guest_phone <br>
E-mail: $guest_mail <br>
Услуга: $service_name <br>
Форма: $form_name
";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($site_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);

?>
