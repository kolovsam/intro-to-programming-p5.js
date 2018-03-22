function setup() { 
  cnv=createCanvas(400, 400);

} 

function draw() { 
  background(242);
}
var txtColor='white';
var welcomeMsg="Should I worry?";
var continueMsg="Press any key to continue...";
var question1="Do you have a problem in life?";
var question2="Can you do something about it?";
var promptTxt1="Then no need to worry!";
var promptTxt2="No more worries!";
var questionColor='black';
//title position
var titleX=100;
var titleY=180;
var cnv;

//continue msg position
var continueX;
var continueY;

//font sizes
var h1=64
var h2=42;
var h3=32;
var h4=28;
var h5=24;


//which page
var pageNum=1;

//which level
var levelNum=1;

//mouseClicked()
var MouseClikedAtX;
var MouseClikedAtY;

function setup(){
	cnv=createCanvas(800,600);
  continueX=width/2-20;
  continueY=height-120;
  box1X=continueX;
  box1Y=continueY; 
  noStroke();
}

function draw(){
  background(85,182,250);
  fill(txtColor);
  textSize(h5);
  //text(pageNum,50,60);
  
  //depending on pageNum, draw different things
  if(pageNum==1){
  	drawPage1();
  }else if(pageNum==2){
  	drawPage2();
  }else if(pageNum==3){
  	drawPage3();
  }else{
  	//not defined
  }
  
}

//draw page 1
function drawPage1(){
  fill(80,227,194);
  rect(0,370,800,230);
	textSize(h1);
  fill(txtColor);
  text(welcomeMsg,titleX,titleY);
  //prompt--press key to continue
  textSize(h4);
  text(continueMsg,continueX,continueY);

}

//draw page 2
function drawPage2(){
	background(242);
  //level question1
  textSize(h2);
  fill(questionColor);
  text(question1,titleX,titleY);
  //two btns
  fill(85,182,250);
  rect(titleX+40,titleY+120,480,70,8);
  rect(titleX+40,titleY+220,480,70,8);
  //btn txt
  fill(txtColor);
  textSize(h4);
  text("YES",width/2-50,titleY+165);
  text("NO",width/2-40,titleY+265);
  //depend on the user's click, show different prompt message
  if(isWithin(MouseClikedAtX,MouseClikedAtY,titleX+40,titleX+520,titleY+120,titleY+190)){
  	pageNum=pageNum+1//when selecting YES, go to the next page
  }else if(isWithin(MouseClikedAtX,MouseClikedAtY,titleX+40,titleX+520,titleY+220,titleY+290)){
  	fill(85,182,250);
    textSize(h3);
    text(promptTxt1,width/2-190,titleY+80)//when selecting no, show prompt message
  }
}

//draw page 3
function drawPage3(){
	background(242);
  //level question1
  textSize(h2);
  fill(questionColor);
  text(question2,titleX,titleY);
  //two btns
  fill(80,227,194);
  rect(titleX+40,titleY+120,480,70,8);
  rect(titleX+40,titleY+220,480,70,8);
  //btn txt
  fill(txtColor);
  textSize(h4);
  text("YES",width/2-50,titleY+165);
  text("NO",width/2-40,titleY+265);
  //depend on the user's click, show different prompt message
  fill(240);
  if(isWithin(MouseClikedAtX,MouseClikedAtY,titleX+40,titleX+520,titleY+120,titleY+190)){
  	fill(80,227,194);
    textSize(h3);
    text(promptTxt2,width/2-130,titleY+80)
    //when selecting YES, show prompt message1
  }else if(isWithin(MouseClikedAtX,MouseClikedAtY,titleX+40,titleX+520,titleY+220,titleY+290)){
  	fill(80,227,194);
    textSize(h3);
    text(promptTxt1,width/2-190,titleY+80)//when selecting no, show prompt message 2
  }
}



//judge if a click of mouse is inside a rect
function isWithin(pointX,pointY,rectX1,rectX2,rectY1,rectY2){
	if((pointX>rectX1)	&&(pointX<rectX2)&&(pointY>rectY1)&&(pointY<rectY2)){
  	return true;
  }else{
  	return false;
  }
  
}

function keyPressed(){
	//only on the first page
  if(pageNum==1){
  	pageNum=pageNum+1;
  }
}

function mouseClicked(){
	MouseClikedAtX=mouseX;
  MouseClikedAtY=mouseY;
}




