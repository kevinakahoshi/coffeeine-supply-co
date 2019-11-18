<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;
  case '/api/test':
  case '/api/products':
  case '/api/health-check':
    require_once "..${request['path']}.php";
    exit;
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
