;// Your code goes here

// Grab elements to play with
const body = document.body;
const textlogo = document.querySelector('.logo-heading');
const headerimage = document.querySelector('.intro img');
const anchor1 = document.querySelector('a:nth-of-type(1)');
const img_content = Array.from(document.querySelectorAll('.img-content img'));
const h2 = Array.from(document.querySelectorAll('h2'));
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
    }, 500);
}
function remove_img() {
    headerimage.setAttribute('src', '#');
    textlogo.textContent = 'Oops! No Image'
    setTimeout(() => {
        headerimage.setAttribute('src', 'img/fun-bus.jpg')
        textlogo.textContent = 'Fun Bus'
    }, 3000);
}
function resize() {
    h2[0].textContent = 'Window width is now ' + window.innerWidth + ' px';
    setTimeout(() => {
        h2[0].textContent = 'Welcome To Fun Bus';
    }, 3000);
}
function logKey(e) {
    anchor1.preventDefault();
    textlogo.textContent = ` ${e.code}`;
    setTimeout(() => {
        textlogo.textContent = 'Fun Bus';;
    }, 3000);
}
function swap() {
    img_content[0].setAttribute('src', 'img/fun.jpg');
    img_content[1].setAttribute('src', '/img/adventure.jpg');
    setTimeout(() => {
        img_content[0].setAttribute('src', 'img/adventure.jpg');
    img_content[1].setAttribute('src', 'img/fun.jpg');
    }, 1000);
    
}

// Add event listeners to our playground
body.addEventListener('mouseenter', enter);
headerimage.addEventListener('drag', remove_img);
window.addEventListener('resize', resize);
img_content[0].addEventListener('dblclick',swap);