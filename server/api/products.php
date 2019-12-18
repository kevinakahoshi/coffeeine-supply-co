<?php
if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = check_connection($link, $request);
  $response['body'] = $message;
  send($response);
}

function check_connection($link, $request) {
  $requestQuery = $request['query']['productId'];
  $productId = intval($requestQuery);
  $isNumeric = is_numeric($requestQuery);
  $isSet = isset($requestQuery);

  if (!$isSet) {
    $sqlQuery = 'SELECT productId, name, price, image, shortDescription FROM products';
  } else if ($isSet) {
    if ($isNumeric && $productId > 0) {
      $sqlQuery = "SELECT *
                     FROM products
                    WHERE productId=$productId";
    } else {
      throw new ApiError('Product ID is not valid', 400);
    }
  }

  $response = check_products($link, $sqlQuery);

  $data = mysqli_fetch_all($response, MYSQLI_ASSOC);
  return $data;
}

function check_products($link, $sqlQuery) {
  $checkRequest = mysqli_query($link, $sqlQuery);
  if ($checkRequest->num_rows === 0) {
    throw new ApiError('Product does not exist', 404);
  }
  return $checkRequest;
}
