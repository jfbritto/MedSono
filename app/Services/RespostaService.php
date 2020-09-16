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

            $total = DB::table('respostas')->select('id')->count();

            // jf: 588625052
            // grupo: -1001439503327

            $msg = "Nova resposta!%0AEmail: ".$data['email']."%0APeríodo: ".$data['periodo']."º%0AResultado: ".$data['resultado']."%0A%0ATotal respostas: ".$total;
            file_get_contents('https://api.telegram.org/bot1366316005:AAHoexLlhQeRJ5OJEAWPF_dj1dmaSUb1iEc/sendMessage?chat_id=-1001439503327&text='.$msg.'');

            $response = ['status' => 'success', 'data' => $resposta];

        }catch(Exception $e){
            DB::rollBack();
            $response = ['status' => 'error', 'data' => $e->getMessage()];
        }

        return $response;
    }

    public function emailRepetido($email)
    {
        $response = [];

        try{

            $resposta = DB::select( DB::raw("select * from respostas where email like '%".$email."%' "));

            $response = ['status' => 'success', 'data' => $resposta];
        }catch(Exception $e){
            $response = ['status' => 'error', 'data' => $e->getMessage()];
        }

        return $response;
    }

}