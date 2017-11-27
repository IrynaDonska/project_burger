<?php

/*use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';*/

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $housing = $_POST['housing'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $payable = $_POST['payable'];
    
    $callBack = $_POST['callback']; // no или yes 
    $callBack = isset($callBack) ? 'НЕТ' : 'ДА'; 

    
/*$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
    //Server settings
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'bestburgers@mail.ru';                 // SMTP username
        $mail->Password = 'passwordburgers';                           // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('bestburgers@mail.ru', 'Mailer');
        $mail->addAddress('id2910@mail.ru'); 
        $mail->addReplyTo('bestburgers@mail.ru', 'Information');
    
        //Attachments
        $mail->addAttachment('/pictures/pictures/logo.png');         // Add attachments
       
    
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Заявка на заказ';
        $mail->Body    = 
        '<h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Мобильный телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Номер дома: ' . $house . '</li>
            <li>Номер корпуса: ' .  $housing . '</li>
            <li>Номер квартиры: ' . $flat . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Способ оплаты: ' . $payable . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $callBack . '</li>
        </ul>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
        $data = [];
        
        if ($mail=>send() {
            $data['status'] = "OK";
            $data['mes'] = "Письмо успешно отправлено";
        }else{
            $data['status'] = "NO";
            $data['mes'] = "На сервере произошла ошибка";
        }

        
        echo json_encode($data);

    }*/


    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
            <li>Имя: ' . $name . '</li>
            <li>Мобильный телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Номер дома: ' . $house . '</li>
            <li>Номер корпуса: ' .  $housing . '</li>
            <li>Номер квартиры: ' . $flat . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Способ оплаты: ' . $payable . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $callBack . '</li>
            </ul>
        </body>
    </html>    
    ';
    $headers = "From: Администратор сайта <bestburgers@mail.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('id2910@mail.ru', 'Заказ', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Заказ успешно оформлен";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка! Попробуйте повторить или свяжитесь с нами по телефону.";
    }
    echo json_encode($data);

    


?>
