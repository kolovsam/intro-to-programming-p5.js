function setup() {
  createCanvas(600, 600);

  //top left
  x1 = 40;
  y1 = 5;

  //top right
  x2 = 505;
  y2 = 5;

  //bot left
  x3 = 40;
  y3 = 465;

  //bot right
  x4 = 505;
  y4 = 465;

}

function draw() {

  background(220);

  // top left
  if (x1 < 100) {
    x1 = x1 + 1;
  }

  if (y1 < 250) {
    y1 = y1 + 1;
  }

  // top right
  if (x2 > 450) {
    x2 = x2 - 1;
  }

  if (y2 < 250) {
    y2 = y2 + 1;
  }

  // bot left
  if (x3 < 215) {
    x3 = x3 + 1;
  }

  if (y3 > 250) {
    y3 = y3 - 1;
  }

  // bot right
  if (x4 > 335) {
    x4 = x4 - 1;
  }

  if (y4 > 250) {
    y4 = y4 - 1;
  }


  // top left
  //rect(x, y, width, height);	
  fill('green');
  rect(x1, y1, 10, 5);
  rect(x1 + 25, y1, 10, 5);
  fill('blue');
  rect(x1 - 10, y1 + 5, 55, 10);
  fill('white');
  rect(x1 - 10, y1 + 15, 55, 30);
  fill('green');
  rect(x1 - 10, y1 + 45, 55, 10);
  rect(x1 - 10, y1 + 55, 55, 30);
  rect(x1 - 10, y1 + 105, 55, 20);
  fill('black');
  rect(x1 - 10, y1 + 85, 55, 20);



  // top right
  //rect(x, y, width, height);	
  fill('green');
  rect(x2, y2, 10, 5);

  rect(x2 + 25, y2, 10, 5);
  fill('red');
  rect(x2 - 10, y2 + 5, 55, 10);
  fill('white');
  rect(x2 - 10, y2 + 15, 55, 30);
  fill('green');
  rect(x2 - 10, y2 + 45, 55, 10);
  rect(x2 - 10, y2 + 55, 55, 30);
  rect(x2 - 10, y2 + 105, 55, 20);
  fill('black');
  rect(x2 - 10, y2 + 85, 55, 20);


  // bot left
  //rect(x, y, width, height);	
  fill('green');
  rect(x3, y3, 10, 5);
  rect(x3 + 25, y3, 10, 5);
  fill('purple');
  rect(x3 - 10, y3 + 5, 55, 10);
  fill('white');
  rect(x3 - 10, y3 + 15, 55, 30);
  fill('green');
  rect(x3 - 10, y3 + 45, 55, 10);
  rect(x3 - 10, y3 + 55, 55, 30);
  rect(x3 - 10, y3 + 105, 55, 20);
  fill('black');
  rect(x3 - 10, y3 + 85, 55, 20);


  // bot right
  //rect(x, y, width, height);	
  fill('green');
  rect(x4, y4, 10, 5);
  rect(x4 + 25, y4, 10, 5);
  fill('orange');
  rect(x4 - 10, y4 + 5, 55, 10);
  fill('white');
  rect(x4 - 10, y4 + 15, 55, 30);
  fill('green');
  rect(x4 - 10, y4 + 45, 55, 10);
  rect(x4 - 10, y4 + 55, 55, 30);
  rect(x4 - 10, y4 + 105, 55, 20);
  fill('black');
  rect(x4 - 10, y4 + 85, 55, 20);
}