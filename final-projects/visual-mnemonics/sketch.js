// =============================================================
//   Final Project - 598A - Himangshu Borah - Visual Mnemonics                 = 
// =============================================================

// New Functions learned and used
// 1. Scene Manager library
// 2. splitstring function
// 3. Image Loading
// 4. Custom Fonts

// Please note - I used two images for displaying the top header text and instructions in the screen
// Images used - "Press key to navigate", and "Press ENTER to show/hide Visual Cue"


//initializing window positions
var xOrigin = 0;
var yOrigin = window.innerHeight / 2;

//initializing array of words for each level
//with root words

var words1 = ["bright", "flight", "height", "light", "sight"];
var root1 = "igh";
var words2 = ["abstract", "construct", "street", "instrument", "pastry"];
var root2 = "str";

// for spliting words into prefix, root, suffix
var prefix;
var suffix;

// array of images placeholders to be picked from the folder
var imgigh = [];
var imgstr = [];

// for scene manager used
var mgr;
var scene = 0;

//dimensions for the flash card 
var elementWidth = window.innerWidth / words1.length;
var elementHeight = 400;
var x = 0;

//dimensions for the flash card 
var selectedWord = 0;
var flashCard = -1;

//custom font for better readability for dyslexic capabilities
var myFont;

//preloading fonts
function preload() {
  myFont = loadFont("assets/Slabo27px-Regular.ttf");
}

// =============================================================
//   Setup function for the entire program              
// =============================================================

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textFont(myFont); // setting readable font for dyslexic kids

  // Used Images for certain part of the Interface so that I spent time on the actual split string function 
  imgKeyboard = loadImage("assets/keyboard.png");
  imgNavigate = loadImage("assets/navigate.png");
  imgShowImage = loadImage("assets/showImage.png");
  imglight = loadImage("assets/light.png");
  imgHome = loadImage("assets/homepage.png");


  // loading images for all 4 set of words
  for (var i = 1; i < 6; i++) {
    imgigh[i] = loadImage("igh_" + i + ".png");
    imgstr[i] = loadImage("str_" + i + ".png");
    //imgph[i] = loadImage("ph_"+i+".png"); 
    //imgan[i] = loadImage("an_"+i+".png"); 
  }

  // Scene Manager library used for different levels of the game

  mgr = new SceneManager();
  mgr.addScene(Animation1);
  mgr.addScene(Animation2);
  mgr.addScene(Animation3);
  mgr.addScene(Animation4);
  mgr.addScene(Animation5);
  mgr.showNextScene();
}

// =============================================================
//   Draw function for the entire program              
// =============================================================

function draw() {
  mgr.draw();
}

// Mouse click to escape loading screen
function mousePressed() {
  mgr.mousePressed();
}

// using keys for navigating between Scenes
function keyPressed() {
  switch (keyCode) {
    case 27:
      mgr.showScene(Animation1);
      break;
    case 72:
      mgr.showScene(Animation2);
      break;
    case 49:
      mgr.showScene(Animation3);
      break;
    case 50:
      mgr.showScene(Animation4);
      break;
    case 51:
      mgr.showScene(Animation5);
      break;
  }

  // Press any key to continue
  mgr.keyPressed();
}


// =============================================================
// =           SCENE 1 - LOADING SCREEN                      = 
// =============================================================

function Animation1() {


  this.enter = function() {
    background(0);
  }

  this.draw = function() {

    // random background color animation;
    var r1 = map(random(0, 255), 0, 255, 0, window.innerWidth);
    var b1 = map(random(0, 255), 0, 255, 0, window.innerHeight);
    var x1 = random(0, width);
    var y1 = random(0, height);
    var r = random(0, 100);
    fill(r1, 0, b1, 24);
    noStroke();
    ellipse(r1, b1, r);

    //dyslexia text

    textSize(random(150, 170));

    fill(r1 / 6, 0, b1, 24);
    textAlign(CENTER, CENTER);
    text("Visual Mnemonics", random(window.innerWidth / 2 - 5, window.innerWidth / 2 + 5), random(170, 190));
    textSize(30);
    fill(random(200, 240));
    text("Click to continue", window.innerWidth / 2, 600);

  }

  // Press any key to continue

  this.mousePressed = function() {
    this.sceneManager.showNextScene();
  }

}

// =============================================================
// =               SCENE 2 - HOME SCREEN                      = 
// =============================================================

function Animation2() {

  this.enter = function() {
    background(0);
  }

  // using an Image here to reduce certain code and time

  this.draw = function() {
    imageMode(CENTER, CENTER);
    image(imgHome, width / 2, height / 2);
  }

  // Press any key to continue

  this.mousePressed = function() {
    this.sceneManager.showNextScene();
  }

}

// =============================================================
// =         1ST LEVEL IN GAME - Loaded words with 'igh'                      = 
// =============================================================

