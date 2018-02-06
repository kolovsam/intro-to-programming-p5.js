// canvas width
var canvasX = 400
// canvas height
var canvasY = 600
// X of upper left
var uLCx = canvasX / 2;
// Y of upper left
var uLCy = 0;
//background color
var bckgrnd = 200
//bullet y coordinate
bulletY = uLCy + 30
//target x axis
var xAxis = 210
//target y axis
var yAxis = 300
//target size
var sze = 100
//variable of target moving
var mve = 0
//text
var instruc = 'down arrow=launch target; right arrow to move gun;           up arrow=reset gun'
var instruc2 = 'e=easy mode, m=medium mode, i=insane mode'

//the background and the instructions
function setup() {
  createCanvas(canvasX, canvasY);
  background(bckgrnd);
  text(instruc, 200, 400, 170, 500)
  text(instruc2, 200, 450, 130, 500)
}

function draw() {
  //how the bullet moves
  if (keyIsDown(DOWN_ARROW)) {
    bulletY = bulletY + 3;
    xAxis = xAxis + mve
    background(bckgrnd)
  }
  //bullet reset
  if (keyIsDown(UP_ARROW)) {
    bulletY = bulletY + 3;
    background(bckgrnd)
    text('Try again!', xAxis - 20, yAxis + 70)
    bulletY = uLCy + 30
    uLCx = 30
  }

  //sending the bullet back to the top after it goes past target
  if (bulletY > yAxis + 80) {
    bulletY = uLCy + 30
  }

  //drawing the components in the sketch
  target(xAxis, yAxis, sze);
  bullet(uLCx + 10, bulletY);
  gamePiece('green');
}

//the cannon drawing
function gamePiece(gpColor) {
  fill(gpColor)
  beginShape()
  //upper left
  vertex(uLCx - 20, uLCy)
  //lower left
  vertex(uLCx + 5, uLCy + 30)
  //lower right
  vertex(uLCx + 15, uLCy + 30)
  //upper right
  vertex(uLCx + 40, uLCy)
  endShape(close)
}

//the bullet drawing
function bullet(bulletX, bulletY) {
  fill('green')
  ellipse(bulletX, bulletY, 10, 10)
}

//the target drawing
function target(X, Y, sze) {
  fill('white')
  ellipse(X, Y, sze)
  fill('red')
  ellipse(X, Y, sze - 20)
  fill('white')
  ellipse(X, Y, sze - 40)
}
//getting the gun to move with the bullet
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    uLCx = uLCx + 10
    background(bckgrnd)
  }

  //easy mode changes
  if (keyCode === 69) {
    sze = 70
    mve = 1
    xAxis = 50
    yAxis = 300
    background(bckgrnd)
  }

  //medium mode changes
  if (keyCode === 77) {
    sze = 60
    mve = 2
    xAxis = 50
    yAxis = 450
    background(bckgrnd)
  }
  //insane mode changes
  if (keyCode === 73) {
    sze = 52
    mve = 1.5
    xAxis = 100
    yAxis = 500
    background(bckgrnd)
  }
}