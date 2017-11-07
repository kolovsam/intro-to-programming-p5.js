var pageNum = 0; // page number counter
var answers = new Array(); // array to keep store answers

// when the mouse is clicked, the function named mouseClicked() updates these variables
var MouseClickedAtX;
var MouseClickedAtY;

var box1X = 20;
var box1X2 = 80;
var box1Y = 200;
var box1Y2 = 80;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  if (pageNum == 0) {
    drawPage();
  }

  if (pageNum == 1) {
    drawPage1();

  } else if (pageNum == 2) {
    drawPage2();

  } else if (pageNum == 3) {
    drawPage3();

  } else if (pageNum == 4) {
    drawPage4();

  } else {
    text("error", 10, 20);
  }
}

// INTRO
function drawPage() {
  fill("black");
  textSize(20)
  text("Moral Question Game:", 40, 75);
  text("Figure out whether you're a Kantian or a Utilitarian! ", 40, 115);
  textSize(12)
  text("Click button to select", 20, 180);
  text("Play", 120, 245);
  //fill boxes green
  fill("green");
  // box 1
  rect(box1X, box1Y, box1X2, box1Y2, 20);
  // if box 1 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y, box1Y2 + box1Y)) {
    // go to the next screen
    pageNum = 1;

  }
  // reset these for the next time through draw()
  MouseClickedAtX = 0;
  MouseClickedAtY = 0;
}

// FIRST QUESTION 
function drawPage1() {
  fill("grey");
  text("Source: https://en.wikipedia.org/wiki/Trolley_problem", 20, 15);

  fill("black");
  text("There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks, there", 20, 60);
  text("are five people tied up and unable to move. The trolley is headed straight for them. You", 20, 75);
  text("are standing some distance off in the train yard, next to a lever. If you pull this lever", 20, 90);
  text("the trolley will switch to a different set of tracks. However, you notice that there is one", 20, 105);
  text("person tied up on the side track. You have two options:", 20, 120);

  text("Click button to select", 20, 180);

  text("1. Do nothing, and the trolley kills the five people on the main track.", 120, 245);
  text("2. Pull the lever, diverting the trolley onto the side track where it will kill one person.", 120, 345);
  
  // fill boxes green
  fill("green");

  // box 1
  rect(box1X, box1Y, box1X2, box1Y2, 20);

  // box 2
  rect(box1X, box1Y + 100, box1X2, box1Y2, 20);

  // if box 1 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y, box1Y2 + box1Y)) {
    // go to the next screen while saving answer
    append(answers, 1)
    pageNum = pageNum + 1;
  }

  // if box 2 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y + 100, box1Y2 + box1Y + 100)) {
    // go to the next screen while saving answer
    append(answers, 2)
    pageNum = pageNum + 1;
  }

  // reset these for the next time through draw()
  MouseClickedAtX = 0;
  MouseClickedAtY = 0;
}


// SECOND QUESTIONS
function drawPage2() {
  fill("grey");
  text("Source: https://en.wikipedia.org/wiki/Trolley_problem", 20, 15);
  text("Answer to questions:" + answers, 400, 15);
  fill("black");
  text("As before, a trolley is hurtling down a track towards five people. You are on a bridge under which it ", 20, 60);
  text("will pass, and you can stop it by putting something very heavy in front of it. As it happens, there is a ", 20, 75);
  text("very fat man next to you – your only way to stop the trolley is to push him over the bridge and onto", 20, 90);
  text("the track, killing him to save five. Should you proceed?", 20, 105);

  text("Click button to select", 20, 180);

  text("Yes - push the fat man, killing him but saving the five people on the track", 120, 245);
  text("No - let the trolley kill five people on the track.", 120, 345);

  //fill boxes green
  fill("green");

  // box 1
  rect(box1X, box1Y, box1X2, box1Y2, 20);

  // box 2
  rect(box1X, box1Y + 100, box1X2, box1Y2, 20);

  // if box 1 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y, box1Y2 + box1Y)) {
    // go to the next screen while saving answer
    append(answers, "yes")
    pageNum = pageNum + 1;
  }

  // if box 2 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y + 100, box1Y2 + box1Y + 100)) {
    // go to the next screen while saving answer
    append(answers, "no")
    pageNum = pageNum + 1;
  }

  // reset these for the next time through draw()
  MouseClickedAtX = 0;
  MouseClickedAtY = 0;
}

