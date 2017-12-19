/* 
10th November 2017
Hi, 
Below is my code for Assignment 5:
"Draw a Chessboard that can be generated at any scale" for the course 598A.
-Kartika Rathee */


// Size of canvas set as constant
const canvasWidth = 800;
const canvasHeight = 800;

// Setting colors as constant
const backgroundColor = 'grey';
const barColor = 'black';
const borderColor = 'black';

// Parameters for each square box in the matrix
const squareWidth = 50;
const squareHeight = 50;
const borderWidth = 3;

function setup() {

  createCanvas(canvasWidth, canvasHeight);
  background(backgroundColor);
  fill(barColor);
  stroke(borderColor);
  strokeWeight(borderWidth);

  //Call the scalable chessBoard function with desired parameters explained below

  chessBoard(8, 8, 'coral', 'grey', 150, 150);

}

function draw() {}
/* In the chessBoard function-
numRanks: number of rows on chessboard
numFiles: number of columns
color1: color of the even square 
color2: color of the odd sqaure 
xOrigin: starting position of x-coordinate of chessboard
yOrigin: starting position of y-coordinate of chessboard
*/

function chessBoard(numRanks, numFiles, color1, color2, xOrigin, yOrigin) {
 
	// While j < no. of rows defined while calling the function, keep drawing rows 1 by 1
  for (j = 0; j < numRanks; j++) {

		// Calcluate y-coordinate of each row by adding y-origin to j times height of the square
    var yCorner = yOrigin + j * squareHeight;

    // While i < no. of columns defined while calling the function, keep drawing columns 1 by 1
    for (i = 0; i < numFiles; i++) {

      // Calcluate x-coordinate of each column by adding x-origin to i times width of the square
      var xCorner = xOrigin + i * squareWidth;

      // print("i : ", i, " j : ", j); 
      
      //If the value of i+j % 2 == 0, the square is even else it is odd
      if ((i + j) % 2 == 0) {
        
        //The square is even so fill with color1
        fill(color1);
        
        //for debugging
        // print("i+j == ", i + j); 
        //print(color1);//
        // print("( i+j ) % 2 == ", (i + j) % 2);


      } else {
        //The square is odd so fill with color2
        fill(color2);
        
        //for debugging
        // print("i+j == ", i + j);
        // print(color2);
        // print("( i+j ) % 2 == ", (i + j) % 2);

      }
//Draws the actual square box with x and y coordinate and the size of square as parameters
      rect(xCorner, yCorner, squareWidth, squareHeight);
    }

  }
}