function setup() { 
  createCanvas(600, 600);
  background(176,224,230);
  textSize(35)
  fill('white')
  text("Press any key.", 175, 300);
} 

var eyesize = 5;
var mouthsize = 3;
var buttonsize = 6;

function draw() { 

  //snowman(300,300,2)
}

function snowman(x,y,n) {
  //body
  fill('white')
  ellipse(x,y-(n*55),n*50)
  ellipse(x,y,n*75)
  ellipse(x,y+(n*75),n*110)
  //eyes
  fill('black')
  ellipse(x-(n*7),y-(n*60),n*eyesize)
  ellipse(x+(n*7),y-(n*60),n*eyesize)
  //mouth
  ellipse(x-(n*10),y-(n*45),n*mouthsize)
  ellipse(x-(n*6),y-(n*43),n*mouthsize)
  ellipse(x-(n*2),y-(n*42),n*mouthsize)
  ellipse(x+(n*10),y-(n*45),n*mouthsize)
  ellipse(x+(n*6),y-(n*43),n*mouthsize)
  ellipse(x+(n*2),y-(n*42),n*mouthsize)
  //nose
  fill('orange')
  triangle(x-(n*2),y-(n*55),x+(n*10),y-(n*45),x-(n*2),y-(n*50))
  //buttons
  fill('red')
  ellipse(x,y-(n*2),n*buttonsize)
  ellipse(x,y-(n*19),n*buttonsize)
  ellipse(x,y+(n*15),n*buttonsize)
}

function keyPressed() {
  var size = random((0.01),3);
  var randx = random(0,width)
  var randy = random(0,height)
  snowman(randx,randy,size);
}