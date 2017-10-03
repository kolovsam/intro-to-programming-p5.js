/*
	Pacman-improved by Sam Kolovson
	
	Had fun testing out some of the shapes and
	colors before the first class!
*/


/*
	Setup function calls all the functions to
	draw the whole starting screen.
*/
function setup() {
	createCanvas(400, 400);
	draw_screen();
	draw_pacman(100,100);
	draw_dots(150, 100, 15, 14);
}

/*
	TODO: Add code here to make the pacman move
	and eat.
*/
function draw() {


}

/*
	Draw pacman screen with black background,
	blue outline and blue separator in the middle.
	This is pretty basic, would be fun to make it
	more complex.
*/
function draw_screen() {
	//black background
	background(0, 0, 0);

	//blue outline
	fill(0, 0, 200); // blue
	rect(10, 10, 380, 380);

	//black fill
	//could be done better
	fill(0, 0, 0); // black
	rect(20, 20, 360, 360);

	//blue separator
	fill(0, 0, 200); // blue
	rect(155, 205, 90, 10);
}

/*
	Draw pacman at coordinates x,y.
*/
function draw_pacman(x,y) {
	fill(255, 255, 0); // yellow
	arc(x, y, 100, 100, QUARTER_PI, -QUARTER_PI);
}

/*
	Draw pacman's food starting at x,y.
	Size is the size of the dots and num is the
	number of dots that will be drawn. This function
	could definitely be improved so that where the
	dots change direction and appear is not mostly
	hard-coded.
*/
function draw_dots(x, y, size, num) {

	for (i = 0; i < num; i++) {
		//print(x + ", " + y);
		fill(255, 255, 0); //yellow
		ellipse(x, y, size, size);

		if (i < 3)
			x = x + 55;
		else if (i < 7)
			y += 55;
		else if (i < 11)
			x -= 55;
		else if (i < 14)
			y -= 55;
	}

}


