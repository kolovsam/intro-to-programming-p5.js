//Meng Wang, 598 Assignment - Chess Board
//define variables, the size of a square, the starting coordinates of the chessboard, the colors and the number of columns and rows;
var segmentSize=40;
var xOrigin=100;
var yOrigin=200;
var segmentColor='orange';
var segmentColor_2='grey';
var numColumns=8;
var numRows=8;



//create a chessboard
function setup() { 
  createCanvas(800, 600);
  background(220);
  noStroke();
  for(i=0;i<numRows;i++){
    	for(j=0;j<numColumns;j++){
//using different colors depending on the parity 
        	if(isOdd(i)&&(!isOdd(j))||isOdd(j)&&(!isOdd(i))){
            	drawSquare(xOrigin+i*segmentSize,yOrigin+j*segmentSize,segmentSize,segmentColor);
          }else{
            	drawSquare(xOrigin+i*segmentSize,yOrigin+j*segmentSize,segmentSize,segmentColor_2);
          }       	
  		}
  } 
}
//draw a unit
function drawSquare(x,y,size,color){
  fill(color);
  rect(x,y,size,size);
}
//judge if a number is even or odd
function isOdd(n){
	var remainder=n%2; 
  if(remainder==0){
  	return true;
  }else return false;
}