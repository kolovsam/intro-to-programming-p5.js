var faceColor = (220, 220, 220)
var noseColor = (65, 70, 75)
function setup() {
    createCanvas(600, 600);
    background(11, 52, 110);
  
		//drawBear(300, 300, 50)

}

function drawBear(x, y, bearSize) {
  var r_5  = bearSize * 5 / 50;
	var r_10 = bearSize * 10 / 50;
  var r_20 = bearSize * 20 / 50;
  var r_30 = bearSize * 30 / 50;
  var r_40 = bearSize * 40 / 50;
  //ears
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(x - r_40, y - r_30, r_40);
  
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(x + r_40, y - r_30, r_40);
  
  strokeWeight(0);
  stroke(faceColor);
  fill(faceColor);
  ellipse(x - r_40, y - r_30, r_20);
  
  strokeWeight(0);
  stroke(faceColor);
  fill(faceColor);
  ellipse(x + r_40, y - r_30, r_20);
  
  // face
	strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(x, y, bearSize * 2);
	
	strokeWeight(0);
  stroke(faceColor);
  fill(faceColor);
  ellipse(x, y + r_20, bearSize);
  
  //nose
  strokeWeight(0);
  stroke(noseColor);
  fill(noseColor);
  triangle(x - r_10, y + r_10, x + r_10, y + r_10, x, y + r_20);

  //eyes
  strokeWeight(0);
  stroke(noseColor);
  fill(noseColor);
  ellipse(x - r_30, y - r_5, r_10);
  
  strokeWeight(0);
  stroke(noseColor);

  fill(noseColor);
  ellipse(x + r_30, y - r_5, r_10);
  
}

function mouseClicked() {
    var size = random(5, width / 10);
    drawBear(mouseX, mouseY, size);
}


/*function draw() {
  //ears
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(260, 270, 40);
  
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(340, 270, 40);
  
  strokeWeight(0);
  stroke(220, 220, 220  fill(220, 220, 220);
  ellipse(260, 270, 20);
  
  strokeWeight(0);
  stroke(221, 228, 230);
  fill(220, 220, 220);
  ellipse(340, 270, 20);
  
  // face
	strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(300, 300, 100, 100);
	
	strokeWeight(0);
  stroke(221, 228, 230);
  fill(220, 220, 220);
  ellipse(300, 320, 50, 50);
  
  //nose
  strokeWeight(0);
  stroke(65, 70, 75);
  fill(65, 70, 75);
  triangle(290, 310, 310, 310, 300, 325);
  
  //eyes
  strokeWeight(0);
  stroke(65, 70, 75);
  fill(65, 70, 75);
  ellipse(270, 295, 10);
  
  strokeWeight(0);
  stroke(65, 70, 75);
  fill(65, 70, 75);
  ellipse(330, 295, 10);
  

}

*/