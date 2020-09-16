<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Med Sono</title>

        <link rel="icon" href="/img/sleepico.png">

        <meta name="theme-color" content="#004694">

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name=”keywords” content="med sono, med, sono, pesquisa" />
        <!-- <meta property="og:url" content="http://medsono.jfbritto.com.br/" /> -->
        <meta property="type" content="website" />
        <meta property="og:title" content="MED SONO">
        <meta property="og:description" content="Índice da qualidade do sono de Pittsburgh">
        <meta property="og:image" content="/img/img.jpeg">
        <meta property="og:locale" content="pt_BR">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:image:width" content="640">
        <meta property="og:image:height" content="480">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/all.min.css">
        <link rel="stylesheet" href="/css/estilo.css">
        

    </head>
    <body style="background-color:#004694 !important">

        <div class="container-fluid mb-5" style="padding-top: 15px">

            @yield('body')
        
        </div>        

        <footer class="bg-black small text-center text-white-50 footer" style="padding: 10px">
            <div class="container">
                <div class="social d-flex justify-content-center">
                    <a target="_blank" href="https://www.instagram.com/bianchijf/" class="mx-2">
                        <i style="color: #fff; width: 30px" class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-filipi-britto-a7375a103/" class="mx-2">
                        <i style="color: #fff; width: 30px" class="fab fa-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://github.com/jfbritto" class="mx-2">
                        <i style="color: #fff; width: 30px" class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>

        <script src="/js/jquery-3.5.1.min.js" ></script>
        <script src="/js/bootstrap.bundle.min.js" ></script>
        <script src="/js/sweetalert.js"></script>
        <script src="/js/app.js"></script>
        <script src="/js/common.js"></script>
        <script src="/js/moment.js"></script>
        <script src="/js/calculos.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    
        @yield('js')
    </body>

</html>