// THIRD QUESTION
function drawPage3() {
  fill("grey");
  text("Source: https://en.wikipedia.org/wiki/Trolley_problem", 20, 15);
  text("Answer to questions:" + answers, 400, 15);
  fill("black");
  text("A brilliant transplant surgeon has five patients, each in need of a different organ, each of whom will ", 20, 60);
  text("die without that organ. Unfortunately, there are no organs available to perform any of these five ", 20, 75);
  text("transplant operations. A healthy young traveler, just passing through the city the doctor works in, ", 20, 90);
  text("comes in for a routine checkup. In the course of doing the checkup, the doctor discovers that his ", 20, 105);
  text("organs are compatible with all five of his dying patients. Suppose further that if the young man were ", 20, 120);
  text("to disappear, no one would suspect the doctor. Do you support the morality of the doctor to kill that ", 20, 135);
  text("tourist and provide his healthy organs to those five dying persons and save their lives?", 20, 150);

  text("Click button to select", 20, 180);

  text("Yes - kill the tourist and save five patients", 120, 245);
  text("No - let the five patients die", 120, 345);
	
  // make boxes green
  fill("green");

  // box 1
  rect(box1X, box1Y, box1X2, box1Y2, 20);

  // box 2
  rect(box1X, box1Y + 100, box1X2, box1Y2, 20);

  // if box 1 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y, box1Y2 + box1Y)) {
	  // go to the next screen while saving answer
    append(answers, "yes")
    pageNum = pageNum + 1;
  }

  // if box 2 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y + 100, box1Y2 + box1Y + 100)) {
    // go to the next screen while saving answer
    append(answers, "no")
    pageNum = pageNum + 1;
  }

  // reset these for the next time through draw()
  MouseClickedAtX = 0;
  MouseClickedAtY = 0;
}

// ANSWER PAGE
function drawPage4() {
  fill("grey");
  text("Source: https://en.wikipedia.org/wiki/Trolley_problem", 20, 15);
  text("Answer to questions:" + answers, 400, 15);
  fill("black");

  textSize(30)
  
  // Based on previous answers, you'll get different results
  if ((answers[0] == 1 && answers[1] == "no" && answers[2] == "no") || (answers[0] == 2 && answers[1] == "no" && answers[2] == "no")) {
    text("You might be a Kantian", 40, 100);
  } else if ((answers[0] == 1 && answers[1] == "yes" && answers[2] == "no") || (answers[0] == 2 && answers[1] == "yes" && answers[2] == "yes") || (answers[0] == 2 && answers[1] == "yes" && answers[2] == "no")) {
    text("You might be a Utilitarian", 40, 100);
  } else {
    text("Inconsistent Answers", 40, 100);
  }


  textSize(12)
  text("Click button to select", 20, 180);
  text("Play Again?", 120, 245);

	// Make boxes green
  fill("green");

  // box 1
  rect(box1X, box1Y, box1X2, box1Y2, 20);

  // if box 1 is selected
  if (isWithin(MouseClickedAtX, MouseClickedAtY, box1X, box1X2 + box1X, box1Y, box1Y2 + box1Y)) {
    // go to the next screen
    append(answers, "yes")
    pageNum = 1;
    var reset = new Array();
    answers = reset; // resets the answers for play again
  }
  
  // reset these for the next time through draw()
  MouseClickedAtX = 0;
  MouseClickedAtY = 0;
}


// FUNCTIONS BARROWED FROM CLASS (ANDY DAVIDSON)


// function which returns true or false to indicate whether a point
// is within a given rectangle
// the point to test is (pointX, pointY)
// the rectangle is defined by the upper left corner (rectX1, rectY1)
// and the lower right corner (rectX2, rectY2)
function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
  // if all 4 of these conditions are true, then it was inside,
  // otherwise it was outside
  if ((pointX > rectX1) && // to the right of the left edge
    (pointX < rectX2) && // to the left of the right edge
    (pointY > rectY1) && // below the top edge
    (pointY < rectY2)) { // above the bottom edge
    return true;
  } else {
    return false;
  }

}

// this function harnesses the built-in detector for any mouse click
// and simply saves the location of the mouse when it was clicked
// mouseClicked() is a predefined p5.js function -- we just fill in what
// happens when it is invoked by the system.
function mouseClicked() {
  MouseClickedAtX = mouseX;
  MouseClickedAtY = mouseY;
}