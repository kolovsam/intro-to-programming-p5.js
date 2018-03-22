/*
	Jenna James
	Assignment 5 - Bouncing Circles
  2/24/18
*/


//Arrays for holding circle objects. 
var circles = [];
var colorChange = ['powderblue', 'lightblue', 'mediumpurple'];

//This creates the canvas and the loop for cricle creation. 
function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 50; i++) {
    circles.push(new Circle(random(30, 100), random(40, 100), 20));
  }

}

//This draws the background, color, and the circle movement.  
function draw() {
  background('dimgrey');


  for (var i = 0; i < circles.length; i++) {
    circles[i].display();
		circles[i].move();
  }


}

//This houses the circle information: speed, x/y position, and color. 
function Circle(circleX, circleY, radius) {
  this.x = circleX;
  this.y = circleY;
  this.xspeed = random(2, 3);
  this.yspeed = random(0, 1);


  this.display = function() {
    noStroke();
    noFill();
    fill(random(colorChange));
    ellipse(this.x, this.y, radius, radius);
  }

  //Lines 47 and 48 are what This creates moves the circles.
  this.move = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;

    //Lines 51 through 56 create the bounce effect by preventing the circles from going off the canvas. 
    if (this.x < 0 || this.x > width - 20) {
      this.xspeed *= -1;
    } else if (this.y < 0 || this.y > height - 20) {
      this.yspeed *= -1;

    }
  }



}