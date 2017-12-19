/*

Andrea Sequeira
Final Project - HCDE 598A

This program is a geography game. The aim is for the user to click 
as close as possible to the actual location of the city presented 
on the map. The user plays 10 rounds, and then gets their final 
score.

**************************************************************

I used an additional program to figure out the x and y coordinates
of each city for this specific map, to build my arrays manually. 
The additional program prints the x and ylocation of a mouse click.
This program's code is shown below:

var map;

function setup() {
  createCanvas(800, 600);
  map = createImg("http://bit.ly/2iarLFG");
  map.hide();

}

function draw() {
  background('white');
  image(map, 0, 100);
}

function mouseClicked() {
  print(mouseX + " " + mouseY);
}

*/


// Initialize variables
var map; // Create empty variable for storing map image
var pageNum = 0; // Initialize page number
var gameCount; // Initialize number of games played
var pointCount; // Initialize user's score
var points; // Create empty variable for tracking score
var arrayPos; // Create empty variable for city selection
var arrayPosNotUsed = []; // Empty array for keeping track of cities not used yet
var subset1 = []; // Array for subsetting city array
var subset2 = []; // Array for subsetting city array
var num; // Create empty variable for selecting unused cities
var xPos; // Variable for user's mouse X
var yPos; // Variable for user's mouse Y

// Constants for text
const FONT = 'Helvetica';
const CONTINUE = "Click to continue";
const PROMPT = "Where is";
const POINTS_3 = "Great job! 3 points";
const POINTS_2 = "Good job! 2 points";
const POINTS_1 = "You're in the right area! 1 point";
const POINTS_0 = "Not close enough! 0 points";
const BEGIN_INSTRUC = "Press any key to begin";
const GAME_OVER = "Game over! You scored "
const TOTAL_POINTS = "/30 points.";
const PLAY_AGAIN = "Press any key to play another game!";
const ROUND = "Round: ";
const SCORE = "Score: ";

// Constants for color
const BG_COLOR = 'white';
const ACCENT_COLOR = 'teal';
const HIGHLIGHT_COLOR = 'red';

// Set constants for city names array
const CITIES = ["Accra", "Bern", "Caracas", "Dubai", "Dhaka",
  "Gibraltar", "Havana", "Islamabad", "Jakarta",
  "Kuala Lumpur", "London", "Malé", "Manama",
  "Nairobi", "Ottawa", "Panama City", "Quito",
  "Riyadh", "Seattle", "Tehran", "Vatican City",
  "Zagreb", "Bangalore", "Moscow", "Perth", "Lagos", "Reykjavik",
  "Anchorage", "Beijing", "Istanbul"
];

// Set constants for city x coordinates array
const CITIES_X = [377, 396, 216, 506, 593, 364, 183, 545, 638,
  623, 377, 555, 498, 469, 213, 182, 185, 488, 115,
  494, 405, 416, 566, 455, 644, 388, 335, 81, 635, 442
];

// Set constants for city y coordinates array
const CITIES_Y = [378, 263, 364, 320, 324, 296, 329, 303, 411,
  382, 250, 387, 323, 394, 260, 370, 396, 329, 242,
  296, 281, 269, 355, 231, 486, 375, 209, 173, 270, 282
];


function setup() {
  createCanvas(800, 600);

  // Set some text/shape defaults
  textSize(32);
  textFont(FONT)
  noStroke();

  // Load the map image from web content
  // Credit to author Al MacDonald and editor Fritz Lekschas
  map = createImg("http://bit.ly/2iarLFG");
  map.hide(); // Don't display map yet
}


function draw() {
  // Draw white background with the map image
  background(BG_COLOR);
  image(map, 0, 100);

  // Function for drawing pages
  drawPage(pageNum);
}


// Function to draw page content, with different pages for 
// intro, asking a question, showingthe answer, and ending 
// the game
function drawPage(pageNum) {
  if (pageNum == 0) {
    makeArray();
    intro();
  } else if (pageNum == 1) {
    askQuestion();
  } else if (pageNum == 2) {
    showAnswer();
  } else if (pageNum == 3) {
    endGame();
  }
}


// Function to create an array of numbers increasing by 1 - 
// this array is modified, removing array positions used
// so that the game does not present the same array number
// twice (i.e. ask the same city twice in a game)
function makeArray() {
  for (i = 0; i < CITIES.length; i++) {
    arrayPosNotUsed[i] = i;
  }
}


