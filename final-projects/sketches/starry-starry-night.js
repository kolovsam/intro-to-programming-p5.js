/* Starry, Starry Night Greeting Card
Sally Tsang, 12/04/2017

HCDE 598 Final Project
Please move mouse to see tracking graphics.
Any mouseclick will trigger new captions and subtle graphic changes.
*/

// lyrics
var words = ["", "starry, starry night", " paint the palette blue and grey ", "swirling clouds in violet haze", "reflect in Vincent's eyes of china blue"]
var index = 0;

// for mouse track bubbles's size
var loopNumbers = 5;

// for subtle background change
var r = 10;
var g = 5;
var b = 50;


function setup() {
  createCanvas(800, 600);
  noStroke();
  background(8, 5, 50);
}

function draw() {
  drawPage();
}


function mouseClicked() {
  
  // add red value to background
  r = r + 10;
  // return back to blue background when too red
  if (r > 40) {
    r = 0;
  }

  background(r, g, b);

  // increase mouse track bubble's size
  loopNumbers = loopNumbers + 2;
  // reduce mouse track bubble's size when too big
  if (loopNumbers > 15) {
    loopNumbers = 5;
  }
  
  // changes lyrics
  index = index + 1;
  
  // loop lyrics
  if (index == words.length) {
    index = 0;
  }
}



function drawPage() {
  
  //randomize background small stars
  spotx = random(0, width);
  spoty = random(0, height);
  backgroundstarsize = random(0, 4);
  ellipsesize = random(0, 8);
 
  //draw background small stars
  fill(255, 128);
  noStroke();
  ellipse(spotx, spoty, backgroundstarsize);

  // draw mouse track bubble
  for (var i = 0; i < loopNumbers; i++) {
    noFill();
    strokeWeight(1);
    stroke(255);
    ellipse(mouseX, mouseY, ellipsesize * i);
  }

  // draw lyrics
  noFill();
  strokeWeight(0.1);
  textSize(20);
  text(words[index], 12, 200);

}