var bgColor = 'white';
var bgcircleColor = '#464c5b';
var treeColor = '#24ad5f';
var treeShadow = '#1e9250';
var starColor = 'grey';
var snowColor = 'white';
var xCenter = 250;
var yCenter = 250;

// var snowFlake = {x:250,y:0,s:5};

// function snowGlobe() { 
function setup() {
  createCanvas(500, 500);
  background(bgColor);

  fill(bgcircleColor);
  strokeWeight(0);
  ellipse(xCenter, yCenter, 450, 450);

  fill(treeColor);
  strokeWeight(0);
  triangle(xCenter - 200, yCenter + 175, xCenter, yCenter - 100, xCenter + 200, yCenter + 175);

  fill(treeShadow);
  strokeWeight(0);
  triangle(xCenter - 105, yCenter + 50, xCenter, yCenter - 100, xCenter + 120, yCenter + 65);

  fill(treeColor);
  strokeWeight(0);
  triangle(xCenter - 150, yCenter + 50, xCenter, yCenter - 130, xCenter + 150, yCenter + 50);

  fill(treeShadow);
  strokeWeight(0);
  triangle(xCenter - 75, yCenter - 50, xCenter, yCenter - 130, xCenter + 75, yCenter - 40);

  fill(treeColor);
  strokeWeight(0);
  triangle(xCenter - 100, yCenter - 50, xCenter, yCenter - 160, xCenter + 100, yCenter - 50);

  fill('yellow');
  strokeWeight(0);  
  ellipse(xCenter, yCenter - 175, 20, 20);
}

function drawSnow(x, y, snowSize) {

  strokeWeight(0);
  fill('white');
  ellipse(x, y, snowSize, snowSize);
}

function drawsnowFlake(){

    stroke(bgColor);
    strokeWeight(spokeWeight);
    line(x, y, x + webSize, y);
    line(x, y, x - webSize, y);
    line(x, y, x, y + webSize);
    line(x, y, x, y - webSize);
    line(x, y, x + webSize * 0.7, y + webSize * 0.7);
    line(x, y, x + webSize * 0.7, y - webSize * 0.7);
    line(x, y, x - webSize * 0.7, y + webSize * 0.7);
    line(x, y, x - webSize * 0.7, y - webSize * 0.7);
    // beginShape();
    //   fill(bgColor);
    //   vertex(100, y - 130);
    //   vertex(150, y - 140);
    //   vertex(200, y - 130);
    // endShape();

}

function keyPressed() {
  var size = random(1, 10);
  var randX = random(25, 450);
  var randY = random(25, 450);
  snowFlake(randX, randY, size);
}

function deviceShaken() {
  var size = random(1, 10);
  var randX = random(25, 450);
  var randY = random(25, 450);
  drawSnow(randX, randY, size);
}

function snowFlake(x, y, snowSize){
  strokeWeight(1);
  stroke(bgColor);
  //noon
  line(x - snowSize, y, x + snowSize, y);
  //noon ends
  beginShape();
  	vertex(x - snowSize * .2, y - snowSize * .90);
 	 	vertex(x, y - snowSize * .70);
  	vertex(x + snowSize * .2, y - snowSize * .90);
  endShape();
  
  beginShape();
  	vertex(x - snowSize * .2, y + snowSize * .90);
 	 	vertex(x, y + snowSize * .7);
  	vertex(x + snowSize * .2, y + snowSize * .90);
  endShape();
  //3-9
  line(x, y + snowSize, x, y - snowSize);
  //3-9 ends
  beginShape();
  	vertex(x - snowSize * .9, y + snowSize * .20);
 	 	vertex(x - snowSize * .7, y);
  	vertex(x - snowSize * .9, y - snowSize * .20);
  endShape();
  beginShape();
  	vertex(x + snowSize * .9, y + snowSize * .20);
 	 	vertex(x + snowSize * .7, y);
  	vertex(x + snowSize * .9, y - snowSize * .20);
  endShape();
  
  //1:30 - 7:30
  line(x + snowSize * 0.4, y - snowSize * 0.4, x - snowSize * 0.4, y + snowSize * 0.4);
  //4:30 - 10:30
  line(x + snowSize * 0.4, y + snowSize * 0.4, x - snowSize * 0.4, y - snowSize * 0.4);

}


// function draw () {
//   snowGlobe();
//   drawSnow(snowFlake.x, snowFlake.y, snowFlake.s);
//   snowFlake.y+=2;  
// }