<?php
$link = get_db_link();

if ($request['method'] === 'POST') {
  $sessionIsSet = isset($_SESSION['cart_id']);
  if (!$sessionIsSet) {
    throw new ApiError('An active shopping cart is required', 400);
  }

  if ($request['body']['name'] === null) {
    throw new ApiError('The request was bad because Name is missing', 400);
  }

  if ($request['body']['creditCard'] === null) {
    throw new ApiError('The request was bad because no Credit Card is present', 400);
  }

  if ($request['body']['shippingAddress'] === null) {
    throw new ApiError('The request was bad because no Address is present', 400);
  }

  $new_checkout = "INSERT INTO orders (cartId, name, creditCard, shippingAddress)
                   VALUES (?, ?, ?, ?)";
  $prepared_checkout = $link->prepare($new_checkout);
  $bound_checkout = $prepared_checkout->bind_param('isss', $_SESSION['cart_id'], $request['body']['name'], $request['body']['creditCard'], $request['body']['shippingAddress']);
  $place_order = $prepared_checkout->execute();
  $order_id = $prepared_checkout->insert_id;
  unset($_SESSION['cart_id']);

  $response['body'] = [
    "creditCard" => $request['body']['creditCard'],
    "name" => $request['body']['name'],
    "orderId" => $order_id,
    "shippingAddress" => $request['body']['shippingAddress']
  ];
  send($response);
}
