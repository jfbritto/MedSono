<?php

use Illuminate\Support\Facades\Route;
use Telegram;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'RespostaController@index');
Route::get('/respostas', 'RespostaController@respostas');

Route::post('/add-resposta', 'RespostaController@addResposta');
Route::post('/carrega-respostas', 'RespostaController@buscaRespostas');


Route::post('/bot/getupdates', function() {
    $updates = Telegram::getUpdates();
    return (json_encode($updates));
});

Route::post('bot/sendmessage', function() {
    Telegram::sendMessage([
        'chat_id' => 'RECIPIENT_CHAT_ID',
        'text' => 'Hello world!'
    ]);
    return;
});