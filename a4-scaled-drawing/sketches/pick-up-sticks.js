/* Scaled pickup stick drawing
    Brookshier
    2017-11-01
*/

// Draw canvas
function setup() {
  createCanvas(900, 900);
  background('MidnightBlue');
}

// Define color variables
var col = ['red', 'green', 'purple','deeppink','darkorange']

// Pickup stick class
function PickupStick(size, x, y, angle) {
  // Member variables
  this.size = size
  this.x = x;
  this.y = y;

  // Draw stick
  this.display = function() {
    // Change origin
    translate(this.x, this.y);
    
    // Rotate stick
    rotate(PI / angle);

    // Base stick
    noStroke();
    fill('wheat');
    rect(-this.size * 25, 0, this.size * 50, this.size)
    
    // Colors on sticks
    fill(random(col));
    rect(-this.size * 24, 0, this.size * 10, this.size);
    rect(+this.size * 14, 0, this.size * 10, this.size);
    rect(this.size, 0, this.size, this.size);
    rect(-this.size / 2, 0, this.size, this.size);
    rect(-this.size * 2, 0, this.size, this.size);
  };
}

// Draw a pickup stick when mouse is pressed
function mousePressed() {
  // Random rotation
  var rot = random(0, 2 * PI);

  // Random size
  var size = random(5, 15);

  // Instantiate object and draw
  stick = new PickupStick(size, mouseX, mouseY, rot);
  stick.display();
}