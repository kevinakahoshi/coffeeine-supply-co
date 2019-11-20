<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
  $sessionData = isset($_SESSION[`cart_id`]);
  if (!$sessionData) {
    $response['body'] = [];
    send($response);
  }
}

if ($request['method'] === 'POST') {
  // $productId = $request['body']['productId'];
  // $checkProductId = isset($request['body']['productId']);
  // if (!$checkProductId) {
  //   throw new ApiError('That is not a valid product ID', 400);
  // }
  // $query = "SELECT * FROM products WHERE productId=1";

  $inserted_time = "INSERT INTO carts (createdAt) VALUES (CURRENT_TIMESTAMP)";
  $link->query($inserted_time);
  $insert_id = $link->insert_id;

  $response['body'] = $insert_id;
  send($response);
}
