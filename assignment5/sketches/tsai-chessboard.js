//controls position of chessboard
var xOrigin = 0;
var yOrigin = 0;

//controls number of rows and columns
var rows = 8;
var columns = 8;

//controls square colors;
var color1 = 'blue';
var color2 = 'white';

//function to draw a single square
function drawSquare(x, y, size, fillColor) {
    noStroke();
    fill(fillColor);
    rect(x, y, size, size);
}

//check to see if number is odd
function isOdd(n) {
    var remainder;
    remainder = n % 2;

    if (remainder == 1) {
        return true;
    } else {
        return false;
    }
}

//check if number is even
function isEven(n) {
    var remainder;
    remainder = n % 2;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}

//function to check if variables u and i are both even or both odd to assign color
function assignColor() {
  if (((isOdd(i)) && (isOdd(u))) || ((isEven(i)) && (isEven(u)))) {
                fillColor = color1;
            } else {
                fillColor = color2;
            }
}

function setup() {
    //control size of squares
    var size = 60;
    createCanvas(800, 800);

    //loop to repeat row of squares vertically
    for (u = 0; u < rows; u++) {
        var y = yOrigin + u * size;

        //loop to repeat squares horizontally
        for (i = 0; i < columns; i++) {
            var x = xOrigin + i * size;

            //assigns color
            assignColor();

            //draws squares
            drawSquare(x, y, size, fillColor);
        }
    }
}

function draw() {}