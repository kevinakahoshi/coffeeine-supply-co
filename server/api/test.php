<?php

$response['body'] = [
  "message" => "This is a test"
];

send($response);

// if (empty($request['body'])) {
//   throw new ApiError('You are not allowed', 403);
// }

// send($response);
