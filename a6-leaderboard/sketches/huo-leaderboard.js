/* leaderboard

HCDE 598A
charlie huo, 11/20/17 */


const TABLE_ORIGIN_X = 150;
const TABLE_ORIGIN_Y = 50;

const CELL_WIDTH = 100;
const CELL_HEIGHT = 30;

const BUTTON_X = 280;
const BUTTON_Y = 150;

const TEST_ARRAY = [95, 71, 81, 76, 51, 10, 38, 91, 32, 44, 19, 82, 89, 72, 61];
var displayArray = [];

var displayString = 'TEST';


function setup() {
  createCanvas(400, 600);
  background(240);

  displayArray = TEST_ARRAY;

  //draw the table on canvas, fill in the test scores, and calculate its average
  drawTable(displayArray.length, 1, TABLE_ORIGIN_X, TABLE_ORIGIN_Y, CELL_WIDTH, CELL_HEIGHT);
  printCount(15, TABLE_ORIGIN_X - 50, TABLE_ORIGIN_Y + 3, CELL_HEIGHT);
  printArray(displayArray, TABLE_ORIGIN_X, TABLE_ORIGIN_Y, CELL_WIDTH, CELL_HEIGHT);
  average(displayArray, TABLE_ORIGIN_X + CELL_WIDTH / 2, TABLE_ORIGIN_Y + (displayArray.length + 0.5) * CELL_HEIGHT);

}

function draw() {
  //draw buttons for different functions on canvas
  drawButtons(BUTTON_X, BUTTON_Y, 'yellow', 'orange');
}

//creating hotspots and calling functions for the buttons
function mousePressed() {
  if (mouseX > BUTTON_X && mouseX < BUTTON_X + 100 && mouseY > BUTTON_Y + 100 && mouseY < BUTTON_Y + 130) {
    displayArray = TEST_ARRAY;
    displayString = 'TEST';
  } else if (mouseX > BUTTON_X && mouseX < BUTTON_X + 100 && mouseY > BUTTON_Y + 150 && mouseY < BUTTON_Y + 180) {
    displayArray = randomArray(15);
    displayString = 'RANDOM';
  } else if (mouseX > BUTTON_X && mouseX < BUTTON_X + 100 && mouseY > BUTTON_Y && mouseY < BUTTON_Y + 30) {
    displayArray = sortScore(displayArray);
  } else if (mouseX > BUTTON_X && mouseX < BUTTON_X + 100 && mouseY > BUTTON_Y + 50 && mouseY < BUTTON_Y + 80) {
    displayArray = reverse(sortScore(displayArray));
  }

  //update displayed data
  drawTable(displayArray.length, 1, TABLE_ORIGIN_X, TABLE_ORIGIN_Y, CELL_WIDTH, CELL_HEIGHT);
  printArray(displayArray, TABLE_ORIGIN_X, TABLE_ORIGIN_Y, CELL_WIDTH, CELL_HEIGHT);
  average(displayArray, TABLE_ORIGIN_X + CELL_WIDTH / 2, TABLE_ORIGIN_Y + (displayArray.length + 0.5) * CELL_HEIGHT);
}

//draws a blank table
function drawTable(rows, columns, originX, originY, cellX, cellY) {
  for (t = 0; t < rows; t++) {
    for (i = 0; i < columns; i++) {
      strokeWeight(1);
      fill('white');
      stroke('black');
      rect(originX + cellX * i, originY + cellY * t, cellX, cellY);
    }
  }
}

//fill the table with values from an array
function printArray(array, originX, originY, cellX, cellY) {
  for (i = 0; i < array.length; i++) {
    noStroke();
    fill('black');
    smooth();
    textAlign(CENTER, CENTER);
    text(array[i], originX + cellX / 2, originY + cellY * (i + 0.5));
  }
  //draw a rectangle in background color to clear the previous text
  noStroke();
  fill(240);
  rect(originX, originY - cellY, 100, 30);
  //and then print text
  noStroke();
  fill('black');
  text(displayString, originX + cellX / 2, originY - cellY / 2);
}

//count the number of rows/values in the table/array and display it to the left of the table
function printCount(number, originX, originY, cellY) {
  var array = [];
  for (i = 0; i < number; i++) {
    append(array, i + 1);
    noStroke();
    fill('black');
    text(array[i], originX, originY + cellY * (i + 0.5));
  }
}

//calculate and display the average of values from the array
function average(array, printX, printY) {
  var total = 0;
  var avg = 0;
  for (i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  avg = total / array.length;
  //draw a rectangle in background color to clear the previous text
  noStroke();
  fill(240);
  rect(printX - 30, printY - 10, 100, 50);
  //and then print text
  noStroke();
  fill('black');
  text('AVG   ' + int(avg), printX, printY);
}

//ranking function, called by pressing the buttons
function sortScore(array) {
  var newArray = sort(array, array.length);
  return newArray;
}

//draw the visual display and clickable effect of buttons
function drawButtons(originX, originY, color1, color2) {
  fill(color1);
  stroke(color2);
  rect(originX, originY, 100, 30);
  rect(originX, originY + 50, 100, 30);
  rect(originX, originY + 100, 100, 30);
  rect(originX, originY + 150, 100, 30);

  if (mouseIsPressed) {
    noStroke();
    fill(color2);
    if (mouseX > originX && mouseX < originX + 100 && mouseY > originY && mouseY < originY + 30) {
      rect(originX, originY, 100, 30);
    } else if (mouseX > originX && mouseX < originX + 100 && mouseY > originY + 50 && mouseY < originY + 80) {
      rect(originX, originY + 50, 100, 30);
    } else if (mouseX > originX && mouseX < originX + 100 && mouseY > originY + 100 && mouseY < originY + 130) {
      rect(originX, originY + 100, 100, 30);
    } else if (mouseX > originX && mouseX < originX + 100 && mouseY > originY + 150 && mouseY < originY + 180) {
      rect(originX, originY + 150, 100, 30);
    }
  }
  textAlign(CENTER, CENTER);
  fill('black');
  noStroke();
  text('rank: low to high', originX + 50, originY + 15);
  text('rank: high to low', originX + 50, originY + 65);
  text('test scores', originX + 50, originY + 115);
  text('random scores', originX + 50, originY + 165);
}

//generate an array with a certain number of random integers ranging from 0 - 100
function randomArray(numberOfValues) {
  var array = [];
  for (i = 0; i < numberOfValues; i++) {
    append(array, int(random(0, 101)));
  }
  return array;
}