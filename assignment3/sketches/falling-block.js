//Sometimes there's a bug where the falling block doesn't trigger the fail page
//I haven't figured out why yet, and it seems to happen randomly




var x1 = 200;
var y1 = 389
var w = 30;
var h = 10;
var x2 = 200;
var y2 = 0;
var w2 = 30;
var h2 = 30;
var pageNum = 0;

function setup() {
  createCanvas(400, 400);
  var uc = color(0);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(20);
}



function draw() {
  background(204);
  if (pageNum == 0) {
    squarecolor();
  } else if (pageNum == 1) {
    homeScreen();
  } else if (pageNum == 2) {
    easy();
  } else if (pageNum == 3) {
    medium();
  } else if (pageNum == 4) {
    hard();
  }
  else if (pageNum == 5) {
    thanks();
  }
}

function squarecolor() {
  pageNum = 0;
  var x = 100
  var y = 100
  var w = 100
  var h = 50
  background(204);
  fill(0);
  text("Choose your color.", 200, 50);
  fill(255);
  rect(x, y, w, h);
  rect(x, y + 100, w, h);
  rect(x, y + 200, w, h);
  fill("Blue");
  text("Blue", 150, 130);
  fill("Green");
  text("Green", 150, 230);
  fill("Purple");
  text("Purple", 150, 330);
  if ((mouseX > x) && (mouseX < x + w) && (mouseY > y) && (mouseY < y + h) && (mouseIsPressed)) {
    pageNum = 1
    uc = "Blue";
  }
  if ((mouseX > x) && (mouseX < x + w) && (mouseY > (y + 100)) && (mouseY < (y + 100) + h) && (mouseIsPressed)) {
    pageNum = 1
    uc = "Green";
  }
  if ((mouseX > x) && (mouseX < x + w) && (mouseY > y + 200) && (mouseY < (y + 200) + h) && (mouseIsPressed)) {
    pageNum = 1
    uc = "Purple";
  }
}

function homeScreen() {
  pageNum = 1;
  text(pageNum, 50, 50);
  var x = 200
  var y = 100
  var w = 100
  var h = 50
  background(204);
  fill(0);
  text("Choose your difficulty.", 200, 50);
  fill(255);
  rect(x, y, w, h);
  rect(x, y + 100, w, h);
  rect(x, y + 200, w, h);
  fill(0);
  text("Easy", 250, 130);
  text("Medium", 250, 230);
  text("Hard", 250, 330);
  if ((mouseX > x) && (mouseX < x + w) && (mouseY > y) && (mouseY < y + h) && (mouseIsPressed)) {
    pageNum = 2
  }
  if ((mouseX > x) && (mouseX < x + w) && (mouseY > (y + 100)) && (mouseY < (y + 100) + h) && (mouseIsPressed)) {
    pageNum = 3
  }
  if ((mouseX > x) && (mouseX < x + w) && (mouseY > y + 200) && (mouseY < (y + 200) + h) && (mouseIsPressed)) {
    pageNum = 4
  }
}




function easy() {
  pageNum = 2;
  fill(uc);
  rect(x1, y1, w, h);
  rect(x2, y2, w2, h2);
  y2 += 5;
  if (keyIsDown(LEFT_ARROW))
    x1 -= 5;
  if (keyIsDown(RIGHT_ARROW))
    x1 += 5;
  if ((x1 < x2 + w2) && (y1 > y2) && (y1 < y2 + h2)) {
    y2 = 0;
    x3 = random(30, 369);
    x2 = x3;
  }
  if (y2 > 400) {
    background("Red");
    y2 = 500;
    fill(0);
    text("Great work!", 200, 150)
    fill(0);
    text("Start over? (shift) ", 200, 200)
    text("Finished? (esc) ", 200, 250)
  }
  	if (keyIsDown(SHIFT)) {
    pageNum=0;
    y2=0;
    x2=200;
  }
    if (keyIsDown(ESCAPE)) {
    pageNum=5;
  }
}

function medium() {
  pageNum = 3;
  fill(uc);
  rect(x1, y1, w, h);
  rect(x2, y2, w2, h2);
  y2 += 10;
  if (keyIsDown(LEFT_ARROW))
    x1 -= 5;
  if (keyIsDown(RIGHT_ARROW))
    x1 += 5;
  if ((x1 < x2 + w2) && (y1 > y2) && (y1 < y2 + h2)) {
    y2 = 0;
    x3 = random(30, 369);
    x2 = x3;
  }
  if (y2 > 400) {
    background("red");
    y2 = 500;
    fill(0);
    text("Meh.", 200, 150)
    text("Start over? (shift) ", 200, 200)
    text("Finished? (esc) ", 200, 250)
  }
  	if (keyIsDown(SHIFT)) {
    pageNum=0;
    y2=0;
    x2=200;
  }
    if (keyIsDown(ESCAPE)) {
    pageNum=5;
  }
}



function hard() {
  pageNum = 4;
  fill(uc);
  rect(x1, y1, w, h);
  rect(x2, y2, w2, h2);
  y2 += 15;
  if (keyIsDown(LEFT_ARROW))
    x1 -= 5;
  if (keyIsDown(RIGHT_ARROW))
    x1 += 5;
  if ((x1 < x2 + w2) && (y1 > y2) && (y1 < y2 + h2)) {
    y2 = 0;
    x3 = random(30, 369);
    x2 = x3;
  }
  if (y2 > 400) {
    background("red");
    y2 = 500;
    fill(0);
    text("That was terrible.", 200, 150)
    text("Start over? (shift) ", 200, 200)
    text("Finished? (esc) ", 200, 250)
  }
  	if (keyIsDown(SHIFT)) {
    pageNum=0;
    y2=0;
    x2=200;
  }
    if (keyIsDown(ESCAPE)) {
    pageNum=5;
  }
}

function thanks() {
  background(204);
    text("Thanks for playing.", 200, 200)
}
