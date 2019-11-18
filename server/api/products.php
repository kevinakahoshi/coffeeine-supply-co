<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = check_connection($link);
  $response['body'] = $message;
  send($response);
}

function check_connection($link) {
  $sql = 'SELECT `productId`, `name`, `price`, `image`, `shortDescription` FROM `products`';
  $response = mysqli_query($link, $sql);
  $data = mysqli_fetch_all($response, MYSQLI_ASSOC);
  return $data;
}
