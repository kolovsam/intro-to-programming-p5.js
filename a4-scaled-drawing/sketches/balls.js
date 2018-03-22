/*
Please click the canvas to generate balls.
Ball's original size is partially defined by click location.

Also, please try to keep pressing one of the triangles to control balls sizes.
*/

var w = 400;
var h = 400;
var balls = [];
var addSize = 0;
var ballColor = 0;
var count = 0;

function setup() {
  createCanvas(w, h);
}

function ball(x, y, size, dx, dy){
  this.x = x;
  this.y = y;
  this.size = size;
  this.flagX = true;
  this.flagY = true;
  this.dirx = dx;
  this.diry = dy;

  this.ballMove = function() {
    if(this.x >= w){
      this.flagX = false;
    }
    if(this.y >= h){
      this.flagY = false;
    }
    if(this.x <= 0){
      this.flagX = true;
    }
    if(this.y <= 0){
      this.flagY = true;
    }


    if(this.flagX){
      dirx = dx;
    }else{
      dirx = -dx;
    }
    if(this.flagY){
      diry = dy;
    }else{
      diry = -dy;
    }

    this.x += dirx;
    this.y += diry;
    fill(0);
    stroke(0);
    ellipse(this.x, this.y, this.size + addSize, this.size + addSize);
  }
}

function draw() {
	drawBall();
  lineConnection()
}

function lineConnection(){
  for(i = 0; i < balls.length; i++){
    for(j = i + 1; j < balls.length; j++){
      var ball1 = balls[i];
      var ball2 = balls[j];
      if(distance(ball1.x, ball1.y, ball2.x, ball2.y) < width * width * 0.25){
        line(ball1.x,ball1.y,ball2.x,ball2.y);
      }
    }
  }
}

function distance(x1, y1, x2, y2){
  return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

function drawBall(){
  changeSize()
  background(220);
	triangle(30, 75, 58, 20, 86, 75);
	triangle(30, 95, 58, 145, 86, 95);
	fill(ballColor);
  for(var i of balls){
    i.ballMove();
  }
}

function mousePressed(){
  var size;
  size = random(0, width / 5)
  var ball0 = new ball(mouseX, mouseY, size, random(-10,10), random(-10,10));
  balls.push(ball0);
}

function changeSize(){
	if(mouseIsPressed && mouseX >= 30 && mouseX <= 86 && mouseY <= 75 && mouseY >=20){
		addSize = 30;
	}else if(mouseIsPressed && mouseX >= 30 && mouseX <= 86 && mouseY <= 145 && mouseY >=95){
		addSize = -30;
	}
	else{
		addSize = 0;
	}
}
