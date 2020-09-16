
    function componente1()
    {
        // valor da questão 6
        let resp = parseInt($("input[name='pergunta6']:checked").val());
        return resp;
    }

    function componente2()
    {
        // valor da questão 2 + valor da questão 5A
        let p2 = $("input[name='pergunta2']:checked").val();
        let p5a = $("input[name='pergunta5a']:checked").val();
        let resp = parseInt(p2)+parseInt(p5a)
        return resp;
    }

    function componente3()
    {
        // valor da questão 4
        let val = $("#p-4").val();

        let resp = 0;

        if(val >= 8)
            resp = 0
        else if(val <= 7 && val >= 6)
            resp = 1
        else if(val <= 5 && val >= 4)
            resp = 2
        else if(val <= 3)
            resp = 3

        return resp;

        // > 7 = 0
        // 6 - 7 = 1
        // 5 - 6 =2
        //  < 5 = 3
    }

    function componente4()
    {
        // x = valor da questão 3 - valor da questão 1
        let deitar = $("#p-3").val()
        let levantar = $("#p-1").val()

        let day1 = "20";
        if(levantar == "00:00" || levantar == "01:00" || levantar == "02:00" || levantar == "03:00")
            day1 = "21";

        var dtPartida  = day1+"/06/2017 "+levantar+":00";
        var dtChegada = "21/06/2017 "+deitar+":00";
      
        var ms = moment(dtChegada,"DD/MM/YYYY HH:mm:ss").diff(moment(dtPartida,"DD/MM/YYYY HH:mm:ss"));
        var d = moment.duration(ms);
        var horas_sono = parseInt(Math.floor(d.asHours()));
        
        // valor da questão 4 / x vezes 100 -> resposta em porcentagem
        let porcent = ((parseInt($("#p-4").val())/horas_sono)*100).toFixed(2);

        // dependendo da porcentagem o resultado será 0, 1, 2 ou 3

        let resp = 0;

        if(porcent > 85)
            resp = 0
        else if(porcent <= 84 && porcent >= 75)
            resp = 1
        else if(porcent <= 74 && porcent >= 65)
            resp = 2
        else if(porcent <= 64)
            resp = 3
            
        return resp;    

        // > 85% = 0
        // 75 - 84 = 1
        // 65 - 74 = 2
        // < 65 = 3
    }

    function componente5()
    {
        //soma a questão 5 de B a J
        let p5b = $("input[name='pergunta5b']:checked").val();
        let p5c = $("input[name='pergunta5c']:checked").val();
        let p5d = $("input[name='pergunta5d']:checked").val();
        let p5e = $("input[name='pergunta5e']:checked").val();
        let p5f = $("input[name='pergunta5f']:checked").val();
        let p5g = $("input[name='pergunta5g']:checked").val();
        let p5h = $("input[name='pergunta5h']:checked").val();
        let p5i = $("input[name='pergunta5i']:checked").val();
        let p5j = $("input[name='pergunta5j']:checked").val();

        let soma = parseInt(p5b)+parseInt(p5c)+parseInt(p5d)+parseInt(p5e)+parseInt(p5f)+parseInt(p5g)+parseInt(p5h)+parseInt(p5i)+parseInt(p5j);

        //dependendo da soma o resultado dará 0, 1, 2, ou 3

        let resp = 0;

        if(soma <= 27 && soma >= 19)
            resp = 3
        else if(soma <= 18 && soma >= 10)
            resp = 2
        else if(soma <= 9 && soma >= 1)
            resp = 1
        else if(soma = 0)
            resp = 0

        return resp;

        // 0 = 0
        // 1 - 9 = 1
        // 10 - 18 = 2
        // 19 - 27 = 3
    }

    function componente6()
    {
        // valor da questão 7
        let resp = $("input[name='pergunta7']:checked").val();

        return resp;
    }

    function componente7()
    {
        // valor da questão 8 + valor da questão 9
        let p8 = $("input[name='pergunta8']:checked").val();
        let p9 = $("input[name='pergunta9']:checked").val();
        
        let soma = parseInt(p8)+parseInt(p9);

        // dependendo do resultado da soma, o resultado será 0, 1, 2 ou 3

        let resp = 0;

        if(soma <= 7 && soma >= 5)
            resp = 3
        else if(soma <= 4 && soma >= 3)
            resp = 2
        else if(soma <= 2 && soma >= 1)
            resp = 1
        else if(soma = 0)
            resp = 0

        return resp;

        // 0 = 0
        // 1 - 2 =1
        // 3 - 4 =2
        // 5 - 7 =3
    }

    function resultadoFinal() 
    {

        Swal.fire({
            title: 'Atenção!',
            text: `Deseja realmente enviar suas respostas?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
          }).then((result) => {
            if (result.value) {

                if(validaCampos())
                {

                    Swal.queue([{
                        title: 'Validando...',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        onOpen: () => {
                    
                    
                            $.get(window.location.origin + "/email-repetido", {
                                email : $("#email").val(),
                            }).then(function(data) {
                            
                            
                                if(data.data.length == 0){


                                    let resultado = parseInt(componente1())+parseInt(componente2())+parseInt(componente3())+parseInt(componente4())+parseInt(componente5())+parseInt(componente6())+parseInt(componente7());

                                    let result = '';
                                    
                                    if(resultado >= 0 && resultado <= 4)
                                        result = 'Boa'
                                    else if(resultado >= 5 && resultado <= 10)
                                        result = 'Ruim'
                                    else if(resultado >= 11)
                                        result = 'Presença de disturbio do sono'

                                    Swal.queue([{
                                        title: 'Carregando...',
                                        allowOutsideClick: false,
                                        allowEscapeKey: false,
                                        onOpen: () => {
                                            Swal.showLoading();
                                            $.post(window.location.origin + "/add-resposta", {
                                                aceito : $("input[name='aceito']:checked").val(),
                                                email : $("#email").val(),
                                                sexo : $("input[name='geral-1']:checked").val(),
                                                faixa_etaria : $("input[name='geral-2']:checked").val(),
                                                periodo : $("#geral-3").val(),
                                                frequencia_exercicios : $("input[name='geral-4']:checked").val(),
                                                alimentacao : $("input[name='geral-5']:checked").val(),
                                                p1 : $("#p-1").val(),
                                                p2 : $("input[name='pergunta2']:checked").val(),
                                                p3 : $("#p-3").val(),
                                                p4 : $("#p-4").val(),
                                                p5a : $("input[name='pergunta5a']:checked").val(),
                                                p5b : $("input[name='pergunta5b']:checked").val(),
                                                p5c : $("input[name='pergunta5c']:checked").val(),
                                                p5d : $("input[name='pergunta5d']:checked").val(),
                                                p5e : $("input[name='pergunta5e']:checked").val(),
                                                p5f : $("input[name='pergunta5f']:checked").val(),
                                                p5g : $("input[name='pergunta5g']:checked").val(),
                                                p5h : $("input[name='pergunta5h']:checked").val(),
                                                p5i : $("input[name='pergunta5i']:checked").val(),
                                                p5j : $("input[name='pergunta5j']:checked").val(),
                                                p6 : $("input[name='pergunta6']:checked").val(),
                                                p7 : $("input[name='pergunta7']:checked").val(),
                                                p8 : $("input[name='pergunta8']:checked").val(),
                                                p9 : $("input[name='pergunta9']:checked").val(),
                                                componente1 : componente1(),
                                                componente2 : componente2(),
                                                componente3 : componente3(),
                                                componente4 : componente4(),
                                                componente5 : componente5(),
                                                componente6 : componente6(),
                                                componente7 : componente7(),
                                                resultado : result,
                                            }).then(function(data) {
                                                if(data.status == 'success') {
                            
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: `Respostas enviadas com sucesso!`,
                                                        text: `Resultado: ${resultado} - ${result}!`,
                                                        showConfirmButton: false,
                                                        showCancelButton: true,
                                                        cancelButtonText: "OK",
                                                        onClose: () => {
                                                            $("#questionario").hide();
                                                            $(".footer").hide();
                                                            $("#obrigado").show();
                                                        }
                                                    });
                            
                                                } else if (data.status == 'error') {

                                                    Swal.fire({
                                                        icon: 'error',
                                                        text: data.message,
                                                        showConfirmButton: false,
                                                        showCancelButton: true,
                                                        cancelButtonText: "OK",
                                                        onClose: () => {
                                                            
                                                        }
                                                    });
                                                }
                                            }).catch();
                                        }
                                    }]);



                                
                                        
                                }else{
                                    Swal.fire('Putz!','Você já havia feito o envio do formulário!','error')
                                    return false;
                                }
                                
                            }).catch();

                    }}]);
                    // resultado
                    // 0 - 4 = boa
                    // 5 - 10 = ruim
                    // > 10 = presença de disturbio do sono
                }

            }
        })
      
    }


    function validaCampos() 
    {
        //geral

        //verifica 'aceito'
        if($("input[name='aceito']:checked").val() == undefined){
            Swal.fire('Alerta!','Para concluir o questionário você precisará permitir que suas respostas sejam utilizadas!','warning')
            return false;
        }
        
        //verifica 'email'
        if($("#email").val() == ""){
            Swal.fire('Alerta!','Informe seu email!','warning')
            return false;
        }
        
        //verifica 'email' válido

        let field = $("#email").val();

        usuario = field.substring(0, field.indexOf("@"));
        dominio = field.substring(field.indexOf("@")+ 1, field.length);

        if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) && (usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1)&& (dominio.lastIndexOf(".") < dominio.length - 1)) {

        }else{
            Swal.fire('Alerta!','Email inválido!','warning')
            return false;
        }

        //verifica sexo
        if($("input[name='geral-1']:checked").val() == undefined){
            Swal.fire('Alerta!','Informe seu sexo!','warning')
            return false;
        }

        //verifica faixa etaria
        if($("input[name='geral-2']:checked").val() == undefined){
            Swal.fire('Alerta!','Informe sua faixa etária!','warning')
            return false;
        }

        //verifica periodo
        if($("#geral-3").val() == ""){
            Swal.fire('Alerta!','Informe seu período!','warning')
            return false;
        }

        //verifica frequencia
        if($("input[name='geral-4']:checked").val() == undefined){
            Swal.fire('Alerta!','Informe sua frequência em praticar atividades físicas!','warning')
            return false;
        }

        //verifica alimentação
        if($("input[name='geral-5']:checked").val() == undefined){
            Swal.fire('Alerta!','Informe a qualidade da sua alimentação!','warning')
            return false;
        }



        //perguntas

        //verifica p1
        if($("#p-1").val() == ""){
            Swal.fire('Alerta!','A pergunta 1 precisa ser preenchida!','warning')
            return false;
        }

        //verifica p2
        if($("input[name='pergunta2']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 2 precisa ser preenchida!','warning')
            return false;
        }

        //verifica p3
        if($("#p-3").val() == ""){
            Swal.fire('Alerta!','A pergunta 3 precisa ser preenchida!','warning')
            return false;
        }
        
        //verifica p4
        if($("#p-4").val() == ""){
            Swal.fire('Alerta!','A pergunta 4 precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5a
        if($("input[name='pergunta5a']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-A precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5b
        if($("input[name='pergunta5b']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-B precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5c
        if($("input[name='pergunta5c']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-C precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5d
        if($("input[name='pergunta5d']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-D precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5e
        if($("input[name='pergunta5e']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-E precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5f
        if($("input[name='pergunta5f']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-F precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5g
        if($("input[name='pergunta5g']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-G precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5h
        if($("input[name='pergunta5h']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-H precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5i
        if($("input[name='pergunta5i']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-I precisa ser preenchida!','warning')
            return false;
        }

        //verifica 5j
        if($("input[name='pergunta5j']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 5-J precisa ser preenchida!','warning')
            return false;
        }

        //verifica p6
        if($("input[name='pergunta6']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 6 precisa ser preenchida!','warning')
            return false;
        }

        //verifica p7
        if($("input[name='pergunta7']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 7 precisa ser preenchida!','warning')
            return false;
        }

        //verifica p8
        if($("input[name='pergunta8']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 8 precisa ser preenchida!','warning')
            return false;
        }

        //verifica p9
        if($("input[name='pergunta9']:checked").val() == undefined){
            Swal.fire('Alerta!','A pergunta 9 precisa ser preenchida!','warning')
            return false;
        }
        
        return true;
    }