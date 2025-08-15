<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ValidationController extends Controller
{
    //
    public function validarUsuario(Request $request){
        $validarDatos = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'email',
            'age' => 'required|integer:strict|min:18'
        ]);
        if($validarDatos->fails()){
            return response()->json(['message'=>'Hay errores en los datos', $validarDatos->errors()],400);
        }else{
            return response()->json(['message'=>'Éxito', ],200);
        }

    }
}
