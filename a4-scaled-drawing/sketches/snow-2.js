/*
Andrea Sequeira
Assignment #4: Scaled Drawing
*/

// Define colors
var bgColor = 'lightblue';
var lineColor = 'white';


// Draw canvas
function setup() {
  createCanvas(500, 500);
  background(bgColor);
}


function draw() {}

// Draw a snowflake with center x, y
function drawSnowflake(x, y, snowflakeSize) {

  // Draw the lines radiating from x, y
  stroke(lineColor);
  strokeWeight(snowflakeSize / 10);
  line(x, y, x, y + snowflakeSize);
  line(x, y, x, y - snowflakeSize);
  line(x, y, x + snowflakeSize * 0.9, y + snowflakeSize * 0.5);
  line(x, y, x + snowflakeSize * 0.9, y - snowflakeSize * 0.5);
  line(x, y, x - snowflakeSize * 0.9, y + snowflakeSize * 0.5);
  line(x, y, x - snowflakeSize * 0.9, y - snowflakeSize * 0.5);

  // Draw the 'V' shapes towards the ends of the lines

  //bottom left
  noFill();
  beginShape();
  vertex(x - snowflakeSize * 0.6, y + snowflakeSize * 0.6);
  vertex(x - snowflakeSize * 0.5, y + snowflakeSize * 0.3);
  vertex(x - snowflakeSize * 0.8, y + snowflakeSize * 0.2);
  endShape();

  //top right
  noFill();
  beginShape();
  vertex(x + snowflakeSize * 0.6, y - snowflakeSize * 0.6);
  vertex(x + snowflakeSize * 0.5, y - snowflakeSize * 0.3);
  vertex(x + snowflakeSize * 0.8, y - snowflakeSize * 0.2);
  endShape();

  //top left
  noFill();
  beginShape();
  vertex(x - snowflakeSize * 0.6, y - snowflakeSize * 0.6);
  vertex(x - snowflakeSize * 0.5, y - snowflakeSize * 0.3);
  vertex(x - snowflakeSize * 0.8, y - snowflakeSize * 0.2);
  endShape();

  //bottom right
  noFill();
  beginShape();
  vertex(x + snowflakeSize * 0.6, y + snowflakeSize * 0.6);
  vertex(x + snowflakeSize * 0.5, y + snowflakeSize * 0.3);
  vertex(x + snowflakeSize * 0.8, y + snowflakeSize * 0.2);
  endShape();

  //bottom
  noFill();
  beginShape();
  vertex(x - snowflakeSize * 0.2, y + snowflakeSize * 0.8);
  vertex(x, y + snowflakeSize * 0.6);
  vertex(x + snowflakeSize * 0.2, y + snowflakeSize * 0.8);
  endShape();

  //top
  beginShape();
  vertex(x + snowflakeSize * 0.2, y - snowflakeSize * 0.8);
  vertex(x, y - snowflakeSize * 0.6);
  vertex(x - snowflakeSize * 0.2, y - snowflakeSize * 0.8);
  endShape();

}

// Draw a snowflake at the mouse's location when user clicks
function mousePressed() {
  var size = random(0, width / 6);
  drawSnowflake(mouseX, mouseY, size);
}