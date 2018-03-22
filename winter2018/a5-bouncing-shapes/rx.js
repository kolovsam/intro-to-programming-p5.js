/* 
598 assignment Bouncing

student: Rachel / Kun Xu
(Finished with help from Sam)

note:
Didn't able to make random alpha value (transparency) for the balls
didn't able to add one ball every time mouse is clicked

*/




var xCoord = [];
var yCoord = [];
//make the ellipse's X and Y coordinates able to hold a array of value

var sizeoftheball = [];
//make the ellipse's radius able to hold a array of value

var xDirection = [];
var yDirection = [];
//make the ellipse's direction able to hold a array of value
//this part didn't accurred to me at all before Sam point it out...

var ball_color = [];

var ball_alpha = [];
// alpha didn't work...

function setup() {

  createCanvas(600, 600);
  ellipseMode(CORNER);
  // Set ellipseMode is CORNER
  
  for (i = 0; i < 50; i++) {

    var randomx = round(random(0, 520));
    xCoord.push(randomx);
    //"round()" means assign a int value 

    var randomy = round(random(0, 520));
    yCoord.push(randomy);
// "yCoord.push(randomy)" means push a randomy to yCoord

    var randomxD = round(random(2, 5));
    xDirection.push(randomxD);


    var randomyD = round(random(3, 8));
    yDirection.push(randomyD);


    var randomsize = round(random(10, 80));
    sizeoftheball.push(randomsize);

    var colors = ['#d2acd1', '#8c759f', '#f5b8c7', '#ffeec3', '#fbd395'];
    var color = random(colors);
    ball_color.push(color);


  }
}


function draw() {
  background('#d2acd1');


  for (i = 0; i < yCoord.length; i++) {
//I'm still at the "It works?.. why?" situation with this line of code
//so ask Sam if you don't get it :D
    
    noStroke();
    fill(ball_color[i]);
    ellipse(xCoord[i], yCoord[i], sizeoftheball[i], sizeoftheball[i]);


    xCoord[i] = xCoord[i] + xDirection[i];
    yCoord[i] = yCoord[i] + yDirection[i];


    if (xCoord[i] + sizeoftheball[i] > width) {
      //make the ball bounce back when it's edge hit the boundry
      xDirection[i] = xDirection[i] * -1;
    }

    if (xCoord[i] < 0) {
      xDirection[i] = xDirection[i] * -1;
    }

    if (yCoord[i] + sizeoftheball[i] > height) {
      yDirection[i] = yDirection[i] * -1;
    }

    if (yCoord[i] < 0) {
      yDirection[i] = yDirection[i] * -1;
    }
  }
}