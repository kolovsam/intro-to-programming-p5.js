function setup() { 
  createCanvas(1200, 600);
  background('pink');
  textSize(48);
} 

var one = 'pink';
var two = 'pink';
var three = 'pink';

function square(col,x,y) {
	fill(col);
  rect(x,y,400,400)
}

function button(col,x,y) {
	fill(col);
  rect(x,y,200,100);
}

function draw() { 
	noStroke();
  
  // Squares
  strokeWeight(2)
  stroke('black')
  square(one,0,200);
  square(two,400,200);
  square(three,800,200);
  
  // Rectangle buttons
  button('red',100,height/2);
  button('white',100,height/2+100);
  button('blue',500,height/2);
  button('green',500,height/2+100);
  button('yellow',900,height/2);
  button('orange',900,height/2+100);
  
  // Instructions
  fill('black');
  textSize(48);
  noStroke()
	text("Select one color per square below.", 225, 100);
  
  // Square 1 ifs
  if ((mouseX > 100) && (mouseX <300) 
      && (mouseY > height/2) && (mouseY < height/2 + 100)
      && mouseIsPressed) {
  		one = 'red';
  }
  if ((mouseX > 100) && (mouseX <300) 
      && (mouseY > height/2+100) && (mouseY < height/2 + 200)
      && mouseIsPressed) {
  		one = 'white';
  }
  
  // Square 2 ifs
  if ((mouseX > 500) && (mouseX <700) 
      && (mouseY > height/2) && (mouseY < height/2 + 100)
      && mouseIsPressed) {
  		two = 'blue';
  }
  if ((mouseX > 500) && (mouseX <700) 
      && (mouseY > height/2+100) && (mouseY < height/2 + 200)
      && mouseIsPressed) {
  		two = 'green';
  }
  
  // Square 3 ifs
  if ((mouseX > 900) && (mouseX <1100) 
      && (mouseY > height/2) && (mouseY < height/2 + 100)
      && mouseIsPressed) {
  		three = 'yellow';
  }
  if ((mouseX > 900) && (mouseX <1100) 
      && (mouseY > height/2+100) && (mouseY < height/2 + 200)
      && mouseIsPressed) {
  		three = 'orange';
  }
}