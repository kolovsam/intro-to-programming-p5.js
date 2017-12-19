/*	final project
    12/2017
*/


// some text strings we use throughout the program
var directionMsg = "type f for fall, w for winter, r for spring, and s for summer";

// this tracks which page we are currently showing
var pageNum = 0;

// colors
var bgColor = 0;
var mountainColor1 = 0;
var mountainColor2 = 0;
var mountainColor3 = 0;
var mountainColor4 = 0;
var mountainColor5 = 0;
var mountainColor6 = 0;
var mountainColor7 = 0;
var mountainColor8 = 0;
var mountainColor9 = 0;
var mountainColor10 = 0;
var lakeColor = 0;
var treebranchColor = 0;
var treeleafColor = 0;

var leaf = [405, 85, 415, 90, 420, 95, 410, 90,
  420, 105, 430, 110, 435, 115, 425, 110,
  380, 165, 390, 170, 395, 175, 385, 170,
  470, 215, 480, 220, 485, 225, 475, 220,
  300, 285, 310, 290, 315, 295, 305, 290,
  280, 315, 290, 320, 295, 325, 285, 320,
  440, 315, 450, 320, 455, 325, 445, 320,
  350, 365, 360, 370, 365, 375, 355, 370,
  320, 465, 330, 470, 335, 475, 325, 470,
  450, 515, 460, 520, 465, 525, 455, 520,
  420, 615, 430, 620, 435, 625, 425, 620
            ]


var snow = [425, -650, 10, 85, -550, 10, 205, -480, 5, 305, -390, 10, 435, -280, 5,
  135, -270, 15, 415, -180, 10, 180, -120, 10, 325, -50, 20, 120, 0, 5,
  250, 50, 15, 545, 80, 10, 20, 140, 5, 185, 280, 5, 345, 350, 10, 45, 420, 15
]

var flower = [12, 480, 1, 'yellow', 22, 508, 2, 'yellow', 42, 490, 0, 'yellow', 
  100, 518, 1, 'yellow', 150, 515, 0, 'yellow', 170, 505, 0, 'yellow', 
  200, 500, 0, 'yellow', 250, 505, 1, 'yellow', 
  5, 498, 1, 'white', 30, 470, 3, 'white', 58, 519, 1, 'white',
  70, 503, 2, 'white', 158, 519, 0, 'white', 210, 502, 3, 'white', 
  230, 512, 1, 'white']

var flowerSize = 1;


// all the things done only once
function setup() {
  // anyone know why I chose this particular size ?
  createCanvas(500, 725);
  x = 0;
  y = 0;
}


// control the animation of the screen
function draw() {

  if (pageNum == 0) {
    drawPage0();

  } else if (pageNum == 1) {
    drawPage1(); // fall

  } else if (pageNum == 2) {
    drawPage2(); // winter

  } else if (pageNum == 3) {
    drawPage3(); // spring

  } else if (pageNum == 4) {
    drawPage4(); // summer

  }

  direction();

}


// draw page 0, welcome screen
function drawPage0() {

  drawScene('#e8e8e8',
    '#e3e3e3', '#bababa', '#a6a6a6', '#9d9d9d', '#909090',
    '#c3c3c3', '#3d3d3d', '#828282');
}

// draw page 1, fall
function drawPage1() {

  drawScene('#D5EDFB',
    '#f2ecd5', '#EFC786', '#E1B96C', '#E9A551', '#DB9345',
    '#9DC9E9', '#5F461B', '#C9783C');
  drawLeaves();
}


// draw page 2, winter
function drawPage2() {

  drawScene('#ecf3f6',
    '#CCD8D9', '#B8CBCD', '#94AEB2', '#6E9091', '#416C6C',
    '#d8e9f6', '#2A3A3A', '');
  drawSnow();
}


// draw page 3, spring
function drawPage3() {
  drawScene('#D5EDFB',
    '#abdca7', '#87c38e', '#73b47c', '#5da467', '#4f935a',
    '#9DC9E9', '#2A3A3A', '#3e7f48');
  drawFlowers();
}


// draw page 4, summer
function drawPage4() {
  drawScene('#D5EDFB',
    '#9ccaac', '#6aac65', '#5a935f', '#4b7e50', '#3f6e44',
    '#9DC9E9', '#2A3A3A', '#35643b');
  drawBoat();
}


