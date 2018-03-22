function setup() {
  // create the empty canvas
  createCanvas(1000, 1000);

}

//mikey variables
var micHeadXCoord = 150;
var micHeadYCoord = 150;
var micEar1XCoord = 75
var micEar1YCoord = 75
var micEar2XCoord = 225
var micEar2YCoord = 75

//mini variables
var minHeadXCoord = 850;
var minHeadYCoord = 150;
var minEar1XCoord = 775
var minEar1YCoord = 75
var minEar2XCoord = 925
var minEar2YCoord = 75
var minBowX = 830
var minBowY = 75

//minion variables
var minionXCoord = 100;
var minionYCoord = 700;
var mbandXCoord = 100;
var mbandYCoord = 775;
var meyeXCoord = 162;
var meyeYCoord = 790;

//spongebob variables
var sXCoord = 700;
var sYCoord = 700;
var spXCoord = 700;
var spYCoord = 850;
var sbXCoord = 700;
var sbYCoord = 875;

function draw() {
  //reset background each frame
  background('green');

  //draw Mickey
  strokeWeight(5);
  stroke('black');
  fill('black');
  ellipse(micHeadXCoord, micHeadYCoord, 150, 150);
  ellipse(micEar1XCoord, micEar1YCoord, 100, 100);
  ellipse(micEar2XCoord, micEar2YCoord, 100, 100);

  //draw mini
  ellipse(minHeadXCoord, minHeadYCoord, 150, 150);
  ellipse(minEar1XCoord, minEar1YCoord, 100, 100);
  ellipse(minEar2XCoord, minEar2YCoord, 100, 100);
  noStroke();
  fill('pink');
  rect(minBowX, minBowY, 40, 20);

  //draw minion
  fill('yellow');
  rect(minionXCoord, minionYCoord, 125, 250, 50, 50, 10, 10);
  //minion band
  fill('black');
  rect(mbandXCoord, mbandYCoord, 125, 30);
  //minion eye
  strokeWeight(10);
  stroke('grey');
  fill('white');
  ellipse(meyeXCoord, meyeYCoord, 75, 75);

  //draw spongbob 
  noStroke();
  fill('yellow');
  rect(sXCoord, sYCoord, 200, 250);
  fill('tan');
  rect(spXCoord, spYCoord, 200, 100);
  fill('black');
  rect(sbXCoord, sbYCoord, 200, 20);


  //move mickey
  micHeadXCoord = micHeadXCoord + 1; // move to the right
  micHeadYCoord = micHeadYCoord + 1; // move down
  micEar1XCoord = micEar1XCoord + 1;
  micEar1YCoord = micEar1YCoord + 1;
  micEar2XCoord = micEar2XCoord + 1;
  micEar2YCoord = micEar2YCoord + 1;

  if (micHeadXCoord > 350) {
    micHeadXCoord = 350;
  }
  if (micHeadYCoord > 350) {
    micHeadYCoord = 350;
  }
  if (micEar1XCoord > 275) {
    micEar1XCoord = 275;
  }
  if (micEar1YCoord > 275) {
    micEar1YCoord = 275;
  }
  if (micEar2XCoord > 425) {
    micEar2XCoord = 425;
  }
  if (micEar2YCoord > 275) {
    micEar2YCoord = 275;
  }

  //move mini
  minHeadXCoord = minHeadXCoord - 1; // move to the left
  minHeadYCoord = minHeadYCoord + 1; // move down
  minEar1XCoord = minEar1XCoord - 1;
  minEar1YCoord = minEar1YCoord + 1;
  minEar2XCoord = minEar2XCoord - 1;
  minEar2YCoord = minEar2YCoord + 1;
  minBowX = minBowX - 1;
  minBowY = minBowY + 1;

  if (minHeadXCoord < 650) {
    minHeadXCoord = 650;
  }
  if (minHeadYCoord > 350) {
    minHeadYCoord = 350;
  }
  if (minEar1XCoord < 575) {
    minEar1XCoord = 575;
  }
  if (minEar1YCoord > 275) {
    minEar1YCoord = 275;
  }
  if (minEar2XCoord < 725) {
    minEar2XCoord = 725;
  }
  if (minEar2YCoord > 275) {
    minEar2YCoord = 275;
  }
  if (minBowX < 630) {
    minBowX = 630;
  }
  if (minBowY > 275) {
    minBowY = 275;
  }

  //move minion
  minionXCoord = minionXCoord + 1; // move to the right
  minionYCoord = minionYCoord - 1; // move down
  mbandXCoord = mbandXCoord + 1;
  mbandYCoord = mbandYCoord - 1;
  meyeXCoord = meyeXCoord + 1;
  meyeYCoord = meyeYCoord - 1;

  if (minionXCoord > 300) {
    minionXCoord = 300;
  }
  if (minionYCoord < 450) {
    minionYCoord = 450;
  }
  if (mbandXCoord > 300) {
    mbandXCoord = 300;
  }
  if (mbandYCoord < 525) {
    mbandYCoord = 525;
  }
  if (meyeXCoord > 362) {
    meyeXCoord = 362;
  }
  if (meyeYCoord < 540) {
    meyeYCoord = 540;
  }

  //move spongebob
  sXCoord = sXCoord - 1; // move to the right
  sYCoord = sYCoord - 1; // move down
  spXCoord = spXCoord - 1;
  spYCoord = spYCoord - 1;
  sbXCoord = sbXCoord - 1;
  sbYCoord = sbYCoord - 1;

  if (sXCoord < 500) {
    sXCoord = 500;
  }
  if (sYCoord < 450) {
    sYCoord = 450;
  }
  if (spXCoord < 500) {
    spXCoord = 500;
  }
  if (spYCoord < 600) {
    spYCoord = 600;
  }
  if (sbXCoord < 500) {
    sbXCoord = 500;
  }
  if (sbYCoord < 625) {
    sbYCoord = 625;
  }

}