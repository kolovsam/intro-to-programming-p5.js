function setup() {
	createCanvas(600, 600);
	frameRate(30);
}

//declare and initialize useful variables
var xpos = 300;
var ypos = 300;
var rad = 20; //the radius


function draw() {

	background(220);
	
	 xpos = xpos + 1; // move to the right
    ypos = ypos + 2; // move down
    //theRad = theRad + 1; // make it bigger
	
	//circle at upper left
	stroke(150, 50, 100);
	strokeWeight(5);
	ellipse(xpos - 250, ypos - 250, rad, rad);

	//circle at lower right
	stroke(100, 5, 50);
	ellipse(xpos + 250, ypos + 230, rad, rad);

	//rectangle at upper right
	stroke(5, 100, 50);
	rect(xpos + 230, ypos - 250, rad, rad);

	//rectangle at lower left
	stroke(50, 5, 100);
	rect(xpos - 250, ypos + 230, rad, rad);
	



}