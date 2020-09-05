@extends('base')

@section('body')

<h1 class="display-4 text-center"><img src="/img/unifacig_branco.png" class="img img-fluid rounded "></h1>

<div class="text-center" id="obrigado" style="color: #fff; display: none">
    <h2 class="display-4 text-center" >
        <img src="/img/cat.jpg" style="margin-bottom: 10px; max-width: 300px" class="img img-fluid rounded-circle rounded ">
        <br>
        Obrigado!
    </h2>
    <a style="margin-top: 20px;" href="/" class="btn btn-light btn-lg">Novo Envio</a>
</div>

<div id="questionario">

    <div class="jumbotron text-center" style="margin-bottom: 0rem;">
        <p class="lead text-center font-weight-bold"> <img src="/img/doctor.png" width="40"> MedSono <img style="margin-left: 5px;" src="/img/sleep.png" width="40"> </p>
        <hr class="my-4">
        <p class="lead text-center font-weight-bold">Índice da qualidade do sono de Pittsburgh</p>
        
        <p class="lead text-justify">Convidamos você, estudante de Medicina do Centro Universitário UNIFACIG, a participar como voluntário da nossa pesquisa “Avaliação da Qualidade do Sono de Estudantes de Medicina do Centro Universitário UNIFACIG por meio do Índice de Qualidade do Sono de Pittsburgh (PSQUI)”.</p>
        
        <p class="lead text-justify">Objetiva-se com isso, contribuir na avaliação da percepção subjetiva da qualidade do sono dos estudantes do curso de Medicina do Centro Universitário UNIFACIG por meio do PSQUI, pois nota-se uma alta prevalência de distúrbios do sono e impactos no desempenho cognitivo entre esses estudantes.</p>
   
        <p class="lead text-justify">A sua participação será no sentido de realizar o preenchimento do questionário eletrônico composto por 5 questões gerais e 9 questões relacionadas com o PSQUI. Ao final, serão contabilizadas essas informações por meio de escores para que seja determinada a qualidade do sono dos acadêmicos. A coleta dos dados será feita estritamente por meio do formulário online.</p>
        
        <p class="lead text-justify">O tempo gasto no preenchimento do questionário é sucinto e haverá absoluto sigilo em toda a pesquisa. Você pode solicitar qualquer esclarecimento por meio do contato com algum dos pesquisadores ou com o Conselho de Ética em Pesquisa. É garantido o direito de não aceitar participar ou de retirar sua permissão, sem qualquer prejuízo. Assegura-se assistência durante toda pesquisa, bem como livre acesso a todas as informações sobre o estudo. Ressalta-se que não há nenhum valor econômico por sua participação.</p>
        
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-body">

                    <div class="form-check" style="margin-bottom: 10px">
                        <input class="form-check-input" type="checkbox" name="aceito" id="aceito" value="1">
                        <label class="form-check-label" for="aceito">
                            &nbsp; Permito que minhas respostas sejam utilizadas
                        </label>
                    </div>

                    <input type="email" class="form-control" placeholder="Informe seu e-mail" name="email" id="email">

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-body">

                    <label>Sexo:</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-1" id="geral-1-a" value="F">
                        <label class="form-check-label" for="geral-1-a">
                            &nbsp; Feminino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-1" id="geral-1-b" value="M">
                        <label class="form-check-label" for="geral-1-b">
                            &nbsp; Masculino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-1" id="geral-1-c" value="O">
                        <label class="form-check-label" for="geral-1-c">
                            &nbsp; Outros
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-body">

                    <label>Faixa etária:</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-2" id="geral-2-a" value="1">
                        <label class="form-check-label" for="geral-2-a">
                            &nbsp; 18 a 24 anos
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-2" id="geral-2-b" value="2">
                        <label class="form-check-label" for="geral-2-b">
                            &nbsp; 25 a 30 anos
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-2" id="geral-2-c" value="3">
                        <label class="form-check-label" for="geral-2-c">
                            &nbsp; 31 anos ou mais
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-body">

                    <label>Período atual da faculdade:</label>      

                    <select class="form-control" name="geral-3" id="geral-3">
                        <option value="">Selecione</option>
                        <option value="2">2º</option>
                        <option value="4">4º</option>
                        <option value="6">6º</option>
                        <option value="8">8º</option>
                        <option value="10">10º</option>
                        <option value="12">12º</option>
                    </select>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-body">

                    <label>Com que frequência você pratica atividade física?</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-4" id="geral-4-a" value="1">
                        <label class="form-check-label" for="geral-4-a">
                            &nbsp; 1 ou 2 vezes na semana   
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-4" id="geral-4-b" value="2">
                        <label class="form-check-label" for="geral-4-b">
                            &nbsp; 3 ou 4 vezes na semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-4" id="geral-4-c" value="3">
                        <label class="form-check-label" for="geral-4-c">
                            &nbsp; todos os dias da semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-4" id="geral-4-d" value="4">
                        <label class="form-check-label" for="geral-4-d">
                            &nbsp; não pratico atividade física
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-body">

                    <label>Como você considera a qualidade da sua alimentação?</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-5" id="geral-5-a" value="1">
                        <label class="form-check-label" for="geral-5-a">
                            &nbsp; Muito boa
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-5" id="geral-5-b" value="2">
                        <label class="form-check-label" for="geral-5-b">
                            &nbsp; Boa
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-5" id="geral-5-c" value="3">
                        <label class="form-check-label" for="geral-5-c">
                            &nbsp; Regular
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="geral-5" id="geral-5-d" value="4">
                        <label class="form-check-label" for="geral-5-d">
                            &nbsp; Ruim
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 1 
                </div>
                <div class="card-body">

                    <label>Durante o último mês (setembro), qual foi a hora usual de deitar-se?</label>                             
                    <select class="form-control" name="pergunta1" id="p-1">
                        <option value="">Selecione</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                        <option value="00:00">00:00</option>
                        <option value="01:00">01:00</option>
                        <option value="02:00">02:00</option>
                        <option value="03:00">03:00</option>
                    </select>

                </div>
            </div>
            
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 2
                </div>
                <div class="card-body">

                    <label>Durante o último mês (setembro), quanto tempo (em minutos) você geralmente levou para dormir à noite?</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta2" id="p-2-a" value="0">
                        <label class="form-check-label" for="p-2-a">
                            &nbsp; < ou = a 15 minutos
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta2" id="p-2-b" value="1">
                        <label class="form-check-label" for="p-2-b">
                            &nbsp; 16 a 30 minutos
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta2" id="p-2-c" value="2">
                        <label class="form-check-label" for="p-2-c">
                            &nbsp; 31 a 60 minutos
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta2" id="p-2-d" value="3">
                        <label class="form-check-label" for="p-2-d">
                            &nbsp; > 60 minutos
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 3
                </div>
                <div class="card-body">

                    <label>Durante o último mês (setembro), qual foi a hora usual de levantar-se pela manhã?</label>                             
                    <select class="form-control" name="pergunta3" id="p-3">
                        <option value="">Selecione</option>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                    </select>

                </div>
            </div>
            
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 4
                </div>
                <div class="card-body">

                    <label>Durante o último mês (setembro), quantas horas de sono você teve por noite? (Esta pode ser diferente do número de horas que você ficou na cama) </label>                             
                    <select class="form-control" name="pergunta4" id="p-4">
                        <option value="">Selecione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </select>

                </div>
            </div>
            
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default" style="border-bottom: none;">
                    Durante o último mês (setembro), com que frequência você teve dificuldade para dormir porque você:
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - A
                </div>
                <div class="card-body">
                    
                    <label>Não conseguiu adormecer em até 30 minutos:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5a" id="p-5-1-a" value="0">
                        <label class="form-check-label" for="p-5-1-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5a" id="p-5-1-b" value="1">
                        <label class="form-check-label" for="p-5-1-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5a" id="p-5-1-c" value="2">
                        <label class="form-check-label" for="p-5-1-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5a" id="p-5-1-d" value="3">
                        <label class="form-check-label" for="p-5-1-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - B
                </div>
                <div class="card-body">
                    
                    <label>Acordou no meio da noite ou de manhã cedo:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5b" id="p-5-2-a" value="0">
                        <label class="form-check-label" for="p-5-2-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5b" id="p-5-2-b" value="1">
                        <label class="form-check-label" for="p-5-2-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5b" id="p-5-2-c" value="2">
                        <label class="form-check-label" for="p-5-2-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5b" id="p-5-2-d" value="3">
                        <label class="form-check-label" for="p-5-2-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
    </div>
    
    <div class="row">
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - C
                </div>
                <div class="card-body">
                    
                    <label>Precisou levantar para ir ao banheiro:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5c" id="p-5-3-a" value="0">
                        <label class="form-check-label" for="p-5-3-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5c" id="p-5-3-b" value="1">
                        <label class="form-check-label" for="p-5-3-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5c" id="p-5-3-c" value="2">
                        <label class="form-check-label" for="p-5-3-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5c" id="p-5-3-d" value="3">
                        <label class="form-check-label" for="p-5-3-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
        <div class="col-md-6">
            
            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - D
                </div>
                <div class="card-body">
                    
                    <label>Não conseguiu respirar confortavelmente:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5d" id="p-5-4-a" value="0">
                        <label class="form-check-label" for="p-5-4-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5d" id="p-5-4-b" value="1">
                        <label class="form-check-label" for="p-5-4-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5d" id="p-5-4-c" value="2">
                        <label class="form-check-label" for="p-5-4-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5d" id="p-5-4-d" value="3">
                        <label class="form-check-label" for="p-5-4-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
        <div class="col-md-6">
            
            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - E
                </div>
                <div class="card-body">
                    
                    <label>Tossiu ou roncou forte:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5e" id="p-5-5-a" value="0">
                        <label class="form-check-label" for="p-5-5-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5e" id="p-5-5-b" value="1">
                        <label class="form-check-label" for="p-5-5-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5e" id="p-5-5-c" value="2">
                        <label class="form-check-label" for="p-5-5-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5e" id="p-5-5-d" value="3">
                        <label class="form-check-label" for="p-5-5-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - F
                </div>
                <div class="card-body">
                    
                    <label>Sentiu muito frio:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5f" id="p-5-6-a" value="0">
                        <label class="form-check-label" for="p-5-6-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5f" id="p-5-6-b" value="1">
                        <label class="form-check-label" for="p-5-6-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5f" id="p-5-6-c" value="2">
                        <label class="form-check-label" for="p-5-6-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5f" id="p-5-6-d" value="3">
                        <label class="form-check-label" for="p-5-6-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
    </div>
    
    
    <div class="row">
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - G
                </div>
                <div class="card-body">
                    
                    <label>Sentiu muito calor:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5g" id="p-5-7-a" value="0">
                        <label class="form-check-label" for="p-5-7-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5g" id="p-5-7-b" value="1">
                        <label class="form-check-label" for="p-5-7-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5g" id="p-5-7-c" value="2">
                        <label class="form-check-label" for="p-5-7-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5g" id="p-5-7-d" value="3">
                        <label class="form-check-label" for="p-5-7-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - H
                </div>
                <div class="card-body">
                    
                    <label>Teve sonhos ruins:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5h" id="p-5-8-a" value="0">
                        <label class="form-check-label" for="p-5-8-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5h" id="p-5-8-b" value="1">
                        <label class="form-check-label" for="p-5-8-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5h" id="p-5-8-c" value="2">
                        <label class="form-check-label" for="p-5-8-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5h" id="p-5-8-d" value="3">
                        <label class="form-check-label" for="p-5-8-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - I
                </div>
                <div class="card-body">
                    
                    <label>Teve dor:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5i" id="p-5-9-a" value="0">
                        <label class="form-check-label" for="p-5-9-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5i" id="p-5-9-b" value="1">
                        <label class="form-check-label" for="p-5-9-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5i" id="p-5-9-c" value="2">
                        <label class="form-check-label" for="p-5-9-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5i" id="p-5-9-d" value="3">
                        <label class="form-check-label" for="p-5-9-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
        <div class="col-md-6">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 5 - J
                </div>
                <div class="card-body">
                    
                    <label>Outras razões:</label>   

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5j" id="p-5-10-a" value="0">
                        <label class="form-check-label" for="p-5-10-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5j" id="p-5-10-b" value="1">
                        <label class="form-check-label" for="p-5-10-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5j" id="p-5-10-c" value="2">
                        <label class="form-check-label" for="p-5-10-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta5j" id="p-5-10-d" value="3">
                        <label class="form-check-label" for="p-5-10-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>
    
                </div>
            </div>

        </div>
    </div>
    
    
    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 6
                </div>
                <div class="card-body">

                    <label>Durante o último mês (setembro), como você classificaria a qualidade do seu sono de uma maneira geral:</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta6" id="p-6-a" value="0">
                        <label class="form-check-label" for="p-6-a">
                            &nbsp; Muito boa
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta6" id="p-6-b" value="1">
                        <label class="form-check-label" for="p-6-b">
                            &nbsp; Boa
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta6" id="p-6-c" value="2">
                        <label class="form-check-label" for="p-6-c">
                            &nbsp; Ruim
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta6" id="p-6-d" value="3">
                        <label class="form-check-label" for="p-6-d">
                            &nbsp; Muito ruim
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 7
                </div>
                <div class="card-body">

                    <label>Durante o último mês (setembro), com que frequência você tomou medicamento (prescrito ou por conta própria) para lhe ajudar?</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta7" id="p-7-a" value="0">
                        <label class="form-check-label" for="p-7-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta7" id="p-7-b" value="1">
                        <label class="form-check-label" for="p-7-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta7" id="p-7-c" value="2">
                        <label class="form-check-label" for="p-7-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta7" id="p-7-d" value="3">
                        <label class="form-check-label" for="p-7-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 8
                </div>
                <div class="card-body">

                    <label>No último mês (setembro), com que frequência você teve dificuldade para ficar acordado enquanto dirigia, comia ou participava de uma atividade social? (festa, reunião de amigos)</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta8" id="p-8-a" value="0">
                        <label class="form-check-label" for="p-8-a">
                            &nbsp; Nenhuma no último mês
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta8" id="p-8-b" value="1">
                        <label class="form-check-label" for="p-8-b">
                            &nbsp; Menos de uma vez por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta8" id="p-8-c" value="2">
                        <label class="form-check-label" for="p-8-c">
                            &nbsp; Uma ou duas vezes por semana
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta8" id="p-8-d" value="3">
                        <label class="form-check-label" for="p-8-d">
                            &nbsp; Três ou mais vezes na semana
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12">

            <div class="card border-info">
                <div class="card-header bg-default">
                    Questão 9
                </div>
                <div class="card-body">

                    <label>Durante o último mês (setembro), quão problemático foi pra você manter o entusiasmo (ânimo) para fazer as coisas (suas atividades habituais)?</label>      

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta9" id="p-9-a" value="0">
                        <label class="form-check-label" for="p-9-a">
                            &nbsp; Nenhuma dificuldade
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta9" id="p-9-b" value="1">
                        <label class="form-check-label" for="p-9-b">
                            &nbsp; Um problema leve
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta9" id="p-9-c" value="2">
                        <label class="form-check-label" for="p-9-c">
                            &nbsp; Um problema razoável
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta9" id="p-9-d" value="3">
                        <label class="form-check-label" for="p-9-d">
                            &nbsp; Um grande problema
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </div>
    
    <button class="btn btn-light btn-lg btn-block" style="margin-bottom: 50px;margin-top: 50px;" data-toggle="modal" onclick="resultadoFinal()">CALCULAR</button>

</div>

@stop

@section('js')
    <script src="/js/calculos.js"></script>
@stop