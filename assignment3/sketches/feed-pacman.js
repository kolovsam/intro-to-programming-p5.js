//Defines a variable that keeps track of the conditions.
var value = "black";

function draw() {
  createCanvas(400, 400);
  background(240);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  fill(0);
  //Instruction
  text("Feed your pacman!  a = eat left; b = eat right; r = restart", width / 2, 30);

  //Various conditions.
  if (value == "black") {
    textSize(30);
    text("Strawberry / Broccoli", width / 2, 80);
  } else if (value == "red") {
    textSize(30);
    text("Rose / Eggplant", width / 2, 80);
  } else if (value == "green") {
    textSize(30);
    text("Snail / Dust", width / 2, 80);
  } else if ((value == "pink") || (value == "purple") || (value == "blue") || (value == "grey")) {
    textSize(30);
    text("Salmon / Egg", width / 2, 80);
  } else if (value == "orange") {
    text("Your pacman becomes Salman!", width / 2, 120);
    textSize(30);
    text("Oh no!", width / 2, 80);
  } else if (value == "yellow") {
    text("Your pacman is very healthy!", width / 2, 120);
    textSize(30);
    text("Congratulations!", width / 2, 80);
  }
  fill(value);
  arc(200, 200, 40, 40, PI / 6, 2 * PI - PI / 6, PIE);
}


//Describes the change of condition each time the user presses a key.
function keyTyped() {
  if (key === 'a') {
    if (value == "black") {
      value = "red";
    } else if (value == "red") {
      value = "pink";
    } else if (value == "green") {
      value = "blue";
    } else if ((value == "pink") || (value == "purple") || (value == "blue") || (value == "grey")) {
      value = "orange";
    }

  } else if (key === 'b') {
    if (value == "black") {
      value = "green";
    } else if (value == "green") {
      value = "grey";
    } else if (value == "red") {
      value = "purple";
    } else if ((value == "pink") || (value == "purple") || (value == "blue") || (value == "grey")) {
      value = "yellow";
    }

  } else if (key === 'r') {
    value = "black";
  }
}
