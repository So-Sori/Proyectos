
//Variables
//let respuesta = ["Si","No","Tal vez","Nose"];
let span = document.getElementById("span");
let btn = document.getElementById("btn");
//let textArea = document.getElementById("text");


function accion (){
    let img = document.getElementById("img");

    img.style.display = "none";
    switch(Math.floor(Math.random() * (11 - 1 + 1) - -1)){
        case 1:
            span.textContent = "Si";
            break;
            case 2:
                span.textContent = "No se puede predecir";
                break;
                case 3:
                    span.textContent = "Mis fuentes dicen que no";
                    break;
                    case 4:
                        span.textContent = "Es cierto";
                        break;
                        case 5:
                            span.textContent = "Concentrate y vuelve a preguntar";
                            break;
                            case 6:
                                span.textContent = "Muy dudoso";
                                break;
                                case 7:
                                    span.textContent = "Puedes confiar en ello";
                                    break;
                                    case 8:
                                        span.textContent = "Mejor no decirte ahora";
                                        break;
                                        case 9:
                                            span.textContent = "Mi respuesta es no";
                                            break;
                                            case 10:
                                                span.textContent = "Las señales apuntan a que si";
                                                break;
                                                
                        default:
                            span.textContent = "Wey nose";
                            break;
    }
}

btn.addEventListener('click',function() {
    const sound = new Audio('sound.mp3');
    sound.play();
    sound.playbackRate = 2;
    sound.volume = 5;
})

/*Apuntes : primer intento crear una varible array que seleccionaria un valor aleatorio con Math.random 
(problema, no se actualizaba con los clikcs) esto lo probare mas adelante con mas calma
Segundo intento un swich dentro de una funcion (utilizo este porque se actualiza con cada click)


Alguien sabe hacer un efecto de transicion? para que el texto no llegue asi nomas
*/

