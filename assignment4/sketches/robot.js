var bgColor = 'lightGreen';

function setup() {
    createCanvas(1000, 1000);
    background(bgColor);
  
  
}

function draw() {}

function drawRobot(x, y, robotSize) {
   
  //ellipse(x, y, webSize);
  //ellipse(x, y, webSize);
  
  strokeWeight(5);
  
  //Antenna
  line(x, y, x, y - robotSize);
  
  //Head
  fill('lightGrey');
  rect(x - (robotSize/2), y - (robotSize/2), robotSize , robotSize);
  
  //Antenna Base
  rect(x - (robotSize/8.5), (y - (robotSize/4)) - (robotSize/2), robotSize/4 , robotSize/4);
  
  //Antenna Ball
  fill('red');
  ellipse(x, y - robotSize, robotSize/7, robotSize/7);
  
  //Right Eye
  fill('lightBlue');
  ellipse(x + (robotSize/5), y - (robotSize/5), robotSize/3, robotSize/3);
  
  //Left Eye
  ellipse(x - (robotSize/5), y - (robotSize/5), robotSize/3, robotSize/3);
  
  //Mouth
  fill('pink');
  rect(x - ((robotSize * 0.5)/2), y + ((robotSize * 0.2)/2) , robotSize * 0.5, robotSize * 0.2);


}

function mouseClicked() {
    var size = random(0, width / 4);
    drawRobot(mouseX, mouseY, size);
}

