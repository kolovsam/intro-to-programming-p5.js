function setup() {
  createCanvas(600, 451);
}

function draw() {
  background(158, 209, 245);
  noStroke()

  fill(129, 166, 184) //Base
  beginShape();
  vertex(135, 231);
  vertex(465, 231);
  vertex(465, 245);
  vertex(299, 341);
  vertex(135, 245);
  endShape(CLOSE);

  fill(75, 214, 203) //Grass
  beginShape();
  vertex(135, 229);
  vertex(300, 132);
  vertex(465, 229);
  vertex(299, 324);
  endShape(CLOSE);

  fill(50, 148, 149) //Inbetween
  beginShape();
  vertex(135, 229);
  vertex(299, 324);
  vertex(465, 229);
  vertex(465, 231);
  vertex(299, 326);
  vertex(135, 231);
  endShape(CLOSE);

  fill(152, 239, 249);
  noStroke();
  //stroke(255, 102, 0)
  beginShape();
  vertex(349, 163);
  vertex(350, 170);
  vertex(354, 183);
  vertex(354, 198);
  vertex(350, 208);
  vertex(339, 215);
  vertex(314, 221);
  vertex(288, 225);
  vertex(261, 231);
  vertex(234, 243);
  vertex(210, 258);
  vertex(199, 266);
  vertex(238, 288);
  vertex(246, 282);
  vertex(265, 268);
  vertex(283, 259);
  vertex(304, 252);
  vertex(329, 247);
  vertex(347, 238);
  vertex(358, 228);
  vertex(363, 213);
  vertex(363, 197);
  vertex(357, 176);
  vertex(352, 163);
  
  
  //bezierVertex(349, 163, 376, 255, 292, 189, 199, 266);
  //bezierVertex(352, 163, 400, 270, 285, 231, 238, 289);  
  endShape()

  //fill(152, 239, 249);
  //noStroke()
  //strokeJoin(ROUND);
  //beginShape();
  //vertex(352, 163)
  //vertex(349, 163)
  //bezier(349, 163, 376, 255, 292, 189, 199, 266);
  //vertex(199, 266);
  //vertex(238, 289);
  //bezier(352, 163, 400, 270, 285, 231, 238, 289);
  //endShape();

  noStroke()
  fill(36, 202, 215);//waterfall
  beginShape();
  vertex(199, 266);
  vertex(238, 288);
  vertex(238, 352);
  vertex(199, 329);
  endShape();

  noStroke()
  fill(239, 144, 148) //Rocks light
  beginShape();
  vertex(364, 149);
  vertex(369, 177);
  vertex(361, 177);
  vertex(355, 173);
  vertex(355, 163);
  endShape(CLOSE);
  fill(232, 102, 115) //Rocks shadow
  beginShape();
  vertex(364, 149);
  vertex(374, 156);
  vertex(374, 177);
  vertex(369, 177);
  endShape(CLOSE);

  fill(255, 122, 133) //light
  beginShape();
  vertex(388, 140);
  vertex(385, 164);
  vertex(387, 178);
  vertex(385, 218);
  vertex(370, 213);
  vertex(364, 200);
  vertex(370, 164);
  vertex(373, 162);
  vertex(376, 146);
  endShape(CLOSE);
  fill(232, 102, 115)
  beginShape();
  vertex(388, 140);
  vertex(385, 164);
  vertex(387, 178);
  vertex(385, 218);
  vertex(404, 209);
  vertex(404, 195);
  vertex(395, 154);
  endShape(CLOSE);

  fill(242, 143, 146) //light
  beginShape();
  vertex(370, 187);
  vertex(373, 196);
  vertex(371, 220);
  vertex(365, 232);
  vertex(365, 240);
  vertex(360, 240);
  vertex(355, 234);
  vertex(357, 222);
  vertex(365, 200);
  endShape(CLOSE);
  fill(232, 102, 115)
  beginShape();
  vertex(370, 187);
  vertex(373, 196);
  vertex(371, 220);
  vertex(365, 232);
  vertex(365, 240);
  vertex(383, 240);
  vertex(386, 235);
  vertex(384, 228);
  vertex(383, 212);
  vertex(378, 192);
  endShape(CLOSE);

  fill(232, 102, 115)
  beginShape();
  vertex(414, 187);
  vertex(419, 190);
  vertex(427, 213);
  vertex(422, 220);
  vertex(410, 220);
  vertex(406, 215);
  vertex(406, 208);
  vertex(408, 207);
  vertex(409, 202);
  vertex(411, 192);
  endShape(CLOSE);

  fill(242, 143, 146) //light
  beginShape();
  vertex(297, 110);
  vertex(304, 115);
  vertex(302, 120);
  vertex(297, 158);
  vertex(285, 153);
  vertex(285, 145);
  vertex(290, 124);
  endShape(CLOSE);
  fill(232, 102, 115)
  beginShape();
  vertex(304, 115);
  vertex(302, 120);
  vertex(297, 158);
  vertex(305, 158);
  vertex(304, 115);
  endShape(CLOSE);

  fill(232, 102, 115) //2shadows
  beginShape();
  vertex(325, 97);
  vertex(330, 116);
  vertex(337, 111);
  vertex(345, 144);
  vertex(349, 168);
  vertex(349, 179);
  vertex(345, 188);
  vertex(328, 190);
  vertex(306, 183);
  endShape(CLOSE);
  fill(242, 143, 146) //2lights
  beginShape();
  vertex(325, 97);
  vertex(305, 123);
  vertex(295, 174);
  vertex(306, 183);
  vertex(318, 147);
  vertex(324, 134);
  vertex(321, 148);
  vertex(321, 188);
  vertex(328, 190);
  vertex(331, 162);
  vertex(334, 155);
  vertex(338, 112);
  vertex(326, 119);
  vertex(325, 124);
  vertex(324, 124);
  endShape(CLOSE);

  fill(242, 143, 146) //2lights
  beginShape();
  vertex(286, 141);
  vertex(286, 166);
  vertex(280, 166);
  vertex(276, 162);
  vertex(277, 153);
  vertex(281, 142);
  endShape(CLOSE);
  beginShape();
  vertex(348, 184);
  vertex(348, 199);
  vertex(347, 205);
  vertex(343, 201);
  vertex(343, 195);
  endShape(CLOSE);

  fill(232, 102, 115) //2shadows
  beginShape();
  vertex(286, 141);
  vertex(286, 166);
  vertex(290, 165);
  vertex(291, 164);
  vertex(288, 156);
  endShape(CLOSE);
  beginShape();
  vertex(348, 184);
  vertex(348, 199);
  vertex(347, 205);
  vertex(353, 201);
  vertex(352, 188);
  endShape(CLOSE);

  stroke(28, 117, 111)
  strokeWeight(2)
  fill(0, 138, 119)
  ellipse(284, 172, 15)
  line(284, 179.5, 284, 187.5)
  ellipse(290, 196, 17)
  line(290, 204.5, 290, 214.5)
  ellipse(181, 216, 18)
  line(181, 225, 181, 235)
  ellipse(153, 208, 24)
  line(153, 220, 153, 235)
  ellipse(320, 257, 24)
  line(320, 269, 320, 284)
  ellipse(369, 246, 20)
  line(369, 256, 369, 266)
  ellipse(196.5, 246.5, 11)
  line(196.5, 251.5, 196.5, 258)
  ellipse(221.5, 228.5, 11)
  line(221.5, 234, 221.5, 241)
  ellipse(247.5, 162.5, 9)
  line(247.5, 167, 247.5, 172)
  ellipse(267.5, 153.5, 9)
  line(267.5, 158, 267.5, 163)
  ellipse(295.5, 285.5, 9)
  line(295.5, 290, 295.5, 295)
  ellipse(346.5, 256.5, 9)
  line(346.5, 260, 346.5, 265)
  ellipse(195, 198, 8)
  line(195, 202, 195, 207)
  ellipse(235, 212, 8)
  line(235, 216, 235, 221)
  ellipse(261, 177, 8)
  line(261, 181, 261, 186)
  ellipse(265, 214, 8)
  line(265, 218, 265, 223)
  ellipse(302, 178, 8)
  line(302, 182, 302, 187)
  ellipse(412, 224, 8)
  line(412, 228, 412, 233)

  noStroke()
  fill(220, 255, 255) //houses
  beginShape();
  vertex(232, 176);
  vertex(244, 182);
  vertex(237, 196);
  vertex(225, 189);
  endShape(CLOSE);
  beginShape();
  vertex(214, 188);
  vertex(226, 195);
  vertex(218, 208);
  vertex(206, 201);
  endShape(CLOSE);
  fill(242, 103, 124)
  triangle(226, 195, 218, 208, 231, 199)
  triangle(244, 182, 237, 196, 251, 188)

}