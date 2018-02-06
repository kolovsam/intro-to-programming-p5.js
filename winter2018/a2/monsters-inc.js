 /* 
     A2 - Simple Animation (Monsters, Inc.)
     Jenna James
     1/28/18
  */

 var booX = 16
 var booY = 50

 var mikeX = 550
 var mikeY = 70

 var scullyX = 70
 var scullyY = 530

 var doorX = 520
 var doorY = 480


 function setup() {
   noStroke();
   createCanvas(600, 600);
 }

 function draw() {
   background('lavender');


   // Movement of the characters.
   //

   if (booX > 100) {
     booX = 100;
   } else {
     booX = booX + 1;
   }

   if (booY > 280) {
     booY = 280;
   } else {
     booY = booY + 1;
   }


   if (mikeX < 347) {
     mikeX = 347;
   } else {
     mikeX = mikeX - 1;
   }

   if (mikeY > 303) {
     mikeY = 303;
   } else {
     mikeY = mikeY + 1;
   }


   if (scullyX > 230) {
     scullyX = 230;
   } else {
     scullyX = scullyX + 1;
   }

   if (scullyY < 287) {
     scullyY = 287;
   } else {
     scullyY = scullyY - 1;
   }


   if (doorX < 420) {
     doorX = 420;
   } else {
     doorX = doorX - 1;
   }

   if (doorY < 235) {
     doorY = 235;
   } else {
     doorY = doorY - 1;
   }


   // This part draws Boo. 
   //


   fill('mediumpurple');
   rect(booX, booY, 48, 55);
   rect(booX + 9, booY - 20, 3, 20);
   rect(booX + 37, booY - 20, 3, 20);
   fill('white');
   ellipse(booX + 11, booY - 20, 15, 15);
   ellipse(booX + 38, booY - 20, 15, 15);
   fill('black');
   ellipse(booX + 9, booY - 20, 5, 5);
   ellipse(booX + 40, booY - 20, 5, 5);



   //This part draws Mike.
   //

   fill('yellowgreen');
   ellipse(mikeX, mikeY, 68, 69);
   fill('white');
   ellipse(mikeX, mikeY - 4, 30, 30);
   fill('black');
   ellipse(mikeX, mikeY - 4, 10, 10);




   //This part draws Scully.
   //

   fill('deepskyblue');
   ellipse(scullyX, scullyY, 100, 100);
   ellipse(scullyX, scullyY - 30, 80, 80);
   fill('white');
   ellipse(scullyX - 10, scullyY - 30, 20, 20);
   ellipse(scullyX + 11, scullyY - 30, 20, 20);
   fill('black');
   ellipse(scullyX - 10, scullyY - 30, 10, 10);
   ellipse(scullyX + 11, scullyY - 30, 10, 10);
   fill('cornflowerblue');
   rect(scullyX + 2, scullyY - 48, 18, 6);
   rect(scullyX - 20, scullyY - 48, 18, 6);
   fill('mediumpurple');
   ellipse(scullyX - 10, scullyY - 60, 6, 6);
   ellipse(scullyX + 1, scullyY - 55, 6, 6);
   ellipse(scullyX + 10, scullyY - 60, 6, 6);
   fill('beige');
   triangle(scullyX + 25, scullyY - 60, scullyX + 39, scullyY - 70, scullyX + 34, scullyY - 50);
   triangle(scullyX - 25, scullyY - 60, scullyX - 38, scullyY - 70, scullyX - 35, scullyY - 50);
   fill('dodgerblue');
   triangle(scullyX + 8, scullyY - 12, scullyX - 10, scullyY - 12, scullyX, scullyY);



   //This part draws the door.
   //


   fill('pink');
   rect(doorX, doorY, 60, 100);
   fill('darkgoldenrod');
   ellipse(doorX + 50, doorY + 50, 10, 10);

 }