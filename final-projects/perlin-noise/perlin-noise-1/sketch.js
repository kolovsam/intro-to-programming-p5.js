
/* HCDE 598 Final Project
My final project is about Perlin Noise visualization. Perlin noise is a type of gradient noise 
developed by Ken Perlin in 1983 as a computer graphic model. The development of Perlin Noise has 
allowed computer graphics artists to better represent the complexity of natural phenomena in 
visual effects for the motion picture industry.

For instance, Minecraft is specifically using Perlin noise calculations, like the kind you'd 
use to create a rough-looking texture for a 3D model.

In my coding, I use p5 gui library, map(), noise() and vertex() for creating the online interactive
Perlin Noise visualization. The xChange represents the wave longitude and yChange represents the 
wave change speed. Users could change different variable in the ranges to see how perlin noise 
animation change.
*/
// Final sketch project file

// set initil color for perlin noise and color
var perlinColor = (50, 30, 200, 1);
var bgColor = (120, 130, 130, 1);


//set initial start point for x and y pixel
var yini = 0.0;   
var xini = 0.0;
var yoff = yini;

var xChang = 0.06;
var yChang = 0.0085;


// set step range with perlin noise change variables
var xChangMin = 0.010;
var xChangMax = 0.90;
var xChangStep = 0.01;

var yChangMin = 0.0010;
var yChangMax = 0.090;
var yChangStep = 0.0010;

// set opacity range with magic variables
var opacityMax = 255;


/////////////////////////////////////////////////

// the gui object
var gui;

function setup() {

  // create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  //create the GUI
  gui = createGui('perlin-noise-1');

  // slider bar bgColor changes the alpha value
  gui.addGlobals('xChang', 'yChang', 'perlinColor', 'bgColor');

}

function draw() {

  // set color part
  // let the perlin noise color fill in
  fill(color(50, 30, 200, 1));

  // perlinDraw part, yini and xini represent the initial index of x and y-axis.
  perlinDraw(yini, xini);
}

function perlinDraw(yini, xini) {

  beginShape(); 

  // color will be covered everytime;
  background(120, 130, 130, 1);
  //fill(color(50, 30, 200, 1));
  
  // 2d noise setup
  var xoff = xini;

  index = 100;
  index2 = 300;

  for (var i = 0; i < 3; i++) {
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 5) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    fill(color(50 + 10*i, 30 + 10*i, 200 - 10*i, 1));
    var y = map(noise(xoff, yoff), 0 , 1, 50 + i*100, 150 + i*200);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += (xChang +0.01*i);
  }
  // increment y dimension for noise
  yoff += (yChang+0.001*i);

  // change wave width and height
  vertex(width, height);

  // set width back to 0 after change everytime
  vertex(0, height);
}
  endShape(CLOSE);
}