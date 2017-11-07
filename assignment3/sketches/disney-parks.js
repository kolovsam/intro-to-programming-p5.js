//Elizabeth Quepons
//HCDE 598A
//Assignment 3


//Questions and instructions

  var disneyQ = "Which Disney Park would"
  var disneyQ2 ="you like to visit?";
  var continueQ = "Please press any key to continue";
  var whereQ = "Where would you like to go?";
  var chooseOptions = "Please select where you would like to go";


  //Options
  var parkOptions = "Your options are:";
  var disneyLand = "Disneyland (Anaheim, CA)";
  var disneyWorld = "Disney World (Orlando, FL)";
  var tokyoDisney = "Tokyo Disney (Tokyo, Japan)";

  //Disneyland Park Facts
  var dlFacts = "Disneyland is the original park";
  var dlFacts2 = "Disneyland opened on July 17th, 1955";
  var disneyTip = "Download the app to check ride wait times!";

  //Disney World Park Facts
  var dwFacts = "Disney World opened on October 1st, 1971";
  var dwFacts2 = "Walt never saw this park";
  var dwTip = "Don't forget your Magic Band!";

  //Tokyo Disney Park Facts
  var tkFacts = "Tokyo Disney opened on April 15, 1983";
  var tkFacts2 = "Tokyo Disney carries only exclusive merchandise";
  var tkTip = "Take the Tokyo Metro to get there!";

  //Colors
  var bgColor = 'lightblue';
  var textColor = 'white';

  //Text Size
  var titleSize = 30;
  var promptSize = 20;
  var factsSize = 20;

  //Text Coordinates
  var titleX = 100; //original question
  var titleY = 200; //original question
	var titleY2 = 250;
  var keyX; //press key instructions
  var keyY; //press key instructions
  var buttonX; //button
  var buttonY; //button

  //Misc commands
  var MouseX;
  var MouseY;
  var pageNum = 0;


  function setup() {
    createCanvas(500, 500);

    titleX = width / 10; //question
    titleY = height / 5;
    titleY2 = height /4;
    keyX = width / 10; //instruction
    keyY = height / 2;

    buttonX = titleX;
    buttonY = titleY

  }

  function draw() {
    background(bgColor);


    if (pageNum == 1) {
      drawPage1();

    } else if (pageNum == 2) {
      drawPage2();

    } else if (pageNum == 3) {
      drawPage3();
    }
  }


  //Page 1
  function drawPage1() {
    background(bgColor);

    //First Question
    textSize(titleSize);
    fill(textColor);
    text(disneyQ, titleX, titleY);
    text(disneyQ2, titleX, titleY2);

    //Instructions to Continue
    textSize(promptSize);
    fill(textColor);
    text(continueQ, keyX, keyY);

  }

  //Page 2
  function drawPage2() {
    background(bgColor);
    textSize(promptSize);
    fill(textColor);
    text(parkOptions, titleX, titleY + 10);
    text(disneyLand, titleX, titleY + 50);
    text(disneyWorld, titleX, titleY + 70);
    text(tokyoDisney, titleX, titleY + 90);
    text(continueQ, titleX, titleY + 200);

  }

  //Page 3
  function drawPage3() {
    background(bgColor);
    fill(bgColor);
    strokeWeight(5);
    stroke('white');
    rect(buttonX - 5, buttonY + 20, textWidth(disneyLand) + 10, 50);
    rect(buttonX - 5, buttonY + 80, textWidth(disneyWorld) + 10, 50);
    rect(buttonX - 5, buttonY + 140, textWidth(tokyoDisney) + 10, 50);

    textSize(promptSize);
    strokeWeight(0);
    fill(textColor);
    text(whereQ, titleX, titleY + 10);
    text(disneyLand, titleX, titleY + 50);
    text(disneyWorld, titleX, titleY + 110);
    text(tokyoDisney, titleX, titleY + 170);
    

    if (isWithin(MouseX, MouseY, buttonX - 5, 150, buttonY + 20, 150)) {
      	drawPage4 (); 
         } else if (isWithin(MouseX, MouseY, buttonX - 5, 150, buttonY + 80, 210)) {
           drawPage5 ();
                        
    } else if (isWithin(MouseX, MouseY, buttonX - 5, 150, buttonY + 140, 300)) {
      drawPage6 ();
    }
  }

    function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {

      if ((pointX > rectX1) && // to the right of the left edge
        (pointX < rectX2) && // to the left of the right edge
        (pointY > rectY1) && // below the top edge
        (pointY < rectY2)) { // above the bottom edge
        return true;
      } else {
        return false;
      }
    }
    
    function mouseClicked() {
      MouseX = mouseX;
      MouseY = mouseY;
    }
    



 //Disneyland Option
  function drawPage4() {
     background(bgColor);
      textSize(factsSize);
      fill(textColor);
      text(dlFacts, titleX, titleY + 50);
      text(dlFacts2, titleX, titleY + 100);
      text(disneyTip, titleX, titleY + 150);

    }

    //Disney World Option
    function drawPage5() {
      background(bgColor);
      textSize(factsSize);
      fill(textColor);
      text(dwFacts, titleX, titleY + 50);
      text(dwFacts2, titleX, titleY + 100);
      text(dwTip, titleX, titleY + 150);

    }

    //Tokyo Disney Option
    function drawPage6() {
      background(bgColor);
      textSize(factsSize);
      fill(textColor);
      text(tkFacts, titleX, titleY + 50);
      text(tkFacts2, titleX, titleY + 100);
      text(tkTip, titleX, titleY + 150);

    }


    function keyPressed() { //Nagivation up to choosing parks
      if (pageNum <= 3) {
        pageNum = pageNum + 1;
      } }