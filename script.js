let para = document.querySelector('p');
let range = document.getElementById('range');
let value = range['value'];
para.textContent = `${value} X ${value}`;

let grid = document.querySelector('.grid');
let colorbtn = document.getElementById('color-mode');
let rainbowbtn = document.getElementById('rainbow-color');
let erase = document.getElementById('erase');
let clear = document.getElementById('clear');
let color = document.getElementById('color')['value'];
console.log(color);
let currentMode = 'color';

let clicked = 1;

colorbtn.addEventListener('click', () => setMode('color'));
rainbowbtn.addEventListener('click', () => setMode('rainbow'));
erase.addEventListener('click', () => setMode('erase'));
clear.addEventListener('click', () => clicked=4);


function createGrid(grid) {

    for (let j = 0; j < value; j++) {
        let div_wrap = document.createElement('div');
        div_wrap.style.cssText = "display: flex";
        // flex element
        for (let i = 0; i < value; i++) {
            let flex_element = document.createElement('div');
            flex_element.style.cssText = "flex-grow: 1; background-color: #808080";
            flex_element.style['height'] = `${grid.clientHeight/value}px`;
            flex_element.addEventListener('mousedown', colorPicker);
            flex_element.addEventListener('mouseover', colorPicker)
            flex_element.classList.add('flex-item');
            div_wrap.appendChild(flex_element);
        }
        grid.appendChild(div_wrap);
    }
}

createGrid(grid);


let startDraw = false;
document.body.onmousedown = () => startDraw = true;
document.body.onmouseup = () => startDraw = false;

function colorPicker(e) {
    if (e.type === 'mouseover' && !startDraw) return;
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = color
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = "#808080";
    }
}

function setMode(mode='color'){
    currentMode = mode;
}