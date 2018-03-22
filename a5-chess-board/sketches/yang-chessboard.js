/* Homework 5 - Chess Board
by Chun-Fang Yang */


const xOrigin = 100;
const yOrigin = 100;

const color = 'white';
const borderColor = 'grey';

// parameters for each box of the chess board
const segmentSize = 50;
const segmentHeight = 50
const borderWidth = 2;

const boardSegments = 8;
const numRows = 8;


function setup() {

  // create the canvas
  createCanvas(windowWidth, windowHeight);
  background('white');

  // set drawing paraemeters for the bar segments
  fill(color);
  stroke(borderColor);
  strokeWeight(borderWidth);

}

function draw() {

  drawBoard(0, 0)
}

//function drawBoard(x, y, size, color) 


function drawBoard(x, y) {


  for (var i = 0; i < boardSegments; i++){
    for (var j = 0; j < numRows; j++){
      var iRemainder = i % 2;
      var jRemainder = j % 2;
      if ( (iRemainder === 0 && jRemainder === 0) ||
         (iRemainder === 1 && jRemainder === 1) ) {
        fill("lightblue");
      } else {
        fill(color)
      }
      rect(xOrigin + i * segmentSize, yOrigin + j * segmentHeight, segmentSize, segmentHeight);
    }
   
  }
}




  /*var x = xOrigin + i * segmentSize;
  var y = yOrigin + j * segmentHeight;

  for (i = 0; i < barSegments; i++)
    for (j = 0; j < numRows; j++)
      rect(xOrigin + i * segmentSize, yOrigin + j * segmentHeight, segmentSize, segmentHeight);
*/