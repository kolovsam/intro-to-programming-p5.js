/*
Please try to press the grid on the chess board to have fun :)
*/


var change = 10
var xCount = 10;
var yCount = 10;
var rects = new Array();
var change = 5;

function setup() { 
  createCanvas(400, 400);
  var perWidth = width / xCount;
  var perHeight = height / yCount;
  for(i = 0; i < yCount; i++){
    rects[i] = new Array();
    var remain;
    if(i % 2 == 0){
      remain = 0;
    }else{
      remain = 1;
    }
    for(j = 0; j < xCount; j++){
      var col;
      if(j % 2 == remain){
        col = 'white';
      }else{
        col = 'black';
      }
      rects[i][j] = new myRect(i * perWidth, j * perHeight, i * perWidth + perWidth, j * perHeight + perHeight, col);
    }
  }
} 

function myRect(ux, uy, lx, ly, col){
  this.ux = ux;
  this.uy = uy;
  this.lx = lx;
  this.ly = ly;
  this.col = col;
  this.change = 0;
  this.draw = function(){
    if(mouseX >= this.ux && mouseX <= lx && mouseY >= this.uy && mouseY <= this.ly && mouseIsPressed){
      if(this.col == 'white'){
        this.col = 'black';
      }else{
        this.col = 'white';
      }
    }else{
      
    }
    fill(this.col);
    rect(this.ux,this.uy,this.lx,this.ly);
  }
}

function draw() { 
  background(220);
  for(i = 0; i < yCount; i++){
    for(j = 0; j < xCount; j++){
      rects[i][j].draw();
    }
  }
}/*
Please try to press the grid on the chess board to have fun :)
*/


var change = 10
var xCount = 10;
var yCount = 10;
var rects = new Array();
var change = 5;

function setup() { 
  createCanvas(400, 400);
  var perWidth = width / xCount;
  var perHeight = height / yCount;
  for(i = 0; i < yCount; i++){
    rects[i] = new Array();
    var remain;
    if(i % 2 == 0){
      remain = 0;
    }else{
      remain = 1;
    }
    for(j = 0; j < xCount; j++){
      var col;
      if(j % 2 == remain){
        col = 'white';
      }else{
        col = 'black';
      }
      rects[i][j] = new myRect(i * perWidth, j * perHeight, i * perWidth + perWidth, j * perHeight + perHeight, col);
    }
  }
} 

function myRect(ux, uy, lx, ly, col){
  this.ux = ux;
  this.uy = uy;
  this.lx = lx;
  this.ly = ly;
  this.col = col;
  this.change = 0;
  this.draw = function(){
    if(mouseX >= this.ux && mouseX <= lx && mouseY >= this.uy && mouseY <= this.ly && mouseIsPressed){
      if(this.col == 'white'){
        this.col = 'black';
      }else{
        this.col = 'white';
      }
    }else{
      
    }
    fill(this.col);
    rect(this.ux,this.uy,this.lx,this.ly);
  }
}

function draw() { 
  background(220);
  for(i = 0; i < yCount; i++){
    for(j = 0; j < xCount; j++){
      rects[i][j].draw();
    }
  }
}