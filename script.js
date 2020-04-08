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

createGrid(16);

// Reset button spins and removes the active class which makes the cells white again
resetBttn.addEventListener('click', (e) => {
  let grid = document.querySelectorAll('.cell');
  grid.forEach((cell) => {
    cell.classList.remove('active');
  });
})

// Change Grid button spins, removes drawing, and prompts user for new column/row size before creating a new grid
changeGridBttn.addEventListener('click', (e) => {
  let grid = document.querySelectorAll('.cell');
  grid.forEach((cell) => {
    cell.classList.remove('active');
  });
    
  gridSize = prompt("How many column/rows do you want?(1-100)");
  createGrid(gridSize);
});



