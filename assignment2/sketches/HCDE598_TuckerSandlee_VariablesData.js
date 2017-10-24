function setup() {
  createCanvas(500, 500);
}


//StanVariables
var StanFaceX = 60;
var StanFaceY = 60;

var stanRightEyeX = 45;
var stanRightEyeY = 60;

var StanRightPupilX = 51;
var StanRightPupilY = 60;

var StanLeftEyeX = 75;
var StanLeftEyeY = 60;

var StanLeftPupilX = 69;
var StanLeftPupilY = 60;

var StanMouthX = 60;
var StanMouthY = 82;

var StanHatX = 60;
var StanHatY = 40;

var StanHatBallX = 60;
var StanHatBallY = 10;



//KyleVariables
var KyleFaceX = 440;
var KyleFaceY = 60;

var KyleRightEyeX = 425;
var KyleRightEyeY = 60;

var KyleRightPupilX = 431;
var KyleRightPupilY = 60;

var KyleLeftEyeX = 455;
var KyleLeftEyeY = 60;

var KyleLeftPupilX = 449;
var KyleLeftPupilY = 60;

var KyleMouthX = 440;
var KyleMouthY = 82;

var KyleHatXA = 390;
var KyleHatYA = 10;

var KyleHatXB = 490;
var KyleHatYB = 45;

var KyleHatBillXA = 400;
var KyleHatBillYA = 20;

var KyleHatBillXB = 480;
var KyleHatBillYB = 45;

var KyleHatSideRightX = 390;
var KyleHatSideRightY = 60;

var KyleHatSideLeftX = 490;
var KyleHatSideLeftY = 60;





//CartmanVariables
var CartmanFaceX = 60;
var CartmanFaceY = 440;

var CartmanRightEyeX = 45;
var CartmanRightEyeY = 440;

var CartmanRightPupilX = 51;
var CartmanRightPupilY = 440;

var CartmanLeftEyeX = 75;
var CartmanLeftEyeY = 440;

var CartmanLeftPupilX = 69;
var CartmanLeftPupilY = 440;

var CartmanMouthX = 60;
var CartmanMouthY = 462;

var CartmanHatX = 60;
var CartmanHatY = 420;

var CartmanHatBallX = 60;
var CartmanHatBallY = 390;


//kennyvariables
var KennyHoodX = 440;
var KennyHoodY = 440;

var KennyTrimX = 440;
var KennyTrimY = 440;

var KennyFaceX = 440;
var KennyFaceY = 440;

var KennyRightEyeX = 425;
var KennyRightEyeY = 440

var KennyLeftEyeX = 455;
var KennyLeftEyeY = 440;

var KennyRightPupilX = 431;
var KennyRightPupilY = 440;

var KennyLeftPupilX = 449;
var KennyLeftPupilY = 440;


