/*
Thorgerson
*/

/*I started working on Keith harringtons "stick" 
people but could not figure out hous to flip the 
arc the other dirrection*/

function setup() {
  createCanvas(600, 600);
  background('#212c40');

//triangle start 
  fill('black');
  stroke('#c3e5ff');
  strokeWeight(3);
  triangle(300, 155, 391, 317, 207, 317);

  fill('black');
  stroke('#97c7e5');
  strokeWeight(2);
  triangle(300, 159, 389, 315, 210, 315);

  fill('black');
  stroke('#76a1c3');
  strokeWeight(2);
  triangle(300, 163, 385, 313, 214, 313);

  fill('black');
  stroke('#497292');
  strokeWeight(2);
  triangle(300, 167, 383, 311, 217, 311);

  fill('#212c40');
  stroke('#294864');
  strokeWeight(2);
  triangle(300, 171, 380, 309, 220, 309);

//line 
  stroke('white');
  strokeWeight(3)
  line(0, 297, 254, 230);

//prism
/*I tried for a while to figure out a 
  gradient, I found that lerpcolor() 
  might do it but could not get it to work*/

  stroke('white');
  strokeWeight(.5)
  line(254, 230, 343, 246);
  
  stroke('white');
  strokeWeight(1)
  line(254, 230, 320, 242);
  
  stroke('white');
  strokeWeight(2)
  line(254, 230, 291, 237);
  
  stroke('white');
  strokeWeight(.5)
	line(254, 230, 325, 216);
  
  stroke('white');
  strokeWeight(1)
	line(254, 230, 310, 218);
  
  stroke('white');
  strokeWeight(2)
	line(254, 230, 290, 223);

//rainbow
  fill('#fc7673')
  strokeWeight(0)
  quad(336, 216, 339, 221, 600, 267, 600, 256);

  fill('#fca266')
  strokeWeight(0)
  quad(339, 221, 342, 226, 600, 275, 600, 267);

  fill('#fbf935')
  strokeWeight(0)
  quad(342, 226, 345, 231, 600, 287, 600, 275);

  fill('#c6f777')
  strokeWeight(0)
  quad(345, 231, 348, 236, 600, 298, 600, 287);

  fill('#a7f6fd')
  strokeWeight(0)
  quad(348, 236, 351, 241, 600, 309, 600, 298);

  fill('#c098cd')
  strokeWeight(0)
  quad(351, 241, 354, 246, 600, 320, 600, 309);

}

function draw() {

}

