//Sonam Samel. 598- Simple Animation


//* These Variables define the Pink Character

var xCoord1 = 13;
var yCoord1 = 319;

var xCoord2 = 13;
var yCoord2 = 373;

var xCoord3 = 37;
var yCoord3 = 373;

var xCoord4 = 61;
var yCoord4 = 373;

var xCoord17 = 31;
var yCoord17 = 344;

var xCoord18 = 60;
var yCoord18 = 344;

var xCoord19 = 60;
var yCoord19 = 340;

var xCoord20 = 31;
var yCoord20 = 340;



//* These Variables define the Yellow Character

var xCoord5 = 321;
var yCoord5 = 319;

var xCoord6 = 321;
var yCoord6 = 373;

var xCoord7 = 345;
var yCoord7 = 373;

var xCoord8 = 369;
var yCoord8 = 373;

var xCoord21 = 340;
var yCoord21 = 344;

var xCoord22 = 369;
var yCoord22 = 344;

var xCoord23 = 340;
var yCoord23 = 340;

var xCoord24 = 369;
var yCoord24 = 340;



//* These Variables define the Red Character

var xCoord9 = 321;
var yCoord9 = 11;

var xCoord10 = 321;
var yCoord10 = 65;

var xCoord11 = 345;
var yCoord11 = 65;

var xCoord12 = 369;
var yCoord12 = 65;

var xCoord25 = 340;
var yCoord25 = 35;

var xCoord26 = 369;
var yCoord26 = 35;

var xCoord27 = 340;
var yCoord27 = 39;

var xCoord28 = 369;
var yCoord28 = 39;



//* These Variables define the Blue Character

var xCoord13 = 12;
var yCoord13 = 12;

var xCoord14 = 12;
var yCoord14 = 66;

var xCoord15 = 36;
var yCoord15 = 66;

var xCoord16 = 60;
var yCoord16 = 66;

var xCoord29 = 30;
var yCoord29 = 35;

var xCoord30 = 60;
var yCoord30 = 35;

var xCoord31 = 30;
var yCoord31 = 39;

var xCoord32 = 60;
var yCoord32 = 39;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);



  //This draws the pink character
  
  //This draws the body of the character
  fill('pink')
  rect(xCoord1, yCoord1, 66, 54);
  yCoord1 = yCoord1 - 2;
  rect(xCoord2, yCoord2, 18, 12);
  yCoord2 = yCoord2 - 2;
  rect(xCoord3, yCoord3, 18, 12);
  yCoord3 = yCoord3 - 2;
  rect(xCoord4, yCoord4, 18, 12);
  yCoord4 = yCoord4 - 2;

  //This draws the eyes of the character
  fill('white');
  ellipse(xCoord17, yCoord17, 15, 20);
  yCoord17 = yCoord17 - 2;
  ellipse(xCoord18, yCoord18, 15, 20);
  yCoord18 = yCoord18 - 2;
  fill('deepskyblue');
  ellipse(xCoord19, yCoord19, 12, 12);
  yCoord19 = yCoord19 - 2;
  ellipse(xCoord20, yCoord20, 12, 12);
  yCoord20 = yCoord20 - 2;



  //This draws the yellow character  
  
	//This draws the body of the character
  fill('gold')
  rect(xCoord5, yCoord5, 66, 54);
  yCoord5 = yCoord5 - 2;
  rect(xCoord6, yCoord6, 18, 12);
  yCoord6 = yCoord6 - 2;
  rect(xCoord7, yCoord7, 18, 12);
  yCoord7 = yCoord7 - 2;
  rect(xCoord8, yCoord8, 18, 12);
  yCoord8 = yCoord8 - 2;
  
  //This draws the eyes of the character
  fill('white');
  ellipse(xCoord21, yCoord21, 15, 20);
  yCoord21 = yCoord21 - 2;
  ellipse(xCoord22, yCoord22, 15, 20);
  yCoord22 = yCoord22 - 2;
  fill('deepskyblue');
  ellipse(xCoord23, yCoord23, 12, 12);
  yCoord23 = yCoord23 - 2;
  ellipse(xCoord24, yCoord24, 12, 12);
  yCoord24 = yCoord24 - 2;



  //This draws the red character
  
  //This draws the body of the character
	fill('tomato')
  rect(xCoord9, yCoord9, 66, 54);
  xCoord9 = xCoord9 - 1;
  yCoord9 = yCoord9 + 2;
  rect(xCoord10, yCoord10, 18, 12);
  xCoord10 = xCoord10 - 1;
  yCoord10 = yCoord10 + 2;
  rect(xCoord11, yCoord11, 18, 12);
  xCoord11 = xCoord11 - 1;
  yCoord11 = yCoord11 + 2;
  rect(xCoord12, yCoord12, 18, 12);
  xCoord12 = xCoord12 - 1;
  yCoord12 = yCoord12 + 2;
  
  //This draws the eyes of the character
  fill('white');
  ellipse(xCoord25, yCoord25, 15, 20);
  xCoord25 = xCoord25 - 1;
  yCoord25 = yCoord25 + 2;
  ellipse(xCoord26, yCoord26, 15, 20);
  xCoord26 = xCoord26 - 1;
  yCoord26 = yCoord26 + 2;
  fill('deepskyblue');
  ellipse(xCoord27, yCoord27, 12, 12);
  xCoord27 = xCoord27 - 1;
  yCoord27 = yCoord27 + 2;
  ellipse(xCoord28, yCoord28, 12, 12);
  xCoord28 = xCoord28 - 1;
  yCoord28 = yCoord28 + 2;



  //This draws the blue character
  
	//This draws the body of the character
  fill('paleturquoise')
  rect(xCoord13, yCoord13, 66, 54);
  xCoord13 = xCoord13 + 1;
  yCoord13 = yCoord13 + 2;
  rect(xCoord14, yCoord14, 18, 12);
  xCoord14 = xCoord14 + 1;
  yCoord14 = yCoord14 + 2;
  rect(xCoord15, yCoord15, 18, 12);
  xCoord15 = xCoord15 + 1;
  yCoord15 = yCoord15 + 2;
  rect(xCoord16, yCoord16, 18, 12);
  xCoord16 = xCoord16 + 1;
  yCoord16 = yCoord16 + 2;
  
  //This draws the eyes of the character
  fill('white');
  ellipse(xCoord29, yCoord29, 15, 20);
  xCoord29 = xCoord29 + 1;
  yCoord29 = yCoord29 + 2;
  ellipse(xCoord30, yCoord30, 15, 20);
  xCoord30 = xCoord30 + 1;
  yCoord30 = yCoord30 + 2;
  fill('deepskyblue');
  ellipse(xCoord31, yCoord31, 12, 12);
  xCoord31 = xCoord31 + 1;
  yCoord31 = yCoord31 + 2;
  ellipse(xCoord32, yCoord32, 12, 12);
  xCoord32 = xCoord32 + 1;
  yCoord32 = yCoord32 + 2;


}