<?php
$Server = 'localhost';
$User = 'root';
$Pass = '';
$DB = 'springs_ministries';

try {
    //Create new PDO instance
    $pdo = new PDO("mysql:host=$host;dbname=$DB", $User, $Pass);
    // Set PDO error mode exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Handle connection error
    echo "Connection Failed: " . $e->getMessage();
}
