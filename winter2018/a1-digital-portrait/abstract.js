function setup() { 
  createCanvas(500, 500);
} 



function draw() { 
  background(255);
  stroke(255,255,255)
  fill(255,0,255)
  quad(0,0,350,0,300,50,0,0);
  fill(255,0,205)
  beginShape()
  vertex(350,0)
  vertex(300,50)
  vertex(490,300)
  vertex(500,330)
  vertex(500,0)
  endShape(CLOSE)
  fill(255,0,155)
  beginShape()
  vertex(490,300)
  vertex(500,330)
  vertex(500,500)
  vertex(260,500)
  vertex(300,450)
  endShape(CLOSE)
  fill(255,0,105)
  beginShape()
  vertex(300,450)
  vertex(260,500)
  vertex(0,500)
  vertex(0,245)
  vertex(167.5,270)
  endShape(CLOSE)
  fill(255,0,55)
  beginShape()
  vertex(0,245)
  vertex(0,200)
  vertex(300,150)
  vertex(260,200)
  vertex(167.5,270)
  endShape(CLOSE)
  fill(255,0,0)
  quad(300,150,440,300,320,255,260,200)
  fill(255,55,0)
  quad(320,255,440,300,300,425,245,270)
  fill(255,105,0)
  quad(300,425,180,270,235.25,250,245,270)
  fill(255,155,0)
  quad(180,270,260,206.25,250,245,235.25,250)
  fill(255,205,0)
  quad(260,206,320,254,255,253,250,245)
  fill(255,255,0)
  quad(320,254,245,271.25,247,253,255,253)
  fill(205,255,105)
  quad(245,271.25,245,270.75,235.25,250,247, 253)
  fill(155,200,255)
  quad(235.25,250,247, 253,250, 250,250, 245)
  fill(55,155,255)
  triangle(250,245,255, 253,250,250)
  fill(0,55,255)
  triangle(250,250,247,253,255, 253)
  
  beginShape(LINES);
  stroke(0,0,0)
  //line 1.1
  vertex(0,0);
  vertex(300,50);
  //line 2.1
	vertex(0, 40);
	vertex(300, 70);
  //line 3.1
	vertex(0, 80);
	vertex(300, 90);
  //line 4.1
  vertex(0, 120);
  vertex(300,110);
  //line 5.1
  vertex(0,160);
  vertex(300,130);
  //line 6.1
  vertex(0,200);
  vertex(300,150);
  //line 1.2
  vertex(300,50);
  vertex(490,300);
  //line 2.2
  vertex(300,70);
   vertex(480,300);
  //line 3.2
  vertex(300, 90);
	vertex(470,300);
  //line 4.2
  vertex(300,110);
  vertex(460,300);
  //line 5.2
  vertex(300,130);
  vertex(450,300);
  //line 6.2
  vertex(300,150);
  vertex(440,300);
  //line 1.3
  vertex(490,300);
  vertex(300,450);
  //line 2.3
  vertex(480,300);
 	vertex(300,445);
  //line 3.3
  vertex(470,300);
  vertex(300,440);
  //line 4.3
  vertex(460,300);
  vertex(300,435);
  //line 5.3
  vertex(450,300);
  vertex(300,430);
  //line 6.3
  vertex(440,300);
  vertex(300,425);
  //line 1.4
  vertex(300,450);
  vertex(167.5,270);
  //line 2.4
  vertex(300,445);
  vertex(170,270);
  //line 3.4
  vertex(300,440);
  vertex(172.5,270);
  //line 4.4
  vertex(300,435);
  vertex(175,270);
  //line 5.4
  vertex(300,430);
  vertex(177.5,270);
  //line 6.4
  vertex(300,425);
  vertex(180,270);
  //line 1.5
  vertex(167.5,270);
  vertex(260,200)
  //line 2.5
  vertex(170,270);
  vertex(260,201.25)
  //line 3.5
  vertex(172.5,270);
  vertex(260,202.5);
  //line 4.5
  vertex(175,270);
  vertex(260,203.75);
  //line 5.5
  vertex(177.5,270);
  vertex(260,205);
  //line 6.5
  vertex(180,270);
  vertex(260,206.25);
  //line 1.6
  vertex(260,200);
  vertex(320,255)
  //line 2.6
  vertex(260,201.25)
  vertex(320,255.5)
  //line 3.6
  vertex(260,202.5);
  vertex(320,255)
  //line 4.6
  vertex(260,203.75);
  vertex(320,254.5)
  //line 5.6
  vertex(260,205);
  vertex(320,254)
  //line 6.6.
  vertex(260,206.25);
  vertex(320,254)
  //line 1.7
  vertex(320,255)
  vertex(245,270)
  // line 2.7
  vertex(320,255.5)
  vertex(245,270.25)
  // line 3.7
  vertex(320,255)
  vertex(245,270.5)
  // line 4.7
  vertex(320,254.5)
  vertex(245,270.75)
  // line 5.7
  vertex(320,254)
  vertex(245,271)
  // line 6.7
  vertex(320,254)
  vertex(245,271.25)
  //line 1.8
  vertex(245,270.25)
  vertex(235, 250)
  // line 2.8
  vertex(245,270.75)
  vertex(235.25,250)
  // line 1.9
  vertex(235, 250)
  vertex(250, 245)
  // line 1.10
  vertex(250, 245)
  vertex(255, 253)
  //line 1.11
  vertex(255, 253)
  vertex(247, 253)
  //line 1.12
  vertex(247, 253)
  vertex(250, 250)
  
	endShape();

  
}