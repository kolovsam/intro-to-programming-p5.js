//Samuel Shen HCDE 598, Assignment Final, Animated Weather Background

var mouseLocationX;
var mouseLocationY;
//Snows Variable//
var xLocation = [];
var yLocation = [];
var snowSize = [];
var sizeWidth;
var sizeHeight;
var currentSnowlevel = 0;
var frame = 30;
var currentPage = 1;

//Sun Variable//
var cloud1X = 20;
var cloud1Y = 150;
var cloud2X = 160;
var cloud2Y = 90;
var cloud3X = 300;
var cloud3Y = 250;


//load background image
var img;

function preload() {
  // img = loadImage('https://i.imgur.com/FbzHzmh.png');
  img = loadImage('https://i.imgur.com/vAAjlTC.png');
  img2 = loadImage('https://i.imgur.com/ApKufbX.png');
}

function setup() {
  createCanvas(600, 600);
  textFont('Trebuchet MS');
  textSize(22);
  textAlign(CENTER);
}

function draw() {

  if (currentPage == 1) {
    snowDrawing();
  } else if (currentPage == 2) {
    sunDrawing();
  }

  //Buttons
  strokeWeight(2);
  stroke('#666666');
  //Snow Button, showing states;
  if (currentPage == 1){
  fill("#020238");
  } else {
  fill("#FFFFFF");
  }
  
  rect(300, 550, 75, 40, 5);
  strokeWeight(0);
  if (currentPage == 1){
  fill("#FFFFFF");
  } else {
  fill("#020238");
  }
  text('Snow', 305, 555, 75, 40);
  //Sunny Button, showing states;
  strokeWeight(2);
  if (currentPage == 2){
  fill("#FCB611");
  } else {
  fill("#FFFFFF");
  }
  rect(220, 550, 75, 40, 5);
  strokeWeight(0);
  if (currentPage == 2){
  fill("#FFFFFF");
  } else {
  fill("#FCB611");
  }
  text('Sunny', 225, 555, 75, 40);


  if (mouseLocationX > 300 && mouseLocationX < 375 && mouseLocationY > 550 && mouseLocationY < 590) {
    currentPage = 1;
    mouseLocationX = 0;
    mouseLocationY = 0;
  } else if (mouseLocationX > 220 && mouseLocationX < 295 && mouseLocationY > 550 && mouseLocationY < 590) {
    currentPage = 2;
    mouseLocationX = 0;
    mouseLocationY = 0;
  }
}


/*Draw Snow*/
function snowDrawing() {
  background("#020238");
  //having image being cut off
  image(img, 0, 200, 600, 600);
  image(img2, 250, 100, 84, 82);
  /*Frame counting down and when it's less than 0, we add two snowflakes to the array
  The purpose of this is to provide some vertical space for each snowflakes or the
  snowflakes will be all stacked up*/
  if (frame < 0) {
    for (var i = 0; i < 2; i++) {
      append(xLocation, random(1, 600));
      append(yLocation, 0);
      append(snowSize, random(5, 15));
    }
    /*Resetting the frame back to 30 so it starts counting down again*/
    frame = 30;
  }
  /*draw the snowflakes*/
  for (var j = 0; j < xLocation.length; j++) {
    strokeWeight(0);
    fill("#FFFFFF");
    ellipse(xLocation[j], yLocation[j], snowSize[j], snowSize[j]);
    yLocation[j] = yLocation[j] + 1;
  }
  /*Frame countdown*/
  frame = frame - 1;
  /*A not so optimized way to clear the array after running this for a while (since it's infinite it can crash eventually)
  , there should be better ways to remove items from the array but I don't know how yet*/
  if (xLocation.length > 5000) {
    xLocation = [];
    yLocation = [];
    snowSize = [];
  }
}
//Draw Sun//
function sunDrawing() {
  background("#D6F2FE");
  //Green Ground
  fill("#45C451");
  noStroke();
  rect(0, 530, 600, 70);

  //Sun
  sun();

  cloud(cloud1X, cloud1Y);
  cloud(cloud2X, cloud2Y);
  cloud(cloud3X, cloud3Y);

  cloud1X = cloud1X + 1;
  cloud2X = cloud2X + 1;
  cloud3X = cloud3X + 1;

  if (cloud1X > 600) {
    cloud1X = -100;
  }
  if (cloud2X > 600) {
    cloud2X = -100;
  }
  if (cloud3X > 600) {
    cloud3X = -100;
  }
}


function sun() {
  fill("#FCB611");
  ellipse(300, 100, 130, 130);
  fill("#FDEC8C");
  ellipse(300, 100, 100, 100);
}

function cloud(cloudX, cloudY) {
  stroke("rgba(255, 255, 255, 0.8)");
  fill("rgba(255, 255, 255, 0.8)");
  ellipse(cloudX + 35, cloudY + 30, 60, 50);
  ellipse(cloudX + 55, cloudY + 40, 70, 40);
  ellipse(cloudX + 60, cloudY + 30, 30, 30);
  ellipse(cloudX + 15, cloudY + 40, 40, 30);
  ellipse(cloudX + 35, cloudY + 45, 50, 40);
}

function mouseClicked() {
  mouseLocationX = mouseX;
  mouseLocationY = mouseY;
}