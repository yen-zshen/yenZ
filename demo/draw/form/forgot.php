<?php
if (isset($_POST['account'])) {
  $account = $_POST['account'];
  require_once('db.php');
  include("PHPMailer/PHPMailerAutoload.php");
  $total = $db->query("SELECT COUNT(*) FROM user WHERE account = '{$account}'")->fetchColumn();
  if ($total > 0) {
    $statement = $db->query("SELECT * FROM user WHERE account = '{$account}' LIMIT 1");
    foreach($statement as $row){
      $account = $row['account'];
      $password = $row['password'];
      //寄送Email
      $mail = new PHPMailer();
      $mail->IsSMTP();
      $mail->SMTPAuth = true;
      $mail->Host = "smtp.gmail.com";
      $mail->Port = 587;
      $mail->CharSet = "utf-8";
      $mail->Encoding = "base64";
      $mail->Username = "lovedrawing0614@gmail.com";
      $mail->Password = "love20200614";
      $mail->From = "lovedrawing0614@gmail.com";
      $mail->FromName = "愛畫畫-密碼查詢";
      $mail->Subject = "愛畫畫-密碼查詢";
      $mail->Body = "Email：{$account}<br>密碼：{$password}";
      $mail->IsHTML(true);
      $mail->AddAddress($account);

      // 顯示訊息
      if(!$mail->Send()) {
        // echo $mail->ErrorInfo;
        // echo "失敗";
        echo '<script>alert("寄送Email失敗，請洽管理員")</script>';
      } else {
        // echo $mail->ErrorInfo;
        // echo "成功";
        echo '<script>alert("已將密碼寄送至您的信箱")</script>';
      }
    }
  } else {
    echo '<script>alert("查無資料！")</script>';
  }
}
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>愛畫畫</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
</head>

<body class="hold-transition login-page">
  <div class="login-box">
    <div class="login-logo">
      <a href="index.html">愛畫畫</a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">請輸入Email，密碼會寄到您的信箱</p>
      <form action="forgot.php" method="post">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Email" name="account">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button type="submit" class="btn btn-primary btn-block btn-flat">送出</button>
          </div>
        </div>
        <div class="text-center" style="margin-top: 10px;">
          <a href="index.php">返回登入</a>
        </div>
      </form>
    </div>
  </div>

  <script src="plugins/jQuery/jquery-2.2.3.min.js"></script>
  <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
