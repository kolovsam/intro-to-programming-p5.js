function setup() {
    createCanvas(600, 600);
    background("black");
}
//top left character variables.
var color_A_1 = "yellow";
var color_A_2 = "white";
var A_length1 = 100;
var A_length2 = 20;

var A_x = A_length1 / 2;
var A_y = A_length1 / 2;

var A_1_x = A_length1 / 4;
var A_1_y = A_length1 / 4;

var A_2_x = A_length1 - A_length1 / 4;
var A_2_y = A_length1 / 4;

var A_3_x = A_length1 / 2;
var A_3_y = A_length1 / 2;

//bottom left character variables.
var color_B_1 = "red";
var color_B_2 = "black";
var B_length1 = 100;
var B_length2 = 20;

var B_x = B_length1 / 2;
var B_y = 600 - B_length1 / 2;

var B_1_x = B_length1 / 4;
var B_1_y = 600 - 3 * B_length1 / 4;
var B_2_x = B_length1 - B_length1 / 4;
var B_2_y = 600 - 3 * B_length1 / 4;
var B_3_x = B_length1 / 2;
var B_3_y = 600 - B_length1 / 2;

//top right character variables.
var color_C_1 = "grey";
var color_C_2 = "orange";
var C_length1 = 100;
var C_length2 = 20;

var C_x = 600 - C_length1 / 2;
var C_y = C_length1 / 2;

var C_1_x = 600 - 3 * C_length1 / 4;
var C_1_y = C_length1 / 4;
var C_2_x = 600 - C_length1 / 4;
var C_2_y = C_length1 / 4;
var C_3_x = 600 - C_length1 / 2;
var C_3_y = C_length1 / 2;

//bottom right character variables.
var color_D_1 = "green";
var color_D_2 = "white";
var D_length1 = 100;
var D_length2 = 20;

var D_x = 600 - D_length1 / 2;
var D_y = 600 - D_length1 / 2;

var D_1_x = 600 - 3 * D_length1 / 4;
var D_1_y = 600 - 3 * D_length1 / 4;
var D_2_x = 600 - D_length1 / 4;
var D_2_y = 600 - 3 * D_length1 / 4;
var D_3_x = 600 - D_length1 / 2;
var D_3_y = 600 - D_length1 / 2;

function draw() {
    background("black");
    //1. create a face image on top left
    noStroke();
    fill(color_A_1);
    ellipse(A_x, A_y, A_length1);


    fill(color_A_2);
    ellipse(A_1_x, A_2_y, A_length2);
    ellipse(A_2_x, A_2_y, A_length2);
    ellipse(A_3_x, A_3_y, 2 * A_length2);

    //2. create a face image on bottom left
    noStroke();
    fill(color_B_1);
    ellipse(B_x, B_y, B_length1);

    fill(color_B_2);
    ellipse(B_1_x, B_1_y, B_length2);
    ellipse(B_2_x, B_2_y, B_length2);
    ellipse(B_3_x, B_3_y, 2 * B_length2);

    //3. create a face image on top right
    fill(color_C_1);
    ellipse(C_x, C_y, C_length1);


    fill(color_C_2);
    ellipse(C_1_x, C_1_y, C_length2);
    ellipse(C_2_x, C_2_y, C_length2);
    ellipse(C_3_x, C_3_y, 2 * C_length2);

    //4. create a face image on bottom right
    fill(color_D_1);
    ellipse(D_x, D_y, D_length1);



    fill(color_D_2);
    ellipse(D_1_x, D_1_y, D_length2);
    ellipse(D_2_x, D_2_y, D_length2);
    ellipse(D_3_x, D_3_y, 2 * D_length2);


    //movement of top left character.
    if (A_x < 150) {
        A_x++;
        A_y++;
        A_1_x++;
        A_1_y++;
        A_2_x++;
        A_2_y++;
        A_3_x++;
        A_3_y++;
    } else {
        if (A_y < 300) {
            A_y++;
            A_1_y++;
            A_2_y++;
            A_3_y++;
        }
    }
    //movement of bottom left character.
    if (B_x < 250) {
        B_x++;
        B_y--;
        B_1_x++;
        B_1_y--;
        B_2_x++;
        B_2_y--;
        B_3_x++;


        B_3_y--;
    } else {
        if (B_y > 300) {
            B_y--;
            B_1_y--;
            B_2_y--;
            B_3_y--;
        }
    }
    //movement of top right character.
    if (C_x > 350) {
        C_x--;
        C_y++;
        C_1_x--;
        C_2_x--;
        C_3_x--;
        C_1_y++;
        C_2_y++;
        C_3_y++;
    } else {
        if (C_y < 300) {
            C_y++;
            C_1_y++;
            C_2_y++;
            C_3_y++;
        }
    }

    //movement of bottom right character.
    if (D_x > 450) {
        D_x--;
        D_y--;
        D_1_x--;
        D_1_y--;
        D_2_x--;
        D_2_y--;
        D_3_x--;
        D_3_y--;

    } else {
        if (D_y > 300) {
            D_y--;
            D_1_y--;
            D_2_y--;
            D_3_y--;
        }
    }
}