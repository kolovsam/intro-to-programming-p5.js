function setup() { 
  createCanvas(500, 500);
	
} 
	

	var t = 10;
	var bx1 = 74;
	var by1 = 16;
	var bx2 = 74;
	var by2 = 388;
	var bx3 = 426;
	var by3 = 388;
	var rad = 0;

function draw() { 
	
	var colorG = color(134,211,178);
	var colorY = color(248,231,162);
	var colorO = color(248,197,140);
	var colorO2 = color(229,118,97);
	var colorR = color(123,42,59);
	var colorB3 = color(356,75,100);
	
	background(colorG);
	
    // Circle
  
  fill('white');
  ellipse(250,250,rad);
  
  if (t>320) {
    rad = rad +2;
  }
  
  if (rad > 200) {
    rad = 200;
  }
  
	//Time Bar
	
	stroke(colorO);
	line(10,490,490,490);
	
	noStroke();
	fill(colorO);
	rect(t, 488, 40, 5, 20);

	
	if (t<451) {
		t=t+1;
	}else {
		t=451;
	}

	// Block 1
	fill(colorY);
	quad(bx1,by1,bx1-24,by1+14,bx1,by1+28,bx1+24,by1+14);
	
	fill(colorO2);
	quad(bx1-24,by1+14,bx1,by1+28,bx1,by1+58,bx1-24,by1+44);
	
	if (t>50) {
		bx1++;
		by1++;
	}
	
	if (t>226) {
		by1=192;
		bx1=250;
	}
	
	// Block 2
	
	fill(colorO);
	quad(bx2,by2,bx2-24,by2+14,bx2,by2+28,bx2+24,by2+14);
	fill(colorO2);
	quad(bx2-24,by2+14,bx2,by2+28,bx2,by2+58,bx2-24,by2+44);
	
	if (t>100) {
		bx2++;
		by2--;
	}
	
	if (t>252){
		bx2=bx1-24;
		by2=by1+44;
	}
	
	// Block 3
	
	fill(colorO);
	quad(bx3,by3,bx3-24,by3+14,bx3,by3+28,bx3+24,by3+14);
	fill(colorR);
	quad(bx3-24,by3+14,bx3,by3+28,bx3,by3+58,bx3-24,by3+44);
	
		if (t>150) {
		bx3--;
		by3--;
	}
	
	if (t>302){
		bx3=bx1+24;
		by3=by1+44;
	}
  

	
}
