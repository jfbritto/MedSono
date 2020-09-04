$( document ).ready(function() {

    // $("input[name='pergunta1']").on("change", function(){
    //     alert($("input[name='pergunta1']:checked").val());
    // });

    $("input[name='pergunta7']").on("change", function(){

        let valor = $("input[name='pergunta7']:checked").val();
        console.log(valor);
        if(valor == 6){
            $('#p-8-1').prop('checked', true);
            $('#p-8-1').val(6);
        }else{
            $("input[name='pergunta8']:checked").prop('checked', false);
            $('#p-8-1').val(5);
        }
            
    });

    function calculoFinal()
    {
        estadoGeralSaude();
        capacidadeFuncional();
        aspectoFisico();
        aspectoEmocional();
        aspectoSocial();
        vitalidade();
        saudeMental();
        dor();
        verifyCheck();

        $("#card-resultados").show();
    }

    function estadoGeralSaude()
    {
        let resp1 = $("input[name='pergunta1']:checked").val();
        let resp11a = $("input[name='pergunta11a']:checked").val();
        let resp11b = $("input[name='pergunta11b']:checked").val();
        let resp11c = $("input[name='pergunta11c']:checked").val();
        let resp11d = $("input[name='pergunta11d']:checked").val();

        let soma = parseInt(resp1)+parseInt(resp11a)+parseInt(resp11b)+parseInt(resp11c)+parseInt(resp11d);
        let resultado = (soma-5)/20;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-egs").html("0");
            $("#porcentagem-egs").html("0%");
        }else{
            $("#soma-egs").html(soma);
            $("#porcentagem-egs").html(porcentagem+"%");
        }

    }

    function capacidadeFuncional()
    {
        let resp3a = $("input[name='pergunta3a']:checked").val();
        let resp3b = $("input[name='pergunta3b']:checked").val();
        let resp3c = $("input[name='pergunta3c']:checked").val();
        let resp3d = $("input[name='pergunta3d']:checked").val();
        let resp3e = $("input[name='pergunta3e']:checked").val();
        let resp3f = $("input[name='pergunta3f']:checked").val();
        let resp3g = $("input[name='pergunta3g']:checked").val();
        let resp3h = $("input[name='pergunta3h']:checked").val();
        let resp3i = $("input[name='pergunta3i']:checked").val();
        let resp3j = $("input[name='pergunta3j']:checked").val();

        let soma = parseInt(resp3a)+parseInt(resp3b)+parseInt(resp3c)+parseInt(resp3d)+parseInt(resp3e)+parseInt(resp3f)+parseInt(resp3g)+parseInt(resp3h)+parseInt(resp3i)+parseInt(resp3j);
        let resultado = (soma-10)/20;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-cf").html("0");
            $("#porcentagem-cf").html("0%");
        }else{
            $("#soma-cf").html(soma);
            $("#porcentagem-cf").html(porcentagem+"%");
        }
    }

    function aspectoFisico()
    {
        let resp4a = $("input[name='pergunta4a']:checked").val();
        let resp4b = $("input[name='pergunta4b']:checked").val();
        let resp4c = $("input[name='pergunta4c']:checked").val();
        let resp4d = $("input[name='pergunta4d']:checked").val();

        let soma = parseInt(resp4a)+parseInt(resp4b)+parseInt(resp4c)+parseInt(resp4d);
        let resultado = (soma-4)/4;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-af").html("0");
            $("#porcentagem-af").html("0%");
        }else{
            $("#soma-af").html(soma);
            $("#porcentagem-af").html(porcentagem+"%");
        }
    }

    function aspectoEmocional()
    {
        let resp5a = $("input[name='pergunta5a']:checked").val();
        let resp5b = $("input[name='pergunta5b']:checked").val();
        let resp5c = $("input[name='pergunta5c']:checked").val();

        let soma = parseInt(resp5a)+parseInt(resp5b)+parseInt(resp5c);
        let resultado = (soma-3)/3;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-ae").html("0");
            $("#porcentagem-ae").html("0%");
        }else{
            $("#soma-ae").html(soma);
            $("#porcentagem-ae").html(porcentagem+"%");
        }
    }

    function aspectoSocial()
    {
        let resp6 = $("input[name='pergunta6']:checked").val();
        let resp10 = $("input[name='pergunta10']:checked").val();

        let soma = parseInt(resp6)+parseInt(resp10);
        let resultado = (soma-2)/8;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-as").html("0");
            $("#porcentagem-as").html("0%");
        }else{
            $("#soma-as").html(soma);
            $("#porcentagem-as").html(porcentagem+"%");
        }
    }

    function vitalidade()
    {
        let resp9a = $("input[name='pergunta9a']:checked").val();
        let resp9e = $("input[name='pergunta9e']:checked").val();
        let resp9g = $("input[name='pergunta9g']:checked").val();
        let resp9i = $("input[name='pergunta9i']:checked").val();

        let soma = parseInt(resp9a)+parseInt(resp9e)+parseInt(resp9g)+parseInt(resp9i);
        let resultado = (soma-4)/20;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-v").html("0");
            $("#porcentagem-v").html("0%");
        }else{
            $("#soma-v").html(soma);
            $("#porcentagem-v").html(porcentagem+"%");
        }
    }

    function saudeMental()
    {
        let resp9b = $("input[name='pergunta9b']:checked").val();
        let resp9c = $("input[name='pergunta9c']:checked").val();
        let resp9d = $("input[name='pergunta9d']:checked").val();
        let resp9f = $("input[name='pergunta9f']:checked").val();
        let resp9h = $("input[name='pergunta9h']:checked").val();

        let soma = parseInt(resp9b)+parseInt(resp9c)+parseInt(resp9d)+parseInt(resp9f)+parseInt(resp9h);
        let resultado = (soma-5)/25;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-sm").html("0");
            $("#porcentagem-sm").html("0%");
        }else{
            $("#soma-sm").html(soma);
            $("#porcentagem-sm").html(porcentagem+"%");
        }
    }

    function dor()
    {
        let resp7 = $("input[name='pergunta7']:checked").val();
        let resp8 = $("input[name='pergunta8']:checked").val();

        let soma = parseInt(resp7)+parseInt(resp8);
        let resultado = (soma-2)/10;
        let porcentagem = resultado*100;
        porcentagem = parseFloat(porcentagem.toFixed(2))

        if(isNaN(soma) || isNaN(porcentagem)){
            $("#soma-d").html("0");
            $("#porcentagem-d").html("0%");
        }else{
            $("#soma-d").html(soma);
            $("#porcentagem-d").html(porcentagem+"%");
        }
    }

    $("input[type='radio']").on("click", function(){
        verifyCheck();
        // console.log("opa")
    });

    function verifyCheck()
    {
        let resp1   = $("input[name='pergunta1']:checked").val();
        let resp3a  = $("input[name='pergunta3a']:checked").val();
        let resp3b  = $("input[name='pergunta3b']:checked").val();
        let resp3c  = $("input[name='pergunta3c']:checked").val();
        let resp3d  = $("input[name='pergunta3d']:checked").val();
        let resp3e  = $("input[name='pergunta3e']:checked").val();
        let resp3f  = $("input[name='pergunta3f']:checked").val();
        let resp3g  = $("input[name='pergunta3g']:checked").val();
        let resp3h  = $("input[name='pergunta3h']:checked").val();
        let resp3i  = $("input[name='pergunta3i']:checked").val();
        let resp3j  = $("input[name='pergunta3j']:checked").val();
        let resp4a  = $("input[name='pergunta4a']:checked").val();
        let resp4b  = $("input[name='pergunta4b']:checked").val();
        let resp4c  = $("input[name='pergunta4c']:checked").val();
        let resp4d  = $("input[name='pergunta4d']:checked").val();
        let resp5a  = $("input[name='pergunta5a']:checked").val();
        let resp5b  = $("input[name='pergunta5b']:checked").val();
        let resp5c  = $("input[name='pergunta5c']:checked").val();
        let resp6   = $("input[name='pergunta6']:checked").val();
        let resp7   = $("input[name='pergunta7']:checked").val();
        let resp8   = $("input[name='pergunta8']:checked").val();
        let resp9a  = $("input[name='pergunta9a']:checked").val();
        let resp9b  = $("input[name='pergunta9b']:checked").val();
        let resp9c  = $("input[name='pergunta9c']:checked").val();
        let resp9d  = $("input[name='pergunta9d']:checked").val();
        let resp9e  = $("input[name='pergunta9e']:checked").val();
        let resp9f  = $("input[name='pergunta9f']:checked").val();
        let resp9g  = $("input[name='pergunta9g']:checked").val();
        let resp9h  = $("input[name='pergunta9h']:checked").val();
        let resp9i  = $("input[name='pergunta9i']:checked").val();
        let resp10  = $("input[name='pergunta10']:checked").val();
        let resp11a = $("input[name='pergunta11a']:checked").val();
        let resp11b = $("input[name='pergunta11b']:checked").val();
        let resp11c = $("input[name='pergunta11c']:checked").val();
        let resp11d = $("input[name='pergunta11d']:checked").val();

        let cont = 0;

        if( resp1 > 0)
            cont++;

        if( resp3a > 0)
            cont++;

        if( resp3b > 0)
            cont++;

        if( resp3c > 0)
            cont++;

        if( resp3d > 0)
            cont++;

        if( resp3e > 0)
            cont++;

        if( resp3f > 0)
            cont++;

        if( resp3g > 0)
            cont++;

        if( resp3h > 0)
            cont++;

        if( resp3i > 0)
            cont++;

        if( resp3j > 0)
            cont++;

        if( resp4a > 0)
            cont++;

        if( resp4b > 0)
            cont++;

        if( resp4c > 0)
            cont++;

        if( resp4d > 0)
            cont++;

        if( resp5a > 0)
            cont++;

        if( resp5b > 0)
            cont++;

        if( resp5c > 0)
            cont++;

        if( resp6 > 0)
            cont++;

        if( resp7 > 0)
            cont++;

        if( resp8 > 0)
            cont++;

        if( resp9a > 0)
            cont++;

        if( resp9b > 0)
            cont++;

        if( resp9c > 0)
            cont++;

        if( resp9d > 0)
            cont++;

        if( resp9e > 0)
            cont++;

        if( resp9f > 0)
            cont++;

        if( resp9g > 0)
            cont++;

        if( resp9h > 0)
            cont++;

        if( resp9i > 0)
            cont++;

        if( resp10 > 0)
            cont++;

        if( resp11a > 0)
            cont++;

        if( resp11b > 0)
            cont++;

        if( resp11c > 0)
            cont++;

        if( resp11d > 0)
            cont++;

        let respondidas = cont;
        let vazias = 35 - parseInt(respondidas);

        let tamanho = (100*parseInt(respondidas))/35;

        $("#resp-tot").removeClass("badge-success");
        $("#resp-tot").removeClass("badge-warning");
        $("#resp-tot").removeClass("badge-danger");

        if( cont <= 25 ){
            $("#resp-tot").addClass("badge-danger");
            changeTop(tamanho, 2);
        }else if( cont > 25 && cont < 35 ){
            $("#resp-tot").addClass("badge-warning");
            changeTop(tamanho, 3);
        }else if( cont == 35 ){
            $("#resp-tot").addClass("badge-success");
            changeTop(tamanho, 1);
        }
        
        $("#resp-tot").html(respondidas)

    }

    function changeTop(size, color)
    {
        cor = {1:"#28a745", 2:"#dc3545", 3:"#ffc107"};

        $(".top-bar-style").css("width", size+"%");
        $(".top-bar-style").css("background-color", cor[color]);
        $(".top-bar-style").css("border", "1px solid "+cor[color]);
    }

});