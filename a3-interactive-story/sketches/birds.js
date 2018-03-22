
//content colors
var bgColor = '#68c2ff';
var gameTitleTextColor = '#a54e1f';
var textColor = 'white';
var buttonColor = 'white';

//bird colors 
var bird1Color = 'green';
var bird2Color = 'yellow';
var bird3Color = 'red';

var bird1StomachColor = '#cbfc8a';
var bird2StomachColor = '#fff284';
var bird3StomachColor = '#ffbbad';

//text strings
var welcomeMsg = "Welcome to NestFinder!";
var howToPlay = "How to play:";
var howToPlayInstructions = "Use the arrows on your keyboard to help your birdie \nnavigate back to its nest.";
var enterButtonText = "Enter";
var chooseBirdieText = "Choose your birdie!";
var letsPlayButtonText = "Let's Play!";

//font sizes for the text 
var gameTitleTextSize = 48;
var howToPlayTextSize = 30;
var howToPlayInstructionsTextSize = 20;
var enterButtonTextSize = 24;
var chooseBirdieTextSize = 48;
var letsPlayTextSize = 24;

//coordinates for where the game title will be drawn
var gameTitleX = 175;
var gameTitleY = 200;

//coordinates for birds
var bird1X = 250;
var bird1Y = 250;

var bird2X = 350;
var bird2Y = 250;

var bird3X = 450;
var bird3Y = 250;

//coordinates for where the choose birdie text should be drawn
var chooseBirdieTextX = 180;
var chooseBirdieTextY = 100;

//coordinates for where the 'how to play' title will be drawn
var howToPlayX = 100;
var howToPlayY = 200;

//coordinates for where the 'how to play' instructions will be drawn
var howToPlayInstructionsX = 100;
var howToPlayInstructionsY = 250;

//coordinates for where the enter button will be drawn
var enterX;
var enterY;

//coordinates for where the first box will be drawn 
var box1X;
var box1Y;


// tracks page number
var pageNum = 1;

// this tracks answer to birdie question answer
var birdieChosen = 0;

// when the mouse is clicked, the function named mouseClicked() updates these variables 
var MouseClickedAtX;
var MouseClickedAtY;

//all the things done only once
function setup() {
    createCanvas(800, 500);

    enterX = width / 2;
    enterY = height - 100;
    box1X = enterX;
    box1Y = enterY;

}


function draw() {
    background(bgColor);

    textSize(18);
    strokeWeight(1);
    fill(textColor);
    text(pageNum, 50, 50);

    //draw this based on page number

    if (pageNum == 1) {
        drawPage1();

    } else if (pageNum == 2) {
        drawPage2();

    } else if (pageNum == 3) {
        drawPage3();

    } else {

        //add another function here if more pages are added 
    }

}

//draw page 1
function drawPage1() {

    //write welcome message
    noStroke();
    textSize(gameTitleTextSize);
    fill(gameTitleTextColor);
    text(welcomeMsg, gameTitleX, gameTitleY);



    //write 'how to play' instructions
    textSize(howToPlayInstructionsTextSize);


    //draw Enter button, with rounded corners (radius = 20)
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(5);
    rect(box1X - 30, box1Y - 50, textWidth(enterButtonText) + 65, 80, 20);

    //write the 'enter' text inside of the box
    textSize(enterButtonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text(enterButtonText, box1X, box1Y)

    //if the mouse clicks the enter button

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X, box1X + textWidth(enterButtonText) + 65,
            box1Y - 50, box1Y - 50 + 80)) {

        //goes to the next page
        pageNum = pageNum + 1;
    }
    // reset 
    MouseClickedAtX = 0;
    MouseClickedAtY = 0;

}

