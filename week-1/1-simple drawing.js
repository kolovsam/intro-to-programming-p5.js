/* HCDE 598A - AUT17

simple drawing.js

demo of basic p5.js functions:
	canvas, background, colors
    lines & ellipses
    stroke color & weight
    fill
    comments and indentation
*/

function setup() {

    // create the empty canvas
    createCanvas(1000, 800);
    background('purple');

    // draw a few lines
    stroke('white'); // change the color of the line
    strokeWeight(10);
    line(0, 0, 1000, 800);
    line(500, 400, 1000, 0);
    line(500, 400, 0, 800);

    // add a circle
    stroke('yellow');
    fill('orange');
    ellipse(500, 100, 200);
}

function draw() {
    // not used for now
}