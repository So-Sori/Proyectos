<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperatura</title>
    <link rel="shortcut icon" href="programadora.ico" type="image/x-icon">
    <link rel="stylesheet" href="temp.css">
</head>
<body>
    <h1>Calcula las temperaturas</h1>

    <div class="contenedor">
        <div class="card">

        <div class="lado">
            <form action="">
                <select id="opciones">
                    <option id="f" value="Fahrenheit">Fahrenheit</option>
                    <option id="c" value="Celsius">Celsius</option>
                    <option id="k" value="Kelvin">Kelvin</option>
                </select>
                
                <input type="text" id="btn" class="btn">
            </div>
            <img src="flecha-correcta.png" alt="flecha-negra" class="flecha">

            <div class="lado">
                <select id="opciones2">
                   <option id="f2" value="Fahrenheit2">Fahrenheit</option>   <!-- los id era para hacer lo que hice con los value -->
                    <option id="c2" value="Celsius2">Celsius</option>
                    <option id="k2" value="Kelvin2">Kelvin</option>
                </select>
                
                <span class="text-area" id="text-area"></span>
            </div>
            </form>
        </div>
        <div class="abajo"> 
            <input type="button" value="Enviar" onclick="operacion()" class="input">
        </div>
    </div>

    <script src="temperatura.js"></script>
<!-- 
    <footer>
        <div class="copy">
            <h2>©Copyright Soribel S.B</h2></div>
        <div class="redes">
            <a href="https://www.instagram.com/soribel_s.brito/" target="_blank"><img src="/img/black-insta.png" alt=""></a>
            <a href="https://www.linkedin.com/in/soribel-santos-brito-7b30a6213/" target="_blank"><img src="/img/black-link.png" alt=""></a>
            <a href="https://github.com/So-Sori" target="_blank"><img src="/img/black-github.png" alt=""></a>
        </div>
    </footer> -->

    <!-- <div id="Contenedor_Carga">
        <div id="carga"  ></div>
        <video src="giftauto.gif" class="Contenedor_Carga"></video>
    </div>

    <script>
        
        let time  = setTimeout(hola, 2000);
        function hola(){

            var contenedor = document.getElementById('Contenedor_Carga');
            contenedor.style.visibility = 'hidden';
            contenedor.style.opacity = '0';
            console.log();
            clearTimeout(time);
        
            
        }

        
    </script> -->


<?php include '../PHP/footer.php' ?>
</body>
</html>