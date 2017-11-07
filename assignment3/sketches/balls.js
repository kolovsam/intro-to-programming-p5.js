/*
Please try to keep pressing one of the triangles.
*/

var w = 400;
var h = 400;
var balls = [];
var addSize = 0;
var ballColor = 128;

function setup() {
  createCanvas(w, h);
  var ball1;
  var ball2;
  ball1 = new ball(0,0,40,5,7);
  // ball2 = new ball(w/2,h/2,40,-5,3);
  balls[0] = ball1;
  // balls[1] = ball2;
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
      flagX = false;
    }
    if(this.y >= h){
      flagY = false;
    }
    if(this.x <= 0){
      flagX = true;
    }
    if(this.y <= 0){
      flagY = true;
    }


    if(flagX){
      dirx = dx;
    }else{
      dirx = -dx;
    }
    if(flagY){
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
	changeSize()
  background(220);
	triangle(30, 75, 58, 20, 86, 75);
	triangle(30, 95, 58, 145, 86, 95);
	fill(ballColor);
	balls[0].ballMove();
	// balls[1].ballMove();
}

function changeSize(){
	if(mouseIsPressed && mouseX >= 30 && mouseX <= 86 && mouseY <= 75 && mouseY >=20){
		addSize = 30;
		// ballColor = 0;
	}else if(mouseIsPressed && mouseX >= 30 && mouseX <= 86 && mouseY <= 145 && mouseY >=95){
		addSize = -30;
		// ballColor = 255;
	}
	
	else{
		addSize = 0;
		// ballColor = 0;
	}
	
	// if(mouseIsPressed && mouseX >= 30 && mouseX <= 86 && mouseY <= 145 && mouseY >=95){
	// 	addSize = -30;
	// 	// ballColor = 255;
	// }
}
