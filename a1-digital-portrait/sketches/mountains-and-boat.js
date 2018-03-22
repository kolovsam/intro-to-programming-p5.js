function setup() { 
  createCanvas(500, 725);
  background('#F1F0EA');
  noStroke();
  // moon
  color('white');
  ellipse(250, 100, 80, 80);
  // mountains, back
  fill('#CCD8D9');
  triangle(-100, 375, 70, 50, 300, 375);
  triangle(200, 375, 425, 140, 900, 375);
  fill('#B8CBCD');
  triangle(-200, 475, 270, 180, 1000, 475);
  fill('#94AEB2');
  triangle(-200, 525, 20, 280, 300, 525);
  fill('#6E9091');
  triangle(100, 525, 320, 320, 600, 525);
  fill('#416C6C');
  triangle(-200, 525, 0, 450, 400, 525);
  // water
  fill('#CEE4EA');
  rect(0, 525, 500, 400);
  // reflection on water
  fill('#B2CCD3'); 
  triangle(-200, 525, 0, 600, 400, 525);
  // boat, fisherman
  fill('#2A3A3A'); 
  quad(130, 630, 180, 630, 170, 635, 140, 635); 
  fill('#AE8676');
  ellipse(160, 616, 6, 6);
  ellipse(160, 618, 3, 3);
  rect(158, 619, 4, 11);
  fill('#2A3A3A');
  rect(158, 624, 4, 11);
  triangle(154, 613, 162, 609, 166, 616);
  stroke('#2A3A3A');
  line(152, 618, 167, 631);
  stroke('white');
  line(172, 634, 215, 634);
  line(195, 637, 225, 637);
  // hills, front
  noStroke();
  fill('#2A3A3A'); 
  triangle(200, 725, 500, 650, 800, 725);
  fill('#B2CCD3'); 
  triangle(200, 725, 500, 800, 800, 725);
  
} 

function draw() { 
}