
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
        let resp = $("#p-4").val();
        return resp;
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
        if(validaCampos())
        {
            let resultado = parseInt(componente1())+parseInt(componente2())+parseInt(componente3())+parseInt(componente4())+parseInt(componente5())+parseInt(componente6())+parseInt(componente7());

            let result = '';
            
            if(resultado >= 0 && resultado <= 4)
                result = 'boa'
            else if(resultado >= 5 && resultado <= 10)
                result = 'ruim'
            else if(resultado >= 11)
                result = 'presença de disturbio do sono'
            
            console.log("aceito: "+$("input[name='aceito']:checked").val());
            console.log("email: "+$("#email").val());
            console.log("sexo: "+$("input[name='geral-1']:checked").val());
            console.log("faixa etaria: "+$("input[name='geral-2']:checked").val());
            console.log("periodo: "+$("#geral-3").val());
            console.log("frequencia: "+$("input[name='geral-4']:checked").val());
            console.log("alimentacao: "+$("input[name='geral-5']:checked").val());

            console.log("p1: "+$("#p-1").val());
            console.log("p2: "+$("input[name='pergunta2']:checked").val());
            console.log("p3: "+$("#p-3").val());
            console.log("p4: "+$("#p-4").val());

            console.log("p5a: "+$("input[name='pergunta5a']:checked").val());
            console.log("p5b: "+$("input[name='pergunta5b']:checked").val());
            console.log("p5c: "+$("input[name='pergunta5c']:checked").val());
            console.log("p5d: "+$("input[name='pergunta5d']:checked").val());
            console.log("p5e: "+$("input[name='pergunta5e']:checked").val());
            console.log("p5f: "+$("input[name='pergunta5f']:checked").val());
            console.log("p5g: "+$("input[name='pergunta5g']:checked").val());
            console.log("p5h: "+$("input[name='pergunta5h']:checked").val());
            console.log("p5i: "+$("input[name='pergunta5i']:checked").val());
            console.log("p5j: "+$("input[name='pergunta5j']:checked").val());

            console.log("p6: "+$("input[name='pergunta6']:checked").val());
            console.log("p7: "+$("input[name='pergunta7']:checked").val());
            console.log("p8: "+$("input[name='pergunta8']:checked").val());
            console.log("p9: "+$("input[name='pergunta9']:checked").val());

            console.log("componente1: "+componente1());
            console.log("componente2: "+componente2());
            console.log("componente3: "+componente3());
            console.log("componente4: "+componente4());
            console.log("componente5: "+componente5());
            console.log("componente6: "+componente6());
            console.log("componente7: "+componente7());
                            
            console.log("resultado: "+result);
            

            return result;

            // resultado
            // 0 - 4 = boa
            // 5 - 10 = ruim
            // > 10 = presença de disturbio do sono
        }
    }


    function validaCampos() 
    {
        //geral

        //verifica 'aceito'
        if($("input[name='aceito']:checked").val() == undefined){
            alert("Para concluir o questionário você precisará permitir que suas respostas sejam utilizadas!");
            return false;
        }
        
        //verifica 'email'
        if($("#email").val() == ""){
            alert("Informe seu email!");
            return false;
        }

        //verifica sexo
        if($("input[name='geral-1']:checked").val() == undefined){
            alert("Informe seu sexo!");
            return false;
        }

        //verifica faixa etaria
        if($("input[name='geral-2']:checked").val() == undefined){
            alert("Informe sua faixa etária!");
            return false;
        }

        //verifica periodo
        if($("#geral-3").val() == ""){
            alert("Informe seu período!");
            return false;
        }

        //verifica frequencia
        if($("input[name='geral-4']:checked").val() == undefined){
            alert("Informe sua frequência em praticar atividades físicas!");
            return false;
        }

        //verifica alimentação
        if($("input[name='geral-5']:checked").val() == undefined){
            alert("Informe a qualidade da sua alimentação!");
            return false;
        }



        //perguntas

        //verifica p1
        if($("#p-1").val() == ""){
            alert("A pergunta 1 precisa ser preenchida!");
            return false;
        }

        //verifica p2
        if($("input[name='pergunta2']:checked").val() == undefined){
            alert("A pergunta 2 precisa ser preenchida!");
            return false;
        }

        //verifica p3
        if($("#p-3").val() == ""){
            alert("A pergunta 3 precisa ser preenchida!");
            return false;
        }
        
        //verifica p4
        if($("#p-4").val() == ""){
            alert("A pergunta 4 precisa ser preenchida!");
            return false;
        }

        //verifica 5a
        if($("input[name='pergunta5a']:checked").val() == undefined){
            alert("A pergunta 5a precisa ser preenchida!");
            return false;
        }

        //verifica 5b
        if($("input[name='pergunta5b']:checked").val() == undefined){
            alert("A pergunta 5b precisa ser preenchida!");
            return false;
        }

        //verifica 5c
        if($("input[name='pergunta5c']:checked").val() == undefined){
            alert("A pergunta 5c precisa ser preenchida!");
            return false;
        }

        //verifica 5d
        if($("input[name='pergunta5d']:checked").val() == undefined){
            alert("A pergunta 5d precisa ser preenchida!");
            return false;
        }

        //verifica 5e
        if($("input[name='pergunta5e']:checked").val() == undefined){
            alert("A pergunta 5e precisa ser preenchida!");
            return false;
        }

        //verifica 5f
        if($("input[name='pergunta5f']:checked").val() == undefined){
            alert("A pergunta 5f precisa ser preenchida!");
            return false;
        }

        //verifica 5g
        if($("input[name='pergunta5g']:checked").val() == undefined){
            alert("A pergunta 5g precisa ser preenchida!");
            return false;
        }

        //verifica 5h
        if($("input[name='pergunta5h']:checked").val() == undefined){
            alert("A pergunta 5h precisa ser preenchida!");
            return false;
        }

        //verifica 5i
        if($("input[name='pergunta5i']:checked").val() == undefined){
            alert("A pergunta 5i precisa ser preenchida!");
            return false;
        }

        //verifica 5j
        if($("input[name='pergunta5j']:checked").val() == undefined){
            alert("A pergunta 5j precisa ser preenchida!");
            return false;
        }

        //verifica p6
        if($("input[name='pergunta6']:checked").val() == undefined){
            alert("A pergunta 6 precisa ser preenchida!");
            return false;
        }

        //verifica p7
        if($("input[name='pergunta7']:checked").val() == undefined){
            alert("A pergunta 7 precisa ser preenchida!");
            return false;
        }

        //verifica p8
        if($("input[name='pergunta8']:checked").val() == undefined){
            alert("A pergunta 8 precisa ser preenchida!");
            return false;
        }

        //verifica p9
        if($("input[name='pergunta9']:checked").val() == undefined){
            alert("A pergunta 9 precisa ser preenchida!");
            return false;
        }
        
        return true;
    }