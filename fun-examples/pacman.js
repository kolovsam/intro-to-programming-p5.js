/*
	Pacman by Sam Kolovson.

	Had fun trying out some of the functions
	and colors before the first class.
*/

function setup() {
	//draw 400 by 400 canvas.
	createCanvas(400, 400);
}

function draw() {
	//make the background black.
	background(0, 0, 0);

	//outline the canvas with a blue square.
	fill(0, 0, 200);
	rect(10, 10, 380, 380);

	//filled in the blue square with a black square.
	//this could be done more easily using stroke.
	fill(0, 0, 0);
	rect(20, 20, 360, 360);

	//blue separator in the middle
	//could be done better with a line and strokeweight.
	fill(0, 0, 200);
	rect(155, 195, 90, 10);

	//draw pacman.
	fill(255, 255, 0);
	arc(100, 100, 100, 100, QUARTER_PI, -QUARTER_PI);

	//draw pacman food.
	fill(255, 255, 0);
	ellipse(155, 100, 15, 15);
	ellipse(205, 100, 15, 15);
	ellipse(255, 100, 15, 15);
	ellipse(305, 100, 15, 15);
	ellipse(305, 150, 15, 15);
	ellipse(305, 200, 15, 15);
	ellipse(305, 250, 15, 15);
	ellipse(305, 300, 15, 15);
	ellipse(250, 300, 15, 15);
	ellipse(200, 300, 15, 15);
	ellipse(150, 300, 15, 15);
	ellipse(95, 300, 15, 15);
	ellipse(95, 250, 15, 15);
	ellipse(95, 200, 15, 15);

}
