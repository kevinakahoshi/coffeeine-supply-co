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
  $product_id = $request['body']['productId'];
  $check_product_id = isset($product_id);
  if (!$check_product_id) {
    throw new ApiError('That is not a valid product ID', 400);
  }
  $select_product = "SELECT * FROM products WHERE productId=$product_id";
  $product_query = $link->query($select_product);
  $product_info = mysqli_fetch_assoc($product_query);
  $product_price = $product_info['price'];
  $inserted_time = "INSERT INTO carts (createdAt) VALUES (CURRENT_TIMESTAMP)";
  $time_query = $link->query($inserted_time);
  $insert_id = $link->insert_id;
  $cart_items = "INSERT INTO cartItems (cartId, productId, price) VALUES ($insert_id, $product_id, $product_price)";
  $cart_query = $link->query($cart_items);
  $cart_info = mysqli_fetch_assoc($cart_query);
  $joined_cart = "SELECT cartItems.cartId AS id, cartItems.productId, products.name, products.price, products.image, products.shortDescription FROM cartItems JOIN carts ON cartItems.cartId = carts.cartId JOIN products ON cartItems.productId = products.productId WHERE cartItems.cartId=$insert_id";
  $joined_query = $link->query($joined_cart);
  $joined_info = mysqli_fetch_assoc($joined_query);

  $response['body'] = $joined_info;
  send($response);
}
