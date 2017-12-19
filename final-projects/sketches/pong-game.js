/* Pong recreation
aalejandria, 12/2017

a variation of the classic arcade game Pong 

*/

// program colors
const BACKGROUND_COLOR = "#000";
const PADDLE_COLOR = "fff";
const BALL_COLOR = 10;

// the overall canvas
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

// starting positions
const LEFT_X = 20;
const RIGHT_X = 760;

// movement variables
var xOrigin = 10;
var yOrigin = CANVAS_HEIGHT / 3;
var xPositionBall = CANVAS_WIDTH / 2;
var yPositionBall = CANVAS_HEIGHT / 2;
var yLeft = CANVAS_HEIGHT / 3;
var paddleSpeed = 6;
var direction = 1;
var yDirection = 1;
var paddleDirection = 1;
const SPEED = 5;

// game elements
const PADDLE_WIDTH = 15;
const PADDLE_HEIGHT = 150;
const PADDLE_HEIGHT_LEFT = 300;
const RADIUS = 25;

// scoring
var compScore = 0;
var playerScore = 0;
var totalScore = 0;



function setup() {
  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}


function draw() {
  //reset the background
  background(BACKGROUND_COLOR);
  textSize(50);
  fill(255);
  text("Score " + compScore + " – " + playerScore, 250, 75);

  // draw the "net" over background color
  stroke(255);
  strokeWeight(4);
  line(400, 100, 400, 600);


  // draw game components
  drawPaddles();
  pongBall();


  // configure gameplay
  startGame();
  bounceBack();
  reverseLeftPaddle();
  reverseRightPaddle();
  restart();
  moveLeft();
}

function keyPressed() {
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
    startGame();
  }
}

function startGame() {
  // this function moves the player's paddle up and down
  if (keyCode == UP_ARROW) {
    yOrigin = yOrigin - paddleSpeed;
    moveBall();
    // print("move up");

  } else if (keyCode == DOWN_ARROW) {
    yOrigin = yOrigin + paddleSpeed;
    moveBall();
    // print("move down");
    //
  }

}

// THIS IS ALL ABOUT PADDLES ------------------------>

function drawPaddles() {
  // draws the left paddle
  rect(LEFT_X, yLeft, PADDLE_WIDTH, PADDLE_HEIGHT_LEFT);
  // draws right paddle
  rect(RIGHT_X, yOrigin, PADDLE_WIDTH, PADDLE_HEIGHT);
}

function moveLeft() {
  // moves left paddle
  yLeft += paddleSpeed * paddleDirection;
}

function reverseLeftPaddle() {
  // sets edge limitations to the left paddle
  if (yLeft + PADDLE_HEIGHT_LEFT >= CANVAS_HEIGHT) {
    paddleDirection = -paddleDirection;
  } else if (yLeft <= 0) {
    paddleDirection = paddleDirection * paddleDirection;
  }

}

function reverseRightPaddle() {
  // sets edge limitations to the right paddle
  if (yOrigin + PADDLE_HEIGHT >= CANVAS_HEIGHT) {
    yOrigin = CANVAS_HEIGHT - PADDLE_HEIGHT;
  } else if (yOrigin <= 0) {
    yOrigin = 0;
  }
}

// THIS IS ALL ABOUT THE BALL ------------------------>

function pongBall() {
  // draws the ball
  strokeWeight(0);
  ellipse(xPositionBall, yPositionBall, RADIUS);
}


function moveBall() {
  // this function moves the ball across the canvas
  xPositionBall += SPEED * direction;
  yPositionBall += yDirection;
}


function bounceBack() {
  // reverse x-direction on paddle hit
  if ((xPositionBall > RIGHT_X - PADDLE_WIDTH) && (yOrigin <= yPositionBall) && (yPositionBall <= (yOrigin + PADDLE_HEIGHT))) {
    direction = -direction;
    // yDirection = -yDirection;
    yOrigin += direction;
    // print("right hit");
  } else if ((xPositionBall == LEFT_X + PADDLE_WIDTH) && (yLeft <= yPositionBall) && (yPositionBall <= (yLeft + PADDLE_HEIGHT_LEFT))) {
    direction = direction * direction;
    yPositionBall += yDirection;
    // print("left hit");
  }
  else if ((yPositionBall < 0) || (yPositionBall > CANVAS_HEIGHT - RADIUS)) {
   yDirection = -yDirection;
  }
}

function wallBounce ()  {
	if ((yPositionBall < 0 + RADIUS) || (yPositionBall > CANVAS_HEIGHT - RADIUS)) {
   yDirection = yDirection * int(random(-1,1));
  }
}

// THIS IS ALL ABOUT SCORING ------------------------>

function restart() {

  if (xPositionBall < 0) {
    keyCode = 0;
    playerScore++;
    totalScore++;
    xPositionBall = CANVAS_WIDTH / 2;
    yPositionBall = CANVAS_HEIGHT / 2;
    print("Replay");
    print("Computer = " + compScore + " YOU = " + playerScore);
    print("TOTAL SCORE = " + totalScore);
  } 
  
  else if (xPositionBall > CANVAS_WIDTH) {
    keyCode = 0;
    compScore++;
    totalScore++;
    xPositionBall = CANVAS_WIDTH / 2;
    yPositionBall = CANVAS_HEIGHT / 2;
    print("Replay");
    print("Computer = " + compScore + " YOU = " + playerScore);
    print("TOTAL SCORE = " + totalScore + " out of 3");
  } 
  
  else if (totalScore == 5) {
    keyCode = 0;
    let moveBall = false;
    if (compScore > playerScore) {
      textSize(50);
      fill(255);
      text("WINNER", 100, 200);
      print("Game over");
    }
    else if (playerScore > compScore) {
      textSize(50);
      fill(255);
      text("WINNER", 500, 300);
      print("Game over");
    }
  }

}