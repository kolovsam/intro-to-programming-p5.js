//var H1 = "UW Facts Challenge";

  var questionNum = 0;
  var acceptX;
  var acceptY;
  var mouseClickedAtX;
  var mouseClickedAtY;
  var yesBoxX = 100;
  var noBoxX = 300;
  var choiceBoxY;



function setup() {
  createCanvas(1020,600);
  acceptX = width - 300;
  acceptY = height - 150;
  choiceBoxY = height - 300;
}



function draw() {
    background("#4b2e83");
    textSize(48);
    fill("#4b2e83");
    text(questionNum, 100,100);
    
    
    if(questionNum == 0){
      
      textSize(68);
      fill("white");
      text( "UW Facts Challenge", 200, 300);
      noStroke();
      textSize(24);
      rect( acceptX - 20, acceptY - 30 , textWidth ("Accept")+40, 44);
      fill("#4b2e83");
      text("Accept",acceptX,acceptY);

     if((mouseClickedAtX > acceptX - 20) &&
       (mouseClickedAtX < acceptX - 20 + textWidth ("Accept") + 40) &&
       (mouseClickedAtY > acceptY - 30) &&
       (mouseClickedAtY < acceptY - 30 + 44)) {
      
      //question 1 page
      questionNum = questionNum + 1;
      
    }
    

    mouseClickedAtX = 0;
    mouseClickedAtY = 0;
    
    } else if (questionNum == 1){
      fill("white");
      textSize(36);
      text("Question 1: Did UW open in Nov. 4, 1861?",100,200);
      textSize(24);
      rect(yesBoxX, choiceBoxY, textWidth("Yes")+40,44);
      fill("#4b2e83");
      text("Yes", yesBoxX + 20, choiceBoxY + 30);
      fill("white");
      textSize(24);
      rect(noBoxX, choiceBoxY, textWidth("No")+40,44);
      fill("#4b2e83");
      text("No", noBoxX + 20, choiceBoxY + 30);
      
      if ((mouseClickedAtX > yesBoxX) &&
      (mouseClickedAtX < yesBoxX + textWidth ("Yes") + 40) &&
      (mouseClickedAtY > choiceBoxY) &&
      (mouseClickedAtY < choiceBoxY + 44)){
      //fill("green");  
      //text("you are right!", 100, 400);
      questionNum = questionNum + 1;
      
      mouseClickedAtX = 0;
      mouseClickedAtY = 0;
        
      } else if ((mouseClickedAtX > noBoxX) &&
      (mouseClickedAtX < noBoxX + textWidth ("No") + 40) &&
      (mouseClickedAtY > choiceBoxY) &&
      (mouseClickedAtY < choiceBoxY + 44)){
      fill("red");  
      text("Oops, that doesn't seem right.Try another option?", 100, 400);
      }
      
      
      } else if (questionNum == 2){
      fill("white");
      textSize(36);
      text("Question 2: Is Denny Hall the oldest existing",100,200);
      text("building on campus?",100,250);
      textSize(24);
      rect(yesBoxX, choiceBoxY, textWidth("Yes")+40,44);
      fill("#4b2e83");
      text("Yes", yesBoxX + 20, choiceBoxY + 30);
      fill("white");
      textSize(24);
      rect(noBoxX, choiceBoxY, textWidth("No")+40,44);
      fill("#4b2e83");
      text("No", noBoxX + 20, choiceBoxY + 30);
      if ((mouseClickedAtX > yesBoxX) &&
      (mouseClickedAtX < yesBoxX + textWidth ("Yes") + 40) &&
      (mouseClickedAtY > choiceBoxY) &&
      (mouseClickedAtY < choiceBoxY + 44)){
      //fill("green");  
      //text("you are right!", 100, 400);
      questionNum = questionNum + 1;
      
      } else if ((mouseClickedAtX > noBoxX) &&
      (mouseClickedAtX < noBoxX + textWidth ("No") + 40) &&
      (mouseClickedAtY > choiceBoxY) &&
      (mouseClickedAtY < choiceBoxY + 44)){
      fill("red");  
      text("Unfortunately, that's not the answer:(", 100, 400);
      }
      
      
      } else if (questionNum == 3){
        fill("yellow");
        text( "You win! Congrats!", 300, 300);
        
        
      
    }
}
    
  function mouseClicked() {
    mouseClickedAtX = mouseX;
    mouseClickedAtY = mouseY;  
  }
  