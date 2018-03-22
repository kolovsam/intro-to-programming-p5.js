/* David Molinero
 * Final Project: Total Blackout
 * HCDE 532
 */


// GAMES VARIABLES

// Context Elements
var canvas;
var ctx;

// Balls for collision
var balls = [];
var ballSpeed = 3.3;

// The player (a lightbulb)
var playerX;
var playerY;
var playerSpeed = 4;
var playerSize = 30;
var player = new player();

// Colors
var darkBlue = 'rgba(1, 10, 24, 1)';
var lightBlue = 'rgba(146, 190, 255, 1)';
var bgBlue = 'rgba(22, 54, 146, 1)';
var blub = 'rgba(63, 63, 49 ,1)';
var bulbBase = 'rgba(155, 154, 136, 1)';
var light = 'rgba(209, 218, 91, 1)';
var ballHighlight = 'rgba(255, 255, 255, 0.4)';
var bulbGlow = 'rgba(255, 255, 255, .5)';
var bulbHighlight = 'rgba(255, 255, 255, 0.05)';
var transparent = 'transparent';
var backgroundColor = bgBlue;

// Time
var time = 0;
var displayTime = '00:00';
var finalTime;
var seconds = 0;
var milliseconds = 0;

// Score (time survived)
var scores = [];
var highScore = 0;

// Interaction
var started = false;
var collision = false;
var blackout = false;


function setup() {

  // Set up the basic settings
  canvas = createCanvas(600, 400);
  ctx = canvas.drawingContext;
  balls = initializeBalls();
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  strokeWeight(0);

  // Start the player in the middle of the screen
  playerX = width / 2;
  playerY = height - playerSize;

}


/* All the element logic has been abstrated out in to class methods or global functions
 * Howerver, all the basic game logic lives inside this if statement in draw
 */
function draw() {

  background(backgroundColor);

  // If the game has not been started
  if (!started) {
    
    player.move();
    player.render();
    showStartScreen();

  // If the player has died
  } else if (blackout) {
    showBlackoutScreen();
    
  // Gameplay progresses
  } else {
    showTimer();
    moveBalls();
    checkBallCollisions();
    player.move();
    player.render();
  }

}

/* Create the balls with pre-defined positions so
 * they won't start on top of each other
 */
function initializeBalls() {
  newBalls = [];
  newBalls.push(new Ball(width/10, height/7, width/15, 1));
  newBalls.push(new Ball(width/1.11, height/7, width/15, 2));
  newBalls.push(new Ball(width/10, height/2, width/30, 3));
  newBalls.push(new Ball(width/1.1, height/2, width/30, 4));
  newBalls.push(new Ball(width/2, height/6, width/50, 5));
  newBalls.push(new Ball(width/2, height/3.5, width/50, 6));
  newBalls.push(new Ball(width/2, height/2.5, width/50, 6));
  newBalls.push(new Ball(width/2, height/1.9, width/50, 7));
  return newBalls;
}


/* This is the basic
 */
