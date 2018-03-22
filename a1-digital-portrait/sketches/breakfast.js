function setup() {
	createCanvas(600, 600);
}

function draw() {

	//gingko print

	//first line
	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(0, 0, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(100, 0, 100, 100);

	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(200, 0, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(300, 0, 100, 100);

	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(400, 0, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(500, 0, 100, 100);

	//second line
	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(0, 100, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(100, 100, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(200, 100, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(300, 100, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(400, 100, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(500, 100, 100, 100);

	//third line
	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(0, 200, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(100, 200, 100, 100);

	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(200, 200, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(300, 200, 100, 100);

	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(400, 200, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(500, 200, 100, 100);

	//fourth line
	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(0, 300, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(100, 300, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(200, 300, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(300, 300, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(400, 300, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(500, 300, 100, 100);

	//fifth line
	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(0, 400, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(100, 400, 100, 100);

	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(200, 400, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(300, 400, 100, 100);

	fill(255, 255, 255); //white
	stroke(255, 255, 255);
	rect(400, 400, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(500, 400, 100, 100);

	//sixth line
	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(0, 500, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(100, 500, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(200, 500, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(300, 500, 100, 100);

	fill(155, 178, 235); //light blue
	stroke(155, 178, 235);
	rect(400, 500, 100, 100);

	fill(95, 125, 222); //dark blue
	stroke(95, 125, 222);
	rect(500, 500, 100, 100);
	


	//EGGS

	//squiggly egg white 
	fill(255, 255, 255);
	stroke(250, 220, 70);
	strokeWeight(2);
	beginShape();
	curveVertex(90, 300);
	curveVertex(90, 300);
	curveVertex(75, 225);
	curveVertex(175, 175);
	curveVertex(250, 225);
	curveVertex(240, 300);
	curveVertex(255, 375);
	curveVertex(260, 425);
	curveVertex(175, 450);
	curveVertex(75, 375);
	curveVertex(90, 300);
	curveVertex(90, 300);
	endShape();
	
	//next, figure out how to make a drop shadow!

	//yolk
	fill(250, 230, 70);
	stroke(250, 220, 70);
	strokeWeight(3);
	ellipse(175, 300, 70, 70);
	
	//BACON
	
	//squiggly bacon
	fill(138, 29, 14);
	stroke(120, 20, 20);
	strokeWeight(4);
	beginShape();
	curveVertex(380, 125); //cp
	curveVertex(380, 125); //start
	curveVertex(480, 125); //across
	curveVertex(460, 225); //sq 1
	curveVertex(495, 350); //sq 2
	curveVertex(460, 475); //bottom
	curveVertex(360, 475); //across
	curveVertex(380, 350); // sq 2
	curveVertex(360, 225); //sq 2
	curveVertex(380, 125); //end
	curveVertex(380, 125); //cp
	endShape();


	//squiggly fat
	fill(238, 176, 104);
	stroke(194, 75, 27);
	strokeWeight(1.5);
		beginShape();
	curveVertex(450, 135); //cp
	curveVertex(450, 135); //start
	curveVertex(480, 145); //across
	curveVertex(460, 225); //sq 1
	curveVertex(495, 350); //sq 2
	curveVertex(460, 470); //bottom
	curveVertex(420, 470); //across
	curveVertex(460, 375); // sq 2
	curveVertex(430, 225); //sq 2
	curveVertex(450, 135); //cp
	curveVertex(450, 135); //cp
	endShape();
	
}

//Fini!