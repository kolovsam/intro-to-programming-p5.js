// reference: http://malikafavre.com/sephora
function setup() {
  createCanvas(540, 660);
  ellipseMode(CORNER)

  //face
  fill(202, 177, 192);
  beginShape();
  stroke(255)
  noStroke();
  curveVertex(120, 210);
  curveVertex(120, 219);
  curveVertex(128, 236);
  curveVertex(144, 247);
  curveVertex(146, 250);
  curveVertex(154, 279);
  curveVertex(160, 258);
  curveVertex(210, 250);
  curveVertex(237, 246);
  curveVertex(251, 240);
  curveVertex(265, 230);
  curveVertex(278, 240);
  curveVertex(293, 246);
  curveVertex(363, 252);
  curveVertex(379, 262);
  curveVertex(380, 279);
  curveVertex(389, 252);
  curveVertex(394, 246);
  curveVertex(403, 243);
  curveVertex(415, 215);
  curveVertex(405, 210);
  endShape();

  //hat background
  fill(0)
  ellipse(-168, -62, 852, 288)

  fill(255)
  ellipse(-110, -37, 741, 229)

  fill(0)
  ellipse(-40, -23, 612, 192)

  fill(255)
  ellipse(13, -7, 508, 148)

  fill(0)
  ellipse(64, 7, 406, 110)

  //hat center
  fill(255)
  noStroke();
  beginShape();
  vertex(151, -21);
  vertex(131, 58);
  vertex(404, 58);
  vertex(385, -23);
  endShape();

  beginShape();
  stroke(255)
  strokeWeight(8)
  curveVertex(167, -41);
  curveVertex(151, -21);
  curveVertex(131, 58);
  curveVertex(156, 108);
  endShape();

  beginShape();
  stroke(255)
  strokeWeight(4)
  curveVertex(124, 33);
  curveVertex(128, 57);
  curveVertex(143, 73);
  curveVertex(181, 85);
  curveVertex(277, 92);
  curveVertex(355, 82);
  curveVertex(394, 66);
  curveVertex(402, 57);
  curveVertex(402, 43);
  endShape();

  fill(199, 75, 65)
  ellipse(380, 50, 18, 18)

  //nose
  fill("black");
  noStroke();
  beginShape();
  curveVertex(256, 259);
  curveVertex(256, 259);
  curveVertex(249, 260);
  curveVertex(246, 257);
  curveVertex(249, 255);
  curveVertex(256, 259);
  curveVertex(256, 259);
  endShape();

  fill("black");
  noStroke();
  beginShape();
  curveVertex(275, 259);
  curveVertex(275, 259);
  curveVertex(282, 260);
  curveVertex(285, 257);
  curveVertex(282, 255);
  curveVertex(275, 258);
  curveVertex(275, 258);
  endShape();

  //mouth dot
  fill(130)
  ellipse(295, 272, 5, 5)

  //mouth lips
  fill(199, 75, 65);
  noStroke();
  quad(223, 308, 263, 290, 307, 309, 265, 330, )

  fill(199, 75, 65);
  stroke(199, 75, 65)
  strokeWeight(3)
  beginShape();
  curveVertex(223, 308);
  curveVertex(223, 308);
  curveVertex(250, 288);
  curveVertex(263, 290);
  curveVertex(266, 293);
  endShape(CLOSE);

  fill(199, 75, 65);
  stroke(199, 75, 65)
  strokeWeight(3)
  beginShape();
  curveVertex(307, 309);
  curveVertex(307, 309);
  curveVertex(278, 288);
  curveVertex(263, 290);
  curveVertex(262, 290);
  curveVertex(260, 293);
  endShape(CLOSE);

  fill(199, 75, 65);
  stroke(199, 75, 65)
  strokeWeight(3)
  beginShape();
  curveVertex(223, 308);
  curveVertex(223, 308);
  curveVertex(265, 330);
  curveVertex(304, 310);
  curveVertex(298, 310);
  endShape(CLOSE);


  //cloth
  fill(0)
  noStroke()
  triangle(186, 420, 167, 500, 252, 600)

  fill(0)
  noStroke()
  triangle(353, 419, 373, 500, 252, 600)


}