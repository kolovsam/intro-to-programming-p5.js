/*
Can Zhao HCDE 598
Assignment 2 Heart
*/
	var block = 24
  var y = 296;
  var x = 148;
  var y1 = 297;
  var y2 = 297;
	var y3 = 297;
	var y4 = 0;
	var y5 = 0;
	var y6 = 0;

  function setup() {
    createCanvas(320, 320);
    frameRate(90);
    fill(253, 94, 149);

  }

  function draw() {
    background(255);
    strokeWeight(2);
    stroke(255);
    rect(x, y, block, block);
    y = y - 1;
    if (y < 230) {
      y = 230;
    }

    for (var x1 = 117; x1 < 180.1; x1 += 31) {
      rect(x1, y1, block, block);
    }
    y1 = y1 - 1;
    if (y1 < 197) {
      y1 = 197;
    }

    for (var x2 = 85; x2 < 117; x2 += 31) {
      rect(x2, y2, block, block);
    }
    y2 = y2 - 1;
    if (y2 < 164) {
      y2 = 164;
    }

		for (var x3 = 180; x3 < 212; x3 += 31) {
      rect(x3, y2, block, block);
    }
    y2 = y2 - 1;
    if (y2 < 164) {
      y2 = 164;
    }

    for (var x4 = 54; x4 < 86; x4 += 31) {
      rect(x4, y3, block, block);
    }
    y3 = y3 - 1;
    if (y3 < 132) {
      y3 = 132;
    }
    
    for (var x5 = 211; x5 < 243; x5 += 31) {
      rect(x5, y3, block, block);
    }
    y3 = y3 - 1;
    if (y3 < 132) {
      y3 = 132;
    }
    //bottomn
	  for (var x6 = 54; x6 < 86; x6 += 31) {
      rect(x6, y4, block, block);
    }
    y4 = y4 + 1;
    if (y4 > 98) {
      y4 = 98;
    }
    
    for (var x7 = 211; x7 < 243; x7 += 31) {
      rect(x7, y4, block, block);
    }
    y4 = y4 + 1;
    if (y4 > 98) {
      y4 = 98;
    }
    
    for (var x8 = 85; x8 < 117; x8 += 31) {
      rect(x8, y5, block, block);
    }
    y5 = y5 + 1;
    if (y5 > 66) {
      y5 = 66;
    }
    
    for (var x9 = 180; x9 < 212; x9 += 31) {
      rect(x9, y5, block, block);
    }
    y5 = y5 + 1;
    if (y5 > 66) {
      y5 = 66;
    }
    
    rect(x, y6, block, block);
    y6 = y6 + 1;
    if (y6 > 98) {
      y6 = 98;
    }
    //top
  }
    