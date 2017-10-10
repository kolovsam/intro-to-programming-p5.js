function setup() {
  createCanvas(560, 560);
}

function draw() {
  background(165, 222, 231);

  strokeWeight(0);

  // Edge

  fill(19, 49, 77);

  beginShape();
  vertex(0, 264);
  vertex(0, 273);
  vertex(196, 104);
  vertex(564, 254);
  vertex(564, 246);
  vertex(196, 95);
  endShape(CLOSE);

  // Front facade

  fill(45, 88, 123, 175);

  beginShape();
  vertex(196, 104);
  vertex(196, 708);
  vertex(564, 708);
  vertex(564, 254);
  endShape(CLOSE);

  // Side facade

  fill(45, 88, 123);

  beginShape();
  vertex(196, 104);
  vertex(196, 708);
  vertex(0, 708);
  vertex(0, 273);
  endShape(CLOSE);

  //stroke for windows

  strokeWeight(2);
  stroke(255, 255, 255, 100);

  //fill for front windows

  fill(225, 225, 225, 250);

  // Front window row1_1

  beginShape();
  vertex(196, 169);
  vertex(196, 247);
  vertex(317, 293);
  vertex(317, 215);
  endShape(CLOSE);

  // Front window row1_2

  beginShape();
  vertex(395, 242);
  vertex(395, 320);
  vertex(446, 340);
  vertex(446, 262);
  endShape(CLOSE);

  // Front window row1_3

  beginShape();
  vertex(511, 290);
  vertex(511, 366);
  vertex(549, 382);
  vertex(549, 304);
  endShape(CLOSE);

  // Front window row2_1

  beginShape();
  vertex(248, 290);
  vertex(248, 368);
  vertex(272, 378);
  vertex(272, 300);
  endShape(CLOSE);

  // Front window row2_2

  beginShape();
  vertex(318, 318);
  vertex(318, 396);
  vertex(401, 430);
  vertex(401, 352);
  endShape(CLOSE);

  // Front window row2_3

  beginShape();
  vertex(428, 363);
  vertex(428, 441);
  vertex(447, 449);
  vertex(447, 371);
  endShape(CLOSE);

  // Front window row2_4

  beginShape();
  vertex(511, 475);
  vertex(511, 397);
  vertex(549, 412);
  vertex(549, 490);
  endShape(CLOSE);

  // Front window row3_1

  beginShape();
  vertex(196, 386);
  vertex(196, 464);
  vertex(347, 524);
  vertex(347, 446);
  endShape(CLOSE);

  // Front window row3_2

  beginShape();
  vertex(428, 471);
  vertex(428, 549);
  vertex(447, 557);
  vertex(447, 479);
  endShape(CLOSE);

  // Front window row3_3

  beginShape();
  vertex(511, 583);
  vertex(511, 505);
  vertex(549, 520);
  vertex(549, 598);
  endShape(CLOSE);

  // Front window row4_1

  beginShape();
  vertex(196, 494);
  vertex(196, 572);
  vertex(255, 595);
  vertex(255, 517);
  endShape(CLOSE);

  // Front window row4_2

  beginShape();
  vertex(326, 538);
  vertex(326, 616);
  vertex(447, 665);
  vertex(447, 587);
  endShape(CLOSE);

  // Front window row4_3

  beginShape();
  vertex(511, 691);
  vertex(511, 613);
  vertex(549, 628);
  vertex(549, 706);
  endShape(CLOSE);

  // Front window row5_1

  beginShape();
  vertex(248, 614);
  vertex(248, 692);
  vertex(354, 734);
  vertex(354, 656);
  endShape(CLOSE);

  //fill for side windows

  fill(172, 172, 172);

  // Side window row1_1

  beginShape();
  vertex(196, 169);
  vertex(196, 247);
  vertex(171, 268);
  vertex(171, 190);
  endShape(CLOSE);

  // Side window row1_2

  beginShape();
  vertex(156, 204);
  vertex(156, 282);
  vertex(121, 311);
  vertex(121, 233);
  endShape(CLOSE);

  // Side window row1_3

  beginShape();
  vertex(91, 260);
  vertex(91, 338);
  vertex(46, 376);
  vertex(46, 298);
  endShape(CLOSE);

  // Side window row2_1

  beginShape();
  vertex(171, 299);
  vertex(171, 377);
  vertex(135, 408);
  vertex(135, 330);
  endShape(CLOSE);

  // Side window row2_2

  beginShape();
  vertex(75, 381);
  vertex(75, 459);
  vertex(6, 520);
  vertex(6, 442);
  endShape(CLOSE);

  // Side window row3_1

  beginShape();
  vertex(196, 386);
  vertex(196, 464);
  vertex(121, 528);
  vertex(121, 450);
  endShape(CLOSE);


  // Side window row3_2

  beginShape();
  vertex(100, 468);
  vertex(100, 546);
  vertex(50, 590);
  vertex(50, 512);
  endShape(CLOSE);

  // Side window row4_1

  beginShape();
  vertex(196, 494);
  vertex(196, 572);
  vertex(146, 615);
  vertex(146, 537);
  endShape(CLOSE);

  // birds 
  
  line(476,106,459,117);
  line(466,117,448,104);
  line(487,90,477,92);
  line(474,84,479,93);
  line(428,93,421,104);
  line(411,99,424,102);
}