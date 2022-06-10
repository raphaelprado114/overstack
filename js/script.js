// Mobile Menu

var bx = document.querySelector('.bx')
var mobileNav = document.querySelector('.mobileNav')

bx.addEventListener('click', ()=>{
    bx.classList.toggle('activeBx')
    mobileNav.classList.toggle('activeMenu')
})

// -----------------------------------------


// Show menu Desktop on scroll 

var menuDesktop = document.querySelector('.header')

window.onscroll = ()=>{
    if(window.pageYOffset >= 100){
        menuDesktop.classList.add('activeHeader')
    }else{
        menuDesktop.classList.remove('activeHeader')
    }
}

// -----------------------------------------


// Counter

const countDate = new Date('july 15, 2022 00:00:01').getTime();
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

// -----------------------------------------
