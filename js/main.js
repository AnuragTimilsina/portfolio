/* ========== Menu show Y hidden ========== */ 
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ========== Menu Show ========== */
/* Validate if constant exists */  
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* ========== Remove menu mobile ========== */
const navlink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navlink.forEach(n => n.addEventListener('click', linkAction))
