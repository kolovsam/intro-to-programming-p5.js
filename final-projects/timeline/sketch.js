/*	BUILD YOUR TIMELINE
    Roy Luo, December 2017
    
    This is a 2-page interactive game built for you to 
    1.view other's timeline 
    2.build your own. 
    
For 1. view other's timeline:(Top Timeline)
    you can hover over activities on timeline to see larger icons of them.
    you can also click whatever you want to delete.
    
For 2. build your own timeline:(Bottom Timeline)
    you can choose your interested activities from 5 bottom icons
    by pressing 'a''b''c''d''e'on the keyboard first, and then you 
    can click anywhere on the second empty timeline to generate new activities of
    your own. You have the chance to pick the location to place the icon.
    
You can click Replay to erase the canvas and restart again.

*/
var firstGround = 300;
var secondGround = 590;
var groundHeight = 10;
var groundColor = 'black';
var imgA, imgB, imgC, imgD, imgE, imgReplay, imgCoverImage, imgStart;
var xOriginA = 300,
    xOriginB = 600,
    xOriginC = 900,
    xOriginD = 1200,
    xOriginE = 1400;
var yOrigin;
var iconA, iconB, iconC, iconD, iconE, iconReplay, iconStart;
var xMove = 10;
var MouseClickedAtX;
var MouseClickedAtY;
var pageNum = 0;
var whichIcon;
var buttonHeight;
var img;
var KEY;
var newIcons = [];

//Preload the imported images.
function preload() {
    imgA = loadImage("iconA.png");
    imgB = loadImage("iconB.png");
    imgC = loadImage("iconC.png");
    imgD = loadImage("iconD.png");
    imgE = loadImage("iconE.png");
    imgReplay = loadImage("replay.png");
    imgCoverImage = loadImage("coverImage.png");
    imgStart = loadImage("start.png");
}

function setup() {
    createCanvas(1600, 800);
    background(185, 223, 244);
    frameRate(300);

    //create new objects for each icon/image and set their location.
    iconA = new Icon(imgA, xOriginA, firstGround - imgA.height);
    iconB = new Icon(imgB, xOriginB, firstGround - imgB.height);
    iconC = new Icon(imgC, xOriginC, firstGround - imgC.height);
    iconD = new Icon(imgD, xOriginD, firstGround - imgD.height);
    iconE = new Icon(imgE, xOriginE, firstGround - imgE.height);
    iconCoverImage = new Icon(imgCoverImage, width / 2 - imgCoverImage.width / 2,
        height / 2 - imgCoverImage.height / 1.5)
    iconStart = new Icon(imgStart, width / 2 - imgStart.width / 2, 600);
    iconReplay = new Icon(imgReplay, width / 2 - imgReplay.width / 2, 20);
}


//page0 will serve as cover page, click "START" button to start.
function page0() {
    //you can't create canvas.
    background("white");
    iconCoverImage.show(); //call function "show" inside class Icon.
    iconStart.show(); //call function "show" inside class Icon.


    //if you click "START" button, game will lead you to page1 and erase the newly generated activities.
    if (isWithin(MouseClickedAtX, MouseClickedAtY, iconStart.xOrigin, iconStart.xOrigin + imgStart.width,
            iconStart.yOrigin, iconStart.yOrigin + imgStart.height)) {
        newIcons = [];
        pageNum = 1;
    }
}


//page1 is the main page for you to view/add timelines.
function page1() {
    background(185, 223, 244);
    drawGround(firstGround, groundHeight);
    drawGround(secondGround, groundHeight);

    iconChoice(); //call function "iconChoice" to show 5 icon choices at the bottom.


    //create loop to generate new activities you want to add to timeline.
    for (i = 0; i < newIcons.length; i++) {
        newIcons[i].show();
        newIcons[i].move();
    }


    /*if you hit "REPLAY" button at the top, game will lead you to page0 and erase the 
    activities you added on your timeline.*/

    iconReplay.show();
    if (isWithin(MouseClickedAtX, MouseClickedAtY, iconReplay.xOrigin, iconReplay.xOrigin + imgReplay.width,
            iconReplay.yOrigin, iconReplay.yOrigin + imgReplay.height)) {
        pageNum = 0;
    }

    /*For viewing others' timeline at the top, icons showing activities are moving leftward
      and icons becomes larger when you hover over them*/
    //funtion of hover over & delete for icon A.
    if (isWithin(mouseX, mouseY, iconA.xOrigin, iconA.xOrigin + imgA.width,
            iconA.yOrigin, iconA.yOrigin + imgA.height)) {
        iconA.scale();
        iconA.move();
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, iconA.xOrigin, iconA.xOrigin + imgA.width,
            iconA.yOrigin, iconA.yOrigin + imgA.height)) {
        //visually delete icon A if you click on it.
    } else {
        iconA.show();
        iconA.move();
    }

    //funtion of hover over & delete for icon B.
    if (isWithin(mouseX, mouseY, iconB.xOrigin, iconB.xOrigin + imgB.width,
            iconB.yOrigin, iconB.yOrigin + imgB.height)) {
        iconB.scale();
        iconB.move();
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, iconB.xOrigin, iconB.xOrigin + imgB.width,
            iconB.yOrigin, iconB.yOrigin + imgB.height)) {
        //visually delete icon B if you click on it.
    } else {
        iconB.show();
        iconB.move();
    }


    //funtion of hover over & delete for icon C.
    if (isWithin(mouseX, mouseY, iconC.xOrigin, iconC.xOrigin + imgC.width,
            iconC.yOrigin, iconC.yOrigin + imgC.height)) {
        iconC.scale();
        iconC.move();
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, iconC.xOrigin, iconC.xOrigin + imgC.width,
            iconC.yOrigin, iconC.yOrigin + imgC.height)) {
        //visually delete icon C if you click on it.
    } else {
        iconC.show();
        iconC.move();
    }

    //funtion of hover over & delete for icon D.
    if (isWithin(mouseX, mouseY, iconD.xOrigin, iconD.xOrigin + imgD.width,
            iconD.yOrigin, iconD.yOrigin + imgD.height)) {
        iconD.scale();
        iconD.move();
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, iconD.xOrigin, iconD.xOrigin + imgD.width,
            iconD.yOrigin, iconD.yOrigin + imgD.height)) {
        //visually delete icon D if you click on it.
    } else {
        iconD.show();
        iconD.move();
    }

    //funtion of hover over & delete for icon E.
    if (isWithin(mouseX, mouseY, iconE.xOrigin, iconE.xOrigin + imgE.width,
            iconE.yOrigin, iconE.yOrigin + imgE.height)) {
        iconE.scale();
        iconE.move();
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, iconE.xOrigin, iconE.xOrigin + imgE.width,
            iconE.yOrigin, iconE.yOrigin + imgE.height)) {
        //visually delete icon E if you click on it.
    } else {
        iconE.show();
        iconE.move();
    }
}


