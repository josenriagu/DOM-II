;// Your code goes here

// Grab elements to play with
const body = document.body;
const header = document.querySelectorAll('.main-navigation')
const textlogo = document.querySelector('.logo-heading');
const headerimage = document.querySelector('.intro img');
const intro = document.querySelectorAll('.intro');
const anchor1 = document.querySelector('a:nth-of-type(1)');
const img_content = Array.from(document.querySelectorAll('.img-content img'));
const h2 = Array.from(document.querySelectorAll('h2'));
const p = Array.from(document.getElementsByTagName('p'));
const footer = document.querySelectorAll('footer');
const home = document.querySelector('a');


// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `select`

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
// function logKey(e) {
//     anchor1.preventDefault();
//     textlogo.textContent = ` ${e.code}`;
//     setTimeout(() => {
//         textlogo.textContent = 'Fun Bus';;
//     }, 3000);
// }

function swap() {
    img_content[0].setAttribute('src', 'img/fun.jpg');
    img_content[1].setAttribute('src', '/img/adventure.jpg');
    setTimeout(() => {
        img_content[0].setAttribute('src', 'img/adventure.jpg');
        img_content[1].setAttribute('src', 'img/fun.jpg');
    }, 1000);

}
function changeScroll() {
    setTimeout(() => {
        intro[0].style.backgroundColor = 'green';
    }, 2000);

    setTimeout(() => {
        intro[0].style.backgroundColor = 'white';
    }, 5000);
}
function select() {
    p.forEach(item => item.innerText = 'Whoa!!!')
}

// Add event listeners to our playground
body.addEventListener('mouseenter', enter);
headerimage.addEventListener('drag', remove_img);
window.addEventListener('resize', resize);
img_content[0].addEventListener('dblclick', swap);
headerimage.addEventListener('scroll', changeScroll());
anchor1.addEventListener('click', event => event.preventDefault());
intro.addEventListener('select', select);

body.addEventListener('click', remove_img, { capture: false });
headerimage.addEventListener('click', swap, { capture: false });