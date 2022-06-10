// Mobile Menu

var bx = document.querySelector('.bx')
var mobileNav = document.querySelector('.mobileNav')

bx.addEventListener('click', () => {
    bx.classList.toggle('activeBx')
    mobileNav.classList.toggle('activeMenu')
})

// -----------------------------------------


// Efects on scroll 

var menuDesktop = document.querySelector('.header')
var btnScroll = document.querySelector('.scrollTop')
const target = document.querySelectorAll('[data-anime]')
const animateClass = 'animate'

window.onscroll = () => {

    // Header

    if (window.pageYOffset >= 100) {
        menuDesktop.classList.add('activeHeader')
        btnScroll.classList.add('scrollTop-active')
    } else {
        menuDesktop.classList.remove('activeHeader')
        btnScroll.classList.remove('scrollTop-active')
    }


    // Side Scrolling Animations

    const windowTop = window.pageYOffset + 400
    target.forEach((item) => {
        if (windowTop > item.offsetTop) {
            item.classList.add(animateClass)
        }
    })
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


// ScrollTop

btnScroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
})


