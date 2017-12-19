/*
Can Zhao
Final Project
Animation, loading images, and array
*/
var items = [];
var icon = [];
var imgPig;
var imgBkg;

function preload() {
	imgPig = loadImage('Piggy-normal.png');
  imgBkg = loadImage('Bkg.png');
//load item01 to item 08
  for(var i = 0; i < 8;i++){
    icon[i] = loadImage('item0' + (i+1) + '.png');
  }
  
}

function setup() {
  //ipad size
	createCanvas(1024, 768);
  piggy = new Pig(imgPig, 411, 342);
}

function mousePressed(){
  //generate a random number according to the number of icons in "Images" folder
  var r = floor(random(0, icon.length));
  //trigger a moving image by clicking anywhere on Canvas
	var a = new Item(mouseX, mouseY, icon[r]);
	items.push(a);
}

function draw() {
	background(255);
  //call the background image from preload
  image(imgBkg, 0, 0);
  //call the moving piggy
  piggy.update();
  piggy.display();
  //call the movement of each item
	for (var i = items.length-1; i>=0; i--){
		items[i].update();
		items[i].display();
	}
}

//movement of each item
function Item(x, y,img){
	this.x = x;
	this.y = y;
  this.img = img;
	
	this.display = function(){
	image(this.img, this.x, this.y);
	}
  
	this.update = function(){
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);
	}
}

//movement of the pig
function Pig(imgPig, tempX, tempY) {
	this.xpos = tempX;
	this.ypos = tempY;
	this.angle = random(0, HALF_PI);
	this.characterImage = imgPig;
	this.yoffset = 0.0;

	this.update = function() {
	this.angle += 0.05;
	this.yoffset = sin(this.angle) * 20;
	}
	//draw the pig
	this.display = function() {
	image(this.characterImage, this.xpos, this.ypos + this.yoffset);
}
}