function Animation3() {
  this.y = 0;

  this.draw = function() {
    scene = 1;
    background(0);
    fill('white');
    textSize(160);

    // displaying the root word at the center
    textAlign(CENTER, TOP);
    text(root1, width / 2, 100);

    // shortcut applied here - loading an images for the instructions on screen 
    imageMode(CENTER, TOP);
    image(imgKeyboard, width / 2, 30, 617, 41);
    image(imgNavigate, width / 2, 370, 617, 41);

    stroke(70);
    strokeWeight(1);
    line(0, 57, window.innerWidth, 57);

    fill('grey');
    textSize(40);

    textAlign(LEFT, CENTER);

    //loop for displaying and splitting the words into prefix + root + suffix
    //for example splitting "bright" word into "br" + "igh" + "t"

    for (i = 0; i < words1.length; i++) {
      var splitString = split(words1[i], root1);
      prefix = splitString[0];
      suffix = splitString[1];

      prefixWidth = textWidth(prefix);
      rootWidth = textWidth(root1);
      suffixWidth = textWidth(suffix);

      // counting the word of width for display in alignment
      wordWidth = prefixWidth + rootWidth + suffixWidth;

      var x = xOrigin + i * elementWidth;
      y = yOrigin + elementHeight / 2; // starting position of prefix

      // conditional for checking the selected flash card
      // and displaying it in highlight
      if (i == selectedWord) {

        // displaying the components of the flash card
        fill(255);
        stroke(0);
        strokeWeight(10);
        fill('white')

        // Flash Card Background
        rect(x, yOrigin, elementWidth, elementHeight, 20);
        noStroke();
        fill('black');
        x = x + (elementWidth - wordWidth) / 2; // to horizontally center align word


        if (flashCard == 1) {
          //flash card image
          imageMode(CENTER, CENTER);
          image(imgigh[i + 1], x + 40, y, 255, 340);
        }

        // bg for word only so that image doesn't hinder with the word

        fill('white')
        rect(x - 10, y - 20, wordWidth + 20, 50, 30);
        fill('black');
        text(prefix, x, y);
        fill('red');
        text(root1, x + prefixWidth, y);
        fill('black');
        text(suffix, x + prefixWidth + rootWidth, y);


      } else {

        // Displaying all the unselected flash cards

        fill(40);
        stroke(0);
        strokeWeight(10);
        rect(x, yOrigin + 50, elementWidth, elementHeight, 20); // Word background
        noStroke();
        fill(120);
        x = x + (elementWidth - wordWidth) / 2; // to horizontally center align word
        text(prefix, x, y);
        text(".....", x + prefixWidth, y);
        text(suffix, x + prefixWidth + rootWidth, y);

      }
    }
  }

  this.keyPressed = function() {

    // to navigate between flashcards with arrows
    if (keyCode === 37) {
      selectedWord -= 1;
    } else if (keyCode === RIGHT_ARROW) {
      selectedWord += 1;

      // showing/hiding flash card on ENTER button press
    } else if (keyCode === 13) {
      flashCard = flashCard * (-1);
    }

    // condition to bound the top and bottpm selection limit for the list of words
    if (selectedWord < 0) {
      selectedWord = 0;
    } else if (selectedWord >= 5) {
      selectedWord = 4;
    }
  }

}

// =============================================================
// =          2ND LEVEL IN GAME - Loaded words with 'str'                       
// =============================================================

// I copied this piece of code from my first level of code
// hence didn't coomment this piece of code in detail


function Animation4() {
  this.y = 0;


  this.draw = function() {
    scene = 1;
    background(0);
    fill('white');
    textSize(160);
    textAlign(CENTER, TOP);
    text(root2, width / 2, 100);
    imageMode(CENTER, TOP);
    image(imgKeyboard, width / 2, 30, 617, 41);
    image(imgNavigate, width / 2, 370, 617, 41);

    stroke(70);
    strokeWeight(1);
    line(0, 57, window.innerWidth, 57);

    fill('grey');
    textSize(40);

    textAlign(LEFT, CENTER);

    //loop for splitting thw words into prefix, root, and suffix
    for (i = 0; i < words2.length; i++) {
      var splitString = split(words2[i], root2);
      prefix = splitString[0];
      suffix = splitString[1];

      prefixWidth = textWidth(prefix);
      rootWidth = textWidth(root2);
      suffixWidth = textWidth(suffix);
      wordWidth = prefixWidth + rootWidth + suffixWidth;

      var x = xOrigin + i * elementWidth;
      y = yOrigin + elementHeight / 2; // starting position of prefix

      if (i == selectedWord) {

        fill(255);
        stroke(0);
        strokeWeight(10);
        fill('white')
        rect(x, yOrigin, elementWidth, elementHeight, 20); // Flash Card Background
        noStroke();
        fill('black');
        x = x + (elementWidth - wordWidth) / 2; // to horizontally center align word

        if (flashCard == 1) {
          //flash card image
          imageMode(CENTER, CENTER);
          image(imgstr[i + 1], x + 60, y, 255, 340);
        }

        // bg for word only
        fill('white')
        rect(x - 10, y - 20, wordWidth + 20, 50, 30);
        fill('black');
        text(prefix, x, y);
        fill('red');
        text(root2, x + prefixWidth, y);
        fill('black');
        text(suffix, x + prefixWidth + rootWidth, y);


      } else {

        fill(40);
        stroke(0);
        strokeWeight(10);
        rect(x, yOrigin + 50, elementWidth, elementHeight, 20); // Word background
        noStroke();
        fill(120);
        x = x + (elementWidth - wordWidth) / 2; // to horizontally center align word
        text(prefix, x, y);
        text(".....", x + prefixWidth, y);
        text(suffix, x + prefixWidth + rootWidth, y);

      }
    }
  }

  // showing/hiding flash card on ENTER button press
  this.keyPressed = function() {
    if (keyCode === 37) {
      selectedWord -= 1;

    } else if (keyCode === RIGHT_ARROW) {
      selectedWord += 1;
    } else if (keyCode === 13) {
      flashCard = flashCard * (-1);
    }

    // condition to bound the top and bottpm selection limit for the list of words
    if (selectedWord < 0) {
      selectedWord = 0;
    } else if (selectedWord >= 5) {
      selectedWord = 4;
    }
  }

}


