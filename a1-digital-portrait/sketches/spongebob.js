function setup() {
  createCanvas(270, 400);
  background('Blue');

  //left arm
  fill('yellow');
  stroke('black');
  strokeWeight(4);
  quad(-10, 270, 40, 270, 40, 280, -10, 280);

  //rightarm
  fill('yellow');
  stroke('black');
  strokeWeight(4);
  quad(220, 270, 280, 270, 280, 280, 220, 280);

  //left sleeve
  fill('white');
  stroke('black');
  strokeWeight(4);
  quad(20, 265, 35, 265, 35, 285, 20, 285);

  //right sleeve 
  fill('white');
  stroke('black');
  strokeWeight(4);
  quad(220, 265, 250, 265, 250, 285, 220, 285);





  //shirt
  fill('white');
  stroke('black');
  strokeWeight(4);
  quad(35, 260, 235, 260, 235, 290, 35, 290);

  //shorts
  fill('Brown');
  stroke('black');
  strokeWeight(4);
  quad(35, 290, 235, 290, 235, 330, 35, 330);

  //left leg
  fill('yellow');
  stroke('black');
  strokeWeight(4);
  quad(90, 340, 100, 340, 100, 400, 90, 400);

  //right leg
  fill('yellow');
  stroke('black');
  strokeWeight(4);
  quad(171, 340, 181, 340, 181, 400, 171, 400);

  //left short
  fill('brown');
  stroke('black');
  strokeWeight(3);
  arc(95, 332, 40, 40, 0, 110, CHORD);

  //right short
  fill('brown');
  stroke('black');
  strokeWeight(3);
  arc(175, 332, 40, 40, 0, 110, CHORD);


  //belt buckle1
  fill('black')
  strokeWeight(0)
  quad(45, 305, 85, 305, 85, 315, 45, 315);

  //belt buckle2
  fill('black')
  strokeWeight(0)
  quad(105, 305, 165, 305, 165, 315, 105, 315);

  //belt buckle3
  fill('black')
  strokeWeight(0)
  quad(185, 305, 225, 305, 225, 315, 185, 315);

  //body
  fill('yellow');
  stroke('LimeGreen');
  strokeWeight(6);
  quad(20, 20, 250, 20, 235, 260, 35, 260);

  //big pore top left
  fill('limeGreen')
  strokeWeight(0)
  ellipse(40, 45, 20, 35);

  //little pore top left
  fill('limeGreen')
  strokeWeight(0)
  ellipse(40, 80, 15, 17);

  //little pore bottom left
  fill('limeGreen')
  strokeWeight(0)
  ellipse(60, 200, 15, 20);

  //big pore bottom left
  fill('limeGreen')
  strokeWeight(0)
  ellipse(85, 230, 22, 35);

  //little pore top right
  fill('limeGreen')
  strokeWeight(0)
  ellipse(230, 55, 15, 20);

  //big pore bottom right
  fill('limeGreen')
  strokeWeight(0)
  ellipse(210, 200, 30, 35);

  //littlepore bottom right
  fill('limeGreen')
  strokeWeight(0)
  ellipse(190, 230, 15, 23);


  //left eyelash 1
  fill('black')
  strokeWeight(0);
  quad(60, 45, 65, 45, 75, 60, 70, 60);
  //left eyelash 2
  fill('black')
  strokeWeight(0);
  quad(90, 37, 95, 37, 95, 60, 90, 60);
  //left eyelash 3
  fill('black')
  strokeWeight(0);
  quad(120, 45, 125, 45, 115, 60, 110, 60);

  //right eyelash 1
  fill('black')
  strokeWeight(0);
  quad(145, 45, 150, 45, 160, 60, 155, 60);
  //right eyelash 2
  fill('black')
  strokeWeight(0);
  quad(175, 37, 180, 37, 180, 60, 175, 60);
  //right eyelash 3
  fill('black')
  strokeWeight(0);
  quad(205, 45, 210, 45, 200, 60, 195, 60)

  //left eye
  fill('white');
  stroke('black');
  strokeWeight(3);
  ellipse(96, 90, 75, 75);
  //right eye
  fill('white');
  ellipse(174, 90, 75, 75);

  //left eye iris
  fill('lightBlue');
  strokeWeight(2);
  ellipse(105, 90, 35, 35);

  //right eye iris
  fill('lightBlue');
  strokeWeight(2);
  ellipse(164, 90, 35, 35);

  //left eye pupil
  fill('black');
  ellipse(107, 90, 15, 15);

  //right eye pupil
  fill('black');
  ellipse(162, 90, 15, 15);

  //nose
  fill('yellow');
  stroke('black')
  strokeWeight(3)
  ellipse(135, 110, 25, 35)
  //nose cover
  fill('yellow');
  stroke('yellow');
  ellipse(128, 140, 25, 35);

  //left cheek
  fill('yellow');
  stroke('red')
  strokeWeight(3)
  ellipse(75, 130, 30, 30)
  //left cheek cover
  fill('yellow');
  stroke('yellow');
  ellipse(81, 144, 30, 30);

  //left freckle 1
  fill('red');
  strokeWeight(0);
  ellipse(69, 126, 5, 5);

  //left freckle 2
  fill('red');
  strokeWeight(0);
  ellipse(80, 123, 5, 5);

  //left freckle 3
  fill('red');
  strokeWeight(0);
  ellipse(77, 132, 5, 5);


  //right cheek
  fill('yellow');
  stroke('red')
  strokeWeight(3)
  ellipse(195, 130, 30, 30)
  //rightcheek cover
  fill('yellow');
  stroke('yellow');
  ellipse(185, 145, 30, 30);

  //right freckle 1
  fill('red');
  strokeWeight(0);
  ellipse(189, 126, 5, 5);

  //right freckle 2
  fill('red');
  strokeWeight(0);
  ellipse(200, 123, 5, 5);

  //right freckle 3
  fill('red');
  strokeWeight(0);

  ellipse(197, 132, 5, 5);

  //mouth
  fill('darkRed');
  stroke('black');
  strokeWeight(3);
  arc(135, 145, 120, 130, 0, 110, CHORD);

  //left tooth
  fill('white')
  quad(108, 145, 128, 145, 131, 168, 105, 168);
  //right tooth
  fill('white')
  quad(143, 145, 163, 145, 166, 168, 140, 168);



  //tie top
  fill('Red');
  stroke('black');
  strokeWeight(3);
  arc(135, 264, 20, 30, 0, 110, CHORD);

  //tie bottom
  fill('red')
  quad(135, 280, 155, 311, 135, 325, 115, 311);

  //left collar
  fill('white');
  triangle(90, 264, 122, 264, 112, 280);
  //right collar
  fill('white');
  triangle(146, 264, 178, 264, 160, 280);





}