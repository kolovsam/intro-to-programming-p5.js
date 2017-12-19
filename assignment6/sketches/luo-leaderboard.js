/* leader board
Roy Luo, 11/2017

program to display and manipulate a "leader board" of scores, using arrays.
a solution to HCDE 598 "Intro to Programming" assignment 6

*/


function setup() {
    createCanvas(400, 600);
    background(220);
    generateArr(arr);
    drawRect(low, high, displayArr);
}


//set up global variables
const arr = [55, 20, 100, 5, 67, 23, 83, 56, 0, 3, 48, 50, 33, 10, 0];
const xOrigin = 200;
const yOrigin = 100;
const rectWidth = 100;
const rectHeight = 30;
const rectColor = 'yellow';
const rectStroke = 'black';
const topicColor = 'black';
const topicText = 'Display';
const topicSize = 10;
const minColor = 'red';
const maxColor = 'pink';
var low;
var high;
var avg;
var finalAvg;
var displayArr = [];

//draw label on the top
function drawLabel() {
    fill(topicColor);
    noStroke();
    textSize(topicSize);
    textAlign(CENTER);
    text(topicText, xOrigin, yOrigin - rectHeight);
}

//generate random array
function generateArr(arr) {
    for (i = 0; i < arr.length; i++) {
        displayArr[i] = round(random(0, 100));
    }
}

//create function to draw leader board
function drawRect(low, high, arr) {
    drawLabel();
    var low = findLow(displayArr);
    var high = findHigh(displayArr);


    for (i = 0; i < arr.length; i++) {
        /*create if statement to change default color to customized color
        for minvalue and maxvalue*/
        if (i == high) {
            fill(maxColor);
        } else if (i == low) {
            fill(minColor);
        } else {
            fill(rectColor);
        }

        stroke(rectStroke);
        rectMode(CENTER);
        rect(xOrigin, yOrigin + i * rectHeight, rectWidth, rectHeight);
        fill(topicColor);
        textAlign(CENTER);
        text(arr[i], xOrigin, yOrigin + i * rectHeight);
        //create index on the left side
        text(i, xOrigin - rectWidth, yOrigin + i * rectHeight);
    }

    //create the index of 'AVG' and display the average value on the bottom.
    text('AVG', xOrigin - rectWidth, yOrigin + (arr.length) * rectHeight);
    var finalAvg = round(average(arr));
    text(finalAvg, xOrigin, yOrigin + (arr.length) * rectHeight);
}

//calculate the average value of the array
function average(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

//get the lowest value of the array
function findLow(arr) {
    var minValue = arr[0];
    var minIndex = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }
    print(minIndex);
    print(minValue);
    return minIndex;
}

//get the highest value of the array
function findHigh(arr) {
    var maxValue = arr[0];
    var maxIndex = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    print(maxIndex);
    print(maxValue);
    return maxIndex;
    // fill(maxColor);
    // rect(xOrigin, yOrigin + i * rectHeight, rectWidth, rectHeight);

}

//everytime you press the key, new random array will be generated
function keyPressed() {
    setup();
}

//everytime you click the mouse, new randow array will be generated
function mouseClicked() {
    setup();
}