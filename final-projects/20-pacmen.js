/*This is a simple version of Pac Man game.
1. There will be 20 pac-men automatically being generated on the canvas;
2. Whenever user click the mouse, a bean will be generated at the tip of mouse;
3. If the mouse is on one pac-man when clicking, the pac-man would be broken into several small pac-men;
4. User can use the mouse the chase pac-men, since pac-man will run away from the mouse;
5. Every time a pac-man eat a bean, it will become bigger and change to another color. Also, its velocity will be slower.
*/


/*Basic global variables*/
var PAC_SIZE;
var COLOR;
var SPEED;
var MOUTH_SIZE;
var pacs = [];
var beans = [];
var wall;
var BEAN_SIZE;
var record_num = -1;
var SUB_AMOUNT = 5;
var SUB_SIZE = 2;
var flag = false;

/*Canvas variables*/
var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 600;
var RANGE_WIDTH = 400;
var RANGE_HEIGHT = 400;
var CENTER_WIDTH = CANVAS_WIDTH / 2;
var CENTER_HEIGHT = CANVAS_HEIGHT / 2;

/*Pac-man class
1. can set up initial status: position, velocity, mouth size, speed;
2. velocity, speed, color,can be changed according to user's manipulation.
*/
class Pac{
  constructor(x, y, size, dx, dy, mouth_size, speed, color, num){
    this.x = x;
    this.y = y;
    this.size = size;
    this.dx = dx;
    this.dy = dy;
    this.openMouth = true;
    this.range = 10;
    this.speed = speed;
    this.countStep = round(random(0, this.range));
    this.mouth_size = mouth_size;
    this.color = color;
    this.COLORS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423'];
    this.num = num;
    this.eye_size = 5;
  }
  //the headquarter of functions in Pac class
  run(){
    this.drawPac();
    this.mv();
    this.bounce();
    this.mouseLocation();
    this.broken();
  }
  broken() {
    if(flag && record_num != this.num && (dist(this.x, this.y, mouseX, mouseY) < this.size / 2)){
      record_num = this.num;
      for (i = 0; i < SUB_AMOUNT; i++) {
        var r = random(0, this.size / 2);
        var angle = random(-PI, PI);
        var tempX = r * cos(angle);
        var tempY = r * sin(angle);
        var newX = tempX + this.x;
        var newY = tempY + this.y;
        var vectors = unitVector(newX - this.x, newY - this.y);
        var pac = new Pac(newX, newY, this.size / SUB_SIZE, vectors[0], vectors[1], PI * 2 / 5, this.speed, 0, pacs.length);
        pac.eye_size *= 0.5;
        pacs.push(pac);
      }
      this.size /= SUB_SIZE;
      flag = false;
    }
  }
  //Chase pac-man by mouse
  mouseLocation(){
    var distance = dist(this.x, this.y, mouseX, mouseY);
    var vectorNew;
    if(distance <= width * 0.25){
      var dirX = this.x - mouseX;
      var dirY = this.y - mouseY;
      var vectorAdd = unitVector(dirX, dirY);
      vectorNew = unitVector(2 * vectorAdd[0] + this.dx, 2 * vectorAdd[1] + this.dy);
      this.dx = vectorNew[0] * this.speed * 3;
      this.dy = vectorNew[1] * this.speed * 3;
    }else{
      vectorNew = unitVector(this.dx, this.dy);
      this.dx = vectorNew[0] * this.speed;
      this.dy = vectorNew[1] * this.speed;
    }
  }
  mv(){
    this.x += this.dx;
    this.y += this.dy;
  }
  drawPac(){
    this.countStep++;
    if(this.countStep > this.range){
      this.openMouth = !this.openMouth;
      this.countStep = 0;
    }
    noStroke();
    var angle = atan2(this.dy, this.dx);
    var r = this.size / 4;
    var up = angle + this.mouth_size / 2;
    var down = (2 * PI - this.mouth_size) + up;
    var eye = angle + PI * 3 / 2;
    var tempX = r * cos(eye) + this.x;
    var tempY = r * sin(eye) + this.y;
    if(this.color <= 6){
      fill(this.COLORS[this.color]);
    }else{
      fill(this.COLORS[6]);
    }
    if(this.openMouth){
      arc(this.x, this.y, this.size, this.size, up, down);
    }else{
      ellipse(this.x, this.y, this.size, this.size);
    }
    fill('rgb(0,0,39)');
    ellipse(tempX,tempY,this.eye_size,this.eye_size);
  }
  bounce(){
    if (this.x >= CENTER_WIDTH + RANGE_WIDTH/2){
      this.dx = -abs(this.dx);
    }
    if(this.x <= CENTER_WIDTH - RANGE_WIDTH/2){
      this.dx = abs(this.dx);
    }
    if (this.y >= CENTER_HEIGHT + RANGE_HEIGHT/2) {
      this.dy = -abs(this.dy);
    }
    if(this.y <= CENTER_HEIGHT - RANGE_HEIGHT/2){
      this.dy = abs(this.dy);
    }
  }
}

