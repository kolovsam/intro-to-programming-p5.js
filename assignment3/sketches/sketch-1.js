var page = 1;
var mouseCounterC = 0;
var mouseCounterS = 0;
var mouseCounterT = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  //  noStroke();
  //  fill(50);
  //  textSize(16);
  //  text(page, 50, 50);
  if (page == 1) {
    P1(220, height / 2);
  } else if (page == 2 || page == 3 || page == 4) {
    P2();
  }
  if (page == 2) {
    noStroke();
    fill(158, 191, 76);
    text("choose your character", 210, 130);
    mouseCounterC = 0;
    mouseCounterS = 0;
    mouseCounterT = 0;
  }
  if (page == 3) {
    noStroke();
    fill(158, 191, 76);
    text("are you sure? press y/n", 210, 130);
  }
  if (page == 4) {
    noStroke();
    fill(158, 191, 76);
    text("good choice!", 250, 130);
  }
}

function keyTyped() {
  if (page == 3) {
    if (key == 'y') {
      page = 4;
    }
    if (key == 'n') {
      page = 2;
    }
  }
}

function keyPressed() {
  if (page <= 1) {
    page++;
  }
}

function P1(x, y) {
  fill(158, 191, 76);
  textSize(16);
  text("press any key to begin", x, y);
}

function P2(x, y) {
  if (mouseX <= 200 && mouseX >= 100 && mouseY <= 300 && mouseY >= 200) {
    noStroke();
    fill(249, 215, 17);
    ellipse(150, 255, 130, 130);
    if (mouseIsPressed) {
      if (mouseCounterC < 1 && mouseCounterS != 1 && mouseCounterT != 1) {
        mouseCounterC++;
      }
      if (page == 2) {
        page++;
      }
    }
  }
  if (mouseCounterC == 1 && mouseCounterS != 1 && mouseCounterT != 1) {
    fill(249, 215, 17);
    strokeWeight(5);
    stroke(229, 167, 43);
    ellipse(150, 255, 130, 130);
  }

  if (mouseX <= 330 && mouseX >= 260 && mouseY <= 300 && mouseY >= 200) {
    noStroke();
    fill(249, 215, 17);
    ellipse(295, 255, 130, 130);
    if (mouseIsPressed) {
      if (mouseCounterS < 1 && mouseCounterC != 1 && mouseCounterT != 1) {
        mouseCounterS++;
      }
      if (page == 2) {
        page++;
      }
    }
  }
  if (mouseCounterS == 1 && mouseCounterC != 1 && mouseCounterT != 1) {
    fill(249, 215, 17);
    strokeWeight(5);
    stroke(229, 167, 43);
    ellipse(295, 255, 130, 130);
  }

  if (mouseX <= 490 && mouseX >= 410 && mouseY <= 300 && mouseY >= 200) {
    noStroke();
    fill(249, 215, 17);
    ellipse(450, 255, 130, 130);
    if (mouseIsPressed) {
      if (mouseCounterT < 1 && mouseCounterC != 1 && mouseCounterS != 1) {
        mouseCounterT++;
      }
      if (page == 2) {
        page++;
      }
    }
  }
  if (mouseCounterT == 1 && mouseCounterC != 1 && mouseCounterS != 1) {
    fill(249, 215, 17);
    strokeWeight(5);
    stroke(229, 167, 43);
    ellipse(450, 255, 130, 130);
  }

  mycircle(150, 250);
  mysquare(260, 215);
  mytriangle(450, 215);
}

function mycircle(x, y) {
  noStroke();
  fill(150);
  ellipse(x, y + 42, 70, 20);
  strokeWeight(4);
  stroke(209, 38, 23);
  fill(244, 114, 102);
  ellipse(x, y, 80, 80);
  fill(255);
  stroke(50);
  ellipse(x - 10, y - 5, 12, 20);
  ellipse(x + 10, y - 5, 12, 20);
  fill(50);
  ellipse(x - 8, y - 5, 3, 8);
  ellipse(x + 12, y - 5, 3, 8);
}

function mysquare(x, y) {
  noStroke();
  fill(150);
  quad(x, y + 70, x + 70, y + 70, x + 73, y + 83, x - 3, y + 83);
  stroke(9, 102, 39);
  fill(141, 232, 171);
  rect(x, y, 70, 70);
  fill(255);
  stroke(50);
  ellipse(x + 23, y + 25, 12, 20);
  ellipse(x + 45, y + 25, 12, 20);
  fill(50);
  ellipse(x + 21, y + 25, 3, 7);
  ellipse(x + 43, y + 25, 3, 7);
  noFill();
  stroke(141, 232, 171);
  strokeWeight(11);
  line(x + 15, y + 18, x + 50, y + 18);
}

function mytriangle(x, y) {
  noStroke();
  fill(150);
  triangle(x - 40, y + 70, x + 40, y + 70, x, y + 85);
  strokeWeight(4);
  stroke(131, 12, 142);
  fill(242, 167, 249);
  triangle(x, y, x - 40, y + 70, x + 40, y + 70);
  stroke(50);
  noFill();
  curve(x - 5, y - 70, x - 23, y + 30, x - 9, y + 30, x - 25, y - 70);
  curve(x + 20, y - 70, x + 7, y + 30, x + 21, y + 30, x, y - 70);
}