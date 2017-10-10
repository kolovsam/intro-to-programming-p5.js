function setup() {

  createCanvas(500, 500); //draws a canvas 500x500 pixels
  background('	#D9BB9F'); //sets canvas background
}

function draw() {
  //1. Drawing the Sun

  strokeWeight(0); //sets the stroke of sun to 0

  fill('#DA3C38'); //color in left half of the sun
  arc(130, 60, 80, 80, HALF_PI, PI + HALF_PI); //left half of the sun
  
  fill('#DD743A'); //color in right half of the sun
  arc(130, 60, 80, 80, PI + HALF_PI, HALF_PI); //right half of the sun

  /*2. Drawing the Mountains 
  (Mountain M1 (base), Mountain M2 (left), Mountain M3(right)
  */

  stroke('gray'); //sets color of stroke
  strokeWeight(0.5); //sets stroke weight to 0.5

  //Draw Mountain M1
  noFill(); // initially no color to be filled

  fill('#609B85'); //color in base of M1
  triangle(250, 120, 120, 400, 390, 400); //Mountain M1

  fill('#006975'); //color in right half of M1
  triangle(250, 120, 255, 400, 390, 400); //right half of M1

  fill('#B1AA8E'); //color in top of M1
  triangle(250, 120, 227, 170, 250, 180); //left top of M1
  triangle(250, 120, 250, 180, 275, 170); //right top of M1

  fill(1, 129, 137); //color in right-side layer of M1
  triangle(315, 250, 275, 170, 250, 180); //right side layer M1

  fill('#188071'); //color in bottom left layer M1
  triangle(120, 400, 253, 270, 255, 400); //bottom left layer M1

  fill('#098C90'); //color in bottom right layer M1
  triangle(390, 400, 253, 270, 255, 400); // bottom right layer M1


  // Draw Mountain M2
  fill('#0F7068'); //color in base of M2
  triangle(160, 210, 60, 400, 255, 400); //Mountain M2

  fill('#028D83'); //color in right side of M2
  triangle(160, 210, 160, 400, 255, 400); //right side of M2

  fill('#B1AA8E'); //color in top of M2  
  triangle(160, 210, 139, 250, 160, 265); //top left of M2
  triangle(160, 210, 160, 265, 180, 250); //top right of M2

  fill('#B9A187'); //color in layer 1 right side of M2
  triangle(215, 320, 60, 400, 255, 400); // layer 1 right side M2

  fill('#085C81'); //color in layer 2 of M2
  triangle(158, 350, 60, 400, 255, 400); // layer 2 of M2

  fill(95, 158, 144); // color in layer 3 of M2
  triangle(120, 370, 60, 400, 255, 400); //layer 3 of M2

  fill('#06836E'); //color in layer 4 of M2
  triangle(120, 370, 60, 400, 160, 400); // layer 4 of M2


  // Draw Mountain M3
  fill(2, 132, 108); //color in base of M3
  triangle(320, 210, 215, 400, 430, 400); //Mountain M3

  fill(48, 73, 63); //color in right half of M3
  triangle(320, 210, 320, 400, 430, 400); //right half of M3

  fill('#B1AA8E'); //color in top of M3
  triangle(320, 210, 292, 260, 320, 270); //top left of M3
  triangle(320, 210, 320, 270, 349, 260); //top right of M3

  fill(190, 185, 157); // color in layer 1 of M3
  triangle(320, 300, 320, 400, 430, 400); //layer 1 of M3

  fill(83, 154, 132); //color in layer 2 of M3
  triangle(320, 350, 320, 400, 430, 400); //layer 2 of M3

  fill(9, 136, 150); // color in layer 3 of M3
  triangle(320, 350, 320, 400, 380, 400); //layer 3 of M3

  fill(1, 65, 94); //color in layer 4 of M3
  triangle(320, 350, 320, 400, 215, 400); // layer 4 of M3

}