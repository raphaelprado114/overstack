const countDate = new Date('july 15, 2022 12:00:00').getTime();
function newYear() {

    const now = new Date().getTime();
    const gap = countDate - now;

    const segundos = 1000;
    const minutos = segundos * 60;
    const hora = minutos * 60;
    const dia = hora * 24;

    const d = Math.floor(gap / (dia));
    const h = Math.floor((gap % (dia)) / (hora));
    const m = Math.floor((gap % (hora)) / (minutos));
    const s = Math.floor((gap % (minutos)) / (segundos));

    document.getElementById('dia').innerText = d;
    document.getElementById('hora').innerText = h;
    document.getElementById('minutos').innerText = m;
    document.getElementById('segundos').innerText = s;

}

setInterval(function () {
    newYear();
}, 1000);
