var oddsquareColor = 'brown'
var evensquareColor = 'tan'

const xOrigin = 100;
const yOrigin = 100;

const segmentSize = 50;
const segmentHeight = 50;

const barSegments = 8;
const numRows = 8;

function setup() {
  createCanvas(800, 1000);
  background('black');
}




function draw() {}


function drawSquare(x, y, squareSize) {



  //draws column
  for (i = 0; i < barSegments; i++) {

    //draws row
    for (j = 0; j < numRows; j++) {

      if (isEven(i + j)) {
        fill(evensquareColor);
      } else {
        fill(oddsquareColor);
      }
      //draws squares
      rect(xOrigin + i * segmentSize, y + j * segmentHeight, segmentSize, segmentHeight);
    }
  }

    //



  }


  function mouseClicked() {
    var size = random(0, height / 20);
    drawSquare(mouseX, mouseY, size);

  }

  function isEven(n) {
    var remainder = n % 2;
    if (remainder == 0) {
      return true;

      /*drawSquare (x, y, squareSize, evensquareColor ); */
    } else {
      return false;
    }
  }