<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\RespostaService;

class RespostaController extends Controller
{
    private $respostaService;

    public function __construct(RespostaService $respostaService)
    {
        $this->respostaService = $respostaService;
    }

     //exibir questionario
     public function index()
     {
        return view('questionario');
     }

     //exibir respostas
     public function respostas()
     {
         return view('respostas');
     }

    //cadastrar resposta
    public function addResposta(Request $request)
    {

        $data = [
            'aceito' => $request->aceito,
            'email' => $request->email,
            'sexo' => $request->sexo,
            'faixa_etaria' => $request->faixa_etaria,
            'periodo' => $request->periodo,
            'frequencia_exercicios' => $request->frequencia_exercicios,
            'alimentacao' => $request->alimentacao,
            'p1' => $request->p1,
            'p2' => $request->p2,
            'p3' => $request->p3,
            'p4' => $request->p4,
            'p5a' => $request->p5a,
            'p5b' => $request->p5b,
            'p5c' => $request->p5c,
            'p5d' => $request->p5d,
            'p5e' => $request->p5e,
            'p5f' => $request->p5f,
            'p5g' => $request->p5g,
            'p5h' => $request->p5h,
            'p5i' => $request->p5i,
            'p5j' => $request->p5j,
            'p6' => $request->p6,
            'p7' => $request->p7,
            'p8' => $request->p8,
            'p9' => $request->p9,
            'componente1' => $request->componente1,
            'componente2' => $request->componente2,
            'componente3' => $request->componente3,
            'componente4' => $request->componente4,
            'componente5' => $request->componente5,
            'componente6' => $request->componente6,
            'componente7' => $request->componente7,
            'resultado' => $request->resultado,
        ];

        $response = $this->respostaService->addResposta($data);

        if($response['status'] == 'success'){

            return response()->json(['status'=>'success'], 201);
        }

        return response()->json(['status'=>'error', 'message'=>$response['data']], 201);
    }

    //buscar todas as caixas cadastradas
    public function buscaRespostas()
    {
        $response = $this->respostaService->index();

        if($response['status'] == 'success')
            return response()->json(['status'=>'success', 'data'=>$response['data']], 201);
            
        return response()->json(['status'=>'error', 'message'=>$response['data']], 500);
    }
}