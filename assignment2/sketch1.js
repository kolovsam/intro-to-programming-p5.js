function setup() {
  createCanvas(550, 574);
  //frameRate(100)
}

var colorTL = 'blue';
var color2TL = 'blue';
var color3TL = 'blue';
var colorTR = 'green';
var color2TR = 'green';
var color3TR = 'green';
var colorBL = 'yellow';
var color2BL = 'yellow';
var color3BL = 'yellow';
var color4BL = 'yellow';
var colorBR = 'red';
var color2BR = 'red';
var color3BR = 'red';
var color4BR = 'red';

var TLx = 78;
var TLy = 75;
var TLx2 = 220;
var TLy2 = 195;
var TLx3 = 280;
var TLy3 = 285;

var TRx = 475;
var TRy = 75;
var TRx2 = 338;
var TRy2 = 195;
var TRx3 = 280;
var TRy3 = 285;

var BLx = 78;
var BLy = 505;
var BLx2 = 220;
var BLy2 = 375;
var BLx3 = 75;
var BLy3 = 195;
var BLx4 = 280;
var BLy4 = 285;

var BRx = 475;
var BRy = 505;
var BRx2 = 338;
var BRy2 = 375;
var BRx3 = 475;
var BRy3 = 195;
var BRx4 = 280;
var BRy4 = 285;

var TLrad = 50;
var TRrad = 50;
var BLrad = 50;
var BRrad = 50;

function draw() {
  background(32);
  
  noStroke();
  fill(colorTL);
  arc(TLx, TLy, TLrad, TLrad, 44.5, 100, PIE);
  //ellipse(TLx, TLy, TLrad);
  fill(colorTR);
  arc(TRx, TRy, TRrad, TRrad, 44.5, 100, PIE);
  //ellipse(TRx, TRy, TRrad);
  fill(colorBL);
   arc(BLx, BLy, BLrad, BLrad, 44.5, 100, PIE);
  //ellipse(BLx, BLy, BLrad);
  fill(colorBR);
   arc(BRx, BRy, BRrad, BRrad, 44.5, 100, PIE);
  // ellipse(BRx, BRy, BRrad);

  TLx++ // TL
  if (TLx > 220) {
    TLx = 220;
    TLy++
  }
  if (TLy > 195) {
    TLy = 195;
    colorTL = 32;
    fill(color2TL);
    arc(TLx2, TLy2, TLrad, TLrad, 44.5, 100, PIE);
    TLx2++;
    if (TLx2 > 280) {
      TLx2 = 280
      TLy2 = TLy2 + 2;
      if (TLy2 > 285) {
        TLy2 = 285;
        color2TL = 32;
        fill(color3TL);
        arc(TLx3, TLy3, TLrad, TLrad, 44.5, 100, PIE);
        TLx3--;
        if (TLx3 < 170) {
          TLx3 = 170
        }
      }
    }
  }
  
   TRx = TRx - 2 // TR
  if (TRx < 338) {
    TRx = 338;
    TRy = TRy + 2
  }
  if (TRy > 195) {
    TRy = 195;
    colorTR = 32;
    fill(color2TR);
     arc(TRx2, TRy2, TRrad, TRrad, 44.5, 100, PIE);
    TRx2 = TRx2 - 2;
    if (TRx2 < 280) {
      TRx2 = 280
      TRy2++;
      if (TRy2 > 285) {
        //TRy2 = 285;
        color2TR = 32;
        fill(color3TR);
         arc(TRx3, TRy3, TRrad, TRrad, 44.5, 100, PIE);
        TRx3++;
        if (TRx3 > 390) {
          TRx3 = 390
        }
      }
    }
  }

  BLx++ // BL
  if (BLx > 220) {
    BLx = 220;
    BLy--;
  }
  if (BLy < 375) {
    BLy = 375;
    colorBL = 32;
    noStroke();
    fill(color2BL);
    arc(BLx2, BLy2, BLrad, BLrad, 44.5, 100, PIE);
    BLx2--;
    if (BLx2 < 75) {
      BLx2 = 75;
      BLy2--;
      if (BLy2 < 195) {
        BLy2 = 195;
        color2BL = 32;
        fill(color3BL);
        arc(BLx3, BLy3, BLrad, BLrad, 44.5, 100, PIE);
        BLx3++;
        if (BLx3 > 280) {
          BLx3 = 280;
          BLy3++;
          if (BLy3 > 285) {
            BLy3 = 285;
            color3BL = 32;
            fill(color4BL);
            arc(BLx4, BLy4, BLrad, BLrad, 44.5, 100, PIE);
            BLx4--;
            if (BLx4 < 235) {
              BLx4 = 235;
            }
          }
        }
      }
    }
  }
  
    BRx = BRx - 2 // BR
  if (BRx < 338) {
    BRx = 338;
    BRy = BRy - 2;
  }
  if (BRy < 375) {
    BRy = 375;
    colorBR = 32;
    fill(color2BR);
     arc(BRx2, BRy2, BRrad, BRrad, 44.5, 100, PIE);
    BRx2 = BRx2 + 2;
    if (BRx2 > 475) {
      BRx2 = 475;
      BRy2 = BRy2 - 2;
      if (BRy2 < 195) {
        BRy2 = 195;
        color2BR = 32;
        fill(color3BR);
         arc(BRx3, BRy3, BRrad, BRrad, 44.5, 100, PIE);
        BRx3 = BRx3 - 2;
        if (BRx3 < 280) {
          BRx3 = 280;
          BRy3 = BRy3 + 1;
          if (BRy3 > 285) {
            //BRy3 = 285;
            color3BR = 32;
            fill(color4BR);
             arc(BRx4, BRy4, BRrad, BRrad, 44.5, 100, PIE);
            BRx4 = BRx4 + 1;
            if (BRx4 > 325) {
              BRx4 = 325;
            }
          }
        }
      }
    }
  }
  
noFill();
  stroke(85, 79, 255)
  strokeWeight(3)
  beginShape();
  vertex(0, 0);
  vertex(30, 0);
  vertex(30, 120);
  vertex(175, 120);
  vertex(175, 150);
  vertex(30, 150);
  vertex(30, 242);
  vertex(0, 242);
  endShape();
  beginShape();
  vertex(120, 0);
  vertex(120, 30);
  vertex(265, 30);
  vertex(265, 150);
  vertex(295, 150);
  vertex(295, 30);
  vertex(430, 30);
  vertex(430, 0);
  endShape();
  beginShape();
  vertex(550, 0);
  vertex(520, 0);
  vertex(520, 120);
  vertex(375, 120);
  vertex(375, 150);
  vertex(520, 150);
  vertex(520, 242);
  vertex(550, 242);
  endShape();
  beginShape();
  vertex(0, 332);
  vertex(30, 332);
  vertex(30, 420);
  vertex(175, 420);
  vertex(175, 450);
  vertex(30, 450);
  vertex(30, 570);
  vertex(0, 570);
  endShape();
  beginShape();
  vertex(120, 570);
  vertex(120, 540);
  vertex(265, 540);
  vertex(265, 420);
  vertex(295, 420);
  vertex(295, 540);
  vertex(430, 540);
  vertex(430, 570);
  endShape();
  beginShape();
  vertex(550, 570);
  vertex(520, 540);
  vertex(520, 450);
  vertex(375, 450);
  vertex(375, 420);
  vertex(520, 420);
  vertex(520, 332);
  vertex(550, 332);
  endShape();
  beginShape();
  vertex(235, 240);
  vertex(122, 240);
  vertex(122, 330);
  vertex(438, 330);
  vertex(438, 240);
  vertex(325, 240);
  endShape();

}