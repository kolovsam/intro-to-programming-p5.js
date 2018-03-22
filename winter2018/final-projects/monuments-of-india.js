var gatewayDisplayed = false;
var tajMahalDisplayed = false;
var qutubhMinarDisplayed = false;

function setup() {
  createCanvas(800, 560);

  //this draws the background
  background('#a6ecfd');
  noStroke();
  fill('#49ad71')
  rect(0, 411, 800, 147);

  //this draws the title 
  fill('white');
  noStroke();
  textSize(70);
  textFont('courier');
  text('Welcome To India', 67, 230);

  //this draws the right most container
  fill('#31995c');
  noStroke();
  rect(534, 444, 246, 95);
  fill('#4ebd77');
  rect(542, 452, 230, 79);
  //this draws the text on the container
  fill('white')
  textSize(14);
  text('Click on any button ', 576, 485);
  text('to view the monument', 573, 503);

  //this draws the buttons
  //button-1
  fill('#31995c');
  noStroke();
  rect(31, 454, 149, 95);
  fill('#4ebd77');
  stroke('#31995c');
  strokeWeight(6);
  rect(21, 444, 149, 95);
  //button-2
  fill('#31995c');
  noStroke();
  rect(202, 454, 149, 95);
  fill('#4ebd77');
  stroke('#31995c');
  strokeWeight(6);
  rect(192, 444, 149, 95);
  //button-3
  fill('#31995c');
  noStroke();
  rect(373, 454, 149, 95);
  fill('#4ebd77')
  stroke('#31995c');
  strokeWeight(6);
  rect(363, 444, 149, 95);
  //this writes the text on the buttons
  fill('white');
  noStroke();
  textSize(18);
  textFont('courier');
  text('Gateway', 57, 494);
  text('Taj Mahal', 218, 494);
  textSize(18);
  text('Qutubh Minar', 373, 494);

}

//this function calls for the text on mouseover function
function draw() {

  //mouse over for Gateway
  if (gatewayDisplayed) {
    Gateway();
    // if the mouse is hovering over spot 1
    if (mouseX > 362 && mouseX < 436 && mouseY > 262 && mouseY < 354) {
      GateText1();
      Gate1highlighted();
      // else if the mouse is hovering over spot 2
    } else if (mouseX > 308 && mouseX < 437 && mouseY > 354 && mouseY < 415) {
      GateText2();
      Gate2highlighted();
      // else if the mouse anywhere else
    } else {
      fill('#4ebd77');
      rect(542, 452, 230, 79);
    }

    //mouse over for Taj Mahal
  } else if (tajMahalDisplayed) {
    TajMahal();
    // if the mouse is hovering over spot 1
    if (mouseX > 339 && mouseX < 467 && mouseY > 179 && mouseY < 295) {
      TajText1();
      Taj1highlighted()
      // else if the mouse is hovering over spot 2
    } else if (mouseX > 554 && mouseX < 624 && mouseY > 206 && mouseY < 384) {
      TajText2();
      Taj2highlighted()
      // else if the mouse anywhere else
    } else {
      fill('#4ebd77');
      rect(542, 452, 230, 79);
    }

    //mouse over for Qutubh Minar
  } else if (qutubhMinarDisplayed) {
    QutubhMinar();
    // if the mouse is hovering over spot 1
    if (mouseX > 510 && mouseX < 580 && mouseY > 302 && mouseY < 408) {
      QutubhText1();
      Qutubh1highlighted()
      // if the mouse is hovering over spot 2
    } else if (mouseX > 392 && mouseX < 448 && mouseY > 92 && mouseY < 328) {
      QutubhText2();
      Qutubh2highlighted()
      // else if the mouse anywhere else
    } else {
      fill('#4ebd77');
      rect(542, 452, 230, 79);
    }
  }

}


