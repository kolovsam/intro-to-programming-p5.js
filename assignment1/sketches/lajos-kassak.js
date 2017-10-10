function setup() {
  createCanvas(400, 550);
  background('oldlace');
}

function draw() {
  //circle
  noFill();
  ellipse(175, 200, 300);

  // empty rectangle
  noStroke();
  fill('oldlace');
  rect(80, 0, 120, 600);

  // red rectangle
  fill('firebrick');
  rect(80, 30, 85, 320);

  // red rectable 2
  fill('firebrick')
  rect(210, 400, 100, 100);

  // black rectangle
  fill('black');
  rect(180, 250, 195, 195);

  // gold rectangle
  fill('gold');
  rect(180, 250, 30, 40);

  // red 3
  fill('firebrick');
  rect(210, 230, 100, 100);

  // black
  fill('black');
  rect(200, 170, 70, 100);
  rect(230, 170, 40, 120);

  // blue tilted square
  fill('midnightblue');
  quad(180, 150, 190, 210, 250, 200, 240, 140);

  // gray
  fill('dimgray');
  rect(220, 100, 40, 50);

  // gold rect
  fill('gold');
  rect(210, 20, 25, 80);

  // blue circle
  fill('midnightblue');
  ellipse(128, 65, 50);

  // signature
  fill('black')
  textSize(10);
  text("LK22", 370, 540);
}