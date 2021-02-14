// Select color input
let colorInput = document.querySelector('#colorPicker');

// Select size input
let heightInput = document.querySelector('#inputHeight');
let widthInput = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
const form = document.querySelector('#sizePicker');
form.addEventListener('submit', function(event) {
  let rows = parseInt(heightInput.value, 10);
  let cols = parseInt(widthInput.value, 10);
  event.preventDefault();
  clearTable();
  colorInput.value = "#000000"
  makeGrid(rows, cols);
  addCellListeners();
});

/**
 * @description Creates the design canvas
 * @param {number} rows - The height in rows of the canvas
 * @param (number} cols - The width in columns of each row of canvas
 */
function makeGrid(rows, cols) {
  let newTable = document.querySelector('#pixelCanvas');
  for (let row = 0; row < rows; row++) {
    let newRow = newTable.insertRow(row);
    for (let col = 0; col < cols; col++) {
      let newCell = newRow.insertCell(col);
    }
  }
}

/**
 * @description Add listeners to design canvas cells
 * @param {table} - The table to operate on
 */
function addCellListeners() {
  let table = document.querySelector('#pixelCanvas');
  let cells = table.querySelectorAll('td');
  for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].addEventListener('click', function(event) {
      cells[cell].style.backgroundColor = colorInput.value;
    });
  }
}

/**
 * @description Removes all child elements of table
 */
function clearTable() {
  table = document.querySelector('#pixelCanvas');
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}
