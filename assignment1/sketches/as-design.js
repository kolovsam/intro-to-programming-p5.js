/* 
	Assignment 1
  HCDE 598A
  By Andrea Sequeira
*/

function setup() {
  // Draw canvas
  createCanvas(800, 1000); // Canvas sized 800x1000
  background('white'); // Set canvas color to white
  
  // Draw arcs
  noStroke();
  fill(219, 112, 147); // Set color to pink
  arc(400, 500, 850, 850, 0, HALF_PI); // Bottom right arc
  
  fill(32, 178, 170); // Set color to teal
  arc(400, 500, 850, 850, HALF_PI, PI); // Bottom left arc
  
  fill(240, 128, 128); // Set color to coral
  arc(400, 500, 850, 850, PI, PI + HALF_PI); // Top left arc
  
  fill(0, 191, 255); // Set color to blue
  arc(400, 500, 850, 850, PI + HALF_PI, 0); // Top right arc
  
  // Draw cube
  stroke('white'); // Set stroke to white
  strokeWeight(40); // Set stroke thickness
  strokeCap(ROUND); // Make stroke ends rounded

  line(100, 300, 100, 700); // Draw first cube side's line 1
  line(200, 366, 200, 766); // Draw first cube side's line 2
  line(300, 433, 300, 833); // Draw first cube side's line 4
  line(400, 500, 400, 900); // Draw first cube side's line 3

  line(400, 500, 700, 300); // Draw second cube side's line 1
  line(400, 633, 700, 433); // Draw second cube side's line 2
  line(400, 766, 700, 566); // Draw second cube side's line 3
  line(400, 900, 700, 700); // Draw second cube side's line 4

  line(100, 300, 400, 500); // Draw third cube side's line 1
  line(200, 233, 500, 433); // Draw third cube side's line 2
  line(300, 166, 600, 366); // Draw third cube side's line 3
  line(400, 100, 700, 300); // Draw third cube side's line 4

  // Draw box
  noStroke(); // No outline for box
  fill('grey'); // Grey colored box
  rect(620, 870, 150, 80, 20); // Box size and location
  
  // Draw 'A'
  stroke('white'); // Set stroke to white
  strokeWeight(10); // Set stroke thickness
  strokeJoin(ROUND); // Make stroke joints rounded
  beginShape(); // Start drawing 'A'
  vertex(650, 930);
  vertex(670, 890);
  vertex(690, 930);
  endShape(); // Finish drawing 'A'
  stroke(0, 191, 255); // Set color to blue
  strokeWeight(5); // Set thickness
  point(670, 920); // Draw blue dot
  
  // Draw 'S'
  stroke('white'); // Set stroke color to white
  strokeWeight(10); // Set stroke thickness
  beginShape(); // Start drawing 'S'
  vertex(745, 890);
  vertex(715, 890);
  vertex(745, 930);
  vertex(715, 930);
  endShape(); // Finish drawing 'S'
  stroke(240, 128, 128); // Set color to coral
  strokeWeight(5); // Set stroke thickness
  point(718, 915); // Draw coral dot 
  stroke(32, 178, 170); // Set color to teal
  point(742, 905); // Draw teal dot
}

function draw() {
}