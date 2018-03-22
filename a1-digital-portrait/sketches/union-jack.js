function setup() {
  createCanvas(600, 400);
   background('#0063FF');
  
   // White Part of Union Jack
  stroke('white');
	rect(250,0,105,399);
	rect(0,155,600,100);
  strokeWeight(70);
  line(0,0,600,400);
  line(0,400,600,0);
  
   // Red Part of Union Jack
  stroke('red');
	rect(300,0,5,400);
	rect(0,205,600,1);
  strokeWeight(30);
  line(0,0,600,400);
  line(0,400,600,0);

	// White borders
  stroke('white');
	strokeWeight(10);
	rect(0,150,260,15);
  rect(345,150,260,15);
  rect(0,245,260,15);
  rect(345,245,260,15);
  
  // smiley face
  stroke('yellow');
  fill('yellow');
  ellipse(300,200,250,260);
  fill('black');
  ellipse(250,150,50,50);
  ellipse(350,150,50,50);
  arc(300,235,100,100,94,160);
}

function draw() {
}