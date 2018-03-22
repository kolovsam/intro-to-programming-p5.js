// David Molinero
// Title: Bouncing Balls
// Assignment Five

// Initialize an array of ball objects globally
var balls = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  // Call the function to create an array of ball objects
  balls = generateBalls();
}

function draw() {
  // Redraw the background
	background('black');
  
  // Loop over the array of balls
  balls.forEach( function(ball) {
    ball.bounce();
    ball.move();
    ball.render();
  });
}

/* Generates an array of integers to use as sizes
 * @return: array of 10 integers between 10 and 40
 */
function generateBalls() {
  
  // Add a new ball to the array of balls
  for (i = 0; i < 10; i++) {
    balls.push(new Ball());
  }
  
  return balls;
}


/* Generates a ball with random size, starting position, and velocity
 */
function Ball() {
	
  // The size of the ball
  this.size = random(10,70);
  
  // The initial x position
  this.x = random(0 + (this.size * 2), width - (this.size * 2));
  
  // The y position
  this.y = random(0 + (this.size * 2), height - (this.size * 2));
  
  // The x velocity
  this.vX = random(1,8);
  
  // The y velocity
  this.vY = random(1,8);
  
  // The transparency of the ball
  this.alpha = random();
  
  // The distance to the edge of the ball
  this.edge = this.size / 2;

  // Render the ball
  this.render = function() {
    fill('rbga(120,57,240,' + this.alpha + ')');
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  // This will reverse teh ball's movement if it encounters an edge
  this.bounce = function() {
    if (this.x - this.edge < 0 || this.x + this.edge > width) {
      this.vX *= -1;
    }
    if (this.y - this.edge < 0 || this.y + this.edge > height) {
      this.vY *= -1;
    }
  }
  
  // Move the ball by adding the velocity to the position
  this.move = function() {
    this.x = this.x + this.vX;
    this.y = this.y + this.vY;
  }

}


