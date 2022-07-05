let para = document.querySelector('p');
let range = document.getElementById('range');
let value = range['value'];
para.textContent = `${value} X ${value}`;

let grid = document.getElementsByClassName('grid')[0];
let colorbtn = document.getElementById('color-mode');
let rainbowbtn = document.getElementById('rainbow-color');
let erase = document.getElementById('erase');
let clear = document.getElementById('clear');
let color = document.getElementById('color')['value'];
console.log(color);

let clicked = 1;

colorbtn.addEventListener('click', () => paint());
rainbowbtn.addEventListener('click', () => clicked=2);
erase.addEventListener('click', () => clicked=3);
clear.addEventListener('click', () => clicked=4);


function createGrid(grid) {

    for (let j = 0; j < value; j++) {
        let div_wrap = document.createElement('div');
        div_wrap.style.cssText = "display: flex";
        // flex element
        for (let i = 0; i < value; i++) {
            let flex_element = document.createElement('div');
            flex_element.style.cssText = "flex-grow: 1; background-color: #808080; border-color: #000000; height:25px";
            flex_element.classList.add('flex-item');
            div_wrap.appendChild(flex_element);
        }
        grid.appendChild(div_wrap);
    }
}

createGrid(grid);
let flex_items = Array.from(document.querySelectorAll('.flex-item'));
console.log(flex_items);

function paint(){
    flex_items.forEach(flex_item =>{
        flex_item.addEventListener('mousedown', colorPicker)
    });
}

function colorPicker(e){
    console.log(e.target);
    console.log(color);
    e.target.style.backgroundColor = color;
}