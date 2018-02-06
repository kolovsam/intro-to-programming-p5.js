// A3-Interactive Story
// Build Your Ice Cream Cone
//By Jenna James
//Feb 4, 2018

//This defines the coordinates for cone and ice cream. 

var coneX = 220;
var coneY = 200;

var icecreamX = 280;
var icecreamY = 170;


// selection of screens. 
var pageNum = 1;
var MouseClickedAtX;
var MouseClickedAtY;


//This sets up the page numbers. 

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(220);
  strokeWeight('none');

  if (pageNum == 1) {
    page1();

  } else if (pageNum == 2) {
    page2();

  } else if (pageNum == 3) {
    page3();

  } else if (pageNum == 4) {
    page4();

  } else if (pageNum == 5) {
    page5();

  } else if (pageNum == 6) {
    page6();

  } else if (pageNum == 7) {
    page7();


  } else if (pageNum == 8) {
    page8();


  } else if (pageNum == 9) {
    page9();

  } else if (pageNum == 10) {
    page10();

  } else if (pageNum == 11) {
    page11();

  } else if (pageNum == 12) {
    page12();

  } else if (pageNum == 13) {
    page13();

  } else if (pageNum == 14) {
    page14();

  } else if (pageNum == 15) {
    page15();
  }




  //This draws the first page with the cone and choice of vanilla or chocolate.

  function page1() {

    background('lightblue');
    triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);
    fill('peru');
    stroke('peru');
    fill('black');

    fill('black');
    stroke('black');
    rect(100, 420, 80, 80);
    fill('lightblue');
    rect(105, 425, 70, 70);
    fill('oldlace');
    stroke('oldlace');
    ellipse(140, 450, 20, 20);
    fill('peru');
    stroke('peru');
    triangle(130, 455, 140, 480, 150, 455);


    fill('black');
    stroke('black');
    rect(370, 420, 80, 80);
    fill('lightblue');
    rect(375, 425, 70, 70);
    fill('sienna');
    stroke('sienna');
    ellipse(410, 450, 20, 20);
    fill('peru');
    stroke('peru');
    triangle(400, 455, 410, 480, 420, 455);

    if ((MouseClickedAtX > 100) &&
      (MouseClickedAtX < 190) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 2;
    }

    if ((MouseClickedAtX > 400) &&
      (MouseClickedAtX < 490) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 3;
    }



    MouseClickedAtX = 0;
    MouseClickedAtY = 0;




  }


  //This draws the vanilla ice cream and cone. 

  function page2() {
    background('lightblue');
    strokeWeight('1');
    fill('oldlace');
    stroke('oldlace');
    ellipse(icecreamX, icecreamY, 132, 132);
    fill('peru');
    stroke('peru');
    triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


    fill('black');
    stroke('black');
    rect(100, 420, 80, 80);
    fill('lightblue');
    rect(105, 425, 70, 70);
    strokeWeight('3');
    stroke('green');
    line(130, 450, 150, 450);
    stroke('orange');
    line(130, 460, 150, 460);
    stroke('blue');
    line(130, 470, 150, 470);

    strokeWeight('1');
    stroke('black');
    fill('black');
    rect(370, 420, 80, 80);
    fill('lightblue');
    rect(375, 425, 70, 70);
    stroke('green');
    fill('green');
    ellipse(410, 450, 5, 5);
    stroke('orange');
    fill('orange');
    ellipse(410, 470, 5, 5);
    stroke('blue');
    fill('blue');
    ellipse(410, 460, 5, 5);

    if ((MouseClickedAtX > 100) &&
      (MouseClickedAtX < 190) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 4;
    }

    if ((MouseClickedAtX > 400) &&
      (MouseClickedAtX < 490) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 5;
    }


    MouseClickedAtX = 0;
    MouseClickedAtY = 0;


  }

  //This draws the chocolate ice cream and cone.

  function page3() {

    background('lightblue');
    fill('sienna');
    stroke('sienna');
    ellipse(icecreamX, icecreamY, 132, 132);
    fill('peru');
    stroke('peru');
    triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


    fill('black');
    stroke('black');
    rect(100, 420, 80, 80);
    fill('lightblue');
    rect(105, 425, 70, 70);
    strokeWeight('3');
    stroke('green');
    line(130, 450, 150, 450);
    stroke('orange');
    line(130, 460, 150, 460);
    stroke('blue');
    line(130, 470, 150, 470);

    strokeWeight('1');
    stroke('black');
    fill('black');
    rect(370, 420, 80, 80);
    fill('lightblue');
    rect(375, 425, 70, 70);
    stroke('green');
    fill('green');
    ellipse(410, 450, 5, 5);
    stroke('orange');
    fill('orange');
    ellipse(410, 470, 5, 5);
    stroke('blue');
    fill('blue');
    ellipse(410, 460, 5, 5);


    if ((MouseClickedAtX > 100) &&
      (MouseClickedAtX < 190) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 6;
    }

    if ((MouseClickedAtX > 400) &&
      (MouseClickedAtX < 490) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 7;
    }


    MouseClickedAtX = 0;
    MouseClickedAtY = 0;




  }

  //This draws vanilla ice cream and sprinkles. 

  function page4() {

    background('lightblue');
    strokeWeight('1');
    fill('oldlace');
    stroke('oldlace');
    ellipse(icecreamX, icecreamY, 132, 132);
    fill('peru');
    stroke('peru');
    triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);

    stroke('green');
    line(250, 140, 260, 145);
    stroke('red');
    line(240, 140, 232, 152);
    stroke('blue');
    line(320, 130, 310, 125);
    stroke('orange');
    line(262, 119, 272, 119);
    stroke('blue');
    line(270, 130, 278, 140);
    stroke('red');
    line(290, 135, 300, 125);
    stroke('green');
    line(310, 140, 318, 150);

    fill('black');
    stroke('black');
    rect(100, 420, 80, 80);
    fill('lightblue');
    rect(105, 425, 70, 70);
    stroke('red');
    fill('red');
    ellipse(135, 465, 20, 20);
    stroke('green');
    line(144, 459, 158, 450);


    fill('black');
    stroke('black');
    rect(370, 420, 80, 80);
    fill('lightblue');
    rect(375, 425, 70, 70);
    fill('burlywood');
    stroke('burlywood');
    ellipse(410, 459, 40, 40);
    fill('sienna');
    ellipse(420, 459, 5, 5);
    ellipse(400, 459, 5, 5);
    ellipse(410, 449, 5, 5);
    ellipse(410, 469, 5, 5);

    if ((MouseClickedAtX > 100) &&
      (MouseClickedAtX < 190) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 8;
    }

    if ((MouseClickedAtX > 400) &&
      (MouseClickedAtX < 490) &&
      (MouseClickedAtY > 400) &&
      (MouseClickedAtY < 490)) {
      pageNum = 10;
    }


    MouseClickedAtX = 0;
    MouseClickedAtY = 0;




  }

}

