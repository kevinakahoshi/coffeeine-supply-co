<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $sessionData = isset($_SESSION[`cart_id`]);
  if (!$sessionData) {
    $response['body'] = [];
    send($response);
  }
}

if ($request['method'] === 'POST') {
  return null;
}