function Ball(x, y, radius, id) {

  this.id = id;
  this.position = createVector(x, y);
  this.velocity = p5.Vector.random2D();
  this.velocity = this.velocity.mult(ballSpeed);
  this.radius = radius;
  this.mass = this.radius * 0.1;

  /* Moves the ball by adding the calculated
   * velocity to the current position
   */
  this.move = function() {
    this.position.add(this.velocity);
  }

  /* Checks if balls are coliding with the edge of the screen
   * and calculates their bounce off of it
   */
  this.checkBoundaryCollision = function() {
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    } else if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y < this.radius) {
      this.position.y = radius;
      this.velocity.y *= -1;
    }
  }

  /* Checks to see if the ball is colliding with another ball
   * Trig calculations based on:
   * https://processing.org/examples/circlecollision.html
   */
  this.checkCollision = function(other) {

    // Get distances between the balls
    var distanceVect = p5.Vector.sub(other.position, this.position);

    // Calculate magnitude of the vector separating the balls
    var distanceVectMag = distanceVect.mag();

    // Minimum distance before they are touching
    var minDistance = radius + other.radius;

    if (distanceVectMag < minDistance) {
      var distanceCorrection = (minDistance - distanceVectMag) / 2;
      d = distanceVect.copy();
      var correctionVector = d.normalize().mult(distanceCorrection);
      other.position.add(correctionVector);
      this.position.sub(correctionVector);

      // Get angle of distanceVect and it's sine and cosine
      var theta = distanceVect.heading();
      var sine = sin(theta);
      var cosine = cos(theta);

      // bTemp will hold rotated ball positions
      var bTemp = [createVector(), createVector()];
      bTemp[1].x = cosine * distanceVect.x + sine * distanceVect.y;
      bTemp[1].y = cosine * distanceVect.y - sine * distanceVect.x;

      // Rotate Temporary velocities
      var vTemp = [createVector(), createVector()];
      vTemp[0].x = cosine * this.velocity.x + sine * this.velocity.y;
      vTemp[0].y = cosine * this.velocity.y - sine * this.velocity.x;
      vTemp[1].x = cosine * other.velocity.x + sine * other.velocity.y;
      vTemp[1].y = cosine * other.velocity.y - sine * other.velocity.x;

      // Calculate final velocity now that velocities are rotated
      var vFinal = [createVector(), createVector()];

      // Final rotated velocity for b[0]
      vFinal[0].x = ((this.mass - other.mass) * vTemp[0].x + 2 * other.mass * vTemp[1].x) / (this.mass + other.mass);
      vFinal[0].y = vTemp[0].y;

      // Final rotated velocity for b[0]
      vFinal[1].x = ((other.mass - this.mass) * vTemp[1].x + 2 * this.mass * vTemp[0].x) / (this.mass + other.mass);
      vFinal[1].y = vTemp[1].y;

      // Avoid clumping
      bTemp[0].x += vFinal[0].x;
      bTemp[1].x += vFinal[1].x;

      // Rotate ball positions and velocities back by reversing the signs
      var bFinal = [createVector(), new createVector()];
      bFinal[0].x = cosine * bTemp[0].x - sine * bTemp[0].y;
      bFinal[0].y = cosine * bTemp[0].y + sine * bTemp[0].x;
      bFinal[1].x = cosine * bTemp[1].x - sine * bTemp[1].y;
      bFinal[1].y = cosine * bTemp[1].y + sine * bTemp[1].x;

      // Update balls to screen position
      other.position.x = this.position.x + bFinal[1].x;
      other.position.y = this.position.y + bFinal[1].y;

      this.position.add(bFinal[0]);

      // Update velocities
      this.velocity.x = cosine * vFinal[0].x - sine * vFinal[0].y;
      this.velocity.y = cosine * vFinal[0].y + sine * vFinal[0].x;
      other.velocity.x = cosine * vFinal[1].x - sine * vFinal[1].y;
      other.velocity.y = cosine * vFinal[1].y + sine * vFinal[1].x;
    }
  }

  /* Checks for a collision between the player and the ball
   * Expects an instance of the player to be passed in
   */
  this.checkPlayerCollision = function(player) {
    if (dist(this.position.x, this.position.y, playerX, playerY) <= (this.radius + player.radius)) {
      return true;
    } else {
      return false;
    }
  }

  /* Renders the balls on the canvas.
   * Also gives each one a glitch effect to make the balls seem more alive.
   */
  this.render = function() {

    // Ball itself
    ctx.fillStyle = lightBlue;
    ellipse(this.position.x, this.position.y, radius * 2, radius * 2);

    // Glith effect
    var offsetX = random(-5, 5);
    var offsetY = random(-5, 5);
    ctx.fillStyle = ballHighlight;
    ellipse(this.position.x + offsetX, this.position.y + offsetY, radius * 2, radius * 2);
  }
}


/* Object that can be used to create the player (light bulb)
 */
function player() {

  this.radius = playerSize / 2;

  /* This render the player and surrounding light
   * on the screen
   */
  this.render = function() {
    // Use a gradient viewport to create the illusion of light
    var gradient = ctx.createRadialGradient(playerX, playerY, 0.000, playerX, playerY, height * 0.94);
    gradient.addColorStop(1.000, darkBlue);
    gradient.addColorStop(0.000, transparent);
    ctx.fillStyle = gradient;

    // Draw a rectangle the size of the canvas to hold the gradient
    ctx.fillRect(0, 0, width, height);
    
    // The lightbulb
    ctx.fillStyle = light;
    ellipse(playerX, playerY, this.radius * 2, this.radius * 2);
    rect(playerX, height - (this.radius), this.radius, this.radius);
    ctx.fillStyle = bulbGlow;
    ellipse(playerX, playerY, this.radius, this.radius);
    ctx.fillStyle = bulbHighlight;
    ellipse(playerX, height - (this.radius * 2), this.radius * 20, this.radius * 20);
    ctx.fillStyle = bulbBase;
    rect(playerX, height, this.radius * 3, this.radius * 1.5, this.radius / 4);
  }

  /* This adjusts the players position based on the keys
   * that are currently pressed down
   */
  this.move = function() {
    if (!collision && keyIsDown(LEFT_ARROW) && playerX > this.radius) {
      playerX = playerX - playerSpeed;
    } else if (!collision && keyIsDown(RIGHT_ARROW) && playerX < (width - this.radius)) {
      playerX = playerX + playerSpeed;
    }
  }.bind(this);

}

