var lineColor = ('green');

var x = 500;
var y = 500;

function setup() {
	createCanvas(800, 800);
	background(180, 212, 255);
}


function draw() {
	dragonFly(x, y, random);
}

function dragonFly(x, y, size) {

	stroke(lineColor);
	strokeWeight(2);
	//wings
	//big
	line(x, y, x + size, y);
	line(x, y, x - size, y);
	line(x, y, x, y + size);
	//small
	line(x, y, x + size * 0.7, y + size * 0.14);
	line(x, y, x + size * 0.7, y - size * 0.14);
	line(x, y, x - size * 0.7, y + size * 0.14);
	line(x, y, x - size * 0.7, y - size * 0.14);
	//body
	fill(lineColor);
	ellipse(x, y, size * 0.25);
	//head
	stroke('blue');
	ellipse(x, y * .95, size * 0.1);
	/*don't know how to get dragonfly head to 
	stay attached to body in the same place
	*/

}

function mousePressed() {
	var size = random(0, width /5);
	dragonFly(mouseX, mouseY, size);
}