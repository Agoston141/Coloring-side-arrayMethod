// alert("asdfa")

/*const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
};*/


const makeBoxes = ()=>{
    const data = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
        {number:6},
        {number:7},
        {number:8},
        {number:9},
        {number:10},
        {number:11},
        {number:12},
        {number:13},
        {number:14},
        {number:15},
    ]
    const content = data.map ( ({number}) => `<div class="box" id="${number}">${number}</div>`)
    return content 
}

//Négyzetek megjelenítése HTML-ben
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');
};

/*Oldal betöltése kor inicializálódik a veboldal
document.addEventListener("DOMContentLoaded", renderBoxes);

Ez a kódsorok hamarabb futnak le mint a callbeck függvények
const boxes = document.querySelectorAll(".box") 
console.log(boxes);
 */

const getInputValue = () => {
    return document.querySelector("#num").value
}

const checkValue = () =>{
    const value = getInputValue()
    if (!value.trim()){
        return [false , 0]
    }
    if (isNaN(value)){
        return [false , 0]
    }
    if (Number(value) < 1 || Number(value) > 15) {
        return [false , 0]
    }
    return [true, Number(value)]
}

const randomNumber = () =>{
    return Math.floor(Math.random() * 256)
}

const RandomColor = () =>{
    const r  = randomNumber()
    const g = randomNumber()
    const b = randomNumber()
    return[r, g , b]
}

function ClearInput(){
    const InputElement = document.querySelector("#num")
    InputElement.value="none"
    InputElement.focus()
}

const colorBoxes = () => {
    const [isValid, number] = checkValue()
    if (!isValid){
        sendErrorMessage()
        return;
    }
    const boxes = document.querySelectorAll(".box") 
    const box = Array.from(boxes).find(b => Number(b.id) === number)
    const[r, g, b] = RandomColor()
    box.style.backgroundColor = `rgb(${r},${g},${b})`
    console.log(boxes)
    
}

function sendErrorMessage () {
    alert("Helytelen értéket adott meg")
}

const coloring = () =>{
    const button = document.querySelector(".colorButton")
    button.addEventListener("click", ()=>{
        colorBoxes()
        ClearInput()
    })
}

const reset = () =>{
    const resetButton = document.querySelector(".reset")
    resetButton.addEventListener("click", ()=>{
        renderBoxes()
    })
}


document.addEventListener("DOMContentLoaded", ()=>{
    renderBoxes()
    coloring()
    reset()
})
