;// Your code goes here

// Grab elements to play with
const body = document.body;
const textlogo = document.querySelector('.logo-heading');
const headerimage = document.querySelector('.intro img');
const nav_anchor = document.querySelectorAll('.nav-link');
const img_content = document.querySelectorAll('.img-content img');
const h2 = document.querySelectorAll('h2');
const footer = document.querySelector('footer');

// Run specified listeners once

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

function enter() {
    textlogo.textContent = 'Hello Fun Mouse';
    body.style.backgroundColor = "#dddddd";
    setTimeout(() => {
        textlogo.textContent = 'Fun Bus';
        body.style.backgroundColor = "";
    }, 3000);
}
function remove_img() {
    headerimage.setAttribute('src', '#');
    setTimeout(() => {
        headerimage.setAttribute('src', 'img/fun-bus.jpg')
    }, 3000);
}

// Add event listeners to our playground
body.addEventListener('mouseenter', enter);
headerimage.addEventListener('drag', remove_img);
