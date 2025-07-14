<?php

use Illuminate\Support\Facades\Route;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);
Route::statamic('projects', 'projects.index', ['title' => 'Projects']);
