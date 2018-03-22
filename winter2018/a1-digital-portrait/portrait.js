function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('powderblue');

  strokeWeight(0)
  //This draws the hair 
  fill('black')
  quad(181, 173, 51, 463, 549, 463, 417, 173)
  //This draws the oval face
  fill('mistyrose')
  ellipse(300, 300, 310, 400);
  // This draws the nose
  fill('pink')
  triangle(300, 250, 270, 378, 330, 378);
  //The below codes draw both eyes
  fill('white')
  ellipse(230, 250, 80, 80);
  ellipse(370, 250, 80, 80);
  fill('lightskyblue')
  ellipse(230, 250, 55, 55);
  ellipse(370, 250, 55, 55);
  fill('black')
  ellipse(370, 250, 25, 25);
  ellipse(230, 250, 25, 25);
  fill('white')
  ellipse(385, 240, 10, 10);
  ellipse(215, 240, 10, 10);
  //This draws cheeks
  fill('peachpuff')
  ellipse(390, 340, 80, 80);
  ellipse(210, 340, 80, 80);
  //This draws the upper lip
  fill('crimson')
  triangle(312, 392, 296, 418, 338, 418);
  triangle(286, 392, 259, 418, 303, 418);
  //This draws the lower lip
  fill('red')
  triangle(252, 419, 300, 445, 346, 419);
  //This draws the neck
  fill('mistyrose')
  quad(241, 465, 241, 600, 355, 600, 355, 465)
  //This draws the pointy chin
  fill('pink')
  triangle(241, 487, 300, 533, 355, 487);
  //The below codes draw the eyebrows
  fill('black')
  triangle(229, 180, 171, 207, 285, 207);
  triangle(371, 180, 313, 207, 427, 207);
  //This draws the hat
  arc(300, 140, 250, 230, PI, TWO_PI)
  ellipse(300, 155, 450, 40)
  //This draws the ribbon on the hat
  fill('gold')
  ellipse(300, 138, 250, 10)
}