function mouseClicked() {
  // detect if gateway button is clicked
  if (mouseX > 20 && mouseX < 170 && mouseY > 444 && mouseY < 539) {
    // 1) change monument button boolean to the opposite (so that it's displayed)
    gatewayDisplayed = !gatewayDisplayed;
    // 2) make sure the other monuments aren't displayed
    tajMahalDisplayed = false;
    qutubhMinarDisplayed = false;


    // detect if Taj Mahal button is clicked
  } else if (mouseX > 192 && mouseX < 340 && mouseY > 444 && mouseY < 539) {
    tajMahalDisplayed = !tajMahalDisplayed;
    // 1) change monument button boolean to the opposite (so that it's displayed)
    gatewayDisplayed = false;
    // 2) make sure the other monuments aren't displayed
    qutubhMinarDisplayed = false;


    // detect if Qutubh Minar button is clicked
  } else if (mouseX > 363 && mouseX < 512 && mouseY > 444 && mouseY < 539) {
    qutubhMinarDisplayed = !qutubhMinarDisplayed;
    // 1) change monument button boolean to the opposite (so that it's displayed)
    gatewayDisplayed = false;
    // 2) make sure the other monuments aren't displayed
    tajMahalDisplayed = false;
  }
}


//this function draws the gateway. The elements are grouped according to the color
function Gateway() {
  noStroke()
  fill('#a6ecfd')
  rect(0, 0, 800, 411)
  fill('#71445a');
  ellipse(348, 165, 28, 50);
  ellipse(452, 165, 28, 50);
  ellipse(348, 139, 10, 10);
  triangle(348, 127, 345, 138, 351, 138);
  ellipse(452, 139, 10, 10);
  triangle(452, 127, 449, 138, 455, 138);
  fill('#c6655b');
  rect(251, 215, 294, 141);
  rect(208, 373, 166, 38);
  rect(433, 373, 153, 38);
  rect(373, 373, 14, 38);
  rect(385, 383, 14, 28);
  rect(399, 393, 14, 18);
  rect(358, 181, 80, 36);
  triangle(366, 177, 362, 181, 370, 181);
  triangle(374, 177, 370, 181, 378, 181);
  triangle(382, 177, 378, 181, 386, 181);
  triangle(390, 177, 386, 181, 394, 181);
  triangle(398, 177, 394, 181, 402, 181);
  triangle(406, 177, 402, 181, 410, 181);
  triangle(414, 177, 410, 181, 418, 181);
  triangle(422, 177, 418, 181, 426, 181);
  triangle(430, 177, 426, 181, 434, 181);
  triangle(438, 177, 434, 181, 442, 181);
  fill('#bb625e');
  rect(333, 171, 29, 183);
  rect(437, 171, 29, 183);
  fill('#71445a');
  rect(208, 355, 166, 19);
  rect(420, 355, 166, 19);
  quad(243, 225, 251, 241, 333, 241, 334, 225);
  quad(243, 255, 251, 273, 333, 273, 333, 255);
  quad(465, 225, 465, 243, 545, 243, 556, 225);
  quad(465, 255, 465, 273, 545, 273, 556, 255);
  rect(333, 231, 32, 6);
  rect(333, 261, 32, 6);
  rect(361, 247, 76, 6);
  rect(434, 231, 32, 6);
  rect(434, 261, 32, 6);
  rect(329, 199, 37, 6);
  rect(329, 199, 37, 6);
  rect(433, 199, 37, 6);
  rect(450, 177, 4, 19);
  rect(458, 177, 4, 19);
  rect(442, 177, 4, 19);
  rect(345, 177, 4, 19);
  rect(353, 177, 4, 19);
  rect(337, 177, 4, 19);
  rect(433, 167, 37, 6);
  rect(329, 167, 37, 6);
  ellipse(400, 301, 53, 47);
  rect(370, 311, 60, 45);
  triangle(400, 273, 381, 285, 419, 285);
  ellipse(293, 335, 17, 18);
  rect(283, 339, 21, 17);
  triangle(293, 323, 287, 329, 299, 329);
  ellipse(506, 335, 17, 18);
  rect(496, 339, 21, 17);
  triangle(506, 323, 500, 329, 512, 329);
  textSize(40);
  textFont('courier');
  text('Gateway of India', 220, 60);
  fill('#31995c');
  noStroke();
  rect(534, 444, 246, 95);
  fill('#4ebd77');
  rect(542, 452, 230, 79);

}

//this function draws the text which will be called on mouse over in the gateway function.
function GateText1() {
  fill('#4ebd77');
  rect(542, 452, 230, 79);
  fill('white');
  noStroke();
  textSize(13);
  textFont('courier');
  text('The central arches of the', 558, 485);
  //text(line1, x, y);
  text('structure are 85 feet high', 555, 503);
  //text(line2, x, y);

}

//this function draws the highlight which will be called on mouse over in the gateway function.
function Gate1highlighted() {
  fill(255, 0, 0, 50)
  rect(370, 311, 60, 45)
  ellipse(400, 301, 53, 47);
  triangle(400, 273, 381, 285, 419, 285);

}

