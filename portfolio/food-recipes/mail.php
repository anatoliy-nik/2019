<?php

$admin_email = "dessid@yandex.ru";
$project_name  = "Food Recipes";
$form_subject   = "Сообщение с сайта \"$project_name\"";


$customer_name = trim($_POST["customer-name"]);
$customer_email = trim($_POST["customer-email"]);
$form_name = trim($_POST["form-name"]);

$message = "Форма: $form_name <br>";
if($customer_name) {$message.="Имя: $customer_name <br>";}
if($customer_email) {$message.="E-mail: $customer_email <br>";}

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);

?>
