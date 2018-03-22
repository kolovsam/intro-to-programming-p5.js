/* 
28th October 2017
Hi, 
Below is my code for Assignment 3 
"Interactive Story" for the course 598A.
We are here to say hello to Matilda's Family from previous animation.
-Kartika Rathee
*/

// setting the background, text and button colors
var backgroundColor = '#57646C';
var textColor = 'white';
var buttonColor = 'pink';

//variables to draw the family of Matilda
var matX = 0; //Matilda's initial x-coordinate 
var matY = 20; //Matilda's initial y-coordinate

var broX = 50; //Brother's initial x-coordinate
var broY = 450; //Brother's initial y-coordinate

var dadX = 500; //Dad's initial x-coordinate
var dadY = 50; //Dad's initial y-coordinate

var momX = 500; //Mom's initial x-coordinate
var momY = 450; //Mom's initial y-coordinate

// Defining title and button text
var matildaHouse = "Matilda's House!";
var hintMsg = "1. Click Anywhere 2. Then use your keyboard as a '\key' to enter the house!";
var surpriseMsg = "Welcome Home!";
var helloMsg = "Let's go say hello!";
var memberMsg = "Greet one by one!";
//var helloMsg = "Hola!";

//Determines size of title box
var titleX = 200;
var titleY = 50;

//Determines the buttons for next page
var continueX;
var continueY;

//Determines the boxes with text
var box1X;
var box1Y;

//Determines the size of text
var titleTextSize = 48;
var promptTextSize = 24;
var buttonTextSize = 36;
var buttonTextSize1 = 30;

//Keeps track of the page we are on
var pageNum = 0;


//Determines where the mouse was clicked 
var MouseClickedAtX;
var mouseClickedAtY;


function setup() {

  createCanvas(800, 500);
  //Determines the coordinates of box and buttons
  continueX = width / 7;
  continueY = height - 60;
  box1X = 200;
  box1Y = 400;
}



function draw() {


  background(backgroundColor);

  //Stylize the page number on top-left
  textSize(21);
  strokeWeight(1);
  fill(buttonColor);
  text(pageNum, 20, 30); //Updates page number with coordinates as specified

  // Draws page n if pageNum = n
  if (pageNum == 0) {
    drawPage0();

  } else if (pageNum == 1) {
    drawPage1();

  } else if (pageNum == 2) {
    drawPage2();

  } else if (pageNum == 3) {
    drawPage3();

  } else {


  }

}


// Draw the Welcome Page (Page n = 0)
function drawPage0() {

  // Writes title as Matilda's House
  textSize(titleTextSize);
  textFont('Georgia');
  fill(textColor);
  text(matildaHouse, titleX, titleY); //Updates title with coordinates as specified.


  // Hint message to make user press a key on keyboard
  //keyPressed() function helps move to next page
  textSize(promptTextSize);
  fill(textColor);
  text(hintMsg, 10, continueY);

}

// Draw page 1
function drawPage1() {

  // Writes title as Welcome Home
  textSize(titleTextSize);
  fill(textColor);
  text(surpriseMsg, titleX, titleY);

  // Draws the button to make user click and move to next page
  fill(backgroundColor);
  stroke(buttonColor);
  strokeWeight(2);
  rect(box1X, box1Y, textWidth(helloMsg), 70);

  // Writes the text Let's go say hello! inside button
  textSize(buttonTextSize);
  strokeWeight(1);
  fill(textColor);
  text(helloMsg, box1X + 10, box1Y + 50);
drawEveryone();
  // Determines whether mouse was clicked within the boundaries of button
  if (isWithin(MouseClickedAtX, MouseClickedAtY,
      box1X, box1X + textWidth(helloMsg) + 100,
      box1Y, box1Y + 70)) {
    pageNum = pageNum + 1; //    //Updates the page number to advance ahead
  }

  // Sets the coordinates 0 again for next use
  MouseClickedAtX = 0;
  mouseClickedAtY = 0;

}


