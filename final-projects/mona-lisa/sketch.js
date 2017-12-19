/*  dong li
		HCDE 598 final assignment
    Mona Lisa Reloaded
		Dec 2017
*/

//canvas size
const CANVAS_WIDTH = 512;

//fidelity of the final image
const FIDELITY = 6;

//initial dot size
const SIZE = 0;

var img;
//initial dot number
var rows = Math.pow(2, SIZE);

let dots = [];
let cols = [];

function preload() {
  img = loadImage("mona lisa.jpg");

}

function setup() {
  frameRate(15);
  createCanvas(CANVAS_WIDTH, CANVAS_WIDTH);
  background(220);

  //construct cols[] as a 2D array
  for (var i = 0; i < rows; i++) {
    cols[i] = [];
  }



  //draw grids on the canvas, restore the x coordinate of lattice points
  for (i = 0; i < rows; i++) {
    for (j = 0; j < rows; j++) {
      cols[i][j] = j * CANVAS_WIDTH / rows;
    }
  }


  //draw a dot on each lattice point
  var x;
  var y;

  for (i = 0; i < rows; i++) {
    for (j = 0; j < rows; j++) {
      x = cols[i][j];
      y = cols[j][i];
      dots.push(new Dot(x, y));
    }
  }

}


function draw() {
  background(20);
  for (i = 0; i < dots.length; i++) {
    dots[i].show();
    dots[i].move();
  }
}


//use parameter "level" to keep track of the time the dot has split
class Dot {
  constructor(x, y, level) {
    this.x = x;
    this.y = y;
    this.level = level || 0;
    //calculate the size of the dots, so that they would fully cover the canvas
    this.r = CANVAS_WIDTH / (Math.pow(2, this.level) * rows)
    this.size = 1;
    //get color from the image Mona Lisa
    this.color = img.get(this.x, this.y);
  }

  show() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.r * this.size, this.r * this.size);
  }

  move() {
    //animation
    if (this.size > 0.2) {
      this.size = random(0.8, 1) * this.size;
      //if the dot gets too small, reset it to its full size
    } else {
      this.size = 1;
    }
  }

  //check if the cursor is within the dot
  within(x, y) {
    if (dist(this.x, this.y, x, y) < 2 * this.r) {
      return true;
    }
  }

}

//split one big dot into four small ones, while make sure they still cover the full canvas
function splitDot(idx) {
  var dot = dots[idx];
  //delete the big dot
  dots.splice(idx, 1);
  //add four small dots
  dots.push(new Dot(dot.x, dot.y, dot.level + 1));
  dots.push(new Dot(dot.x, dot.y + dot.r / 2, dot.level + 1));
  dots.push(new Dot(dot.x + dot.r / 2, dot.y, dot.level + 1));
  dots.push(new Dot(dot.x + dot.r / 2, dot.y + dot.r / 2, dot.level + 1));
}

function mouseMoved() {
  for (i = 0; i < dots.length; i++) {
    //check if the dot has split for a given number of times.
    //if not, split it
    if (dots[i].within(mouseX, mouseY) && dots[i].level < FIDELITY - SIZE) {
      splitDot(i);
    }
    //if so, scale the dot back to its original size;
    else if (dots[i].within(mouseX, mouseY) && dots[i].level == FIDELITY - SIZE) {
      dots[i].size = 1;
    }
  }
}
