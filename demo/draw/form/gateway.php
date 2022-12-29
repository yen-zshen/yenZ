<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
//連結資料庫
date_default_timezone_set("Asia/Taipei");
require_once('db.php');
include("PHPMailer/PHPMailerAutoload.php");
//var_dump($_REQUEST);
//exit();
$name = htmlspecialchars($_POST['name']);
$gender = $_POST['gender'];
$Phone = htmlspecialchars($_POST['Phone']);
$Email = htmlspecialchars($_POST['Email']);
$GetMsg = $_POST['GetMsg'];
$box06 = $_POST['box06'];
$box07 = $_POST['box07'];
$box08 = $_POST['box08'];
$box09 = $_POST['box09'];
$cbox10_other = htmlspecialchars($_POST['cbox10_other']);
$budget = $_POST['budget'];
$radio11_other = htmlspecialchars($_POST['radio11_other']);

$box05 = '';
$box05_1 = $_POST['box05_1'];
$box05_2 = $_POST['box05_2'];
$box05_3 = $_POST['box05_3'];
$box05_4 = $_POST['box05_4'];
if ($box05_1 != '') {
  $box05 .= $box05_1 . ', ';
}
if ($box05_2 != '') {
  $box05 .= $box05_2 . ', ';
}
if ($box05_3 != '') {
  $box05 .= $box05_3 . ', ';
}
if ($box05_4 != '') {
  $box05 .= $box05_4 . ', ';
}

$box10 = '';
$box10_1 = $_POST['box10_1'];
$box10_2 = $_POST['box10_2'];
$box10_3 = $_POST['box10_3'];
$box10_4 = $_POST['box10_4'];
$box10_5 = $_POST['box10_5'];
$box10_6 = $_POST['box10_6'];
$box10_7 = $_POST['box10_7'];
$box10_8 = $_POST['box10_8'];
$box10_9 = $_POST['box10_9'];
$box10_10 = $_POST['box10_10'];
$box10_11 = $_POST['box10_11'];
if ($box10_1 != '') {
  $box10 .= $box10_1 . ', ';
}
if ($box10_2 != '') {
  $box10 .= $box10_2 . ', ';
}
if ($box10_3 != '') {
  $box10 .= $box10_3 . ', ';
}
if ($box10_4 != '') {
  $box10 .= $box10_4 . ', ';
}
if ($box10_5 != '') {
  $box10 .= $box10_5 . ', ';
}
if ($box10_6 != '') {
  $box10 .= $box10_6 . ', ';
}
if ($box10_7 != '') {
  $box10 .= $box10_7 . ', ';
}
if ($box10_8 != '') {
  $box10 .= $box10_8 . ', ';
}
if ($box10_9 != '') {
  $box10 .= $box10_9 . ', ';
}
if ($box10_10 != '') {
  $box10 .= $box10_10 . ', ';
}
if ($box10_11 != '') {
  $box10 .= $box10_11 . ', ';
}

$now = date("Y-m-d H:i:s");

$sql = "INSERT INTO result (name, sex, phone, email, request, design, space,
  house, square, role, style, other, budget, budget_other, datetime)
VALUES('{$name}', '{$gender}', '{$Phone}', '{$Email}', '{$GetMsg}', '{$box05}', '{$box06}', '{$box07}',
  '{$box08}', '{$box09}', '{$box10}', '{$cbox10_other}', '{$budget}', '{$radio11_other}', '{$now}')";
$creat = $db->exec($sql);

//寄送Email
$statement = $db->query("SELECT * FROM user WHERE is_admin = 1 ORDER BY id DESC");
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host = "box992.bluehost.com";
$mail->Port = 26;
$mail->CharSet = "utf-8";
$mail->Encoding = "base64";
$mail->Username = "postman@postoffice.summersjr.com";
$mail->Password = "Z1v9Gd_u+!T1";
$mail->From = "postman@postoffice.summersjr.com";
$mail->FromName = "愛畫畫-與我們聯絡";
$mail->Subject = "愛畫畫-與我們聯絡(" . $name . $gender . ")";
$mail->Body = "姓名：{$name}{$gender}<br>電話：{$Phone}<br>Email：{$Email}<br>您的需求：{$GetMsg}<br>設計需求：{$box05}<br>裝修空間：{$box06}<br>房屋狀態：{$box07}<br>裝修坪數：{$box08}<br>使用成員：{$box09}<br>喜好風格：{$box10} {$cbox10_other}<br>裝修預算：{$budget} {$radio11_other}";
$mail->IsHTML(true);
foreach($statement as $row){
  $account = $row['account'];
  // echo $account;
  $mail->AddAddress($account);
}

// 顯示訊息
if(!$mail->Send()) {
  // echo $mail->ErrorInfo;
  // echo "失敗";
} else {
  // echo $mail->ErrorInfo;
  // echo "成功";
}

$obj['success'] = 0;
$obj['msg'] = '';

echo json_encode($obj);
?>
