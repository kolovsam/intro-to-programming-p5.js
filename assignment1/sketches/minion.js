function setup() {
  createCanvas(600, 500);
  background('lightblue');
  
  // shadow
  
  stroke('white'); 
  fill('white');
	ellipse(290, 400, 280, 80);
  
  // minion body
  
  stroke('black'); // feet
  fill('black');
  rect(260, 360, 15, 30);
  
  stroke('black');
  fill('black');
  rect(305, 360, 15, 30);
  
  stroke('black'); // shoes
  fill('black');
	ellipse(260, 390, 30, 15);
  
  stroke('black'); 
  fill('black');
	ellipse(320, 390, 30, 15);

  stroke('blue'); // pants
  fill('blue');
  ellipse(290, 305, 140, 140);

  stroke('yellow'); // body
  fill('yellow');
  rect(220, 125, 140, 180);
  
  stroke('black'); // hair
  strokeWeight(2);
  line(290, 30, 290, 55);
  line(280, 35, 290, 55);
  line(300, 35, 290, 55);

  stroke('yellow');
  fill('yellow');
  ellipse(290, 125, 140, 140);
  
  stroke('yellow');// left hand
  fill('yellow');
	quad(220, 250, 220, 270, 190, 310, 190, 290);
  
  stroke('black'); 
  fill('black');
  ellipse(190, 300, 18, 18);
  
  stroke('yellow'); // right hand
  fill('yellow');
	quad(360, 250, 360, 270, 380, 290, 380, 270);
  
  stroke('yellow'); 
  fill('yellow');
	quad(380, 270, 380, 290, 400, 280, 400, 260);
  
  stroke('black'); 
  fill('black');
  ellipse(400, 270, 18, 18);


  // minion face
  
  stroke('black');
  fill('black');
  rect(220, 125, 140, 20);

  stroke('grey');
  fill('grey');
  ellipse(290, 135, 80, 80);

  stroke('white');
  fill('white');
  ellipse(290, 135, 60, 60);

  stroke('brown');  
  fill('brown');
  ellipse(290, 135, 25, 25);

  stroke('black');
  fill('black');
  ellipse(290, 135, 12, 12);

  ellipseMode(CORNER); 
  fill('white'); 
  ellipse(290, 135, 8, 8); 
  
  stroke('black'); // mouth
  strokeWeight(4);
  line(270, 210, 310, 210); 

  // minion clothes
  
  stroke('blue');
  fill('blue');
	rect(260,265,60,60);

  stroke('navy'); // pocket
  fill('navy');
  rect(275, 280, 30, 25, 10);
  
  stroke('blue'); 
  fill('blue');
	quad(220, 245, 260, 265, 260, 270, 220, 250);
  
  stroke('blue'); 
  fill('blue');
	quad(320, 265, 360, 245, 360, 250, 320, 270);
  
  stroke('grey'); // button
  fill('grey');
  ellipse(255, 262, 10, 10);
  
  stroke('grey'); 
  fill('grey');
  ellipse(315, 262, 10, 10);
  
}
  
function draw() {
}