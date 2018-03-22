/*Jenna James
	HCDE 598 - Final Project
  March 12, 2018
*/

//These variables hold my "place" objects. "place1" holds the sanDiego object, "place2" holds the palmSprings object, and "placte3" holds the mountRainier object seen in line 17. 
var place1;
var place2;
var place3;

//This variable declares the value of "value" which is used in the if/else statement to cylce through each scene. 
var value = 1;

//This variable declares the value of "circles" used in the loop. 
var circles = [];

//This sets up the canvas size.
function setup() {
  createCanvas(800, 800);

//This places the objects inside the variables place1, place2, and place3.   
  place1 = new sanDiego();
  place2 = new palmSprings();
  place3 = new mountRainier();
  
//This is the loop for cricle creation displayed in the mountRainier object.  
  for (var i = 0; i < 500; i++) {
    circles.push(new Circle(random(100, 800), random(10, 800), 5));
  }

}
//This draws the background and creates the conditional logic if/else which allows a different object to display when the value of value increases. 
function draw() {
  background('oldlace');

  if (value == 1) {
    place1.display();
  } else if (value == 2) {
    place2.display();
  } else if (value == 3) {
    place3.display();
  }

}
//This creates the event function so that when the mouse is pressed a diffrent object is displayed on the screen. This also sets the logic for value so that if value is less than 3 it will increase by 1 and when it reaches 3 it will reset to 1. 
function mousePressed() {
  if (value < 3) {
    value++;
  } else {
    value = 1;
  }
}

//This function holds the object sanDiego. 
function sanDiego() {
  //This draws the main circle for the sky. 
  this.x = height / 2; //This sets the x-coordinate. 
  this.y = width / 2; //This set the y-coordinate. 
  this.diameter = (500, 500); //This sets the diameter value. 
  this.display = function() { //This allows the function to be displayed in draw(); 
    fill('lightsteelblue');
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(255, 207, 63, 150);
    ellipse(this.x, this.y, this.diameter - 400, this.diameter - 400);
    fill(255, 207, 63, 250);
    ellipse(this.x, this.y, this.diameter - 420, this.diameter - 420);
    fill('steelblue');
    arc(this.x, this.y, this.diameter, this.diameter, 0, -PI);
    
    //This creates the sailboat. 
    stroke('lightgrey');
    line(300, 480, 300, 450);
    fill('red');
    stroke('red');
    arc(this.x - 100, this.y + 80, 40, 20, 0, -PI);
    triangle(300, 450, 300, 470, 315, 470);
    
    //This create the sun's reflection in the water. 
    fill('gold');
    stroke('gold');
    rect(this.x - 45, this.y + 10, 90, 5);
    rect(this.x - 30, this.y + 20, 60, 5);
    rect(this.x - 15, this.y + 30, 30, 5);


    //This draws the cloud on the left. 
    fill('oldlace');
    noStroke();
    ellipse(this.x - 110, this.y -150, this.diameter - 475, this.diameter - 475);
    ellipse(this.x - 124, 250, 18, 18);
    ellipse(this.x - 96, 250, 18, 18);

    //This draws the cloud in the middle. 
    ellipse(this.x, this.y -180, this.diameter - 475, this.diameter - 475);
    ellipse(this.x - 14, this.y -180, this.diameter - 482, this.diameter - 482);
    ellipse(this.x +15, this.y -180, this.diameter - 482, this.diameter - 482);

    //This draws the cloud on the right. 

    ellipse(this.x + 100, this.y -150, this.diameter - 475, this.diameter - 475);
    ellipse(this.x + 86, this.y -150, this.diameter - 482, this.diameter - 482);
    ellipse(this.x +115, this.y -150, this.diameter - 482, this.diameter - 482);
  }

}

//This function holds the object palmSprings. 
function palmSprings() {



  //This creates the gradient for the sunset in the upper part of the circle by defining the rgb colors. 
  this.x = height / 2; //This sets the x-coordinate.
  this.y = width / 2; //This set the y-coordinate.
  this.diameter = (500, 500); //This sets the size. 
  this.display = function() { //This allows the object to be called in draw();
    var c2 = color(255, 131, 109); //This holds the color for the gradient
    var c1 = color(255, 151, 40); //This holds the color for the gradient
    gradientCircle(this.x, this.y, this.diameter, c1, c2);
    noStroke();

    // draws the cactus: stroke and weight
    stroke(85, 135, 9, 240);
    strokeWeight(15);
    
    //cacti on the left 
    line(this.x - 200, this.y - 65, this.x - 200, this.y);
    line(this.x - 200, this.y - 30, this.x - 180, this.y - 30);
    line(this.x - 200, this.y - 30, this.x - 220, this.y - 30);
    line(this.x - 220, this.y - 30, this.x - 220, this.y - 40);
    line(this.x - 180, this.y - 30, this.x - 180, this.y - 40);

    //cacti on the right 
    line(this.x + 150, this.y - 105, this.x + 150, this.y);
    line(this.x + 150, this.y - 70, this.x + 170, this.y - 70);
    line(this.x + 130, this.y - 70, this.x + 140, this.y - 70);
    line(this.x + 170, this.y - 70, this.x + 170, this.y - 90);
    line(this.x + 130, this.y - 70, this.x + 130, this.y - 90);

    //cacti on the far right 
    line(this.x + 200, this.y - 70, this.x + 200, this.y);
    line(this.x + 200, this.y - 40, this.x + 220, this.y - 40);
    line(this.x + 200, this.y - 40, this.x + 180, this.y - 40);
    line(this.x + 180, this.y - 40, this.x + 180, this.y - 50);
    line(this.x + 220, this.y - 40, this.x + 220, this.y - 50);

    //this draws the house.
    strokeWeight(5);
    stroke('black');
    fill('navajowhite');
    rect(this.x - 130, this.y - 72, this.diameter - 410, this.diameter - 430);
    fill('darksalmon');
    rect(this.x - 40, this.y - 72, this.diameter - 405, this.diameter - 480);
    line(this.x + 45, this.y - 52, this.x + 45, this.y - 2);
    line(this.x + 5, this.y - 52, this.x + 5, this.y - 2);

    //this draws the windows on the left side of the house.
    fill('gold');
    rect(this.x - 110, this.y - 60, this.diameter - 485, this.diameter - 475);
    rect(this.x - 75, this.y - 60, this.diameter - 485, this.diameter - 460);

    //this draws the roof line. 
    line(this.x - 140, this.y - 72, this.x + 70, this.y - 72);

    //this draws the base line of the house. 
    line(this.x - 150, this.y - 2, this.x + 70, this.y - 2);




    //outer sun
    strokeWeight('0.5');

    stroke('sandybrown');

    //lower half of circle -- the foreground 
    fill('darkolivegreen');
    arc(this.x, this.y, this.diameter, this.diameter, 0, -PI);



    //inner sun 
    fill(255, 207, 63, 150);
    ellipse(this.x, this.y - 180, this.diameter - 410, this.diameter - 410);
    fill(255, 207, 63, 200);
    ellipse(this.x, this.y - 180, this.diameter - 430, this.diameter - 430);
  }
}

