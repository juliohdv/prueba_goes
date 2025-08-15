<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ValidationController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TareaController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/validar/usuario',[ValidationController::class, 'validarUsuario'])->name('validarUsuario');
Route::get('productos/obtener', [ProductController::class, 'obtener'])->name('obtenerProductos');
Route::get('tareas/obtener', [TareaController::class, 'index'])->name('obtenerTareas');
Route::post('tareas/crear', [TareaController::class, 'store'])->name('crearTarea');
Route::post('tareas/actualizar', [TareaController::class, 'update'])->name('actualizarTarea');
Route::post('tareas/filtrar', [TareaController::class, 'filter'])->name('filtrarTareas');