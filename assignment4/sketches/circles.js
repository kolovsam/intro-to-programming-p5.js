function setup() {
    createCanvas(800, 800);
    background("green");
    //drawCircle(400, 400, 100);
}


function drawCircle(x, y, size) {

    stroke("white");
    strokeWeight(6);
    noFill();
    ellipse(x, y, size);
    ellipse(x + size, y, size);
    ellipse(x - size, y, size);
    ellipse(x + size / 2, y + size / 2, size);
    ellipse(x - size / 2, y + size / 2, size);
    line(x - size, y + size, x + size, y + size);
}

function mouseClicked() {
    var size = random(20, width / 10);
    drawCircle(mouseX, mouseY, size);
}