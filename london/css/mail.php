<?php
    $to = 'wapster92@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Заявка с сайта london-design.ru'; //Загаловок сообщения
    $ip = $_SERVER['REMOTE_ADDR'];
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['phone'].'</p>
                    <p>Email: '.$_POST['email']. '</p>
                    <p>Название формы: '.$_POST['name-block']. '</p>


                    <p>IP: '.$ip.'</p>
                    <p>Метки</p>
                    <p>utm_source: '.$_POST['utm_source']. '</p>
                    <p>utm_medium: '.$_POST['utm_medium']. '</p>
                    <p>utm_campaign: '.$_POST['utm_campaign']. '</p>
                    <p>utm_content: '.$_POST['utm_content']. '</p>
                    <p>utm_term: '.$_POST['utm_term']. '</p>
                    <p>pm_source: '.$_POST['pm_source']. '</p>
                    <p>pm_block: '.$_POST['pm_block']. '</p>
                    <p>pm_position: '.$_POST['pm_position']. '</p>
                    <p>yclid: '.$_POST['yclid']. '</p>
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    header('Location: http://london-design.ru/spasibo');
?>