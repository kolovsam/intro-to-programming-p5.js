var pageNum = 1;

var wrongmessage = " no longer available "

var p1message = "Let's Build a Product.Step 1: Pick a Shape";
var p2message = "Step 2: Pick a Color";
var p3amessage = "Step 3: Pick a Cut-out Shape";
var p3bmessage = "Step 3: Pick a Cut-out Shape";
var p4message = "Your Final Customized Product";

// when the mouse is clicked, the function named mouseClicked() updates these variables
var MouseClickedAtX;
var MouseClickedAtY;


function setup() {
  createCanvas(800, 500);
}


function draw() {
  background(0);

  // page number near the top right
  textSize(18);
  noStroke();
  fill(255);
  text(pageNum, 750, 50);

  if (pageNum == 1) {

    // write welcome message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p1message, 400, 150);

    // shape options
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(250, 300, 100, 100);
    rect(450, 250, 100, 100);

    //if mouse hover over circle
    if ((mouseX > 150) && (mouseX < 350) && (mouseY > 200) && (mouseY < 400)) {
      fill(255, 0, 200);
      ellipse(250, 300, 100, 100);
    } else if ((mouseX < 550) && (mouseX > 450) && (mouseY < 350) && (mouseY > 250)) {
      fill(255, 0, 200);
      rect(450, 250, 100, 100);
    }

    // if circle is clicked
    if ((MouseClickedAtX > 150) && (MouseClickedAtX < 350) &&
      (MouseClickedAtY > 200) && (MouseClickedAtY < 400)) {
5
      // advance to page2
      pageNum = pageNum + 1;

      //if square is clicked
    } else if ((MouseClickedAtX < 550) && (MouseClickedAtX > 450) &&
      (MouseClickedAtY < 350) && (MouseClickedAtY > 250)) {
      text(wrongmessage, 600, 400);

      // shows wrong message
      //text(wrongmessage, 500, 450);
    }
    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
    
  }else if (pageNum == 2) {
     
    // write page 2 message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p2message, 400, 150);
    
    // color slider
      r=map(mouseX,0,700, 100, 255);
      b=map(mouseX,0,700, 255, 100);
      fill(r,0,b);
      rect(100,300,600,10);
    
    // target
    ellipse(100,305,30,30);
    ellipse(700,305,30,30);

  //ellipse
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(mouseX, 305, 60, 60);

  //if mouse click purple
    if ((MouseClickedAtX > 70) && (MouseClickedAtX < 130)){
      // advance to page3-purple
      pageNum = pageNum + 1.1;
      
  //if mouse click pink
      }else if ((MouseClickedAtX > 670) && (MouseClickedAtX < 730)){
        //advance to page4-pink
        pageNum = pageNum + 1.2;
    }
    
    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
    
}else if (pageNum == 3.1) {
     
    // write page 2 message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p3amessage, 400, 150);
  
  // shape options
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(250, 300, 100, 100);
    ellipse(550, 300, 100, 100);
    fill(255);
    ellipse(270,300,55,55);
    rect(530,280,40,40);
  
   //if mouse hover over circle cutout
    if ((mouseX > 150) && (mouseX < 350) && (mouseY > 200) && (mouseY < 400)) {
      fill(100, 0, 255);
     ellipse(270,300,55,55);
    } else if ((mouseX >450) && (mouseX <650) && (mouseY>200) && (mouseY < 400)) {
      fill(100, 0, 255);
      rect(530,280,40,40);
    }
  
   // if circle is clicked
    if ((MouseClickedAtX > 150) && (MouseClickedAtX < 350) &&
      (MouseClickedAtY > 200) && (MouseClickedAtY < 400)) {
      // advance to page 4.1
      pageNum = pageNum + 1;

      //if square is clicked
    } else if ((MouseClickedAtX < 550) && (MouseClickedAtX > 450) &&
      (MouseClickedAtY < 350) && (MouseClickedAtY > 250)) {
    // advance to page 4.2
      pageNum = pageNum +1.1;
    }
      // reset these for the next time through draw()
    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
  
  
}else if (pageNum == 3.2) {
     
    // write page 2 message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p3bmessage, 400, 150);
  
  // shape options
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(250, 300, 100, 100);
    ellipse(550, 300, 100, 100);
    fill(255);
    ellipse(270,300,55,55);
    rect(530,280,40,40);
  
   //if mouse hover over circle cutout
    if ((mouseX > 150) && (mouseX < 350) && (mouseY > 200) && (mouseY < 400)) {
      fill(255, 0, 100);
     ellipse(270,300,55,55);
    } else if ((mouseX >450) && (mouseX <650) && (mouseY>200) && (mouseY < 400)) {
      fill(255, 0, 100);
      rect(530,280,40,40);
    }
  
   // if circle is clicked
    if ((MouseClickedAtX > 150) && (MouseClickedAtX < 350) &&
      (MouseClickedAtY > 200) && (MouseClickedAtY < 400)) {
      // advance to page 4.3
      pageNum = pageNum + 1.1;

      //if square is clicked
    } else if ((MouseClickedAtX < 550) && (MouseClickedAtX > 450) &&
      (MouseClickedAtY < 350) && (MouseClickedAtY > 250)) {
    // advance to page 4.4
      pageNum = pageNum + 1.2;
    }
  
    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
  
  
}else if(pageNum == 4.1) {
     
    // write page 2 message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p4message, 400, 150);
  
  // shape options
    noStroke();
    fill(100,0,255);
    ellipse(250, 300, 100, 100);
    fill(0);
    ellipse(270,300,55,55);
  
}else if(pageNum == 4.2) {
     
    // write page 2 message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p4message, 400, 150);
  
  // shape options
    noStroke();
    fill(100,0,255);
    ellipse(550, 300, 100, 100);
    fill(0);
    rect(530,280,40,40);
  
}else if((pageNum==4.3)||(pageNum>4.3)&&(pageNum<4.4)){
     
    // write page 2 message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p4message, 400, 150);
  
  // shape options
    noStroke();
    fill(255,0,100);
    ellipse(250, 300, 100, 100);
    fill(0);
    ellipse(270,300,55,55);
  
}else if(pageNum == 4.4) {
     
    // write page 2 message
    textSize(32);
    fill(200);
    textAlign(CENTER);
    textStyle(BOLD);
    text(p4message, 400, 150);
  
  // shape options
    noStroke();
    fill(255,0,100);
    ellipse(550, 300, 100, 100);
    fill(0);
    rect(530,280,40,40);
  
  
}
}


  
function mouseClicked() {
  MouseClickedAtX = mouseX;
  MouseClickedAtY = mouseY;
}