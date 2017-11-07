/* Toni Saylor
	HCDE 598
  Interactive Story
  Cootie Catcher
*/

var pink = [213, 100, 70];

//cootiecatcher variables
var xltop = 20;
var yltop = xltop;
var xlbot = xltop;
var ylbot = 580;
var xrbot = ylbot;
var yrbot = ylbot;
var xrtop = ylbot;
var yrtop = xltop;
var rel = 280;
var xltmid = xltop + rel;
var yltmid = yltop + rel;
var xlbmid = xlbot + rel;
var ylbmid = ylbot - 270;
var xrbmid = xrbot - 270;
var yrbmid = yrbot - 270;
var xrtmid = xrtop - 270;
var yrtmid = yrtop + rel;

// cootiecatcher colors
var lightshadow = [220, 220, 220];
var medshadow = [200, 200, 200];
var darkshadow = [180, 180, 180];
var crease = [160, 160, 160];

// colors variables
var centerquart = 165;
var circwidth = 100;

// colors colors
var rlpurp = [218, 112, 214]
var lpurp = [186, 85, 211];
var dpurp = [153, 50, 204];
var lturq = [91, 219, 153];
var dturq = [10, 153, 114];
var lblue = [106, 90, 205];
var dblue = [72, 61, 139];
var lemer = [99, 206, 135];
var demer = [49, 155, 84];

// seasons colors
var lwinter = [176, 224, 230];
var dwinter = [135, 206, 235];
var lspring = [44, 176, 55];
var dspring = [0, 128, 0];
var lsummer = [255, 215, 0];
var dsummer = [218, 165, 32];
var lfall = [216, 48, 0];
var dfall = [178, 34, 34];

