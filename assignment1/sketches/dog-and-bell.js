function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  background('rgba(0,255,0, 0.25)');
		var c = color('pink');	
  	fill(c);  
  	noStroke();  
  	ellipse(120, 80, 50, 70);//left ear
		ellipse (280, 80, 50, 70);//right ear
		ellipse(110, 270, 100, 100);//left collar
  	ellipse(280, 270, 100, 100);//right collar
		var c = color('yellow');
  	fill(c);
  	ellipse(200, 300, 140, 140);//bell
		  	var c = color('white');
  	fill(c);
	  ellipse(200, 200, 235, 235);//da head
  	var c = color('black');
  	fill(c);
  	ellipse(200, 330, 50, 30); //inside of bell
		rect(190, 340, 20, 25);	
	  ellipse(160, 150, 40, 50); //left eye
  	ellipse(240, 150, 40, 50); //right eye
  	triangle(210, 230, 200, 270, 190, 230);
  	
}