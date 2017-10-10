function setup() {
    createCanvas(600, 400);
    strokeWeight(2.5);
}

function draw() {
    background(220);
    //create two wheels
    fill("yellow");//larger circle
    ellipse(170, 300, 110);
    ellipse(420, 300, 110);
    fill("black");//smaller circle
    ellipse(170, 300, 100);
    ellipse(420, 300, 100);
    fill("yellow");//center point of wheels
    ellipse(170, 300, 10);
    ellipse(420, 300, 10);
    //create the pedal
    fill("yellow");
    stroke("white");
    ellipse(250, 300, 40);

    //create connections
    line(200, 200, 250, 300);
    line(170, 300, 250, 300);
    line(170, 300, 230, 260);
    line(250, 300, 350, 200);
    line(350, 200, 420, 300);
    line(215, 230, 320, 230);

    //create a seat
    fill("black");
    rect(170, 200, 80, 20);

    //create the "head" of the bycicle
    triangle(350, 200, 382, 170, 320, 170);






}