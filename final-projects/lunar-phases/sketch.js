//HCDE 598 Final Project
//Yaonan Huang, 12/2017
//My final project is an interactive model of lunar phase
//Do mouse click anywhere on the canvas every time and the moon will run 
//and show the phase name at each stage. 

//constants that will be used in this program
const SPACE_BACKGROUND = "#002857";
const SUN_COLOR = "#FFD71B";
const MOON_DIAGRAM_BACKGROUND = "#003471";
const MOON_ORBIT = "#979797";
const STAR_COLOR = "#D8D8D8";

//variables that will be used in this program
var earthCenterX = 500;
var earthCenterY = 250
var radius = 166;
var speed = 0.005;
var theta = 0;

var phase = 0;

var mouseClickedAtX;
var mouseClickedAtY;


function preload(){
  //loading images that are used in this program
  earth = loadImage("assets/earth.png");
  moon = loadImage("assets/moon.png");
  newMoon = loadImage("assets/new_moon.png");
  waxingCrescent = loadImage("assets/waxing_crescent.png");
  firstQuarter = loadImage("assets/first_quarter.png");
  waxingGibbous = loadImage("assets/waxing_gibbous.png");
  fullMoon = loadImage("assets/full_moon.png");
  waningGibbous = loadImage("assets/waning_gibbous.png");
  lastQuarter = loadImage("assets/last_quarter.png");
  waningCrescent = loadImage("assets/waning_crescent.png"); 
  }


function setup() { 
  createCanvas(1000, 500);

} 

function draw(){
  background(SPACE_BACKGROUND);
  
  //Sun
  fill (SUN_COLOR);
  ellipse (1150, 250, 435, 435);
  
  //Star
  starBackground(49, 242);
  starBackground(128, 62);
  starBackground(209, 120);
  starBackground(333, 463);
  starBackground(368, 447);
  starBackground(707, 381);
  starBackground(783, 29);
  starBackground(868, 445);
  
  
  //Earth
  imageMode (CENTER);
  image (earth, earthCenterX, earthCenterY, earth.width/2, earth.height/2);
  
  
  //Orbit
  noFill();
  stroke(MOON_ORBIT);
  strokeWeight(2);
  ellipse (500, 250, 332, 332);
  
   
   //Starting with this
   moonPhase (newMoon, "New Moon"); 


  if ( phase === 0 ) {
    
    imageMode(CENTER);
    image(moon,666, 250, 60 ,60);
    phaseNum();
    
  
  }else{
      
    imageMode(CENTER);
    image(moon,runningMoonCenterX, runningMoonCenterY, 60 ,60);
    
    
  //at different phases  
  } if (phase == 1) {
    
        moonRun( 0.01, -(1/4), newMoon, "New Moon", waxingCrescent, "Waxing Crescent" );
        //see function moonRun(piNum1, piNum2, moonImg1, phaseName1, moonImg2, phaseName2). 
        //setting piNum1=0.01, which is slightly larger than 0, so that the code will to run as var theta = 0.        
        phaseNum(); 

    
    
  			}else if ( phase == 2) {
      
        moonRun(-(1/4), -(2/4), waxingCrescent, "Waxing Crescent", firstQuarter, "First Quarter" );
        phaseNum();
    
        }else if ( phase == 3) {
      
        moonRun(-(2/4), -(3/4), firstQuarter, "First Quarter", waxingGibbous, "Waxing Gibbous");
        phaseNum();  
  
      
  			}else if ( phase == 4) {
      
        moonRun(-(3/4), -(4/4), waxingGibbous, "Waxing Gibbous", fullMoon, "Full Moon");
        phaseNum();
    
          
  			}else if ( phase == 5) {
      
        moonRun(-(4/4), -(5/4), fullMoon, "Full Moon", waningGibbous, "Waning Gibbous");
        phaseNum();
          
  			}else if ( phase == 6) {
      
        moonRun(-(5/4), -(6/4), waningGibbous, "Waning Gibbous", lastQuarter, "Last Quarter");
        phaseNum();
          
  			}else if ( phase == 7) {
      
        moonRun(-(6/4), -(7/4), lastQuarter, "Last Quarter", waningCrescent, "Waning Crescent");
        phaseNum();
  
  			}else if ( phase == 8) {
      
        moonRun(-(7/4), -(8/4), waningCrescent, "Waning Crescent", newMoon, "New Moon");
        phaseNum();
        
     
        
  			}else if ( phase == 9) {
      
        moonRun(-(8/4), 0, waningCrescent, "Waning Crescent", newMoon, "New Moon");
        phase = 1;

      }
  
}



//x and y for the running moon
function moonCoordinate (){
  runningMoonCenterX = earthCenterX + cos( theta -= speed) * radius;
  runningMoonCenterY = earthCenterY + sin( theta -= speed) * radius;
  imageMode(CENTER);
  image(moon,runningMoonCenterX, runningMoonCenterY, 60 ,60);
  
} 


//mouseClicked function
function mouseClicked() {
    mouseClickedAtX = mouseX;
    mouseClickedAtY = mouseY;  
  }




//template for different phase including the name and image of the moon. 
//Showing the next phase name and image at the end when the moon stops running at the current phase.
function moonRun(piNum1, piNum2, moonImg1, phaseName1, moonImg2, phaseName2){

      if ( (theta < piNum1 * PI ) && ( theta > piNum2 * PI ) ){
        moonCoordinate();
        moonPhase (moonImg1, phaseName1);
  		}
    
      else if ( (theta = piNum2 * PI )) {
        moonCoordinate();
        moonPhase (moonImg2, phaseName2);
      }
      
}

//template for phase, afer every click, it will go to the next phase
function phaseNum(){

      	if (( mouseClickedAtX > 0) && 
            ( mouseClickedAtX < width ) && 
            ( mouseClickedAtY > 0) && 
            ( mouseClickedAtY < height )){

          phase = phase + 1;
      }  
          mouseClickedAtX = 0;
          mouseClickedAtY = 0;
}  

//drawing stars on the background
function starBackground(x, y){
  fill (STAR_COLOR);
  noStroke();
  ellipse (x, y, 8, 8);
}



// template for moon phase diagram at the lower right corner
function moonPhase (moonImg, phaseName){
  noStroke();
  fill (MOON_DIAGRAM_BACKGROUND);
  rect (0, 271, 210, 230);
  imageMode (CENTER);
  image (moonImg, 105, 369, moonImg.width/2, moonImg.height/2);
  fill ("white");
  textSize (18);
  textAlign (CENTER);
  text ( phaseName, 105, 470);
}