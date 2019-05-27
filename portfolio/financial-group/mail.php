<?php

$frm_name  = "MFG";
$recepient = "qwerty@yandex.ru";
$sitename  = "Mega Financical Group";
$subject   = "Новая заявка с сайта \"$sitename\"";

$formname = trim($_POST["form-name"]);
$name = trim($_POST["guest-name"]);
$phone = trim($_POST["guest-tel"]);
$email = trim($_POST["guest-mail"]);

$message = "
Форма: $formname <br>
Имя: $name <br>
Телефон: $phone <br>
E-mail: $email
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
