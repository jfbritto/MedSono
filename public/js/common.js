$(document).ready(function(){

    $('[data-toggle="popover"]').popover()

    $("#sair").on("click", function(){

        Swal.queue([{
            title: 'Desconectando...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            onOpen: () => {
                Swal.showLoading();
                $.post("/deslogar", function(data){ 
                    window.location = "/";
                },'json');
            }
        }]);

    });

    function dataFormatadaFull(data)
    {
        if(data == null || data == undefined || data == ''){
            return '';
        }else{

            const dt = data.split(' ');

            const dia = dt[0].split('-')[2];
            const mes = dt[0].split('-')[1];
            const ano = dt[0].split('-')[0];
            const hora = dt[1].split(':')[0];
            const min = dt[1].split(':')[1];

            return `${dia}/${mes}/${ano} ${hora}:${min}`;
        }
    }

});