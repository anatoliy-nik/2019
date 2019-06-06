<?php

$admin_email = "dessid@yandex.ru";
$project_name  = "Оценочная компания";
$form_subject   = "Новая заявка с сайта \"$project_name\"";

$name = trim($_POST["guest-name"]);
$phone = trim($_POST["guest-tel"]);
$email = trim($_POST["guest-mail"]);
$formname = trim($_POST["form-name"]);

$message = "
Имя: $name <br>
Телефон: $phone <br>
E-mail: $email <br>
Форма: $formname
";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);

?>