// actually doing the thing
var pageNum = 1;
var MouseClickedAtX;
var MouseClickedAtY;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(pink);

  if (pageNum == 1) {
    cootiecatcher();
    colors();

  } else if (pageNum == 2) {
    cootiecatcher();
    shapes();

  } else if (pageNum == 3) {
    cootiecatcher();
    seasons();

  } else if (pageNum == 4) {
    cootiecatcher();
    houses();

  } else if (pageNum == 5) {
    fortune1();

  } else if (pageNum == 6) {
    fortune2();

  } else if (pageNum == 7) {
    fortune3();

  } else if (pageNum == 8) {
    fortune4();
  }
}

  function cootiecatcher() {
    noStroke();

    fill('white');
    // left top left
    triangle(xltop, yltop, xltop + 10, yltop + rel, xltmid, yltmid);
    // left bottom left
    triangle(xlbot, ylbot, xlbot + 10, ylbot - rel, xlbmid, ylbmid);
    // right bottom left
    triangle(xrbot, yrbot, xrbot - rel, yrbot + 10, xrbmid, yrbmid);
    // right top left
    triangle(xrtop, yrtop, xrtop - rel, yrtop + 10, xrtmid, yrtmid);

    fill(medshadow)
    // right bottom right
    triangle(xrbot, yrbot, xrbot - 10, yrbot - rel, xrbmid, yrbmid);
    fill(lightshadow)
    // left top right
    triangle(xltop, yltop, xltop + rel, yltop + 10, xltmid, yltmid);

    fill(darkshadow)
    // left bottom right
    triangle(xlbot, ylbot, xlbot + rel, ylbot + 10, xlbmid, ylbmid);
    // right top right
    triangle(xrtop, yrtop, xrtop - 10, yrtop + rel, xrtmid, yrtmid);

    fill(crease)
    // left crease
    triangle(xltmid + 5, yltmid, xltop + 10, yltop + rel, xlbmid + 5, ylbmid);
    // down crease
    triangle(xlbmid, ylbmid, xlbot + rel, ylbot + 10, xrbmid, yrbmid);
    // right crease
    triangle(xrbmid - 5, yrbmid, xrtop - 10, yltop + rel, xrtmid - 5, yrtmid);
    // up crease
    triangle(xrtmid, yrtmid, xrtop - rel, yrtop + 10, xltmid, yltmid);
  }

  function colors() {
    noStroke()
    fill(lpurp)
    arc(centerquart, centerquart, circwidth, circwidth, PI / 4, 5 * PI / 4);
    fill(dpurp)
    arc(centerquart, centerquart, circwidth, circwidth, 5 * PI / 4, PI / 4);
    fill(lturq)
    arc(centerquart, centerquart + 275, circwidth, circwidth, 3 * PI / 4, 7 * PI / 4);
    fill(dturq)
    arc(centerquart, centerquart + 275, circwidth, circwidth, 7 * PI / 4, 3 * PI / 4);
    fill(lblue)
    arc(centerquart + 275, centerquart + 275, circwidth, circwidth, PI / 4, 5 * PI / 4);
    fill(dblue)
    arc(centerquart + 275, centerquart + 275, circwidth, circwidth, 5 * PI / 4, PI / 4);
    fill(lemer)
    arc(centerquart + 275, centerquart, circwidth, circwidth, 3 * PI / 4, 7 * PI / 4);
    fill(demer)
    arc(centerquart + 275, centerquart, circwidth, circwidth, 7 * PI / 4, 3 * PI / 4);

    if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 0, 300)) {
      pageNum = pageNum + 1;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 300, 600)) {
      pageNum = pageNum + 2;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 300, 600)) {
      pageNum = pageNum + 3;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 0, 300)) {
      pageNum = pageNum + 4;
    }

    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
  }

  function shapes() {
    noStroke()
    fill(rlpurp)
    triangle(100, 100, 140, 240, 190, 190)
    quad(120, 483.214, 76.577, 438.301, 166.636, 351.458, 210, 396.429)
    arc(centerquart + 275, centerquart + 275, circwidth + 20, circwidth + 20, PI / 4, 5 * PI / 4);
    triangle(387.143, 220, 383.142, 110, 493.142, 110)

    fill(lpurp)
    triangle(100, 100, 240, 140, 190, 190)
    arc(centerquart + 275, centerquart + 275, circwidth + 20, circwidth + 20, 5 * PI / 4, PI / 4);

    fill(dpurp)
    quad(120, 483.214, 163.305, 528.242, 253.364, 441.399, 210, 396.429)
    triangle(387.143, 220, 497.216, 220, 493.142, 110)

    if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 0, 300)) {
      pageNum = pageNum + 1;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 300, 600)) {
      pageNum = pageNum + 2;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 300, 600)) {
      pageNum = pageNum + 3;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 0, 300)) {
      pageNum = pageNum + 4;
    }

    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
  }

  function seasons() {
    textSize(40)

    push()
    rotate(7 * PI / 4);
    fill(lwinter);
    text("win", -60, 250)
    fill(dwinter);
    text("ter", 1, 250)
    pop()

    push()
    rotate(5 * PI / 4)
    fill(dspring)
    text("spr", -485, -175)
    fill(lspring)
    text("ing", -426, -175)
    pop()

    push()
    rotate(3 * PI / 4)
    fill(dsummer)
    text("sum", -77, -600)
    fill(lsummer)
    text("mer", 0, -600)
    pop()

    push()
    rotate(PI / 4)
    fill(lfall)
    text("fa", 395, -175)
    fill(dfall)
    text("ll", 428, -175)
    pop()

    if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 0, 300)) {
      pageNum = pageNum + 1;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 300, 600)) {
      pageNum = pageNum + 2;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 300, 600)) {
      pageNum = pageNum + 3;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 0, 300)) {
      pageNum = pageNum + 4;
    }

    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
  }

  function houses() {
    textSize(40)

    push()
    rotate(7 * PI / 4);
    fill(lblue);
    text("Raven", -115, 250)
    fill(dblue);
    text("claw", 0, 250)
    pop()

    push()
    rotate(5 * PI / 4)
    fill(dspring)
    text("Slyth", -516, -175)
    fill(lspring)
    text("erin", -427, -175)
    pop()

    push()
    rotate(3 * PI / 4)
    fill(dsummer)
    text("Huffl", -80, -600)
    fill(lsummer)
    text("epuff", 0, -600)
    pop()

    push()
    rotate(PI / 4)
    fill(lfall)
    text("Gryff", 340, -175)
    fill(dfall)
    text("indor", 428, -175)
    pop()
    
    if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 0, 300)) {
      pageNum = pageNum + 1;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 0, 300, 300, 600)) {
      pageNum = pageNum + 2;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 300, 600)) {
      pageNum = pageNum + 3;

    } else if (isWithin(MouseClickedAtX, MouseClickedAtY, 300, 600, 0, 300)) {
      pageNum = pageNum + 4;
    }

    MouseClickedAtX = 0;
    MouseClickedAtY = 0;
  }

  function fortune1() {
    textSize(38)
    fill('white')
    text("You will soon witness a miracle.", 35, 315)
  }

  function fortune2() {
    textSize(31)
    fill('white')
    text("The object of your desire comes closer.", 30, 315)
  }

  function fortune3() {
    textSize(31)
    fill('white')
    text("Your failures will lead to your success.", 36, 315)
  }

  function fortune4() {
    textSize(31)
    fill('white')
    text("Misfortune will follow you all your days.", 30, 315)
  }

  function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
    // if all 4 of these conditions are true, then it was inside,
    // otherwise it was outside
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
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
  }


// Graveyard
//quad(120,483.214,69.41,431.419,160,344.577,210,396.429)
//quad(100,502.5,50,450.648,140,363.862,190,415.714)
//quad(120,483.214,171.694,536.941,261.753,450.098,210,396.429)
//triangle(502.857,100,402.792,100,406.429,200)
//triangle(502.857,100,506.495,200,406.429,200)