// Draw Scene
function drawScene(bgColor,
  mountainColor1, mountainColor2, mountainColor3, mountainColor4, mountainColor5,
  lakeColor, treebranchColor, treeleafColor) {
  background(bgColor);
  noStroke();
  // moon/sun
  color('white');
  ellipse(250, 100, 80, 80);
  // mountains
  fill(mountainColor1);
  triangle(-100, 375, 70, 50, 300, 375);
  triangle(200, 375, 425, 140, 900, 375);
  fill(mountainColor2);
  triangle(-200, 475, 270, 180, 1000, 475);
  fill(mountainColor3);
  triangle(-200, 525, 20, 280, 300, 525);
  fill(mountainColor4);
  triangle(100, 525, 320, 320, 600, 525);
  fill(mountainColor5);
  triangle(-200, 525, 0, 450, 400, 525);
  // lake
  fill(lakeColor)
  rect(0, 525, 725, 200);
  // tree
  if (pageNum == 2) {
    noFill();
  } else {
    fill(treeleafColor);
  }
  ellipse(360, 200, 130, 130);
  ellipse(360, 320, 200, 200);
  ellipse(440, 330, 240, 240);
  ellipse(430, 120, 170, 170);
  ellipse(460, 200, 180, 180);
  fill(treebranchColor);
  quad(430, 220, 440, 220, 470, 725, 400, 725);
  triangle(430, 355, 380, 280, 430, 335);
  triangle(430, 495, 360, 400, 430, 455);
  triangle(430, 465, 490, 370, 430, 425);
  triangle(0, 675, 500, 600, 800, 675);
  fill('black');
  rect(0, 675, 725, 200);
}

// directions
function direction() {
  fill('white');
  textSize(18);
  text(directionMsg, 20, 705);
}

function drawLeaves() {
  noStroke();
  fill('#C9783C');
  for (i = 0; i < leaf.length - 1; i += 8) {
    var x1 = leaf[i];
    var y1 = leaf[i + 1];
    var x2 = leaf[i + 2];
    var y2 = leaf[i + 3];
    var x3 = leaf[i + 4];
    var y3 = leaf[i + 5];
    var x4 = leaf[i + 6];
    var y4 = leaf[i + 7];

    //draw leaf
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
    
    //update leaf y
    leaf[i + 1] += 1;
    leaf[i + 3] += 1;
    leaf[i + 5] += 1;
    leaf[i + 7] += 1;
  }
  

}

function drawSnow() {
  noStroke();
  fill('white');
  for (i = 0; i < snow.length - 1; i += 3) {
    var x = snow[i];
    var y = snow[i + 1];
    var r = snow[i + 2];

    //draw snow
    ellipse(x, y, r, r);
    
    //update snow y
    snow[i + 1] += 1;
  }

}

function drawFlowers() {
  noStroke();
  for (i = 0; i < flower.length - 1; i += 4) {
    var x = flower[i];
    var y = flower[i + 1];
    var r = flower[i + 2];
		var flowerColor = flower[i + 3];
    
    //draw flower
		fill(flowerColor);
    ellipse(x, y, flowerSize + r, flowerSize + r);
    
    //update flower r
    if (flowerSize < 5) {
      flowerSize = flowerSize + 0.01;
    }
  }
}

function drawBoat() {
  // boat, fisherman
  fill('#2A3A3A');
  quad(x + 230, 580, x + 280, 580, x + 270, 585, x + 240, 585);
  fill('#AE8676');
  ellipse(x + 260, 566, 6, 6);
  ellipse(x + 260, 568, 3, 3);
  rect(x + 258, 569, 4, 11);
  fill('#2A3A3A');
  rect(x + 258, 574, 4, 11);
  triangle(x + 254, 563, x + 262, 559, x + 266, 566);
  stroke('#2A3A3A');
  line(x + 252, 568, x + 267, 581);
  stroke('white');
  line(x + 272, 584, x + 315, 584);
  line(x + 295, 587, x + 325, 587);
  x = x - 0.5;
}

// display different season
function keyTyped() {
  if (key === 'f') {
    pageNum = 1;
  } else if (key === 'w') {
    pageNum = 2;
  } else if (key === 'r') {
    pageNum = 3;
  } else if (key === 's') {
    pageNum = 4;
  }
}