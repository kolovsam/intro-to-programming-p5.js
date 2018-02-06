// Canvas Size
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

// Global size variables (can be set to any multiple of 20)
var baseSize = 80;

// Global color variables
var darkPurple = 'rgba(74, 20, 140, 1)';
var letterColorPrefix = 'rgba(0, 0, 0,';
var colorEnd = ')';
var baseAlpha = 0;
var alphaIncrement = 0.01;

// Increment Speed (can be set to any multiple of 5)
var baseIncrement = 5;

// Starting coordinates for the letters

var hX = 0 - baseSize;
var hY = 0 - baseSize;

var cX = 0 - baseSize;
var cY = CANVAS_HEIGHT + baseSize;

var dX = CANVAS_WIDTH + baseSize;
var dY = 0 - baseSize;

var eX = CANVAS_WIDTH + baseSize
var eY = CANVAS_HEIGHT + baseSize

function setup() { 
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	strokeWeight(0);
} 

function draw() {
	
	// Set the canvas color;
  background(0);
	
  // Aminate the H
  
  if (hX < ( 3 * (CANVAS_WIDTH / 12) - (baseSize / 2))) {
    hX = hX + baseIncrement;
  } else {
    hX = hX;
  }
  
  if (hY < ((CANVAS_HEIGHT / 2) - (baseSize / 2))) {
    hY = hY + baseIncrement;
  } else {
    hY = hY;
  }
  
  // Aminate the C
  
  if (cX < ( 5 * (CANVAS_WIDTH / 12) - (baseSize / 2))) {
    cX = cX + baseIncrement;
  } else {
    cX = cX;
  }
  
  if (cY > ((CANVAS_HEIGHT / 2) - (baseSize / 2))) {
    cY = cY - baseIncrement;
  } else {
    cY = cY;
  }
  
  // Aminate the D
  
  if (dX > ( 7 * (CANVAS_WIDTH / 12) - (baseSize / 2))) {
    dX = dX - baseIncrement;
  } else {
    dX = dX;
  }
  
  if (dY < ((CANVAS_HEIGHT / 2) - (baseSize / 2))) {
    dY = dY + baseIncrement;
  } else {
    dY = dY;
  }
  
  // Aminate the E
  
  if (eX > ( 9 * (CANVAS_WIDTH / 12) - (baseSize / 2))) {
    eX = eX - baseIncrement;
  } else {
    eX = eX;
  }
  
  if (eY > ((CANVAS_HEIGHT / 2) - (baseSize / 2))) {
    eY = eY - baseIncrement;
  } else {
    eY = eY;
  }
  
  // Once the last shape has finished moving, fade in the letters
  // Note: the letters do all fade in the alphas at different speeds
  // to fulfill the different fills requirement.
  
  if (dX > ( 7 * (CANVAS_WIDTH / 12) - (baseSize / 2))) {
    letterColorPrefix = 'rgba(0, 0, 0,';
  } else {
    letterColorPrefix = 'rgba(255, 255, 255,';
    if (baseAlpha - 1) {
      baseAlpha = baseAlpha + alphaIncrement;
    } else {
      baseAlpha = baseAlpha;
    }
  }
  
  
  // The Shapes
  
	// Abstract H
	fill(letterColorPrefix + (baseAlpha * 0.6) + colorEnd);
	rect(hX, hY, baseSize, baseSize);
	fill(darkPurple);
	rect(hX + (baseSize * 0.4), hY, baseSize * 0.4, baseSize * 0.4);
	rect(hX + (baseSize * 0.4), hY + (baseSize * 0.6), baseSize * 0.4, baseSize * 0.4);
	
	// Abstract C
	fill(letterColorPrefix + (baseAlpha * 0.7) + colorEnd);
	rect(cX, cY, baseSize, baseSize);
	fill(darkPurple);
	rect(cX + (baseSize * 0.4), cY + (baseSize * 0.2), baseSize * 0.6, baseSize * 0.6);

	// Abstract D
	fill(letterColorPrefix + (baseAlpha * 0.8) + colorEnd);
	rect(dX, dY, baseSize, baseSize);
	fill(darkPurple);
	rect(dX + (baseSize * 0.4), dY + (baseSize * 0.2), baseSize * 0.4, baseSize * 0.6);
	
	// Abstract E
	fill(letterColorPrefix + (baseAlpha * 0.9) + colorEnd);
	rect(eX, eY, baseSize, baseSize);
	fill(darkPurple);
	rect(eX + (baseSize * 0.4), eY + (baseSize * 0.2), baseSize * 0.6, baseSize * 0.2);
	rect(eX + (baseSize * 0.4), eY + (baseSize * 0.6), baseSize * 0.6, baseSize * 0.2);
	
}