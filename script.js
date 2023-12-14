let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let tree = document.getElementById('tree');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 +'px';
    num1.style.marginRight = value * 3.5 +'px';
    num2.style.marginLeft = value * 3.5 +'px';
    leaf.style.top = value * -1.5 +'px';
    leaf.style.left = value * 1.5 +'px';
    tree.style.top =value * 1 +'px';
    hill5.style.left = value * 0.5 +'px';
    hill4.style.left = value * -1 +'px';
    hill1.style.bottom = value * 2 +'px';
    hill2.style.left = value * -1 +'px';
    hill3.style.left = value * 0.1 +'px';

});