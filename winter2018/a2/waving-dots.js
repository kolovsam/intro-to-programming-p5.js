var angle = 0.0;
var scalar = 10;
var speed = 0.04;
var time = 1880;

var a1 = 40;
var b1 = 40;
var a2 = 400
var b2 = 30
var a3 = 380
var b3 = 380
var a4 = 10
var b4 = 390

function setup() {
  createCanvas(400, 400);
}


function draw() {
  var currentTime = millis();

  background(0);



//moving dots to the center
  
  
  if (currentTime < time) {

    a1 = a1 + 1.8
    b1 = b1 + 3
    a2 = a2 - 3.88
    b2 = b2 + 3
    a3 = a3 - 1.8
    b3 = b3 - 2
    a4 = a4 + 2.7
    b4 = b4 - 2

    //circle
    
    fill(255, 255, 255)
    ellipse(a1, b1, 40, 40);
    ellipse(a2, b2, 30, 30);
    ellipse(a3, b3, 20, 20);
    ellipse(a4, b4, 10, 10);


    //stopping point  

    if (a1 > 132) {
      a1 = 132;
    }
    
    if (b1 > 200) {
      b1 = 200;
    }


    if (a2 < 178) {
      a2 = 178;
    }
    
    if (b2 > 200) {
      b2 = 200;
    }

    if (a3 < 218) {
      a3 = 218;
    }
    
    if (b3 < 200) {
      b3 = 200;
    }

    if (a4 > 263) {
      a4 = 263;
    }
    
    if (b4 < 200) {
      b4 = 200;
    }

  } else {

//making the dots float after they arrived center
    
    angle += speed;
    var offset = width / 2;

    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar * 2;
    var y3 = offset + sin(angle + 0.8) * scalar * 3;
    var y4 = offset + sin(angle + 1.2) * scalar * 4;


    fill(255, 255, 255)
    ellipse(132, y1, 40, 40);
    ellipse(178, y2, 30, 30);
    ellipse(218, y3, 20, 20);
    ellipse(263, y4, 10, 10);
  }
}