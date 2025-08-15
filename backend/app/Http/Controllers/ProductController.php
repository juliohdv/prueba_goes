<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function obtener(Request $request){
        $productos = array(
            ["name" => "Producto A", "price" => 100],
            ["name" => "Producto B", "price" => 200],
            ["name" => "Producto C", "price" => 300],
        );
        return response()->json(["message"=>"Exito", "productos"=>$productos],200);
    }
}
