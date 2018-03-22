/*
	Please try to left-click mouse on the canvas
*/

function setup() { 
  createCanvas(600, 600);
  background(color(0,164,255));
} 

function draw() { 
	// parameter
	var x_center = 300;
	var y_center = 450;
  var x_move;
  var y_move;
  var mouse_width = 30;
  var mouse_height = 50;
  var factor = 0.5;
	var black_r = 0;
	var black_g = 0;
	var black_b = 0;
  var white_r = 255;
	var white_g = 255;
	var white_b = 255;
  var red_r = 255;
	var red_g = 0;
	var red_b = 0;
  
  if(mouseIsPressed){
  	x_move = x_center + 10;
    y_move = y_center + 20;
    mouse_height = mouse_height * factor;
  }else{
    x_move = x_center;
    y_move = y_center;
  }
    
  
  // ear
  stroke(black_r ,black_g ,black_b);
  fill(black_r ,black_g ,black_b);
  ellipse(x_center + 160, y_center - 120, 80, 80);
  ellipse(x_center - 160, y_center - 120, 80, 80);
  fill(white_r, white_g, white_b);
  ellipse(x_center + 160, y_center - 120, 50, 50);
  ellipse(x_center - 160, y_center - 120, 50, 50);
  

	// black body
	fill(black_r ,black_g ,black_b);
  ellipse(x_center, y_center + 180, 450, 400);
 	ellipse(x_center, y_center, 400, 320);
 	
  
  
  // mouth
  fill(white_r, white_g, white_b);
  ellipse(x_center, y_center + 50, 220, 150);
  fill(black_r ,black_g ,black_b);
  ellipse(x_center, y_center + 70, mouse_width, mouse_height);
  ellipse(x_center, y_center + 10, 50, 40);
  
  //eyebrow
  fill(white_r, white_g, white_b);
  stroke(white_r, white_g, white_b);
  ellipse(x_move - 110, y_move - 100, 40, 50);
  ellipse(x_move + 110, y_move - 100, 40, 50);
  fill(black_r ,black_g ,black_b);
  stroke(black_r ,black_g ,black_b);
  ellipse(x_move - 105, y_move - 90, 50, 60);
  ellipse(x_move + 105, y_move - 90, 50, 60);
  
  // eyes
  fill(white_r, white_g, white_b);
  ellipse(x_center - 90, y_center - 55, 80, 80);
  ellipse(x_center + 90, y_center - 55, 80, 80);
  fill(black_r ,black_g ,black_b);
  ellipse(x_move - 90, y_move - 55, 25, 25);
  ellipse(x_move + 90, y_move - 55, 25, 25);
  
  // face red
  fill(red_r, red_g, red_b);
  ellipse(x_center - 170, y_center + 55, 85, 85);
  ellipse(x_center + 170, y_center + 55, 85, 85);
  
  
  


}