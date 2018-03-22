/*

Jenny Thai Nguyen
HCDE 495
Intro to Programming

*/

//dimensions of canvas
const canvasWidth = 600; // width of canvas
const canvasHeight = 600; // height of canvas

//upper left corner of box
const xOrigin = 100; //x coordinate of upper left corner of box
const yOrigin = 100; //y coordinate of upper left corner of box

//fixed colors
var bgColor = 'black'; //background color is black
var whiteBox = 'white'; //white boxes
var blackBox = 'black'; //black boxes
var borderColor = 'grey'; //border of boxes are grey

//width and height of boxes
const boxWidth = 50; //width of box
const boxHeight = 50; //height of box
const borderWidth = 3; //how thick the border of boxes are

//determines how many boxes to draw in each row/column
const numRows = 8; //number of boxes in rows
const numColumns = 8; //number of boxes in columns

function setup() { 
  //create canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor); // black
 	drawingRows(); //calling drawingRows function
  
}

  //set drawing parameters for boxes
function drawingRows() {
  // using for loops to draw boxes
	for (j = 0; j < numColumns; j++) {  	
    //calculate y coordinate aka create columns
    var yCoord = yOrigin + j * boxHeight;

  //drawing boxes in a row
  for (i = 0; i < numRows; i++) {
    //calculate x coordinate aka create rows
    var xCoord = xOrigin + i * boxWidth;
    //if the number is divisible by 2, the square will be white
    if ((j % 2) == (i % 2)) {
    drawSquare(xCoord, yCoord, boxWidth, whiteBox);
    //if the number is not divisible by 2, the square will be black
    } else {    
    drawSquare2(xCoord, yCoord, boxWidth, blackBox);
      
    	}
    }
  }
}
  

//this function is for drawing white squares
function drawSquare(xCoord, yCoord, boxWidth, whiteBox) {
  	borderWidth;
  	stroke(borderColor); // grey
  	fill(whiteBox); // white
  	rect(xCoord, yCoord, boxWidth, boxHeight); //drawing white box
    
	}

//this function is for drawing black squares
function drawSquare2(xCoord, yCoord, boxWidth, blackBox) {
  	borderWidth;
  	stroke(borderColor); // grey
  	fill(blackBox); // black
  	rect(xCoord, yCoord, boxWidth, boxHeight); // drawing black box
  
	}

function draw() {}