/* Renders the time on the screen
 */
function showTimer() {
  fill(darkBlue);
  textSize(width / 4);
  text(displayTime, width / 2, height / 2);
}

/* Moves all the balls
 */
function moveBalls() {
  balls.forEach(function(ball) {
    if (!collision) { ball.move(); }
    ball.render();
    ball.checkBoundaryCollision();
  });
}


/* It's important that we don't run the same comparison twice,
 * so the checked combinations are stored as a product of their id's
 * and skipped if they come up again
 */
function checkBallCollisions() {
  var checkedCombinations = [];
  for (var k = 0; k < balls.length; k++) {

    // Check ball to ball collisions
    for (var j = 0; j < balls.length; j++) {
      if (k != j && checkedCombinations.indexOf(balls[j] * balls[k]) < 0) {
        balls[k].checkCollision(balls[j]);
        checkedCombinations.push(balls[k].id * balls[j].id);
      }
    }

    // Check ball to player combinations
    if (balls[k].checkPlayerCollision(player)) {
      end(); // End the game if a collision is detected
    }
  }
}


/* Shows the start screen
 */
function showStartScreen() {
  fill('white');
  textSize(width / 14);
  text('TOTAL BLACKOUT', width / 2, height / 4);
  textSize(width / 20);
  fill(lightBlue);
  text("Don't let the light go out!", width / 2, height / 2.7);
  textSize(width / 30);
  strokeWeight(2);
  stroke(lightBlue);
  fill('rgba(0,0,0,0)');

  // Start button
  // Mouse pressed function will check if this is clicked
  var startButton = rect(width / 2, height / 1.8, width / 5, height / 8);

  strokeWeight(0);
  fill(lightBlue);
  text('START', width / 2, height / 1.8);
  text("Use left and right arrows to move.", width / 2, height / 1.4);
}

/* Shows the blackout screen
 */
function showBlackoutScreen() {
  fill(lightBlue);
  textSize(width / 14);
  text('TOTAL BLACKOUT', width / 2, height / 4);
  textSize(width / 20);
  fill('white');
  text('You survived ' + finalTime + ' seconds.', width / 2, height / 2);
  fill(lightBlue);
  text('High score: ' + highScore, width / 2, height / 1.7);
  fill('white');
  textSize(width / 30);
  text('Press space to try again', width / 2, height / 1.2);
}

/* This startes the game by setting the started variable to true
 * and starting the timer
 */
function start() {
  setInterval(function() {
    time = time + 100
    var minutes = Math.floor(time / 60000);
    seconds = ((time % 60000) / 1000).toFixed(0);
    displayTime = (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }, 100);
  started = true;
}

/* This ends the game by showing a brief flash
 * calculating the final score and high score
 * and showing the balckout screen
 */
function end() {

  // Set collision to true and change the background to white
  backgroundColor = 'white';
  collision = true;

  // Add this final score to the array of scores
  finalTime = (time % 60000) / 1000;

  if (scores.indexOf(finalTime) === -1) {
    scores.push(finalTime);
  }

  // Calculate the highest score saved so far
  highScore = Math.max(...scores);
  
  // Show the blackout screen after 200ms of a white background to make a flash effect
  setTimeout(function() {
    backgroundColor = darkBlue;
    blackout = true;
  }, 200);
}


/* This resets all the game variables to
 * give the player a fresh start
 */
function reset() {
  playerX = width / 2;
  backgroundColor = bgBlue;
  time = 0;
  blackout = false;
  collision = false;
  balls = initializeBalls();
}


/* Listens for spacebar to be pressed
 * blackout also has to be true to prevent players from
 * resting while the gami is in progress
 */
function keyPressed() {
  if (blackout && keyCode === 32) {
    reset();
  }
}


/* This just listens for the start button to be clicked
 */
function mousePressed() {
  if (
    (mouseX > (width / 2) - ((width / 5) / 2)) &&
    (mouseX < (width / 2) + ((width / 5) / 2)) &&
    (mouseY > (height / 1.8) - ((height / 8) / 2)) &&
    (mouseY < (height / 1.8) + ((height / 8) / 2))
  ) {
    start();
  }
}