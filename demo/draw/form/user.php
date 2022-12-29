<?php include_once('header.php');?>

<?php
if (isset($_GET['action'])) {
  switch ($_GET['action']) {
    case 'del':
      $id = $_GET['id'];
      $sql = "DELETE FROM user WHERE id = '" . $id . "'";
      $db->exec($sql);
      break;
  }
}
//查詢Query的結果
$limit = '100';//每頁數量
if (isset($_GET['page'])) {
  $page = $_GET['page'];
  $start = $page * $limit;
} else {
  $page = '0';
  $start = '0';
}
$statement = $db->query("SELECT * FROM user ORDER BY id DESC LIMIT " . $start . "," . $limit);
$total = $db->query("SELECT COUNT(*) FROM user")->fetchColumn();
$pages = ceil($total/$limit) ;
$paginator .= '<ul class="pagination pull-right">';
if ($page != '0') {
  $paginator .= '<li class="paginate_button previous"><a href="?page=' . ($page-1) . '">上一頁</a></li>';
}
for ($i=0; $i < $pages; $i++) {
  if ($i <= $page) {
    if ($page - $i < 4) {
      $paginator .= '<li class="paginate_button ';
      if ($i == $page) {
        $paginator .= 'active';
      }
      $paginator .= '"><a href="?page=' . $i . '">' . ($i+1) .'</a></li>';
    }
  } else {
    if ($i - $page < 4) {
      $paginator .= '<li class="paginate_button"><a href="?page=' . $i . '">' . ($i+1) .'</a></li>';
    }
  }
}
if ($pages-1 > $page) {
  $paginator .= '<li class="paginate_button next"><a href="?page=' . ($page+1) . '">下一頁</a></li>';
}
$paginator .= '</ul>';
$paginator2 .= '顯示第 ' . ($start+1) . ' 到 ';
if (($start+$limit) > $total) {
  $paginator2 .= $total;
} else {
  $paginator2 .= ($start+$limit);
}
$paginator2 .= ' 筆 / 總共 ' . $total . ' 筆';
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
                    <!-- /.box-header -->
                    <div class="box-body">
                        <form action="result.php" method="post">
                            <div class="dataTables_wrapper form-inline dt-bootstrap">
                                <div class="row">
                                    <div class="col-sm-12 tool">
                                      <a href="user-edit.php" class="btn btn-default"><i class="fa fa-plus"></i>新增</a>
                                    </div>
                                    <div class="col-sm-12">
                                        <p>管理者可匯出，編輯人員管理</p>
                                        <table class="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Email</th>
                                                    <th>是否為管理者</th>
                                                    <th>操作</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php foreach($statement as $row){ ?>
                                                <tr>
                                                    <td>
                                                        <?php echo $row['account'];?>
                                                    </td>
                                                    <td>
                                                        <?php
                                                        if ($row['is_admin'] == 0) {
                                                          echo '<span class="label label-danger">否</span>';
                                                        } else {
                                                          echo '<span class="label label-success">是</span>';
                                                        }
                                                        ?>
                                                    </td>
                                                    <td>
                                                      <a href="user-edit.php?id=<?php echo $row['id']?>" class="btn btn-xs btn-default"><i class="fa fa-edit"></i> 修改</a>
                                                      <?php if ($row['id'] != $_SESSION['id'] ) { ?>
                                                      <a href="user.php?action=del&id=<?php echo $row['id']?>" class="btn btn-xs btn-default"><i class="fa fa-trash"></i>刪除</a>
                                                      <?php }?>
                                                    </td>
                                                </tr>
                                                <?php } ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Email</th>
                                                    <th>是否為管理者</th>
                                                    <th>操作</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-5">
                                        <div class="dataTables_info"><?php echo $paginator2;?></div>
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="dataTables_paginate paging_simple_numbers">
                                            <?php echo $paginator;?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<div class="modal fade" id="detail-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <form class="form-horizontal">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span></button>
                    <h4 class="modal-title">預覽</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">姓名</label>
                        <div class="col-sm-10">
                            <p class="form-control-static name"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">公司名稱</label>
                        <div class="col-sm-10">
                            <p class="form-control-static company"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">部門</label>
                        <div class="col-sm-10">
                            <p class="form-control-static department"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">公司規模</label>
                        <div class="col-sm-10">
                            <p class="form-control-static scale"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">職稱</label>
                        <div class="col-sm-10">
                            <p class="form-control-static title"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">電話</label>
                        <div class="col-sm-10">
                            <p class="form-control-static phone"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <p class="form-control-static email"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">使用的虛擬化平台</label>
                        <div class="col-sm-10">
                            <p class="form-control-static platform"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">備註</label>
                        <div class="col-sm-10">
                            <p class="form-control-static note"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">填寫日期</label>
                        <div class="col-sm-10">
                            <p class="form-control-static datetime"></p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>
                </div>
            </form>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<?php include_once('footer.php');?>