//this function draws the text which will be called on mouse over in the gateway function.
function GateText2() {
  fill('#4ebd77');
  rect(542, 452, 230, 79);
  fill('white');
  noStroke();
  textSize(12);
  textFont('courier');
  text('Steps from behind the', 582, 475);
  text('arch of the Gateway lead', 569, 495);
  text('directly into the Arabian Sea', 553, 515);

}

//this function draws the highlight which will be called on mouse over in the gateway function.
function Gate2highlighted() {
  fill(255, 0, 0, 50)
  rect(373, 373, 14, 37)
  rect(387, 383, 13, 27)
  rect(399, 393, 11, 17)

}

//this function draws the gateway. The elements are grouped according to the color
function TajMahal() {
  fill('#a6ecfd')
  rect(0, 0, 800, 411)
  fill('#efc570');
  ellipse(213, 223, 28, 28);
  triangle(213, 193, 210, 211, 216, 211);
  ellipse(586, 223, 28, 28);
  triangle(585, 193, 582, 211, 589, 211);
  ellipse(401, 241, 102, 102);
  triangle(401, 177, 377, 196, 425, 196);
  ellipse(260, 286, 17, 17);
  triangle(260, 267, 258, 278, 262, 278);
  ellipse(540, 286, 17, 17);
  triangle(540, 267, 537, 278, 542, 278);
  ellipse(480, 270, 38, 38);
  triangle(480, 232, 477, 252, 483, 252);
  ellipse(320, 270, 38, 38);
  triangle(320, 232, 317, 252, 323, 252);
  fill('#fad481');
  rect(183, 382, 433, 29);
  rect(199, 227, 28, 157);
  rect(572, 227, 28, 157);
  rect(251, 287, 18, 97);
  rect(531, 287, 18, 97);
  fill('#efc570');
  rect(282, 293, 237, 89);
  fill('#fad481');
  rect(354, 275, 95, 108);
  fill('#c99d5d');
  rect(350, 269, 102, 8);
  rect(350, 251, 102, 8);
  rect(195, 241, 37, 6);
  rect(195, 293, 37, 6);
  rect(195, 345, 37, 6);
  rect(568, 241, 37, 6);
  rect(568, 293, 37, 6);
  rect(568, 345, 37, 6);
  rect(248, 295, 24, 4);
  rect(248, 327, 24, 4);
  rect(248, 361, 24, 4);
  rect(528, 295, 24, 4);
  rect(528, 327, 24, 4);
  rect(528, 361, 24, 4);
  rect(199, 225, 28, 2);
  rect(572, 225, 28, 2);
  triangle(400, 147, 396, 180, 405, 180);
  ellipse(400, 163, 8, 5);
  ellipse(400, 155, 5, 3);
  ellipse(400, 171, 13, 8);
  rect(463, 273, 36, 3);
  rect(302, 273, 36, 3);
  rect(202, 230, 4, 8);
  rect(211, 230, 4, 8);
  rect(220, 230, 4, 8);
  rect(575, 230, 4, 8);
  rect(584, 230, 4, 8);
  rect(593, 230, 4, 8);
  rect(254, 290, 3, 4);
  rect(259, 290, 3, 4);
  rect(264, 290, 3, 4);
  rect(533, 290, 3, 4);
  rect(538, 290, 3, 4);
  rect(543, 290, 3, 4);
  fill('#fad47f');
  rect(353, 259, 95, 10);
  rect(301, 276, 38, 17);
  rect(462, 276, 38, 17);
  fill('#c99d5d');
  rect(305, 281, 8, 9);
  rect(316, 281, 8, 9);
  rect(327, 281, 8, 9);
  rect(466, 281, 8, 9);
  rect(477, 281, 8, 9);
  rect(488, 281, 8, 9);
  fill('#d6a966');
  rect(375, 310, 25, 72, 30, 0, 0, 0);
  triangle(400, 299, 380, 312, 400, 316);
  quad(302, 305, 302, 340, 313, 340, 313, 315);
  quad(333, 305, 333, 340, 344, 340, 344, 315);
  quad(302, 347, 302, 379, 313, 379, 313, 355);
  quad(333, 347, 333, 379, 344, 379, 344, 355);
  quad(468, 306, 468, 340, 479, 340, 479, 315);
  quad(499, 306, 499, 340, 510, 340, 510, 315);
  quad(468, 347, 468, 379, 479, 379, 479, 355);
  quad(499, 347, 499, 379, 510, 379, 510, 355);
  fill('#cb9f60');
  rect(400, 310, 25, 72, 0, 20, 0, 0);
  triangle(400, 299, 400, 316, 423, 315);
  rect(400, 364, 25, 18);
  quad(302, 305, 291, 315, 291, 340, 302, 340);
  quad(333, 305, 322, 315, 322, 340, 333, 340);
  quad(302, 347, 291, 355, 291, 379, 302, 379);
  quad(333, 347, 322, 355, 322, 379, 333, 379);
  quad(468, 306, 457, 315, 457, 340, 468, 340);
  quad(499, 306, 488, 315, 488, 340, 499, 340);
  quad(468, 347, 457, 355, 457, 379, 468, 379);
  quad(499, 347, 488, 355, 488, 379, 499, 379);
  fill('#b7843a');
  textSize(40);
  textFont('courier');
  text('Taj Mahal', 290, 60);

}

