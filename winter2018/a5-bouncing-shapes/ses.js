//Samuel Shen HCDE 598, Assignment 5, Bouncing Shapes

/*Title - The Snake */
var xLocation=[15,25,35,45,55,65,75,85,95,105];
var yLocation =[15,25,35,45,55,65,75,85,95,105];
var sizeWidth = 20
var sizeHeight = 20;
var xSpeed = [2,2,2,2,2,2,2,2,2,2]
var ySpeed = [1,1,1,1,1,1,1,1,1,1]
var xDirection = -1
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //For loop to create all 10 ellipses stored in the array
  for (var i = 0; i < xLocation.length; i++) {
  ellipse(xLocation[i],yLocation[i],sizeWidth,sizeHeight);
  
	xLocation[i] = xLocation[i] + xSpeed[i]
	yLocation[i] = yLocation[i] + ySpeed[i]
	
	//ball bounce to the right
	if (xLocation[i] > width){
	xSpeed[i] = xSpeed[i] * -1;		
	}
	//ball bounce to the left
	if (xLocation[i] < 0){
	xSpeed[i] = xSpeed[i] * -1;
	}
	//ball bounce back up
  if (yLocation[i] > height){
  ySpeed[i] = ySpeed[i] * -1;
  }
  //ball bounce back down
  if (yLocation[i] < 0+10){
  ySpeed[i] = ySpeed[i] * -1;
  }
  }

}

		
