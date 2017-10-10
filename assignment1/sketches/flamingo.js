function setup() {
  createCanvas(680, 1100);
}

function draw() {

  // background color
  background('white');

  // blue background bubble
  fill(52,61,139);
  noStroke();
  blendMode(NORMAL);
  ellipseMode(RADIUS);

  arc(420, 420, 420, 420, PI, -HALF_PI, PIE);

  // yellow bubble
  fill(218,165,32);
  ellipseMode(RADIUS);

  arc(680, 420, 680, 680, HALF_PI, PI, PIE);
  arc(210, 420, 210, 210, PI, 0, PIE);

  // flamingo neck
  fill(260,70,100,180);
  ellipseMode(RADIUS);

  arc(520, 260, 160, 160, 0, HALF_PI, PIE);
  arc(420, 260, 260, 260, -HALF_PI, 0, PIE);
  arc(420, 420, 260, 420, PI, -HALF_PI, PIE);
  arc(680, 420, 520, 680, HALF_PI, PI, PIE);

  //black beak
  fill('black');
  stroke('white');
  strokeWeight(8);
  ellipseMode(RADIUS);

  arc(520, 340, 80, 80, -HALF_PI, HALF_PI, PIE);
  arc(520, 320, 100, 100, HALF_PI, PI, PIE);

  // eye
  fill('white');
  noStroke();
  ellipseMode(RADIUS);
  ellipse(520, 160, 40, 40);
  
  fill('black');
  stroke(52,61,139);
  strokeWeight(8);
  ellipse(520, 160, 25, 25);
  
   //blue foreground bubble
  fill(27,100,200);
  blendMode(SCREEN);
  noStroke();
  ellipseMode(RADIUS);

  arc(680, 1100, 680, 680, PI, -HALF_PI, PIE);
  
  // basic golden ratio lines
  blendMode(NORMAL);
  stroke('white');
  strokeWeight(8);
  line(0, 420, 680, 420);
  line(420, 0, 420, 420);
  line(420, 260, 680, 260);
  line(520, 260, 520, 420);

}