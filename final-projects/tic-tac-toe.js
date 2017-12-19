/*
Final project: tic tac toe
Course: HCDE 598, Introduction to Javascript
K Brookshier
December 2017
*/

// Constants
const SIZE = 20;
const SECTION = 10 * SIZE;
const LINE_LENGTH = 30 * SIZE;
const LINE_WIDTH = SIZE;

// Variables
var turn = 0;
var playerScore = 0;
var compScore = 0;
var catsGame = 0;
var spacesTaken = 0;
var didWin = false;
var didDraw = false;
var scores = '';

// Arrays
var row1 = [0, 0, 0];
var row2 = [0, 0, 0];
var row3 = [0, 0, 0];
var rows = [row1, row2, row3];

// Draw the canvas
function setup() {
  createCanvas(50 * SIZE, 50 * SIZE);
}

// Play the game
function draw() {

  // Draw the tic tac toe baord and scores
  drawBoard();

  // Draw the current Xs and Os
  drawXO();

  // If no one is currently winning
  // check if the newest move creates a win
  if (!didWin && !didDraw) {
    // If someone wins, set win state to true
    didWin = win();
    // If the game is a draw, set draw state to true
    didDraw = isCatsGame();
  }

  // If it's the computer's turn, let the computer play
  if (turn != 0 && spacesTaken < 9 && !didWin) {
    print('computers turn');
    compPlays();
    print(rows);
  }


  // If in a win state, tell the user
  if (didWin) {
    fill('black');
    textSize(35);
    text('The game ended! Press any key to restart.', width / 2, height - 125);
  }

  // If the game is a draw, tell the user
  else if (didDraw) {
    fill('black');
    textSize(35);
    text('Draw! Press any key to restart.', width / 2, height - 125);
  }
}

// Draw board
function drawBoard() {
  // Pick background color
  background('hotpink');

  // Draw tic tac toe board lines
  stroke('white');
  strokeWeight(10);
  line(SECTION * 2, SECTION, SECTION * 2, SECTION * 4);
  line(SECTION * 3, SECTION, SECTION * 3, SECTION * 4);
  line(SECTION, SECTION * 2, SECTION * 4, SECTION * 2);
  line(SECTION, SECTION * 3, SECTION * 4, SECTION * 3);

  // Draw text
  noStroke();
  fill('black');
  textAlign(CENTER);

  // Game title
  textFont('Courier', 88);
  text('Tic Tac Toe', width / 2, 100);

  // Draw scores
  textFont('Courier', 35);
  scores = 'Player: ' + playerScore + '     Draw: ' + catsGame + '     Computer: ' + compScore;
  text(scores, width / 2, height - 50);
}

// Detect section where mouse it
function detectSquare() {
  // Detect row and column
  var x = (mouseX - mouseX % SECTION) / SECTION;
  var y = (mouseY - mouseY % SECTION) / SECTION;

  // Return row and column
  return [x, y];
}

// Computer plays
function compPlays() {
  // Set it to computer's turn
  var playing = true;

  // While it is the computer's turn
  // (allows computer to retry if space was taken)
  while (playing) {
    // Randomly pick a square
    var compX = int(random(0, 3));
    var compY = int(random(0, 3));

    // If that square is empty, increment the appropriate square in array
    if (rows[compX][compY] == 0) {
      rows[compX][compY] = -1;
      spacesTaken++;

      // Then exit the while loop
      playing = false;
    }
  }

  // Once comp has played, change to player's turn
  turn = 0;
}

// Human plays by pressing the mouse
function mousePressed() {
  // Find out which square the cursor is in
  x = detectSquare()[0];
  y = detectSquare()[1];

  // If the square has not been taken yet
  // increment the appropriate square in the array
  if (!didWin) {
    if (rows[x - 1][y - 1] == 0) {
      if (x == 1) {
        row1[y - 1] = 1;
      } else if (x == 2) {
        row2[y - 1] = 1;
      } else if (x == 3) {
        row3[y - 1] = 1;
      }

      // Then increment total spaces taken
      spacesTaken++;

      // Once human has played, change to computer's turn
      turn = 1;
    }
  }
}

// User input resets board
function keyPressed() {
  boardReset();
  didWin = false;
  didDraw = false;
}


// Draw X's and O's on board
function drawXO() {
  // Loop through the array to see which XO's to plot
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < rows[i].length; j++) {
      textAlign(CENTER, CENTER);
      textFont('Courier', 110);
      textStyle(BOLD);
      noStroke();
      // If the square is taken by the player (n = 1), then draw an X
      if (rows[i][j] > 0) {
        fill('gold');
        text(' X', (i + 1) * SECTION, (j + 1) * SECTION, SECTION, SECTION);
      }

      // If the square is taken by the computer (n = -1), then draw an O
      else if (rows[i][j] < 0) {
        fill('crimson');
        text(' O', (i + 1) * SECTION, (j + 1) * SECTION, SECTION, SECTION);
      }
    }
  }
}

// Win case
function win() {
  // Check diagonals 
  if (rows[0][0] + rows[1][1] + rows[2][2] > 2) {
    playerScore++;
    return true;
  } else if (rows[0][0] + rows[1][1] + rows[2][2] < -2) {
    compScore++;
    return true;
  } else if (rows[0][2] + rows[1][1] + rows[2][0] > 2) {
    playerScore++;
    return true;
  } else if (rows[0][2] + rows[1][1] + rows[2][0] < -2) {
    compScore++;
    return true;
  }

  // For loop with columns
  for (i = 0; i < rows.length; i++) {
    sum = 0;
    for (j = 0; j < rows[i].length; j++) {
      sum += rows[i][j];
      if (sum > 2) {
        playerScore++;
        return true;
      } else if (sum < -2) {
        compScore++;
        return true;
      }
    }
  }

  // Check rows
  if (rows[0][0] + rows[1][0] + rows[2][0] > 2) {
    playerScore++;
    return true;
  } else if (rows[0][0] + rows[1][0] + rows[2][0] < -2) {
    compScore++;
    return true;
  } else if (rows[0][1] + rows[1][1] + rows[2][1] > 2) {
    playerScore++;
    return true;
  } else if (rows[0][1] + rows[1][1] + rows[2][1] < -2) {
    compScore++;
    return true;
  } else if (rows[0][2] + rows[1][2] + rows[2][2] > 2) {
    playerScore++;
    return true;
  } else if (rows[0][2] + rows[1][2] + rows[2][2] < -2) {
    compScore++;
    return true;
  }

  return false;
}

function isCatsGame() {
  if ((!didWin) && (spacesTaken > 8)) {
    catsGame++;
    return true;
  }

  return false;
}

// Empty the board for a new game
function boardReset() {
  spacesTaken = 0;
  row1 = [0, 0, 0];
  row2 = [0, 0, 0];
  row3 = [0, 0, 0];
  rows = [row1, row2, row3];
  print('-');
  print('new game');
  print(rows);
}