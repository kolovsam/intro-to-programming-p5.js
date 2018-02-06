/*
David Molinero
Title: House Customizer
Assignment Three

Found some handy new techniques from the reference and this video
// https://www.youtube.com/watch?v=DEHsr4XicN8
*/

// UI state variables
var type;
var primaryColor;
var trimColor;

// Color variables
var cPink = '#e040fb';
var cPurple = '#662d91';
var cBlue = '#2e3192';
var cTeal ='#00aeef';
var defaultButton = '#73b9ea';

function setup() {
  createCanvas(600, 400);
  textSize(16);
  noStroke();
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {

  // Draw the background
  background('#004ba0');
  fill('#1976d2');
  rect(width/2, height * 0.32, width, height * 0.655);
  
  // Empty list of buttons on each draw
  buttons = [];

  // If all the options are set, draw the house
  if (type && primaryColor && trimColor) {

    renderHouse(type, primaryColor, trimColor);
    buttons.push(new Button(500, 330, 'reset', 'RESET', defaultButton));

  } else {

    // Show options based on what's already been selected
    if (!type) {
      showPrompt('Welcome to the house customizer!', 100, 32);
      showPrompt('Please choose a type.', 150, 32);
      buttons.push(new Button(100, 330, 'type', 'OLD', defaultButton));
      buttons.push(new Button(500, 330, 'type', 'NEW', defaultButton));
    } else if (type && !primaryColor) {
      showPrompt('Great!', 100, 32);
      showPrompt('Now choose the main color.', 150, 32);
      buttons.push(new Button(100, 330, 'primary', 'PURPLE', cPurple));
      buttons.push(new Button(500, 330, 'primary', 'BLUE', cBlue));
    } else if (type && primaryColor && !trimColor) {
      showPrompt('For the last step,', 100, 32);
      showPrompt('choose the trim color.', 150, 32);
      buttons.push(new Button(100, 330, 'trim', 'PINK', cPink));
      buttons.push(new Button(500, 330, 'trim', 'TEAL', cTeal));
    } else {
      buttons.push(new Button(500, 330, 'reset', 'RESET', defaultButton));
    }
    
    console.log(trimColor);

  }

  // Render any buttons we have made
  for (i = 0; i < buttons.length; i++) {
    buttons[i].render();
  }

}

// This is a function that creates an button
// with it's own functions inside it
function Button(x, y, selection, label, fillColor) {
	
  this.x = x;
  this.y = y;
  this.selection = selection;
  this.label = label;

  // Draw the button
  this.render = function() {
    fill(fillColor);
    ellipse(this.x, this.y, 100, 100);
    fill('#fff');
    text(this.label, this.x, this.y);
  }

  // Check if the button was clicked
  this.wasClicked = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < 50) {
      setOptions(this.selection, this.label);
    }
  }

}

// Show prompt on the screen
function showPrompt(prompt, y, size) {
  textSize(size);
  fill('#fff');
  text(prompt, width/2, y);
  textSize(16);
}

// Run this code whenever the canvas is clicked
function mouseClicked() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].wasClicked();
  }
}

// This will set whatever option gets passed to it
function setOptions(selection, label) {

  if (selection == 'type') {
    type = label;
  } else if (selection == 'primary') {
    if (label == 'PURPLE') {
      primaryColor = cPurple;
    } else {
      primaryColor = cBlue;
    }
  } else if (selection == 'trim') {
    if (label == 'TEAL') {
      trimColor = cTeal;
    } else {
      trimColor = cPink;
    }
  } else if (selection == 'reset') {
    reset();
  }

}

// Renders the house with selected options
function renderHouse() {
  
  showPrompt("Here's the house you picked.", 60, 32);
  
  if (type == 'NEW') {
    
    fill('#f9ed32');
    ellipse(300, 285, 200, 36);
    fill(primaryColor);
    rect(300, 205, 160, 160);
    fill(trimColor);
    rect(300, 120, 160,10);
    rect(298, 260, 30,50);
    fill('#f9ed32');
    rect(250, 235, 20,30);
    rect(250, 175, 20,30);
    rect(350, 175, 20,30);
    rect(350, 235, 20,30);
    
  } else if (type == 'OLD') {
    
    fill('#f9ed32');
    ellipse(300, 300, 200, 36);
    fill(primaryColor);
    rect(300, 250, 160, 100);
    triangle(200, 200, 300, 100, 400, 200);
    fill(trimColor);
    rect(300, 205, 160,10);
    rect(298, 275, 30,50);
    fill('#f9ed32');
    rect(250, 250, 20,30);
    rect(350, 250, 20,30);
    
  } else {
    // Show prompt
  }
  
}


// This will reset all the options
function reset() {
  type = false;
  primaryColor = false;
  trimColor = false;
}


