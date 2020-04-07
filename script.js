/*

	- Create a function(gridChange) with no arguments, that will change the color of each grid square on click.
  - Create a function that will
	- Reset button on click will rotate 360 shake the etch-a-sketch, and change all grid colors to white
	- Change Size button will rotate 360, promt the user for new column/row size, and change the grid to that size
  */

const etchScreen = document.querySelector('#etchScreen');
const resetBttn = document.querySelector('#resetBttn');
const changeGridBttn = document.querySelector('#changeGridBttn')

// Create a function to generate a new grid with specifed row/column size, default function call below 16
function createGrid(gridSize) {
  etchScreen.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  etchScreen.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++){
    let cell = document.createElement("div");
    cell.classList.add('cell');
    etchScreen.appendChild(cell);
  }

  let grid = document.querySelectorAll('.cell');
    grid.forEach ((cell) => {
      cell.addEventListener('mouseover', (e) => {
        cell.classList.add('active');
      }); 
    });
};


function reset (){};
function changeGrid () {};
function bttnPress (){};

createGrid(16);

