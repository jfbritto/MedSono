<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Find Box</title>

        <link rel="icon" href="/img/ico.png">

        <meta name="theme-color" content="#1bb0be">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/all.min.css">
        <link rel="stylesheet" href="/css/estilo.css">
        

    </head>
    <body style="background-color:#4e7eb5 !important">

        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
        <a class="navbar-brand" href="/home"><img id="animate" src="https://unifacig.edu.br/wp-content/uploads/2019/01/unifacig.png" alt="" style="width: 120px"></a> -->
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->

        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            
            </ul>

            <a class="nav-link" href="#" id="sair" style="color:#f39322">Sair </a>

        </div> -->
        <!-- </nav> -->




        <div class="container-fluid mb-5" style="padding-top: 15px">

            @yield('body')
        
        </div>        

        <footer class="bg-black small text-center text-white-50" style="padding: 10px">
            <div class="container">
                <div class="social d-flex justify-content-center">
                    <!-- <a target="_blank" href="https://www.instagram.com/bianchijf/" class="mx-2">
                        <i style="color: #fff; width: 30px" class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-filipi-britto-a7375a103/" class="mx-2">
                        <i style="color: #fff; width: 30px" class="fab fa-linkedin"></i>
                    </a> -->
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
        <script src="/js/calculos.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    
        @yield('js')
    </body>

</html>