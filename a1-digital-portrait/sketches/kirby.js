function setup() {
  createCanvas(300, 300);
}
function draw() {
  //Background//
      background("white");
  stroke("orange");
  strokeWeight(16);
  line(0, 150, 299, 150);
  line(150, 0, 150, 299);
  strokeWeight(19);
  line(0, 0, 299, 299);
  line(299, 0, 0, 299);
  strokeWeight(22);
  line(75, 0, 225, 299);
  line(225, 0, 75, 299);
  strokeWeight(25);
  line(0, 75, 299, 225);
  line(0, 225, 299, 75);
  //Shoes//
  stroke(0);
  fill(224, 0, 91);
  strokeWeight(5);
  ellipse(110, 200, 75, 50);
  ellipse(190, 200, 75, 50);
  //Hands//
  fill(243, 165, 170);
  strokeWeight(3);
  ellipse(95, 125, 95, 50);
  ellipse(205, 125, 95, 50);
  //Body//
  strokeWeight(3);
  fill(243, 165, 170);
  ellipse(150, 125, 150, 150);
  //Eyes//
  strokeWeight(2);
  fill(0, 118, 192);
  ellipse(130, 100, 20, 50);
  ellipse(170, 100, 20, 50);
  fill(0);
  ellipse(130, 95, 20, 35);
  ellipse(170, 95, 20, 35);
  fill(255);
  ellipse(130, 90, 18, 30);
  ellipse(170, 90, 18, 30);
  //Blush//
  strokeWeight(0);
  fill(235, 104, 150);
  ellipse(100, 125, 25, 15);
  ellipse(200, 125, 25, 15);
  //Mouth//
  noFill();
  strokeWeight(3);
  curve(100, 100, 135, 140, 165, 140, 200, 100)
  //Halo//
  noFill();
  stroke("gold");
  strokeWeight(7);
  ellipse(150,49,120,20);
}