// =============================================================
// =            3RD LEVEL IN GAME - Displaying 'b' and 'd'                      = 
// =============================================================

function Animation5() {
  this.y = 0;

  //intializing for letters 

  var xHeadB = 200;
  var yHeadB = 200;
  var xHeadD = 1100;
  var yHeadD = 200;
  var thin = 2;
  var thick = 20;

  this.draw = function() {
    scene = 1;
    background(0);
    strokeCap(SQUARE);
    stroke('white');
    strokeWeight(2);
    noFill();

    // images for top header & key instruction 
    imageMode(CENTER, TOP);
    image(imgKeyboard, width / 2, 30, 617, 41);
    image(imgShowImage, width / 2, 370, 617, 41);

    // Drawing the 'b' figure                   

    // body line 
    strokeWeight(thick);
    stroke('aqua');
    line(xHeadB, yHeadB + 40, xHeadB, yHeadB + 450);

    // belly
    ellipse(xHeadB + 100, yHeadB + 300, 200);

    // Drawing the 'd' figure 

    // body line 
    strokeWeight(thick);
    stroke('yellow');
    line(xHeadD, yHeadD + 40, xHeadD, yHeadD + 450);

    // belly
    ellipse(xHeadD - 100, yHeadD + 300, 200);

    // conditional for displaying the flash card for the letters
    // code logic borrowed from previous scenes
    if (flashCard == 1) {

      // Drawing the 'b' figure 
      // head 
      fill(0);
      strokeWeight(thin);
      stroke('white');
      ellipse(xHeadB + 15, yHeadB + 10, 80);

      //hands
      noFill();
      strokeWeight(thin);
      stroke('white');
      line(xHeadB, yHeadB + 120, xHeadB + 50, yHeadB + 80);
      line(xHeadB, yHeadB + 110, xHeadB + 50, yHeadB + 120);

      //legs  
      line(xHeadB, yHeadB + 450, xHeadB + 0, yHeadB + 450 + 80);
      line(xHeadB, yHeadB + 450, xHeadB + 100, yHeadB + 450 + 80);

      // text - b has a Belly 
      noStroke();
      textSize(60);
      fill(210);
      textSize(50);
      text("b has a", xHeadB - 60, yHeadB - 80);
      textSize(100);
      textAlign(LEFT, CENTER);
      text("elly", xHeadB + 220, yHeadB + 300);


      // Drawing the 'd' figure 
      // head 
      fill(0);
      strokeWeight(thin);
      stroke('white');
      ellipse(xHeadD - 15, yHeadD + 10, 80);

      //hands
      noFill();
      strokeWeight(thin);
      stroke('white');
      line(xHeadD, yHeadD + 120, xHeadD - 50, yHeadD + 80);
      line(xHeadD, yHeadD + 110, xHeadD - 50, yHeadD + 120);

      //legs  
      line(xHeadD, yHeadD + 450, xHeadD - 0, yHeadD + 450 + 80);
      line(xHeadD, yHeadD + 450, xHeadD - 100, yHeadD + 450 + 80);

      //diaper lines
      line(xHeadD - 200, yHeadD + 330, xHeadD - 250, yHeadD + 360);
      line(xHeadD - 200, yHeadD + 350, xHeadD - 250, yHeadD + 380);
      line(xHeadD - 200, yHeadD + 370, xHeadD - 250, yHeadD + 400);
      line(xHeadD - 200, yHeadD + 310, xHeadD - 250, yHeadD + 340);

      // text - d wears a Diaper 
      noStroke();
      textSize(60);
      fill(210);
      textSize(50);
      text("d wears a", xHeadD - 100, yHeadD - 80);
      textSize(100);
      textAlign(LEFT, CENTER);
      text("iaper", xHeadD + 20, yHeadD + 300);
    }
  }

  // showing/hiding flash card on ENTER button press
  this.keyPressed = function() {
    if (keyCode === 13) {
      flashCard = flashCard * (-1);
    }

  }

}

// =============================================================
//             THANK YOU FOR READING TILL HERE :)            
// =============================================================

// I would like to thank Andy and Sam for their great contribution and motivation
// during the course of this program, and making this an enjoyable ride.


