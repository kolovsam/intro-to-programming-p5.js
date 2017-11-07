/* HCDE598 - 4 Scaled Drawing */


function setup() {
  createCanvas(800, 400);
  background('green');
}

function draw() {}

function flower(x, y, s) {
  //makes it easier to move flower
  push();
  //flower petal color
  fill('yellow');
  translate(x, y);
  scale(s);
  noStroke();
  //repeats ellipse and rotates it to make flower petals
  for (var i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 5);
  }
  //center of flower
  strokeWeight(0);
  fill('brown');
  ellipse(0, 0, 60, 60);
  //works with push () and translate () to rotate/move flower
  pop();
}
//allows flower to appear only when mouse is clicked
function mouseClicked() {
  //makes random sizes of flower
  var scale = random(0.25, 2);
  flower(mouseX, mouseY, scale);

}