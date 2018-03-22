var pageNum = 1;

var MouseClickedAtX;
var mouseClickedAtY;

function setup() {
  createCanvas(600, 600);
}


function draw() {
  if (pageNum == 1) {
    drawPage1();
  } else if (pageNum == 2) {
    drawPage2();

  } else if (pageNum == 3) {
    drawPage3();

  } else if (pageNum == 4) {
    drawPage4();

  } else if (pageNum == 5) {
    drawPage5();

  } else if (pageNum == 6) {
    drawPage6();

  } else if (pageNum == 7) {
    drawPage7();

  } else if (pageNum == 8) {
    drawPage8();

  } else if (pageNum == 9) {
    drawPage9();
  }
}


//draw page1
function drawPage1() {
  background('green');
  fill('white');
  textSize(50);
  strokeWeight(0);
  text("Welcome to Blackjack!", 50, 200);
  textSize(35);
  fill('yellow');
  text("Ready to gamble?!", 150, 325);

  //yes
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(200, 450, 100);
  strokeWeight(0);
  textSize(35);
  fill('yellow')
  Yes = text('Yes', 172, 460)

  //no
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(400, 450, 100);
  strokeWeight(0);
  textSize(35);
  fill('Yellow')
  No = text('No', 377, 460)


  if ((MouseClickedAtX > 350) &&
    (MouseClickedAtX < 450) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 500)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 2;
  }

  if ((MouseClickedAtX > 150) &&
    (MouseClickedAtX < 250) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 500)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 1;
  }


  MouseClickedAtX = 0;
  mouseClickedAtY = 0;

}
//draw page2
function drawPage2() {
  background('green');

  //player score
  fill('white')
  textSize(30)
  text('8', 255, 390);

  //dealer score
  fill('white')
  textSize(30)
  text('4', 255, 240);

  //player cards
  fill('white');
  strokeWeight(0);
  quad(150, 400, 250, 400, 250, 550, 150, 550);
  strokeWeight(0);
  quad(275, 400, 375, 400, 375, 550, 275, 550);
  fill('red')
  textSize(35)
  //red5
  text(5, 155, 435)
  text(5, 225, 535)
  //black3
  fill('black');
  text(3, 280, 435)
  text(3, 350, 535)

  //dealer cards
  fill('white');
  strokeWeight(0);
  quad(150, 55, 250, 55, 250, 200, 150, 200);
  strokeWeight(0);
  fill('red');
  quad(275, 55, 375, 55, 375, 200, 275, 200);
  fill('black');
  //black4
  text(4, 155, 90)
  text(4, 225, 190)

  //Hit
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(125, 300, 100);
  strokeWeight(0);
  textSize(35);
  fill('Yellow')
  text('Hit', 102, 310)

  //Stay
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(475, 300, 100);
  strokeWeight(0);
  textSize(35);
  fill('Yellow')
  text('Stay', 442, 310);

  if ((MouseClickedAtX > 75) &&
    (MouseClickedAtX < 175) &&
    (MouseClickedAtY > 250) &&
    (MouseClickedAtY < 350)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 2;
  }

  if ((MouseClickedAtX > 425) &&
    (MouseClickedAtX < 525) &&
    (MouseClickedAtY > 250) &&
    (MouseClickedAtY < 350)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 3;
  }

  MouseClickedAtX = 0;
  mouseClickedAtY = 0;




}

//draw page3
function drawPage3() {
  background('green');
  fill('yellow');
  textSize(50);
  text('OK! Have a nice day!', 65, 300);


  if ((MouseClickedAtX > 0) &&
    (MouseClickedAtX < 600) &&
    (MouseClickedAtY > 0) &&
    (MouseClickedAtY < 600)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = 1;
  }

  MouseClickedAtX = 0;
  mouseClickedAtY = 0;


}

//draw page4
function drawPage4() {
  background('green');

  //player score
  fill('white')
  textSize(30)
  text('15', 252, 390);

  //dealer score
  fill('white')
  textSize(30)
  text('4', 255, 240);

  //player cards
  fill('white');
  strokeWeight(0);
  quad(100, 400, 200, 400, 200, 550, 100, 550);
  strokeWeight(0);
  quad(225, 400, 325, 400, 325, 550, 225, 550);
  quad(350, 400, 450, 400, 450, 550, 350, 550);
  fill('red')
  textSize(35)
  //red5
  text(5, 105, 435)
  text(5, 175, 535)
  //black3
  fill('black');
  text(3, 230, 435)
  text(3, 300, 535)
  //black7
  fill('black');
  text(7, 355, 435)
  text(7, 425, 535)

  //dealer cards
  fill('white');
  strokeWeight(0);
  quad(150, 55, 250, 55, 250, 200, 150, 200);
  strokeWeight(0);
  fill('red');
  quad(275, 55, 375, 55, 375, 200, 275, 200);
  fill('black');
  //black4
  text(4, 155, 90)
  text(4, 225, 190)

  //Hit
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(125, 300, 100);
  strokeWeight(0);
  textSize(35);
  fill('Yellow')
  text('Hit', 102, 310)

  //Stay
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(475, 300, 100);
  strokeWeight(0);
  textSize(35);
  fill('Yellow')
  text('Stay', 442, 310);

  if ((MouseClickedAtX > 75) &&
    (MouseClickedAtX < 175) &&
    (MouseClickedAtY > 250) &&
    (MouseClickedAtY < 350)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 2;
  }

  if ((MouseClickedAtX > 425) &&
    (MouseClickedAtX < 525) &&
    (MouseClickedAtY > 250) &&
    (MouseClickedAtY < 350)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 3;
  }

  MouseClickedAtX = 0;
  MouseClickedAtY = 0;



}

