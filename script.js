// Select color input
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
  makeGrid(rows, cols);
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
 * @description Removes all child elements of table
 */
function clearTable() {
  table = document.querySelector('#pixelCanvas');
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}
