function setup() { 
  createCanvas(600, 500);
  background(0);
} 

function mouseClicked() {
  var x = mouseX;
  var y = mouseY;
  var size = random(20);
  
  drawChar(x,y,size);
}

function drawChar(x,y,size) {

  fill('white');
  noStroke();
  ellipse(x,y,20*size,20*size);
  
  fill('black');
  ellipse(x-(4*size),y-(5*size),5*size,5*size);
  ellipse(x+(4*size),y-(5*size),5*size,5*size);
  ellipse(x,y+(4*size),10*size,10*size);
  
}

function draw() {}