/*
Hi
Please find below the code for my Final Project for the course HCDE 598.
I decided to build a clock that runs in real-time on the canvas.
Also, find a fun task on line 57. 
Kartika Rathee
*/

//Gear for seconds
var gearSec;

//Scribble effect for hand drawn clock
//Linked the scribble library in index.html
var scribble = new Scribble();

var backgroundColor = "#CCCCCC";
var baseColor = "#9BD7D5";

function setup() {
  createCanvas(800, 450);
  //Set angle mode to degrees for the calculations to draw the arc in real-time
  angleMode(DEGREES);
}

function draw() {
  //Calling the clock function here to update in real-time
  drawClock();
}

//Core function to draw the clock
function drawClock() {

  background(backgroundColor);

  //Set date & time functions in p5.js to fetch system's date & time
  var hours = hour();
  var minutes = minute();
  var seconds = second();
  var days = day();
  var months = month();
  var years = year();

  //Re-arrange the canvas to have the clock centered at point 0,0
  translate(200, 200);
  rotate(-90);

  //DRAW THE OUTER CIRCLE
  stroke("black");
  strokeWeight(2);
  fill(baseColor); //Pastel green

  //Gives the ellipse a scribble/hand-drawn effect
  scribble.scribbleEllipse(0, 0, 380, 380);

  //RandomSeed() pauses the drawing effect of the scribble
  //Fun Fact, comment out the below line and see the clock go crazy!
	randomSeed(2.5);


  //DRAW THE SECONDS 
  stroke("#505050"); //Grey
  strokeWeight(4);
  fill(255, 195, 206); //Pastel pink

  //Maps the arc with seconds to draw in real-time
  //"Seconds" to be mapped from current to target range 
  //"Current Range" of seconds from 0 - 60
  //"Target Range" starting at angle 0 to 360 to form complete arc)
  var secondAngle = map(seconds, 0, 60, 0, 360);

  //Draws the arc at coordinates x = 0, y = 0
  //Goes up to coordinates width = 280, height = 280
  //Angle to "start arc" = 0, angle to "stop arc" = current position of secondAngle
  //Fills with each passing second from 0 to position of secondAngle
  arc(0, 0, 280, 280, 0, secondAngle);
  noFill();

  //Draw the moving seconds gear
  stroke("black");
  strokeWeight(1);
  fill(255, 247, 230); //pastel yellow

  //Gear(x, y, numVertex, pinOut, pinIn , rotates gear in real time with seconds function);
  gearSec = new gear(0, 0, 80, 100, 116, seconds * 360);
  gearSec.update();
  noFill();

  //DRAW THE MINUTES
  stroke("#505050"); //grey
  strokeWeight(4);
  fill("#ffdfba");

  //Maps the arc with minutes to draw in real-time
  //"Minutes" to be mapped from current to target range 
  //"Current Range" of minutes from 0 - 60
  //"Target Range" starting at angle 0 to 360 to form complete arc)
  var minuteAngle = map(minutes, 0, 60, 0, 360);


  //Draws the arc at coordinates x = 0, y = 0
  //Goes up to coordinates width = 200, height = 200
  //Angle to "start arc" = 0, angle to "stop arc" = current position of minuteAngle
  //Fills with each passing minute from 0 to position of minuteAngle
  arc(0, 0, 200, 200, 0, minuteAngle);
  noFill();

  //DRAW THE HOURS
  stroke("black");
  strokeWeight(2);
  fill(0, 51, 102, 200); //Dark blue

  //Maps the arc with hours to draw in real-time
  //"Hours" to be mapped from current to target range 
  //"Current Range" of hours from 0 - 12
  //hours % 12 to calculate the second iteration since there are 24 hours
  //"Target Range" starting at angle 0 to 360 to form complete arc)
  var hourAngle = map(hours % 12, 0, 12, 0, 360);


  //Draws the arc at coordinates x = 0, y = 0
  //Goes up to coordinates width = 100, height = 100
  //Angle to "start arc" = 0, angle to "stop arc" = current position of hourAngle
  //Fills with each passing hour from 0 to position of hourAngle
  arc(0, 0, 100, 100, 0, hourAngle);
  noFill();

  drawHands(minuteAngle, hourAngle);
  writeClock(seconds, minutes, hours, days, months, years);
}

//Takes parameter minAngle, hrAngle to draw the clock's hands
function drawHands(minAngle, hrAngle) {
  strokeWeight(5);
  stroke("#95a5a6");
  //push() & pop() to preserve the settings
  push();
  rotate(minAngle);
  scribble.scribbleLine(0, 0, 98, 0);
  pop();

  push();
  rotate(hrAngle);
  scribble.scribbleLine(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

}

//Takes parameter sec,mins,hr,d,m,y to display the current date and time
function writeClock(sec, mins, hr, d, m, y) {
  rotate(90);

  stroke("black");
  strokeWeight(1);
  fill("#003366");
  textSize(14);
//Labels on the clock from 1-12
  text("12", 0, -160);
  text("11", -90, -130);
  text("10", -150, -65);
  text("9", -165, 0);
  text("8", -150, 80);
  text("7", -90, 150);
  text("6", 0, 175);
  text("5", 80, 160);
  text("4", 130, 100);
  text("3", 160, 0);
  text("2", 140, -80);
  text("1", 100, -130);
//Text display of current time
  textSize(50);
  text("Time -", 195, -50);
  
  fill("#336699");
  text(hr, 340, -50);
  text(":", 400, -50);
  text(mins, 425, -50);
  text(":", 485, -50);
  text(sec, 510, -50);
//Text display of current date

  fill("#003366");
  text("Date - ", 195, 100);
  fill("#336699");
  text(d, 340, 100);
  text("/", 385, 100);
  text(m, 400, 100);
  text("/", 465, 100);
  text(y, 480, 100);

}

//DRAWS THE ROTATING GEAR
//x,y: starting co-ordinates of the gear
//vertexNum: number of vertices in the gear
//pinOut,pinIn: pins pointing outwards and inwards on the gear, adjusts size and shape
//moveGear: rotates gear with respect to seconds
function gear(x, y, vertexNum, pinOut, pinIn, moveGear) {
  var rot; 
  //Creates vector at position x,y
  this.pos = createVector(x, y); 
  this.vertexNum = vertexNum; //
  this.pinIn = pinIn;
  this.pinOut = pinOut;
  this.moveGear = moveGear;

  this.update = function() {
    push();
    translate(this.pos.x, this.pos.y);
    //Move the gear with the defined parameters for the start and end angles
    rotate(radians(moveGear));
    //Begin drawing the shape for the specified vertexNum and pinOut/pinIn
    beginShape(); 

    for (var i = 0; i < this.vertexNum; i++) {
      if (i % 4 == 2 || i % 4 == 3) {
      	//If above conditions true, draw the pin outward
        rot = this.pinOut;
      } else {
      	//Else draw the pin inwards
        rot = this.pinIn;
      }
      //Drawing the final gear shape vertices
      vertex(rot * cos(360 * i / this.vertexNum), rot * sin(360 * i / this.vertexNum));
    }
    endShape(CLOSE);
      //push() & pop() to preserve the settings
    pop();
  }
}