//Variables for colors used
var mainBodyColor = "black"
var innerBodyColor = "white"
var feetColor = "orange"

function setup() {
  createCanvas(600, 600);
  background(179, 236, 255);
} 

function draw() {}

//Character function. Setting x & y to main body (200, 200)
//Setting scale to height of main body (200)
function penguin(x, y, scale){
  stroke(feetColor);
  fill(feetColor);
  rect(x-(scale*0.25), y+(scale*0.45), scale*0.2, scale*0.075, scale*0.025);		//left foot (150, 290, 40, 15, 5)
  rect(x+(scale*0.05), y+(scale*0.45), scale*0.2, scale*0.075, scale*0.025);		//right foot (210, 290, 40, 15, 5)
  stroke(mainBodyColor);
  fill(mainBodyColor);
  ellipse(x, y, scale*0.75, scale);	//main body (200, 200, 150, 200)
  stroke(innerBodyColor);
  fill(innerBodyColor);
  ellipse(x, y+(scale*0.125), scale*0.575);	//inner body (200, 225, 115)
  ellipse(x-(scale*0.1), y-(scale*0.325), scale*0.1, scale*0.15);		//eyes (180, 135, 20, 30)
  ellipse(x+(scale*0.1), y-(scale*0.325), scale*0.1, scale*0.15);		//eyes (220, 135, 20, 30)
  stroke(mainBodyColor);
  fill(mainBodyColor);
  ellipse(x-(scale*0.085), y-(scale*0.3), scale*0.05, scale*0.075);		//pupil (183, 140, 10, 15)
  ellipse(x+(scale*0.085), y-(scale*0.3), scale*0.05, scale*0.075);		//pupil (217, 140, 10, 15)
  stroke(mainBodyColor);
  fill(feetColor);
  triangle(x-(scale*0.1), y-(scale*0.175), x, y-(scale*0.125), x+(scale*0.1), y-(scale*0.175));		//beak (180, 165; 200, 175; 220, 165)
}

//Main interactivity function
function mouseClicked() {
  var size = random(50, 200);	//When mouse clicked, random size for scaling
  penguin(mouseX, mouseY, size);
}

//Secondary interactivity function. Wanted to test out keyTyped()
function keyTyped(){
  var size1 = random(10, 50);
  if (key === 'a'){
  	penguin(mouseX,mouseY, size1);
  }
}