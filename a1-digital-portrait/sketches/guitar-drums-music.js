function setup() {
  createCanvas(1200, 800);
  angleMode(DEGREES);
}

function draw() {
  background('#E8E8E8');

  // * MUSIC NOTES START *

  // notation lines
  stroke(200);
  strokeWeight(1);
  line(0, 180, 1200, 180);
  line(0, 190, 1200, 190);
  line(0, 200, 1200, 200);
  line(0, 210, 1200, 210);
  line(0, 220, 1200, 220);

  // time signature
  noStroke();
  fill(200);
  textSize(24);
  text("3", 50, 199);
  text("4", 50, 219);

  // 1st note
  stroke(200);
  fill(200);
  strokeWeight(2);
  line(400, 190, 400, 230);
  translate(400, 230);
  rotate(-45);
  ellipse(-10, 0, 18, 10);
  rotate(45);
  translate(-400, -230);

  // 2nd note
  line(450, 190, 450, 220);
  translate(450, 220);
  rotate(-45);
  ellipse(-10, 0, 18, 10);
  rotate(45);
  translate(-450, -220);

  // 3rd note
  noFill();
  line(520, 190, 520, 215);
  translate(520, 215);
  rotate(-45);
  ellipse(-10, 0, 18, 10);
  rotate(45);
  translate(-520, -215);

  // 4th note
  fill(200);
  line(570, 190, 570, 210);
  translate(570, 210);
  rotate(-45);
  ellipse(-10, 0, 18, 10);
  rotate(45);
  translate(-570, -210);

  // 5th note
  line(970, 175, 970, 235);
  translate(970, 210);
  rotate(-45);
  ellipse(-10, 0, 18, 10);
  ellipse(-24, 14, 18, 10);
  rotate(45);
  translate(-970, -210);

  // 6th note
  line(1020, 175, 1020, 210);
  translate(1020, 190);
  rotate(-45);
  ellipse(-10, 0, 18, 10);
  ellipse(-24, 14, 18, 10);
  rotate(45);
  translate(-1020, -190);

  // note lines 
  strokeWeight(5);
  strokeCap(SQUARE);
  line(399, 188, 571, 188); // 1st note to 4th note
  line(449, 198, 521, 198); // 2nd note to 3rd note
  line(968, 174, 1020, 174); // 2nd note to 3rd note

  // * MUSIC NOTES END *

  // * GUITAR START *

  // guitar stand
  stroke(100);
  strokeWeight(5);
  line(200, 500, 50, 700);
  line(200, 500, 350, 700);

  // guitar shadow
  noStroke();
  fill(200);
  ellipse(200, 712, 200, 30);

  // guitar body
  fill('#E8A356');
  stroke(255);
  strokeWeight(1);
  arc(200, 500, 190, 170, 165, 375); // top outer 
  arc(200, 600, 250, 230, 319, 221); // bottom outer
  arc(200, 500, 184, 164, 164, 375); // top inner 
  arc(200, 600, 244, 224, 319, 221); // bottom inner

  strokeWeight(0);
  quad(113, 524, 190, 450, 288, 523, 200, 650); // (workaround) quad for center

  // fretboard
  strokeWeight(1.5);
  fill('#4F4C39');
  quad(184, 140, 216, 140, 220, 504, 180, 504);

  // frets
  stroke(150);
  strokeWeight(1);
  line(184, 140, 215, 140);
  line(184, 160, 215, 160);
  line(184, 180, 215, 180);
  line(184, 200, 215, 200);
  line(184, 220, 215, 220);
  line(184, 240, 215, 240);
  line(184, 260, 215, 260);
  line(184, 280, 215, 280);
  line(184, 300, 215, 300);
  line(184, 315, 215, 315);
  line(184, 330, 215, 330);
  line(184, 345, 215, 345);
  line(184, 330, 215, 330);
  line(184, 360, 215, 360);
  line(184, 375, 215, 375);
  line(184, 390, 215, 390);
  line(184, 400, 215, 400);
  line(184, 410, 215, 410);
  line(181, 420, 217, 420);
  line(181, 430, 217, 430);
  line(181, 440, 217, 440);
  line(181, 450, 218, 450);
  line(181, 460, 218, 460);
  line(181, 470, 218, 470);
  line(181, 480, 218, 480);
  line(181, 490, 218, 490);

  // headstock shape
  beginShape();
  noStroke();
  vertex(184, 140);
  vertex(180, 135);
  vertex(176, 70);
  vertex(184, 65);
  vertex(216, 65);
  vertex(224, 70);
  vertex(220, 135);
  vertex(216, 140);
  endShape(CLOSE);

  // headstock lines
  stroke('#4F4C39');
  strokeWeight(1);
  line(170, 84, 229, 84);
  line(172, 104, 227, 104);
  line(174, 124, 225, 124);

  // headstock knobs
  ellipse(170, 84, 8, 10);
  ellipse(171, 104, 8, 10);
  ellipse(172, 124, 8, 10);
  ellipse(230, 84, 8, 10);
  ellipse(229, 104, 8, 10);
  ellipse(228, 124, 8, 10);

  // headstock holes
  fill(200);
  stroke(220);
  strokeWeight(1);
  ellipse(188, 124, 6, 6);
  ellipse(187, 104, 6, 6);
  ellipse(186, 84, 6, 6);
  ellipse(212, 124, 6, 6);
  ellipse(213, 104, 6, 6);
  ellipse(214, 84, 6, 6);

  // guitar center hole
  strokeWeight(3);
  stroke(230);
  fill(117, 63, 35);
  ellipse(200, 540, 80, 80); //inner big
  strokeWeight(1);
  stroke(150);
  fill(50);
  ellipse(200, 540, 65, 65); // inner small

  // fret support 
  strokeWeight(0);
  fill('#875F32');
  rect(160, 620, 80, 20); // fret support stand

  fill(200);
  strokeWeight(1);
  ellipse(216, 634, 4, 4); // support stand knobs
  ellipse(211, 634, 4, 4);
  ellipse(206, 634, 4, 4);
  ellipse(200, 634, 4, 4);
  ellipse(195, 634, 4, 4);
  ellipse(190, 634, 4, 4);
  ellipse(185, 634, 4, 4);

  // strings
  stroke(180);
  line(200, 140, 200, 630);
  line(204, 140, 205, 630);
  line(208, 140, 210, 630);
  line(212, 140, 215, 630);
  line(196, 140, 195, 630);
  line(192, 140, 190, 630);
  line(188, 140, 185, 630);

  // * GUITAR END *

  // * DRUMKIT START *

  // bass stand
  stroke(100);
  strokeWeight(5);
  line(650, 650, 600, 700);
  line(850, 650, 900, 700);

  // floor stand
  line(520, 630, 520, 650);
  line(615, 630, 615, 650);

  // snare stand
  strokeWeight(4);
  line(910, 530, 910, 630);
  strokeWeight(3);
  line(910, 530, 930, 600);
  strokeWeight(1);
  line(910, 610, 928, 586);
  line(910, 610, 892, 586);

  // hi hat stand
  strokeWeight(4);
  line(1000, 350, 1000, 600);
  strokeWeight(3);
  line(1000, 530, 1030, 580);
  line(1000, 530, 970, 580);
  strokeWeight(1);
  line(1000, 580, 1018, 564);
  line(1000, 580, 982, 564);
  strokeWeight(0.5);
  fill('#EDC79C');
  stroke(180);
  triangle(900, 390, 1100, 390, 1000, 370); // hi hat shape

  // cymbal of floor 
  strokeWeight(4);
  stroke(100);
  line(615, 300, 615, 550);
  strokeWeight(0.5);
  stroke(180);
  triangle(530, 310, 700, 365, 615, 315)

  // crash of bass drum
  strokeWeight(4);
  stroke(100);
  line(750, 420, 840, 370);
  line(840, 370, 840, 280);
  strokeWeight(1);
  stroke(180);
  triangle(740, 320, 940, 320, 840, 300); // crash

  // floor drum
  fill(255);
  strokeWeight(4);
  stroke(255);
  fill('#A0713B');
  rect(500, 450, 140, 180);
  rect(850, 480, 120, 70); // snare

  // bass drum shadow
  noStroke();
  fill(200);
  ellipse(750, 700, 200, 30);

  // bass drum body
  strokeWeight(0.5);
  stroke(100);
  fill(255);
  ellipse(750, 550, 300, 300);
  fill('#4b2e83'); // logo color
  strokeWeight(0);
  ellipse(750, 550, 270, 270); // outer circle
  fill('#59379E');
  ellipse(750, 550, 260, 260); // inner circle

  // W logo
  fill('#4b2e83'); // logo color
  fill(255);
  noStroke();
  quad(695, 525, 705, 525, 730, 600, 720, 600);
  quad(720, 600, 730, 600, 755, 525, 745, 525);
  quad(745, 525, 755, 525, 780, 600, 770, 600);
  quad(770, 600, 780, 600, 805, 525, 795, 525);
  rect(685, 515, 30, 10);
  rect(785, 515, 30, 10);

  // * DRUMS END *

}