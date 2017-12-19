/*
Mike Harwell - Obstacle Game

Instructions:
Click into the canvas, and use the arrow keys to move the ball to the safe zone without being hit.
*/

//Player Coords
var playerX = 200;
var playerY = 975;

//Player Size
var playerWidth = 50;
var playerHeight = 50;

//Enemy Size
var enemyWidth = 50;
var enemyHeight = 50;

//Safe Zone
var safeZoneWidth = 100
var safeZoneHeight = 75

//Safe Zone Coords
var safeZoneX = 150;
var safeZoneY = 0;


//Number of Enemies
var numEnemies = 6;

//Enemy Coords
var enemyCoords1 = // X and Y values of enemy obstacles. Formatted like [x1, y1, x2, y2, etc..]. These run forwards and backwards
  [25, 900, 25, 600, 25, 300];
var enemyCoords2 = // X and Y values of enemy obstacles. Formatted like [x1, y1, x2, y2, etc..]. These run backwards and forwards
  [375, 750, 375, 450, 375, 150];

//Object speeds
var playerSpeed = 4;
var enemySpeed = 4;

function setup() {
  createCanvas(400, 1000);

}

function draw() {
	noStroke();
  background('#252C41');
  
  //Safe Zone
  drawSafeZone()

  //Enemy Obstacles
  drawEnemies(enemyCoords1, enemyCoords2);

  //Player Character
  drawPlayer();

  //Detects enemy collisions
  detectCollision(enemyCoords1, enemyCoords2);
  
  //Enemy obstacales move across the board
  enemyMovement(enemyCoords1, enemyCoords2);

  //Character controls
  keyPressed();

  //Lose Conditions
  if (playerX >= 400) {
    loseGame();
  } else if (playerX <= 0) {
    loseGame();
  } else if (playerY >= 1000) {
    loseGame();
  } else if (playerY <= 0) {
    loseGame();
  }

  //Win Conditions
  if (isWithin(playerX, playerY, 150, 250, 0, 75)) {
    winGame();
  }

}

//Draws the safe zone the player needs to reach in order to win the game
function drawSafeZone() {
  fill('#515667');
  rect(safeZoneX, safeZoneY, safeZoneWidth, safeZoneHeight);
  fill('#B1B3BB');
  textSize(24);
  text("Safe", 175, 45);
}

//Draws the enemy obstacles
function drawEnemies(array1, array2) {
  fill('#F1404B');

  for (i = 0; i < array1.length - 1; i += 2) {

    ellipse(array1[i], array1[i + 1], enemyWidth, enemyHeight);

  }
  
  for (i = 0; i < array2.length - 1; i += 2) {

    ellipse(array2[i], array2[i + 1], enemyWidth, enemyHeight);

  }

}

//Draws the player character
function drawPlayer() {
  fill('#EBEDF3');
  ellipse(playerX, playerY, playerWidth, playerHeight);
}

//Detects whether the obstacles have collided with the player's x/y cooradinates
function detectCollision(array1, array2) {

  for (i = 0; i < array1.length - 1; i += 2) {

    if (isWithin(playerX, playerY,
        array1[i] - 25, array1[i] + 25,
        array1[i + 1] - 25, array1[i + 1] + 25)) {

      loseGame();

    }
  }
  
  for (i = 0; i < array2.length - 1; i += 2) {

    if (isWithin(playerX, playerY,
        array2[i] - 25, array2[i] + 25,
        array2[i + 1] - 25, array2[i + 1] + 25)) {

      loseGame();

    }
  }
}

function enemyMovement(array1, array2) {

  //Positive Obstacle Movement
  for (i = 0; i < array1.length - 1; i += 2) {
    
    array1[i] = array1[i] + enemySpeed;
    
    if (array1[i] > 375) {
      enemySpeed = enemySpeed * -1;
    } else if (array1[i] < 25) {
      enemySpeed = enemySpeed * -1;
    }
    
    array1[i] = array1[i] + enemySpeed;
  }
  
  //Negative Obstacle Movement
  for (i = 0; i < array2.length - 1; i += 2) {
    
    array2[i] = array2[i] - enemySpeed;
    
    if (array2[i] > 375) {
      enemySpeed = enemySpeed * -1;
    } else if (array2[i] < 25) {
      enemySpeed = enemySpeed * -1;
    }
    
    array2[i] = array2[i] - enemySpeed;
  }
  
}

//Lose Game messaging
function loseGame() {
  noLoop();
  fill('white');
  textSize(32);
  text("You Lose", width / 3, height / 2);
}

//Win Game messaging
function winGame() {
  noLoop();
  fill('white');
  textSize(32);
  text("You Win", width / 3, height / 2);
}

//detects which arrow keys are pressed to determine which direction the player moves in
function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
    playerX = playerX + playerSpeed;
  } else if (keyCode === LEFT_ARROW) {
    playerX = playerX - playerSpeed;
  } else if (keyCode === UP_ARROW) {
    playerY = playerY - playerSpeed;
  } else if (keyCode === DOWN_ARROW) {
    playerY = playerY + playerSpeed;
  }
}

//Function used to check to see if shapes are overlapping
function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
  if ((pointX > rectX1) &&
    (pointX < rectX2) &&
    (pointY > rectY1) &&
    (pointY < rectY2)) {
    return true;
  } else {
    return false;
  }

}