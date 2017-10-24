/* HCDE 598A - AUT17
Jenny Thai Nguyen
*/

function setup() {
    // create empty canvas
    createCanvas(500, 400);

}

// declare and initialize useful variables
var myColor = 0;
var xCoord = 100;
var xCoord2 = 100;
var xCoord3 = 225;
var xCoord4 = 100;
var yCoord = 100;
var yCoord2 = 100;
var yCoord3 = 100;
var yCoord4 = 100;
var theRad = 10; 

function draw() {
    // reset the background each time the frame updates
    background('black');

    // character A
    strokeWeight(10);
    stroke('yellow');
    fill(myColor); // gray scale only
  	rect(xCoord-70, yCoord-80, 30, 20, 20);
 	 	if (xCoord < 210) {
    xCoord = xCoord + 1.2; // move to the right
    yCoord = yCoord + 2.1; // move down
}
 	
  	//character B
  	strokeWeight(10);
  	stroke('blue');
  	fill(myColor);
  	ellipse(xCoord2/2, yCoord2+270, theRad);	
  	
		if (xCoord2 < 400) {
    xCoord2 = xCoord2 + 1.8; // move to the right
    yCoord2 = yCoord2 - 0.85; //move up

}
  
  	//character C
  	strokeWeight(10);
  	stroke('green');
  	fill(myColor);
  	rect(xCoord3*4, yCoord3-135, 20, 20, 20, 15, 10, 5);
  	if (yCoord3 < 350) {
    xCoord3 = xCoord3 - 1.5; // move to the left
    yCoord3 = yCoord3 + 2.6; // move down
      
}
  	//character D
  	strokeWeight(10);
  	stroke('orange');
		fill(myColor);
  	rect(xCoord4*4.5, yCoord4*3.7, 20, 20);
  
  	if (yCoord4 > 60) {
    xCoord4 = xCoord4 - 1.1; // move to the left
    yCoord4 = yCoord4 - 1.1; //move up
    
    }
}