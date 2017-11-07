/* 
4th November 2017
Hi, 
Below is my code for Assignment 4 
"Create a drawing that can be generated at any scale" for the course 598A.
We will draw a simple design with 2-step input from user.
-Kartika Rathee */


//Assigned variables for Stroke weight of the design
var circleWeight = 0.5;
var sqaureWeight = 0.5;


function setup() {
  createCanvas(800, 800);
  background('pink');

  //Display the instructions for input
  textSize(32);
  text("First Press the UP-Arrow Key..", 120, 30);
  text("Ready for Magic? Press DOWN-Arrow Key..", 80, 400);

}
//Our draw function is empty, as the design is being created with user's help.
function draw() {}

//This function is responsible for detecting user input & calling relevant function
//depending on whether UP arrow key is pressed or DOWN arrow key

function keyPressed() {
  if (keyCode == UP_ARROW) //if UP-arrow key is pressed
  {
    var size1 = random(0, width / 15);
    noColor(mouseX, mouseY, size1); //Draw the design without color

  } else if (keyCode == DOWN_ARROW) //if DOWN-arrow key is pressed
  {
    var size2 = random(0, width / 15);
    withColor(mouseX, mouseY, size2); //Draw the design with color
  }
  return false; //remembered to add this, Thank you Sam for pointing out in previous assignment
}

//Draws the design without any colors
function noColor(x, y, z) {

  //Draws the three circles
  strokeWeight(circleWeight);
  stroke('black');
  fill('white');
  ellipse(x, y, z * 3);
  ellipse(x, y, z * 2);
  ellipse(x, y, z * 1);

  //Draws the three squares
  stroke('black');
  strokeWeight(sqaureWeight);
  line(x - z * 1.5, y, x, y - z * 1.5);
  line(x - z * 1.5, y, x, y + z * 1.5);
  line(x + z * 1.5, y, x, y - z * 1.5);
  line(x + z * 1.5, y, x, y + z * 1.5);

  strokeWeight(sqaureWeight);
  stroke('black');
  line(x - z * 1, y, x, y - z * 1);
  line(x - z * 1, y, x, y + z * 1);
  line(x + z * 1, y, x, y - z * 1);
  line(x + z * 1, y, x, y + z * 1);

  strokeWeight(sqaureWeight);
  stroke('black');
  line(x - z * 0.5, y, x, y - z * 0.5);
  line(x - z * 0.5, y, x, y + z * 0.5);
  line(x + z * 0.5, y, x, y - z * 0.5);
  line(x + z * 0.5, y, x, y + z * 0.5);


}

//Draws the design with any colors

function withColor(x, y, z) {

  //Draws the three circles and fill them with colors
  strokeWeight(circleWeight);
  stroke('black');
  fill('#1287BA')
  ellipse(x, y, z * 3);
  fill('#A5B5E8');
  ellipse(x, y, z * 2);
  fill('#FB859C');
  ellipse(x, y, z * 1);

  //Draws the three squares

  stroke('black');
  strokeWeight(sqaureWeight);
  line(x - z * 1.5, y, x, y - z * 1.5);
  line(x - z * 1.5, y, x, y + z * 1.5);
  line(x + z * 1.5, y, x, y - z * 1.5);
  line(x + z * 1.5, y, x, y + z * 1.5);

  strokeWeight(sqaureWeight);
  stroke('black');
  line(x - z * 1, y, x, y - z * 1);
  line(x - z * 1, y, x, y + z * 1);
  line(x + z * 1, y, x, y - z * 1);
  line(x + z * 1, y, x, y + z * 1);

  strokeWeight(sqaureWeight);
  stroke('black');
  line(x - z * 0.5, y, x, y - z * 0.5);
  line(x - z * 0.5, y, x, y + z * 0.5);
  line(x + z * 0.5, y, x, y - z * 0.5);
  line(x + z * 0.5, y, x, y + z * 0.5);


}