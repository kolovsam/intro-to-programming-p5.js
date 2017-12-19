/* 
Toni Saylor
HCDE 598A Introduction to Programming
Final Project
Andrew Davidson
12/4/2017
*/

/*
I attempted to get as far as I could in making Ballz, an app and game for iphones in which you shoot balls
ball at numbered blocks. Every time the balls finish hitting the blocks and then the bottom of the screen, 
the number of balls you have increases and the potential numbers on the blocks increase in value.
I accomplished drawing the ball, making it capable of being shot by the user, and making it bounce off the walls,
as well as drawing a row of randomly chosen squares and never having the squares repeat.
*/

// MATH CONSTANTS
// aspect ratio of an iphone screen
const ASPECT_RATIO = 9 / 16;
// adjustable height of the screen for best visibility in preview
const SCREEN_HEIGHT = 625;
// screen width adjusts with screen height to keep aspect ratio
const SCREEN_WIDTH = SCREEN_HEIGHT * ASPECT_RATIO;
// the number of slots for potential squares to be displayed on screen
const NUMBER_OF_SQUARES = 7;
// the number of spaces between those squares, including the ones on the sides is number of squares plus 2
// one square is ten times the size of a space
const SQUARE_SPACE_RATIO = 6 / 1;
// the best way I came up with to deduce the width of the squares and spaces
// adjusts based on the ratio and the number of squares
const SCREEN_SLICES = (NUMBER_OF_SQUARES + 1) + (SQUARE_SPACE_RATIO * NUMBER_OF_SQUARES);
// adjusts based on the ratio of square size to space size and the width of the screen
const SPACE_WIDTH = SCREEN_WIDTH / SCREEN_SLICES;
// adjust based on the ratio of square size to space size and the width of the screen
const SQUARE_WIDTH = SPACE_WIDTH * SQUARE_SPACE_RATIO;
const BAR_HEIGHT = SQUARE_WIDTH + (2 * SPACE_WIDTH);
const BALL_SIZE = SCREEN_WIDTH / 23;

// LOCATIONS
// potential locations of squares
var xPos = [];
var yPos = [];
for (i = 0; i < NUMBER_OF_SQUARES; i++) {
  xPos[i] = i * SQUARE_WIDTH + (i + 1) * SPACE_WIDTH;
  yPos[i] = (i + 2) * SQUARE_WIDTH + (i + 3) * SPACE_WIDTH;
}

// initial ball location
const init_ball_x = SCREEN_WIDTH / 2;
const init_ball_y = SCREEN_HEIGHT - BAR_HEIGHT - BALL_SIZE / 2;
var ball_x = init_ball_x;
var ball_y = init_ball_y;

// COLORS
const BACK_BLACK = 30;
const BAR_BLACK = 40;
const BALL_WHITE = 'white';

var clickX;
var clickY;
var xMove = 0;
var yMove = 0;
var row1 = [];
var row2 = [];


function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);

}


function draw() {
  background(BACK_BLACK);
  drawBar(0, 0, BAR_BLACK);
  drawBar(0, SCREEN_HEIGHT - BAR_HEIGHT, BAR_BLACK);
  drawBall(ball_x, ball_y, BALL_SIZE, BALL_WHITE);

  yTrack = 0;
  // if there isn't a row yet, draw one
  if (row1 == 0) {
    row1 = newRow(NUMBER_OF_SQUARES, xPos);
    for (k = 0; k < row1.length; k++) {
      drawSquare(xPos[row1[k]], yPos[yTrack], SQUARE_WIDTH, 'red');
    }

  } else if (row2 == 0) {
    for (k = 0; k < row1.length; k++) {
      drawSquare(xPos[row1[k]], yPos[yTrack], SQUARE_WIDTH, 'red');
    }
    // if there is a second row, draw a new first row
  } else {
    row1 = newRow(NUMBER_OF_SQUARES, xPos);

    // if there is a first row, keep drawing it 
  }

  // if the ball has hit the left wall, bounce off in the opposite x direction
  if (ball_x < 0) {
    // the ball bounces off the left wall
    xMove *= -1;

    // if the ball has hit the right wall, bounce off in the opposite x direction
  } else if (ball_x > SCREEN_WIDTH) {
    // the ball bounces off the right wall
    xMove *= -1;

    // if the ball has hit the top, bounce off in the opposite y direction
  } else if (ball_y < BAR_HEIGHT) {
    // the ball bounces off the top
    yMove *= -1;

    // if the ball hits the bottom of the screen, stick the ball and move the row down
  } else if (ball_y > SCREEN_HEIGHT - BAR_HEIGHT - (BALL_SIZE - 10)) {
    xMove = 0;
    yMove = 0;
    row2 = row1;
    for (l = 0; l < row2.length; l++) {
      drawSquare(xPos[row2[l]], yPos[yTrack + 1], SQUARE_WIDTH, 'red');
    }
  }

  ball_x = ball_x + xMove;
  ball_y = ball_y + yMove;


}


// this function draws a bar given an x and y coordinate for the top left
function drawBar(x_bar, y_bar, color_bar) {
  noStroke();
  fill(color_bar);
  rect(x_bar, y_bar, SCREEN_WIDTH, BAR_HEIGHT);
}


// draws a ball at a given x and y location with a given circumference and color
function drawBall(x_ball, y_ball, circum, color_ball) {
  noStroke()
  fill(color_ball)
  ellipse(x_ball, y_ball, circum);
}

// this function draws a square given the left corner x and y locations, the width/height, 
// and the color
function drawSquare(x, y, size, color) {
  noStroke();
  fill(color);
  rect(x, y, size, size);
}


// this function draws a random number of squares at random and unique x positions
function newRow(num, potentialX) {
  // a random number of squares will be drawn within the limits of 1 to the number
  // of squares determined at the beginning of this program
  squaresRand = round(random(1, num));

  // xRand will hold the xPositions at which squares will be drawn, randomly determined
  xRand = [];

  // this loops through the number of squares to be drawn (1-7) until unique x positions 
  // are determined for each of them
  for (j = 0; j < squaresRand; j++) {

    // the first x position is stored in xRand
    xRand[j] = round(random(0, num));

    // if this is the first time through, skip the rest of the conditions and draw a
    // square at whatever value was determined on the last line
    if (j == 0) {
      j = 0;

      // for all squares after the first one, check if the random x position is the same 
      // as the last one. If it is, go back and try again
    } else {
      for (i = 1; i < squaresRand; i++) {
        if (xRand[j] == xRand[j - i]) {
          j = j - 1;
        }
      }
    }
  }
  return xRand
}


// records the mouse click and finds the slope of the line created by the initial position of the 
// ball and the click and initializes the movement direction of the ball
function mouseClicked() {
  clickX = mouseX;
  clickY = mouseY;

  xMove = round((init_ball_x - clickX) / 10);
  yMove = round((init_ball_y - clickY) / 10);
}


function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
  // if all 4 of these conditions are true, then it was inside,
  // otherwise it was outside
  if ((pointX > rectX1) && // to the right of the left edge
    (pointX < rectX2) && // to the left of the right edge
    (pointY > rectY1) && // below the top edge
    (pointY < rectY2)) { // above the bottom edge
    return true;
  } else {
    return false;
  }
}