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

document.addEventListener("DOMContentLoaded", ()=>{
    renderBoxes()
    const boxes = document.querySelectorAll(".box")
})