//to create 5 icon choices at the bottom.
function iconChoice() {
    fill("white");
    stroke(255, 127, 43);
    strokeWeight(2);
    rectMode(CORNER);

    //since their y location are the same, so I set the x location for every icon.
    var aX = 50;
    var bX = 400;
    var cX = 700;
    var dX = 1050;
    var eX = 1400;

    var buttonHeight = imgA.height / 2;
    rect(aX, 650, imgA.width / 2, buttonHeight);
    rect(bX, 650, imgB.width / 2, buttonHeight);
    rect(cX, 650, imgC.width / 2, buttonHeight);
    rect(dX, 650, imgD.width / 2, buttonHeight);
    rect(eX, 650, imgE.width / 2, buttonHeight);


    image(imgA, aX, height - imgA.height / 2 - 50, imgA.width / 2, imgA.height / 2);
    image(imgB, bX, height - imgB.height / 2 - 50, imgB.width / 2, imgB.height / 2);
    image(imgC, cX, height - imgC.height / 2 - 50, imgC.width / 2, imgC.height / 2);
    image(imgD, dX, height - imgD.height / 2 - 50, imgD.width / 2, imgD.height / 2);
    image(imgE, eX, height - imgE.height / 2 - 50, imgE.width / 2, imgE.height / 2);

    fill("black");
    textSize(24)
    text("a", aX, 770);
    text("b", bX, 770);
    text("c", cX, 770);
    text("d", dX, 770);
    text("e", eX, 770);

    textSize(20);
    fill("white");
    noStroke();
    text("Type the letter of one icon, then click on anywhere between two thick black lines.", bX, 630);
}

//create class for icons so I can call functions inside this class later.
class Icon {
    constructor(imgWhich, xOrigin, yOrigin) {
        this.imgWhich = imgWhich;
        this.xOrigin = xOrigin;
        this.yOrigin = yOrigin;
    }

    show() {
        image(this.imgWhich, this.xOrigin, this.yOrigin);
    }

    //create "move" function to make them move leftward.
    move() {
        if (this.xOrigin > 0) {
            this.xOrigin--;
        } else {
            this.xOrigin = width - this.imgWhich.width;
        }
    }

    //create "scale" function to make them becomes larger when we hover over them.
    scale() {
        image(this.imgWhich, this.xOrigin,
            this.yOrigin - 0.5 * this.imgWhich.height,
            this.imgWhich.width * 1.5, this.imgWhich.height * 1.5)
    }
}

//draw two ground lines.
function drawGround(y, groundHeight) {
    fill(groundColor);
    rectMode(CENTER);
    rect(0, y, width * 2, groundHeight);
}

//draw two pages on conditions.
function draw() {
    if (pageNum == 1) {
        page1();
    }
    if (pageNum == 0) {
        page0();
    }
}

//judge if your mouse x and mouse y are within some certain shape.
function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
    if (
        pointX > rectX1 && pointX < rectX2 && pointY > rectY1 &&
        pointY < rectY2) {
        return true;
    } else {
        return false;
    }
}


function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
    var newIcon;

    //press 'a''b''c''d''e'to select the icon you are interested in.
    if (KEY === 'a') {
        newIcon = new Icon(imgA, MouseClickedAtX, secondGround - imgA.height);
        newIcons.push(newIcon);
    }
    if (KEY === 'b') {
        newIcon = new Icon(imgB, MouseClickedAtX, secondGround - imgB.height);
        newIcons.push(newIcon);
    }
    if (KEY === 'c') {
        newIcon = new Icon(imgC, MouseClickedAtX, secondGround - imgC.height);
        newIcons.push(newIcon);
    }
    if (KEY === 'd') {
        newIcon = new Icon(imgD, MouseClickedAtX, secondGround - imgD.height);
        newIcons.push(newIcon);
    }
    if (KEY === 'e') {
        newIcon = new Icon(imgE, MouseClickedAtX, secondGround - imgE.height);
        newIcons.push(newIcon);
    }
}

function keyTyped() {
    KEY = key;
}