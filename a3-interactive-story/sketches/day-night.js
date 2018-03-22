var pageNum = 1;

var MouseClickedAtX;
var MouseClickedAtY;

function setup() {

    createCanvas(809, 500);

}


function draw() {

    if (pageNum == 1) {
        drawPage1();

    } else if (pageNum == 2) {
        drawPage2();

    } else if (pageNum == 3) {
        drawPage3();

    } else {
        // we haven't defined what happens for pages above 3 
    }

}


function drawPage1() {

  background('lightBlue');
  strokeWeight(3);
  
  //Hills
  stroke('#46604a');
  fill('#759979');
  ellipse(600, 550, 700, 700);
  fill('#8FBC94');
  ellipse(200, 550, 600, 600); 
  fill('#9bcca0');
  rect(-2, 400, 811, 102);
  
  //Sun
  stroke('#c4b95e');
  fill('#f2e787');
  ellipse(100, 100, 75, 75);
  
  //Clouds
  stroke('white');
  fill('white');
  ellipse(350, 70, 75, 75);
  ellipse(400, 80, 75, 75);
  ellipse(400, 60, 75, 75);
  ellipse(450, 70, 75, 75);
  
  ellipse(550, 120, 75, 75);
  ellipse(600, 130, 75, 75);
  ellipse(600, 110, 75, 75);
  ellipse(650, 120, 75, 75);
  
  drawButtons();
  
}


function drawPage2() {
  
  background('black');
  strokeWeight(3);
  
  //Hills
  stroke('#46604a');
  fill('#759979');
  ellipse(600, 550, 700, 700);
  fill('#8FBC94');
  ellipse(200, 550, 600, 600); 
  fill('#9bcca0');
  rect(-2, 400, 811, 102);
  
  //Moon
  stroke('#c4b95e');
  fill('#f2e787');
  ellipse(100, 100, 75, 75);
  stroke('black');
  fill('black');
  ellipse(110, 100, 60, 60);
  
  //Stars
  fill('#f2e787');
  ellipse(350, 50, 10, 10);
  ellipse(400, 100, 10, 10);
  ellipse(350, 200, 10, 10);
  ellipse(450, 150, 10, 10);
  
  ellipse(550, 50, 10, 10);
  ellipse(600, 100, 10, 10);
  ellipse(600, 150, 10, 10);
  ellipse(650, 70, 10, 10);
  
  drawButtons();
  
}


function drawPage3() {
  
  background('#fca383');
  strokeWeight(3);
  
  //Sun
  stroke('#ffe196');
  fill('#ffc596');
  ellipse(100, 250, 100, 100);
  
  //Hills
  stroke('#46604a');
  fill('#759979');
  ellipse(600, 550, 700, 700);
  fill('#8FBC94');
  ellipse(200, 550, 600, 600); 
  fill('#9bcca0');
  rect(-2, 400, 811, 102);
  
  //Clouds
  stroke('white');
  fill('white');
  ellipse(150, 70, 75, 75);
  ellipse(200, 80, 75, 75);
  ellipse(200, 60, 75, 75);
  ellipse(250, 70, 75, 75);
  
  ellipse(450, 120, 75, 75);
  ellipse(500, 130, 75, 75);
  ellipse(500, 110, 75, 75);
  ellipse(550, 120, 75, 75);
  
  drawButtons();
  
}

function drawButtons() {
  
  //Day Button
  stroke('White');
  fill('lightBlue');
  rect(250, 413, 75, 75);
  stroke('#c4b95e');
  fill('#f2e787');
  ellipse(288, 450, 40, 40);
  
  //Evening Button
  stroke('white');
  fill('#fca383');
  rect(350, 413, 75, 75);
  stroke('#ffe196');
  fill('#ffc596');
  ellipse(388, 465, 40, 40);
  stroke('#8FBC94');
  fill('#8FBC94');
  rect(353, 470, 69, 15);
  
  
  //Night Button
  stroke('white');
  fill('black');
  rect(450, 413, 75, 75);
  stroke('#f2e787');
  fill('#f2e787');
  ellipse(488, 450, 40, 40);
  stroke('black');
  fill('black');
  ellipse(500, 450, 25, 25);
 
    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            250, 325,
            413, 488)) {
        pageNum=1;
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
            350, 425,
            413, 488)) {
        pageNum=3;
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
            450, 525,
            413, 488)) {
        pageNum=2;
    }
}


function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
    if ((pointX > rectX1) &&
        (pointX < rectX2) &&
        (pointY > rectY1) &&
        (pointY < rectY2)) {
        return true;
    } else {
        return false;
    }

}


function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
}

