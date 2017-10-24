function setup() {
	createCanvas(400, 400);
}

var d = 30

var x1 = d;
var y1 = d;

var x2 = d;
var y2 = d;

var x3 = d;
var y3 = d;

var x4 = d;
var y4 = d;

function draw() {
	strokeWeight(0);
	fill("yellow");
	background(20);

	//charactor 1
	//motion part 1: moving horizontally
	if (x1 < width / 2 - 90) {
		fill("yellow");
		arc(x1, y1, 40, 40, PI / 6, 2 * PI - PI / 6, PIE);
		x1++;
		//motion part 2: change direction and moving vertically
	} else {
		fill("red");
		if (y1 < height / 2) {
			arc(x1, y1, 40, 40, 2 * PI / 3, 2 * PI + PI / 3, PIE);
			y1++;
			//final scene: a sudden change of direction
		} else {
			fill("yellow");
			arc(x1, y1, 40, 40, PI / 6, 2 * PI - PI / 6, PIE);
		}
	}

	//charactor 2
	if (x2 < width / 2 - 30) {
		fill("yellow");
		arc(width - x2, y2, 40, 40, 7 * PI / 6, 5 * PI / 6, PIE);
		x2++;
	} else {

		if (y2 < height / 2) {
			fill("green");
			arc(width - x2, y2, 40, 40, 2 * PI / 3, 2 * PI + PI / 3, PIE);
			y2++;
		} else {
			fill("yellow");
			arc(width - x2, y2, 40, 40, -PI / 3, -2 * PI / 3, PIE);
		}
	}

	//charactor 3
	if (x3 < width / 2 - 30) {
		fill("yellow");
		arc(x3, height - y3, 40, 40, PI / 6, 2 * PI - PI / 6, PIE);
		x3++;
	} else {
		if (y3 < height / 2) {
			fill("orange");
			arc(x3, height - y3, 40, 40, -PI / 3, -2 * PI / 3, PIE);
			y3++;
		} else {
			fill("yellow");
			arc(x3, height - y3, 40, 40, 2 * PI / 3, 2 * PI + PI / 3, PIE);
		}
	}

	//charactor 4
	if (x4 < width / 2 - 90) {
		fill("yellow");
		arc(width - x4, height - y4, 40, 40, 7 * PI / 6, 5 * PI / 6, PIE);
		x4++;
	} else {
		if (y4 < height / 2) {
			fill("purple");
			arc(width - x4, height - y4, 40, 40, -PI / 3, -2 * PI / 3, PIE);
			y4++;
		} else {
			fill("yellow");
			arc(width - x4, height - y4, 40, 40, 7 * PI / 6, 5 * PI / 6, PIE);
		}

	}

}
