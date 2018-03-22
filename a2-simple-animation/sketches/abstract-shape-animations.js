// Abstract shape animations: robot, car, face, phone

var interval;
var grid = 20;
var posX = 80;
var posY = 100;
var w = 15;
var h = 15;
var colors = {
    1: '#ffffff',
    2: '#fd0002',
    3: '#974806',
    4: '#fac090',
    5: '#000000',
    6: '#0071c4',
    7: '#feff01',
    8: '#000000',
    9: '#e27b68'
  };

var positionX = 50;
var positionY = 100;

xCoord = 800;
yCoord = 0;

xRobot = 0;
yRobot = 0;

xPhone = 0;
yPhone = 0;


function setup() {
  createCanvas(1000,900);
  strokeWeight(0);
  
  interval = setInterval(function(){

    if(grid > 13) {
      grid--;
    } else {
      stopInterval();
    }
  }, 10);
}

function stopInterval() {
    clearInterval(interval);
}

function draw() {

  background('#ffffaa');
  

  
  if (positionX < 400) {
    positionX = positionX + 1
  }
  if (positionY < 500) {
    positionY = positionY + 1
  }
  
  fill(200);
  strokeWeight(2)
  rect(positionX, positionY - 40, 100, 50, 10)
  ellipse(positionX, positionY, 40, 40)
  ellipse(positionX + 100, positionY, 40, 40)
  
  
  
  
  if (xCoord > 550) {
    xCoord = xCoord - 1
  }
  if (yCoord < 380) {
    yCoord = yCoord + 1
  }
  
  fill('#fac090');
  ellipse(xCoord + 50, yCoord + 50, 20, 20);
  ellipse(xCoord + 110, yCoord + 50, 20, 20);
  rect(xCoord + 70, yCoord + 60, 20, 30);
  rect(xCoord + 40, yCoord + 110, 80, 10);
  noFill();
  ellipse(xCoord + 80, yCoord + 80, 150, 150);
  
  
  
  if (xRobot < 180) {
    xRobot = xRobot + 1
  }
  if (yRobot + 800  > 450) {
    yRobot = yRobot - 1
  }
  
  fill('brown');
  rect(xRobot + 10, yRobot + 800, 150, 75);
  fill('white');
  ellipse(xRobot + 40, yRobot + 820, 15, 15);
  ellipse(xRobot + 120, yRobot + 820, 15, 15);
  rect(xRobot + 50, yRobot + 840, 60, 15);
  
  
  if (xPhone + 900 > 750) {
    xPhone = xPhone - 1
  }
  if (yPhone + 800  > 420) {
    yPhone = yPhone - 1
  }
  
  fill(40);
  rect(xPhone + 900, yPhone + 800, 70, 120, 10);
  fill(100);
  rect(xPhone + 905, yPhone + 810, 60, 100);

}
