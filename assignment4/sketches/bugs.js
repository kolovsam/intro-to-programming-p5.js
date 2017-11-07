var bgColor = "#ffcc33";
var bugColor = "#E30000";
var littleDots = "#480A0A";
var bugHead = 0;


function setup() {
  createCanvas(800,600);
  background(bgColor);
  drawBug(400, 300, 100);
  fill(littleDots);
  textSize(20);
  text("Can you catch the bug?", 300 , 400);
  textSize(16);
  text("[click to start]", 360, 425);
}



function draw() {}


function drawBug(x, y, size) {
  strokeWeight (size / 20);
  fill(bugHead);
  line( x, y - size / 2, x - size / 8, y - size / 1.3);
  line( x, y - size / 2, x + size / 8, y - size / 1.3);
  ellipse(x, y - size / 2, size / 3);
  fill(bugColor);
  ellipse(x, y, size);
  line(x, y - size /2, x, y + size / 2);
  fill(littleDots);
  ellipse(x, y + size / 5, size / 3);
  ellipse(x - size / 4, y - size / 8, size / 5 );
  ellipse(x + size / 4, y - size / 8, size / 5 );
}



function mouseClicked(){
  var size = random(3, 400);
  var x = random(0, 800);
  var y = random(0, 600);
  background(bgColor);
  drawBug(x, y ,size);
}
