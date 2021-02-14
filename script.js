// Select color input
// Select size input
let height = 16;
let width = 16;


// When size is submitted by the user, call makeGrid()

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

makeGrid(height, width);