/*Bean class which is the food of pac-man.*/
class Bean{
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  run(){
    this.drawBean();
  }
  drawBean(){
    fill('red');
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}

/*Set up the canvas and create 20 pac-men at the first begining.*/
function setup(){
  COLOR = 'white';
  PAC_SIZE = 30;
  SPEED = 0.8;
  MOUTH_SIZE = PI * 2 / 5;
  BEAN_SIZE = 8;
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  pac = new Pac(100, 100, 50, 1, 1, PI * 2 / 5);
  for(i = 0; i < 20; i++){
    var COLOR = 0;
    var vectors = randomVector(SPEED);
    pacs[i] = new Pac(random(CENTER_WIDTH - RANGE_WIDTH/2, CENTER_WIDTH + RANGE_WIDTH/2), random(CENTER_HEIGHT - RANGE_HEIGHT/2, CENTER_HEIGHT + RANGE_HEIGHT/2), PAC_SIZE, vectors[0], vectors[1], MOUTH_SIZE, SPEED, COLOR, pacs.length);
  }

}

/*Make the vector a unit vector.*/
function unitVector(x, y){
  var len = dist(x, y, 0, 0);
  var vectorX = x / len;
  var vectorY = y / len;
  var vectors = [];
  vectors[0] = vectorX;
  vectors[1] = vectorY;
  return vectors;
}

/*Create a vector randomly pointing to a direction.*/
function randomVector(speed){
  var x = random(-speed, speed);
  var y = random(-speed, speed);
  vectors = unitVector(x, y);
  vectors[0] = vectors[0] * speed;
  vectors[1] = vectors[1] * speed;
  return vectors;
}

/*Update the information on the screen.*/
function draw(){
  background('rgb(0,0,39)');
  for(i = 0; i < pacs.length; i++){
    pacs[i].run();
  }
  for(i = 0; i < beans.length; i++){
    beans[i].run();
  }
  eatBean();
  pacBounce();
}

/*Calculate the distance between pac-men and each beans, let the pac-man eat the bean if close enough.
Also through the traversal, calulate the distance between mouse pointer and pac-men, in order to create
the effect of chasing.
*/
function eatBean(){
  for(i = 0; i < pacs.length; i++){
    for(j = 0; j < beans.length; j++){
      if(dist(pacs[i].x, pacs[i].y, beans[j].x, beans[j].y) < width / 3){
        var dirs = unitVector(beans[j].x - pacs[i].x, beans[j].y - pacs[i].y);
        pacs[i].dx = dirs[0];
        pacs[i].dy = dirs[1];
      }
      if(dist(pacs[i].x, pacs[i].y, beans[j].x, beans[j].y) < PAC_SIZE / 2){
        beans.splice(j, 1);
        pacs[i].size += 5;
        pacs[i].color++;
        pacs[i].speed *= 0.8;
      }
    }
  }
}

/*Traverse all pac-men to calculate the distance among one another, in order to create bouncing effect.*/
function pacBounce(){
  for(i = 0; i < pacs.length; i++){
    for(j = 0; j < pacs.length; j++){
      if(i == j){
        continue;
      }
      if(dist(pacs[i].x, pacs[i].y, pacs[j].x, pacs[j].y) < (pacs[i].size + pacs[j].size) / 2){
        var dirs = unitVector(pacs[j].x - pacs[i].x, pacs[j].y - pacs[i].y);
        pacs[i].dx = -dirs[0];
        pacs[i].dy = -dirs[1];
        pacs[j].dx = dirs[0];
        pacs[j].dy = dirs[1];
      }
    }
  }
}

/*Record the mouse event:
1. Once mouse is clicked, a bean would be generated at the mouse pointer;
2. If the mouse pointer is placed on a pac-man when clicking, the pac-man would break into several small pac-men.
*/
function mouseClicked(){
  beans.push(new Bean(mouseX, mouseY, BEAN_SIZE));
  flag = true;
}