//color gradient in top half circle
function gradientCircle(x, y, d, c1, c2) {
  noFill();
  for (var i = 0; i <= d; i++) {
    var inter = map(i, d, 0, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    ellipse(width / 2, height / 2, i, i);
  }


}

//This function holds the object mountRainier. 
function mountRainier() {



  this.x = height / 2; //This sets the x-coordinate.
  this.y = width / 2; //This sets the y-coordinate.
  this.diameter = (500, 500); //This sets the size. 
  this.display = function() { //This allows of the object to be called in draw(); 


    //this draws the circle for the sky. 
    fill('midnightblue');
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill('pink');

    //this draws mount rainier. 
    //center mountain peak 
    triangle(this.x, this.y - 150, this.x - 200, this.y, this.x + 200, this.y);
    //left mountain peak 
    triangle(this.x - 100, this.y - 130, this.x - 250, this.y, this.x + 100, this.y);
    //right mountain peak 
    triangle(this.x + 125, this.y - 130, this.x - 200, this.y + 60, this.x + 250, this.y);

    //this draws the snow on mount rainier.
    fill('oldlace');
    triangle(this.x, this.y - 150, this.x - 72, this.y - 100, this.x + 72, this.y - 95);
    triangle(this.x - 100, this.y - 130, this.x - 141, this.y - 95, this.x - 48, this.y - 100);
    triangle(this.x + 125, this.y - 130, this.x + 65, this.y - 95, this.x + 158, this.y - 95);

    //this draws the moon
    noStroke();
    fill('gold');
    ellipse(this.x - 80, this.y - 180, this.diameter - 450, this.diameter - 450);
    fill('midnightblue');
    ellipse(this.x - 75, this.y - 180, this.diameter - 455, this.diameter - 455);

    //this draws the trees. 
    strokeWeight(5);
    stroke('black');


    //this draws the tree on the right. 
    line(this.x + 170, this.y, this.x + 170, this.y - 50);
    noStroke();
    fill(68, 119, 10);
    triangle(this.x + 170, this.y - 70, this.x + 145, this.y - 10, this.x + 195, this.y - 10);

    //this draws the tree on the far right. 
    strokeWeight(5);
    stroke('black');
    line(this.x + 200, this.y, this.x + 200, this.y - 50);
    fill(44, 79, 4);
    noStroke();
    triangle(this.x + 200, this.y - 70, this.x + 175, this.y - 10, this.x + 225, this.y - 10);

    //this draws the tree on the left. 
    strokeWeight(5);
    stroke('black');
    line(this.x - 200, this.y, this.x - 200, this.y - 50);
    fill(44, 79, 4);
    noStroke();
    triangle(this.x - 200, this.y - 70, this.x - 225, this.y - 10, this.x - 177, this.y - 10);


    //this draws the bottom arc of the circle -- the foreground.
    noStroke();
    fill('black');
    //arc(400, 400, 500, 500, 0, -PI);
    arc(this.x, this.y, this.diameter, this.diameter, 0, -PI);

	//This creates the circle movement. 
    for (var i = 0; i < circles.length; i++) {
      circles[i].display();
      circles[i].move();
    }
  }

}

//This houses the circle information: speed, x/y position, and color. 
function Circle(circleX, circleY, radius) {
  this.x = circleX;
  this.y = circleY;
  //this.xspeed = (1);
  this.yspeed = random(0.5,1);


  this.display = function() {
    noStroke();
    noFill();
    fill('oldlace');
    ellipse(this.x, this.y, radius, radius);
  }

  //This moves the circles.
  this.move = function() {
    //this.x += this.xspeed;
    this.y += this.yspeed;

    //Creates the bounce effect by preventing the circles from going off the canvas. 
    if (this.x < 50 || this.x > width - 5) {
      this.xspeed *= -1;
    } else if (this.y < 50 || this.y > height - 5) {
      this.yspeed *= -1;

    }
  }
}