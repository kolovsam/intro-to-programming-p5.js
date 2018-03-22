//text
var hello = "Hi!"
var moveon = "Press a key to continue"
var wanttomeet = "Want to meet a character?"
var wanttosee = "Want to see another?"
var yes = "Yes"
var no = "No"
var pictureinstead = "A picture instead?"
var clickcont = "Click to continue"
var wordofwisdom = "The secret of getting ahead is getting started. -Mark Twain"

//Page number
var page = 0

//Boxes
var boxx = 120
var boxy = 250

//Mickey
var mx1 = 25; //Mickey face width
var my1 = 50; //Mickey face height
var earmx1 = 10; //Mickey left ear width
var earmy1 = 30; //Mickey left ear height
var earmx2 = 40; //Mickey right ear width
var earmy2 = 30; //Mickey right ear height

//Minnie
var minx1 = 475;	//Minnie face width
var miny1 = 50;		//Minnie face height
var earminx1 = 460;	//Minnie left ear width
var earminy1 = 30;	//Minnie left ear height
var earminx2 = 490;	//Minnie right ear width
var earminy2 = 30;	//Minnie right ear height

function setup() {
  createCanvas(600, 500);
}

function draw() {
  if (page == 0) {
    welcomepage();
  } else if (page == 1) {
    page1();		//Want to meet?
  } else if (page == 2) {
    YesPage();	//If yes, show Mickey
  } else if (page == 3) {
    NoPage();		//If no, want to see picture?
  } else if (page == 4){
    picpage();	//If said yes to picture	
  } else if (page == 5){
    NoAgain();	//If said no to picture, want to see words?
  } else if (page == 6){
  	afterMickey(); //Want to see another character?
  } else if (page == 7){
    showMinnie();	//If said yes, show Minnie
  } else if (page == 8){
  	words(); 	//words of wisdom
  } else if (page == 9){
  	notowords();	//last page when said no to words
  } else if (page == 10){
  	afterMinnie(); //ask if want to continue
  } else if (page == 11){
  	MickeyandMinnie(); //see both Minnie & Mickey if say yes
  } else if (page == 12){
    afterPic();	//giving 3rd option if picked picture
  }
  }

function welcomepage() {
  background(86, 151, 184);
  textSize(100);
  fill('white');
  text(hello, 225, 225);
  textSize(25);
  text(moveon, width / 3.75, 350);
  page = 0		//allows me to control if/else
}


//first page with choice option
function page1() {
  noStroke();
  background('teal');
  fill('white');
  textSize(35);
  text(wanttomeet, width / 7, height / 3);
  noFill();
  stroke(220);
  strokeWeight(3);
  rect(boxx, boxy, 100, 50);
  rect(boxx + 225, boxy, 100, 50);
  noStroke();
  fill(220);
  textSize(40);
  text(yes, boxx + 15, boxy + 40);
  text(no, boxx + 250, boxy + 40);
  if (isWithin(MouseClickedX, MouseClickedY, boxx, boxx + 100, boxy, boxy + 40)) {
    page = page + 1;	//Should lead to Mickey
  }
  if (isWithin(MouseClickedX, MouseClickedY, boxx + 225, boxx + 325, boxy, boxy + 40)) {
    page = page + 2;	//Should lead to next prompt
  }
  MouseClickedX = 0
  MouseClickedY = 0
}

//Meets a character
function YesPage() {
  background(172, 222, 248);
  Mickey();
 	stroke(150);
  noFill();
  rect(width/2.85, 375, 160, 50);
  noStroke();
  fill(150);
  textSize(20);
	text(clickcont, width/2.75, 400);
  if (isWithin(MouseClickedX, MouseClickedY, width/2.85, width/2.85 + 160, 375, 375+50)){
    page = page + 4
  }
  MouseClickedX = 0;
  MouseClickedY = 0;
}


//Another option
function NoPage() {
  background(36, 165, 167);
  text(pictureinstead, 140, 200);
  noFill();
  stroke(200);
  rect(boxx, boxy, 100, 50);
  rect(boxx + 225, boxy, 100, 50);
  noStroke();
  fill(200);
  textSize(40);
  text(yes, boxx + 15, boxy + 40);
  text(no, boxx + 250, boxy + 40);
  if (isWithin(MouseClickedX, MouseClickedY, boxx, boxx + 100, boxy, boxy + 40)) {
    page = page + 1
  }
  if (isWithin(MouseClickedX, MouseClickedY, boxx + 225, boxx + 325, boxy, boxy + 40)) {
    page = page + 2
  }
  MouseClickedX = 0;
  MouseClickedY = 0;
}

