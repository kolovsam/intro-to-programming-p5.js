var startX = 50;
var stopX = 200;
var startY = 50;
var stopY = 200;


var startx1 = 350;
var stopx1 = 250;
var starty1 = 50; 
var stopy2 = 200; 

var startx2 = 50; 
var stopx2 = 200; 
var starty2 = 350; 
var stopy2 = 200; 
var x = startx2; 
var y = starty2; 

var startx3 = 350; 
var stopx3 = 200; 
var starty3 = 350; 
var stopy3 = 200; 

//var x = startX; 
//var y = startY; 
var step = 0.005; 
var pct = 0.0; 




function setup() {
    // create the empty canvas
    createCanvas(400, 400);
    //  frameRate(10);
}

// declare and initialize useful variables
var myColor = 0;


function draw() {
    // reset the background each time the frame updates
    background('purple');

    // draw a circle
    strokeWeight(10);
    stroke('yellow');
    fill(myColor); // gray scale only
  

  if (pct < 1.0) {
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step; 
  }
    ellipse(x, y, 40, 40);
  

  if (pct < 1.0) {
    x = startx1 + ((stopX - startx1) * pct);
    y = starty1 + ((stopY - starty1) * pct);
    pct += step; 
  }
    ellipse(x, y, 40, 40);
  
  
   if (pct < 1.0) {
    x = startx2 + ((stopx2 - startx2) * pct);
    y = starty2 + ((stopy2 - starty2) * pct);
    pct += step; 
  }
    ellipse(x, y, 40, 40);
  
   if (pct < 1.0) {
    x = startx3 + ((stopx3 - startx3) * pct);
    y = starty3 + ((stopy3 - starty3) * pct);
   pct += step;   
  }
    ellipse(x, y, 40, 40);
    

    myColor = myColor + 1; // cycles up through grey and stays white
    

}
