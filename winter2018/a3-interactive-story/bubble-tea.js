//Samuel Shen, Assignment 3 - Bubble Tea

var questionaire = 'Hi, do you want to try our new Bubble Tea :) ?'
var questionaire2 = 'What kind of toppings do you want?'
//mouseClicked()
var mouseLocationX;
var mouseLocationY;
//pageNumber
var pageNum=1;

function setup() { 
  createCanvas(600, 600);
} 

function draw() {
  background("#fbfbfb");
	textFont('Trebuchet MS');
  textSize(24);
  textAlign(CENTER);
  strokeWeight(2);
  
if(pageNum==1){
  	drawPageBeginning();
  }else if(pageNum==2){
  	drawPageNoThanks();
  }else if(pageNum==3){
  	drawPageToppings();
  }else if(pageNum==4){
    drawPageBoba();
	}else if(pageNum==5){
    drawPageJelly();
}
}

function drawPageBeginning(){
  //Beginning Question
  text(questionaire,width/2-200,height/2,400,200);
  //Answers
  rect(100,400,100,50,5);
  text('yes',110,410,100,100);
  rect(380,400,100,50,5);
  text('no',385,410,100,100); 
  //check mouse location
  if (mouseLocationX >100 && mouseLocationX <200 && mouseLocationY >400 && mouseLocationY <450){
  	//clear mouse location 
  mouseLocationX=0;
  mouseLocationY=0;
    pageNum = 3;
	}
  if (mouseLocationX >380 && mouseLocationX <480 && mouseLocationY >400 && mouseLocationY <450){
  mouseLocationX=0;
  mouseLocationY=0;
    pageNum = 2;  
	}
}

function drawPageNoThanks(){
  background("#FFFFFF");
  //Beginning Question
  textSize(24);
  textAlign(CENTER);
  text('No problem, see you later',width/2-200,height/2,400,200);
  //Answers
}

function drawPageToppings(){
  //Beginning Question
  fill("#000");
  text(questionaire2,width/2-200,height/2,400,200);
	//Bubble Tea Container
  fill("#ffffff");
  arc(300,150,80,80,PI,TWO_PI);
  rect(105+150,150,90,10);
  fill("#DBC6A7");
  quad(105+150,160,115+150,250,185+150,250,195+150,160);
  fill("#000");
  //Answers
  fill("#ffffff");
  rect(100,400,100,50,5);
  fill("#000");
  text('BOBA',105,410,100,100);
  fill("#ffffff");
  rect(380,400,100,50,5);
  fill("#000");
  text('Jelly',385,410,100,100);
  if (mouseLocationX >100 && mouseLocationX <200 && mouseLocationY >400 && mouseLocationY <450){
  pageNum = 4;  
	}
  if (mouseLocationX >380 && mouseLocationX <480 && mouseLocationY >400 && mouseLocationY <450){
  pageNum = 5;  
	}
}

function drawPageBoba(){
  //Beginning Question
  fill("#000");
  text('Here you go =)',width/2-200,height/2,400,200);
  //Bubble Tea Container
  fill("#ffffff");
  arc(300,150,80,80,PI,TWO_PI);
  rect(105+150,150,90,10);
  fill("#DBC6A7");
  quad(105+150,160,115+150,250,185+150,250,195+150,160);
  //Boba
  fill("#000");
  ellipse(295,230,8,8);
  ellipse(280,220,8,8);
  ellipse(274,240,8,8);
  ellipse(310,243,8,8);
  ellipse(310,243,8,8);
  ellipse(314,223,8,8);
  ellipse(325,235,8,8);
}

function drawPageJelly(){
  background("#FFFFFF");
  //Beginning Question
  textSize(24);
  textAlign(CENTER);
  fill("#000");
  text('Rainbow Jelly :)',width/2-200,height/2,400,200);
  //Bubble Tea Container
  fill("#ffffff");
  arc(300,150,80,80,PI,TWO_PI);
  rect(105+150,150,90,10);
  fill("#DBC6A7");
  quad(105+150,160,115+150,250,185+150,250,195+150,160);
  fill("#FFF100");
  rect(295,230,8,8,2,2,2,2);
  fill("#FF0000");
  rect(280,220,8,8,2,2,2,2);
  fill("#FFAC00");
  rect(274,240,8,8,2,2,2,2);
  fill("#FFAC00");
  rect(310,241,8,8,2,2,2,2);
  fill("#ffac00");
  rect(314,223,8,8,2,2,2,2);
  fill("#ffffffff");
  rect(325,235,8,8,2,2,2,2);
}

function mouseClicked(){
	mouseLocationX=mouseX;
  mouseLocationY=mouseY;
}
