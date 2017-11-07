let graphic1;

function setup() {
    createCanvas(800, 800);
    background('white');
    textSize(32);
    fill(100,100,200);
    text("press 'R' to reset", 200, 60);
    text("click mouse to begin", 200, 100);
}

var r;
class graphic{
  constructor(r){
    this.r = r;
  }

  show(){
    strokeWeight(0);
    fill(mouseX/width*255,mouseY/width*255,200);

    ellipse(mouseX, mouseY, this.r);
    ellipse(mouseX + this.r,mouseY + this.r,this.r/2);
    ellipse(mouseX - this.r,mouseY + this.r,this.r/2);
    ellipse(mouseX + this.r,mouseY - this.r,this.r/2);
    ellipse(mouseX - this.r,mouseY - this.r,this.r/2);

    fill('white');
    ellipse(mouseX, mouseY, this.r*2/3);
  }
}

var index = 0;

function draw() {
    var r = [0, dist(mouseX, mouseY, pmouseX, pmouseY)];
    graphic1 = new graphic(r[index]);
    graphic1.show();
}

function mouseClicked(){
  index = index + 1;
  if (index == 2){
    index = 0;
  }
}

function keyTyped(){
  if (key === 'r'){
    background('white');
  };
}
