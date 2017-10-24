//Nursalim: Disney Characters (Tsum Tsum inspired)
function setup() { 
  createCanvas(500, 500);
  background(230, 247, 247);
} 

var mx1 = 25;  //Mickey face width
var my1 = 50;	//Mickey face height
var earmx1 = 10; //Mickey left ear width
var earmy1 = 30;	//Mickey left ear height
var earmx2 = 40;	//Mickey right ear width
var earmy2 = 30;	//Mickey right ear height

var minx1 = 475;	//Minnie face width
var miny1 = 50;		//Minnie face height
var earminx1 = 460;	//Minnie left ear width
var earminy1 = 30;	//Minnie left ear height
var earminx2 = 490;	//Minnie right ear width
var earminy2 = 30;	//Minnie right ear height

var wx1 = 25;  //Winnie the Pooh face width
var wy1 = 475;	//Winnie the Pooh face height
var earwx1 = 10; //Winnie the Pooh left ear width
var earwy1 = 460;	//Winnie the Pooh left ear height
var earwx2 = 40;	//Winnie the Pooh right ear width
var earwy2 = 460;	//Winnie the Pooh right ear height

var pearcolor = ('pink');	//Piglet ear color
var px1 = 475;  //Piglet face width
var py1 = 475;	//Piglet face height
var earplx1 = 465; 	//Piglet left ear width
var earply1 = 460;	//Piglet left ear height
var earplx2 = 471;	//Piglet left ear width
var earply2 = 445;	//Piglet left ear height
var earplx3 = 473;	//Piglet left ear width
var earply3 = 460;	//Piglet left ear height
var earprx1 = 477; 	//Piglet right ear width
var earpry1 = 460;	//Piglet right ear height
var earprx2 = 479;	//Piglet right ear width
var earpry2 = 445;	//Piglet right ear height
var earprx3 = 485;	//Piglet right ear width
var earpry3 = 460;	//Piglet right ear height

function draw() { 
  background(230, 247, 247);

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

//Minnie
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

//Winnie the Pooh  
  stroke(247, 147, 30);
  fill(247, 147, 30);
  ellipse(wx1, wy1, 35, 35);
  ellipse(earwx1, earwy1, 13, 10);
  ellipse(earwx2, earwy2, 13, 10);

//Winnie the Pooh movement  
  wx1 = wx1+3
  wy1 = wy1-3
  earwx1 = earwx1+3
  earwy1 = earwy1-3
  earwx2 = earwx2+3
  earwy2 = earwy2-3

//Winnie the Pooh stopping point  
  if(wx1>=width - 325){
    wx1=width - 325;
  }
  if(wy1<height/2){
    wy1=height/2;
  }
  if(earwx1>width - 340){
    earwx1=width - 340;
  }
  if(earwy1<height - 265){
    earwy1=height - 265;
  }
  if(earwx2>width - 310){
    earwx2=width - 310;
  }
  if(earwy2<height - 265){
    earwy2=height - 265;
  }

//Piglet
  stroke(233, 126, 158);
  fill(233, 126, 158);
  triangle(earplx1, earply1, earplx2, earply2, earplx3, earply3);
  triangle(earprx1, earpry1, earprx2, earpry2, earprx3, earpry3);
  stroke(pearcolor);
  fill(pearcolor);
  ellipse(px1, py1, 35, 35);

//Piglet movement
  earplx1 = earplx1-3
  earply1 = earply1-3
  earplx2 = earplx2-3
  earply2 = earply2-3
  earplx3 = earplx3-3
  earply3 = earply3-3
  earprx1 = earprx1-3
  earpry1 = earpry1-3
  earprx2 = earprx2-3
  earpry2 = earpry2-3
  earprx3 = earprx3-3
  earpry3 = earpry3-3   
  px1 = px1-3
  py1 = py1-3

//Stopping point for Piglet's left ear
  if(earplx1<width - 185){
    earplx1=width - 185;
  }
  if(earply1<height - 265){
    earply1=height - 265;
  }
  if(earplx2<width - 179){
    earplx2=width - 179;
  }
  if(earply2<height - 280){
    earply2=height - 280;
  }
  if(earplx3<width - 177){
    earplx3=width - 177;
  }
  if(earply3<height - 265){
    earply3=height - 265;
  }
  
//Stopping point for Piglet's right ear
  if(earprx1<width - 173){
    earprx1=width - 173;
  }
  if(earpry1<height - 265){
    earpry1=height - 265;
  }
  if(earprx2<width - 171){
    earprx2=width - 171;
  }
  if(earpry2<height - 280){
    earpry2=height - 280;
  }
  if(earprx3<width - 165){
    earprx3=width - 165;
  }
  if(earpry3<height - 265){
    earpry3=height - 265;
  }  
  
//Stopping point for Piglet's face
  if(px1<=width - 175){
    px1=width - 175;
  }
  if(py1<height/2){
    py1=height/2;
  }
}