//this code is an interactive ice cream sundae
//builds off my first assignment, which as was an ice cream cone

//background and text color
const BACKGROUND_COLOR = 'LightCyan ';
const TEXT_COLOR = 'LightSeaGreen ';


//ice cream colors
const ICECREAM_COLOR = 'ivory'
const FUDGE_COLOR = 'SaddleBrown';
const SPRINKLES_COLOR = 'LightPink '
const WHIP_COLOR = 'ghostwhite'
const CHERRY_COLOR = 'Crimson'
const BOWL_COLOR = 'Aquamarine'
const STROKE_COLOR = 'black'
const SPRINKLE_WEIGHT = '5'

//text
var welcomeMsg = "Welcome to the end of the quarter ice cream sundae party!";
var bowlMsg = 'Make a sundae in 5 easy steps:';
var icecreamMsg = "1. Press 'I' to add ice cream";
var hotfudgeMsg = "2. Press 'F' to add hot fudge";
var whipcreamMsg = "3. Press 'W' to add whip cream";
var sprinklesMsg = "4. Use the mouseclick to add sprinkles";
var cherryMsg = "5. Press 'C' to put the cherry on top";

// font sizes for various kinds of text
var titleTextSize = 48;
var bowlTextSize = 34;
var promptTextSize = 28;

// title coordinates
var titleX = 80;
var titleY = 150;

// prompt coordinates
var promptX = 850;
var promptY = 350;


function setup() {
createCanvas(1400, 700);
background(BACKGROUND_COLOR);

textSize(titleTextSize);
fill(TEXT_COLOR);
text(welcomeMsg, titleX, titleY);

textSize(bowlTextSize);
fill(TEXT_COLOR);
text(bowlMsg, promptX - 50, titleY + 150);

// issue prompts to create sundae
textSize(promptTextSize);
fill(TEXT_COLOR);
text(icecreamMsg, promptX, promptY);
fill(TEXT_COLOR)
text(hotfudgeMsg, promptX, promptY + 40);
fill(TEXT_COLOR);
text(whipcreamMsg, promptX, promptY + 80);
fill(TEXT_COLOR);
text(sprinklesMsg, promptX, promptY + 120);
fill(TEXT_COLOR);
text(cherryMsg, promptX, promptY + 160);

//bowl
noStroke();
fill(BOWL_COLOR);
arc(400, 575, 620, 200, 0, radians(180));

}

function draw() {}

var xCoord = 400;
var yCoord = 400;
var xCherry = xCoord;
var yCherry = yCoord - 60;
var yline = yCoord - 88;

function drawWhipcream(size) {
//whip cream 
strokeWeight(2);
stroke(STROKE_COLOR);
fill(WHIP_COLOR);
ellipse(xCoord, yCoord - 25, 80, 20);
ellipse(xCoord, yCoord - 15, 130, 20);
ellipse(xCoord, yCoord - 5, 180, 20);
ellipse(xCoord, yCoord + 5, 230, 20);
ellipse(xCoord, yCoord + 15, 280, 20);
ellipse(xCoord, yCoord + 25, 330, 20);
ellipse(xCoord, yCoord + 35, 380, 20);
ellipse(xCoord, yCoord + 45, 430, 20);
ellipse(xCoord, yCoord + 55, 480, 20);
}

function drawCherry(size) {
//cherry
stroke(STROKE_COLOR);
strokeWeight(4);
fill(CHERRY_COLOR);
ellipse(xCherry, yCherry, 65, 50);
line(xCoord, yline, 405, yline - 17);

}

function drawFudge(size) {
//hot fudge
noStroke();
fill(FUDGE_COLOR);
//center fudge
arc(405, 515, 265, 120, radians(180), radians(180));
//far left hot fudge
arc(260, 515, 255, 120, radians(180), radians(180));
//right hot fudge
arc(540, 515, 255, 120, radians(180), radians(180));
}

function drawIcecream(size) {
//left scoop
stroke(6);
fill(ICECREAM_COLOR);
arc(260, 575, 310, 240, radians(180), radians(180));
//right scoop
fill(ICECREAM_COLOR);
arc(540, 575, 310, 240, radians(180), radians(180));
//center scoop
arc(410, 575, 310, 240, radians(180), radians(180));
}

function drawSprinkle(size) {
noStroke();
fill(SPRINKLES_COLOR);
ellipse(mouseX, mouseY, 15, 15);
}


function mouseClicked() {
var size = (width / 100);
drawSprinkle(mouseX, mouseY, size);
}


function keyTyped() {
if (key === 'i') {
drawIcecream(size)
} else if (key === 'f') {
drawFudge(size)
} else if (key === 'w') {
drawWhipcream(size)
} else if (key === 'c') {
drawCherry(size)
}
}