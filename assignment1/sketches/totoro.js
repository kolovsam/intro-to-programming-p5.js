function setup() {
  createCanvas(900, 900);

  //Assignment 1 Computer Graphics
  //HCDE 598A
  //Elizabeth Quepons
  //Portrait of Japanese film character Totoro

  //Left arm
  fill('grey');
  stroke('grey');
  arc(315, 570, 240, 340, 1.73, 0);

  //Body 
  fill('grey');
  stroke('black');
  strokeWeight(1);
  ellipse(450, 600, 450, 500);

  //Head 
  fill('grey');
  stroke('grey');
  strokeWeight(1);
  ellipse(450, 350, 300, 180);

  //Face
  stroke('white');
  fill('white');
  ellipse(400, 300, 40, 40);
  ellipse(500, 300, 40, 40);
  
  stroke('lightpink');
  fill('lightpink');
  ellipse(350, 345, 30, 30);
  ellipse(550, 345, 30, 30);

  stroke('black')
  fill('black')
  ellipse(450, 320, 60, 20)

  strokeWeight(15)
  point(400, 300)
  point(500, 300)

  //whiskers
  strokeWeight(2)
  line(320, 330, 270, 315)
  line(330, 340, 270, 325)
  line(340, 350, 270, 335)

  line(560, 330, 630, 315)
  line(570, 340, 630, 325)
  line(580, 350, 630, 335)


  //Stomach
  fill('beige');
  stroke('beige');
  ellipse(450, 600, 380, 450);

  //Mark 1 (Top)//
  stroke('black');
  fill('black')
  triangle(323, 460, 347, 430, 373, 460);

  stroke('beige');
  fill('beige');
  triangle(323, 460, 347, 450, 373, 460);

  //Mark 2 (Top)//
  stroke('black');
  fill('black');
  triangle(393, 460, 417, 430, 443, 460);

  stroke('beige');
  fill('beige');
  triangle(393, 460, 417, 450, 443, 460);

  //Mark 3 (Top)//
  stroke('black');
  fill('black');
  triangle(463, 460, 487, 430, 513, 460);

  stroke('beige');
  fill('beige');
  triangle(463, 460, 487, 450, 513, 460);

  //Mark 4 (Top)//
  stroke('black');
  fill('black');
  triangle(533, 460, 557, 430, 583, 460);

  stroke('beige');
  fill('beige');
  triangle(533, 460, 557, 450, 583, 460);

  //Mark 1 (Bottom)//
  stroke('black');
  fill('black');
  triangle(300, 500, 324, 470, 350, 500);

  stroke('beige');
  fill('beige');
  triangle(300, 500, 324, 490, 350, 500);

  //Mark 2 (Bottom)//
  stroke('black');
  fill('black');
  triangle(365, 500, 389, 470, 415, 500);

  stroke('beige');
  fill('beige');
  triangle(365, 500, 389, 490, 415, 500);

  //Mark 3 (Bottom)//
  stroke('black');
  fill('black');
  triangle(430, 500, 454, 470, 480, 500);

  stroke('beige');
  fill('beige');
  triangle(430, 500, 454, 490, 480, 500);

  //Mark 4 (Bottom)//
  stroke('black');
  fill('black');
  triangle(495, 500, 519, 470, 545, 500);

  stroke('beige');
  fill('beige');
  triangle(495, 500, 519, 490, 545, 500);

  //Mark 5 (Bottom)//
  stroke('black');
  fill('black');
  triangle(560, 500, 584, 470, 610, 500);

  stroke('beige');
  fill('beige');
  triangle(560, 500, 584, 490, 610, 500);

  //Umbrella
  strokeWeight(15)
  stroke('black')
  line(480, 600, 480, 100);

  fill('purple')
  strokeWeight(1)
  stroke('purple')
  arc(480, 200, 500, 400, PI, 0)

  //Right arm
  stroke('grey');
  fill('grey');
  beginShape();
  curveVertex(640, 470);
  curveVertex(640, 470);
  curveVertex(500, 450);
  curveVertex(480, 500);
  curveVertex(650, 700);
  curveVertex(650, 700);
  endShape();

  //Left Ear
  stroke('grey')
  fill('grey')
  beginShape();
  vertex(360, 280)
  vertex(360, 260)
  vertex(350, 260)
  vertex(370, 201)
  vertex(390, 260)
  vertex(380, 260)
  vertex(380, 270)
  endShape(CLOSE);

  //Right ear
  beginShape();
  vertex(503, 280);
  vertex(503, 260);
  vertex(490, 260);
  vertex(510, 201);
  vertex(530, 260);
  vertex(520, 260);
  vertex(520, 280);
  endShape(CLOSE);

}

function draw() {}