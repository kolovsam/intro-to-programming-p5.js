/****HCDE 598 Final Project****/
/*** Kris Everson ***/
/*
A one-way cellular automata—adapted from 
Chapter 7 of the Nature of Code 
http://natureofcode.com/book/chapter-7-cellular-automata
///&///
https://p5js.org/examples/simulate-wolfram-ca.html
*/

// Challenge from the Nature of Code

// Expand Example 7.1 to have the following feature: 
// when the CA reaches the bottom of the Processing window, 
// the CA starts over with a new, random ruleset.

// move mouse over canvas to interact with the drawing
// click to clear the array and start over

var w = 10;
// this will be an array of 0's and 1's
var cells;

var generation = 0;
// var ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
// var ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
var ruleset = [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];


function setup() {
  createCanvas(640, 640);
  cells = Array(floor(width / w));
  for (var i = 0; i < cells.length; i++) {
    cells[i] = 0;
  }
  noStroke();
  // cells[cells.length / 2] = 1;
  frameRate(120);

}

function draw() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i] === 1) {
      // fun stuff here
			var ro = mouseX / (-1080);
			rotate(ro);
			fill(0, 0, random(200,240), 30);
			rect(i * w, generation * w, width/2, 1);


    } else {
      // more fun stuff
			// var yo = mouseX * PI;
			// rotate(yo);
			// fill(random(200,240), 0, 0, 5);
			// rect(i * w, generation * w, 2, width/2);
      
      // var ro = mouseX + mouseY / 360;
      var yo = mouseY / (HALF_PI);
			rotate(yo);
			fill(random(200,240), 0, 0, 30);
			rect(i * w, generation * w, width, 1);
			vertex(i*w, generation * w, width, width);
 
    }
  }

  // I can get it to randomize here, but I don't know how to reload the 
  // screen automatically
  if (generation < height / w) {
    randomize();
    generate();

  } else if (generation === height / w) {
    // reload automatically!
    // background('white');
    generation = 0;
  }
}

function mouseOver(){
}

function mouseClicked() {
  generation = 0;
  background('white');

}

function doubleClicked() {
// stop drawing
 		 saveFrame("draw.png");
    noLoop();
  
}

// creating the new generation
function generate() {
  var nextgen = Array(cells.length);
  // For every spot, determine new state by examing current state, and neighbor states
  // Ignore edges that only have one neighor
  for (var i = 1; i < cells.length - 1; i++) {
    var left = cells[i - 1]; // Left neighbor state
    var me = cells[i]; // Current state
    var right = cells[i + 1]; // Right neighbor state
    nextgen[i] = rules(left, me, right); // Compute next generation state based on ruleset
  }
  // The current generation is the new generation
  cells = nextgen;
  generation++;
  // reload();
}

// trying to randomize the array
function randomize() {
  for (i = 0; i < cells.length; i++) {
    // sets the random number to a whole integer, from 0 to 1
    ruleset[i] = int(random(2));

  }
}

// back to generation = 0, this should tell the program to start over. 
function reload() {
  // do this thing while traversing the # of array elements
  for (i = 0; i < cells.length; i++) {

    cells[i] = 0;
  }
  cells[cells.length / 2] = 1;
  generation = 0;

}



// rules for the cells (set 90 to start)
function rules(a, b, c) {
  if (a == 1 && b == 1 && c == 1) return ruleset[0];
  if (a == 1 && b == 1 && c == 0) return ruleset[1];
  if (a == 1 && b == 0 && c == 1) return ruleset[2];
  if (a == 1 && b == 0 && c == 0) return ruleset[3];
  if (a == 0 && b == 1 && c == 1) return ruleset[4];
  if (a == 0 && b == 1 && c == 0) return ruleset[5];
  if (a == 0 && b == 0 && c == 1) return ruleset[6];
  if (a == 0 && b == 0 && c == 0) return ruleset[7];
  return 0;
}