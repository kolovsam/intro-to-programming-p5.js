/*	

HCDE 598
Intro to Programming
Jenny Thai Nguyen

*/

// colors used throughout program
var backgroundColor = 'black';
var textColor = 'white';

// moving square
var x = 215;
var y = 45;

// text strings used throughout program
var welcomeMsg = "Welcome!";
var continueMsg = "Press any key to continue";
var chooseChar = "Type letter of your chosen character";
var moveChar = "Use arrow keys to move character" 
var click = "Click anywhere for next page";
var complete = "You're done!";

// font sizes for text
var titleText = 50;
var subtitleText2 = 35;
var subtitleText3 = 30
var subtitleText = 24;

//coordinates of where the title of screen will be drawn
var titleX = 150;
var titleY = 150;

// this tracks which page we are currently showing
var pageNum = 0;

// this tracks the answer to a level number question that the user answers
var levelNum = 0;


// all things done only once
function setup() { 
  createCanvas(600, 400);

} 


function draw() { 

  
  //erases canvas each time through the draw routine
  background(backgroundColor);
  
  // for debugging, write page # near top left
  textSize(18);
  strokeWeight(1);
  fill(textColor);
  text(pageNum, 100, 100);
  
  //different actions, depending on page #
  if (pageNum == 0) {
		//writing welcome message
  	textSize(titleText);
  	fill(textColor);
  	text(welcomeMsg, titleX, titleY);
  
  	// press any key to continue message
  	textSize(subtitleText);
  	fill(textColor);
  	text(continueMsg, 250, 300);

  } else if (pageNum == 1) {
    
		// choose character message
		textSize(subtitleText3);
    fill(textColor);
    text(chooseChar, 80, 150);
    textSize(subtitleText2);
    fill(textColor);
    text('A', 110, 300);
    text('B', 290, 300);
    text('C', 470, 300);
    
    // character A
    strokeWeight(10);
    stroke('yellow');
    fill(0); 
  	rect(100, 200, 50, 30, 20);
    
    // character B
    strokeWeight(10);
    stroke('green');
    fill(0);
    ellipse(300, 220, 40);
    
    //character C
    strokeWeight(10);
    stroke('blue');
    fill(0);
    rect(470, 210, 20, 20, 20, 30, 20, 30);
  
 		if (keyPressed) {
    if ((key == 'a') || (key == 'A')) {
      pageNum = pageNum + 1;
    
    }
    if ((key == 'b') || (key == 'B')) {
      pageNum = pageNum + 2;

    }
    
    if ((key == 'c') || (key == 'C')) {
      pageNum = pageNum + 3;     
      
      }                
    
    }
  
  } else if (pageNum == 2) {
    textSize(subtitleText);
  	fill(textColor);
  	text(moveChar, 200, 300);
    text(click, 200, 350);
    
    if (mouseIsPressed == true) {
    pageNum = pageNum + 3;
      
    }
    
    if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) { 
      x--;
    } 
    else if (keyCode == RIGHT_ARROW) { 
      x++;
    }
    else if (keyCode == UP_ARROW) {
      y--;
    } 
    else if (keyCode == DOWN_ARROW) {
      y++;
    }
  }
    
    strokeWeight(10);
    stroke('yellow');
    fill(0);
 		rect(x-115, y + 155, 50, 30, 20);
    
  } else if (pageNum == 3) {
    textSize(subtitleText);
  	fill(textColor);
  	text(moveChar, 200, 300);
    text(click, 200, 350);
    if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) { 
      x--;
    } 
    else if (keyCode == RIGHT_ARROW) { 
      x++;
    }
    else if (keyCode == UP_ARROW) {
      y--;
    } 
    else if (keyCode == DOWN_ARROW) {
      y++;
    }
  }
    strokeWeight(10);
    stroke('green');
    fill(0);
    ellipse(x + 85, y + 175, 40);
    
    if (mouseIsPressed == true) {
    pageNum = pageNum + 2;
  
    }
    
} else if (pageNum == 4) {
    textSize(subtitleText);
  	fill(textColor);
  	text(moveChar, 200, 300);
  	text(click, 200, 350);
  	if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) { 
      x--;
    } 
    else if (keyCode == RIGHT_ARROW) { 
      x++;
    }
    else if (keyCode == UP_ARROW) {
      y--;
    } 
    else if (keyCode == DOWN_ARROW) {
      y++;
    }
  }
  
    strokeWeight(10);
    stroke('blue');
    fill(0);
    rect(x+ 255, y + 165, 20, 20, 20, 30, 20, 30);
  
		if (mouseIsPressed == true) {
    pageNum = pageNum + 1;
  
		}
  
  	} else if (pageNum == 5) { 
  	line(40, 40, 500, 200);
  	text(continueMsg, 100, 50);
  	
      if (keyIsPressed) {
  	line(500, 40, 40, 200);
  	textSize(titleText);
  	text(complete, 200, 350);
    
  }
  }
}
  
	function keyPressed() {
	//to get past the continue message
    	if (pageNum <= 0) {
        	pageNum = pageNum + 1;
      }
    
  }
