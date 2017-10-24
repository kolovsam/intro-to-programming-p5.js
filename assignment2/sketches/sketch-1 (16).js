var vertical = 400;
var horizontal = 400;


function setup() { 
  createCanvas(vertical, horizontal);
} 

var xCord1 = 0;
var yCord1 = 0;
var xCord2 = 0;
var yCord2 = vertical;
var xCord3 = horizontal;
var yCord3 = 0;
var xCord4 = horizontal;
var yCord4 = vertical;

var targetX1 = horizontal * 1 /4;
var targetX2 = horizontal * 2 /4;
var targetX3 = horizontal * 3 /4;
var targetX4 = horizontal * 4 /4;
var targetY = vertical / 2;

var directionX1 = (targetX1 - xCord1) / 100;
var directionX2 = (targetX2 - xCord2) / 100;
var directionX3 = (targetX3 - xCord3) / 100;
var directionX4 = (targetX4 - xCord4) / 100;
var directionY1 = (targetY - yCord1) / 100;
var directionY2 = (targetY - yCord2) / 100;
var directionY3 = (targetY - yCord3) / 100;
var directionY4 = (targetY - yCord4) / 100;

var myColor = 0;
var myFactor = 1;
var mySize1 = 10;
var mySize2 = 50;
var mySize3 = 30;
var mySize4 = 100;
var mySpeed = 1;
var xflag = true;
var yflag = true;

var finalSize = 100; 



function draw() { 
  background(220);
  var shake = random(-10, 10);
  fill(myColor);
  
  if(yCord1 != targetY && yCord2 != targetY && yCord3 != targetY && yCord4 != targetY){
    xCord1 += directionX1;
    xCord2 += directionX2;
    xCord3 += directionX3;
    xCord4 += directionX4;
    yCord1 += directionY1;
    yCord2 += directionY2;
    yCord3 += directionY3;
    yCord4 += directionY4;
  }else{
    // var flag = true;
    if(mySize1 < vertical / 6){
      flag = true;
    }else if(mySize1 > vertical / 2) {
     	flag = false;
    }
    if(flag){
      mySize1++;
      mySize2--;
      mySize3++;
      mySize4--;
    }else{
    	mySize1--;
      mySize2++;
      mySize3--;
      mySize4++;
    
    }
    
   
  }
  
  
  fill(255,255,255);
  ellipse(xCord1 + shake, yCord1 + shake, mySize1, mySize1);
  fill(0,255,255);
  ellipse(xCord2 + shake, yCord2 + shake, mySize2, mySize2);
  fill(255,0,255);
  ellipse(xCord3 + shake, yCord3 + shake, mySize3, mySize3);
  fill(255,255,0);
  ellipse(xCord4 + shake, yCord4 + shake, mySize4, mySize4);
  
  
  
//   if(xCord > width){
//     xflag = false;
//   }
//   if(xCord < 0){
//     xflag = true;
//   }
  
//   if(xflag == true){
//     xCord += 1;
//     mySize += 1;
//   }else{
//     xCord -= 1;
//     mySize -= 1;
//   }
  
  
}