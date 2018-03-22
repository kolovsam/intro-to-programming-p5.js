/* Thomas Tran – Scaled Drawing #4
		Nov 5, 2017 
*/

var x = 80;
var y = 80;
var Size = 40;
var frontColor = 'tan';
var topColor = 'brown';
var sideColor = 'yellow';
var bgColor = 'gray';



function setup() {
  createCanvas(500, 500);
  background(bgColor);
}

function drawMyCube() {}

function drawMyCube(x, y, Size) {

  fill(frontColor)
  rect(x, y, Size, Size);
  fill(topColor);
  quad(x, y, x + Size / 2, y - Size / 2, x + Size + Size / 2, y - Size / 2, x + Size, y);
  fill(sideColor);
  quad(x + Size, y, x + Size + Size / 2, y - Size / 2, x + Size + Size / 2, y + Size / 2, x + Size, y + Size);
}

function mousePressed() {
  var Size = random(10, 100);
  drawMyCube(mouseX, mouseY, Size);
}