//This draws the vanilla ice cream and candy. 
function page5() {

  background('lightblue');
  strokeWeight('1');
  fill('oldlace');
  stroke('oldlace');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);

  stroke('green');
  fill('green');
  ellipse(250, 140, 8, 8);
  stroke('red');
  fill('red');
  ellipse(233, 155, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(320, 130, 8, 8);
  stroke('orange');
  fill('orange');
  ellipse(269, 119, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(276, 145, 8, 8);
  stroke('red');
  fill('red');
  ellipse(290, 135, 8, 8);
  stroke('green');
  fill('green');
  ellipse(320, 150, 8, 8);

  fill('black');
  stroke('black');
  rect(100, 420, 80, 80);
  fill('lightblue');
  rect(105, 425, 70, 70);
  stroke('red');
  fill('red');
  ellipse(135, 465, 20, 20);
  stroke('green');
  line(144, 459, 158, 450);


  fill('black');
  stroke('black');
  rect(370, 420, 80, 80);
  fill('lightblue');
  rect(375, 425, 70, 70);
  fill('burlywood');
  stroke('burlywood');
  ellipse(410, 459, 40, 40);
  fill('sienna');
  ellipse(420, 459, 5, 5);
  ellipse(400, 459, 5, 5);
  ellipse(410, 449, 5, 5);
  ellipse(410, 469, 5, 5);


  if ((MouseClickedAtX > 100) &&
    (MouseClickedAtX < 190) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 490)) {
    pageNum = 14;
  }

  if ((MouseClickedAtX > 400) &&
    (MouseClickedAtX < 490) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 490)) {
    pageNum = 13;
  }


  MouseClickedAtX = 0;
  MouseClickedAtY = 0;





}



//This draws the chocolate ice cream and sprinkles. 
function page6() {

  background('lightblue');
  fill('sienna');
  stroke('sienna');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  line(250, 140, 260, 145);
  stroke('red');
  line(240, 140, 232, 152);
  stroke('blue');
  line(320, 130, 310, 125);
  stroke('orange');
  line(262, 119, 272, 119);
  stroke('blue');
  line(270, 130, 278, 140);
  stroke('red');
  line(290, 135, 300, 125);
  stroke('green');
  line(310, 140, 318, 150);


  fill('black');
  stroke('black');
  rect(100, 420, 80, 80);
  fill('lightblue');
  rect(105, 425, 70, 70);
  stroke('red');
  fill('red');
  ellipse(135, 465, 20, 20);
  stroke('green');
  line(144, 459, 158, 450);


  fill('black');
  stroke('black');
  rect(370, 420, 80, 80);
  fill('lightblue');
  rect(375, 425, 70, 70);
  fill('burlywood');
  stroke('burlywood');
  ellipse(410, 459, 40, 40);
  fill('sienna');
  ellipse(420, 459, 5, 5);
  ellipse(400, 459, 5, 5);
  ellipse(410, 449, 5, 5);
  ellipse(410, 469, 5, 5);


  if ((MouseClickedAtX > 100) &&
    (MouseClickedAtX < 190) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 490)) {
    pageNum = 9;
  }

  if ((MouseClickedAtX > 400) &&
    (MouseClickedAtX < 490) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 490)) {
    pageNum = 11;
  }


  MouseClickedAtX = 0;
  MouseClickedAtY = 0;


}

