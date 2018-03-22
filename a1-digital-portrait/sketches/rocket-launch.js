function setup() { 
  createCanvas(800, 600);
  noStroke();
  angleMode(DEGREES);
} 

function draw() { 
  background(30,20,15);
  fill(170,198,145,200);
  rect(0,500,800,40);//green bg1
  fill(204,219,184);
  rect(0,540,800,60);//green bg2
  fill(80,71,48,160);
  rect(0,360,800,140);//brown bg
  fill(229,43,0);
  triangle(400,64,360,140,440,140);//red head
  fill(96,39,1);
  triangle(400,64,386,90,414,90);//small brown head
  fill(191,16,0);
  rect(360,140,80,240);//rocket mainbody
  fill(255,219,155);
  triangle(400,140,375,180,425,180);//yellow head inside
  rect(375,180,50,200);// yellow body inside
  fill(223,157,92);
  rect(375,220,50,2);//yellow body inside decoration1
  rect(375,280,50,2);//yellow body inside decoration2
  
  fill(255,155,0);
  rect(375,348,50,50);//yellow tail inside
  fill(255,185,112);
  triangle(352,130,336,160,366,160);
  rect(336,160,30,200);//left small rocket
  triangle(450,130,434,160,464,160);
  rect(434,160,30,200);//right small rocket
  fill(125,44,0);
  rect(336,380,30,24);//left small rocket bottom
  rect(434,380,30,24);//right small rocket bottom
  fill(255,119,0);
  quad(342,404,360,404,364,412,338,412);//left fire1
  quad(440,404,458,404,462,412,436,412);//right fire1
  fill(255,135,0);
  arc(375,380,160,160,180,270);//left flame outline
  fill(255,93,0);
  arc(375,380,140,140,180,270);//left flame
  fill(255,135,0);
  arc(425,380,160,160,270,0);//right flame outline
  fill(255,93,0);
  arc(425,380,140,140,270,0);//right flame
  fill(97,38,0);
  rect(336,170,30,8);
  rect(336,240,30,8);
  rect(336,260,30,8);//left small rocket decoration
  rect(434,170,30,8);
  rect(434,240,30,8);
  rect(434,260,30,8);//right small rocket decoration
  fill(254,230,168);
  beginShape()
  vertex(340,412);
  vertex(360,412);
  vertex(356,471);
  vertex(370,507);
  vertex(400,600);
  vertex(140,712);
  vertex(256,566);
  vertex(314,505);
  vertex(328,467);
  endShape(CLOSE);//big fire left
  beginShape()
  vertex(440,412);
  vertex(460,412);
  vertex(456,471);
  vertex(470,507);
  vertex(540,600);
  vertex(240,712);
  vertex(356,566);
  vertex(414,505);
  vertex(428,467);
  endShape(CLOSE);//big fire right
  ellipse(336,440,20,20);
  ellipse(356,440,20,20);
	ellipse(352,460,30,30);
  ellipse(332,456,24,24);
  ellipse(324,480,32,32);
  ellipse(310,500,40,40);
  ellipse(290,550,80,80);
  ellipse(260,600,100,100);
  ellipse(360,500,60,60);
  ellipse(370,530,40,40);//left fire circles
  ellipse(436,440,20,20);
  ellipse(456,440,20,20);
	ellipse(452,460,30,30);
  ellipse(432,456,24,24);
  ellipse(424,480,32,32);
  ellipse(420,500,40,40);
  ellipse(480,550,80,80);
  ellipse(520,620,120,120);
  ellipse(460,500,60,60);
  ellipse(470,530,40,40);//right fire circles
  fill(142,119,87);
  ellipse(200,140,80,80);
  fill(49,41,33);
  ellipse(220,160,14,14);
  ellipse(210,120,12,12);
  ellipse(180,150,20,20);
  fill(56,40,30);
  ellipse(180,136,14,14);









  
  
  
  
  

}