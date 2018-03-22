
/*  Sonam Samel
		HCDE 598 A5- Bouncing Shapes
*/

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

var circleX = 200;
var circleY = 300;

var shapeSize = 50;

var xDirection = 1;
var yDirection = 1;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

}

function draw() {
  background('lavender');
  
  // draws circle-1
  noStroke();
  fill('pink');
  ellipseMode(CORNER);
  ellipse(circleX, circleY, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }

  // draws circle-2
  fill('red');
  ellipseMode(CORNER);
  ellipse(circleX + 50, circleY + 50, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }


  // draws circle-3
  fill('lightgreen');
  ellipseMode(CORNER);
  ellipse(circleX + 100, circleY + 100, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }

  // draws circle-4
  fill('powderblue');
  ellipseMode(CORNER);
  ellipse(circleX - 100, circleY - 100, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }

  // draws circle-5
  fill('bisque');
  ellipseMode(CORNER);
  ellipse(circleX - 20, circleY - 100, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }

  // draws circle-6
  fill('cornflowerblue');
  ellipseMode(CORNER);
  ellipse(circleX - 58, circleY - 20, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }


  // draws circle-7
  fill('blueviolet');
  ellipseMode(CORNER);
  ellipse(circleX - 200, circleY - 20, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }

  // draws circle-8
  fill('greenyellow');
  ellipseMode(CORNER);
  ellipse(circleX - 200, circleY + 100, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }

  // draws circle-9
  fill('darkorange');
  ellipseMode(CORNER);
  ellipse(circleX - 70, circleY + 100, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }

  // draws circle-10
  fill('mediumslateblue');
  ellipseMode(CORNER);
  ellipse(circleX - 2, circleY + 100, shapeSize);

  // update shape coordinates
  circleX += xDirection;
  circleY += yDirection;

  // update shape direction
  if (circleX < 0 || circleX > CANVAS_WIDTH - shapeSize) {
    xDirection *= -1;
  } else if (circleY < 0 || circleY > CANVAS_HEIGHT - shapeSize) {
    yDirection *= -1;
  }
}