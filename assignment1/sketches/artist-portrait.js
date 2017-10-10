// 1-Computer Graphics: Portrait of an Artist
// By Thomas Tran


function setup() {
  createCanvas(450, 550);
}

function draw() {
  background('orange');
  // Found point between two eyes
  // point(225, 150);

  // Face
  fill('tan');
  ellipse(225, 200, 200, 250)


  // Glasses Frame
  // Left Side
  fill('tan');
  strokeWeight(8);
  strokeJoin(BEVEL);
  rect(145, 130, 60, 50);

  // Right Side
  fill('tan');
  strokeWeight(8);
  strokeJoin(BEVEL);
  rect(245, 130, 60, 50);

  // Right arm
  line(310, 155, 315, 150);

  // Left arm
  line(145, 155, 135, 150);

  // Middle arm
  line(210, 155, 245, 155);

  // Left Eye
  fill('white');
  strokeWeight(1);
  ellipse(175, 150, 30, 15);

  fill('black')
  ellipse(175, 150, 10, 10);

  // Right Eye
  fill('white');
  strokeWeight(1);
  ellipse(275, 150, 30, 15);

  fill('black');
  ellipse(275, 150, 10, 10);

  // Nose
  point(225, 160);
  fill('brown');
  arc(225, 160, 10, 100, QUARTER_PI, PI + QUARTER_PI);

  // Mustache
  fill('black');
  rect(175, 220, 100, 8);

  // Mouth
  fill('brown');
  arc(225, 240, 80, 80, radians(0), radians(180))

  // Hat Berret 
  fill('blue');
  arc(225, 100, 200, 80, radians(180), radians(0));
  arc(225, 60, 10, 20, radians(180), radians(0));

  // Body
  fill('black');
  ellipse(225, 500, 100, 350);

  // Arms
  fill('tan');

  arc(265, 400, 40, 20, radians(265), radians(70));

  arc(183, 400, 40, 20, radians(90), radians(290));



}