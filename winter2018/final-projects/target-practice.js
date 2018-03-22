//these variables are the initial location of the cannon and cannon ball before being changed by the Up and Down arrows
// the x location of the cannon
const cannonX = 20;
// the y location of the cannon
var cannonY = 200;
//this variable holds how fast the cannon ball travels horizontally
var ballSpeed = 0
//variable that holds where the target will appear. changes randomly
var targetX = 40

//variables that hold the cloud movement
//controls the x location of the cloud
var cloudMoveX = 100
//controls the y location of the cloud
var cloudMoveY = 100

//controls the copy that is in the instructions
var words = 'Up and Down Arrows move the cannon up and down. Left and Right arrows control the cannon power.   Click the mouse to launch a cannon ball at the target. Hit the "r" button to reset the target.                      Good Luck!'

//the array that holds the balls objects
var balls = []

//the function that draws the entire cannon
function cannon(x, y) {
  //the barrel of the cannon
  fill(0);
  stroke('black');
  rect(x, y, 25, 5);
  //the rounded back of the cannon barrel
  ellipseMode(CENTER);
  ellipse(x, y + 2.5, 5, 5);
  //the spoked wooden wheel
  noFill();
  stroke('brown');
  ellipse(x, y + 4, 20, 20);
  line(x + 10, y + 2.5, x - 10, y + 2.5);
  line(x, y + 12.5, x, y - 6.5);
  //the wooden anchor that holds the cannon to the ground
  fill('brown');
  beginShape();
  vertex(x, y + 5);
  vertex(x + 8, y + 5);
  vertex(x - 15, y + 15);
  endShape(CLOSE);
}

//function for the cliff the cannon is on
function cliff() {
  //the "grass" layer 
  fill('green')
  noStroke()
  rect(0, cannonY + 14, 30, 10)
  //the "dirt" layer"
  fill(80, 26, 13)
  rect(0, cannonY + 24, 30, height)
}

//function for the power level bar
function powerBar() {
  //the text that is above the power level meter
  text('Power Level', width / 4 * 3 + 15, height / 4 - 5)
  //the background rectangle 
  noStroke()
  fill('gray')
  rect(width / 4 * 3, height / 4, 100, 10)
  //the rectangle that updates with the speed changes
  fill('red')
  rect(width / 4 * 3, height / 4, ballSpeed * 5, 10)
}

//function that draws the target
function target(targetX) {
  ellipseMode(CENTER)
  fill('red')
  ellipse(targetX, height - 28, 50, 50)
  fill('white')
  ellipse(targetX, height - 28, 30, 30)
  fill('red')
  ellipse(targetX, height - 28, 10, 10)
}

//draws the sky and sets the initial location for the cloud
function renderSky(curveX, curveY, size) {
  background(0, 181, 255)
  //cloud drawing code taken from http://alpha.editor.p5js.org/jackiezen/sketches/rJEziNOR
  fill(255, 255, 255);
  noStroke();
  arc(curveX, curveY, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
  arc(curveX + 10, curveY, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
  arc(curveX + 25, curveY, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
  arc(curveX + 40, curveY, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}


//setting up the canvas
function setup() {
  createCanvas(500, 400);
  //sets up target in a random place along the x axis everytime the program re-runs
  targetX = targetX = random(40, 400);
}

//pushes a new ball every time the mouse is pressed
function mousePressed() {
  newBall = new CannonBall();
  balls.push(newBall);
}
//controls the power levels and cannon height
function keyPressed() {
  //resets the target by re-initiating setup
  if (keyCode ===82){
  setup()}
  //designates the Up arrow and down arrow to change the cannonY and cannonX variables
  if (keyCode === UP_ARROW) {
    cannonY = cannonY - 5;
  } else if (keyCode === DOWN_ARROW) {
    cannonY = cannonY + 5;
    //designates right and left arrows to change the ballSpeed variable
  } else if (keyCode === RIGHT_ARROW) {
    ballSpeed = ballSpeed + 1;
    //this sets the maximum ball speed to 20
    if (ballSpeed > 20) {
      ballSpeed = 20;
    }
  } else if (keyCode === LEFT_ARROW) {
    ballSpeed = ballSpeed - 1;
    //this if statement makes sure the ball can't move backwards
    if (ballSpeed < 0) {
      ballSpeed = 0;
    }
  }
  return false;
}

function draw() {
  //calling the renderSky function to create the sky color and a cloud
  //setting the cloudMoveX variable to animate
  renderSky(cloudMoveX = cloudMoveX + 0.5, cloudMoveY, 2);
  //this if statement creates a loop that renders the cloud back to the left of the canvas at a different y height
  if (cloudMoveX > width + 30) {
    cloudMoveX = -80
    cloudMoveY = cloudMoveY + random(1, 100)
  }
  //calls the words variables. this prints the instructions to the game.
  fill(0)
  text(words, 50, 50, 290, 100)
  //calling the cannon function to render at cannonX and cannonY
  cannon(cannonX, cannonY);
  //rendering the cliff function
  cliff();
  //rendering the power bar function
  powerBar();
  //rendering the target function
  target(targetX)

  //placing a ball in the balls array and also querying that array so that each object is displayed, moves, and is subect to gravity 
  for (i = 0; i < balls.length; i++) {
    //displaying the "pushed" ball
    balls[i].display();
    //moving the "pushed" ball
    balls[i].move();
    //initiating gravity
    balls[i].gravitation();
  }
}

//this creates the CannonBall class that is used to create a NewBall that is pushed into the balls array
function CannonBall() {
  //defining the origin of the cannonball using a vector
  this.loc = createVector(cannonX + 25, cannonY + 3);
  //x changes horizontal speed and y changes vertical speed. ball speed variable is used here
  this.speed = createVector(ballSpeed, 0);
  // how big the cannon ball is
  this.diameter = 5;

  //this renders the NewBall with it's properties.
  this.display = function() {
    fill('black');
    noStroke();
    //defining that it should render the ball at the this.loc vector with the this.diameter that is defined
    ellipse(this.loc.x, this.loc.y, this.diameter, this.diameter);
    stroke(2);
  }
  //this checks where each cannonball is and stops it if the cannonball gets too low in the scene
  this.checkLoc = function() {
    //querying the initial location vector against the height of the canvas
    if (this.loc.y < round(height - 30)) {
      return true;
    } else {
      return false
    }
  }



  //the animation of the cannonball
  this.move = function() {
    //if this.checkLoc is true, the ball continues moving, if it is false then it stops.
    if (this.checkLoc()) {
      //creating a speed for the cannon ball to move in
      this.loc.add(this.speed);
       this.speed.add(this.accel);
    } else{
       
      this.loc.y=round(height-30);
    }
  }.bind(this)
  //this function defines the gravity
  this.gravitation = function() {
    //this.planet is being set up as the vector that the gravity is pulling towards
    this.planet = createVector(this.loc.x, height);
    //subtracting the this.planet vector from the this.planet vector creates a vector between those two
    this.planet.sub(this.loc);
    //defining the magnitude of the vector we just made. the larger the number the higher the "gravity"
    this.planet.setMag(0.1);
    //setting the speed of the cannonball to move toward the planet
    this.accel = this.planet;
  }
}