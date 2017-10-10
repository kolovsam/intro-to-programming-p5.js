function setup() { 
  createCanvas(600, 600);
  
} 

function draw() { 
  background(220);
  
  //cat mat
  fill('pink');
  quad(140,250,480,250,440,350,100,350);
  
  //ears
  stroke('gray');
  strokeWeight(2);
  
  fill('white');
  triangle(160,200,200,170,145,160);
  triangle(240,200,200,170,255,160);
  
  //legs
  rect(200,290,15,25);
  rect(220,298,15,20);
  rect(340,290,15,25);
  rect(360,275,15,37);
  
  //tail
  beginShape();
  vertex(330,220);
  vertex(370,210);
  vertex(380,205);
  vertex(385,203);
  vertex(390,200);
  vertex(400,195);
  vertex(410,185);
  vertex(420,175);
  vertex(425,165);
  vertex(430,160);
  vertex(440,158);
  vertex(450,165);
  vertex(450,175);
  vertex(440,185);
  vertex(430,195);
  vertex(410,210);
  vertex(390,220);
  vertex(370,225);
  endShape(CLOSE);
  
  //body
  ellipse(280,250,210,120);
  
  //body pattern
  fill('orange');
  noStroke();
  ellipse(300,250,30,40);
  ellipse(240,245,60,50);  
  fill('black');
  ellipse(320,280,50,40);
  ellipse(320,220,20,20);
  ellipse(260,260,30,20);
  
  //head
  fill('white');
  stroke('gray');
  ellipse(200,200,100,100);

  //eyes
  fill('black');
  ellipse(190,185,5,5);
  ellipse(210,185,5,5);
  
  //mouth
  ellipse(200,200,3,3);
  line(200,200,200,205);
  line(200,205,195,210);
  line(200,205,205,210);
  
  //left whiskers
  line(175,195,160,190);
  line(175,200,157,200);
  line(175,205,160,210);
  
  //right whiskers
  line(225,205,240,210);
  line(225,200,243,200);
  line(225,195,240,190);
  
  //head pattern
  fill('orange');
  noStroke();
  ellipse(190,230,20,15);
  ellipse(220,168,20,25);
  
  fill('black');
  ellipse(180,225,10,10);
  ellipse(210,170,15,15);
  
}