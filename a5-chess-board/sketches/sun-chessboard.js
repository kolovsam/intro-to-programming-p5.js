/* bar matrix - 1
Tongfang Sun, Assignment #5

simple demo to draw a matrix of bar segments with a for loop and parameters

*/

// the size of the overall canvas
const canvasWidth = 600;
const canvasHeight = 600;

// the uppper left corner of the progress bar
const xOrigin = 100;
const yOrigin = 100;

// some colors
const bgColor = 'grey';

// parameters for each box in the matrix
const segmentWidth = 50;
const segmentHeight = 50;
const borderWidth = 0;


// how many segments to draw in each row
const barSegments = 8;
const numRows =8;

colArray = ['#ffce9e', '#d18b47']

function setup() {

   // create the canvas
   createCanvas(canvasWidth, canvasHeight);
   background(bgColor);

   // set drawing paraemeters for the bar segments
   
   //stroke(borderColor);
   strokeWeight(borderWidth);

  // draw the required number of rows
   for (j = 0; j < numRows; j++) {

     // for each row, calcluate its y coordinate
      var yCorner = yOrigin + j * segmentHeight;

      // draw the required number of bar segments in that row
      for (i = 0; i < barSegments; i++) {
        
         // first calculate the x coordinate of this segment
         var xCorner = xOrigin + i * segmentWidth;
        
         // then draw one bar segment
        fill(colArray[(i+j)%2]);
         rect(xCorner, yCorner, segmentWidth, segmentHeight);
      }

   }

}

function draw() {}