@extends('base')

@section('body')


<div class="row">
    <div class="col-md-12">

        <div class="card border-info">
            <div class="card-header bg-default">
                <a title="Exportar caixas" id="csv_origem" download="respostas.xls" href="#" onclick="return ExcellentExport.excel(this, 'tabela', 'Sheet Name Here');" class="btn btn-success"> <span id="txtcx">Exportar</span> <i class="fas fa-file-excel"></i></a>
            </div>
            <div class="card-body">

                <div class="table-responsive">

                    <table class="table table-condensed table-striped table-hover table-sm table-bordered" id="tabela" style="white-space: pre-wrap;">
                        <thead>
                            <tr>
                                <th class="quebra">Data</th>
                                <th class="quebra">Email</th>
                                <th class="quebra">Sexo</th>
                                <th class="quebra">Faixa Etária</th>
                                <th class="quebra">Período</th>
                                <th class="quebra">Frequencia Exercicios</th>
                                <th class="quebra">Alimentacao</th>
                                <th class="quebra">P1</th>
                                <th class="quebra">P2</th>
                                <th class="quebra">P3</th>
                                <th class="quebra">P4</th>
                                <th class="quebra">P5-A</th>
                                <th class="quebra">P5-B</th>
                                <th class="quebra">P5-C</th>
                                <th class="quebra">P5-D</th>
                                <th class="quebra">P5-E</th>
                                <th class="quebra">P5-F</th>
                                <th class="quebra">P5-G</th>
                                <th class="quebra">P5-H</th>
                                <th class="quebra">P5-I</th>
                                <th class="quebra">P5-J</th>
                                <th class="quebra">P6</th>
                                <th class="quebra">P7</th>
                                <th class="quebra">P8</th>
                                <th class="quebra">P9</th>
                                <th class="quebra">Componente1</th>
                                <th class="quebra">Componente2</th>
                                <th class="quebra">Componente3</th>
                                <th class="quebra">Componente4</th>
                                <th class="quebra">Componente5</th>
                                <th class="quebra">Componente6</th>
                                <th class="quebra">Componente7</th>
                                <th class="quebra">Resultado</th>
                            </tr>
                        </thead>
                        <tbody id="lista">

                        </tbody>
                    </table>
                    
                </div>
         
            </div>
        </div>

    </div>
</div>

@stop

@section('js')
    <script src="/js/respostas.js"></script>
    <script type="text/javascript" src="/js/excellentexport/dist/excellentexport.js"></script>
    <script type="text/javascript" src="/js/excellentexport/dist/require.js"></script>
@stop