// Typing any key gets a city for the first round, or starts
// a new game after the end game screen
function keyTyped() {
  if (pageNum == 0) {
    getArrayPos();
    pageNum++;
  } else if (pageNum == 3) {
    pageNum = 0;
  }
}


// This function randomly selects a city from the array list
// by selecting from an array of 'array positions' not yet used
// to avoid duplicate cities in a game. It works by selecting a
// number from the number of cities left, and then removes the city
// number that is going to be used from the current game by
// subsetting and then concatenating the array.
function getArrayPos() {
  num = int(random(arrayPosNotUsed.length));
  arrayPos = arrayPosNotUsed[num];
  subset1 = subset(arrayPosNotUsed, 0, num);
  subset2 = subset(arrayPosNotUsed, num + 1, arrayPosNotUsed.length);
  arrayPosNotUsed = concat(subset1, subset2);
}


// When a mouse is clicked on a question page, it saves the x
// and y coordinates, increases the game count, and goes to
// the next page (the answer).
// When a mouse is clicked on an answer page, it goes to the next
// page (i.e. gets a new array position and shows another question,
// or shows the end game screen)
function mouseClicked() {
  if (pageNum == 1) {
    xPos = mouseX;
    yPos = mouseY;
    gameCount++;
    pageNum++;
  } else if (pageNum == 2) {
    pointCount += points;
    getArrayPos();
    if (gameCount < 11) {
      pageNum = 1;
    } else {
      pageNum = 3;
    }
  }
}


// Draws a circle indicating the user's guess
function drawGuess(x, y) {
  fill(ACCENT_COLOR);
  ellipse(x, y, 10, 10);
}


// Draws a circle indicating the correct answer
function drawCorrect(x, y) {
  fill(HIGHLIGHT_COLOR);
  ellipse(x, y, 10, 10);
}


// Compared the user's guess to the correct answer, and 
// determines the number of points depending on how close they are
function compareLocations(x1, y1, x2, y2) {
  var xDiff = abs(x1 - x2); // Difference in x coordinates
  var yDiff = abs(y1 - y2); // Difference in y coordinates
  fill(ACCENT_COLOR);
  textSize(32);

  // 3 points if both x and y coords are less than 5 pixels apart
  if (xDiff <= 5 && yDiff <= 5) {
    text(POINTS_3, 260, 70);
    points = 3;

    // 2 points if both x and y coords are less than 10 pixels apart
  } else if (xDiff <= 10 && yDiff <= 10) {
    text(POINTS_2, 260, 70);
    points = 2;

    // 1 point if both x and y coords are less than 50 pixels apart
  } else if (xDiff <= 50 && yDiff <= 50) {
    text(POINTS_1, 200, 70);
    points = 1;

    // 0 points if both x and y coords are more than 50 pixels apart
  } else {
    text(POINTS_0, 220, 70);
    points = 0;
  }
  textSize(25);
  text(CONTINUE, 300, 100); // Instructions for next page
}


// Function to show intro page
function intro() {
  textSize(32);
  fill(ACCENT_COLOR);
  rect(200, 20, 400, 80, 20);
  fill(BG_COLOR);
  text(BEGIN_INSTRUC, 240, 70);
  gameCount = 0; // Initialize number of games played
  pointCount = 0; // Initialize user's score
}


// Function to show end of game page
function endGame() {
  text(GAME_OVER + pointCount + TOTAL_POINTS, 200, 70);
  text(PLAY_AGAIN, 200, 100);
}


// Function to show pages asking a new question
function askQuestion() {
  fill(ACCENT_COLOR);
  textSize(32);
  text(PROMPT + " " + CITIES[arrayPos] + "?", 280, 70);
  textSize(15);
  rect(55, 25, 100, 64, 20);
  fill(BG_COLOR);
  text(ROUND + gameCount, 70, 50);
  text(SCORE + pointCount, 70, 70);
}


// Function to show answer pages - calls functions for drawing the
// user's guess, correct location, and comparing them
function showAnswer() {
  drawGuess(xPos, yPos);
  drawCorrect(CITIES_X[arrayPos], CITIES_Y[arrayPos]);
  compareLocations(xPos, yPos, CITIES_X[arrayPos], CITIES_Y[arrayPos]);
}