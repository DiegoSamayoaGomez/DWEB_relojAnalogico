const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");


function actualizarReloj() {

    const fechaActual = new Date();

    const horaX = fechaActual.getHours();
    const minutoX = fechaActual.getMinutes();
    const segundoX = fechaActual.getSeconds();

    const horaDeg = (horaX / 12) * 360;

    hora.style.transform=  `rotate(${horaDeg}deg)`;


    const minutoDeg = (minutoX / 60) * 360;
    minuto.style.transform= `rotate(${minutoDeg}deg)`;

    const segundoDeg = (segundoX / 60) * 360;
    segundo.style.transform= `rotate(${segundoDeg}deg)`;

}

setInterval(actualizarReloj, 1000)