//draw page5
function drawPage5() {
  background('green');

  //player score
  fill('white')
  textSize(30)
  text('8', 255, 390);

  //dealer score
  fill('white')
  textSize(30)
  text('16', 252, 240);

  //player cards
  fill('white');
  strokeWeight(0);
  quad(150, 400, 250, 400, 250, 550, 150, 550);
  strokeWeight(0);
  quad(275, 400, 375, 400, 375, 550, 275, 550);
  fill('red')
  textSize(35)
  //red5
  text(5, 155, 435)
  text(5, 225, 535)
  //black3
  fill('black');
  text(3, 280, 435)
  text(3, 350, 535)

  //dealer cards
  fill('white');
  strokeWeight(0);
  quad(100, 55, 200, 55, 200, 200, 100, 200);
  strokeWeight(0);
  quad(225, 55, 325, 55, 325, 200, 225, 200);
  quad(350, 55, 450, 55, 450, 200, 350, 200);
  fill('black');
  //black4
  text(4, 105, 90)
  text(4, 175, 190)
  //black5
  text(5, 230, 90)
  text(5, 300, 190)
  //red7
  fill('red');
  text(7, 355, 90)
  text(7, 425, 190)


  //bust
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(105, 300, 150);
  strokeWeight(0);
  textSize(20);
  fill('Yellow')
  text('Think dealer', 52, 300);
  text('will win?', 71, 320)

  //win
  fill('green');
  stroke('yellow');
  strokeWeight(5);
  ellipse(455, 300, 150);
  strokeWeight(0);
  textSize(20);
  fill('Yellow')
  text('Think dealer', 402, 300);
  text('will bust?', 421, 320)



  if ((MouseClickedAtX > 75) &&
    (MouseClickedAtX < 175) &&
    (MouseClickedAtY > 250) &&
    (MouseClickedAtY < 350)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 4;
  }

  if ((MouseClickedAtX > 425) &&
    (MouseClickedAtX < 525) &&
    (MouseClickedAtY > 250) &&
    (MouseClickedAtY < 350)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = pageNum + 3;
  }


  MouseClickedAtX = 0;
  MouseClickedAtY = 0;


}

//draw page6
function drawPage6() {
  background('green');


  //player score
  fill('white')
  textSize(30)
  text('21', 252, 390);

  //dealer score
  fill('white')
  textSize(30)
  text('4', 255, 240);

  //player cards
  fill('white');
  strokeWeight(0);
  quad(50, 400, 150, 400, 150, 550, 50, 550);
  strokeWeight(0);
  quad(175, 400, 275, 400, 275, 550, 175, 550);
  quad(300, 400, 400, 400, 400, 550, 300, 550);
  quad(425, 400, 525, 400, 525, 550, 425, 550);
  fill('red')
  textSize(35)
  //red5
  text(5, 55, 435)
  text(5, 125, 535)
  //black3
  fill('black');
  text(3, 180, 435)
  text(3, 250, 535)
  //black7
  fill('black');
  text(7, 305, 435)
  text(7, 375, 535)
  //red6
  fill('red');
  text(6, 430, 435)
  text(6, 500, 535)


  //dealer cards
  fill('white');
  strokeWeight(0);
  quad(150, 55, 250, 55, 250, 200, 150, 200);
  strokeWeight(0);
  fill('red');
  quad(275, 55, 375, 55, 375, 200, 275, 200);
  fill('black');
  //black4
  text(4, 155, 90)
  text(4, 225, 190)

  //you win
  fill('yellow')
  textSize(100)
  text('21! You win!', 40, 330);

  if ((MouseClickedAtX > 0) &&
    (MouseClickedAtX < 600) &&
    (MouseClickedAtY > 0) &&
    (MouseClickedAtY < 600)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = 1;
  }

  MouseClickedAtX = 0;
  MouseClickedAtY = 0;


}

