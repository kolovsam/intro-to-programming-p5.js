/* chess board
charlie huo, 11/11/17

draws a chess board on canvas */


//determines where the chess board is placed on the canvas
var chessBoardx = 50;
var chessBoardy = 50;

//determines the size of the chess board
var chessBoardScale = 1;

//determines numbers of rows and columns of the board
var row = 8;
var column = 8;

function setup() {
  createCanvas(500, 500);
  background(240);
  noStroke();

  //creates columns
  for (t = 0; t < column; t++) {

    //alters color mapping of row based on its position
    if (isOdd(t) == false) {

      //creates rows
      for (i = 0; i < row; i++) {

        //alters square's color based on its position
        if (isOdd(i) == false) {
          fill(96, 158, 255);
          rect(chessBoardx + i * 50 * chessBoardScale, chessBoardy + t * 50 * chessBoardScale, 50 * chessBoardScale, 50 * chessBoardScale);
        } else if (isOdd(i) == true) {
          fill(129, 75, 188);
          rect(chessBoardx + i * 50 * chessBoardScale, chessBoardy + t * 50 * chessBoardScale, 50 * chessBoardScale, 50 * chessBoardScale);
        }
      }
    } else if (isOdd(t) == true) {
      for (i = 0; i < row; i++) {
        if (isOdd(i) == true) {
          fill(96, 158, 255);
          rect(chessBoardx + i * 50 * chessBoardScale, chessBoardy + t * 50 * chessBoardScale, 50 * chessBoardScale, 50 * chessBoardScale);
        } else if (isOdd(i) == false) {
          fill(129, 75, 188);
          rect(chessBoardx + i * 50 * chessBoardScale, chessBoardy + t * 50 * chessBoardScale, 50 * chessBoardScale, 50 * chessBoardScale);
        }
      }
    }
  }
}

function draw() {}


/*determines if a number is odd or even; used to alter colors of
neighboring sqaures */
function isOdd(n) {
  var remainder;
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {
    return false;
  }
}