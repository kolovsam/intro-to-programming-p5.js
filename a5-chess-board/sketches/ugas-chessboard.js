/* Chess Board
Anthony Ugas - 11/10/2017
*/

// size of canvas
const canvasWidth = 800;
const canvasHeight = 800;

// upper left sqaure of the chessboard
const xOrigin = 100;
const yOrigin = 100;

// some colors that are used
const bgColor = 'grey';
const squareColor1 = 'teal';
const squareColor2 = 'white';
const borderColor = 'tan';


// parameters for each chessboard square 
const squareWidth = 50;
const squareHeight = 50;
const borderWidth = 2;

// how many squares to draw in each row
const numColumns = 8;
const numRows = 8;


function setup() {

    // create the canvas
    createCanvas(canvasWidth, canvasHeight);
    background(bgColor);

    // set drawing paraemeters for squares
    stroke(borderColor);
    strokeWeight(borderWidth);

    // draws the required number of rows
    for (j = 0; j < numRows; j++) {

        // calcluates y coordinate 
        var yCorner = yOrigin + j * squareHeight;

        // draws the required number of columns
        for (i = 0; i < numColumns; i++) {

            // calculates the x coordinate
            var xCorner = xOrigin + i * squareWidth;

            /*adds row number + column number and divides by 2
            if divisble by 2 (even) changes color to squareColor1
            if NOT divisible by 2 (odd) changes color to sqaureColor2 
            */
            if ((i + j) % 2 == 0) {
                fill(squareColor1);
            } else {
                fill(squareColor2);
            }
            // draws one sqaure
            rect(xCorner, yCorner, squareWidth, squareHeight);

        }

    }

}

function draw() {}