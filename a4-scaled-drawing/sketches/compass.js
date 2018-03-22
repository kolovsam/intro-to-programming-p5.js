//scaled compass by Jonathan Newth

var bgColor = 'black';
var lineColor = 'white';
var letterFill = 'grey';

var north = "N";
var east = "E";
var south = "S";
var west = "W";

function setup() {
  createCanvas(1000, 1000);
  background(bgColor);
}


function draw() {}


function drawCompass(x, y, compSize) {

  //compass lines
  stroke(lineColor);
  strokeWeight(compSize / 25);
  line(x, y + compSize, x, y - compSize);
  line(x - compSize, y, x + compSize, y);

  //compass cirlce
  strokeWeight(compSize / 50);
  noFill();
  ellipse(x, y, (compSize * 1.25));

  //compass heading letters
  textSize(compSize / 3);
  strokeWeight(compSize / 25);
  fill(letterFill);
  text(north, x - (compSize * 0.12), y - (compSize * 1.1));
  text(south, x - (compSize * 0.12), y + (compSize * 1.35));
  text(west, x - (compSize * 1.4), y + (compSize * 0.12));
  text(east, x + (compSize * 1.05), y + (compSize * 0.12));

}

//generate random scale compass with center at location of mouse when any key is pressed 
function keyPressed() {
  var size = random(50, width / 3);
  drawCompass(mouseX, mouseY, size);
}

////generate random scale compass with center at location of mouse when mouse is clicked 
function mouseClicked() {
  var size = random(50, width / 3);
  drawCompass(mouseX, mouseY, size);
}