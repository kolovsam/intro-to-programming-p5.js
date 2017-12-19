/* Toni Saylor
	 A5: Chess Board
   HCDE 598A
   11/6/17
*/

function setup() {
  createCanvas(600, 600);
  background(220);
  // variables
  // change this if you want to change the number of rows and columns
  var numSquares = 8;
	var cream = [255, 250, 205];
	var slateBlue = [72, 61, 139];
  drawBoard(numSquares, cream, slateBlue)
}


function draw() {}

function drawBoard(num, color1, color2) {
  // draw the board
  // draw a diagonal set of squares
  size = width/num;
  for (i = 0; i < (width/size); i++) {
    j = i * size;
    // draw each diagonal set of squares across the board
    for (k = -(width/size-1); k < (width/size); k++) {
      // alternate colors of diagonal rows
      if (isOdd(k) == false) {
      	square(j + (k * size), j, color1, size);
      } else {
        square(j + (k * size), j, color2, size);
      }
    }
  }
}

function square(x, y, color,sqSize) {
  noStroke();
  fill(color);
  rect(x, y, sqSize, sqSize);
}

function isOdd(n) {
  var remainder = n % 2;
  if (remainder == 0) {
    return false;
  } else {
    return true;
  }
}
