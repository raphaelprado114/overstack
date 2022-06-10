var bx = document.querySelector('.bx')
var mobileNav = document.querySelector('.mobileNav')

bx.addEventListener('click', ()=>{
    bx.classList.toggle('activeBx')
    mobileNav.classList.toggle('activeMenu')
})