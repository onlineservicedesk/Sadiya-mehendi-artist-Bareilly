const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', ()=>{

sections.forEach(sec=>{

const top = sec.getBoundingClientRect().top;
const screen = window.innerHeight;

if(top < screen - 100){

sec.classList.add('show');

}

});

});