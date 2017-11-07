/* scaled drawing
    davidson, 10/2017
    
    this is an example of a program that uses parameters to create a
    drawing that is automatically scaled to different sizes based on
    user input.
    
*/

// fixed colors and drawing settings
var bgColor = ('#FFBB99');
var eyeColor1 = 'white'
var eyeColor3 = ('#1C1C1C');
var eyeColor4 = 'white'

var outlineColor = ('#1C1C1C')
var outlineWeight = 5;



// just establish the canvas and fill it with a color
function setup() {
  createCanvas(1000, 1000);
  background(bgColor);
}


// in this program, nothing is done in the draw function;
// everything is triggered by pressing a key on the keyboard
function draw() {}


// draws a simple spider web centered at (x, y)
// with a size of webSize pixels. the websize is
// the radiius of the spider web.
function drawEye(x, y, eyeWidth, eyeHeight, eyeColor2) {

  // first draw the 8 radial spokes of the web
  stroke(outlineColor);
  strokeWeight(outlineWeight);
  fill(eyeColor1);
  ellipse(x, y, eyeWidth, eyeHeight);
  fill(eyeColor2);
  ellipse(x, y, eyeWidth * 0.45);
  
  line(x, y-eyeHeight*0.7, x, y-eyeHeight*1.2)
  line(x-eyeWidth*0.3, y-eyeHeight*0.6, x-eyeWidth*0.45, y-eyeHeight*1.1)
  line(x+eyeWidth*0.3, y-eyeHeight*0.6, x+eyeWidth*0.45, y-eyeHeight*1.1)
  line(x, y+eyeHeight*0.7, x, y+eyeHeight*1.2)
  line(x-eyeWidth*0.3, y+eyeHeight*0.6, x-eyeWidth*0.45, y+eyeHeight*1.1)
  line(x+eyeWidth*0.3, y+eyeHeight*0.6, x+eyeWidth*0.45, y+eyeHeight*1.1)
  noStroke();
  fill(eyeColor3);
  ellipse(x, y, eyeWidth * 0.3);
  fill(eyeColor4);
  ellipse(x + 15, y, eyeWidth / 15.5, eyeHeight / 5.25);
  
  /*beginShape();
  vertex(x-eyeWidth/2, y);
  bezierVertex(eyeWidth*4.2, eyeWidth*1.8, eyeWidth*4.8, eyeWidth*1.5, x+eyeWidth/2, y);
  bezierVertex(50, 80, 60, 25, 30, 20);
  endShape();*/
}

// whenever a key is pressed on the keyboard,
// draw a spider web centered on the current position
// of the mouse with a random size web each time
function keyPressed() {
  var eyeWidth = random(50, width / 5);
  var eyeHeight = eyeWidth / 2
  var colors = ['#93BDBE', '#93AEBE', '#9396BE', '#B493BE', '#BE93A2'];
  var eyeColor2 = random(colors);
  // background(bgColor);
  drawEye(mouseX, mouseY, eyeWidth, eyeHeight, eyeColor2);
}
//function mouseClicked() {
//var size = random(0, width / 5);
//background(bgColor);
//drawWeb(mouseX, mouseY, size);
//}