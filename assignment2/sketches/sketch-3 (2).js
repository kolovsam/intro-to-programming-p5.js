//Anthony Ugas

var foxX = 50;
var foxY = 40;

var owlX = 50;
var owlY = 425;

var monkeyX = 450;
var monkeyY = 425;

var birdX = 450;
var birdY = 65;

function setup() {
    noStroke();
    createCanvas(600, 500);
    background('#4e7f3e');
}

function draw() {
    background('#4e7f3e');

    fox();
    owl();
    monkey();
    bird();

    //sets speed and direction for animals

    foxX = foxX + 1
    foxY = foxY + 1
    foxX = min(foxX + 1, 100)
    foxY = min(foxY + 1, 217)

    owlX = owlX + 1
    owlY = owlY - 1
    owlX = min(owlX + 1, 200)
    owlY = max(owlY - 1, 250)

    monkeyX = monkeyX - 1
    monkeyY = monkeyY - 1
    monkeyX = max(monkeyX - 1, 300)
    monkeyY = max(monkeyY - 1, 250)

    birdX = birdX - 1
    birdY = birdY + 1
    birdX = max(birdX - 1, 400)
    birdY = min(birdY + 1, 250)

}


function fox() {

    //fox head
    fill('#dd5516');
    rect(foxX, foxY, 60, 25);
    rect(foxX + 25, foxY + 25, 10, 30);

    //nose
    fill('black');
    rect(foxX + 25, foxY + 50, 10, 10);

    //white fur
    fill('white');
    triangle(foxX, foxY + 25, foxX + 25, foxY + 25, foxX + 25, foxY + 60);
    triangle(foxX + 60, foxY + 25, foxX + 35, foxY + 25, foxX + 35, foxY + 60);

    //ears
    fill('#dd5516');
    triangle(foxX, foxY - 20, foxX + 25, foxY, foxX, foxY);
    fill('#dd5516');
    triangle(foxX + 60, foxY - 20, foxX + 35, foxY, foxX + 60, foxY);

    fill('#ff8649');
    triangle(foxX + 3, foxY - 14, foxX + 20, foxY, foxX + 3, foxY);
    fill('#ff8649');
    triangle(foxX + 57, foxY - 14, foxX + 40, foxY, foxX + 57, foxY);


    //eyes
    fill('black');
    ellipse(foxX + 12.5, foxY + 25, 10, 10);
    ellipse(foxX + 47.5, foxY + 25, 10, 10);

}

function owl() {

    //body
    fill('#a85a12');
    ellipse(owlX + 30, owlY, 65, 65);

    //stomach  
    fill('#e2bc88');
    ellipse(owlX + 30, owlY + 10, 40, 40);

    //ears
    fill('#a85a12');
    triangle(owlX + 60, owlY - 50, owlX + 30, owlY, owlX + 60, owlY);
    triangle(owlX, owlY - 50, owlX, owlY, owlX + 30, owlY)

    //eyes
    fill('white');
    ellipse(owlX + 20, owlY - 10, 20, 20);
    ellipse(owlX + 40, owlY - 10, 20, 20);
    fill('black');
    ellipse(owlX + 20, owlY - 10, 15, 15);
    ellipse(owlX + 40, owlY - 10, 15, 15);

    //beak 
    fill('orange');
    triangle(owlX + 25, owlY, owlX + 35, owlY, owlX + 30, owlY + 10);

}

function monkey() {

    //left ear
    fill('brown');
    ellipse(monkeyX, monkeyY, 40, 40);
    fill('#f2a7bb');
    ellipse(monkeyX, monkeyY, 35, 35);

    //right ear
    fill('brown');
    ellipse(monkeyX + 60, monkeyY, 40, 40)
    fill('#f2a7bb');
    ellipse(monkeyX + 60, monkeyY, 35, 35);

    //head
    fill('brown');
    ellipse(monkeyX + 30, monkeyY, 65, 65);

    //eyes
    fill('white');
    ellipse(monkeyX + 15, monkeyY - 10, 20, 20);
    ellipse(monkeyX + 45, monkeyY - 10, 20, 20);
    fill('black');
    ellipse(monkeyX + 18, monkeyY - 10, 15, 15);
    ellipse(monkeyX + 43, monkeyY - 10, 15, 15);

    //mouth
    fill('black');
    ellipse(monkeyX + 30, monkeyY + 20, 12, 12);

}

function bird() {
    //head
    fill('#1075d3');
    ellipse(birdX + 30, birdY, 65, 65);
    fill('#88b7e2');
    ellipse(birdX + 30, birdY + 10, 40, 40);


    //eyes
    fill('white');
    ellipse(birdX + 20, birdY - 10, 20, 20);
    ellipse(birdX + 40, birdY - 10, 20, 20);
    fill('black');
    ellipse(birdX + 20, birdY - 10, 15, 15);
    ellipse(birdX + 40, birdY - 10, 15, 15);

    //beak 
    fill('orange');
    triangle(birdX + 25, birdY, birdX + 35, birdY, birdX + 30, birdY + 10);

}