//this function draws the text which will be called on mouse over in the Taj Mahal function.
function TajText1() {
  fill('#4ebd77');
  rect(542, 452, 230, 79);
  fill('white');
  noStroke();
  textSize(13);
  textFont('courier');
  text('The dome is reminiscent', 567, 475);
  text('of an onion,', 615, 495);
  text('it is called a "bulb”', 575, 515);

}

//this function draws the highlight which will be called on mouse over in the Taj Mahal function.
function Taj1highlighted() {
  fill(255, 0, 0, 50)
  ellipse(401, 241, 102, 102);
  rect(350, 269, 102, 8);
  rect(350, 251, 102, 8);
  triangle(400, 147, 396, 180, 405, 180);
  ellipse(400, 163, 8, 5);
  ellipse(400, 155, 5, 3);
  ellipse(400, 171, 13, 8);
  triangle(401, 177, 377, 196, 425, 196);

}

//this function draws the text which will be called on mouse over in the Taj Mahal function.
function TajText2() {
  fill('#4ebd77');
  rect(542, 452, 230, 79);
  fill('white');
  noStroke();
  textSize(13);
  textFont('courier');
  text('Shah Jahan introduced', 577, 485);
  text('the Minarets in Mughal Art', 555, 503);

}

//this function draws the highlight which will be called on mouse over in the Taj Mahal function.
function Taj2highlighted() {
  fill(255, 0, 0, 50)
  triangle(585, 193, 582, 211, 589, 211);
  ellipse(586, 223, 28, 28);
  rect(572, 227, 28, 155);
  rect(568, 241, 37, 6);
  rect(568, 293, 37, 6);
  rect(568, 345, 37, 6);
  rect(572, 225, 28, 2);
  rect(575, 230, 4, 8);
  rect(584, 230, 4, 8);
  rect(593, 230, 4, 8);

}

