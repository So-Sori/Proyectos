let slider = document.getElementById("slider");
let li = document.querySelectorAll(".item");
let ultimoItem = li[li.length - 1];

slider.insertAdjacentElement("afterbegin",ultimoItem)


function next(){
    let primerItem = document.querySelectorAll(".item")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = " all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",primerItem);
        slider.style.marginLeft = "-100%";
    },500);
}

function atras(){
    let li = document.querySelectorAll(".item");
    let ultimoItem = li[li.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = " all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin",ultimoItem);
        slider.style.marginLeft = "-100%";
    },500);
}
