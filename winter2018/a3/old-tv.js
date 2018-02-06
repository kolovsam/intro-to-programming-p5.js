//Sonam Samel 3 Interactive Story

//these are the variables for the center character
var characterx = 125
var charactery = 81

//these are the variables for the background rectangles
var rectx = 34
var recty = 31

function setup() {
  createCanvas(400, 440);
}

//this draws the background
function draw() {
  background('black');
  strokeWeight(0);
  fill('#b7b7b7');
  rect(rectx, recty, rectx + 22, recty + 243);
  fill('#a6a5a5');
  rect(rectx + 53, recty, rectx + 22, recty + 243);
  fill('#969494');
  rect(rectx + 109, recty, rectx + 22, recty + 243);
  fill('#838181');
  rect(rectx + 165, recty, rectx + 22, recty + 243);
  fill('#737272');
  rect(rectx + 221, recty, rectx + 22, recty + 243);
  fill('#636363');
  rect(rectx + 277, recty, rectx + 22, recty + 243);
  fill('white')
  textSize(13);
  textFont('trebuchet');
  text('* P r e s s   t h e   k e y   o n   y o u r   k e y b o a r d *', 61, 329);


  //this draws the alphabetic button cues
  
  //this draws the pink button
  fill('#f49ac1');
  ellipse(77, 380, 53, 53);
  fill('pink');
  ellipse(77, 380, 43, 43);
  fill('black');
  textSize(20);
  textFont('trebuchet');
  text('P', 72, 386);

  //this draws the blue button
	fill('#31b4e4');
  ellipse(159, 380, 53, 53);
  fill('lightskyblue');
  ellipse(159, 380, 43, 43);
  fill('black');
  textSize(20);
  textFont('trebuchet');
  text('B', 153, 386);

  //this draws the red button
	fill('#ec4e4e');
  ellipse(242, 380, 53, 53);
  fill('lightcoral');
  ellipse(242, 380, 43, 43);
  fill('black');
  textSize(20);
  textFont('trebuchet');
  text('R', 236, 386);

  //this draws the green button
	fill('#26af60');
  ellipse(324, 380, 53, 53);
  fill('palegreen');
  ellipse(324, 380, 43, 43);
  fill('black');
  textSize(20);
  textFont('trebuchet');
  text('G', 317, 386);

  //this calls for character functions
		if (keyIsPressed) {
    if ((key == 'P') || (key == 'p')) {
      Pink();
    }
    if ((key == 'B') || (key == 'b')) {
      Blue();
    }
    if ((key == 'R') || (key == 'r')) {
      Red();
    }
    if ((key == 'G') || (key == 'g')) {
      Green();
    }
  }

}

	//This is the pink character function
function Pink() {
  stroke('white');
  strokeWeight(10);
  fill('pink');
  rect(characterx, charactery, characterx + 25, characterx + 25);
  rect(125, 231, 36, 32);
  rect(182, 231, 36, 32);
  rect(239, 231, 36, 32);
  noStroke();
  fill('white');
  ellipse(166, 149, 52, 52);
  ellipse(234, 149, 52, 52);
  fill('black');
  ellipse(166, 149, 33, 33);
  ellipse(234, 149, 33, 33);

}

//This is the blue character function
function Blue() {
  stroke('white');
  strokeWeight(10);
  fill('lightskyblue')
  rect(characterx, charactery, characterx + 25, characterx + 25);
  rect(125, 231, 36, 32);
  rect(182, 231, 36, 32);
  rect(239, 231, 36, 32);
  noStroke();
  fill('white');
  ellipse(166, 149, 52, 52);
  ellipse(234, 149, 52, 52);
  fill('black');
  ellipse(166, 149, 33, 33);
  ellipse(234, 149, 33, 33);
}

	//This is the red character function
function Red() {
  stroke('white');
  strokeWeight(10);
  fill('lightcoral')
  rect(characterx, charactery, characterx + 25, characterx + 25)
  rect(125, 231, 36, 32);
  rect(182, 231, 36, 32);
  rect(239, 231, 36, 32);
  noStroke();
  fill('white');
  ellipse(166, 149, 52, 52);
  ellipse(234, 149, 52, 52);
  fill('black');
  ellipse(166, 149, 33, 33);
  ellipse(234, 149, 33, 33);
}

	//This is the green character function
function Green() {
  stroke('white');
  strokeWeight(10);
  fill('palegreen')
  rect(characterx, charactery, characterx + 25, characterx + 25)
  rect(125, 231, 36, 32);
  rect(182, 231, 36, 32);
  rect(239, 231, 36, 32);
  noStroke();
  fill('white');
  ellipse(166, 149, 52, 52);
  ellipse(234, 149, 52, 52);
  fill('black');
  ellipse(166, 149, 33, 33);
  ellipse(234, 149, 33, 33);
}