var bColor;
var lineColor;
var Sweight = 5;

function setup() {
    createCanvas(1000, 1000);
    bColor = color(random(255),random(255),random(255));
    background(bColor);

}

function draw() {
    lineColor = color(random(255),random(255),random(255));
}

function drawFace(x,y,r) {
    stroke(lineColor);
    strokeWeight(Sweight);
    rectMode(CENTER);
    rect(x,y-r/1.5,r/1.5,r/1.5);
    ellipse(x,y,r);
    ellipse(x-r/4, y-r/8, r/8);
    ellipse(x+r/4, y-r/8, r/8);
    ellipse(x, y+r/4, r/4);
    rect(x,y-r/2.5,r*1.2,r/4);
}

function drawRectface(x,y,r) {
    rectMode(CENTER);
    stroke(random(255),random(255),random(255));
    strokeWeight(Sweight);
    ellipse(x-r/4,y-r/8,r/8);
    ellipse(x+r/4,y-r/8,r/8);
    line(x-r/4,y+r/8,x+r/4,y+r/16);
    
}

function mousePressed() {
    var size = random(0, width/4);
    drawFace(mouseX, mouseY, size);
}

function keyPressed() {
    size = random(0,width/2);
    drawRectface(mouseX,mouseY,size);
}