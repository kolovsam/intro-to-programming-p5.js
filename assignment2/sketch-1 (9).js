// The Block Head, Snowman, Doe, and Green Rectangle
// By Thomas Tran 10/15/17

	// Block Head Variables
	var x = 80;
	var y = 80;
	var w = 40;
	var h = 40;

	// Snow Man Variables
	var x1 = 620;
	var y1 = 80;

	// Green Block
	var xCoord = 575;
	var yCoord = 470;

	// Doe Variables
	var xDoe = 80;
	var yDoe = 470;


	function setup() {
	  createCanvas(700, 550);
	  noStroke()
	  frameRate(50)
	}

	function draw() {
	  background('beige');

	  // Dance Floor
	  fill('orange');
	  quad(325, 150, 675, 275, 400, 500, 50, 250);

	  // Block Head
	  fill('tan')
	  rect(x, y, w, h);
	  fill('brown');
	  quad(x, y, x + 20, y - 20, x + 60, y - 20, x + w, y);
	  fill('yellow');
	  quad(x + w, y, x + w + 20, y - 20, x + 60, y + 20, x + w, y + h);


	  x = x + 1;
	  if (x < 400) {
	    x = 350;
	  }

	  y = y + 1;
	  if (y < 550) {
	    y = 225;
	  }

	  //Snow Man
	  fill('cyan');
	  ellipse(x1, y1, 40, 40);
	  ellipse(x1, y1 + 60, 100, 100);
	  fill('black');
	  ellipse(x1 - 5, y1 - 5, 5, 5);
	  ellipse(x1 + 5, y1 - 5, 5, 5);
	  ellipse(x1, y1 + 40, 10, 10);
	  ellipse(x1, y1 + 60, 10, 10);
	  ellipse(x1, y1 + 80, 10, 10);

	  x1 = x1 - 1;
	  if (x1 < 400) {
	    x1 = 150;
	  }

	  y1 = y1 + 1;
	  if (y1 < 550) {
	    y1 = 160;
	  }


	  // Doe
	  fill('tan')
	  ellipse(xDoe, yDoe, 80, 40);
	  ellipse(xDoe - 20, yDoe + 30, 10, 30);
	  ellipse(xDoe + 15, yDoe + 30, 10, 30);
	  ellipse(xDoe + 30, yDoe - 20, 20, 20);

	  xDoe = xDoe - 1;
	  if (xDoe < 400) {
	    xDoe = 250;
	  }

	  yDoe = yDoe + 1;
	  if (yDoe < 550) {
	    yDoe = 225;
	  }


	  // Green Block

	  fill('green');
	  rect(xCoord, yCoord, 100, 50);

	  xCoord = xCoord - 1;
	  if (xCoord < 500) {
	    xCoord = 450;
	  }

	  yCoord = yCoord + 1;
	  if (yCoord < 550) {
	    yCoord = 215;
	  }








	}