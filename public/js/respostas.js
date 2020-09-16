$(document).ready(function(){

    const resp1 = {
        0:'Nenhuma no último mês',
        1:'Menos de uma vez por semana',
        2:'Uma ou duas vezes por semana',
        3:'Três ou mais vezes na semana'
    }

    const resp2 = {
        0:'Nenhuma no último mês',
        1:'Menos de uma vez por semana',
        2:'Uma ou duas vezes por semana',
        3:'Três ou mais vezes na semana'
    }

    const sex = {
        'F':'Feminino',
        'M':'Masculino',
        'O':'Outros',
    }

    const faixa = {
        1:'18 a 24 anos ',
        2:'25 a 30 anos ',
        3:'31 anos ou mais',
    }

    const freq = {
        0:'1 ou 2 vezes na semana',
        1:'3 ou 4 vezes na semana',
        2:'Todos os dias da semana',
        3:'Não pratico atividade física'
    }

    const alim = {
        0:'Muito boa',
        1:'Boa',
        2:'Regular',
        3:'Ruim'
    }
    
    const temp = {
        0:'< ou = a 15 minutos',
        1:'16 a 30 minutos',
        2:'31 a 60 minutos',
        3:'> 60 minutos'
    }

    const res6 = {
        0:'Muito boa',
        1:'Boa',
        2:'Ruim',
        3:'Muito ruim '
    }

    const res9 = {
        0:'Nenhuma dificuldade',
        1:'Um problema leve',
        2:'Um problema razoável',
        3:'Um grande problema'
    }
    
    
    
     

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
                        $("#lista2").html("");
                        
                        $("#txtcx").html("Exportar "+data.data.length+" respostas numéricas")
                        $("#txtcx2").html("Exportar "+data.data.length+" respostas escritas")

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

                                $("#lista2").append(`

                                    <tr>
                                        <td class="quebra">${dataFormatadaFull(data.data[i].created_at)}</td>
                                        <td class="quebra">${data.data[i].email}</td>
                                        <td class="quebra">${sex[data.data[i].sexo]}</td>
                                        <td class="quebra">${faixa[data.data[i].faixa_etaria]}</td>
                                        <td class="quebra">${data.data[i].periodo}º</td>
                                        <td class="quebra">${freq[data.data[i].frequencia_exercicios]}</td>
                                        <td class="quebra">${alim[data.data[i].alimentacao]}</td>
                                        <td class="quebra">${data.data[i].p1}</td>
                                        <td class="quebra">${temp[data.data[i].p2]}</td>
                                        <td class="quebra">${data.data[i].p3}</td>
                                        <td class="quebra">${data.data[i].p4} horas</td>
                                        <td class="quebra">${resp1[data.data[i].p5a]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5b]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5c]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5d]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5e]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5f]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5g]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5h]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5i]}</td>
                                        <td class="quebra">${resp1[data.data[i].p5j]}</td>
                                        <td class="quebra">${res6[data.data[i].p6]}</td>
                                        <td class="quebra">${resp1[data.data[i].p7]}</td>
                                        <td class="quebra">${resp1[data.data[i].p8]}</td>
                                        <td class="quebra">${res9[data.data[i].p9]}</td>
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