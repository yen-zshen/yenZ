<?php include_once('header.php');?>

<?php
if (isset($_POST['action'])) {
  switch ($_POST['action']) {
    case 'edit':
      $form_id = $_POST['id'];
      $form_ac = $_POST['ac'];
      $form_pwd = $_POST['pwd'];
      $form_is_admin = $_POST['is_admin'];
      $sql = "UPDATE user
      SET account = '" . $form_ac . "',
      password = '" . $form_pwd . "',
      is_admin = '" . $form_is_admin . "'
      WHERE id = " . $form_id ;
      $db->exec($sql);
      echo '<script>document.location.href="user.php";</script>';
      break;
    case 'creat':
      $form_ac = $_POST['ac'];
      $form_pwd = $_POST['pwd'];
      $form_is_admin = $_POST['is_admin'];
      $num = $db->query("SELECT COUNT(*) FROM user WHERE account = '" . $form_ac . "'")->fetchColumn();
      if ($num == '0') {
        $sql = "INSERT INTO user (account, password, is_admin)
        VALUES('{$form_ac}', '{$form_pwd}', '{$form_is_admin}')";
        $db->exec($sql);
        echo '<script>alert("成功建立帳號：' . $form_ac . '");document.location.href="user.php";</script>';
      } else {
        echo '<script>alert("帳號重複：' . $form_ac . '");document.location.href="user-edit.php";</script>';
      }
      break;
  }
}

$id = $_GET['id'];
if ($id) {
    $statement = $db->query("SELECT * FROM user WHERE id = '" . $id . "'");
    foreach($statement as $row){
      $account = $row['account'];
      $password = $row['password'];
      $is_admin = $row['is_admin'];
    }
    $modal = 'edit';
} else {
    $modal = 'creat';
}
?>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>人員管理</h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title"><?php if ($modal == 'creat') { echo '新增'; } else { echo '修改';}?></h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->
                    <form class="form-horizontal" action="user-edit.php" method="POST" id="form">
                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" value="<?php echo $account;?>" name="ac" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">密碼</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" placeholder="最多20個字" value="<?php echo $password;?>" name="pwd" id="pwd" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">再次確認密碼</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" placeholder="最多20個字" value="<?php echo $password;?>" name="pwd2" id="pwd2" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">是否為管理者</label>
                                <div class="col-sm-10">
                                  <select class="form-control" name="is_admin">
                                      <option value="0" <?php if ($is_admin == 0) { echo 'selected';}?>>否</option>
                                      <option value="1" <?php if ($is_admin == 1) { echo 'selected';}?>>是</option>
                                  </select>
                                  <p>管理者可編輯人員，刪除表格資料</p>
                                </div>
                            </div>
                            <?php if ($modal == 'creat') { ?>
                              <input type="hidden" name="action" value="creat">
                            <?php } else { ?>
                              <input type="hidden" name="id" value="<?php echo $id;?>">
                              <input type="hidden" name="action" value="edit">
                            <?php } ?>
                        </div>
                        <!-- /.box-body -->
                        <div class="box-footer">
                            <button type="button" class="btn btn-primary pull-right" onclick="submitUser()">儲存</button>
                        </div>
                        <!-- /.box-footer -->
                    </form>
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?php include_once('footer.php');?>
