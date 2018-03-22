/* chess board
Jen Lavallee, 11/12/2017
*/

const canvasWh = 500;
const numSq = 8
const sqWidth = canvasWh / numSq;
const light = 'white'
const dark = 'gray'

function setup() {
  createCanvas(canvasWh, canvasWh);
  noStroke()

  for (i = 0; i < numSq; i++) {
    var iEven = i % 2 == 0;
    var xPos = i * sqWidth;
    for (j = 0; j < numSq; j++) {
      var jEven = j % 2 == 0;
      var yPos = j * sqWidth;
      if (iEven && jEven) {
        fill(light);
      } else if (!iEven && !jEven) {
        fill(light);
      } else {
        fill(dark);
      }
      rect(xPos, yPos, sqWidth, sqWidth);
    }
  }

}