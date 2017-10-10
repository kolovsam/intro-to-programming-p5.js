function setup() { 
  createCanvas(500, 645);
  background('#FF9292');
} 

function draw() { 



//trunk
  stroke('#524646');
  strokeWeight(20);
  strokeCap(SQUARE);
  line(520,545,265,495);
  line(265,495,70,505);




noStroke();

//moon
  fill('#F7F7EC');
  ellipse(210,210,300,300 );
 	
//beak black
 	fill('#0F161D');
  quad(153,243,210,215,167,262,150,275);

//beak yellow 
  fill('#FFF03B');
  triangle(210,215,225,253,167,262);
  
  fill('#FAE354');
  triangle(210,215,272,253,225,253);
  
  fill('#FFF03B');
  triangle(210,215,260,206,272,253);
  
  fill('#F4E715');
  triangle(260,206,320,210,272,253);
  
  fill('#FAE354');
  triangle(320,210,315,257,272,253);
  
  fill('#FFF03B');
  triangle(320,210,343,217,315,257);
  
//beak red
  fill('#C13E09');
  triangle(167,262,175,270,150,275);
  
  fill('#F55206');
  triangle(167,262,225,253,175,270);
  
  fill('#C13E09');
  triangle(225,253,230,270,175,270);
  
  fill('#F55206');
  triangle(225,253,280,275,230,270);  
  
  fill('#FA8A5D');
  triangle(225,253,272,253,280,275);
  
  fill('#EF734D');
  triangle(272,253,315,257,280,275);
  
  fill('#F94E06');
  triangle(315,257,320,275,280,275);

  fill('#C13E09');
  triangle(320,275,308,292,280,275);
  
  
//head
  fill('#F1EABE');
  quad(320,275,370,273,343,294,308,292); //yellow
  
  fill('white');
  beginShape();
  vertex(315,257);
  vertex(320,250);
  vertex(332,255);
  vertex(355,250);
  vertex(370,273);
  vertex(320,275);
  endShape(CLOSE);  // whtie
  
  fill('#FA8A5D');
  quad(320,250,335,228,355,250,332,255,320,250);   //orange
  
  
  noStroke();
  
  fill('#161F28');
  triangle(343,217,362,214,335,228);
  
  fill('#000001');
  triangle(362,214,395,240,335,228);
  
  fill('#161F28');
  beginShape();
  vertex(335,228);
  vertex(395,240);
  vertex(370,273);
  vertex(355,250);
  endShape(CLOSE); //dark section
  
  
  
  fill('#203242');
  triangle(395,240,400,295,370,273);
  
  fill('#2C4051');
  quad(370,273,400,295,404,320,343,294);
  
  fill('#2C4051');
  triangle(395,240,415,288,400,295);
  
  fill('#203242');
  triangle(415,288,404,320,400,295);
  
  
  
//wing
  fill('#192127');
  triangle(308,292,327,362,270,324);
  
  fill('#0F161D');
  quad(308,292,343,294,380,310,327,362);
  
  fill('#192127');
  triangle(380,310,384,382,327,362);
  
  fill('#0F161D');
  triangle(380,310,404,320,384,382);
  
  fill('#546B82');
  triangle(270,324,283,395,250,378);
  
  fill('#203140');
  triangle(270,324,327,362,283,395);
  
  fill('#293C4A');
  triangle(327,362,325,440,283,395);
  
  fill('#334755');
  triangle(327,362,325,440,369,413);
  
  fill('#203140');
  triangle(327,362,384,382,369,413);
  
  fill('#A6B1B6');
  triangle(250,378,283,395,283,447);
  
  fill('#8D9AA2');
  triangle(283,395,325,440,283,447);
  
  
//body
  fill('#41586E');
  triangle(369,413,355,440,325,440);
  
  fill('#485F73');
  quad(325,440,355,440,325,480,313,465);
  
  fill('#929FA7');
  triangle(313,465,295,502,325,480);
  
  fill('#0F161D');
  triangle(325,440,305,443,313,465);
  
  fill('#192127');
  triangle(305,443,313,465,295,502);
  
  fill('#8C9AA5');
  triangle(250,378,269,418,238,419);
  
  fill('#A6B1B6');
  triangle(238,419,258,418,234,440);
  
  fill('#B5C0C2');
  triangle(258,418,234,440,240,470);

  fill('#E0E7EF');
  triangle(234,440,240,470,232,467);
  
  fill('#A6B1B6');
  triangle(240,470,238,495,232,467);
  
  fill('#192127');
  triangle(258,418,238,495,240,470);
  
  fill('#F1E9C6');
  triangle(283,447,269,418,258,418);
  
  fill('#F1F2CB');
  triangle(283,447,238,495,258,418);
  
  fill('255');
  triangle(283,447,238,495,295,502);
  
  fill('#F1F2CB');
  triangle(295,502,283,447,305,443);
  
  fill('#121C1D');
  triangle(238,495,277,541,295,502);
  
  fill('#1B2228');
  triangle(238,495,277,541,226,550);
  
  fill('#283C4B');
  triangle(235,580,277,541,226,550);
  
  fill('#526B81');
  triangle(235,580,277,541,290,570);
  
  fill('#466174');
  triangle(295,502,277,541,290,570);
  
  
//eye  
  stroke('white');
  strokeWeight(3);
  fill(0);
  ellipse(334,240,15,15);

}