<?php

namespace App\Http\Controllers;

use App\Models\Tarea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TareaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $tareas = Tarea::get();
        return response()->json(['tareas'=>$tareas],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validarDatos = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'status' => 'required|boolean'
        ]);
        $tarea = Tarea::create($validarDatos);
        return response()->json(['success'=>true, 'tarea'=>$tarea ],200);
    }

    /**
     * Filter the specified resource.
     */
    public function filter(Request $request)
    {
        //
        if($request->filtro == '1'){
            $tareas = Tarea::where('status','=', 1)->get();
        }else if($request->filtro == '2'){
            $tareas = Tarea::where('status','=', 0)->get();
        }else{
            $tareas = Tarea::get();
        }
        
        return response()->json(['tareas'=>$tareas],200);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $tarea = Tarea::find($request->id);
        $tarea->status = $request->status;
        $tarea->save();
        return response()->json(['success'=>true,'tarea'=>$tarea],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tarea $tarea)
    {
        //
    }
}
