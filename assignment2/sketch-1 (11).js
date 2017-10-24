function setup() {
  createCanvas(600, 500);
  noStroke();
}

var x = 50;
var y = 50;

var a = 550;
var b = 450;

var c = 50;
var d = 450;

var w = 550;
var z = 50;

function draw() {
  background('black');
  fill('yellow');
  ellipse(x,y,50,50);
  
  fill('orange');
  ellipse(a,b,50,50);
  
  fill('purble');
  ellipse(c,d,50,50);
  
  fill('red');
  ellipse(w,z,50,50);
  
  fill('black');
  ellipse(x-8,y-10,10,10);
  ellipse(x+8,y-10,10,10);
  triangle(x-5,y+3,x+5,y+3,x,y+13);
  
  ellipse(a-8,b-10,10,10);
  ellipse(a+8,b-10,10,10);
  rect(a-9,b+7,20,5);
  
  ellipse(c-8,d-10,10,10);
  ellipse(c+8,d-10,10,10);
  ellipse(c,d+8,20,20);
  
  ellipse(w-8,z-10,10,10);
  ellipse(w+8,z-10,10,10);
  arc(w,z+10,15,15,PI,0,CHORD);
  
  x += 1.1;
  y += 1;
  
  a -= 1;
  b -= 1;
  
  c += 1;
  d -= 1.4;
  
  w -= 1;
  z += 1.6;
  
  if (y > height/2) {
    y = height/2;
    x -= 1.1;
  }
  
  if (b < height/2) {
    b = height/2;
    a +=1;
  }
    
  if (d < height/2) {
    d = height/2;
    c -= 1;
  }
  
  if (z > height/2) {
    z = height/2;
    w += 1;
  }
}