// Draw page 2
function drawPage2() {

  // Writes title as Greet one by one!
  textSize(titleTextSize);
  fill(textColor);
  textFont('Georgia');
  text(memberMsg, titleX, titleY);

  // Draw 4 boxes
  fill(backgroundColor);
  stroke(buttonColor);
  strokeWeight(2);
  rect(box1X - 180, box1Y - 40, 150, 75, 30); //Draw box for Matilda with rounded edge
  rect(box1X, box1Y - 40, 90, 75); //Draw rectangle box for Bro
  rect(box1X + 120, box1Y - 40, 190, 75, 30); //Draw box for Mom-Dad with rounded edge
  rect(box1X + 340, box1Y - 40, 190, 75); //Draw rectangle box for everyone

  //Write
  textSize(buttonTextSize1);
  strokeWeight(1);
  textFont('Georgia');
  fill(textColor);
  text("Matilda", box1X - 160, box1Y);
  text("Bro", box1X + 10, box1Y);
  text("Mom-Dad", box1X + 130, box1Y);
  text("Everyone", box1X + 350, box1Y);

  //If User clicks within coordinates of box for Matilda, Draw Matilda
  if (isWithin(MouseClickedAtX, MouseClickedAtY,
    box1X - 180, box1X - 180 + 150,
    box1Y - 40, box1Y - 40 + 75)) 
  {
    drawMatilda();
    
    textSize(30);
    textFont('Trebuchet MS');
    stroke(2);
    fill('pink');
    text('Hola Matilda!', 80, 150);
  }
  
  //If User clicks within coordinates of box for Bro, Draw Bro
  else if (isWithin(MouseClickedAtX, MouseClickedAtY,
    box1X, box1X + 90,
    box1Y - 40, box1Y - 40 + 75)) 
  {
    drawBro();
   
    textSize(30);
    textFont('Trebuchet MS');
    fill('pink');
    text('Hola Bro!', 150, 150);
  } 
  
  //If User clicks within coordinates of box for Mom-Dad, Draw Mom-Dad
  else if (isWithin(MouseClickedAtX, MouseClickedAtY,
    box1X + 120, box1X + 120 + 190,
  	box1Y - 40, box1Y - 40 + 75)) 
  {
    drawMomDad();
   
    textSize(30);
    textFont('Trebuchet MS');
    fill('pink');
    text('Hola Mom-Dad!', 250, 150);
  } 
  
  //If User clicks within coordinates of box for everyone, Draw everyone
  else if (isWithin(MouseClickedAtX, MouseClickedAtY,
    box1X + 340, box1X + 340 + 190,
    box1Y - 40, box1Y - 40 + 75)) 
  {
    drawEveryone();
    
    textSize(40);
    textFont('Trebuchet MS');
    fill('pink');
    text('Hola Everyone!', 520, 250);
  }


}


/*Re-used function 'isWithin' shared by Andy for determining if clicked within box
and returns true or false to indicate whether a point is within a given rectangle,
the point to test is (pointX, pointY), the rectangle is defined by 
the upper left corner (rectX1, rectY1) and the lower right corner (rectX2, rectY2) */

function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
  // if all 4 of these conditions are true, then it was inside,
  // otherwise it was outside
  if ((pointX > rectX1) && // to the right of the left edge
    (pointX < rectX2) && // to the left of the right edge
    (pointY > rectY1) && // below the top edge
    (pointY < rectY2)) { // above the bottom edge
    return true;
  } else {
    return false;
  }

}

/*Re-used function 'keyPressed' shared by Andy for determining if key was pressed 
-this function harnesses the built-in detector for any key press on the keyboard 
to simply step through the sucessive pages of the story keyPressed() is a 
predefined p5.js function -- we just fill in what happens when it is invoked
by the system. */

function keyPressed() {
  //Updated pageNum <=0 from pageNum<=1, since I only wanted user to use keyboard once
  if (pageNum <= 0) {
    pageNum = pageNum + 1;
  }
}


// Re-used from Andy's code
//this function harnesses the built-in detector for any mouse click
// and simply saves the location of the mouse when it was clicked
// mouseClicked() is a predefined p5.js function -- we just fill in what
// happens when it is invoked by the system.
function mouseClicked() {
  MouseClickedAtX = mouseX;
  MouseClickedAtY = mouseY;
}