function Mickey() {
  noStroke();
  fill(150);
  textSize(40);
  text("Here's Mickey", 175, 100);
  stroke('black');
  fill('black');
  ellipse(mx1, my1, 35, 35);
  ellipse(earmx1, earmy1, 15, 15);
  ellipse(earmx2, earmy2, 15, 15);

  //Mickey movement 
  mx1 = mx1 + 3
  my1 = my1 + 3
  earmx1 = earmx1 + 3
  earmy1 = earmy1 + 3
  earmx2 = earmx2 + 3
  earmy2 = earmy2 + 3

  //Mickey stopping point  
  if (mx1 > width / 2) {
    mx1 = width / 2;
  }
  if (my1 > height / 2) {
    my1 = height / 2;
  }
  if (earmx1 > width - 315) {
    earmx1 = width - 315;
  }
  if (earmy1 > height - 270) {
    earmy1 = height - 270;
  }
  if (earmx2 > width - 285) {
    earmx2 = width - 285;
  }
  if (earmy2 > height - 270) {
    earmy2 = height - 270;
  }
}

function picpage() {
  background(230, 247, 247);
  noStroke()
  fill(170, 237, 180);
  rect(0, 525, 600, 100);			//Grassy field
  stroke(248, 244, 139);
  fill(248, 244, 139);
  ellipse(500, 100, 90, 90);		//Adding a little sunshine
  strokeWeight(5);
  strokeCap(ROUND);
  line(500, 5, 500, 195);
  line(400, 100, 595, 100);
  line(400, 175, 590, 7);
  line(400, 7, 590, 185);
  stroke(154, 182, 189);
  fill(154, 182, 189);
  beginShape();								//Mountains
  vertex(0, 525);
  vertex(0, 300);
  vertex(100, 100);
  vertex(200, 260);
  vertex(300, 50);
  vertex(425, 305);
  vertex(520, 125);
  vertex(600, 280);
  vertex(600, 525);
  endShape(CLOSE);

  //Continue box
 	stroke(150);
  noFill();
  rect(width/2.85, 375, 160, 50);
  noStroke();
  fill(150);
  textSize(20);
	text(clickcont, width/2.75, 400);
  if (isWithin(MouseClickedX, MouseClickedY, width/2.85, width/2.85 + 160, 375, 375+50)){
    page = page + 8;
  }
  MouseClickedX = 0;
  MouseClickedY = 0;
}

//another option
function NoAgain(){
  background('teal');
  textSize(35);
  text("How about some word of wisdom?", 50, 200);
  noFill();
  stroke(220);
  rect(boxx, boxy, 100, 50);
  rect(boxx + 225, boxy, 100, 50);
  noStroke();
  fill(220);
  textSize(40);
  text(yes, boxx + 15, boxy + 40);
  text(no, boxx + 250, boxy + 40);
  if (isWithin(MouseClickedX, MouseClickedY, boxx, boxx + 100, boxy, boxy + 40)) {
    page = page + 3
  }
  if (isWithin(MouseClickedX, MouseClickedY, boxx + 225, boxx + 325, boxy, boxy + 40)) {
    page = page + 4
  }
  MouseClickedX = 0;
  MouseClickedY = 0;
}

function words(){
  background(240, 204, 204);
  noStroke();
  fill(0);
  textSize(15);
	text(wordofwisdom, 100, 250);
}

function notowords(){
  background(146, 208, 220);
  fill(98, 98, 98);
	text("OK", 245, 150);
  text("Well that's all for now!", 100, 250);
}

function afterMickey(){
  background('teal');
  textSize(35);
  textAlign(CENTER);
  text(wanttosee, width/2, 200);
  noFill();
  stroke(220);
  rect(boxx, boxy, 100, 50);
  rect(boxx + 225, boxy, 100, 50);
  noStroke();
  fill(220);
  textSize(40);
  textAlign(LEFT);
  text(yes, boxx + 15, boxy + 40);
  text(no, boxx + 250, boxy + 40);
  if (isWithin(MouseClickedX, MouseClickedY, boxx, boxx + 100, boxy, boxy + 40)) {
    page = page + 1
  }
  if (isWithin(MouseClickedX, MouseClickedY, boxx + 225, boxx + 325, boxy, boxy + 40)) {
    page = page - 1
  }
  MouseClickedX = 0;
  MouseClickedY = 0;
}  

