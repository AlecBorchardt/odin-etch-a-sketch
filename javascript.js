let gridSize = 25;

let reset = function() {
  const tiles = document.querySelectorAll(".tile");
  const list = tiles.classList;
  tiles.forEach((tile) => {
    tile.classList.remove("black");
  });
};

function makeBtn() {
  const btn = document.createElement("BUTTON");
  btn.setAttribute("id", "reset");
  btn.className += "button";
  btn.innerText = "Reset!";
  btn.addEventListener('click', reset);
  const bigDaddy = document.body;
  bigDaddy.appendChild(btn);
}

function makeSizeBtn() {
  const sizeBtn = document.createElement("BUTTON");
  sizeBtn.setAttribute("id", "selectSize");
  sizeBtn.className += "button";
  sizeBtn.innerText = "Select Size!";
  sizeBtn.addEventListener('click', sizeSelector);
  const bigDaddy = document.body;
  bigDaddy.appendChild(sizeBtn);
}

function grid() {
	const macDivvy = document.body;
  const papadiv = document.createElement("div");
  papadiv.setAttribute("id", "fatherDiv");
  macDivvy.appendChild(papadiv);
  for (let i = 0; i < gridSize; i++) {
    const parentDiv = document.createElement("div");
    parentDiv.className += "divRow";
    for (let x = 0; x < gridSize; x++) {
      const childDiv = document.createElement("div");
      childDiv.className += "tile";
      childDiv.style.height = (500/gridSize) + "px";
      childDiv.style.width = (500/gridSize) + "px";
      parentDiv.appendChild(childDiv);
    }
    let element = document.getElementById("fatherDiv");
    element.appendChild(parentDiv);
  }
}

function wiper() {
const rst = document.getElementById("reset");
const rsz = document.getElementById("selectSize");
rst.remove();
rsz.remove();
  const myNode = document.getElementById("fatherDiv");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  myNode.remove();
  }  
  
function toggleBlack() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.onmouseover = function() {
      tile.classList.toggle("black");
    };
  });
}

let sizeSelector = function() {

 let newGridSize = prompt("Choose a number between 1 and 100.");
 
if ((newGridSize > 100) || (newGridSize < 1)){
	alert("Error, number out of range!");
}
else {
	gridSize = newGridSize;
}
  console.log(gridSize);
  wiper();
  makeBtn();
	makeSizeBtn();
  grid();
  toggleBlack();
  
}

function run(){
makeBtn();
makeSizeBtn();
grid();
toggleBlack();
}

run();