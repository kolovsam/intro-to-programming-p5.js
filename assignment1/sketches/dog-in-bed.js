function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(242, 249, 252);

  //background shade
  noStroke();
  fill(184, 190, 193);
  triangle(0, -50, 0, 100, 80, 90);

  fill(242, 213, 222);
  quad(100, 200, 200, 200, 300, 350, 200, 300);

  //blanket
  fill(232, 202, 247);
  quad(0, 250, 0, 480, 230, 350, 150, 230);

  stroke(166, 152, 173);
  strokeWeight(2);
  beginShape();
  curveVertex(10, 200);
  curveVertex(150, 230);
  curveVertex(230, 350);
  curveVertex(200, 400);
  endShape();
  stroke(232, 202, 247);
  strokeWeight(10);
  line(145, 220, 225, 350);

  //blanket shade
  noStroke();
  fill(140, 129, 150);
  triangle(150, 230, 230, 350, 50, 200);
  beginShape();
  curveVertex(10, 200);
  curveVertex(150, 230);
  curveVertex(230, 350);
  curveVertex(200, 400);
  endShape();
  strokeWeight(5);
  stroke(140, 129, 150);
  line(150, 230, 223, 340);

  //pillow
  fill(255, 249, 234);
  strokeWeight(2);
  stroke(214, 207, 190);
  beginShape();
  curveVertex(100, 100);
  curveVertex(0, 80);
  curveVertex(180, 40);
  curveVertex(300, 80);
  endShape();
  beginShape();
  curveVertex(180, 100);
  curveVertex(180, 40);
  curveVertex(230, 0);
  curveVertex(300, -20);
  endShape();
  beginShape();
  curveVertex(230, 0);
  curveVertex(230, 0);
  curveVertex(250, 30);
  curveVertex(230, 50);
  endShape();
  beginShape();
  curveVertex(100, -50);
  curveVertex(250, 30);
  curveVertex(350, 200);
  curveVertex(400, 400);
  endShape();
  beginShape();
  curveVertex(400, 100);
  curveVertex(350, 200);
  curveVertex(100, 250);
  curveVertex(-80, 200);
  endShape();
  beginShape();
  curveVertex(50, 250);
  curveVertex(100, 250);
  curveVertex(20, 300);
  curveVertex(-50, 280);
  endShape();
  beginShape();
  curveVertex(20, 300);
  curveVertex(20, 300);
  curveVertex(0, 280);
  curveVertex(0, 0);
  endShape();

  noStroke();
  beginShape();
  vertex(0, 80);
  vertex(180, 40);
  vertex(230, 0);
  vertex(250, 30);
  vertex(350, 200);
  vertex(100, 250);
  vertex(20, 300);
  vertex(0, 280);
  endShape(CLOSE);
  beginShape();
  curveVertex(-50, 0);
  curveVertex(0, 90);
  curveVertex(180, 40);
  curveVertex(400, 80);
  endShape();
  stroke(255, 249, 234);
  strokeWeight(13);
  line(0, 85, 70, 65);

  //pillow shade
  fill(198, 186, 161);
  noStroke();
  beginShape();
  vertex(100, 250);
  vertex(90, 150);
  vertex(130, 180);
  vertex(200, 150);
  vertex(350, 200);
  endShape();

  strokeWeight(2);
  stroke(183, 133, 78);
  beginShape();
  curveVertex(400, 100);
  curveVertex(350, 200);
  curveVertex(100, 250);
  curveVertex(-80, 200);
  endShape();

  //dog
  fill(255, 254, 252);
  stroke(239, 166, 83);
  strokeWeight(2);
  ellipse(230, 230, 130, 110);

  fill(239, 166, 83);
  beginShape();
  vertex(165, 235);
  vertex(180, 220);
  vertex(200, 220);
  vertex(205, 200);
  vertex(220, 205);
  vertex(225, 220);
  vertex(205, 225);
  vertex(202, 230);
  vertex(225, 233);
  vertex(235, 233);
  vertex(255, 230);
  vertex(253, 225);
  vertex(232, 220);
  vertex(235, 205);
  vertex(250, 200);
  vertex(255, 220);
  vertex(275, 220);
  vertex(294, 240);
  vertex(230, 175);
  endShape();

  noStroke();
  fill(30);
  ellipse(200, 220, 20, 13);
  ellipse(257, 220, 20, 13);
  fill(50);
  ellipse(230, 230, 25, 17);
  fill(255);
  ellipse(197, 218, 7, 4);
  ellipse(254, 218, 7, 4);
  ellipse(225, 228, 3, 3);

  stroke(124, 81, 37);
  fill(239, 166, 83);

  triangle(175, 200, 170, 160, 200, 180);
  triangle(250, 190, 290, 160, 285, 205);

  curve(250, 430, 165, 235, 230, 176, 330, 250);
  curve(200, 390, 294, 240, 230, 176, 40, 240);

  stroke(80);
  fill(119, 81, 58);
  ellipse(230, 258, 20, 3);
  noFill();
  curve(150, 220, 210, 255, 220, 258, 220, 260);
  curve(230, 230, 240, 258, 250, 255, 220, 280);

  //comforter
  stroke(201, 191, 149);
  fill(242, 238, 222);
  curve(400, 500, 140, 420, 350, 180, 400, 300);
  curve(100, 300, 350, 180, 600, 280, 200, 200);
  noStroke();
  quad(140, 420, 350, 180, 600, 280, 650, 550);
  stroke(201, 191, 149);
  fill(191, 171, 154);
  curve(400, 500, 140, 420, 350, 180, 400, 300);
  noStroke();
  triangle(130, 420, 230, 290, 680, 550);
}