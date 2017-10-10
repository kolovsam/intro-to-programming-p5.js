function setup() { 
  createCanvas(1000, 900);
	background('white');
} 

function draw() { 
  
  //Fuse
  strokeWeight(40);
  fill('#7289a9');
  quad(340, 180, 440, 140, 460, 180, 360, 220);
  
  fill('white');
  quad(360, 128, 390, 115, 400, 140, 370, 153);
  
  //Left Shoe
  strokeWeight(40);
  fill('#daa520')
  ellipse(660, 590, 180, 130);

  //Wind Up Mechanism
  fill('#ffcc00');
	rect(190, 390, 90, 30);
  rect(190, 360, 30, 30);
  rect(190, 420, 30, 30);
  rect(220, 420, 30, 30);
	rect(220, 360, 30, 30);
  ellipse(200, 350, 100, 100);
  ellipse(200, 460, 100, 100);
  fill('black');
  ellipse(200, 350, 60, 60);
  ellipse(200, 460, 60, 60);
  fill('white');
  ellipse(200, 350, 25, 25);
  ellipse(200, 460, 25, 25);
  
  
  //Body
  strokeWeight(50);
  fill('#28384d');
  ellipse(500, 400, 400, 400);

  //Right Shoe
  strokeWeight(40);
  fill('#daa520');
  ellipse(460, 590, 180, 130);
  
  //Light Glint
  noStroke();
  fill('#43546b');
  ellipse(375, 335, 50, 50);
  
  noStroke();
  fill('#43546b');
  ellipse(340, 370, 25, 25);
  
  //Eyes
  noStroke();
  fill('#ffffff');
  ellipse(530, 380, 60, 150);
  
  noStroke();
  fill('#ffffff');
  ellipse(630, 380, 60, 150);

  //Name
  fill('black');
  textSize(46);
	text("Mr. Bomb-omb", 370, 770);
  

}