function setup() { 
  createCanvas(800,600);
  frameRate(18);
  noStroke();
    angleMode(DEGREES);

} 

var x=40;
var y=40;
var xR=700;
var yR=20;
var xD=-300;
var yD=950;
var xE=280;
var yE=180;
var D=0;
function draw() { 
  
  background(30,20,15);
	fill(142,119,87);//object1,brown planet
  ellipse(x+160,y+100,80,80);
  fill(49,41,33);
  ellipse(x+180,y+120,14,14);
  ellipse(x+170,y+80,12,12);
  ellipse(x+140,y+110,20,20);
  fill(56,40,30);
  ellipse(x+140,y+96,14,14);
  
  if(x<width/4){
  	x=x+10;
    }
  if(y<150){
  	y=y+15
  }
  
  fill(36,169,225);//object 2
  rect(xR,yR,40,40);
  fill(151,151,151);
  rect(xR,yR+40,40,60)
  fill(35,235,185);
  rect(xR,yR+100,40,30);
  if(xR>450){
  	xR=xR-10;
  }
	if(yR<200){
  	yR=yR+15;
  }
  
  fill(196,226,216);//object3
  triangle(xD+380,yD-686,xD+340,yD-610,xD+420,yD-610);//red head
  fill(28,120,135);
  triangle(xD+380,yD-686,xD+366,yD-660,xD+394,yD-660);//small brown head
  fill(1,158,213);
  rect(xD+340,yD-610,80,240);//rocket mainbody
  fill(255,219,155);
  if(xD<-150){
  	xD=xD+10;
  }
  if(yD>750){
  	yD=yD-10;
  }
  //below is object 4
  triangle(xE+400,yE+140,xE+375,yE+180,xE+425,yE+180);//yellow head inside
	rect(xE+375,yE+180,50,200);// yellow body inside
  fill(223,157,92);
  rect(xE+375,yE+220,50,2);//yellow body inside decoration1
  rect(xE+375,yE+280,50,2);//yellow body inside decoration2
  fill(255,155,0);
  rect(xE+375,yE+348,50,50);//yellow tail inside
  fill(255,135,0);
  arc(xE+375,yE+380,160,160,D+180,D+270);//left flame outline
  fill(255,93,0);
  arc(xE+375,yE+380,140,140,D+180,D+270);//left flame
  fill(255,135,0);
  arc(xE+425,yE+380,160,160,D+270,D+0);//right flame outline
  fill(255,93,0);
  arc(xE+425,yE+380,140,140,D+270,D+0);//right flame
  if(xE>240){
  xE=xE-4;
  }
  if(yE>0){
  yE=yE-8;
  }
  if(D<360){
  	D=D+10;
  }
  
  
  
  
  
  
  
  
  }
  
  
  
