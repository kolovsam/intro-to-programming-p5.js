/* Anthony Ugas - Final Project 
   Catch Falling Mickeys Game
   12/2017
*/

//some colors that are used
var bgColor = 'red';
var textColor = 'white';
var strokeColor = 'black';


//timer variables 
var begin;
var duration = 30;
var time = 30;

// slider variables 
var offset = 0.5;
var barX = offset;
var barY;
var barW;
var barH = 100;
var sliderX = offset;
var sliderY;
var sliderW = 80;
var sliderH = 100;

// mickey array and variables 
var mickey = [];
var numMickey = 10;
var ySpeed = 2;
var countOfMickey = 0;

var gameOver = false;

function setup() {
    //draws canvas
    createCanvas(625, 450);

    //for timer
    begin = millis();

    for (i = 0; i < numMickey; i++) {
        var newMickey = new Mickey();
        mickey.push(newMickey);

        //ends game in milliseconds  
        setTimeout(over, 29900);

    }
}


function draw() {

    //game background and title
    background(bgColor);
    strokeWeight(3);
    fill(textColor);
    textAlign(CENTER);
    textSize(25);

    text("How many Mickeys can you catch?", width / 3, 40);

    updateAndDisplayMickey();

    // slider
    noStroke();
    barY = height - 30;
    barW = width - 2 * offset;
    fill(255, 204, 0, 0);
    rect(barX, barY, barW, barH);


    //timer
    if (time > 0) {
        time = round(duration - (millis() - begin) / 1000);

        fill(textColor);
        textSize(45);
        text(time, 575, 45);
        //width / 2, height - 20);
    }
}

//updates falling mickeys
function updateAndDisplayMickey() {
    for (var i = 0; i < numMickey; i++) {
        mickey[i].draw();
        mickey[i].move();

        var d = dist(mickey[i].x, mickey[i].y,
            sliderX + sliderW / 2, sliderY);

        //score keeper
        if (d > 0 & d < 5) {
            countOfMickey = countOfMickey + 1;
        }
    }
}

function over() {
    clear();
    gameOver = true;

}


function Mickey(mickeySize) {

    mickeySize = 20;

    this.x = random(0, width);
    this.y = random(0, height);


    this.draw = function() {

        //draws 'game over' screen
        if (gameOver == true) {
            clear();
            background(bgColor);
            fill(textColor);
            textSize(60);
            textAlign(CENTER);
            text("Great Job!", width / 2, height / 2);
            textSize(30);
            textAlign(CENTER);
            text("score: " + countOfMickey, width / 2, 280);


        }

        if (gameOver == false) {

            if (this.y <= height + 2) {

                //ears
                stroke('black');
                strokeWeight(4);
                fill('black');
                ellipse(this.x - (mickeySize * 0.8), this.y - (mickeySize * 0.45), mickeySize * 0.9, mickeySize * 0.9);
                ellipse(this.x + (mickeySize * 0.8), this.y - (mickeySize * 0.45), mickeySize * 0.9, mickeySize * 0.9);


                //head
                stroke('black')
                strokeWeight(4);
                fill('black');
                ellipse(this.x + (mickeySize * 0.005), this.y + (mickeySize * 0.45), mickeySize * 1.5, mickeySize * 1.5);

                //face
                //eye area
                noStroke();
                strokeWeight(2);
                fill('#ffde9e');
                ellipse(this.x - (mickeySize * 0.3), this.y + (mickeySize * 0.3), mickeySize * 0.7, mickeySize * 0.75);
                ellipse(this.x + (mickeySize * 0.3), this.y + (mickeySize * 0.3), mickeySize * 0.7, mickeySize * 0.75);

                //cheek area
                noStroke();
                strokeWeight(2);
                fill('#ffde9e');
                ellipse(this.x - (mickeySize * 0.25), this.y + (mickeySize * 0.8), mickeySize * 0.8, mickeySize * 0.8);
                ellipse(this.x + (mickeySize * 0.25), this.y + (mickeySize * 0.8), mickeySize * 0.8, mickeySize * 0.8);

                //chin
                noStroke();
                strokeWeight(2);
                fill('#ffde9e');
                ellipse(this.x - (mickeySize * 0.0), this.y + (mickeySize * 1), mickeySize * 0.8, mickeySize * 0.8);

                //eyes
                stroke('black');
                strokeWeight(1);
                fill('white');
                ellipse(this.x - (mickeySize * 0.2), this.y + (mickeySize * 0.5), mickeySize * 0.3, mickeySize * 0.5);
                ellipse(this.x + (mickeySize * 0.2), this.y + (mickeySize * 0.5), mickeySize * 0.3, mickeySize * 0.5);

                //pupils 
                noStroke();
                fill('black');
                ellipse(this.x - (mickeySize * 0.15), this.y + (mickeySize * 0.6), mickeySize * 0.15, mickeySize * 0.25);
                ellipse(this.x + (mickeySize * 0.15), this.y + (mickeySize * 0.6), mickeySize * 0.15, mickeySize * 0.25);

                //mouth
                stroke('black');
                strokeWeight(1);
                fill('#bc2323');
                ellipse(this.x - (mickeySize * 0.0), this.y + (mickeySize * 1), mickeySize * 0.45, mickeySize * 0.65);

                //tongue
                stroke('black');
                strokeWeight(1);
                fill('#ff7f68');
                ellipse(this.x + (mickeySize * 0.0), this.y + (mickeySize * 1.27), mickeySize * 0.20, mickeySize * 0.10);

                //nose area
                noStroke();
                fill('#ffde9e');
                ellipse(this.x + (mickeySize * 0.0), this.y + (mickeySize * 0.9), mickeySize * 0.50);

                //nose
                noStroke();
                fill('black');
                ellipse(this.x + (mickeySize * 0.0), this.y + (mickeySize * 0.85), mickeySize * 0.45, mickeySize * 0.25);

                // bucket/slider
                noStroke();
                sliderY = barY;
                fill('white');
                rect(sliderX, sliderY, sliderW, sliderH);


                //displays score
                fill(textColor);
                stroke(strokeColor);
                textAlign(CENTER);
                strokeWeight(2);

                text("Score: " + countOfMickey, width / 2, height - 20);

            } else {

                this.y = -2;
            }
        }

        this.move = function() {
            this.y = this.y + ySpeed;
        }
    }
}
//allows player to move slider with mouse
function mouseDragged() {
    var sliderMax = width - offset - sliderW;
    if (mouseY >= barY & mouseY <= barY + barH) {
        sliderX = max(min(mouseX, sliderMax), barX);
    }

}