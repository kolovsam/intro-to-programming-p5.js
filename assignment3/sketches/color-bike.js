function setup() {
    createCanvas(600, 400);
    strokeWeight(2.5);
}

var wheelSize = 110;

var MouseClickedAtX;
var MouseClickedAtY;

var boxLength = 40;

var pageNum = 0;

var YesButton = "Yes";
var NoButton = "No";

function draw() {
    if (pageNum == 0) {
        page0();
    } else if (pageNum == 1) { //show bike
        page1();
    } else if (pageNum == 2) { //show super man bike
        page2();
    } else { //show "Restart" option
        page3();
    }

}

function drawBike(originalColor, seatColor, wheelColor) {
    background(220);
    //create two wheels
    fill(originalColor); //larger circle
    ellipse(170, 300, wheelSize);
    ellipse(420, 300, wheelSize);
    fill(wheelColor); //smaller circle
    ellipse(170, 300, 100);
    ellipse(420, 300, 100);
    fill(originalColor); //center point of wheels
    ellipse(170, 300, 10);
    ellipse(420, 300, 10);

    //create the pedal
    fill("yellow");
    stroke("white");
    ellipse(250, 300, 40);


    line(200, 200, 250, 300);
    line(170, 300, 250, 300);
    line(170, 300, 230, 260);
    line(250, 300, 350, 200);
    line(350, 200, 420, 300);
    line(215, 230, 320, 230);

    //create a seat
    fill(seatColor);
    rectMode(CENTER);
    rect(210, 200, 80, 20);

    //create the "head" of the bycicle
    triangle(350, 200, 382, 170, 320, 170);
}

function page0() {
    background(220);
    textSize(24);
    fill('yellow')
    textAlign(CENTER);
    text("Press any key to ride bike with SuperMan!", width / 2, 200);
}

function page1() {

    drawBike("yellow", "black", "black");
    textSize(16);
    fill('black')
    noStroke();

    text("Does superman want to ride bike?", width / 2 - 100, 100);

    //draw yes/no boxes
    strokeWeight(5);
    fill('yellow');
    stroke('black');
    strokeWeight(2);
    //draw circle for 
    rectMode(CENTER);
    rect(400, 80, boxLength, boxLength, 10);
    rect(500, 80, boxLength, boxLength, 10);

    fill("black");
    textSize(12);
    noStroke();
    // textAlign(CENTER);
    text(YesButton, 400, 80);
    text(NoButton, 500, 80);


    if (isWithin(MouseClickedAtX, MouseClickedAtY, 375, 425,
            55, 105)) {
        pageNum = 2;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 475, 525,
            55, 105)) {
        pageNum = 3;
    }
}

function page2() { //change to red color
    background(220);
    drawBike("black", "yellow", "red");
    textSize(16);
    fill("red")
    noStroke();
    textAlign(CENTER);
    text("Here comes SuperMan!", width / 2, 100);

    stroke("black");
    rectMode(CENTER);
    rect(500, 100, 50, 40, 10);
    fill("black");
    noStroke();
    textAlign(CENTER);
    text("No!", 500, 100);
    if (isWithin(MouseClickedAtX, MouseClickedAtY, 425, 525, 75, 125)) {
        pageNum = 0;
    }
}

function page3() {
    background(220);
    textSize(22);
    textAlign(CENTER);
    fill("yellow")
    text("Be a super man next time!", width / 2, 100);

    //create button for replay
    rectMode(CENTER);
    stroke("black");

    rect(300, 200, 100, 40, 10);
    fill("black");
    noStroke();
    textAlign(CENTER);
    text("Replay", 300, 200);

    if (isWithin(MouseClickedAtX, MouseClickedAtY, 250, 350, 180, 220))
        pageNum = 0;
}


function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
    if (
        pointX > rectX1 && pointX < rectX2 && pointY > rectY1 &&
        pointY < rectY2) {
        return true;
    } else {
        return false;
    }
}


function keyPressed() {
    if (pageNum == 0) {
        pageNum = 1;
    }
}

function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
}