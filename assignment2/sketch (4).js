/* 
14th October 2017
Hi, 
Below is my code for Assignment 2 
"Varaibles & Data: Create a Short Animation" for the course 598A.
The animation is of Matilda's Family from one of my childhood favorite novels of 
Roald Dahl. I have added the image used for inspiration in the zip folder.
-Kartika Rathee
*/
var matX = 0; //Matilda's initial x-coordinate 
var matY = 20; //Matilda's initial y-coordinate

var broX = 50; //Brother's initial x-coordinate
var broY = 450; //Brother's initial y-coordinate

var dadX = 500; //Dad's initial x-coordinate
var dadY = 50; //Dad's initial y-coordinate

var momX = 500; //Mom's initial x-coordinate
var momY = 450; //Mom's initial y-coordinate

function setup() {
  createCanvas(600, 600); //sets the canvas to 600x600 pixels
  background('#57646C'); //sets background for the lego portrait
  frameRate(48); // sets the speed of characters moving towards centre
}

function draw() {
  background('#57646C'); //redraws background each time to avoid leaving trails

  //MATILDA
  fill('#625950'); // Matilda's hair are colored  
  rect(matX, matY, 35, 10); // Draws Matilda's hair 
  fill('#f2c1ae'); // Matilda's face is colored 
  rect(matX, matY + 10, 35, 20); // Draws Matilda's face
  fill('#777FBF'); //Matilda's T-shirt is colored
  rect(matX, matY + 30, 35, 30); //Draws Matilda's T-shirt
  fill('#3B6595'); //  Matilda's shorts are colored
  rect(matX, matY + 50, 35, 20); // Draws Matilda's shorts 
  fill('#f2c1ae'); //  Matilda's legs are colored
  rect(matX, matY + 70, 35, 10); // Draws Matilda's legs
  
  matX = matX + 2; //Moves Matlida along x-axis
  matX = min(matX + 1, 100) // Stop condition for moving along x-axis
  matY = matY + 1; //Moves Matlida along y-axis
  matY = min(matY + 1, 240); //Stop condition for moving along y-axis

  //BROTHER
  fill('#AE8C7A'); // Brother's cap is colored  
  rect(broX, broY, 45, 10); // Draws Brother's hair 
  fill('#f2c1ae'); //  Brother's face is colored
  rect(broX, broY + 10, 45, 20); // Draws Brother's face
  fill('#40283B'); //Brother's t-shirt is colored
  rect(broX, broY + 30, 45, 30); //Draws Brother's t-shirt
  fill('#202928'); // Brother's shorts are colored
  rect(broX, broY + 50, 45, 40); // Draws Brother's shorts
  fill('#f2c1ae'); //  //Brother's legs are colored
  rect(broX, broY + 80, 45, 20); // Draw Brother's legs
  
  broX = broX + 1; //Moves Brother along x-axis
  broX = min(broX + 1, 200); //Stop condition for moving along x-axis
  broY = broY - 1; //Moves Brother along y-axis
  broY = max(broY - 1, 220); //Stop condition for moving along y-axis

  //DAD
  fill('#625950'); // Dad's hat is colored   
  rect(dadX, dadY, 60, 10); // Draws Dad's hair  
  fill('#f2c1ae'); // Dad's face is colored  
  rect(dadX, dadY + 10, 60, 30); // Draws Dad's face
  fill('#B58952'); //Dad's shirt is colored
  rect(dadX, dadY + 40, 60, 30); //Draws Dad's shirt
  fill('#6D1616'); //Dad's tie is colored
  rect(dadX + 20, dadY + 40, 20, 30); //Draws Dad's tie
  fill('#6A665A'); // Dad's coat is colored
  rect(dadX, dadY + 60, 60, 40); // Draws Dad's coat
  fill('black'); // Dad's pants are colored
  rect(dadX, dadY + 80, 60, 30); // Draws Dad's pants
  
  dadX = dadX - 1; //Moves Dad along x-axis
  dadX = max(dadX - 1, 300); //Stop condition for moving along x-axis
  dadY = dadY + 1; //Moves Dad along y-axis
  dadY = min(dadY + 1, 210); //Stop condition for moving along y-axis

  //MOM
  fill('#FBCC91'); // Mom's hair are colored 
  rect(momX, momY, 40, 10); // Draws Mom's hair 
  fill('#f2c1ae'); // Mom's face is colored
  rect(momX, momY + 10, 40, 20); //Draws Mom's face
  fill('#9E0000'); //Mom's Top is colored
  rect(momX, momY + 30, 40, 30); //Draws Mom's Top
  fill('#7C4073'); // Mom's skirt is colored 
  rect(momX, momY + 50, 40, 40); //Draws Mom's skirt 
  fill('#f2c1ae'); //  Mom's legs are colored
  rect(momX, momY + 80, 40, 40); // Draws Mom's legs
  
  momX = momX - 1; //Moves Mom along x-axis
  momX = max(momX - 1, 410); //Stop condition for moving along x-axis
  momY = momY - 1; //Moves Mom along y-axis
  momY = max(momY - 1, 200); //Stop condition for moving along y-axis
}