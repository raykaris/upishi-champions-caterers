const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('show');
});

function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.title');
});

link2.addEventListener('click', () => {
    scrollToElement('.title', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.title', 3);
});


const typed = new Typed('.multiple-text' , {
    strings: ['Be our customer for all event needs','Rural or Urban we cook them all','Integrity','Unity','Cooperation'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
});