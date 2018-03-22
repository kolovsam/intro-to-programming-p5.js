//variables
var MouseClickedAtX;
var MouseClickedAtY;
var pageNum = 0;

var csize = 120;
var option1 = "YES";
var option2 = "NO";
var c1 = "gray";
var c2 = "pink";
var current_radius = csize / 2;
var title = "Should I get a cat?";
var q1 = "Do I like small animals?";
var q2 = "Will I clean the litter box?";
var q3 = "Do I like small fluffy things?";
var result1 = "You should definitely get a cat.";
var result2 = "You should just visit a cat shelter.";
var result3 = "Maybe you should get a dog.";
var result4 = "Don't get a cat or a dog."

function distance() {
    d1 = dist(MouseClickedAtX, MouseClickedAtY, width / 2 - 70, 240);
    d2 = dist(MouseClickedAtX, MouseClickedAtY, width / 2 + 70, 240);
}

function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
}

//check of mouse is within circle
function isWithin(d, radius) {

    if (d < radius) {
        return true;
    } else {
        return false;
    }
}

function reset() {
    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
}

function drawPage0() {
    textSize(20);
    text(q1, width / 2, 150);
    current_radius = 50;
    options(csize, csize, option1, option2, c1, c2);
}

function options(cwidth, cheight, choice1, choice2, fill1, fill2) {
    noStroke();
    fill(fill1);
    ellipse(width / 2 + 70, 240, cwidth, cheight);
    fill(fill2);
    ellipse(width / 2 - 70, 240, cwidth, cheight);

    textAlign(CENTER);
    fill('white');
    text(choice1, width / 2 - 70, 240);
    text(choice2, width / 2 + 70, 240);
}

function setup() {
    createCanvas(500, 400);
}


function draw() {
    background(216, 255, 240);
    textSize(26);
    fill('gray');
    text(title, width / 2, 60);
    text(pageNum, 60, 60);
    //print(MouseClickedAtX);

    if (pageNum == 0) {
        drawPage0();
    }

    distance();

    if (pageNum == 0) {
        if (isWithin(d1, current_radius)) {
            pageNum = 1;
        } else if (isWithin(d2, current_radius)) {
            pageNum = 2;
        }
        reset();
    }


    if (pageNum == 1) {
        drawPage1();
    } else if (pageNum == 2) {
        drawPage2();
    } else if (pageNum == 3) {
        drawPage3();
    } else if (pageNum == 4) {
        drawPage4();
    } else if (pageNum == 5) {
        drawPage5();
    } else if (pageNum == 6) {
        drawPage6();
    }

}

function drawPage1() {
    textSize(20);
    text(q2, width / 2, 150);
    options(csize, csize, option1, option2, c1, c2);

    distance();

    if (isWithin(d1, current_radius)) {
        pageNum = 3;
    } else if (isWithin(d2, current_radius)) {
        pageNum = 4;
    }
}

function drawPage2() {
    textSize(20);
    text(q3, width / 2, 150);
    options(csize, csize, option1, option2, c1, c2);

    distance();

    if (isWithin(d1, current_radius)) {
        pageNum = 5;
    } else if (isWithin(d2, current_radius)) {
        pageNum = 6;
    }
}

function drawPage3() {
    text(result1, width / 2, 220);
}

function drawPage4() {
    text(result2, width / 2, 220);
}

function drawPage5() {
    text(result3, width / 2, 220);
}

function drawPage6() {
    text(result4, width / 2, 220);
}