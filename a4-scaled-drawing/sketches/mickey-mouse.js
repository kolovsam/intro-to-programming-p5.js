function setup() { 
  createCanvas(800, 800);
    background('red');
} 

function draw() {}
  
  function drawMickey(mickeyX, mickeyY, mickeySize){
  	
  	//ears
  	stroke('black');
	strokeWeight(4);
  	fill('black');
	ellipse(mickeyX - (mickeySize * 0.8), mickeyY - (mickeySize * 0.45), mickeySize * 0.9, mickeySize * 0.9);
    ellipse(mickeyX + (mickeySize * 0.8), mickeyY - (mickeySize * 0.45), mickeySize * 0.9, mickeySize * 0.9);
  
  	
  	//head
  	stroke('black')
	strokeWeight(4);
  	fill('black');
	ellipse(mickeyX + (mickeySize * 0.005), mickeyY + (mickeySize * 0.45), mickeySize * 1.5, mickeySize * 1.5);

  
  	//face
  	//eye area
  	noStroke();
  	strokeWeight(2);
  	fill('#ffde9e');
  	ellipse(mickeyX - (mickeySize * 0.3), mickeyY + (mickeySize * 0.3), mickeySize * 0.7, mickeySize * 0.75);
  	ellipse(mickeyX + (mickeySize * 0.3), mickeyY + (mickeySize * 0.3), mickeySize * 0.7, mickeySize * 0.75);
  	
  
  	//cheek area
  	noStroke();
  	strokeWeight(2);
  	fill('#ffde9e');
  	ellipse(mickeyX - (mickeySize * 0.25), mickeyY + (mickeySize * 0.8), mickeySize * 0.8, mickeySize * 0.8);
  	ellipse(mickeyX + (mickeySize * 0.25), mickeyY + (mickeySize * 0.8), mickeySize * 0.8, mickeySize * 0.8);
  
  	//chin
  	noStroke();
  	strokeWeight(2);
  	fill('#ffde9e');
  	ellipse(mickeyX - (mickeySize * 0.0), mickeyY + (mickeySize * 1), mickeySize * 0.8, mickeySize * 0.8);
  
  	//eyes
  	stroke('black');
  	strokeWeight(1);
  	fill('white');
  	ellipse(mickeyX - (mickeySize * 0.2), mickeyY + (mickeySize * 0.5), mickeySize * 0.3, mickeySize * 0.5);
  	ellipse(mickeyX + (mickeySize * 0.2), mickeyY + (mickeySize * 0.5), mickeySize * 0.3, mickeySize * 0.5);
  
  	//pupils 
  	noStroke();
  	fill('black');
  	ellipse(mickeyX - (mickeySize * 0.15), mickeyY + (mickeySize * 0.6), mickeySize * 0.15, mickeySize * 0.25);
  	ellipse(mickeyX + (mickeySize * 0.15), mickeyY + (mickeySize * 0.6), mickeySize * 0.15, mickeySize * 0.25);
  
  	//mouth
  	stroke('black');
    strokeWeight(1);
  	fill('#bc2323');
  	ellipse(mickeyX - (mickeySize * 0.0), mickeyY + (mickeySize * 1), mickeySize * 0.45, mickeySize * 0.65);
  	
  	//tongue
  	stroke('black');
  	strokeWeight(1);
  	fill('#ff7f68');
  	ellipse(mickeyX + (mickeySize * 0.0), mickeyY + (mickeySize * 1.27), mickeySize * 0.20, mickeySize * 0.10);
  	
  	//nose area
  	noStroke();
  	fill('#ffde9e');
  	ellipse(mickeyX + (mickeySize * 0.0), mickeyY + (mickeySize * 0.9), mickeySize * 0.50);
  
  	//nose
  	noStroke();
  	fill('black');
  	ellipse(mickeyX + (mickeySize * 0.0), mickeyY + (mickeySize * 0.85), mickeySize * 0.45, mickeySize * 0.25);
  	

}

function mouseClicked(){
  var mickeySize = random(0, width / 5);
  drawMickey(mouseX, mouseY, mickeySize)
}