//draw page 2
function drawPage2() {

    //write 'how to' title
    textSize(howToPlayTextSize);
    fill(textColor);
    text(howToPlay, howToPlayX, howToPlayY);

    //write 'how to play' instructions
    textSize(howToPlayInstructionsTextSize);
    fill(textColor);
    text(howToPlayInstructions, howToPlayInstructionsX, howToPlayInstructionsY);

    //draw Enter button, with rounded corners (radius = 20)
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(5);
    rect(box1X - 25, box1Y - 50, textWidth(letsPlayButtonText) + 65, 80, 20);

    //write the 'enter' text inside of the box
    textSize(letsPlayTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text(letsPlayButtonText, box1X, box1Y)

    //if the mouse clicks the enter button

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X, box1X + textWidth(letsPlayTextSize) + 65,
            box1Y - 50, box1Y - 50 + 80)) {

        //goes to the next page
        pageNum = pageNum + 1;
    }

}


//draw page 3
function drawPage3() {
    bird1();
    bird2();
    bird3();


    //write choose birdie message
    textSize(chooseBirdieTextSize);
    fill(textColor);
    text(chooseBirdieText, chooseBirdieTextX, chooseBirdieTextY);


}

function bird1() {
    //head
    noStroke();
    fill(bird1Color);
    ellipse(bird1X + 30, bird1Y, 65, 65);
    fill(bird1StomachColor);
    ellipse(bird1X + 30, bird1Y + 10, 40, 40);


    //eyes
    fill('white');
    ellipse(bird1X + 20, bird1Y - 10, 20, 20);
    ellipse(bird1X + 40, bird1Y - 10, 20, 20);
    fill('black');
    ellipse(bird1X + 20, bird1Y - 10, 15, 15);
    ellipse(bird1X + 40, bird1Y - 10, 15, 15);

    //beak 
    fill('orange');
    triangle(bird1X + 25, bird1Y, bird1X + 35, bird1Y, bird1X + 30, bird1Y + 10);

}

function bird2() {
    //head
    fill(bird2Color);
    ellipse(bird2X + 30, bird2Y, 65, 65);
    fill(bird2StomachColor);
    ellipse(bird2X + 30, bird2Y + 10, 40, 40);


    //eyes
    fill('white');
    ellipse(bird2X + 20, bird2Y - 10, 20, 20);
    ellipse(bird2X + 40, bird2Y - 10, 20, 20);
    fill('black');
    ellipse(bird2X + 20, bird2Y - 10, 15, 15);
    ellipse(bird2X + 40, bird2Y - 10, 15, 15);

    //beak 
    fill('orange');
    triangle(bird2X + 25, bird2Y, bird2X + 35, bird2Y, bird2X + 30, bird2Y + 10);

}


function bird3() {

    //head
    fill(bird3Color);
    ellipse(bird3X + 30, bird3Y, 65, 65);
    fill(bird3StomachColor);
    ellipse(bird3X + 30, bird3Y + 10, 40, 40);


    //eyes
    fill('white');
    ellipse(bird3X + 20, bird3Y - 10, 20, 20);
    ellipse(bird3X + 40, bird3Y - 10, 20, 20);
    fill('black');
    ellipse(bird3X + 20, bird3Y - 10, 15, 15);
    ellipse(bird3X + 40, bird3Y - 10, 15, 15);

    //beak 
    fill('orange');
    triangle(bird3X + 25, bird3Y, bird3X + 35, bird3Y, bird3X + 30, bird3Y + 10);

    if (mouseIsPressed) {
        // Check if mouse is inside the circle
        var d = dist(mouseX, mouseY, 250, 250);
        if (d < 32.5) {
            bird1X = 50;
            bird1Y = 400;

            bird2X = 350;
            bird2Y = 250;

            bird3X = 450;
            bird3Y = 250;
        } else {
            d = dist(mouseX, mouseY, 350, 250);

            if (d < 32.5) {
                bird1X = 250;
                bird1Y = 250;

                bird2X = 50;
                bird2Y = 400;

                bird3X = 450;
                bird3Y = 250;
            } else {
                d = dist(mouseX, mouseY, 450, 250);

                if (d < 32.5) {
                    bird1X = 250;
                    bird1Y = 250;

                    bird2X = 350;
                    bird2Y = 250;

                    bird3X = 50;
                    bird3Y = 400;

                }
            }
        }

    }


}

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



function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;

}