function draw() {
  background('black');

  //stan

  //StanFace
  fill('#FFE5B4');
  ellipse(StanFaceX, StanFaceY, 95);
  StanFaceX = StanFaceX + 1;
  StanFaceY = StanFaceY + 1;

  if (StanFaceX >= 185) {
    StanFaceX = 185;
  }

  if (StanFaceY >= 185) {
    StanFaceY = 185;
  }


  //stan right eye
  fill('white');
  strokeWeight(0);
  ellipse(stanRightEyeX, stanRightEyeY, 35);

  stanRightEyeX = stanRightEyeX + 1;
  stanRightEyeY = stanRightEyeY + 1;

  if (stanRightEyeX >= 170) {
    stanRightEyeX = 170;
  }

  if (stanRightEyeY >= 185) {
    stanRightEyeY = 185;
  }

  //stan right pupil
  fill('black');
  strokeWeight(0);
  ellipse(StanRightPupilX, StanRightPupilY, 5);

  StanRightPupilX = StanRightPupilX + 1;
  StanRightPupilY = StanRightPupilY + 1;

  if (StanRightPupilX >= 176) {
    StanRightPupilX = 176;
  }

  if (StanRightPupilY >= 185) {
    StanRightPupilY = 185;
  }

  //stan left eye
  fill('white');
  strokeWeight(0);
  ellipse(StanLeftEyeX, StanLeftEyeY, 35);

  StanLeftEyeX = StanLeftEyeX + 1;
  StanLeftEyeY = StanLeftEyeY + 1;

  if (StanLeftEyeX >= 196) {
    StanLeftEyeX = 196;
  }

  if (StanLeftEyeY >= 185) {
    StanLeftEyeY = 185;
  }

  //stan left pupil
  fill('black');
  strokeWeight(0);
  ellipse(StanLeftPupilX, StanLeftPupilY, 5);

  StanLeftPupilX = StanLeftPupilX + 1;
  StanLeftPupilY = StanLeftPupilY + 1;

  if (StanLeftPupilX >= 194) {
    StanLeftPupilX = 194;
  }

  if (StanLeftPupilY >= 185) {
    StanLeftPupilY = 185;
  }

  //stan mouth
  fill('darkRED');
  strokeWeight(0)
  arc(StanMouthX, StanMouthY, 30, 40, 0, 110, [CHORD]);

  StanMouthX = StanMouthX + 1;
  StanMouthY = StanMouthY + 1;

  if (StanMouthX >= 185) {
    StanMouthX = 185;
  }

  if (StanMouthY >= 207) {
    StanMouthY = 207;
  }


  //stan hat
  fill('Blue');
  strokeWeight(0)
  arc(StanHatX, StanHatY, 85, 55, 110, 0, [CHORD]);


  StanHatX = StanHatX + 1;
  StanHatY = StanHatY + 1;

  if (StanHatX >= 185) {
    StanHatX = 185;
  }

  if (StanHatY >= 165) {
    StanHatY = 165;
  }


  //stan hat ball
  fill('red');
  ellipse(StanHatBallX, StanHatBallY, 15)

  StanHatBallX = StanHatBallX + 1;
  StanHatBallY = StanHatBallY + 1;

  if (StanHatBallX >= 185) {
    StanHatBallX = 185;
  }

  if (StanHatBallY >= 135) {
    StanHatBallY = 135;
  }







  //kyle

  //kyle face
  fill('#FFE5B4');
  ellipse(KyleFaceX, KyleFaceY, 95);

  KyleFaceX = KyleFaceX - 1;
  KyleFaceY = KyleFaceY + 1;

  if (KyleFaceX <= 315) {
    KyleFaceX = 315;
  }

  if (KyleFaceY >= 185) {
    KyleFaceY = 185;
  }

  //kyle right eye
  fill('white');
  strokeWeight(0);
  ellipse(KyleRightEyeX, KyleRightEyeY, 35);

  KyleRightEyeX = KyleRightEyeX - 1;
  KyleRightEyeY = KyleRightEyeY + 1;

  if (KyleRightEyeX <= 300) {
    KyleRightEyeX = 300;
  }

  if (KyleRightEyeY >= 185) {
    KyleRightEyeY = 185;
  }

  //kyle right pupil
  fill('black');
  strokeWeight(0);
  ellipse(KyleRightPupilX, KyleRightPupilY, 5);


  KyleRightPupilX = KyleRightPupilX - 1;
  KyleRightPupilY = KyleRightPupilY + 1;

  if (KyleRightPupilX <= 306) {
    KyleRightPupilX = 306;
  }

  if (KyleRightPupilY >= 185) {
    KyleRightPupilY = 185;
  }



  //kyle left eye
  fill('white');
  strokeWeight(0);
  ellipse(KyleLeftEyeX, KyleLeftEyeY, 35);

  KyleLeftEyeX = KyleLeftEyeX - 1;
  KyleLeftEyeY = KyleLeftEyeY + 1;

  if (KyleLeftEyeX <= 330) {
    KyleLeftEyeX = 330;
  }

  if (KyleLeftEyeY >= 185) {
    KyleLeftEyeY = 185;
  }

  //kyle left pupil
  fill('black');
  strokeWeight(0);
  ellipse(KyleLeftPupilX, KyleLeftPupilY, 5);

  KyleLeftPupilX = KyleLeftPupilX - 1;
  KyleLeftPupilY = KyleLeftPupilY + 1;

  if (KyleLeftPupilX <= 324) {
    KyleLeftPupilX = 324;
  }

  if (KyleLeftPupilY >= 185) {
    KyleLeftPupilY = 185;
  }


  //kyle mouth
  fill('darkRED');
  strokeWeight(0)
  arc(KyleMouthX, KyleMouthY, 30, 40, 0, 110, [CHORD]);

  KyleMouthX = KyleMouthX - 1;
  KyleMouthY = KyleMouthY + 1;

  if (KyleMouthX <= 315) {
    KyleMouthX = 315;
  }

  if (KyleMouthY >= 207) {
    KyleMouthY = 207;
  }


  //kyle hat
  fill('green')
  quad(KyleHatXA, KyleHatYA, KyleHatXB, KyleHatYA, KyleHatXB, KyleHatYB, KyleHatXA, KyleHatYB);

  KyleHatXA = KyleHatXA - 1;
  KyleHatXB = KyleHatXB - 1;
  KyleHatYA = KyleHatYA + 1;
  KyleHatYB = KyleHatYB + 1;


  if (KyleHatXA <= 265) {
    KyleHatXA = 265;
  }

  if (KyleHatYA >= 135) {
    KyleHatYA = 135;
  }

  if (KyleHatXB <= 365) {
    KyleHatXB = 365;
  }

  if (KyleHatYB >= 170) {
    KyleHatYB = 170;
  }


  //kyle hat bill
  fill('darkgreen');
  quad(KyleHatBillXA, KyleHatBillYA, KyleHatBillXB, KyleHatBillYA, KyleHatBillXB, KyleHatBillYB, KyleHatBillXA, KyleHatBillYB);


  KyleHatBillXA = KyleHatBillXA - 1;
  KyleHatBillXB = KyleHatBillXB - 1;
  KyleHatBillYA = KyleHatBillYA + 1;
  KyleHatBillYB = KyleHatBillYB + 1;


  if (KyleHatBillXA <= 275) {
    KyleHatBillXA = 275;
  }

  if (KyleHatBillYA >= 145) {
    KyleHatBillYA = 145;
  }

  if (KyleHatBillXB <= 355) {
    KyleHatBillXB = 355;
  }

  if (KyleHatBillYB >= 170) {
    KyleHatBillYB = 170;
  }




  //kyle hat side left
  fill("green");
  stroke('black')
  strokeWeight('2')
  ellipse(KyleHatSideLeftX, KyleHatSideLeftY, 15, 50);

  KyleHatSideLeftX = KyleHatSideLeftX - 1;
  KyleHatSideLeftY = KyleHatSideLeftY + 1;

  if (KyleHatSideLeftX <= 365) {
    KyleHatSideLeftX = 365;
  }

  if (KyleHatSideLeftY >= 185) {
    KyleHatSideLeftY = 185;
  }


  //kyle hat side right
  fill("green");
  stroke('black')
  strokeWeight('2')
  ellipse(KyleHatSideRightX, KyleHatSideRightY, 15, 50);

  KyleHatSideRightX = KyleHatSideRightX - 1;
  KyleHatSideRightY = KyleHatSideRightY + 1;

  if (KyleHatSideRightX <= 265) {
    KyleHatSideRightX = 265;
  }

  if (KyleHatSideRightY >= 185) {
    KyleHatSideRightY = 185;
  }

  //Cartman

  //CartmanFace
  fill('#FFE5B4');
  ellipse(CartmanFaceX, CartmanFaceY, 95);
  CartmanFaceX = CartmanFaceX + 1;
  CartmanFaceY = CartmanFaceY - 1;

  if (CartmanFaceX >= 185) {
    CartmanFaceX = 185;
  }

  if (CartmanFaceY <= 315) {
    CartmanFaceY = 315;
  }


  //Cartman right eye
  fill('white');
  strokeWeight(0);
  ellipse(CartmanRightEyeX, CartmanRightEyeY, 35);

  CartmanRightEyeX = CartmanRightEyeX + 1;
  CartmanRightEyeY = CartmanRightEyeY - 1;

  if (CartmanRightEyeX >= 170) {
    CartmanRightEyeX = 170;
  }

  if (CartmanRightEyeY <= 315) {
    CartmanRightEyeY = 315;
  }

  //Cartman right pupil
  fill('black');
  strokeWeight(0);
  ellipse(CartmanRightPupilX, CartmanRightPupilY, 5);

  CartmanRightPupilX = CartmanRightPupilX + 1;
  CartmanRightPupilY = CartmanRightPupilY - 1;

  if (CartmanRightPupilX >= 176) {
    CartmanRightPupilX = 176;
  }

  if (CartmanRightPupilY <= 315) {
    CartmanRightPupilY = 315;
  }

  //Cartman left eye
  fill('white');
  strokeWeight(0);
  ellipse(CartmanLeftEyeX, CartmanLeftEyeY, 35);

  CartmanLeftEyeX = CartmanLeftEyeX + 1;
  CartmanLeftEyeY = CartmanLeftEyeY - 1;

  if (CartmanLeftEyeX >= 196) {
    CartmanLeftEyeX = 196;
  }

  if (CartmanLeftEyeY <= 315) {
    CartmanLeftEyeY = 315;
  }

  //Cartman left pupil
  fill('black');
  strokeWeight(0);
  ellipse(CartmanLeftPupilX, CartmanLeftPupilY, 5);

  CartmanLeftPupilX = CartmanLeftPupilX + 1;
  CartmanLeftPupilY = CartmanLeftPupilY - 1;

  if (CartmanLeftPupilX >= 194) {
    CartmanLeftPupilX = 194;
  }

  if (CartmanLeftPupilY <= 315) {
    CartmanLeftPupilY = 315;
  }

  //Cartman mouth
  fill('darkRED');
  strokeWeight(0)
  arc(CartmanMouthX, CartmanMouthY, 30, 40, 0, 110, [CHORD]);

  CartmanMouthX = CartmanMouthX + 1;
  CartmanMouthY = CartmanMouthY - 1;

  if (CartmanMouthX >= 185) {
    CartmanMouthX = 185;
  }

  if (CartmanMouthY <= 337) {
    CartmanMouthY = 337;
  }


  //Cartman hat
  fill('lightBlue');
  strokeWeight(0)
  arc(CartmanHatX, CartmanHatY, 85, 55, 110, 0, [CHORD]);


  CartmanHatX = CartmanHatX + 1;
  CartmanHatY = CartmanHatY - 1;

  if (CartmanHatX >= 185) {
    CartmanHatX = 185;
  }

  if (CartmanHatY <= 295) {
    CartmanHatY = 295;
  }


  //Cartman hat ball
  fill('yellow');
  ellipse(CartmanHatBallX, CartmanHatBallY, 15)

  CartmanHatBallX = CartmanHatBallX + 1;
  CartmanHatBallY = CartmanHatBallY - 1;

  if (CartmanHatBallX >= 185) {
    CartmanHatBallX = 185;
  }

  if (CartmanHatBallY <= 265) {
    CartmanHatBallY = 265;
  }




  //kenny

  //kenny hood
  fill('orange');
  ellipse(KennyHoodX, KennyHoodY, 95);


  KennyHoodX = KennyHoodX - 1;
  KennyHoodY = KennyHoodY - 1;

  if (KennyHoodX <= 315) {
    KennyHoodX = 315;
  }

  if (KennyHoodY <= 315) {
    KennyHoodY = 315;
  }
  //kenny trim
  fill('brown');
  ellipse(KennyTrimX, KennyTrimY, 80, 80);

  KennyTrimX = KennyTrimX - 1;
  KennyTrimY = KennyTrimY - 1;

  if (KennyTrimX <= 315) {
    KennyTrimX = 315;
  }

  if (KennyTrimY <= 315) {
    KennyTrimY = 315;
  }

  //kenny face
  fill('#FFE5B4');
  ellipse(KennyFaceX, KennyFaceY, 55, 60);

  KennyFaceX = KennyFaceX - 1;
  KennyFaceY = KennyFaceY - 1;

  if (KennyFaceX <= 315) {
    KennyFaceX = 315;
  }

  if (KennyFaceY <= 315) {
    KennyFaceY = 315;
  }

  //kenny right eye
  fill('white');
  strokeWeight(0);
  ellipse(KennyRightEyeX, KennyRightEyeY, 35);

  KennyRightEyeX = KennyRightEyeX - 1;
  KennyRightEyeY = KennyRightEyeY - 1;

  if (KennyRightEyeX <= 300) {
    KennyRightEyeX = 300;
  }

  if (KennyRightEyeY <= 315) {
    KennyRightEyeY = 315;
  }

  //kenny right pupil
  fill('black');
  strokeWeight(0);
  ellipse(KennyRightPupilX, KennyRightPupilY, 5);

  KennyRightPupilX = KennyRightPupilX - 1;
  KennyRightPupilY = KennyRightPupilY - 1;

  if (KennyRightPupilX <= 306) {
    KennyRightPupilX = 306;
  }

  if (KennyRightPupilY <= 315) {
    KennyRightPupilY = 315;
  }

  //kenny left eye
  fill('white');
  strokeWeight(0);
  ellipse(KennyLeftEyeX, KennyLeftEyeY, 35);

  KennyLeftEyeX = KennyLeftEyeX - 1;
  KennyLeftEyeY = KennyLeftEyeY - 1;

  if (KennyLeftEyeX <= 330) {
    KennyLeftEyeX = 330;
  }

  if (KennyLeftEyeY <= 315) {
    KennyLeftEyeY = 315;
  }

  //kenny left pupil
  fill('black');
  strokeWeight(0);
  ellipse(KennyLeftPupilX, KennyLeftPupilY, 5);

  KennyLeftPupilX = KennyLeftPupilX - 1;
  KennyLeftPupilY = KennyLeftPupilY - 1;

  if (KennyLeftPupilX <= 324) {
    KennyLeftPupilX = 324;
  }

  if (KennyLeftPupilY <= 315) {
    KennyLeftPupilY = 315;
  }



}