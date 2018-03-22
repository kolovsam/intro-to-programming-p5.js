//Assignment 4, HCDE 598, Samuel Shen
/* Using 75 as my "standard size" and maintain a certain ratio around it*/
var lightPink = "#FDDCD3"
var bodyPink = "#FFB7C3"
var nosePink = "#B74C52"
var eyesBlack = "#000"



function setup() {
  createCanvas(600, 600);
  background("#4a9700");

} 
function pigDrawing(x, y, scale) {
  /* drawing commands, using 75 as a random number and 100/100 as the starting point
	leaving some paddings on the site, basically dividing everything by 75
	*/
	noStroke();
	//Full Face
	fill(bodyPink);
	ellipse(x+(scale*(100/75)),y+(scale*(100/75)),scale*(150/75),scale*(150/75));//100,100,150,150
	//Two Eyes
	fill(eyesBlack);
	ellipse(x+(scale*(130/75)),y+(scale*(80/75)),scale*(12/75),scale*(12/75));//130,80,12,12
	ellipse(x+(scale*(70/75)),y+(scale*(80/75)),scale*(12/75),scale*(12/75));//70,80,12,12
	//Nose
	fill(lightPink);
	rect(x+(scale*(60/75)),y+(scale*(110/75)),scale*(80/75),scale*(40/75),scale*(16/75),scale*(16/75));//60,110,80,40,16,16
	//Nose Holes
	fill(nosePink);
	rect(x+(scale*(73/75)),y+(scale*(117/75)),scale*(13/75),scale*(25/75),scale*(16/75),scale*(16/75));//73,117,13,25,16,16
	rect(x+(scale*(115/75)),y+(scale*(117/75)),scale*(13/75),scale*(25/75),scale*0.21);//115,117,13,25,16,16
	//Ears;
	fill(lightPink);
	ellipse(x+(scale*(55/75)),y+(scale*(40/75)),scale*(40/75),scale*(40/75));//55,40,40,40
	ellipse(x+(scale*(140/75)),y+(scale*(40/75)),scale*(40/75),scale*(40/75));//140,40,40,40
}



//MouseClick to change size function
function mouseClicked() {
  var size = random(50,150);	//When mouse clicked, random size for scaling
  pigDrawing(mouseX, mouseY, size);
}