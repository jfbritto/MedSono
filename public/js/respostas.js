$(document).ready(function(){

    carregaRespostas();

    function carregaRespostas()
    {

        Swal.queue([{
            title: 'Carregando...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            onOpen: () => {
                Swal.showLoading();
                $.post(window.location.origin + "/carrega-respostas", {

                }).then(function(data) {
                    if(data.status == 'success') {

                        $("#lista").html("");
                        
                        $("#txtcx").html("Exportar "+data.data.length+" respostas")

                        if(data.data.length > 0){
                            
                            for (var i in data.data) {

                                $("#lista").append(`

                                    <tr>
                                        <td class="quebra">${dataFormatadaFull(data.data[i].created_at)}</td>
                                        <td class="quebra">${data.data[i].email}</td>
                                        <td class="quebra">${data.data[i].sexo}</td>
                                        <td class="quebra">${data.data[i].faixa_etaria}</td>
                                        <td class="quebra">${data.data[i].periodo}</td>
                                        <td class="quebra">${data.data[i].frequencia_exercicios}</td>
                                        <td class="quebra">${data.data[i].alimentacao}</td>
                                        <td class="quebra">${data.data[i].p1}</td>
                                        <td class="quebra">${data.data[i].p2}</td>
                                        <td class="quebra">${data.data[i].p3}</td>
                                        <td class="quebra">${data.data[i].p4}</td>
                                        <td class="quebra">${data.data[i].p5a}</td>
                                        <td class="quebra">${data.data[i].p5b}</td>
                                        <td class="quebra">${data.data[i].p5c}</td>
                                        <td class="quebra">${data.data[i].p5d}</td>
                                        <td class="quebra">${data.data[i].p5e}</td>
                                        <td class="quebra">${data.data[i].p5f}</td>
                                        <td class="quebra">${data.data[i].p5g}</td>
                                        <td class="quebra">${data.data[i].p5h}</td>
                                        <td class="quebra">${data.data[i].p5i}</td>
                                        <td class="quebra">${data.data[i].p5j}</td>
                                        <td class="quebra">${data.data[i].p6}</td>
                                        <td class="quebra">${data.data[i].p7}</td>
                                        <td class="quebra">${data.data[i].p8}</td>
                                        <td class="quebra">${data.data[i].p9}</td>
                                        <td class="quebra">${data.data[i].componente1}</td>
                                        <td class="quebra">${data.data[i].componente2}</td>
                                        <td class="quebra">${data.data[i].componente3}</td>
                                        <td class="quebra">${data.data[i].componente4}</td>
                                        <td class="quebra">${data.data[i].componente5}</td>
                                        <td class="quebra">${data.data[i].componente6}</td>
                                        <td class="quebra">${data.data[i].componente7}</td>
                                        <td class="quebra">${data.data[i].resultado}</td>
                                    </tr>
                                `);

                            }

                        }else{

                            $(".totalBox").hide();
                            $(".resultBox").show();

                            $(".lista-box").append(`
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-center">
                                    Nenhum resultado encontrado.
                                </li>
                            `);
                        }


                    } else if (data.status == 'error') {

                        Swal.fire({
                            icon: 'error',
                            text: data.message,
                            showConfirmButton: false,
                            showCancelButton: true,
                            cancelButtonText: "OK",
                            onClose: () => {
                                search();
                            }
                        });
                    }

                    Swal.close();
                    
                }).catch();
            }
        }]);

    }

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

})