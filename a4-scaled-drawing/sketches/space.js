function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(238);
}


function setup(){
	createCanvas(1000,1000);
  background(238);
  angleMode(DEGREES);
}
function draw(){}

function drawSpace(x,y,spaceSize){
	stroke(0,35,96);
  strokeWeight(spaceSize*0.04);
  fill(0,73,120);
  ellipse(x,y,spaceSize);
  //lower half behind
  noStroke();
  fill(238,238,238);
  arc(x,y,spaceSize*0.96,spaceSize*0.96,0,180);
  //sun
  fill(255,243,0);
  stroke(255,168,0);
  ellipse(x,y,spaceSize*0.5);
  //lower half front
  noStroke();
  fill(0,207,240,200);
  arc(x,y,spaceSize*0.96,spaceSize*0.96,0,180);
  //upper small
  fill(0,154,231);
  strokeWeight(spaceSize*0.04);
  stroke(0,35,96);
  ellipse(x,y-0.5*spaceSize,spaceSize*0.1);
  //lower small
  ellipse(x,y+0.5*spaceSize,spaceSize*0.1);
	//left small
  fill(255,239,0);
  ellipse(x-0.5*spaceSize,y,spaceSize*0.1);
  ellipse(x+0.5*spaceSize,y,spaceSize*0.1);
  //star decoration
  noStroke();
	fill(106,221,238);
  rect(x-0.25*spaceSize, y-0.35*spaceSize,spaceSize*0.03,spaceSize*0.03);
  rect(x+0.25*spaceSize, y-0.35*spaceSize,spaceSize*0.03,spaceSize*0.03);
	rect(x-spaceSize*0.015, y-0.41*spaceSize,spaceSize*0.03,spaceSize*0.03);
  

}

function keyPressed(){
	var size = random(0,width / 4);
  drawSpace(mouseX, mouseY,size)
}