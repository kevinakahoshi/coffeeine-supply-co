<?php
$link = get_db_link();

if ($request['method'] === 'POST') {
  $sessionIsSet = isset($_SESSION['cart_id']);
  if (!$sessionIsSet) {
    throw new ApiError('An active shopping cart is required', 400);
  }

  if ($request['body']['fullName'] === null) {
    throw new ApiError('The request was bad because Full Name is missing', 400);
  }

  if ($request['body']['email'] === null) {
    throw new ApiError('The request was bad because no Email is present', 400);
  }

  if ($request['body']['phone'] === null) {
    throw new ApiError('The request was bad because no Phone Number is present', 400);
  }

  if ($request['body']['creditCard'] === null) {
    throw new ApiError('The request was bad because no Credit Card is present', 400);
  }

  if ($request['body']['expirationDate'] === null) {
    throw new ApiError('The request was bad because no Expiration Date is present', 400);
  }

  if ($request['body']['cvv'] === null) {
    throw new ApiError('The request was bad because no CVV is present', 400);
  }

  if ($request['body']['shippingAddress'] === null) {
    throw new ApiError('The request was bad because no Address is present', 400);
  }

  $new_checkout = "INSERT INTO orders (cartId, fullName, email, phone, creditCard, expirationDate, cvv, shippingAddress)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  $prepared_checkout = $link->prepare($new_checkout);
  $bound_checkout = $prepared_checkout->bind_param('isssssss', $_SESSION['cart_id'], $request['body']['fullName'], $request['body']['email'], $request['body']['phone'], $request['body']['creditCard'], $request['body']['expirationDate'], $request['body']['cvv'], $request['body']['shippingAddress']);
  $place_order = $prepared_checkout->execute();
  $order_id = $prepared_checkout->insert_id;
  unset($_SESSION['cart_id']);

  $response['body'] = [
    "fullName" => $request['body']['fullName'],
    "email" => $request['body']['email'],
    "phone" => $request['body']['phone'],
    "creditCard" => $request['body']['creditCard'],
    "expirationDate" => $request['body']['expirationDate'],
    "cvv" => $request['body']['cvv'],
    "shippingAddress" => $request['body']['shippingAddress'],
    "orderId" => $order_id
  ];
  send($response);
}