//draw page7
function drawPage7() {
  background('green');

  //player score
  fill('white')
  textSize(30)
  text('15', 252, 390);

  //dealer score
  fill('white')
  textSize(30)
  text('22', 252, 240);

  //player cards
  fill('white');
  strokeWeight(0);
  quad(100, 400, 200, 400, 200, 550, 100, 550);
  quad(225, 400, 325, 400, 325, 550, 225, 550);
  quad(350, 400, 450, 400, 450, 550, 350, 550);
  strokeWeight(0);
  fill('red')
  textSize(35)
  //red5
  text(5, 105, 435)
  text(5, 175, 535)
  //black3
  fill('black');
  text(3, 230, 435)
  text(3, 300, 535)
  //black7
  fill('black');
  text(7, 355, 435)
  text(7, 425, 535)

  //dealer cards
  fill('white');
  strokeWeight(0);
  quad(100, 55, 200, 55, 200, 200, 100, 200);
  strokeWeight(0);
  quad(225, 55, 325, 55, 325, 200, 225, 200);
  quad(350, 55, 450, 55, 450, 200, 350, 200);
  fill('black');
  //black4
  text(4, 105, 90)
  text(4, 175, 190)
  //black5
  text(10, 230, 90)
  text(10, 280, 190)
  //red7
  fill('red');
  text(8, 355, 90)
  text(8, 425, 190)

  //youwin
  fill('yellow');
  textSize(50);
  text('Dealer busts! You win!', 65, 320);

  if ((MouseClickedAtX > 0) &&
    (MouseClickedAtX < 600) &&
    (MouseClickedAtY > 0) &&
    (MouseClickedAtY < 600)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = 1;
  }

}

//draw page8
function drawPage8() {
  background('green');

  //player score
  fill('white')
  textSize(30)
  text('8', 255, 390);

  //dealer score
  fill('white')
  textSize(30)
  text('22', 252, 240);

  //player cards
  fill('white');
  strokeWeight(0);
  quad(150, 400, 250, 400, 250, 550, 150, 550);
  strokeWeight(0);
  quad(275, 400, 375, 400, 375, 550, 275, 550);
  fill('red')
  textSize(35)
  //red5
  text(5, 155, 435)
  text(5, 225, 535)
  //black3
  fill('black');
  text(3, 280, 435)
  text(3, 350, 535)

  //dealer cards
  fill('white');
  strokeWeight(0);
  quad(50, 55, 150, 55, 150, 200, 50, 200);
  strokeWeight(0);
  quad(175, 55, 275, 55, 275, 200, 175, 200);
  quad(300, 55, 400, 55, 400, 200, 300, 200);
  quad(425, 55, 525, 55, 525, 200, 425, 200);
  fill('black');
  //black4
  text(4, 55, 90)
  text(4, 125, 190)
  //black5
  text(5, 180, 90)
  text(5, 250, 190)
  //red7
  fill('red');
  text(7, 305, 90)
  text(7, 375, 190)
  //black6
  fill('black');
  text(6, 430, 90)
  text(6, 500, 190);

  //youwereright!
  fill('yellow')
  textSize(50)
  text('You were right!', 110, 300);
  text('You win!', 180, 350);


  if ((MouseClickedAtX > 0) &&
    (MouseClickedAtX < 600) &&
    (MouseClickedAtY > 0) &&
    (MouseClickedAtY < 600)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = 1;
  }

}

//draw page9
function drawPage9() {
  background('green');

  //player score
  fill('white')
  textSize(30)
  text('8', 255, 390);

  //dealer score
  fill('white')
  textSize(30)
  text('22', 252, 240);


  //player cards
  fill('white');
  strokeWeight(0);
  quad(150, 400, 250, 400, 250, 550, 150, 550);
  strokeWeight(0);
  quad(275, 400, 375, 400, 375, 550, 275, 550);
  fill('red')
  textSize(35)
  //red5
  text(5, 155, 435)
  text(5, 225, 535)
  //black3
  fill('black');
  text(3, 280, 435)
  text(3, 350, 535)

  //dealer cards
  fill('white');
  strokeWeight(0);
  quad(50, 55, 150, 55, 150, 200, 50, 200);
  strokeWeight(0);
  quad(175, 55, 275, 55, 275, 200, 175, 200);
  quad(300, 55, 400, 55, 400, 200, 300, 200);
  quad(425, 55, 525, 55, 525, 200, 425, 200);
  fill('black');
  //black4
  text(4, 55, 90)
  text(4, 125, 190)
  //black5
  text(5, 180, 90)
  text(5, 250, 190)
  //red7
  fill('red');
  text(7, 305, 90)
  text(7, 375, 190)
  //black6
  fill('black');
  text(6, 430, 90)
  text(6, 500, 190);

  //don't be so pessimistic
  fill('yellow')
  textSize(50)
  text('Dont be so pessimistic!', 40, 300);
  text('You win!', 190, 350);


  if ((MouseClickedAtX > 0) &&
    (MouseClickedAtX < 600) &&
    (MouseClickedAtY > 0) &&
    (MouseClickedAtY < 600)) {
    // if all 4 of those conditions are true, then it was inside box "3"
    pageNum = 1;
  }

}

function mouseClicked() {
  MouseClickedAtX = mouseX;
  MouseClickedAtY = mouseY;
}