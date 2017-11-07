/*	HCDE 598a Assignment #3 Interactive Story
    
*/

//variables
var bgColor = 'green';
var txtColor = 'black';
var titleMsg = "Tid Bit about Samoan Culture";
var continueMsg = "Press any key to continue ...";
var Page2Msg = "click next to see a fale";

// coordinates for title
var titleX = 100;
var titleY = 200;

// coordinates of where continue message will be drawn
var continueX;
var continueY;

// font sizes for various kinds of text
var titleTextSize = 50;
var promptTextSize = 20;
var msgTextSize = 20;

// tracks page number
var pageNum = 0; 

function setup() {
   createCanvas(800, 400); //900, 500

    // always offset the messages and buttons from the right side and the bottom of the canvas
    continueX = width / 2;
    continueY = height - 100;
	  
    
} 

function draw() {
   background(bgColor);

   // writes the page number near the top left
    textSize(18);
    strokeWeight(1);
    fill(txtColor);
    text(pageNum, 100, 100);

    
    if (pageNum == 1) {
        Page1();

    } else if (pageNum == 2) {
        Page2();

    } else if (pageNum == 3) {
        Page3();

    }

}


// draw page 1
function Page1() {

    // write title message
    textSize(titleTextSize);
    fill(txtColor);
    text(titleMsg, titleX, titleY);

    // continue message
    textSize(promptTextSize);
    fill(txtColor);
    text(continueMsg, continueX, continueY);   

}


// draw page 2
function Page2() {

    // write message
    textSize(msgTextSize);
    fill(txtColor);
	//story for page 2 paragraph broken into three segments 8words,
	 text("Names are extremely important in Samoan Culture.", 70, 150);
   text("Everyone is given a birth name, but throughout their lifetime ", 70, 184 );
	 text("they could continue to add more names for themselves.", 70, 220); 


	// issue prompt to continue
    textSize(promptTextSize);
    fill(txtColor);
    text(continueMsg, continueX, continueY);



}


// draw page 3
function Page3() {
    textSize(msgTextSize);
	  fill(txtColor);
	  text("Aquiring a new name meant receiving a chief title." , 300, 90);
	  text("Clans bestowed titles on inviduals.", 300, 110);
	  text("A Title tells a clan's history and their rights to specific", 300, 130);
	  text("lands and waters. Chief titles are tied to land rights.", 300, 150);
	  text("This is why American Samoa is the only",  350, 180);
	  text("unincorporated territory of the U.S.", 350, 200); 
	  text("Full incorporation would mean leaving Samoan ", 350, 220);
	  text("traditional system of land rights.", 350, 240);
	  text("Today, homes continue to be built on", 350, 260);
	  text("ancestral lands.", 350, 280);
	   
	
	
  //draw Samoan House 
  strokeWeight(4);
  fill(130);
  rect(96, 200, 15, 100);
  fill(70);
  rect(140, 200, 15, 100);
  fill(130);
  rect(184, 200, 15, 100);
  fill(70);
  rect(228, 200, 15, 100);
  fill(130)
  rect(270, 200, 15, 100);
  fill(70)
  rect(308, 200, 15, 100);

  //roof of samoan house
  fill('brown');
  strokeWeight(5);
  strokeJoin(ROUND);
  triangle(85, 200, 210, 80, 333, 200);

  //thatching hanging from roof 
  strokeWeight(3);
  line(85, 200, 80, 210);
  line(90, 200, 85, 210);
  line(95, 200, 90, 210);
  line(105, 200, 100, 210);
  line(110, 200, 105, 210);
  line(115, 200, 110, 210);
  line(120, 200, 115, 210);
  line(125, 200, 120, 210);
  line(130, 200, 125, 210);
  line(135, 200, 130, 210);
  line(140, 200, 135, 210);
  line(145, 200, 140, 210);
  line(150, 200, 145, 210);
  line(155, 200, 150, 210);
  line(160, 200, 155, 210);
  line(165, 200, 160, 210);
  line(170, 200, 165, 210);
  line(175, 200, 170, 210);
  line(180, 200, 175, 210);
  line(185, 200, 180, 210);
  line(190, 200, 185, 210);
  line(195, 200, 190, 210);
  line(200, 200, 195, 210);
  line(205, 200, 200, 210);
  line(210, 200, 205, 210);
  line(215, 200, 210, 210);
  line(220, 200, 215, 210);
  line(225, 200, 220, 210);
  line(230, 200, 225, 210);
  line(235, 200, 230, 210);
  line(240, 200, 235, 210);
  line(245, 200, 240, 210);
  line(250, 200, 245, 210);
  line(255, 200, 250, 210);
  line(260, 200, 255, 210);
  line(265, 200, 260, 210);
  line(270, 200, 265, 210);
  line(275, 200, 270, 210);
  line(280, 200, 275, 210);
  line(285, 200, 280, 210);
  line(290, 200, 285, 210);
  line(295, 200, 290, 210);
  line(300, 200, 295, 210);
  line(305, 200, 300, 210);
  line(310, 200, 305, 210);
  line(315, 200, 310, 210);
  line(320, 200, 315, 210);
  line(325, 200, 320, 210);
  line(330, 200, 325, 210);
  line(335, 200, 330, 210);

  //rock flooring/foundation layer 1 (var = x+width)
  strokeWeight(4);
  fill(40);
  rect(90, 300, 30, 15, 10, 12, 1, 1); 
  rect(120, 300, 30, 15, 10, 12, 1, 1); 
  rect(150, 300, 30, 15, 10, 12, 1, 1);
  rect(180, 300, 30, 15, 10, 12, 1, 1);
  rect(210, 300, 30, 15, 10, 12, 1, 1);
  rect(240, 300, 30, 15, 10, 12, 1, 1);
  rect(270, 300, 30, 15, 10, 12, 1, 1);
  rect(300, 300, 30, 15, 10, 12, 1, 1);

  //rock foundation layer 2 (var = x+width, y+height) 
  fill(40);
  rect(90, 315, 30, 15, 10, 12, 1, 1);
  rect(120, 315, 30, 15, 10, 12, 1, 1);
  rect(150, 315, 30, 15, 10, 12, 1, 1);
  rect(180, 315, 30, 15, 10, 12, 1, 1);
  rect(210, 315, 30, 15, 10, 12, 1, 1);
  rect(240, 315, 30, 15, 10, 12, 1, 1);
  rect(270, 315, 30, 15, 10, 12, 1, 1);
  rect(300, 315, 30, 15, 10, 12, 1, 1);
    
  }


//allows clicking anywhere on page in order to move to next page
function keyPressed() {
    if (pageNum <= 3) {
        pageNum = pageNum + 1;
    }
}
