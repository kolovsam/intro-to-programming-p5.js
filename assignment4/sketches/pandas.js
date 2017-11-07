/* scaled drawing
  The scaled drawing is based on the David demo on class
  The assignment is to create a drawing that can be generated 
  at any scale
*/

// fixed colors and drawing settings
var bgColor = 'orange';
var lineColor = 'white';
var spokeWeight = 0;




// just establish the canvas and fill it with a color
function setup() {
    createCanvas(1000, 1000);
    background(bgColor);
}


// in this program, nothing is done in the draw function;
// everything is triggered by pressing a key on the keyboard


function draw() {}


// draw a basic panda
function panda(x,y, px) {
  var py = 0.9 * px;
  fill('black');
  ellipse(x - px*0.45, y - px*0.35, px*0.36, py*0.36);
  ellipse(x + px*0.45, y - px*0.35, py*0.36, py*0.36);

  fill('white');
  ellipse(x, y, px, py);
  fill('black');
  ellipse(x, y + px*0.15, px/5, py/5);
  ellipse(x - px*0.2, y - px*0.1, px/4, py/4);
  ellipse(x + px*0.2, y - px*0.1, px/4, py/4);
  fill('white');
  ellipse(x + px*0.15, y - px*0.1, px*0.1, py*0.1);
  ellipse(x - px*0.15, y - px*0.1, px*0.1, py*0.1);
}

// draws a simple spider web centered at (x, y)

function drawWeb(x, y, webSize) {

    // panda drawing
    stroke(lineColor);
    strokeWeight(spokeWeight);
  	panda(x, y, webSize);
  


}

// whenever a key is pressed on the keyboard,
// draw a spider web centered on the current position
// of the mouse with a random size web each time
function mouseClicked() {
    var size = random(50, width / 5);
    drawWeb(mouseX, mouseY, size);
}

function keyPressed() {
    var size = random(50, width / 5);
    drawWeb(mouseX, mouseY, size);
}