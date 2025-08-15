<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ValidationController;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/validar/usuario',[ValidationController::class, 'validarUsuario'])->name('validarUsuario');
Route::get('productos/obtener', [ProductController::class, 'obtener'])->name('obtenerProductos');