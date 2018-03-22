
 /* 
    A1 - Digital Portrait of a Cat
    Jenna James
    1/14/18
 */

// This a part sets up the environment
//
function setup() {
  createCanvas(650, 800);
}

function draw() {
  background('darkseagreen');

    
  // This part sets up the background dots
  //
  fill('mediumvioletred');
  stroke('mediumvioletred');
  ellipse(20, 20, 5, 5);
  ellipse(320, 70, 5, 5);
  ellipse(40, 720, 5, 5);
  ellipse(500, 20, 5, 5);
  ellipse(610, 190, 5, 5);
  ellipse(420, 300, 5, 5);
  ellipse(570, 620, 5, 5);
  ellipse(570, 620, 5, 5);
  ellipse(470, 540, 5, 5);
  ellipse(1, 320, 5, 5);
  ellipse(543, 760, 5, 5);
  ellipse(35, 520, 5, 5);
  fill('seagreen');
  stroke('seagreen');
  ellipse(70, 70, 5, 5);
  ellipse(380, 100, 5, 5);
  ellipse(140, 720, 5, 5);
  ellipse(590, 270, 5, 5);
  ellipse(10, 190, 5, 5);
  ellipse(42, 300, 5, 5);
  ellipse(570, 420, 5, 5);
  ellipse(470, 770, 5, 5);
  ellipse(376, 320, 5, 5);
  ellipse(146, 720, 5, 5);
  ellipse(46, 620, 5, 5);
  
  
  // This part sets up the head and ears of the cat
  //
  stroke('gray');
  strokeWeight(1);
  fill('lightgray');
  rect(89, 144, 210, 180);
  triangle(120, 91, 89, 144, 152, 144);
  triangle(269, 88, 235, 144, 299, 144);
  fill('mistyrose');
  stroke('mistyrose');
  triangle(120, 107, 106, 137, 132, 137);
  triangle(269, 104, 254, 137, 279, 137);


  // This part sets up the facial features of the cat
  //
  stroke('gray');
  fill('royalblue');
  ellipse(147, 220, 30, 30);
  ellipse(240, 220, 30, 30);
  stroke('midnightblue');
  fill('midnightblue');
  ellipse(147, 220, 16, 30);
  stroke('midnightblue');
  fill('midnightblue');
  ellipse(240, 220, 16, 30);
  fill('mistyrose');
  stroke('mistyrose');
  triangle(193, 274, 181, 251, 205, 251);
  stroke('dimgray');
  line(192.5, 274, 192.5, 282);
  line(192.5, 282, 177, 295);
  line(192.5, 282, 205, 296);
  stroke('white');
  line(178, 271, 140, 260);
  line(178, 278, 140, 290);
  line(208, 271, 240, 260);
  line(208, 279, 240, 290);
  fill('gainsboro');
  stroke('gainsboro');
  triangle(92, 168, 90, 205, 126, 184);
  triangle(92, 208, 90, 245, 126, 224);
  triangle(92, 248, 90, 285, 126, 264);
  triangle(260, 186, 299, 166, 297, 206);
  triangle(260, 226, 299, 206, 297, 246);
  triangle(260, 266, 299, 246, 297, 286);


  //This part sets up the body of the cat
  // 
  stroke('gray');
  fill('lightgray');
  rect(89, 324, 390, 400, 0, 500, 20, 3);
  stroke('gray');
  strokeWeight('2');
  arc(370, 550, 100, 100, 3, PI + QUARTER_PI, OPEN);
  fill('gainsboro');
  stroke('gainsboro');
  ellipse(193, 435, 150, 70);


  // This part sets up the paw of cat
  //  
  fill('white');
  stroke('white');
  rect(80, 676, 65, 49, 65, 10, 5, 3);

  
  // This part sets up the tail of cat
  //
  stroke('gray');
  line(417, 678, 200, 678);
  stroke('white');
  fill('white');
  rect(180, 676, 55, 48, 49, 29, 35, 35);
  stroke('dimgrey');
  fill('dimgrey');
  rect(222, 678, 23, 45);
  rect(265, 678, 23, 45);
  rect(308, 678, 23, 45);
  rect(351, 678, 23, 45);
  rect(394, 678, 23, 45);

  
  //This part ses up the collar on cat
  //
  stroke('olivedrab');
  fill('olivedrab');
  rect(90, 312, 209, 13);
  stroke('goldenrod');
  fill('goldenrod');
  ellipse(192, 330, 19, 19);
  fill('grey');
  textSize(5);
  text('meow', 185, 331);



}