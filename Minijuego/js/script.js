document.getElementById("player").addEventListener("mouseover",sumarPuntos);
puntos=0;
tiempo=60;
Necesarios=30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + Necesarios+ "</b>"; 
    randNum = Math.round(Math.random()*471);
    randNum2 = Math.round(Math.random()*471);
    document.getElementById("player").style.margin = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if(puntos==30){
        alert("Ganaste");
        tiempo=60;
        puntos=0;
    }

}


function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp; Tiempo "+ tiempo ;
    if (tiempo==0){
        alert("Perdiste brother");
        tiempo=60;
        puntos=0;
    
    }
}

setInterval(restarTiempo,1000);
