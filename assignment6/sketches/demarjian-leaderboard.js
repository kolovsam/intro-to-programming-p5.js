/* 
leader board
Kristen Demarjian
11/26/2017
HCDE 598A
*/

// the size of the overall canvas
const canvasWidth = 600;
const canvasHeight = 600;

// the uppper left corner of the progress bar
const xOrigin = 150;
const yOrigin = 100;

var averageTPX = 400 //text placement x
var averageTPY = 200 //text placement y
var label = "Scores"

// some colors
const bgColor = 'grey';
const barColor = 'pink';
const borderColor = 'blue';

// parameters for each box in the progress bar
const segmentSize = 50;
const borderWidth = 2;

// how many segments to draw in the progress bar
const barSegments = 8;

var scores = [37, 92, 15, 58, 74, 68, 40, 42];
var scoresRandom = [];

function setup() {

	// create the canvas
	createCanvas(canvasWidth, canvasHeight);
	background(bgColor);

	// variables to accumulate running totals while traversing the array
	var totalScores = 0;
	var numScores = 0;
	var highScore = 0;
		 
	
	// draw the required number of bar segments
	for (i = 0; i < barSegments; i++) {

		fill(barColor);
		stroke(borderColor);
		strokeWeight(borderWidth);
		
		//color the highest score box yellow
	if(i > highScore) {
		highScore = i;
		fill('yellow');
	}

		// first calculate the x coordinate of this segment
		var yCorner = yOrigin + i * segmentSize;
		// then draw one bar segment
		rect(xOrigin, yCorner, segmentSize, segmentSize);

		print(scores[i]);

		// keep a total of the number of grades recorded
		// and the running total of the scores
		numScores = numScores + 1;
		totalScores = totalScores + scores[i];

		print("grades: ", numScores, " total = ", totalScores);

		// now put the grades in the boxes
		textSize(15);
		textAlign(CENTER, CENTER);
		fill('black');
		strokeWeight(1);
		text(scores[i], xOrigin + segmentSize / 2, yCorner + segmentSize / 2);

		//draw index
		text(i, xOrigin - 25, yCorner + 25);
	
	}

	//Average Score Text
	var averageScore = totalScores / numScores;
	print("average = ", averageScore);
	var averageText = "Average Score:";

	textSize(30);
	textAlign(CENTER, CENTER);
	fill(255, 250, 0);
	strokeWeight(3);
	text(averageScore, averageTPX, averageTPY);
	text(averageText, averageTPX, averageTPY - 50);

	//label array
	textSize(20);
	text(label, 175, 75);


}

function keyTyped() {

	// this function is called by the system whenever a key is typed
	// so figure out which one was hit
	var theKey = key;
	print("key = r", theKey, " was typed");

	var scoresRandom; // for the name of the board being displayed

	// here is where you reload the 'displayBoard' array based on the
	// particular keys pressed. you must at least be able to 
	// 1) regenerate the board with a set of randomly generated scores
	// 2) reload the constant test data array into the board
	// any other fun things you want to do are optional

	// update the display with the new leader board scores
	drawBoard(
		displayBoard, BOARD_ELEMENTS, boardLabel,
		BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
		ELEMENT_WIDTH, ELEMENT_HEIGHT);

}

function draw() {}