//This draws the chocolate ice cream and candy. 

function page7() {

  background('lightblue');
  fill('sienna');
  stroke('sienna');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);

  stroke('green');
  fill('green');
  ellipse(250, 140, 8, 8);
  stroke('red');
  fill('red');
  ellipse(233, 155, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(320, 130, 8, 8);
  stroke('orange');
  fill('orange');
  ellipse(269, 119, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(276, 145, 8, 8);
  stroke('red');
  fill('red');
  ellipse(290, 135, 8, 8);
  stroke('green');
  fill('green');
  ellipse(320, 150, 8, 8);

  fill('black');
  stroke('black');
  rect(100, 420, 80, 80);
  fill('lightblue');
  rect(105, 425, 70, 70);
  stroke('red');
  fill('red');
  ellipse(135, 465, 20, 20);
  stroke('green');
  line(144, 459, 158, 450);


  fill('black');
  stroke('black');
  rect(370, 420, 80, 80);
  fill('lightblue');
  rect(375, 425, 70, 70);
  fill('burlywood');
  stroke('burlywood');
  ellipse(410, 459, 40, 40);
  fill('sienna');
  ellipse(420, 459, 5, 5);
  ellipse(400, 459, 5, 5);
  ellipse(410, 449, 5, 5);
  ellipse(410, 469, 5, 5);


  if ((MouseClickedAtX > 100) &&
    (MouseClickedAtX < 190) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 490)) {
    pageNum = 15;
  }

  if ((MouseClickedAtX > 400) &&
    (MouseClickedAtX < 490) &&
    (MouseClickedAtY > 400) &&
    (MouseClickedAtY < 490)) {
    pageNum = 12;
  }


  MouseClickedAtX = 0;
  MouseClickedAtY = 0;






}

//This draws vanilla icre cream with with sprinkles and a cherry. 


function page8() {

  background('lightblue');
  strokeWeight('1');
  fill('oldlace');
  stroke('oldlace');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  line(250, 140, 260, 145);
  stroke('red');
  line(240, 140, 232, 152);
  stroke('blue');
  line(320, 130, 310, 125);
  stroke('orange');
  line(262, 119, 272, 119);
  stroke('blue');
  line(270, 130, 278, 140);
  stroke('red');
  line(290, 135, 300, 125);
  stroke('green');
  line(310, 140, 318, 150);



  stroke('green');
  line(323, 108, 338, 90);
  stroke('red');
  fill('red');
  ellipse(316, 117, 28, 28);

}


//This draw chocolate ice cream with sprinkles and a cherry. 


function page9() {

  background('lightblue');
  fill('sienna');
  stroke('sienna');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  line(250, 140, 260, 145);
  stroke('red');
  line(240, 140, 232, 152);
  stroke('blue');
  line(320, 130, 310, 125);
  stroke('orange');
  line(262, 119, 272, 119);
  stroke('blue');
  line(270, 130, 278, 140);
  stroke('red');
  line(290, 135, 300, 125);
  stroke('green');
  line(310, 140, 318, 150);



  stroke('green');
  line(323, 108, 338, 90);
  stroke('red');
  fill('red');
  ellipse(316, 117, 28, 28);



}


//This draws vanilla ice cream with sprinkles and a cookie. 

function page10() {

  background('lightblue');
  strokeWeight('1');
  fill('oldlace');
  stroke('oldlace');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  line(250, 140, 260, 145);
  stroke('red');
  line(240, 140, 232, 152);
  stroke('blue');
  line(320, 130, 310, 125);
  stroke('orange');
  line(262, 119, 272, 119);
  stroke('blue');
  line(270, 130, 278, 140);
  stroke('red');
  line(290, 135, 300, 125);
  stroke('green');
  line(310, 140, 318, 150);



  fill('burlywood');
  stroke('burlywood');
  ellipse(238, 117, 52, 52);
  fill('sienna');
  ellipse(238, 127, 5, 5);
  ellipse(228, 117, 5, 5);
  ellipse(238, 106, 5, 5);
  ellipse(248, 117, 5, 5);



}




