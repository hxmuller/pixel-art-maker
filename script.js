// Select color input
const colorInput = document.querySelector('#colorPicker');

// Select size input
const heightInput = document.querySelector('#inputHeight');
const widthInput = document.querySelector('#inputWidth');

// Select table
const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
const form = document.querySelector('#sizePicker');
form.addEventListener('submit', function(event) {
  let rows = parseInt(heightInput.value, 10);
  let cols = parseInt(widthInput.value, 10);
  // Grid disappears immediately unless default action prevented
  event.preventDefault();
  // Reset the canvas
  clearTable(table);
  colorInput.value = "#000000"
  // Create new canvas and listeners
  makeGrid(table, rows, cols);
  addCellListeners(table);
});

/**
 * @description Creates the design canvas
 * @param {table} table - The table to process
 * @param {number} rows - The height in rows of the canvas
 * @param (number} cols - The width in columns of each row of canvas
 */
function makeGrid(table, rows, cols) {
  for (let row = 0; row < rows; row++) {
    let newRow = table.insertRow(row);
    for (let col = 0; col < cols; col++) {
      let newCell = newRow.insertCell(col);
    }
  }
}

/**
 * @description Add listeners to design canvas cells
 * @param {table} table - The table to process
 */
function addCellListeners(table) {
  let cells = table.querySelectorAll('td');
  for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].addEventListener('click', function(event) {
      cells[cell].style.backgroundColor = colorInput.value;
    });
  }
}

/**
 * @description Removes all child elements of table
 * @param {table} table - The table to process
 */
function clearTable(table) {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}
