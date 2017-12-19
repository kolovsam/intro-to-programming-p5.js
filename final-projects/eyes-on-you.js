/* EYES ON YOU - Final Project for HCDE 598 
by Meng Wang */


var color_green;
var color_grey;
var color_blue;

/*this function creates the eyeball and pupil; the pupil moves following the position of mouse; 
the movement of pupil will be limited in the eyeball
*/
function drawEye(x,y,eyeSize,pupilSize){
	var pupil = createVector(mouseX,mouseY);
  pupil.sub(x,y);
  pupil.limit((eyeSize-pupilSize)/2); // limit the movement of pupil
  pupil.add(x,y);
  
  //draw eyeball
  fill(256,256,256);
  ellipse(x,y,eyeSize,eyeSize);
  //draw pupil
  fill(0,0,0);
  ellipse(pupil.x,pupil.y,pupilSize,pupilSize);

}

/* The eyeBlink function creates eyelids */
function eyeBlink(x,y,eyeSize,pupilSize,color_type){
	
  //draw eyelid
  fill(color_type);
  ellipse(x,y,eyeSize,eyeSize);
  
}

function setup() { 
  createCanvas(1000, 400);
  noStroke();
  color_green = color(152,198,0);
  color_grey = color(216);
  color_blue = color(0,173,187);
} 

function draw() { 
  background(256);
  
  //draw the main body of monster_1
  fill(242,239,197);
  triangle(118,80,110,122,138,108); //left hone
  triangle(264,101,252,142,218,125); //right hone
  
  fill(176,216,0);
  ellipse(168,196,200,200);//body
  fill(152,198,0);
  ellipse(172,172,96,96);//eye shadow
  fill(255,163,176);
  ellipse(102,213,22,18); //left cheek 
  ellipse(238,216,24,18); //right cheek
  
	//draw the main body of monster_2
  fill(255,238,0);
  ellipse(500,145,175,168); //head
  rect(413,143,175,168); //body
  fill(72,72,72);
  rect(405,159,190,22,10); //necklet
  fill(237,190,0);
  ellipse(502,158,95); //eyeshadow
  fill(216,216,216);
  ellipse(500,164,98); //rim of the eye
  
  //draw the main body of monster_3
  fill(105,211,221);
  quad(718,103,936,113,897,298,747,298); //main body
  fill(0,173,187)
  ellipse(800,183,50); //left eyeshadow
  ellipse(872,184,50); //right eyeshadow
  ellipse(796,140,34,16); //left eyebrow
  ellipse(870,140,34,16); //right eyebrow
  fill(210,158,206);
  ellipse(770,245,34,30); //cheek 1
  ellipse(802,260,16,14); //cheek 2
  ellipse(780,275,18); // cheek 3
  
  
 
  if(mouseIsPressed){
  	eyeBlink(170,176,90,40, color_green); //the eyelid of monster_1
    eyeBlink(500,164,78,30, color_grey); //the eyelid of monster_2
    eyeBlink(797,185,50,20,color_blue); //the left eyelid of monster_3
    eyeBlink(869,187,50,20,color_blue); //the right eyelid of monster_3
  
  }else{
  drawEye(170,176,90,40); //draw the eye of monster_1
  drawEye(500,164,78,30); //draw the eye of monster_2
  drawEye(797,185,50,20); //draw the left eye of monster_3
  drawEye(869,187,50,20); //draw the right eye of monster_3
  

  }
  
  	
  	
 
  
  
  
}






