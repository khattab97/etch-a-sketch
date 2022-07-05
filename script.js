let para = document.querySelector('p');
let range = document.getElementById('range');
let value = range['value'];
let grid = document.querySelector('.grid');
let colorPick = document.getElementById('color');
let colorbtn = document.getElementById('color-mode');
let rainbowbtn = document.getElementById('rainbow-color');
let erase = document.getElementById('erase');
let clear = document.getElementById('clear');
let color = document.getElementById('color')['value'];
console.log(color);
let currentMode = 'color';
const buttons = [colorbtn, rainbowbtn, erase, clear];


colorbtn.addEventListener('click', (e) => setMode(e, 'color'));
rainbowbtn.addEventListener('click', (e) => setMode(e, 'rainbow'));
erase.addEventListener('click', (e) => setMode(e,'erase'));
clear.addEventListener('click', (e) => setMode(e,'clear'));

range.addEventListener('change', updateValue);
colorPick.addEventListener('change', (e) => color = e.target['value']);

function createGrid(size) {

    for (let j = 0; j < size; j++) {
        let div_wrap = document.createElement('div');
        div_wrap.style.cssText = "display: flex";
        // flex element
        for (let i = 0; i < size; i++) {
            let flex_element = document.createElement('div');
            flex_element.style.cssText = "flex-grow: 1";
            flex_element.style['height'] = `${grid.clientHeight/value}px`;
            flex_element.addEventListener('mousedown', colorPicker);
            flex_element.addEventListener('mouseover', colorPicker)
            flex_element.classList.add('flex-item');
            div_wrap.appendChild(flex_element);
        }
        grid.appendChild(div_wrap);
    }
}


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

function setMode(e, mode='color'){
    if (mode === 'clear') reloadGrid();

    else if (mode !== currentMode){
        buttons.forEach(button => button.classList.remove('active'));
        currentMode = mode;
    }
    e.target.classList.add('active');
}

function reloadGrid(){
    grid.innerHTML = '';
    createGrid(value);
}

function updateValue(){
    value = range['value'];
    para.textContent = `${value} X ${value}`;
    reloadGrid();
}

updateValue();