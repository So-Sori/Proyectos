<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
}
.copy{
    /* position: relative;
    top:40px; */
    width: 40%;
    color:var(--purple-dark);
    margin: auto;
}
.redes{
    width: 40%;
    margin: auto;
}
.redes img{
    width: 50px;
}
.redes a{
    margin:10px 0;
    padding: 0;
}
.copy h2{
    margin:auto;
    text-align: center;
}

    @media screen and (max-width:800px) {

    footer{
        position: relative;
        bottom: 0;
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        /* padding: 10px 0; */
    }
    .copy{
        width: 100%;
    }
    .copy h2{
        padding: 10px 0;
    }
    .redes{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
    </style>
</head>
<body>
<footer>
        <div class="copy">
            <h2>©Copyright Soribel S.B</h2></div>
        <div class="redes">
            <a href="https://www.instagram.com/soribel_s.brito/" target="_blank"><img src="/img/black-insta.png" alt=""></a>
            <a href="https://www.linkedin.com/in/soribel-santos-brito-7b30a6213/" target="_blank"><img src="/img/black-link.png" alt=""></a>
            <a href="https://github.com/So-Sori" target="_blank"><img src="/img/black-github.png" alt=""></a>
        </div>
    </footer>
</body>
</html>