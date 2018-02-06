function setup() { 
  createCanvas(800, 1000);
} 

function draw() { 
  background("#F7f7f7");
	strokeWeight (2);
	stroke ("#000");
	//outter frame
	fill("#ffffff")
	rect (50,50,415,871,60);
	//inner frame
	fill("#f5f5f5");
	rect (70,153,375,667,4);
	//1st hole
	fill("#000");
	ellipse(254, 70, 8, 8);
	//2nd camera hole
	ellipse(186,96,10,10);
	//speaker
	rect (222,93,68,5,3);
	//power button
	rect (465,238,5,64,3);
	//mute
	rect (45,159,5,37,3);
	//volume up
	rect (45,239,5,64,3);
	//volume down
	rect (45,318,5,64,3);
	//home button
	ellipse(254, 869, 68, 68);
}