//This draws chocolate ice cream with sprinkles and a cookie.

function page11() {

  background('lightblue');
  strokeWeight('1');
  fill('sienna');
  stroke('sienna');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  line(250, 140, 260, 145);
  stroke('red');
  line(240, 140, 232, 152);
  stroke('blue');
  line(320, 130, 310, 125);
  stroke('orange');
  line(262, 119, 272, 119);
  stroke('blue');
  line(270, 130, 278, 140);
  stroke('red');
  line(290, 135, 300, 125);
  stroke('green');
  line(310, 140, 318, 150);


  fill('burlywood');
  stroke('burlywood');
  ellipse(238, 117, 52, 52);
  fill('sienna');
  ellipse(238, 127, 5, 5);
  ellipse(228, 117, 5, 5);
  ellipse(238, 106, 5, 5);
  ellipse(248, 117, 5, 5);



}

//This draws chocolate ice cream with candy and a cookie.

function page12() {

  background('lightblue');
  strokeWeight('1');
  fill('sienna');
  stroke('sienna');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);



  stroke('green');
  fill('green');
  ellipse(250, 140, 8, 8);
  stroke('red');
  fill('red');
  ellipse(233, 155, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(320, 130, 8, 8);
  stroke('orange');
  fill('orange');
  ellipse(269, 119, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(276, 145, 8, 8);
  stroke('red');
  fill('red');
  ellipse(290, 135, 8, 8);
  stroke('green');
  fill('green');
  ellipse(320, 150, 8, 8);


  fill('burlywood');
  stroke('burlywood');
  ellipse(238, 117, 52, 52);
  fill('sienna');
  ellipse(238, 127, 5, 5);
  ellipse(228, 117, 5, 5);
  ellipse(238, 106, 5, 5);
  ellipse(248, 117, 5, 5);



}


//This draws vanilla ice cream with candy and a cookie.

function page13() {

  background('lightblue');
  strokeWeight('1');
  fill('oldlace');
  stroke('oldlace');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  fill('green');
  ellipse(250, 140, 8, 8);
  stroke('red');
  fill('red');
  ellipse(233, 155, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(320, 130, 8, 8);
  stroke('orange');
  fill('orange');
  ellipse(269, 119, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(276, 145, 8, 8);
  stroke('red');
  fill('red');
  ellipse(290, 135, 8, 8);
  stroke('green');
  fill('green');
  ellipse(320, 150, 8, 8);

  fill('burlywood');
  stroke('burlywood');
  ellipse(238, 117, 52, 52);
  fill('sienna');
  ellipse(238, 127, 5, 5);
  ellipse(228, 117, 5, 5);
  ellipse(238, 106, 5, 5);
  ellipse(248, 117, 5, 5);



}

//This draws vanilla ice cream with candy and a cherry.

function page14() {

  background('lightblue');
  strokeWeight('1');
  fill('oldlace');
  stroke('oldlace');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  fill('green');
  ellipse(250, 140, 8, 8);
  stroke('red');
  fill('red');
  ellipse(233, 155, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(320, 130, 8, 8);
  stroke('orange');
  fill('orange');
  ellipse(269, 119, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(276, 145, 8, 8);
  stroke('red');
  fill('red');
  ellipse(290, 135, 8, 8);
  stroke('green');
  fill('green');
  ellipse(320, 150, 8, 8);

  stroke('green');
  line(323, 108, 338, 90);
  stroke('red');
  fill('red');
  ellipse(316, 117, 28, 28);


}


//This draws chocolate ice cream with candy and a  cherry.

function page15() {

  background('lightblue');
  strokeWeight('1');
  fill('sienna');
  stroke('sienna');
  ellipse(icecreamX, icecreamY, 132, 132);
  fill('peru');
  stroke('peru');
  triangle(coneX, coneY, coneX + 60, coneY + 180, coneX + 120, coneY);


  stroke('green');
  fill('green');
  ellipse(250, 140, 8, 8);
  stroke('red');
  fill('red');
  ellipse(233, 155, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(320, 130, 8, 8);
  stroke('orange');
  fill('orange');
  ellipse(269, 119, 8, 8);
  stroke('blue');
  fill('blue');
  ellipse(276, 145, 8, 8);
  stroke('red');
  fill('red');
  ellipse(290, 135, 8, 8);
  stroke('green');
  fill('green');
  ellipse(320, 150, 8, 8);

  stroke('green');
  line(323, 108, 338, 90);
  stroke('red');
  fill('red');
  ellipse(316, 117, 28, 28);




}

//This defines mouseclicked. 

function mouseClicked() {
  MouseClickedAtX = mouseX;
  MouseClickedAtY = mouseY;
}