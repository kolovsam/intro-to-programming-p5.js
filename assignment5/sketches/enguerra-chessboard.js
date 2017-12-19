/* HCDE 598 Assignment #5
Draw a Chess board by 
Helen Enguerra
*/

//canvas height & width 
const CANVAS_HEIGHT = 700
const CANVAS_WIDTH = 700 

//colors for squares 
const EVEN_COLOR = 'honeydew'
const ODD_COLOR = 'darkseagreen' 

//height & width of squares
const SQR_HEIGHT = 50
const SQR_WIDTH = 50 

//rows & columns 
const RANK = 8
const FILE = 8
//Not using function draw
function draw() {}

function setup() { 
	
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	background(100); 
	
// for loop for drawing rows and columns 
  for (var x = 0; x < FILE; x++) {
		for (var y = 0; y < RANK; y++) {	
			//function square draws squares & function sqrColor assigns color
     square (x + x*SQR_WIDTH + 50, y + y*SQR_HEIGHT + 50, sqrColor (x + y));
		}
} 
}
//drawing squares 
function square(x, y, c) {
	fill(c);
  strokeWeight (0); 
  rect(x, y, SQR_WIDTH, SQR_HEIGHT);   
  
}

//function to determine square color (code from Andy) 
function sqrColor(n) {
   var remainder;
   // the "modulus" operator returns the remainder of dividing
   // the first number by the second one
   remainder = n % 2;
   //determines which square is odd and assigns odd color to it 
   if (remainder == 1) {
      return ODD_COLOR;
   } else {
      return EVEN_COLOR;
   }
}