function drawMatilda() {
  stroke('black');
  fill('#625950'); // Matilda's hair are colored  
  rect(matX, matY, 35, 10); // Draws Matilda's hair 
  fill('#f2c1ae'); // Matilda's face is colored 
  rect(matX, matY + 10, 35, 20); // Draws Matilda's face
  fill('#777FBF'); //Matilda's T-shirt is colored
  rect(matX, matY + 30, 35, 30); //Draws Matilda's T-shirt
  fill('#3B6595'); //  Matilda's shorts are colored
  rect(matX, matY + 50, 35, 20); // Draws Matilda's shorts 
  fill('#f2c1ae'); //  Matilda's legs are colored
  rect(matX, matY + 70, 35, 10); // Draws Matilda's legs

  matX = matX + 2; //Moves Matlida along x-axis
  matX = min(matX + 1, 100) // Stop condition for moving along x-axis
  matY = matY + 1; //Moves Matlida along y-axis
  matY = min(matY + 1, 240); //Stop condition for moving along y-axis


}

function drawBro() {
  stroke('black');
  fill('#AE8C7A'); // Brother's cap is colored  
  rect(broX, broY, 45, 10); // Draws Brother's hair 
  fill('#f2c1ae'); //  Brother's face is colored
  rect(broX, broY + 10, 45, 20); // Draws Brother's face
  fill('#40283B'); //Brother's t-shirt is colored
  rect(broX, broY + 30, 45, 30); //Draws Brother's t-shirt
  fill('#202928'); // Brother's shorts are colored
  rect(broX, broY + 50, 45, 40); // Draws Brother's shorts
  fill('#f2c1ae'); //  //Brother's legs are colored
  rect(broX, broY + 80, 45, 20); // Draw Brother's legs

  broX = broX + 1; //Moves Brother along x-axis
  broX = min(broX + 1, 200); //Stop condition for moving along x-axis
  broY = broY - 1; //Moves Brother along y-axis
  broY = max(broY - 1, 220); //Stop condition for moving along y-axis


}

function drawMomDad() {
  stroke('black');
  //DAD
  fill('#625950'); // Dad's hat is colored   
  rect(dadX, dadY, 60, 10); // Draws Dad's hair  
  fill('#f2c1ae'); // Dad's face is colored  
  rect(dadX, dadY + 10, 60, 30); // Draws Dad's face
  fill('#B58952'); //Dad's shirt is colored
  rect(dadX, dadY + 40, 60, 30); //Draws Dad's shirt
  fill('#6D1616'); //Dad's tie is colored
  rect(dadX + 20, dadY + 40, 20, 30); //Draws Dad's tie
  fill('#6A665A'); // Dad's coat is colored
  rect(dadX, dadY + 60, 60, 40); // Draws Dad's coat
  fill('black'); // Dad's pants are colored
  rect(dadX, dadY + 80, 60, 30); // Draws Dad's pants

  dadX = dadX - 1; //Moves Dad along x-axis
  dadX = max(dadX - 1, 300); //Stop condition for moving along x-axis
  dadY = dadY + 1; //Moves Dad along y-axis
  dadY = min(dadY + 1, 210); //Stop condition for moving along y-axis

  //MOM
  fill('#FBCC91'); // Mom's hair are colored 
  rect(momX, momY, 40, 10); // Draws Mom's hair 
  fill('#f2c1ae'); // Mom's face is colored
  rect(momX, momY + 10, 40, 20); //Draws Mom's face
  fill('#9E0000'); //Mom's Top is colored
  rect(momX, momY + 30, 40, 30); //Draws Mom's Top
  fill('#7C4073'); // Mom's skirt is colored 
  rect(momX, momY + 50, 40, 40); //Draws Mom's skirt 
  fill('#f2c1ae'); //  Mom's legs are colored
  rect(momX, momY + 80, 40, 40); // Draws Mom's legs

  momX = momX - 1; //Moves Mom along x-axis
  momX = max(momX - 1, 410); //Stop condition for moving along x-axis
  momY = momY - 1; //Moves Mom along y-axis
  momY = max(momY - 1, 200); //Stop condition for moving along y-axis


}


function drawEveryone() {
  drawMatilda();
  drawBro();
  drawMomDad();

}