// The Mario pixel art is based on the image source: 
// https://www.pinterest.com/explore/pixel-art-mario/?lp=true

var interval;
var grid = 20;
var posX;
var posY;
var w = 15;
var h = 15;
var colors = {
    1: '#ffffff',
    2: '#fd0002',
    3: '#974806',
    4: '#fac090',
    5: '#000000',
    6: '#0071c4',
    7: '#feff01',
    8: '#000000',
    9: '#e27b68'
  };
var pixelArt = [
0,0,0,2,2,2,2,2,2,0,0,0,0,
0,0,2,2,2,2,2,2,2,2,2,2,0,
0,0,3,3,3,4,4,4,5,4,0,0,0,
0,3,4,3,4,4,4,4,5,4,4,4,0,
0,3,4,3,3,4,4,4,4,5,4,4,4,
0,3,3,4,4,4,4,4,5,5,5,5,0,
0,0,0,4,4,4,4,4,4,4,4,0,0,
0,0,2,2,6,2,2,2,2,0,0,0,0,
0,2,2,2,6,2,2,6,2,2,2,0,0,
2,2,2,2,6,6,6,6,2,2,2,2,0,
4,4,2,6,7,6,6,7,6,2,4,4,0,
4,4,4,6,6,6,6,6,6,4,4,4,0,
4,4,6,6,6,6,6,6,6,6,4,4,0,
0,0,6,6,6,0,0,6,6,6,0,0,0,
0,3,3,3,0,0,0,0,3,3,3,0,0,
3,3,3,3,0,0,0,0,3,3,3,3,0];

function setup() {
  createCanvas(300,300);
  strokeWeight(0);
  
  interval = setInterval(function(){
    console.log(grid);
    if(grid > 13) {
      grid--;
    } else {
      stopInterval();
    }
  }, 10);
}

function stopInterval() {
    clearInterval(interval);
}

function draw() {

  background('#fffaa');
  
  posX = 80;
  posY = 10;

  for ( var i=0; i <= pixelArt.length; i++ ) {
      
      posX = posX + w;
      
      if( i % grid === 0 ) {
        posX = 50;
        posY = posY + h;
      }
      
      if( pixelArt[i] > 0 ){
        fill( colors[pixelArt[i]] );
        rect(posX, posY, w, h);
      }
  }
}
