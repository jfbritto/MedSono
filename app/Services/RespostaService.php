<?php

namespace App\Services;

use App\Resposta;
use DB;
use Exception;

class RespostaService
{
    public function index()
    {
        $response = [];

        try{

            $resposta = DB::select( DB::raw("select * from respostas order by created_at desc"));

            $response = ['status' => 'success', 'data' => $resposta];
        }catch(Exception $e){
            $response = ['status' => 'error', 'data' => $e->getMessage()];
        }

        return $response;
    }

    public function addResposta(array $data)
    {
        $response = [];

        try{

            DB::beginTransaction();

            $resposta = Resposta::create($data);

            DB::commit();

            $response = ['status' => 'success', 'data' => $resposta];

        }catch(Exception $e){
            DB::rollBack();
            $response = ['status' => 'error', 'data' => $e->getMessage()];
        }

        return $response;
    }

}