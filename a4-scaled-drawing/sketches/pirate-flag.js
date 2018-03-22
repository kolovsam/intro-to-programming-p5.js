// This pirate flag turned into something much more disturbing 

function setup() { 
  createCanvas(400, 400);
  background(220);
} 

function draw(x,y,size) { 
  // rectangle (flag)
  fill("black");
  stroke("black");
  quad(x,y,x,y + size,x+ size * 2,y + size,x+ size * 2,y);
  
  // lines crossing (bones)
  stroke("white"); 
  strokeWeight(4);
  line(x, y, x + size *2, y + size);
  line(x + size * 2, y, x, y + size);
  
  // Face circle (skull)
  fill("white");
  ellipse(x + (1/2 * size * 2), y + (1/2 * size), size);
	
  // Face eyes 
  fill("black");
  strokeWeight(0);
	ellipse(x + (1/3 * size * 2), y + (1/3 * size), size / 6);
  ellipse(x + (2/3 * size * 2), y + (1/3 * size), size / 6);
  
  // Face mouth
  ellipse(x + (1/2 * size * 2), y + (2/3 * size), size / 3, size / 25);
}


function keyPressed() {
    var size = random(0, width / 5);
    draw(mouseX, mouseY, size);
}