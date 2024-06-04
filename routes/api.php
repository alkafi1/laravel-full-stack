<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/signUp', [AuthController::class, 'signUp'])->name('signUp');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');