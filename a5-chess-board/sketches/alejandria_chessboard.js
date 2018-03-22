/* chessboard
Alexa Alejandria, 11/2017

simple chess board (ranks & files)

*/

// the size of the overall canvas
const canvasWidth = 500;
const canvasHeight = 500;

// origin for chess board
const xOrigin = 50;
const yOrigin = 50;

// tile colors
const bgColor = 255;
var remainder;
var tileColor = 1;
const evenColor = '#FEEECA';
const oddColor = '#BD520D';

// tile parameters
const tileSize = 50;
const borderWidth = 0;
const tileHeight = 50;

// board size
const numRows = 8;
const numColumns = 8;


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // set drawing paraemeters for chess board
  strokeWeight(borderWidth);

  // add a new column
  for (j = 0; j < numColumns; j++) {

    var y = yOrigin + j * tileHeight;
		
    // add a new row
    for (i = 0; i < numRows; i++) {
      // print("i: ", i, "   j: ", j);
      
       // alternate the color
        remainderI = i % 2;
      	remainderJ = j % 2;
        if (remainderI == 1 && remainderJ != 1 || remainderI != 1 && remainderJ == 1) {
          tileColor = oddColor;
          print("odd");
        } else {
          tileColor = evenColor;
          print("even");
        }
      
      // draw the tiles
      fill(tileColor);
      rect(xOrigin + i * tileSize, y, tileSize, tileSize);

    }
  }
}

function draw() {}