var Width = 800;
var Height = 600;
var Xcoord = 400;
var Xcoord2 = 400;
var Xcoord3 = 400;
var Ycoord = 300;


function setup() {
  createCanvas(Width, Height);
  background(129, 199, 212);
}

var pageNumber = 1;
var continueMsg = "Click Start to continue!";
var buttonColor = 'lightblue'
var hasStarted = false;

function draw() {

  background(129, 199, 212);

  //page number
  textSize(18);
  strokeWeight(1);
  fill('white');
  text(pageNumber, 30, 40);


  //pink
  strokeWeight(0);
  fill(250, 214, 137);
  ellipse(Xcoord, Ycoord, 50);

  //yellow
  strokeWeight(0);
  fill(255, 183, 174);
  ellipse(Xcoord2, Ycoord, 50);

  //blue
  strokeWeight(0);
  fill(58, 143, 183);
  ellipse(Xcoord3, Ycoord, 50);

  
  if (hasStarted && pageNumber < 3) {
  	textSize(18);
    strokeWeight(1);
    fill('white');
    text('Press enter...', 100, 40);
  }
    

  if (pageNumber === 1) {
    draw1()
  }
  if (pageNumber === 2) {
    draw2()
  }
  if (pageNumber === 3) {
    draw3()
  }
  
}

function mouseClicked() {


  if (hasStarted === false) {
    hasStarted = true;
  }

}

function keyPressed() {
  if (hasStarted && keyCode === ENTER && pageNumber < 3) {
    pageNumber = pageNumber + 1;
  }
}

function draw1() {

  if (hasStarted === false) {
    //start button
    strokeWeight(0);
    fill(buttonColor);
    rect(350, 275, 100, 50, 10);

    textSize(20);
    strokeWeight(1);
    fill('white');
    text('S T A R T', 355, 305);

    textSize(15);
    strokeWeight(1);
    fill('white');
    text(continueMsg, 318, 370);
  }
}



function draw2() {

  Xcoord3 = Xcoord3 + 1;
  if (Xcoord3 >= 600) {
    Xcoord3 = 600
  }
  Xcoord = Xcoord - 1;
  if (Xcoord <= 200) {
    Xcoord = 200
  }
}

function draw3() {
  Xcoord3 = Xcoord3 - 1;
  if (Xcoord3 <= 200) {
    Xcoord3 = 200
  }
  Xcoord = Xcoord + 1;
  if (Xcoord >= 600) {
    Xcoord = 600
  }
}