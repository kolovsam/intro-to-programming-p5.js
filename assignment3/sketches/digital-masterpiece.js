var pageNumber = 0;
var welcome = 'hello! click anywhere to create a digital masterpiece';
var abstract = 'type "a" for abstract';
var realistic = 'type "r" for "realism"';
var abstractMinimal = 'type "m" for minimal abstraction';
var abstractColorful = 'type "c" for noisy and random';
var startOver = 'press "0" to start over';

function setup() {
  createCanvas(400, 400);

}

function draw() {
  clear();
  noStroke();
  fill(100);
  background('white');
  textAlign(CENTER, CENTER);
  text(welcome, 200, 200);

  // call function to draw second page
  if (pageNumber == 1) {
    drawPage2();

  }

  if (pageNumber == 3) {
    drawPage3Abstract();
  }

  if (pageNumber == 4) {
  	drawRealistic();
  }

  if (pageNumber == 5) {
  	drawAbstractColorful();
  }

  if (pageNumber == 6) {
  	drawAbstractMinimal();
  }

}


function drawPage2() {
  clear();
  background('red');
  noStroke();
  fill(50);
  text(abstract, 200, 200);
  text(realistic, 200, 220);

}

function drawPage3Abstract() {
  background('yellow');
  text(abstractColorful, 200, 200);
  text(abstractMinimal, 200, 220);
  text(startOver, 200, 240);

}

function drawRealistic(){
  // clear background
 	clear();

    // neck
  fill(255, 234, 243);
  stroke(56, 56, 56);
  rect(75, 135, 45, 35);

  // hair
  fill(96, 47, 9);
  strokeWeight(0);
  strokeCap('Round');
  arc(98, 80, 110, 142, radians(180), radians(0));

  // ears
  stroke(56, 56, 56)
  fill(255, 234, 243);
  strokeWeight(5);
  arc(48, 95, 20, 20, radians(80), radians(260));
  arc(148, 95, 20, 20, radians(280), radians(80));


  // Head
  ellipse(98, 85, 100, 150);

  // stubble
  strokeWeight(1);
  point(90, 125);
  point(110, 130);
  point(80, 130);
  point(88, 140);
  point(120, 88);
  point(80, 135);
  point(83, 118);
  point(118, 83);
  point(90, 125);
  point(90, 125);
  point(90, 125);
  point(90, 125);


  // eyebrows
  strokeWeight(5);
  arc(73, 90, 30, 30, radians(235), radians(300));
  arc(123, 90, 30, 30, radians(235), radians(300));


  // eye circles
  strokeWeight(1);
  arc(73, 85, 30, 30, radians(0), radians(85));
  arc(123, 85, 30, 30, radians(90), radians(180));

  // eyes

  fill('white');
  ellipse(75, 90, 21, 11);
  ellipse(121, 90, 21, 11);
  fill(147, 170, 196);
  strokeWeight(0);
  ellipse(75, 90, 10, 10);
  ellipse(121, 90, 10, 10);
  fill(56, 56, 56);
  ellipse(75, 90, 5, 5);
  ellipse(121, 90, 5, 5);
  fill('white');
  ellipse(77, 88, 3, 3);
  ellipse(123, 88, 3, 3);

  // nose
  fill(200, 10, 90, 60);
  triangle(98, 92, 108, 115, 88, 115);
  strokeWeight(4);
  arc(98, 100, 30, 30, radians(70), radians(110));

  // mouth
  noFill();
  strokeWeight(2);
  arc(98, 116, 30, 30, radians(45), radians(135));

  // hair strands
  strokeWeight(2);
  noFill();
  stroke(96, 47, 9);
  arc(80, 20, 53, 105, radians(0), radians(90));
  arc(74, 10, 53, 117, radians(0), radians(90));
  arc(69, 10, 53, 117, radians(0), radians(90));

  // hat
  fill(15, 142, 136);
  strokeWeight(6);
  stroke(10, 102, 97);
  arc(98, 65, 106, 115, radians(180), radians(0));
  rect(43, 40, 110, 24);

  noStroke();
  text(startOver, 200, 200);

}

function drawAbstractColorful() {
  background('purple');
  fill('yellow');
  text(startOver, 80, 380);
  for (var i = 0; i < 400; i++) {
  var r = random(400);
  stroke(r*5);
  line(200, i, 200+r, i);

}
}

function drawAbstractMinimal() {
  background(102);
  noStroke();
  fill(112);
  rect(30,30,90,90);
  fill(115);
  rect(90,90,30,30);
  fill(120);
  rect(30,30,60,60);
  // fill(100);
}

// click to open page 1
function mouseClicked() {
  pageNumber = 1;
}

function keyTyped() {
  if (key === 'a') {
    pageNumber = 3;
  } else if (key === 'r') {
    pageNumber = 4;
  } else if (key === 'c') {
    pageNumber = 5;
  } else if (key === 'm') {
  	pageNumber = 6;
  } else if (key === '0') {
  	pageNumber = 1;
  }
}
