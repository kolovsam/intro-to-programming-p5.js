/* 
This is a Poster designed by Japanese artist Ikko Tanaka.
*/

function setup() {
  background('white');
  createCanvas(500, 688);
  strokeWeight(0);

  //draw the hair
  fill('black');
  ellipse(250, 354, 470);

  //draw the comb as a semicircle on top of the black hair)
  fill('tan');
  ellipse(260, 210, 260);
  fill('black');
  rect(130, 210, 260, 130);

  //draw the accessory; make the hair and the accessory semi-cicles.
  fill('blue');
  ellipse(250, 354, 180);
  fill('white');
  rect(15, 354, 470, 235);

  //draw clothes, lips and more accessories
  fill('yellow');
  ellipse(436, 712, 490);

  fill('purple');
  ellipse(436, 734, 490);

  fill('green');
  ellipse(380, 590, 140);

  fill('red');
  ellipse(250, 500, 20);


  fill('pink');
  ellipse(250, 506, 23);


  fill('red');
  ellipse(83, 136, 76);

  fill('orange');
  rect(160, 354, 180, 18);

  //draw the 1st eye
  fill('black');

  translate(192, 374);
  rotate(PI / 6);
  arc(0, 0, 27, 27, PI, 0);

  //draw the 2nd eye
  rotate(-PI / 6);
  translate(116, 0);
  rotate(-PI / 6);
  arc(0, 0, 27, 27, PI, 0);
}

function draw() {}