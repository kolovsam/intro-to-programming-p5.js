function setup() {

}

function draw() {

  createCanvas(400, 700);
  background('white');

  
  var lgrey = color('#c5c5c5'); // light grey
  var dgrey = color('#676767'); // dark grey
 	var tan = color('#d4c99b'); // tan
  
  strokeWeight(2)
  
  fill(dgrey);
  stroke('black');
  //left ear
  triangle(115, 435, 110, 340, 170, 380)

  //left ear
  triangle(230, 380, 290, 340, 285, 435)

	fill(lgrey);
  //bottom half face	
  beginShape();
  vertex(115, 435);
  vertex(115, 435);
  vertex(170, 380);
  vertex(230, 380);
  vertex(285, 435);
  vertex(300, 500);
  vertex(230, 550);
  vertex(170, 550);
  vertex(100, 500);
  endShape(CLOSE);

	fill(dgrey);
  stroke('black');
  //left eye shadow
  beginShape();
  vertex(125, 460);
  vertex(170, 440);
  vertex(200, 470);
  vertex(180, 490);
  vertex(140, 480);
  endShape(CLOSE);

  stroke('black');
  //right eye shadow
  beginShape();
  vertex(210, 460);
  vertex(230, 440);
  vertex(275, 460);
  vertex(260, 480);
  vertex(220, 490);
  endShape(CLOSE);

	fill('white');
  stroke('black');
  //left eye 
  triangle(140, 460, 165, 450, 180, 470)

  stroke('black');
  //right
  triangle(220, 470, 235, 450, 260, 460)
  
  
  fill(dgrey);
  stroke('black');
  //snout
  beginShape();
  vertex(170, 550);
  vertex(185, 470);
  vertex(180, 450);
  vertex(200, 440);
  vertex(220, 450);
  vertex(215, 470);
  vertex(230, 550);
  vertex(225, 560);
  vertex(200, 570);
  vertex(175, 560);
  endShape(CLOSE);

  fill(lgrey);
  // bottom mouth
  quad(180, 560, 200, 555, 220, 560, 200, 570);

  fill('black');
  // nose
  beginShape();
  vertex(190, 555);
  vertex(185, 545);
  vertex(185, 540);
  vertex(190, 535);
  vertex(210, 535);
  vertex(215, 540);
  vertex(215, 545);
  vertex(210, 555);

  endShape(CLOSE);

  
	fill(dgrey);
  
  //forehead
  beginShape();
  vertex(170, 440);
  vertex(180, 400);
  vertex(200, 390);
  vertex(220, 400);
  vertex(230, 440);
  vertex(220, 450);
  vertex(200, 440);
  vertex(180, 450);

  endShape(CLOSE);

}