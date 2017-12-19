//this sketch is different from what I proposed in discussion
//it is because I found an interesting library called p5.play
//so this project is about pac eating dots

//press 's' to start the game
//click mouse to start fire bullet

//set vars
var collectibles;
var pac;

//text size
var tSize = 20;

//canvas size
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

//pac size
var PAC_WIDTH = 100;
var PAC_HEIGHT = 50;

//bullet size
var BULLET_WIDTH = 10;
var BULLET_HEIGHT = 10;

//message
var MESSAGE = "Click 's' to start :D";

//colors
var bColor = 'white';
var tColor = 'black';

//page number
var pageNum = 1;

//dot number
var DOT_NUMBER = 20;


//end of vars

function setup() {
  createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
  background(bColor);

  //create controlled sprite
  pac = createSprite(PAC_WIDTH, PAC_HEIGHT);
  pac.addAnimation("normal", "assets/pac.png");

  //create 1 groups
  collectibles = new Group();

  //draw 20 dots
  for(var i = 0; i < DOT_NUMBER; i++) {
    var dot = createSprite(random(0, width), random(0,height));
    dot.addAnimation("normal", "assets/dot.png");
    collectibles.add(dot);
  }
}



function draw() {

  //text
  fill(tColor);
  textAlign(CENTER);
  textSize(tSize);
  text(MESSAGE, width/2, height/2);

  //start the game
  if (pageNum > 1) {
      drawPac();
  }

}

//draw the pac
function drawPac() {

  background(bColor);

  //if no arrow input set velocity to 0
  pac.velocity.x = (mouseX-pac.position.x)/10;
  pac.velocity.y = (mouseY-pac.position.y)/10;


  //overlap collectibles
  pac.overlap(collectibles, collect)

  //draw sprites
  drawSprites();
}

//remove dot when overlap
function collect(collector, collected)
{
  collected.remove();
}


//trigger the game
function keyTyped() {

  //check if key is pressed
  var theKey = key;
  print("key = ", theKey, " was typed");

  //set key for start to 's'
  if (theKey = "s") {
    pageNum = pageNum + 1;
  }
}

//click mouse for pac to fire
function mousePressed() {

  //create bullet
  var bullet = createSprite(pac.position.x, pac.position.y, BULLET_WIDTH, BULLET_HEIGHT);

  //velocity
  bullet.velocity.x = random(-5, 5);
  bullet.velocity.y = random(-5, 5);

}
