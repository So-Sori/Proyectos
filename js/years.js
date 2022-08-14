
const edadGato = () =>{
    let Edadhumana = document.getElementById("edadHumana").value;
    Number(Edadhumana);

    let primerosAñosGato = 2*24;

    let añosGatos = Edadhumana - 2;
    añosGatos *= 4;

    let totalEdadGato = añosGatos + primerosAñosGato;

    let span = document.getElementById("T-gato");
    span.textContent = `${totalEdadGato} años gato`;
}

const edadPerro = () =>{
    let Edadhumana = document.getElementById("Edadhumana").value;
    Number(Edadhumana);

    let primerosAñosPerro = 2*10.5;

    let añosPerros = Edadhumana - 2;
    añosPerros *= 4;

    let totalEdadPerro = añosPerros + primerosAñosPerro;

    let span = document.getElementById("T-perro");
    span.textContent = `${totalEdadPerro} años perro`;
}

//CODIGO ORIGINAL
// const edadPerro = () =>{
//     let edadHumana = document.getElementById("EdadHumana").value;
//     Number(edadHumana);

//     let primerosAñosPerro = 2*10.5;

//     let añosPerros = edadHumana - 2;
//     añosPerros *= 4;

    // let totalEdadPerro = añosPerros + primerosAñosPerro;

    // let span = document.getElementById("T-perro");
    // span.textContent = `${totalEdadPerro} años perro`;
// }

