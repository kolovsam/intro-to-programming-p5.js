//HCDE 598A Can Zhao 1-Computer Graphics 
function setup(){
	createCanvas(1024, 1024);
	angleMode(DEGREES);
}
function draw() {
	textSize(42);
	fill(255);
	text("I'M A DOGGG", 40, 100)
 	//claim
	fill(198, 156, 109);
	stroke(198, 156, 109);
	strokeWeight(120);
	ellipse(512,561,593,593)
	//dog face
	line(123,430,308,265);
	line(900,430,735,265);
	//dog ears
	fill(136, 89, 45);
	strokeWeight(0);
	arc(400,440,280,280,130,290);
	strokeWeight(120);
	stroke(136, 89, 45);
	line(335,492,440,366);
	//dog brown fur
	fill(96, 56, 19);
	strokeWeight(0);
	ellipse(390,413,88,88);
	ellipse(640,413,88,88);
	//dog eyes
	stroke(96,56,19);
	strokeCap(ROUND);
	strokeWeight(40);
	triangle(495,570,535,570,520,610);
	line(475,560,555,560);
	line(475,560,515,610);
	line(520,610,555,560);
	//dog nose
	line(520,610,520,740);
	line(470,770,520,740);
	line(570,770,520,740);
	//dog's mouth
}

