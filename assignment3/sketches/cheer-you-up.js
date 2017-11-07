var bgColor = 'green';
var txtColor = 'white';
var buttonColor = 'orange';

var welcomeMsg = "Hi there!";
var continueMsg = "Press any key to continue ...";
var hartMsg = "How are you today?";
var happyMsg = "Yay! Today's a great day.";
var sadMsg = "Aw :( Would you like to be cheered up?";
var cheeryMsg = "Look at these cute things!";
var whompMsg = "Pretend there are cute pictures of pandas here..."
var booMsg = "Suit yourself.";
var ButtonText1 = ":) ";
var ButtonText2 = ":(  ";
var ButtonYes = "Yes";
var ButtonNo = "No  ";

var titleX = 100;
var titleY = 200;

var continueX;
var continueY;

/*var box1X;
var box1Y;
var box2X;
var box2Y;
*/

// font sizes for various kinds of text
var titleTextSize = 48;
var subtextSize = 24;
var promptTextSize = 24;
var buttonTextSize = 36;

var pageNum = 0;

var MouseClickedAtX;
var mouseClickedAtY;

var img3;
var img5;
var img6;

//function preload() {
//	img3 = loadImage("assets/anchorman.jpg");
//	img5 = loadImage("assets/sleepypanda.gif");
//	img6 = loadImage("assets/sucks.jpg");
//}

function setup() {

	createCanvas(800, 500);

	continueX = width / 2;
	continueY = height - 100;
	box1X = continueX;
	box1Y = continueY;
	box2X = continueX + 100;
	box2Y = continueY;

	//img3 = loadImage("assets/anchorman.jpg");
	//img5 = loadImage("assets/sleepypanda.gif");
	//img6 = loadImage("assets/sucks.jpg");
}

function Box(someX, someY, someText, someWidth, someHeight) {

	fill(bgColor);
	stroke(buttonColor);
	strokeWeight(5);
	rect(someX, someY, textWidth(someText), someWidth, someHeight);
	
	textSize(buttonTextSize);
	strokeWeight(1);
	fill(buttonColor);
	text(someText, someX + 10, someY + 50);

}

function draw() {

	background(bgColor);

	// draw different stuff for each page

	if (pageNum == 0) {

		// write welcome message
		textSize(titleTextSize);
		fill(txtColor);
		text(welcomeMsg, titleX, titleY);

		// issue prompt to continue
		textSize(promptTextSize);
		fill(txtColor);
		text(continueMsg, continueX, continueY);

	} else if (pageNum == 1) {

		// write hart message
		textSize(titleTextSize);
		fill(txtColor);
		text(hartMsg, titleX, titleY);
		
		Box(continueX - 20, continueY - 50, ButtonText1, 75, 320);
		
		Box(continueX + 100, continueY - 50, ButtonText2, 75, 320);


		// see if the mouse was clicked inside the :) box
		if ((MouseClickedAtX > box1X) &&
			(MouseClickedAtX < box1X + textWidth(ButtonText1) + 10) &&
			(MouseClickedAtY > box1Y - 50) &&
			(MouseClickedAtY < box1Y - 50 + 75)) {
			// if all 4 of those conditions are true, go to the next screen
			pageNum = pageNum + 1;
		}

		// see if the mouse was clicked inside the :( box
		if ((MouseClickedAtX > box2X) &&
			(MouseClickedAtX < box2X + textWidth(ButtonText2) + 10) &&
			(MouseClickedAtY > box2Y - 50) &&
			(MouseClickedAtY < box2Y - 50 + 75)) {
			// if all 4 of those conditions are true, go to the next screen
			pageNum = pageNum + 2;
		}

		// reset these for the next time through draw()
		MouseClickedAtX = 0;
		mouseClickedAtY = 0;

	} else if (pageNum == 2) {
		//for :) page

		background('yellow');

		// write happy message
		textSize(titleTextSize);
		fill('green');
		text(happyMsg, titleX, titleY);

		//image(img3, 0, 0);


	} else if (pageNum == 3) {

		//for :( page

		// write :( message
		textSize(titleTextSize);
		fill(txtColor);
		text(sadMsg, titleX, titleY, 700, 200);

		Box(continueX - 20, continueY - 50, ButtonYes, 75, 20);

		Box(continueX + 100, continueY - 50, ButtonNo, 75, 20);


		//track which option user has selected
		if ((MouseClickedAtX > box1X) &&
			(MouseClickedAtX < box1X + 60) &&
			(MouseClickedAtY > box1Y - 50) &&
			(MouseClickedAtY < box1Y - 50 + 75)) {
			// if all 4 of those conditions are true, then it was inside box "1"
			pageNum = pageNum + 1;
		} else if ((MouseClickedAtX > box1X + 100) &&
			(MouseClickedAtX < box1X + 100 + 60) &&
			(MouseClickedAtY > box1Y - 50) &&
			(MouseClickedAtY < box1Y - 50 + 75)) {
			// if all 4 of those conditions are true, then it was inside box "2"
			pageNum = pageNum + 2;
		}

	} else if (pageNum == 4) {
		//for cheer up page
		background('pink');

		textSize(titleTextSize);
		fill(txtColor);
		text(cheeryMsg, titleX, titleY, 700, 200);

		textSize(subtextSize);
		fill(150, 150, 150);
		text(whompMsg, titleX, 300, 700, 400);

		//image(img5, 0, 0);

	} else if (pageNum == 5) {
		//for sad up page
		background(0, 0, 0);

		textSize(titleTextSize);
		fill(txtColor);
		text(booMsg, titleX, titleY, 700, 200);

		//image(img6, 500, 100);
	}

}

function keyPressed() {
	if (pageNum <= 1) {
		pageNum = pageNum + 1;
	}
}

function mouseClicked() {
	MouseClickedAtX = mouseX;
	MouseClickedAtY = mouseY;
}