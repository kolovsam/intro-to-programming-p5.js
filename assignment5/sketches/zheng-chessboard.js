// Board Size

const boxNum = 8;
var row;
var col;

// Colors

var backColor = 'white';
var color1;
var color2; 

function setup() {
    createCanvas(600,600);
    color1 = color(random(200),random(180), random(160));
    color2 = color(random(255),random(255), random(255), random(10,50));

}

function draw() {
    background(backColor);
    chessBoard(100,100,50); 
}

// Draw Chess Board

function chessBoard(x,y,size) {
    
    for (row=0; row < boxNum; row++) { 
        for (col=0; col < boxNum; col++) { 
            if ((row+col+1) % 2 == 0) {
                fill(color1);
            } else {
                fill(color2);
            }
            rect(x+size*col,y+size*row,size,size);
            noStroke(); 
        }
    }
}