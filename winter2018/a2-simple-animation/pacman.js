//Simple Animation: By Joel Sytsma

var jaw1 = (1.3);
var jaw2 = (6.4);
var xcoord = 150
var ycoord = 150
var ghost1 = 0
var ghost2 = 0
var ghost3 = 65
var ghost4 = 65
var pacfinal = 0
var pacfinal2 = 300


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  //Yellow pac-man
  fill(255, 255, 0);
  strokeWeight(1);
  arc(xcoord = xcoord + 1, ycoord = ycoord + 1, 50, 50, jaw1 = jaw1 - .1, jaw2 = jaw2 + .1, PIE);

  //jaw motion
  if (jaw1 < 0.7) {
    jaw1 = jaw1 + 1;
  }

  if (jaw2 > 6.9) {
    jaw2 = jaw2 - 1;
  }
  //Eye
  strokeWeight(9);
  point(xcoord + 10, ycoord - 10);


  //animation
  ghost1 = ghost1 + 1;
  ghost2 = ghost2 + 1;
  ghost3 = ghost3 + 1;
  ghost4 = ghost4 + 1;


  //red ghost body
  fill(255, 0, 0);
  strokeWeight(5);
  beginShape();
  strokeJoin(ROUND);
  vertex(ghost1, ghost2);
  vertex(60 + ghost1, ghost2);
  vertex(60 + ghost1, 60 + ghost2);
  vertex(50 + ghost1, 50 + ghost2);
  vertex(40 + ghost1, 60 + ghost2);
  vertex(30 + ghost1, 50 + ghost2);
  vertex(20 + ghost1, 60 + ghost2);
  vertex(10 + ghost1, 50 + ghost2);
  vertex(ghost1, 60 + ghost2);
  endShape(CLOSE);

  //red ghost eyes
  strokeWeight(2);
  fill(255, 255, 255);
  ellipse(ghost1 + 18, ghost2 + 15, 15, 20);
  ellipse(ghost1 + 40, ghost2 + 15, 15, 20);
  strokeWeight(6);
  point(ghost1 + 20, ghost2 + 20);
  point(ghost1 + 42, ghost2 + 20);

  //command for red ghost to stop moving
  if (ghost2 > 500) {
    ghost2 = 500;
    ghost1 = ghost1 - 3;
    if (ghost1 < 350) {
      ghost1 = 350;
    }
  }

  //green ghost body 
  fill(0, 255, 100);
  strokeWeight(5);
  beginShape();
  strokeJoin(ROUND);
  vertex(ghost3, ghost4);
  vertex(60 + ghost3, ghost4);
  vertex(60 + ghost3, 60 + ghost4);
  vertex(50 + ghost3, 50 + ghost4);
  vertex(40 + ghost3, 60 + ghost4);
  vertex(30 + ghost3, 50 + ghost4);
  vertex(20 + ghost3, 60 + ghost4);
  vertex(10 + ghost3, 50 + ghost4);
  vertex(ghost3, 60 + ghost4);
  endShape(CLOSE);

  //green ghost eyes  
  strokeWeight(2);
  fill(255, 255, 255);
  ellipse(ghost3 + 18, ghost4 + 15, 15, 20);
  ellipse(ghost3 + 40, ghost4 + 15, 15, 20);
  strokeWeight(6);
  point(ghost3 + 20, ghost4 + 20);
  point(ghost3 + 42, ghost4 + 20);

  //command for green ghost to stop moving
  if (ghost4 > 500) {
    ghost4 = 500;
    ghost3 = ghost3 - 3;
    if (ghost3 < 250) {
      ghost3 = 250;
    }
  }
  
  //command for pac man to come in from the side
  if (xcoord > 700) {
    fill(255, 255, 0);
    strokeWeight(1);
    arc(pacfinal = pacfinal + 1, pacfinal2, 50, 50, jaw1 - .9, jaw2 - .9, PIE);
    //Eye
    strokeWeight(9);
    point(pacfinal, pacfinal2 - 10);

    //command for pac man from the side to stop 
    if (pacfinal > 250) {
      pacfinal = 250;
      //congratulations text 
      fill(0, 0, 0);
      text('You Win! The Ghosts are bamboozled!', height / 2, width / 2);
    }
  }
}