/*Joel Sytsma 
Bouncing objects
*/

// defining the size of the circle
const sizeOfCircle = 20;
// array for the speed of the direction along the x axis
var xDirection = [5, 4.5, 4, 3.5, 2.8, 2.5, 2, 1.5, 1];
// array for the speed of the direction along the y axis
var yDirection = [1, 1.5, 2, 2.5, 3.2, 3.5, 4, 4.5, 5];
// array for the color of the circles
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'maroon', 'seafoam', 'black']
// array for the location of the circles in the x axis
var xLocation = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200];
// array for the location of the circles in the y axis
var yLocation = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200];

//creating the background
function setup() {
  createCanvas(400, 400);
}
// the draw function to enable the program to draw the ellipses
function draw() {
  background(220);
  
	//setting up the "for loop" that will query the arrays
  for (i = 0; i < 10; i++) {
    // defining where the ellipses will render
    fill(colors[i]);
    ellipse(xLocation[i], yLocation[i], sizeOfCircle, sizeOfCircle);
    
		// defining the locomotion of the ellipses
    xLocation[i] = xLocation[i] + xDirection[i];
    yLocation[i] = yLocation[i] + yDirection[i];
    
		// defining the bouncing characteristic of the ellipses
    if (xLocation[i] > width) {
      xDirection[i] = xDirection[i] * -1;
    }
    if (xLocation[i] < 0) {
      xDirection[i] = xDirection[i] * -1;
    }
    if (yLocation[i] > height) {
      yDirection[i] = yDirection[i] * -1;
    }
    if (yLocation[i] < 0) {
      yDirection[i] = yDirection[i] * -1;
    }
  }
}