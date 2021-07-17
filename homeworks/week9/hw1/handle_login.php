<?php
  require_once('conn.php');

  if (
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = sprintf(
    "select * from lindsay_comments_users where username='%s' and password='%s'",
    $username,
    $password
  );
  $result = $conn->query($sql);
  if (!$result) {
    header('Location: register.php?errCode=2');
    die($conn->error);
  }

  if ($result->num_rows) {
      $expire = time() + 3600 * 24 * 30;
      setcookie("username", $username, $expire);
      header("Location: index.php"); //cookie return to index
  } else {
    header("Location: login.php?errCode=2" );
  }
?>