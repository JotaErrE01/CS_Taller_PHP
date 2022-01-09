<?php

function debuguear($variable) : string {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

// Escapa / Sanitizar el HTML
function s($html) : string {
    $s = htmlspecialchars($html);
    return $s;
}

function isAdmin() : void {
    $role = $_SESSION['role'] ?? '';
    if($role !== 'admin') {
        header('Location: /');
    }
}