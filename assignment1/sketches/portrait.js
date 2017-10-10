function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(440);

  // neck
  fill(255, 234, 243);
  stroke(56, 56, 56);
  rect(75, 135, 45, 35);

  // hair 
  fill(96, 47, 9);
  strokeWeight(0);
  strokeCap('Round');
  arc(98, 80, 110, 142, radians(180), radians(0));

  // ears
  stroke(56, 56, 56)
  fill(255, 234, 243);
  strokeWeight(5);
  arc(48, 95, 20, 20, radians(80), radians(260));
  arc(148, 95, 20, 20, radians(280), radians(80));


  // Head
  ellipse(98, 85, 100, 150);

  // stubble 
  strokeWeight(1);
  point(90, 125);
  point(110, 130);
  point(80, 130);
  point(88, 140);
  point(120, 88);
  point(80, 135);
  point(83, 118);
  point(118, 83);
  point(90, 125);
  point(90, 125);
  point(90, 125);
  point(90, 125);


  // eyebrows
  strokeWeight(5);
  arc(73, 90, 30, 30, radians(235), radians(300));
  arc(123, 90, 30, 30, radians(235), radians(300));


  // eye circles
  strokeWeight(1);
  arc(73, 85, 30, 30, radians(0), radians(85));
  arc(123, 85, 30, 30, radians(90), radians(180));

  // eyes

  fill('white');
  ellipse(75, 90, 21, 11);
  ellipse(121, 90, 21, 11);
  fill(147, 170, 196);
  strokeWeight(0);
  ellipse(75, 90, 10, 10);
  ellipse(121, 90, 10, 10);
  fill(56, 56, 56);
  ellipse(75, 90, 5, 5);
  ellipse(121, 90, 5, 5);
  fill('white');
  ellipse(77, 88, 3, 3);
  ellipse(123, 88, 3, 3);



  // nose
  fill(200, 10, 90, 60);
  triangle(98, 92, 108, 115, 88, 115);
  strokeWeight(4);
  arc(98, 100, 30, 30, radians(70), radians(110));

  // mouth
  noFill();
  strokeWeight(2);
  arc(98, 116, 30, 30, radians(45), radians(135));

  // hair strands
  strokeWeight(2);
  noFill();
  stroke(96, 47, 9);
  arc(80, 20, 53, 105, radians(0), radians(90));
  arc(74, 10, 53, 117, radians(0), radians(90));
  arc(69, 10, 53, 117, radians(0), radians(90));

  // hat
  fill(15, 142, 136);
  strokeWeight(6);
  stroke(10, 102, 97);
  arc(98, 65, 106, 115, radians(180), radians(0));
  rect(43, 40, 110, 24);


}