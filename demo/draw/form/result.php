<?php include_once('header.php');?>

<?php
if (isset($_POST['action'])) {
  switch ($_POST['action']) {
    case 'del':
      $ids = $_POST['id'];
      foreach ($ids as $id) {
        $sql = "DELETE FROM result WHERE id = '" . $id . "'";
        $db->exec($sql);
      }
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
$statement = $db->query("SELECT * FROM result ORDER BY id DESC LIMIT " . $start . "," . $limit);
$total = $db->query("SELECT COUNT(*) FROM result")->fetchColumn();
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
<div class="content-wrapper">
  <section class="content-header">
    <h1>與我們聯絡</h1>
  </section>

  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-body">
            <form action="result.php" method="post">
              <div class="dataTables_wrapper form-inline dt-bootstrap">
                <div class="row">
                  <?php if ($_SESSION['is_admin'] == '1') { ?>
                  <div class="col-sm-12 tool">
                    <button type="submit" name="action" value="del" class="btn btn-default"><i class="fa fa-trash"></i>刪除</button>
                  </div>
                  <?php } ?>
                  <div class="col-sm-12">
                    <table class="table table-bordered table-hover table-data">
                      <thead>
                        <tr>
                          <?php if ($_SESSION['is_admin'] == '1') { ?>
                          <th style="width: 5%;"><input class="check-all" type="checkbox"></th>
                          <?php } ?>
                          <th style="width: 5%;">ID</th>
                          <th style="width: 15%;">填寫日期</th>
                          <th style="width: 15%;">姓名</th>
                          <th style="width: 20%;">電話</th>
                          <th style="width: 20%;">Email</th>
                          <th style="width: 20%;">您的需求</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php foreach($statement as $row){ ?>
                        <tr>
                          <?php if ($_SESSION['is_admin'] == '1') { ?>
                          <td>
                            <input type="checkbox" value="<?php echo $row['id']; ?>" class="id" name="id[]">
                          </td>
                          <?php } ?>
                          <td>
                            <?php echo $row['id'];?>
                          </td>
                          <td>
                            <?php echo $row['datetime'];?>
                          </td>
                          <td>
                            <?php echo $row['name'];?> <?php echo $row['sex'];?>
                          </td>
                          <td>
                            <?php echo $row['phone'];?>
                          </td>
                          <td>
                            <?php echo $row['email'];?>
                          </td>
                          <td>
                            <?php echo $row['request'];?>
                          </td>
                          <input type="hidden" class="name" value="<?php echo $row['name'];?>">
                          <input type="hidden" class="sex" value="<?php echo $row['sex'];?>">
                          <input type="hidden" class="phone" value="<?php echo $row['phone'];?>">
                          <input type="hidden" class="email" value="<?php echo $row['email'];?>">
                          <input type="hidden" class="request" value="<?php echo $row['request'];?>">
                          <input type="hidden" class="design" value="<?php echo $row['design'];?>">
                          <input type="hidden" class="space" value="<?php echo $row['space'];?>">
                          <input type="hidden" class="house" value="<?php echo $row['house'];?>">
                          <input type="hidden" class="square" value="<?php echo $row['square'];?>">
                          <input type="hidden" class="role" value="<?php echo $row['role'];?>">
                          <input type="hidden" class="style" value="<?php echo $row['style'];?>">
                          <input type="hidden" class="other" value="<?php echo $row['other'];?>">
                          <input type="hidden" class="budget" value="<?php echo $row['budget'];?>">
                          <input type="hidden" class="budget_other" value="<?php echo $row['budget_other'];?>">
                          <input type="hidden" class="datetime" value="<?php echo $row['datetime'];?>">
                        </tr>
                        <?php } ?>
                      </tbody>
                      <tfoot>
                        <tr>
                          <?php if ($_SESSION['is_admin'] == '1') { ?>
                          <th><input class="check-all" type="checkbox"></th>
                          <?php } ?>
                          <th>ID</th>
                          <th>填寫日期</th>
                          <th>姓名</th>
                          <th>電話</th>
                          <th>Email</th>
                          <th>您的需求</th>
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
        </div>
      </div>
    </div>
  </section>
</div>

<div class="modal fade" id="detail-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="form-horizontal">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">查看</h4>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="col-sm-3 control-label">姓名</label>
            <div class="col-sm-9">
              <p class="form-control-static name"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">性別</label>
            <div class="col-sm-9">
              <p class="form-control-static sex"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">電話</label>
            <div class="col-sm-9">
              <p class="form-control-static phone"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">Email</label>
            <div class="col-sm-9">
              <p class="form-control-static email"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">您的需求</label>
            <div class="col-sm-9">
              <p class="form-control-static request"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">設計需求</label>
            <div class="col-sm-9">
              <p class="form-control-static design"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">裝修空間</label>
            <div class="col-sm-9">
              <p class="form-control-static space"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">房屋狀態</label>
            <div class="col-sm-9">
              <p class="form-control-static house"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">裝修坪數</label>
            <div class="col-sm-9">
              <p class="form-control-static square"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">使用成員</label>
            <div class="col-sm-9">
              <p class="form-control-static role"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">喜好風格</label>
            <div class="col-sm-9">
              <p class="form-control-static style"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">喜好風格_其他</label>
            <div class="col-sm-9">
              <p class="form-control-static other"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">裝修預算</label>
            <div class="col-sm-9">
              <p class="form-control-static budget"></p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">裝修預算_其他</label>
            <div class="col-sm-9">
              <p class="form-control-static budget_other"></p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>
        </div>
      </form>
    </div>
  </div>
</div>

<?php include_once('footer.php');?>