//this function draws the Qutubh Minar. The elements are grouped according to the color
function QutubhMinar() {
  fill('#a6ecfd')
  rect(0, 0, 800, 411)
  fill('#e9696a');
  ellipse(542, 284, 100, 100);
  quad(393, 268, 398, 276, 443, 276, 448, 268);
  quad(398, 207, 403, 214, 438, 214, 443, 207);
  quad(402, 162, 406, 168, 434, 167, 439, 162);
  quad(406, 129, 409, 134, 431, 133, 435, 129);
  quad(409, 96, 411, 101, 429, 101, 431, 96);
  fill('#cdac9a');
  rect(202, 401, 436, 10);
  //light pink
  fill('#f7c09a');
  rect(233, 327, 242, 74);
  rect(475, 281, 134, 120);
  triangle(541, 223, 534, 228, 548, 228);
  //pink
  fill('#ee927d');
  rect(233, 389, 242, 12);
  rect(233, 327, 242, 12);
  rect(474, 380, 49, 21);
  rect(560, 380, 49, 21);
  quad(398, 275, 395, 331, 446, 331, 443, 275);
  quad(402, 213, 400, 260, 442, 260, 438, 213);
  quad(405, 167, 402, 202, 438, 202, 434, 167);
  quad(408, 133, 407, 157, 433, 157, 431, 133);
  quad(411, 100, 409, 125, 431, 125, 429, 100);
  rect(393, 259, 55, 10);
  rect(398, 201, 45, 7);
  rect(402, 156, 37, 7);
  rect(406, 124, 29, 6);
  rect(409, 91, 22, 6);
  fill('#f7c09a');
  rect(404, 275, 11, 52);
  rect(425, 275, 11, 52);
  rect(408, 213, 9, 47);
  rect(424, 213, 9, 47);
  rect(410, 167, 7, 35);
  rect(422, 167, 7, 35);
  rect(412, 133, 5, 24);
  rect(412, 133, 5, 24);
  rect(421, 133, 5, 24);
  rect(414, 100, 4, 25);
  rect(422, 100, 4, 25);
  //brown windows
  fill('#995f5b');
  rect(244, 349, 10, 20);
  ellipse(249, 350, 10, 10);
  rect(275, 349, 10, 20);
  ellipse(280, 350, 10, 10);
  rect(307, 349, 10, 20);
  ellipse(312, 350, 10, 10);
  rect(484, 311, 10, 20);
  ellipse(489, 312, 10, 10);
  rect(502, 311, 10, 20);
  ellipse(507, 312, 10, 10);
  rect(484, 353, 10, 20);
  ellipse(489, 354, 10, 10);
  rect(502, 353, 10, 20);
  ellipse(507, 354, 10, 10);
  rect(570, 311, 10, 20);
  ellipse(575, 312, 10, 10);
  rect(589, 311, 10, 20);
  ellipse(594, 312, 10, 10);
  rect(570, 353, 10, 20);
  ellipse(575, 354, 10, 10);
  rect(588, 353, 10, 20);
  ellipse(593, 354, 10, 10);
  rect(532, 228, 19, 7);
  //blue archway
  fill('#a6ecfd');
  rect(522, 325, 38, 76);
  ellipse(541, 329, 38, 39);
  fill('#e9696a');
  textSize(40);
  textFont('courier');
  text('Qutubh Minar', 270, 60);

}

//this function draws the text which will be called on mouse over in the Qutubh Minar function.
function QutubhText1() {
  fill('#4ebd77');
  rect(542, 452, 230, 79);
  fill('white');
  noStroke();
  textSize(12);
  textFont('courier');
  text('The Alai Darwaza is the main', 556, 475);
  text(' gateway from southern side', 555, 495);
  text(' of the Quwwat-ul-Islam Mosque', 545, 515);

}

//this function draws the highlight which will be called on mouse over in the Qutubh Minar function.
function Qutubh1highlighted() {
  fill(255, 0, 0, 50)
  rect(522, 325, 38, 76);
  ellipse(541, 329, 38, 39);

}

//this function draws the text which will be called on mouse over in the Qutubh Minar function.
function QutubhText2() {
  fill('#4ebd77');
  rect(542, 452, 230, 79);
  fill('white');
  noStroke();
  textSize(13);
  textFont('courier');
  text('The Qutb Minar is the', 574, 475);
  text(' tallest brick', 597, 495);
  text(' minaret in the world', 575, 515);

}

//this function draws the highlight which will be called on mouse over in the Qutubh Minar function.
function Qutubh2highlighted() {
  fill(255, 0, 0, 50)
  quad(393, 268, 398, 276, 443, 276, 448, 268);
  quad(398, 207, 403, 214, 438, 214, 443, 207);
  quad(402, 162, 406, 168, 434, 167, 439, 162);
  quad(406, 129, 409, 134, 431, 133, 435, 129);
  quad(409, 96, 411, 101, 429, 101, 431, 96);
  quad(398, 275, 395, 331, 446, 331, 443, 275);
  quad(402, 213, 400, 260, 442, 260, 438, 213);
  quad(405, 167, 402, 202, 438, 202, 434, 167);
  quad(408, 133, 407, 157, 433, 157, 431, 133);
  quad(411, 100, 409, 125, 431, 125, 429, 100);
  rect(393, 259, 55, 10);
  rect(398, 201, 45, 7);
  rect(402, 156, 37, 7);
  rect(406, 124, 29, 6);
  rect(409, 91, 22, 6);
  rect(404, 275, 11, 52);
  rect(425, 275, 11, 52);
  rect(408, 213, 9, 47);
  rect(424, 213, 9, 47);
  rect(410, 167, 7, 35);
  rect(422, 167, 7, 35);
  rect(412, 133, 5, 24);
  rect(412, 133, 5, 24);
  rect(421, 133, 5, 24);
  rect(414, 100, 4, 25);
  rect(422, 100, 4, 25);

}