function setup() {

  createCanvas(900, 900);
  background('green');

  //window
  stroke('blue');
  fill('blue');
  rect(350, 60, 500, 500);

  //sun
  stroke('yellow');
  fill('yellow');
  arc(850, 60, 380, 380, 1.57, PI);
  strokeWeight(3);
  line(650, 80, 500, 90);
  line(665, 150, 515, 220);
  line(720, 220, 620, 340);
  line(820, 260, 800, 400);

  //coffee mug
  stroke('white');
  strokeWeight(10);
  line(100, 300, 500, 300);
  fill('white');
  arc(300, 300, 400, 600, 0, PI);
  noFill();
  strokeWeight(25);
  curve(-1000, 650, 490, 330, 400, 550, -400, 450);

  //steam
  stroke(220);
  strokeWeight(7);
  curve(900, 400, 150, 296, 150, 100, -400, 0);
  curve(900, 400, 250, 296, 250, 100, -400, 0);
  curve(900, 400, 350, 296, 350, 100, -400, 0);
  curve(700, 400, 450, 296, 450, 100, -400, 0);

  //strokeWeight(3);	
  //curve(700, 200, 200, 100, 200, 300, -200, 0);
  //curve(700, 200, 450, 300, 450, 100, -200, 0);
  //curve(700, 200, 450, 300, 450, 100, -200, 0);

  //table
  stroke('brown');
  strokeWeight(100);
  line(0, 650, 510, 650);
  stroke('brown');
  noFill();
  rect(300, 650, 100, 200);
}

function draw() {

}