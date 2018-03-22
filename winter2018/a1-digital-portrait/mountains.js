// Draws a picture of some mountains
// By Dave Molinero
// Adobe Illustrator used for concept

function setup() {
	// 700px x 500px canvas
  createCanvas(700, 500);
}

// Drawing everything in one straight shot
function draw() {
	
	// No strokes on the shapes
	strokeWeight(0);
  
	// Sky
	fill('#2962ff');
	rect(0,0,700,50);
	fill('#2979ff');
	rect(0,50,700,50);
	fill('#448aff');
	rect(0,100,700,50);
	fill('#82b1ff');
	rect(0,150,700,50);
	fill('#f8bbd0');
	rect(0,200,700,50);
	fill('#fce4ec');
	rect(0,250,700,250);
	
	//Sun
	fill('#f48fb1');
	ellipse(585,275,115,115);
	
	// Mountains
	fill('#8e24aa');
	triangle(364, 90, 210, 365, 520, 365);
	fill('#ab47bc');
	triangle(364, 90, 343, 207, 520, 365);
	fill('#ba68c8');
	triangle(210, 170, 368, 365, 54, 365);
	fill('#ce93d8');
	triangle(210, 170, 190, 282, 368, 365);
	triangle(485, 142, 644, 365, 328, 365);
	fill('#e1bee7');
	triangle(485, 142, 480, 282, 644, 365);
	
	// Hills
	fill('#26a69a');
	ellipse(213, 500, 788, 400);
	fill('#00897b');
	ellipse(521, 496, 778, 400);
	fill('#00796b');
	ellipse(268, 567, 778, 400);
	
	// Outline Overlay
	strokeWeight(16)
	stroke('#ffffff');
	strokeCap(SQUARE);
	
	// Top
	line(32, 32, 668, 32);
	
	// Right
	line(668, 24, 668, 476);
	
	// Bottom
	line(32, 468, 668, 468);
	
	// Left
	line(32, 24, 32, 476);
	
	// M
	fill('#ffffff');
	strokeWeight(0);
	beginShape()
		vertex(68, 428);
		vertex(68, 330);
		vertex(90, 330);
		vertex(100, 400);
		vertex(112, 330);
		vertex(133, 330);
		vertex(133, 428);
		vertex(118, 428);
		vertex(118, 358);
		vertex(108, 428);
		vertex(93, 428);
		vertex(82, 358);
		vertex(82, 428);
		vertex(68, 428);
	endShape();
}