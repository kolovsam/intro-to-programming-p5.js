/* '41 Years Away' by Thomas Tran
	Final Project - HCDE 598

*/
const bgcolor = 'gray';
const pagecolor = 'white';
const image1x = 200;
const image1y = 200;
const image2x = 650;
const image2y = 200;

// image variables
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;
var img20;
var img21;
var img22;
var img23;
var img24;
var img25;
var img26;
var img27;
var img28;
var img29;


// this tracks which page we are currently showing
var pageNum = 1;


function setup() 
{
  // set canvas size
  createCanvas(1200, 800);

}
 
function draw() 
{
	// reset canvas every draw
  background(bgcolor);

  fill('pagecolor');
  noStroke();
  rect(150, 150, 950, 500);
  fill('black');
  stroke('black')
  line(625, 150, 625, 650); 

  // display image (img, x, y)
  //image(img, image1x, image1y);
  //image(img2, image2x, image2y);

  // Controlling page movement

  if (pageNum == 1) {
    drawPage1();

  } else if (pageNum == 2) {
    drawPage2();

  } else if (pageNum == 3) {
    drawPage3();

  } else if (pageNum == 4) {
    drawPage4();

  } else if (pageNum == 5) {
    drawPage5();

  } else if (pageNum == 6) {
    drawPage6();

  } else if (pageNum == 7) {
    drawPage7();

  } else if (pageNum == 8) {
    drawPage8();

  } else if (pageNum == 9) {
    drawPage9();

  } else if (pageNum == 10) {
    drawPage10();

  } else if (pageNum == 11) {
    drawPage11();

  } else if (pageNum == 12) {
    drawPage12();

  } else if (pageNum == 13) {
    drawPage13();

  } else if (pageNum == 14) {
    drawPage14();

  } else if (pageNum == 15) {
    drawPage15();

  } else if (pageNum == 16) {
    drawPage16();

  } else if (pageNum == 17) {
    drawPage17();

}
}


 
function preload()
{
  // load image
  img = loadImage("assets/1.jpg");
  img2 = loadImage("assets/2.jpg");
  img3 = loadImage("assets/3.jpg");
  img4 = loadImage("assets/4.jpg");
  img5 = loadImage("assets/5.jpg");
  img6 = loadImage("assets/6.jpg");
  img7 = loadImage("assets/7.jpg");
  img8 = loadImage("assets/8.jpg");
  img9 = loadImage("assets/9.jpg");
  img10 = loadImage("assets/10.jpg");
  img11 = loadImage("assets/11.jpg");
  img12 = loadImage("assets/12.jpg");
  img13 = loadImage("assets/13.jpg");
  img14 = loadImage("assets/14.jpg");
  img15 = loadImage("assets/15.jpg");
  img16 = loadImage("assets/16.jpg");
  img17 = loadImage("assets/17.jpg");
  img18 = loadImage("assets/18.jpg");
  img19 = loadImage("assets/19.jpg");
  img20 = loadImage("assets/20.jpg");
  img21 = loadImage("assets/21.jpg");
  img22 = loadImage("assets/22.jpg");
  img23 = loadImage("assets/23.jpg");
  img24 = loadImage("assets/24.jpg");
  img25 = loadImage("assets/25.jpg");
  img26 = loadImage("assets/26.jpg");
  img27 = loadImage("assets/27.jpg");
  img28 = loadImage("assets/28.jpg");
  img29 = loadImage("assets/29.jpg");

}

function drawPage1() {

	textSize(36);
	textFont('new courier')
	text('41 Years Away', 275, 250);

	textSize(36);
	textFont('new courior');
	text('By Thomas Tran', 750, 600);
}

function drawPage2() {
	image(img, image1x, image1y);
  	image(img2, image2x, image2y);
}

function drawPage3() {
	image(img3, image1x, image1y);
  	image(img4, image2x, image2y);
}

function drawPage4() {
	image(img5, image1x, image1y);
  	image(img6, image2x, image2y);
}

function drawPage5() {
	image(img7, image1x, image1y);
  	image(img8, image2x, image2y);
}

function drawPage6() {
	image(img9, image1x, image1y);
  	image(img10, image2x, image2y);
}

function drawPage7() {
	image(img11, image1x, image1y);
  	image(img12, image2x, image2y);
}

function drawPage8() {
	image(img13, image1x, image1y);
  	image(img14, image2x, image2y);
}

function drawPage9() {
	image(img15, image1x, image1y);
  	image(img16, image2x, image2y);
}

function drawPage10() {
	image(img17, image1x, image1y);
  	image(img18, image2x, image2y);
}

function drawPage11() {
	image(img19, image1x, image1y);
  	image(img20, image2x, image2y);
}

function drawPage12() {
	image(img21, image1x, image1y);
  	image(img22, image2x, image2y);
}

function drawPage13() {
	image(img23, image1x, image1y);
  	image(img24, image2x, image2y);
}

function drawPage14() {
	image(img25, image1x, image1y);
  	image(img26, image2x, image2y);
}

function drawPage15() {
	image(img27, image1x, image1y);
  	image(img28, image2x, image2y);
}

function drawPage16() {
	image(img29, image1x, image1y);
}

function drawPage17() {
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pageNum = pageNum - 1;
  } else if (keyCode === RIGHT_ARROW) {
    pageNum = pageNum + 1;
  }
}