function showMinnie() {
  Minnie();
  noStroke();
  fill(0);
  textAlign(LEFT);
  textSize(30);
  text("Here's Minnie!", 100, 150);
 	stroke(120);
  noFill();
  rect(width/2.85, 375, 160, 50);
  noStroke();
  fill(120);
  textSize(20);
	text(clickcont, width/2.75, 400);
  if (isWithin(MouseClickedX, MouseClickedY, width/2.85, width/2.85 + 160, 375, 375+50)){
    page = page + 3
  }
  MouseClickedX = 0;
  MouseClickedY = 0;
}


function Minnie(){
  background(172, 222, 248);
  stroke(242, 144, 174);
  fill(242, 144, 174);
  ellipse(minx1, miny1, 35, 35);
  ellipse(earminx1, earminy1, 15, 15);
  ellipse(earminx2, earminy2, 15, 15);  

//Minnie movement  
  minx1 = minx1-3
  miny1 = miny1+3
  earminx1 = earminx1-3
  earminy1 = earminy1+3
  earminx2 = earminx2-3
  earminy2 = earminy2+3

//Minnie stopping point  
  if(minx1<width - 225){
    minx1=width - 225;
  }
  if(miny1>height/2){
    miny1=height/2;
  }
  if(earminx1<width - 240){
    earminx1=width - 240;
  }
  if(earminy1>height - 270){
    earminy1=height - 270;
  }
  if(earminx2<width - 210){
    earminx2=width - 210;
  }
  if(earminy2>height - 270){
    earminy2=height - 270;
  }
}

function afterMinnie(){
	background(204, 229, 255);
  textSize(35);
  textAlign(CENTER);
  text("Want to continue?", width/2, 200);
  noFill();
  stroke(100);
  rect(boxx, boxy, 100, 50);
  rect(boxx + 225, boxy, 100, 50);
  noStroke();
  fill(100);
  textSize(40);
  textAlign(LEFT);
  text(yes, boxx + 15, boxy + 40);
  text(no, boxx + 250, boxy + 40);
  if (isWithin(MouseClickedX, MouseClickedY, boxx, boxx + 100, boxy, boxy + 40)) {
    page = page + 1
  }
  if (isWithin(MouseClickedX, MouseClickedY, boxx + 225, boxx + 325, boxy, boxy + 40)) {
    page = page - 1
  }
  MouseClickedX = 0;
  MouseClickedY = 0;  
}

function MickeyandMinnie(){
  background(230, 247, 247);
  Minnie();

//Mickey  
  stroke('black');
  fill('black');
  ellipse(mx1, my1, 35, 35);
  ellipse(earmx1, earmy1, 15, 15);
  ellipse(earmx2, earmy2, 15, 15);
  
//Mickey movement 
  mx1 = mx1+3
  my1 = my1+3
  earmx1 = earmx1+3
  earmy1 = earmy1+3
  earmx2 = earmx2+3
  earmy2 = earmy2+3

//Mickey stopping point  
  if(mx1>width - 275){
    mx1=width - 275;
  }
  if(my1>height/2){
    my1=height/2;
  }
  if(earmx1>width - 290){
    earmx1=width - 290;
  }
  if(earmy1>height - 270){
    earmy1=height - 270;
  }
  if(earmx2>width - 260){
    earmx2=width - 260;
  }
  if(earmy2>height - 270){
    earmy2=height - 270;
  }
  noStroke();
  fill(220, 65, 98);
  textSize(30);
  text("Mickey & Minnie met...", width/4, 100);
  text("...and the rest is history.", width/4, 400);
  
}
  
function afterPic(){
	background(191, 215, 219);
  stroke(150);
  fill(240, 230, 140);
  rect(boxx, boxy, 100, 50, 5);
  fill(60, 165, 196);
  rect(boxx + 225, boxy, 100, 50, 5);
  noStroke();
  fill(25);
  textSize(30);
	text("Click either box for a surprise.", 100, 150);
  if (isWithin(MouseClickedX, MouseClickedY, boxx, boxx + 100, boxy, boxy + 40)) {
    page = page - 1
  }
  if (isWithin(MouseClickedX, MouseClickedY, boxx + 225, boxx + 325, boxy, boxy + 40)) {
    page = page - 4
  }
  MouseClickedX = 0;
  MouseClickedY = 0;  
}
  
function keyPressed() {
  if (page < 1) {
    page = page + 1
  }
}

function isWithin(pointx, pointy, sidex1, sidex2, sidey1, sidey2) {
  if ((pointx > sidex1) && 
    (pointx < sidex2) && 
    (pointy > sidey1) && 
    (pointy < sidey2)) { 
    return true;
  } else {
    return false;
  }
}

function mouseClicked() {
  MouseClickedX = mouseX
  MouseClickedY = mouseY
}