/* HCDE 589A

Final Project: game
12/04/17, Charlie Huo 

using the p5.play library
*/

var pear;
var triangle;
var platform;
var block;

var gravity = 1;
var jump = 15;

var winning = false;

var pearX = 100;
var pearY = 175;

var blockX = 300;
var blockY = 205;

var offsetX;
var offsetY;

const TRIANGLE_X = 700;
const TRIANGLE_Y = 188;

const PLATFORM_X = 400;
const PLATFORM_Y = 175;

function setup() {
	createCanvas(800, 350);

	//creates sprites (objects), assign images and animations to objects
	var img1 = loadImage("assets/block.png");
	var img2 = loadImage("assets/bg.png");

	pear = createSprite(pearX, pearY);
	pear.addAnimation("normal", "assets/char_r0001.png", "assets/char_r0003.png");
	pear.addAnimation("left", "assets/char_l0001.png", "assets/char_l0003.png");
	pear.addAnimation("walkingr", "assets/char_wr0001.png", "assets/char_wr0009.png");
	pear.addAnimation("walkingl", "assets/char_wl0001.png", "assets/char_wl0009.png");
	pear.addAnimation("winning", "assets/char_e0001.png", "assets/char_e0003.png");

	triangle = createSprite(TRIANGLE_X, TRIANGLE_Y);
	triangle.addAnimation("normal", "assets/goal0001.png", "assets/goal0003.png");
	triangle.addAnimation("winning", "assets/goal_e0001.png", "assets/goal_e0003.png");

	block = createSprite(blockX, blockY);
	block.addImage(img1);

	platform = createSprite(PLATFORM_X, PLATFORM_Y);
	platform.addImage(img2);

	//set object colliding measurements
	block.setCollider("rectangle", 0, 0, 40, 40);
	triangle.setCollider("rectangle", 0, 0, 30, 30);
	platform.setCollider("rectangle", 0, 100, 800, 100);
}

function draw() {

	background(255, 255, 255);

	//determines if player wins the game
	if (pear.collide(triangle)) {
		winning = true;
	}

	//keeps pear on the platform if/when the block falls on top of it
	if (pear.collide(platform)) {
		pear.position.y = pearY;
	}

	//keeps block on the platform
	if (block.collide(platform)) {
		block.velocity.y = 0;
	}

	//after player wins
	if (winning) {
		
		fill(50);
		textAlign(CENTER);
		text("congrats! you win!", width / 2, 50);

		pear.changeAnimation("winning");
		triangle.changeAnimation("winning");
	} else {

		//the game
		fill(50);
		textAlign(CENTER);
		text("help pear get to triangle! \r\n try using arrow keys and mouse", width / 2, 50);

		//assigns the block gravity so it drops
		block.velocity.y += gravity;

		//pear cannot move past block
		if (pear.collide(block)) {
			pear.setSpeed(0, 0);
		}

		//controls
		if (keyWentDown(RIGHT_ARROW)) {
			pear.changeAnimation("walkingr");
			pear.setSpeed(2, 0);
		}
		if (keyWentUp(RIGHT_ARROW)) {
			pear.changeAnimation("normal");
			pear.setSpeed(0, 0);
		}
		if (keyWentDown(LEFT_ARROW)) {
			pear.changeAnimation("walkingl");
			pear.setSpeed(2, 180);
		}
		if (keyWentUp(LEFT_ARROW)) {
			pear.changeAnimation("left");
			pear.setSpeed(0, 180);
		}

		if (mouseWentDown(LEFT)) {
			block.velocity.y = -jump;
		}

	}

	//platform.debug = mouseIsPressed;

	//draws sprites on canvas
	drawSprites();
}