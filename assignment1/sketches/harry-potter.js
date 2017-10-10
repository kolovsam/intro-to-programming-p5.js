function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background('#870014');
  
  //body
  fill('grey')
  noStroke();
  beginShape();
  vertex(189, 498);
  vertex(169, 518);
  vertex(156, 564);
  vertex(147, 622);
  vertex(144, 716);
  vertex(458, 723);
  vertex(451, 615);
  vertex(440, 539);
  vertex(421, 501);
  vertex(390, 490);
  vertex(224, 487);
  endShape();
  
  //collar 
  fill('white');
  stroke('black');
  strokeWeight(2);
  quad(226, 486, 308, 491, 272, 538, 195, 494);
  quad(386, 488, 292, 491, 339, 539, 420, 497);
  
  //tie
  fill('#870014')
  quad(302, 499, 271, 535, 284, 546, 312, 511);
  fill('yellow');
  quad(311, 512, 283, 544, 294, 554, 319, 521);
  fill('#870014');
  quad(320, 522, 291, 552, 299, 560, 329, 530);
  fill('yellow');
  quad(329, 530, 300, 559, 309, 564, 335, 538);

  
  
  //face
  fill('#ffe2a5')
  noStroke();
  beginShape();
  vertex(142, 235);
  vertex(146, 373);
  vertex(164, 445);
  vertex(213, 483);
  vertex(282, 490);
  vertex(296, 500);
  vertex(309, 493);
  vertex(380, 491);
  vertex(427, 452);
  vertex(446, 388);
  vertex(445, 166);
  endShape();
  
  //hair 
  fill('black');
  noStroke();
  beginShape();
  vertex(143, 318);
  vertex(134, 214);
  vertex(155, 159);
  vertex(209, 127);
  vertex(405, 126);
  vertex(443, 156);
  vertex(457, 210);
  vertex(446, 317);
  vertex(209, 127);
  vertex(434, 241);
  vertex(393, 303);
  vertex(373, 275);
  vertex(355, 294);
  vertex(323, 271);
  vertex(311, 299);
  vertex(280, 203);
  vertex(281, 287);
  vertex(245, 215);
  vertex(181, 265);
  vertex(181, 224);
  vertex(165, 292);
  vertex(147, 261);
  vertex(150, 310);
  endShape();
  
  //left eyebrow
  fill('black');
  noStroke();
  rect(200,300,75,6);
  
  //right eyebrow
  fill('black');
  noStroke();
  rect(320,300, 75, 6);
  
  
  //Glasses frame
  stroke('black');
  strokeWeight(5);
  line(240, 350, 360, 350);
  line(200, 350, 145, 310);
  line(350, 380, 443, 310);
  
  fill('white');
  stroke('black')
  strokeWeight(5);
  ellipse(240,350,75,75)
  
  fill('white');
  stroke('black')
  strokeWeight(5);
  ellipse(360,350,75,75)
  
  //left eye
  fill('black');
  stroke('#4fa878');
  strokeWeight(12);
  ellipse(240, 350, 40, 40);
  
  
  //right eye
  fill('black');
  stroke('#4fa878');
  strokeWeight(12);
  ellipse(360, 350, 40, 40);
  

  //lightning bolt 
  stroke('black');
  strokeWeight(5);
  line(230, 280, 255, 280);
  line(250, 295, 230, 280);
  line(255, 280, 240, 260);
  
  //upperlip
  fill('#edb1a8');
  noStroke();
  beginShape();
  vertex(261, 460);
  vertex(284, 451);
  vertex(299, 453);
  vertex(315, 452);
  vertex(339, 461);
  endShape();
  
  //lowerlip
  fill('#d8a08c');
  noStroke();
  beginShape();
  vertex(262, 460);
  vertex(279, 468);
  vertex(325, 469);
  vertex(338, 460);
  endShape();
  
  //deathly hallows
  noFill();
  stroke('yellow');
  triangle(70, 60, 10, 170, 130, 170);
  ellipse(70, 135, 70, 70);
  line(70, 60, 70, 170);

}