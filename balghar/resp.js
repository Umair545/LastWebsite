burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.rightNav');
navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => { 
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
})