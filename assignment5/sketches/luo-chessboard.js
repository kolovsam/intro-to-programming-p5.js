//create variables for x, y, size, fillcolor, strokecolor, row&column number.
var rowNumber = 8;
var columnNumber = 8;
var squareColor = "yellow";
var squareColor_2 = "grey";
var squareStroke = "white";
var squareSize = 50;
var xOrigin = 50;
var yOrigin = 50;

//create chess board
function setup() {
    createCanvas(500, 500);
    background(220);
    for (i = 0; i < rowNumber; i++) {
        for (j = 0; j < columnNumber; j++) {
            //for rowNumber and columnNumber:
            //if one of them is odd and another is even, fillColor would be yellow.
            if (((isOdd(i)) && (!isOdd(j))) || ((!isOdd(i)) && (isOdd(j)))) {
                drawSquare(xOrigin + j * squareSize, yOrigin + i * squareSize,
                    squareColor, squareStroke, squareSize);
            } else {
                //for rowNumber and columnNumber:
                //if both of them are even or odd, fillColor would be grey.
                drawSquare(xOrigin + j * squareSize, yOrigin + i * squareSize,
                    squareColor_2, squareStroke, squareSize);
            }
        }
    }

}

//Whether a number is odd or even.
function isOdd(num) {
    if (num % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

//create basic function to draw a square.
function drawSquare(x, y, squareColor, squareStroke, size) {
    fill(squareColor);
    stroke(squareStroke);
    rect(x, y, size, size);
}