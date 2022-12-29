<?php
require_once('db.php');
session_start();
$id = $_SESSION['id'];
if (empty($id)) {
    //沒有session
    $ac = $_POST['account'];
    $pwd = $_POST['password'];
    if (empty($ac) or empty($pwd)) {
        header("Location: index.php");
        die();
    }
    $num = $db->query("SELECT COUNT(*) FROM user WHERE account = '" . $ac . "' and password = '" . $pwd . "'")->fetchColumn();
    if ($num == '0') {
        header("Location: index.php");
        die();
    } else {
        $statement = $db->query("SELECT * FROM user WHERE account = '" . $ac . "' and password = '" . $pwd . "'");
        foreach ($statement as $row) {
            $_SESSION['id'] = $row['id'];
            $_SESSION['account'] = $row['account'];
            $_SESSION['is_admin'] = $row['is_admin'];
        }
    }
}
?>
