$(document).ready(function(){
    
    instalacoes_abertas();

    function instalacoes_abertas(){

        $.post("/instalacoes-abertas", {

        }, 'json').then(function(data) {
        
            data = JSON.parse(data);

            $(".lista1").html("");
            let total = 0;

            data.data.cidade.forEach(function(item){

                total = total + item.y;

                $(".lista1").append(`
                    <li class="list-group-item d-flex justify-content-between align-items-center cursor-pointer" data-cidade="${item.name.split(" (")[0]}" data-total="${item.y}" >
                        ${item.name.split(" (")[0]}
                        <span class="badge badge-primary badge-pill">${item.y}</span>
                    </li>
                `);
                
            });

            $(".total-instalacoes").removeClass("d-none");
            $(".total-instalacoes").html(total);
        
        
        }); 

    }

    $(".lista1").on("click", ".list-group-item", function(){
        let cidade = $(this).data("cidade");
        let total = $(this).data("total");

        $("#cidadeTituloModal").html(`${cidade} <span class="badge badge-primary">${total}</span>`);

        instalacoes_abertas_plano_setor(cidade)
    })

    function instalacoes_abertas_plano_setor(cidade){

        $(".lista2").html("");
        $(".lista2").append(`<div class="text-center" style="color: #ce492f"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>`);

        $(".lista3").html("");
        $(".lista3").append(`<div class="text-center" style="color: #ce492f"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>`);

        $("#modalPlanoSetor").modal("show");

        $.post("/instalacoes-abertas-plano-setor", {
            cidade:cidade
        }, 'json').then(function(data) {
        
            data = JSON.parse(data);

            $(".lista2").html("");
            $(".lista3").html("");            

            data.data.planos.forEach(function(item){

                $(".lista2").append(`
                    <li class="list-group-item d-flex justify-content-between align-items-center cursor-pointer">
                        ${item.name}
                        <span class="badge badge-primary badge-pill">${item.y}</span>
                    </li>
                `);
                
            });

            data.data.setores.forEach(function(item){

                $(".lista3").append(`
                    <li class="list-group-item d-flex justify-content-between align-items-center cursor-pointer">
                        ${item.name}
                        <span class="badge badge-primary badge-pill">${item.y}</span>
                    </li>
                `);
                
            });
        
        }); 

    }

});