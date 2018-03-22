//Can Zhao HW 3 Interactive Story

var question = "Do you like dogs? y/n";
var page = 0;
var z = "";
var x = "";
var y = "";
var question2 = "";
var answer = "";

 
  function dog(a,b,c){
	translate(a,b);
	scale(c);
	push();
	fill(198, 156, 109);
	stroke(198, 156, 109);
	strokeWeight(120);
	ellipse(512,561,593,593)
	//dog face
	line(123,430,308,265);
	line(900,430,735,265);
	//dog ears
	fill(96, 56, 19);
	strokeWeight(0);
	ellipse(390,413,88,88);
	ellipse(640,413,88,88);
	//dog eyes
	stroke(96,56,19);
	strokeCap(ROUND);
	strokeWeight(40);
	triangle(495,570,535,570,520,610);
	line(475,560,555,560);
	line(475,560,515,610);
	line(520,610,555,560);
	//dog nose
	line(520,610,520,740);
	line(470,770,520,740);
	line(570,770,520,740);
	//dog's mouth
  pop();
}



function setup() { 
  createCanvas(700, 500);
} 

function draw() { 
  background(220);
  textSize(30);
  fill(0, 102, 153);
  text(question, 10, 60);
  
  if (page == 1){
  drawPage1();

  }else if (page==2){
  	drawPage2();
  }else if (page == 3){
    drawPage3();
  }else if (page == 4){
    drawPage4();
            }

  
}
function drawPage1(){
  text(question2, 10, 430);
  dog(x,y,z);

  
}
	function drawPage2(){
  answer = "Big doggg!!!Press y if you like it."
  text(answer, 10, 30);
  dog(x,y,0.5);

  }

	function drawPage3(){
	answer = "Do you want a moving dog? y/n"
  text(answer, 10, 30);    
  }

	function drawPage4(){
    answer = "Thanks for watching! Bye!"
    textSize(30);
    text(answer, 10, 30);  
    frameRate(120);
    dog(x,y,z)
    x = x + 1;
    if (x > 700){
      x = 700;
    }    
  }

function keyTyped() {
  if (key === 'y') {
    question = "";
          x=20; y=20;z=0.2;
  question2 = "Do you want a bigger dog? y/n"
  page = page+1;

      
  } else if (key === 'n') {
    question = "Sorry we probably won't get along...";
    x=""; y=""; z="";
    question2 = "";
    answer = "";

  }

 
}

