/* Village Scene HCDE 598 final project by Helen Enguerra */

//colors found at https://www.w3schools.com/cssref/css_colors.asp 

//variables for pole dimensions
var rectWidth = 6
var rectHeight = 40

//positioning poles 
var poleDist = 15.5
var poleYorigin = 280
var poleXorigin = 25

//rock floor configuration 
var rWidth = 15
var rHeight = 10

//variables for villager
var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;


function setup() { 
  createCanvas(400, 400);
  // rotates ellipse for coconut leaves using degrees instead of radians
  angleMode(DEGREES); 
  
} 

function draw() {
  //village and villager drawn in function draw to allow villager to follow mouse
  background(220);
  push();
  noFill();
  
  //draws the river
  strokeWeight(20);
  stroke('royalblue');
  bezier(400, 20, 40, 80, 400, 300, 100, 400);
 
  //draws villagers and samoan houses scene 
  
  villager(100, 90);
  villager(40, 200);
  villager (25, 200);
  villager (100, 300);
  
  pop();
  faleSamoa(0,0); 
  push()
  
  scale(0.9);
  faleSamoa(50, -90);
   
  push();
  scale(0.6);
  faleSamoa(-10, -50);
  pop();
  
  push();
   scale(0.5)
 faleSamoa(100, -200);
  pop();
  
  push();
   scale(0.5);
 faleSamoa(10, -150);
  pop();
  
  //draws coconut tree
  coconutTree(); 
  
  //draws villager where ever the mouse is
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);
  //draws villager 
  strokeWeight(0);
  fill('saddlebrown');
  ellipse (x + 5.5, y - 5, 10, 12);  
  rect(x, y, 11, 20); 
  
  
}
//draws samoan house using functions 
function faleSamoa (x,y,r, pole, floor,tree) { 
  push();
  translate(x,y);
  samoanRoof (r);
  poles (pole); 
  rockFloor(floor);
  pop();
  
  
}
 //draws poles for samoan house 
function poles (x,y, pole) { 
  push();
  translate(x,y);
  for (var i = 0; i < 5; i++) {
    
    strokeWeight(0); 
    fill('darkgoldenrod');
    rect(poleXorigin + i*poleDist, poleYorigin, rectWidth, rectHeight); 
  
  }
  pop();
}  

//draws rock floor
function rockFloor(x,y,floor) {
  push()
  translate(x,y)
  strokeWeight(0);
  fill('grey');
  for (var j = 0; j < 5; j++) { 
  for (var n = 0; n < 1; n++){
  rect(20 + j + j*rWidth, 320 + n + n*rHeight, 15, 10, 4, 6, 0.6, 0.6); 
  }
  }
  pop();
}

//Samoan roof configuration 
var roofLx = 20
var roofLy = 280

var roofMx = 60 
var roofMy = 250

var roofRx = 100
var roofRy = 280

 
//draws roof of samoan house
function samoanRoof(x,y,r) {
  push();
  translate(x,y);
  fill('sienna');
  strokeWeight(0);
  strokeJoin(ROUND);  
  triangle(roofLx, roofLy, roofMx, roofMy, roofRx, roofRy); 
  pop();
   
} 

//coconut configuration
var treeLx = 170; //tree trunk left point
var treeLy = 150

var treeMx = 154 //tree trunk Mid point 
var treeMy = 80

var treeRx = 200//tree trunk Right point
var treeRy = 150

//draws coconut tree
function coconutTree(tree) {
  push();
  //draws coconut tree trunk
  strokeWeight(0); 
  fill('saddlebrown'); 
  triangle(treeLx, treeLy, treeMx, treeMy, treeRx, treeRy); 
  //draws ellipse also draws the coconut leaves and rotates them around tree midx&y
  translate(155,80);
  stroke(1);
  fill('darkgreen');
  rotate(120);
  ellipse(0, -25, 10, 60);
  rotate(70);
  ellipse(0, -25, 10, 60);
  rotate(40);
  ellipse(0, -25, 10, 60);
  rotate(220);
  ellipse(0, -25, 10, 60);
  rotate(190);
  ellipse(0,-25, 10, 50);  
  rotate(110);
  ellipse(0, -25, 10, 50); 
  
  //drawing and positioning coconuts
  strokeWeight(0);
  fill('brown');
  ellipse(3, 8, 10, 12);
  rotate(300);
  ellipse(5, 8, 10, 13);
  pop();
  
  
} 
//draws village people
function villager (x,y) {
  strokeWeight(0); 
  fill('saddlebrown');
  ellipse (x + 5.2, y -5, 10, 12);
  rect(x,y, 10, 15); 
    
}




