/* HCDE598A Tucker Standlee FInal
BlackJack*/



pageNum = 1;

const BACKGROUND_COLOR = "green";
const CARD_COLOR = 'white';
const SCORE_COLOR = 'white';
const BUTTON_COLOR = 'yellow';

const HIT = "HIT";
const STAY = "STAY";

const HIT_X = 71;
const HIT_Y = 360;

const STAY_X = 757;
const STAY_Y = 360;

const CANVAS_X = 900;
const CANVAS_Y = 700;
const PLAYER_CARD_X = 100;
const PLAYER_CARD_Y = 500;
const PLAYER_SCORE_X = 350;
const PLAYER_SCORE_Y = 475;

const DEALER_CARD_X = 100;
const DEALER_CARD_Y = 50;
const DEALER_SCORE_X = 350;
const DEALER_SCORE_Y = 250;

const CARD_WIDTH = 100;
const CARD_HEIGHT = 150;

const BUTTON_RADIUS = 100;
const BUTTON_X = 100;
const BUTTON_Y = 350;
const BUTTON_STROKE_WEIGHT = 5;
const BUTTON_TEXT_SIZE = 35;
const BUTTON_TEXT_STROKE = 0;

const SCORE_TEXT_SIZE = 35;

const WELCOME_TEXT_SIZE = (60);
const CARD_TEXT_SIZE = (CANVAS_Y / 25);


var mouseClickedAtX;
var mouseClickedAtY;
var playerCards = [0, 0, 0, 0, 0, 0];
var dealerCards = [0, 0, 0, 0, 0, 0];
var playerScore = 0;
var dealerScore = 0;
var playerCardCount = 0;
var dealerCardCount = 0;

const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];


function setup() {
  createCanvas(CANVAS_X, CANVAS_Y);
}



function draw() {

  if (pageNum == 1) {
    drawPage1();
  } else if (pageNum == 2) {
    drawPage2();
  } else if (pageNum == 3) {
    drawPage3();
  } else if (pageNum == 10) {
    drawPage10();
  }
}

function drawCardTable() {

}

function dealPlayerCard() {
  cardValue2 = random(CARD_VALUES);

  if (cardValue2 == 'J' || cardValue2 == 'Q' || cardValue2 == 'K') {
    playerScore += 10;
  } else if (cardValue2 == 'A') {
    playerScore += 11;
  } else {
    playerScore += cardValue2;
  }

  print(playerScore);

  playerCards[playerCardCount] = cardValue2;
  playerCardCount++;
}

function dealDealerCard() {
  cardValue3 = random(CARD_VALUES);

  if (cardValue3 == 'J' || cardValue3 == 'Q' || cardValue3 == 'K') {
    dealerScore += 10
  } else if (cardValue3 == 'A') {
    dealerScore += 11;
  } else {
    dealerScore += cardValue3;
  }

  dealerCards[dealerCardCount] = cardValue3;
  dealerCardCount++;


}

function newGame() {
  dealPlayerCard();
  dealPlayerCard();
  dealDealerCard();
  dealDealerCard();
  pageNum = 2;
}

//page1
function drawPage1() {
  background(BACKGROUND_COLOR);
  textSize(60);
  text("Welcome to Blackjack!", 100, 350);
  textSize(35);
  text("Click to Deal", 300, 450);

  if ((mouseClickedAtX > 0) &&
    (mouseClickedAtX < 700) &&
    (mouseClickedAtY > 0) &&
    (mouseClickedAtY < 700)) {
    newGame();
    pageNum = 2;
  }

  mouseClickedAtX = 0;
  mouseClickedAtY = 0;
}

//page2
function drawPage2() {
  background(BACKGROUND_COLOR);
  pageNum = 2;
  //Hit
  fill(BACKGROUND_COLOR);
  stroke(BUTTON_COLOR);
  strokeWeight(BUTTON_STROKE_WEIGHT);
  ellipse(BUTTON_X, BUTTON_Y, BUTTON_RADIUS);
  strokeWeight(BUTTON_TEXT_STROKE);
  textSize(BUTTON_TEXT_SIZE);
  fill(BUTTON_COLOR)
  text(HIT, HIT_X, HIT_Y)

  //Stay
  fill(BACKGROUND_COLOR);
  stroke(BUTTON_COLOR);
  strokeWeight(BUTTON_STROKE_WEIGHT);
  ellipse(BUTTON_X * 8, BUTTON_Y, BUTTON_RADIUS);
  strokeWeight(BUTTON_TEXT_STROKE);
  textSize(BUTTON_TEXT_SIZE);
  fill(BUTTON_COLOR)
  text(STAY, STAY_X, STAY_Y);


  for (i = 0; i < playerCardCount; i++) {

    drawPlayerCard1(i, PLAYER_CARD_X, PLAYER_CARD_Y, CARD_WIDTH, CARD_HEIGHT, playerCards[i]);
  }
  drawDealerCard1(DEALER_CARD_X, DEALER_CARD_Y, CARD_WIDTH, CARD_HEIGHT, dealerCards[0]);
  drawPlayerScore(SCORE_TEXT_SIZE, SCORE_COLOR, playerScore, PLAYER_SCORE_X, PLAYER_SCORE_Y);
  drawDealerScore(SCORE_TEXT_SIZE, SCORE_COLOR, dealerScore, DEALER_SCORE_X, DEALER_SCORE_Y);





  if ((mouseClickedAtX > 50) &&
    (mouseClickedAtX < 150) &&
    (mouseClickedAtY > 300) &&
    (mouseClickedAtY < 400)) {
    dealPlayerCard();
  }

  mouseClickedAtX = 0;
  mouseClickedAtY = 0;

  /*if (playerScore >= 22) {
  }drawPage3();*/

}


function drawPage3() {
  textSize(BUTTON_TEXT_SIZE);
  fill(BUTTON_COLOR);
  text('BUST. YOU LOSE.', CANVAS_X / 3, CANVAS_Y / 2);

}



function drawPlayerCard1(cardNumber, x, y, width, height, cardValue) {
  fill(CARD_COLOR);
  rect(x + 150 * cardNumber, y, width, height);
  textSize(CARD_TEXT_SIZE);
  fill('red');
  text(cardValue, x * 1.1 + 150 * cardNumber, y * 1.06);
  text(cardValue, x * 1.6 + 150 * cardNumber, y * 1.28);
}

function drawPlayerCard2(x, y, width, height, cardValue) {
  fill(CARD_COLOR);
  rect(x * 2.1, y, width, height);
  textSize(CARD_TEXT_SIZE);
  fill('black');
  text(cardValue, x * 2.2, y * 1.06);
  text(cardValue, x * 2.7, y * 1.28);
}

function drawDealerCard1(x, y, width, height, cardValue) {
  fill(CARD_COLOR);
  rect(x, y, width, height);
  textSize(CARD_TEXT_SIZE);
  fill('red');
  rect(x * 2.1, y, width, height);
  text(cardValue, x * 1.1, y * 1.6);
  text(cardValue, x * 1.6, y * 3.8);
}

function drawPlayerScore(scoreSize, scoreColor, scoreValue, x, y) {
  textSize(scoreSize)
  fill(scoreColor);
  text(scoreValue, x, y);
}

function drawDealerScore(scoreSize, scoreColor, scoreValue, x, y) {
  textSize(scoreSize)
  fill(scoreColor);
  text(scoreValue, x, y);
}

function mouseClicked() {
  mouseClickedAtX = mouseX;
  mouseClickedAtY = mouseY;
}