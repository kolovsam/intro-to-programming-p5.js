function setup() { 
  //Abstract BB-8 on planet Earth
  createCanvas(600, 600);
  background(185, 207, 226);
  angleMode(DEGREES);
} 

function draw() { 
	//Backdrop
  noStroke()
  fill(170, 237, 180);
  rect(0, 525, 600, 100);			//Grassy field
  stroke(248, 244, 139);
  fill(248, 244, 139);
  ellipse(500, 100, 90, 90);		//Adding a little sunshine
  strokeWeight(5);
  strokeCap(ROUND);
  line(500, 5, 500, 195);
  line(400, 100, 595, 100);
  line(400, 175, 590, 7);
  line(400, 7, 590, 185);
  stroke(154, 182, 189);
  fill(154, 182, 189);
  beginShape();								//Mountains
  vertex(0, 525);
  vertex(0, 300);
  vertex(100, 100);
  vertex(200, 260);
  vertex(300, 50);
  vertex(425, 305);
  vertex(520, 125);
  vertex(600, 280);
  vertex(600, 525);
  endShape(CLOSE);
  
  //Main body
  stroke(255);									
  strokeWeight(1);
  fill(255);										
  ellipse(300, 500, 200, 200);
  
  //Body details
  stroke(128);
  line(200, 500, 400, 500);
  line(300, 402, 300, 600);
  stroke(255, 200, 0);
  fill(255, 200, 0);
  ellipse(300, 500, 100, 100);
  stroke('grey');							//inner working details
  strokeWeight(1);
  fill('grey');
  triangle(300, 500, 285, 480, 315, 480);		
	triangle(300, 500, 285, 520, 315, 520);
  triangle(300, 500, 320, 490, 320, 510);
  triangle(300, 500, 280, 490, 280, 510);
  stroke(255, 0);
  fill(255);
  ellipse(300, 500, 30, 30);
  stroke(128);
  strokeWeight(3);
  ellipse(290, 440, 5, 5);
  ellipse(310, 440, 5, 5);
  ellipse(290, 560, 5, 5);
  ellipse(310, 560, 5, 5);
  ellipse(240, 510, 5, 5);
  ellipse(240, 490, 5, 5);
  ellipse(360, 490, 5, 5);
  ellipse(360, 510, 5, 5);
  stroke(255, 200, 0);					//orange mini arcs
  fill(255, 200, 0);
  arc(300, 375, 100, 100, 40, 140);
  arc(300, 625, 100, 100, 220, 320);

  //Antennaes
  stroke('grey');
  strokeWeight(2);
  fill('grey');
  line(340, 300, 340, 400);
  ellipse(340, 300, 5, 5);
  line(320, 320, 320, 400);
  ellipse(320, 320, 5, 5);
  
  //Head
  stroke(255);
  fill(255);
  arc(300, 400, 125, 125, 180, 0);
  fill(230);
  /*I was going to use rect() to create the grey portion
  But I changed my mind to use/practice quad to be more detailed
  */
	//rectMode(CENTER);
  //rect(300, 395, 125, 10);
  stroke(230);
  strokeWeight(3);
  strokeJoin(ROUND);
  quad(240, 400, 360, 400, 363, 391, 237, 391);
  
  //Head features
  stroke(128);
  strokeWeight(3);
  line(258, 350, 340, 350);
  stroke(255, 200, 0);
  line(250, 360, 350, 360);
  stroke(0);
  fill(0);
  ellipse(300, 365, 23, 23);		//Eyes
  stroke(150);
  strokeWeight(2);
  ellipse(320, 380, 10, 10);
  
  //I wanted to add a little bit more to the scenery
  stroke(255);									//Clouds
  fill(255);
  ellipse(5, 50, 100, 50);
  ellipse(60, 25, 80, 40);
  ellipse(100, 40, 60, 30);
  ellipse(115, 30, 65, 20);
  ellipse(250, 20, 40, 15);
  ellipse(280, 35, 50, 25);
  ellipse(320, 20, 70, 35);
  ellipse(370, 30, 55, 30);

}