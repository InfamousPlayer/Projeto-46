

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	strokeWeight(2);
  stroke(15);
  fill("yellow");
	mainWall = createSprite(20, 453, 15, 750);
	mainWall2 = createSprite(700, 20, 1230, 15);
	mainWall3 = createSprite(1307, 427, 15, 800);
	mainWall4 = createSprite(665, 820, 1280, 15);
  innerWall = createSprite(647, 100, 1240, 15);
  innerWall2 = createSprite(680, 400, 1240, 15);
  innerWall3 = createSprite(647, 600, 1240, 15);
  innerWall4 = createSprite(280, 695, 15, 190);
  innerWall5 = createSprite(680, 725, 15, 190);
  innerWall6 = createSprite(1080, 695, 15, 190);

  
  
	
  IndianaFodase = createSprite(20, 20, 15, 15);

  tesouro = createSprite(55, 790, 25, 25);

  IndianaFodase.shapeColor = "red"
  mainWall.shapeColor = "blue"
  mainWall2.shapeColor = "blue"
  mainWall3.shapeColor = "blue"
  mainWall4.shapeColor = "blue"
  innerWall.shapeColor = "blue"
  innerWall2.shapeColor = "blue"
  innerWall3.shapeColor = "blue"
  innerWall4.shapeColor = "blue"
  innerWall5.shapeColor = "blue"
  innerWall6.shapeColor = "blue"
  tesouro.shapeColor = "gold"

  
  
  trapGroups=new Group();
  trapGroups2=new Group();
  trapGroups3=new Group();
  trapGroups4=new Group();
  trapGroups5=new Group();
  trapGroups6=new Group();
  trapGroups7=new Group();
  trapGroups8=new Group();
  trapGroups9=new Group();
  trapGroups10=new Group();
  trapGroups11=new Group();
  trapGroups12=new Group();
  
    traps();
    trapGroups.setVelocityYEach(5);
    trapGroups.setColorEach("white");

    trapGroups2.setVelocityYEach(-5);
    trapGroups2.setColorEach("white");

    trapGroups3.setColorEach("white");
    
    trapGroups4.setColorEach("white");

    trapGroups5.setVelocityXEach(-5);
    trapGroups5.setColorEach("white");

    trapGroups6.setVelocityXEach(5);
    trapGroups6.setColorEach("white");

    trapGroups7.setVelocityYEach(-10);
    trapGroups7.setColorEach("white");

    trapGroups8.setVelocityYEach(8);
    trapGroups8.setColorEach("white");

    trapGroups9.setVelocityYEach(8);
    trapGroups9.setColorEach("white");

    trapGroups10.setVelocityYEach(-8);
    trapGroups10.setColorEach("white");

    trapGroups11.setVelocityYEach(8);
    trapGroups11.setColorEach("white");

    trapGroups12.setVelocityYEach(-8);
    trapGroups12.setColorEach("white");





}


function draw() {
  rectMode(CENTER);
  background("black");

  IndianaFodase.bounceOff(mainWall);
  IndianaFodase.bounceOff(mainWall2);
  IndianaFodase.bounceOff(mainWall3);
  IndianaFodase.bounceOff(mainWall4);
  IndianaFodase.bounceOff(innerWall);
  IndianaFodase.bounceOff(innerWall2);
  IndianaFodase.bounceOff(innerWall3);
  IndianaFodase.bounceOff(innerWall4);
  IndianaFodase.bounceOff(innerWall5);
  IndianaFodase.bounceOff(innerWall6);



  trapGroups.bounceOff(mainWall);
  trapGroups.bounceOff(mainWall2);
  trapGroups.bounceOff(mainWall3);
  trapGroups.bounceOff(mainWall4);

  trapGroups2.bounceOff(mainWall);
  trapGroups2.bounceOff(mainWall2);
  trapGroups2.bounceOff(mainWall3);
  trapGroups2.bounceOff(mainWall4);

  trapGroups3.bounceOff(innerWall);
  trapGroups3.bounceOff(innerWall2);
  trapGroups3.bounceOff(innerWall3);
  trapGroups3.bounceOff(innerWall4);
  trapGroups3.bounceOff(mainWall);
  trapGroups3.bounceOff(mainWall3);
  trapGroups3.setRotationSpeedEach(5);

  trapGroups.bounceOff(innerWall);
  trapGroups2.bounceOff(innerWall);
  trapGroups4.bounceOff(innerWall2);
  trapGroups4.bounceOff(innerWall3);

  trapGroups5.bounceOff(innerWall6);
  trapGroups5.bounceOff(mainWall3);

  trapGroups6.bounceOff(innerWall6);
  trapGroups6.bounceOff(mainWall3);

  trapGroups7.bounceOff(innerWall3);
  trapGroups7.bounceOff(mainWall4);

  trapGroups8.bounceOff(innerWall3);
  trapGroups8.bounceOff(mainWall4);

  trapGroups9.bounceOff(innerWall3);
  trapGroups9.bounceOff(mainWall4);

  trapGroups10.bounceOff(innerWall3);
  trapGroups10.bounceOff(mainWall4);

  trapGroups11.bounceOff(innerWall3);
  trapGroups11.bounceOff(mainWall4);

  trapGroups12.bounceOff(innerWall3);
  trapGroups12.bounceOff(mainWall4);


  if (keyDown(LEFT_ARROW)){
    IndianaFodase.x= IndianaFodase.x -4;
  }
  
  if (keyDown(RIGHT_ARROW)){
    IndianaFodase.x= IndianaFodase.x +4;
  }
  
  if (keyDown(UP_ARROW)){
    IndianaFodase.y= IndianaFodase.y -4;
  }
  
  if (keyDown(DOWN_ARROW)){
    IndianaFodase.y= IndianaFodase.y +4;
  }

  if (IndianaFodase.isTouching(trapGroups)||IndianaFodase.isTouching(trapGroups2)||IndianaFodase.isTouching(trapGroups3)||IndianaFodase.isTouching(trapGroups4)||IndianaFodase.isTouching(trapGroups5)||IndianaFodase.isTouching(trapGroups6)||IndianaFodase.isTouching(trapGroups7)||IndianaFodase.isTouching(trapGroups8)||IndianaFodase.isTouching(trapGroups9)||IndianaFodase.isTouching(trapGroups10)||IndianaFodase.isTouching(trapGroups11)){
    IndianaFodase.x= 20;
    IndianaFodase.y= 20;

  }

  drawSprites();
 
}


function traps() {
// 
  var trap1 = createSprite(120, 80, 15, 15);
  var trap2 = createSprite(160, 80, 15, 15);
  var trap3 = createSprite(200, 80, 15, 15);
  var trap4 = createSprite(240, 80, 15, 15);
  var trap5 = createSprite(280, 80, 15, 15);
  var trap6 = createSprite(320, 80, 15, 15);
  var trap7 = createSprite(360, 80, 15, 15);
  var trap8 = createSprite(400, 80, 15, 15);
  var trap9 = createSprite(440, 80, 15, 15);
  var trap10 = createSprite(480, 80, 15, 15);
  var trap11 = createSprite(520, 80, 15, 15);
  var trap12 = createSprite(560, 80, 15, 15);
  var trap13 = createSprite(600, 80, 15, 15);
  var trap14 = createSprite(640, 80, 15, 15);
  var trap15 = createSprite(680, 80, 15, 15);
  var trap16 = createSprite(720, 80, 15, 15);
  var trap17 = createSprite(760, 80, 15, 15);
  var trap18 = createSprite(800, 80, 15, 15);
  var trap19 = createSprite(840, 80, 15, 15);
  var trap20 = createSprite(880, 80, 15, 15);
  var trap21 = createSprite(920, 80, 15, 15);
  var trap22 = createSprite(960, 80, 15, 15);
  var trap23 = createSprite(1000, 80, 15, 15);
  var trap24 = createSprite(1040, 80, 15, 15);
  var trap25 = createSprite(1080, 80, 15, 15);
  var trap26 = createSprite(1120, 80, 15, 15);
  var trap27 = createSprite(1160, 80, 15, 15);
  var trap28 = createSprite(1200, 80, 15, 15);
  var trap29 = createSprite(1240, 80, 15, 15);
  //

var trap30 = createSprite(1090, 250, 250, 15);
var trap31 = createSprite(1090, 250, 15, 250);
var trap32 = createSprite(790, 250, 250, 15);
var trap33 = createSprite(790, 250, 15, 250);
var trap34 = createSprite(490, 250, 250, 15);
var trap35 = createSprite(490, 250, 15, 250);
var trap36 = createSprite(190, 250, 250, 15);
var trap37 = createSprite(190, 250, 15, 250);
  
//
var trap162 = createSprite(70, 435, 15, 15);
var trap163 = createSprite(85, 435, 15, 15);
var trap164 = createSprite(100, 435, 15, 15);
var trap165 = createSprite(115, 435, 15, 15);
var trap166 = createSprite(130, 435, 15, 15);
var trap167 = createSprite(145, 435, 15, 15);
var trap168 = createSprite(160, 435, 15, 15);
var trap169 = createSprite(175, 435, 15, 15);
var trap170 = createSprite(190, 435, 15, 15);
var trap171 = createSprite(205, 435, 15, 15);
var trap172 = createSprite(220, 435, 15, 15);
var trap173 = createSprite(235, 435, 15, 15);
var trap174 = createSprite(250, 435, 15, 15);
var trap175 = createSprite(265, 435, 15, 15);
var trap176 = createSprite(280, 435, 15, 15);
var trap177 = createSprite(295, 435, 15, 15);
var trap178 = createSprite(310, 435, 15, 15);
var trap179 = createSprite(325, 435, 15, 15);
var trap180 = createSprite(340, 435, 15, 15);
var trap181 = createSprite(355, 435, 15, 15);
var trap182 = createSprite(370, 435, 15, 15);
var trap183 = createSprite(385, 435, 15, 15);
var trap184 = createSprite(400, 435, 15, 15);
var trap185 = createSprite(415, 435, 15, 15);
var trap186 = createSprite(430, 435, 15, 15);
var trap187 = createSprite(445, 435, 15, 15);
var trap188 = createSprite(460, 435, 15, 15);
var trap189 = createSprite(475, 435, 15, 15);
var trap190 = createSprite(490, 435, 15, 15);
//
var trap191 = createSprite(70, 450, 15, 15);
var trap192 = createSprite(85, 450, 15, 15);
var trap193 = createSprite(100, 450, 15, 15);
var trap194 = createSprite(115, 450, 15, 15);
var trap195 = createSprite(130, 450, 15, 15);
var trap196 = createSprite(145, 450, 15, 15);
var trap197 = createSprite(160, 450, 15, 15);
var trap198 = createSprite(175, 450, 15, 15);
var trap199 = createSprite(190, 450, 15, 15);
var trap200 = createSprite(205, 450, 15, 15);
var trap201 = createSprite(220, 450, 15, 15);
var trap202 = createSprite(235, 450, 15, 15);
var trap203 = createSprite(250, 450, 15, 15);
var trap204 = createSprite(265, 450, 15, 15);
var trap205 = createSprite(280, 450, 15, 15);
var trap206 = createSprite(295, 450, 15, 15);
var trap207 = createSprite(310, 450, 15, 15);
var trap208 = createSprite(325, 450, 15, 15);
var trap209 = createSprite(340, 450, 15, 15);
var trap210 = createSprite(355, 450, 15, 15);
var trap211 = createSprite(370, 450, 15, 15);
var trap212 = createSprite(385, 450, 15, 15);
var trap213 = createSprite(400, 450, 15, 15);
var trap214 = createSprite(415, 450, 15, 15);
var trap215 = createSprite(430, 450, 15, 15);
var trap216 = createSprite(445, 450, 15, 15);
var trap217 = createSprite(460, 450, 15, 15);
var trap218 = createSprite(475, 450, 15, 15);
var trap219 = createSprite(490, 450, 15, 15);
//
var trap220 = createSprite(70, 465, 15, 15);
var trap221 = createSprite(85, 465, 15, 15);
var trap222 = createSprite(100, 465, 15, 15);
var trap223 = createSprite(115, 465, 15, 15);
var trap224 = createSprite(130, 465, 15, 15);
var trap225 = createSprite(145, 465, 15, 15);
var trap226 = createSprite(160, 465, 15, 15);
var trap227 = createSprite(175, 465, 15, 15);
var trap228 = createSprite(190, 465, 15, 15);
var trap229 = createSprite(205, 465, 15, 15);
var trap230 = createSprite(220, 465, 15, 15);
var trap231 = createSprite(235, 465, 15, 15);
var trap232 = createSprite(250, 465, 15, 15);
var trap233 = createSprite(250, 465, 15, 15);
var trap234 = createSprite(265, 465, 15, 15);
var trap235 = createSprite(280, 465, 15, 15);
var trap236 = createSprite(295, 465, 15, 15);
var trap237 = createSprite(310, 465, 15, 15);
var trap238 = createSprite(325, 465, 15, 15);
var trap239 = createSprite(340, 465, 15, 15);
var trap240 = createSprite(355, 465, 15, 15);
var trap241 = createSprite(370, 465, 15, 15);
var trap242 = createSprite(385, 465, 15, 15);
var trap243 = createSprite(400, 465, 15, 15);
var trap244 = createSprite(415, 465, 15, 15);
var trap245 = createSprite(430, 465, 15, 15);
var trap246 = createSprite(445, 465, 15, 15);
var trap247 = createSprite(460, 465, 15, 15);
var trap248 = createSprite(475, 465, 15, 15);
var trap249 = createSprite(490, 465, 15, 15);
//
var trap250 = createSprite(70, 480, 15, 15);
var trap251 = createSprite(85, 480, 15, 15);
var trap252 = createSprite(100, 480, 15, 15);
var trap253 = createSprite(115, 480, 15, 15);
var trap254 = createSprite(130, 480, 15, 15);
var trap255 = createSprite(145, 480, 15, 15);
var trap256 = createSprite(160, 480, 15, 15);
var trap257 = createSprite(175, 480, 15, 15);
var trap258 = createSprite(190, 480, 15, 15);
var trap259 = createSprite(205, 480, 15, 15);
var trap260 = createSprite(220, 480, 15, 15);
var trap261 = createSprite(235, 480, 15, 15);
var trap262 = createSprite(250, 480, 15, 15);
var trap263 = createSprite(265, 480, 15, 15);
var trap264 = createSprite(280, 480, 15, 15);
var trap265 = createSprite(295, 480, 15, 15);
var trap266 = createSprite(310, 480, 15, 15);
var trap267 = createSprite(325, 480, 15, 15);
var trap268 = createSprite(340, 480, 15, 15);
var trap269 = createSprite(355, 480, 15, 15);
var trap270 = createSprite(370, 480, 15, 15);
var trap271 = createSprite(385, 480, 15, 15);
var trap272 = createSprite(400, 480, 15, 15);
var trap273 = createSprite(415, 480, 15, 15);
var trap274 = createSprite(430, 480, 15, 15);
var trap275 = createSprite(445, 480, 15, 15);
var trap276 = createSprite(460, 480, 15, 15);
var trap277 = createSprite(475, 480, 15, 15);
var trap278 = createSprite(490, 480, 15, 15);
//
var trap279 = createSprite(70, 495, 15, 15);
var trap280 = createSprite(85, 495, 15, 15);
var trap281 = createSprite(100, 495, 15, 15);
var trap282 = createSprite(115, 495, 15, 15);
var trap283 = createSprite(130, 495, 15, 15);
var trap284 = createSprite(145, 495, 15, 15);
var trap285 = createSprite(160, 495, 15, 15);
var trap286 = createSprite(175, 495, 15, 15);
var trap287 = createSprite(190, 495, 15, 15);
var trap288 = createSprite(205, 495, 15, 15);
var trap289 = createSprite(220, 495, 15, 15);
var trap290 = createSprite(235, 495, 15, 15);
var trap291 = createSprite(250, 495, 15, 15);
var trap292 = createSprite(265, 495, 15, 15);
var trap293 = createSprite(280, 495, 15, 15);
var trap294 = createSprite(295, 495, 15, 15);
var trap295 = createSprite(310, 495, 15, 15);
var trap296 = createSprite(325, 495, 15, 15);
var trap297 = createSprite(340, 495, 15, 15);
var trap298 = createSprite(355, 495, 15, 15);
var trap299 = createSprite(370, 495, 15, 15);
var trap300 = createSprite(385, 495, 15, 15);
var trap301 = createSprite(400, 495, 15, 15);
var trap302 = createSprite(415, 495, 15, 15);
var trap303 = createSprite(430, 495, 15, 15);
var trap304 = createSprite(445, 495, 15, 15);
var trap305 = createSprite(460, 495, 15, 15);
var trap306 = createSprite(475, 495, 15, 15);
var trap307 = createSprite(490, 495, 15, 15);
//
var trap308 = createSprite(70, 510, 15, 15);
var trap309 = createSprite(85, 510, 15, 15);
var trap310 = createSprite(100, 510, 15, 15);
var trap311 = createSprite(115, 510, 15, 15);
var trap312 = createSprite(130, 510, 15, 15);
var trap313 = createSprite(145, 510, 15, 15);
var trap314 = createSprite(160, 510, 15, 15);
var trap315 = createSprite(175, 510, 15, 15);
var trap316 = createSprite(190, 510, 15, 15);
var trap317 = createSprite(205, 510, 15, 15);
var trap318 = createSprite(220, 510, 15, 15);
var trap319 = createSprite(235, 510, 15, 15);
var trap320 = createSprite(250, 510, 15, 15);
var trap321 = createSprite(265, 510, 15, 15);
var trap322 = createSprite(280, 510, 15, 15);
var trap323 = createSprite(295, 510, 15, 15);
var trap324 = createSprite(310, 510, 15, 15);
var trap325 = createSprite(325, 510, 15, 15);
var trap326 = createSprite(340, 510, 15, 15);
var trap327 = createSprite(355, 510, 15, 15);
var trap328 = createSprite(370, 510, 15, 15);
var trap329 = createSprite(385, 510, 15, 15);
var trap330 = createSprite(400, 510, 15, 15);
var trap331 = createSprite(415, 510, 15, 15);
var trap332 = createSprite(430, 510, 15, 15);
var trap333 = createSprite(445, 510, 15, 15);
var trap334 = createSprite(460, 510, 15, 15);
var trap335 = createSprite(475, 510, 15, 15);
var trap336 = createSprite(490, 510, 15, 15);
//
var trap337 = createSprite(70, 525, 15, 15);
var trap338 = createSprite(85, 525, 15, 15);
var trap339 = createSprite(100, 525, 15, 15);
var trap340 = createSprite(115, 525, 15, 15);
var trap341 = createSprite(130, 525, 15, 15);
var trap342 = createSprite(145, 525, 15, 15);
var trap343 = createSprite(160, 525, 15, 15);
var trap344 = createSprite(175, 525, 15, 15);
var trap345 = createSprite(190, 525, 15, 15);
var trap346 = createSprite(205, 525, 15, 15);
var trap347 = createSprite(220, 525, 15, 15);
var trap348 = createSprite(235, 525, 15, 15);
var trap349 = createSprite(250, 525, 15, 15);
var trap350 = createSprite(265, 525, 15, 15);
var trap351 = createSprite(280, 525, 15, 15);
var trap352 = createSprite(295, 525, 15, 15);
var trap353 = createSprite(310, 525, 15, 15);
var trap354 = createSprite(325, 525, 15, 15);
var trap355 = createSprite(340, 525, 15, 15);
var trap356 = createSprite(355, 525, 15, 15);
var trap357 = createSprite(370, 525, 15, 15);
var trap358 = createSprite(385, 525, 15, 15);
var trap359 = createSprite(400, 525, 15, 15);
var trap360 = createSprite(415, 525, 15, 15);
var trap361 = createSprite(430, 525, 15, 15);
var trap362 = createSprite(445, 525, 15, 15);
var trap363 = createSprite(460, 525, 15, 15);
var trap364 = createSprite(475, 525, 15, 15);
var trap365 = createSprite(490, 525, 15, 15);
var trap366 = createSprite(70, 540, 15, 15);
var trap367 = createSprite(85, 540, 15, 15);
var trap368 = createSprite(100, 540, 15, 15);
var trap369 = createSprite(115, 540, 15, 15);
var trap370 = createSprite(130, 540, 15, 15);
var trap371 = createSprite(145, 540, 15, 15);
var trap372 = createSprite(160, 540, 15, 15);
var trap373 = createSprite(175, 540, 15, 15);
var trap374 = createSprite(190, 540, 15, 15);
var trap375 = createSprite(205, 540, 15, 15);
var trap376 = createSprite(220, 540, 15, 15);
var trap377 = createSprite(235, 540, 15, 15);
var trap378 = createSprite(250, 540, 15, 15);
var trap379 = createSprite(265, 540, 15, 15);
var trap380 = createSprite(280, 540, 15, 15);
var trap381 = createSprite(295, 540, 15, 15);
var trap382 = createSprite(310, 540, 15, 15);
var trap383 = createSprite(325, 540, 15, 15);
var trap384 = createSprite(340, 540, 15, 15);
var trap385 = createSprite(355, 540, 15, 15);
var trap386 = createSprite(370, 540, 15, 15);
var trap387 = createSprite(385, 540, 15, 15);
var trap388 = createSprite(400, 540, 15, 15);
var trap389 = createSprite(415, 540, 15, 15);
var trap390 = createSprite(430, 540, 15, 15);
var trap391 = createSprite(445, 540, 15, 15);
var trap392 = createSprite(460, 540, 15, 15);
var trap393 = createSprite(475, 540, 15, 15);
var trap394 = createSprite(490, 540, 15, 15);
var trap395 = createSprite(70, 555, 15, 15);
var trap396 = createSprite(85, 555, 15, 15);
var trap397 = createSprite(100, 555, 15, 15);
var trap398 = createSprite(115, 555, 15, 15);
var trap399 = createSprite(130, 555, 15, 15);
var trap400 = createSprite(145, 555, 15, 15);
var trap401 = createSprite(160, 555, 15, 15);
var trap402 = createSprite(175, 555, 15, 15);
var trap403 = createSprite(190, 555, 15, 15);
var trap404 = createSprite(205, 555, 15, 15);
var trap405 = createSprite(220, 555, 15, 15);
var trap406 = createSprite(235, 555, 15, 15);
var trap407 = createSprite(250, 555, 15, 15);
var trap408 = createSprite(265, 555, 15, 15);
var trap409 = createSprite(280, 555, 15, 15);
var trap410 = createSprite(295, 555, 15, 15);
var trap411 = createSprite(310, 555, 15, 15);
var trap412 = createSprite(325, 555, 15, 15);
var trap413 = createSprite(340, 555, 15, 15);
var trap414 = createSprite(355, 555, 15, 15);
var trap415 = createSprite(370, 555, 15, 15);
var trap416 = createSprite(385, 555, 15, 15);
var trap417 = createSprite(400, 555, 15, 15);
var trap418 = createSprite(415, 555, 15, 15);
var trap419 = createSprite(430, 555, 15, 15);
var trap420 = createSprite(445, 555, 15, 15);
var trap421 = createSprite(460, 555, 15, 15);
var trap422 = createSprite(475, 555, 15, 15);
var trap423 = createSprite(490, 555, 15, 15);
var trap424 = createSprite(70, 570, 15, 15);
var trap425 = createSprite(85, 570, 15, 15);
var trap426 = createSprite(100, 570, 15, 15);
var trap427 = createSprite(115, 570, 15, 15);
var trap428 = createSprite(130, 570, 15, 15);
var trap429 = createSprite(145, 570, 15, 15);
var trap430 = createSprite(160, 570, 15, 15);
var trap431 = createSprite(175, 570, 15, 15);
var trap432 = createSprite(190, 570, 15, 15);
var trap433 = createSprite(205, 570, 15, 15);
var trap434 = createSprite(220, 570, 15, 15);
var trap435 = createSprite(235, 570, 15, 15);
var trap436 = createSprite(250, 570, 15, 15);
var trap437 = createSprite(265, 570, 15, 15);
var trap438 = createSprite(280, 570, 15, 15);
var trap439 = createSprite(295, 570, 15, 15);
var trap440 = createSprite(310, 570, 15, 15);
var trap441 = createSprite(325, 570, 15, 15);
var trap442 = createSprite(340, 570, 15, 15);
var trap443 = createSprite(355, 570, 15, 15);
var trap444 = createSprite(370, 570, 15, 15);
var trap445 = createSprite(385, 570, 15, 15);
var trap446 = createSprite(400, 570, 15, 15);
var trap447 = createSprite(415, 570, 15, 15);
var trap448 = createSprite(430, 570, 15, 15);
var trap449 = createSprite(445, 570, 15, 15);
var trap450 = createSprite(460, 570, 15, 15);
var trap451 = createSprite(475, 570, 15, 15);
var trap452 = createSprite(490, 570, 15, 15);
var trap453 = createSprite(70, 585, 15, 15);
var trap454 = createSprite(85, 585, 15, 15);
var trap455 = createSprite(100, 585, 15, 15);
var trap456 = createSprite(115, 585, 15, 15);
var trap457 = createSprite(130, 585, 15, 15);
var trap458 = createSprite(145, 585, 15, 15);
var trap459 = createSprite(160, 585, 15, 15);
var trap460 = createSprite(175, 585, 15, 15);
var trap461 = createSprite(190, 585, 15, 15);
var trap462 = createSprite(205, 585, 15, 15);
var trap463 = createSprite(220, 585, 15, 15);
var trap464 = createSprite(235, 585, 15, 15);
var trap465 = createSprite(250, 585, 15, 15);
var trap466 = createSprite(265, 585, 15, 15);
var trap467 = createSprite(280, 585, 15, 15);
var trap468 = createSprite(295, 585, 15, 15);
var trap469 = createSprite(310, 585, 15, 15);
var trap470 = createSprite(325, 585, 15, 15);
var trap471 = createSprite(340, 585, 15, 15);
var trap472 = createSprite(355, 585, 15, 15);
var trap473 = createSprite(370, 585, 15, 15);
var trap474 = createSprite(385, 585, 15, 15);
var trap475 = createSprite(400, 585, 15, 15);
var trap476 = createSprite(415, 585, 15, 15);
var trap477 = createSprite(430, 585, 15, 15);
var trap478 = createSprite(445, 585, 15, 15);
var trap479 = createSprite(460, 585, 15, 15);
var trap480 = createSprite(475, 585, 15, 15);
var trap481 = createSprite(490, 585, 15, 15);
var trap482 = createSprite(525, 415, 15, 15);
var trap483 = createSprite(535, 415, 15, 15);
var trap484 = createSprite(550, 415, 15, 15);
var trap485 = createSprite(565, 415, 15, 15);
var trap486 = createSprite(580, 415, 15, 15);
var trap487 = createSprite(595, 415, 15, 15);
var trap488 = createSprite(610, 415, 15, 15);
var trap489 = createSprite(625, 415, 15, 15);
var trap490 = createSprite(625, 415, 15, 15);
var trap491 = createSprite(625, 415, 15, 15);
var trap492 = createSprite(640, 415, 15, 15);
var trap493 = createSprite(655, 415, 15, 15);
var trap494 = createSprite(670, 415, 15, 15);
var trap495 = createSprite(685, 415, 15, 15);
var trap496 = createSprite(700, 415, 15, 15);
var trap497 = createSprite(715, 415, 15, 15);
var trap498 = createSprite(730, 415, 15, 15);
var trap499 = createSprite(745, 415, 15, 15);
var trap500 = createSprite(760, 415, 15, 15);
var trap501 = createSprite(775, 415, 15, 15);
var trap502 = createSprite(790, 415, 15, 15);
var trap503 = createSprite(805, 415, 15, 15);
var trap504 = createSprite(820, 415, 15, 15);
var trap505 = createSprite(835, 415, 15, 15);
var trap506 = createSprite(850, 415, 15, 15);
var trap507 = createSprite(865, 415, 15, 15);
var trap508 = createSprite(880, 415, 15, 15);
var trap509 = createSprite(895, 415, 15, 15);
var trap510 = createSprite(910, 415, 15, 15);
var trap511 = createSprite(925, 415, 15, 15);
var trap512 = createSprite(940, 415, 15, 15);
var trap513 = createSprite(955, 415, 15, 15);
var trap514 = createSprite(970, 415, 15, 15);
var trap515 = createSprite(985, 415, 15, 15);
var trap516 = createSprite(1000, 415, 15, 15);
var trap517 = createSprite(1015, 415, 15, 15);
var trap518 = createSprite(1030, 415, 15, 15);
var trap519 = createSprite(1045, 415, 15, 15);
var trap520 = createSprite(1060, 415, 15, 15);
var trap521 = createSprite(1075, 415, 15, 15);
var trap522 = createSprite(1090, 415, 15, 15);
var trap523 = createSprite(1105, 415, 15, 15);
var trap524 = createSprite(1120, 415, 15, 15);
var trap525 = createSprite(1135, 415, 15, 15);
var trap526 = createSprite(1150, 415, 15, 15);
var trap527 = createSprite(1165, 415, 15, 15);
var trap528 = createSprite(1180, 415, 15, 15);
var trap529 = createSprite(1195, 415, 15, 15);
var trap530 = createSprite(1210, 415, 15, 15);
var trap531 = createSprite(1225, 415, 15, 15);
var trap532 = createSprite(1240, 415, 15, 15);
var trap533 = createSprite(1255, 415, 15, 15);
var trap534 = createSprite(525, 430, 15, 15);
var trap535 = createSprite(535, 430, 15, 15);
var trap536 = createSprite(550, 430, 15, 15);
var trap537 = createSprite(565, 430, 15, 15);
var trap538 = createSprite(580, 430, 15, 15);
var trap539 = createSprite(595, 430, 15, 15);
var trap540 = createSprite(610, 430, 15, 15);
var trap541 = createSprite(625, 430, 15, 15);
var trap542 = createSprite(640, 430, 15, 15);
var trap543 = createSprite(655, 430, 15, 15);
var trap544 = createSprite(670, 430, 15, 15);
var trap545 = createSprite(685, 430, 15, 15);
var trap546 = createSprite(700, 430, 15, 15);
var trap547 = createSprite(715, 430, 15, 15);
var trap548 = createSprite(730, 430, 15, 15);
var trap549 = createSprite(745, 430, 15, 15);
var trap550 = createSprite(760, 430, 15, 15);
var trap551 = createSprite(775, 430, 15, 15);
var trap552 = createSprite(790, 430, 15, 15);
var trap553 = createSprite(805, 430, 15, 15);
var trap554 = createSprite(820, 430, 15, 15);
var trap555 = createSprite(835, 430, 15, 15);
var trap556 = createSprite(850, 430, 15, 15);
var trap557 = createSprite(865, 430, 15, 15);
var trap558 = createSprite(880, 430, 15, 15);
var trap559 = createSprite(895, 430, 15, 15);
var trap560 = createSprite(910, 430, 15, 15);
var trap561 = createSprite(925, 430, 15, 15);
var trap562 = createSprite(940, 430, 15, 15);
var trap563 = createSprite(955, 430, 15, 15);
var trap564 = createSprite(970, 430, 15, 15);
var trap565 = createSprite(985, 430, 15, 15);
var trap566 = createSprite(1000, 430, 15, 15);
var trap567 = createSprite(1015, 430, 15, 15);
var trap568 = createSprite(1030, 430, 15, 15);
var trap569 = createSprite(1045, 430, 15, 15);
var trap570 = createSprite(1060, 430, 15, 15);
var trap571 = createSprite(1075, 430, 15, 15);
var trap572 = createSprite(1090, 430, 15, 15);
var trap573 = createSprite(1105, 430, 15, 15);
var trap574 = createSprite(1120, 430, 15, 15);
var trap575 = createSprite(1135, 430, 15, 15);
var trap576 = createSprite(1150, 430, 15, 15);
var trap577 = createSprite(1165, 430, 15, 15);
var trap578 = createSprite(1180, 430, 15, 15);
var trap579 = createSprite(1195, 430, 15, 15);
var trap580 = createSprite(1210, 430, 15, 15);
var trap581 = createSprite(1225, 430, 15, 15);
var trap582 = createSprite(1240, 430, 15, 15);
var trap583 = createSprite(1255, 430, 15, 15);
var trap584 = createSprite(525, 445, 15, 15);
var trap585 = createSprite(535, 445, 15, 15);
var trap586 = createSprite(550, 445, 15, 15);
var trap587 = createSprite(565, 445, 15, 15);
var trap588 = createSprite(580, 445, 15, 15);
var trap589 = createSprite(595, 445, 15, 15);
var trap590 = createSprite(610, 445, 15, 15);
var trap591 = createSprite(625, 445, 15, 15);
var trap592 = createSprite(640, 445, 15, 15);
var trap593 = createSprite(655, 445, 15, 15);
var trap594 = createSprite(670, 445, 15, 15);
var trap595 = createSprite(685, 445, 15, 15);
var trap596 = createSprite(700, 445, 15, 15);
var trap597 = createSprite(715, 445, 15, 15);
var trap598 = createSprite(730, 445, 15, 15);
var trap599 = createSprite(745, 445, 15, 15);
var trap600 = createSprite(760, 445, 15, 15);
var trap601 = createSprite(775, 445, 15, 15);
var trap602 = createSprite(790, 445, 15, 15);
var trap603 = createSprite(805, 445, 15, 15);
var trap604 = createSprite(820, 445, 15, 15);
var trap605 = createSprite(835, 445, 15, 15);
var trap606 = createSprite(850, 445, 15, 15);
var trap607 = createSprite(865, 445, 15, 15);
var trap608 = createSprite(880, 445, 15, 15);
var trap609 = createSprite(895, 445, 15, 15);
var trap610 = createSprite(910, 445, 15, 15);
var trap611 = createSprite(925, 445, 15, 15);
var trap612 = createSprite(940, 445, 15, 15);
var trap613 = createSprite(955, 445, 15, 15);
var trap614 = createSprite(970, 445, 15, 15);
var trap615 = createSprite(985, 445, 15, 15);
var trap616 = createSprite(1000, 445, 15, 15);
var trap617 = createSprite(1015, 445, 15, 15);
var trap618 = createSprite(1030, 445, 15, 15);
var trap619 = createSprite(1045, 445, 15, 15);
var trap620 = createSprite(1060, 445, 15, 15);
var trap621 = createSprite(1075, 445, 15, 15);
var trap622 = createSprite(1090, 445, 15, 15);
var trap623 = createSprite(1105, 445, 15, 15);
var trap624 = createSprite(1120, 445, 15, 15);
var trap625 = createSprite(1135, 445, 15, 15);
var trap626 = createSprite(1150, 445, 15, 15);
var trap627 = createSprite(1165, 445, 15, 15);
var trap628 = createSprite(1180, 445, 15, 15);
var trap629 = createSprite(1195, 445, 15, 15);
var trap630 = createSprite(1210, 445, 15, 15);
var trap631 = createSprite(1225, 445, 15, 15);
var trap632 = createSprite(1240, 445, 15, 15);
var trap633 = createSprite(1255, 445, 15, 15);
var trap634 = createSprite(525, 460, 15, 15);
var trap635 = createSprite(535, 460, 15, 15);
var trap636 = createSprite(550, 460, 15, 15);
var trap637 = createSprite(565, 460, 15, 15);
var trap638 = createSprite(580, 460, 15, 15);
var trap639 = createSprite(595, 460, 15, 15);
var trap640 = createSprite(610, 460, 15, 15);
var trap641 = createSprite(625, 460, 15, 15);
var trap642 = createSprite(640, 460, 15, 15);
var trap643 = createSprite(655, 460, 15, 15);
var trap643 = createSprite(670, 460, 15, 15);
var trap644 = createSprite(685, 460, 15, 15);
var trap645 = createSprite(700, 460, 15, 15);
var trap646 = createSprite(715, 460, 15, 15);
var trap647 = createSprite(730, 460, 15, 15);
var trap648 = createSprite(745, 460, 15, 15);
var trap649 = createSprite(760, 460, 15, 15);
var trap650 = createSprite(775, 460, 15, 15);
var trap651 = createSprite(790, 460, 15, 15);
var trap652 = createSprite(805, 460, 15, 15);
var trap653 = createSprite(820, 460, 15, 15);
var trap654 = createSprite(835, 460, 15, 15);
var trap655 = createSprite(850, 460, 15, 15);
var trap656 = createSprite(865, 460, 15, 15);
var trap657 = createSprite(880, 460, 15, 15);
var trap658 = createSprite(895, 460, 15, 15);
var trap659 = createSprite(910, 460, 15, 15);
var trap660 = createSprite(925, 460, 15, 15);
var trap661 = createSprite(940, 460, 15, 15);
var trap662 = createSprite(955, 460, 15, 15);
var trap663 = createSprite(970, 460, 15, 15);
var trap664 = createSprite(985, 460, 15, 15);
var trap665 = createSprite(1000, 460, 15, 15);
var trap666 = createSprite(1015, 460, 15, 15);
var trap667 = createSprite(1030, 460, 15, 15);
var trap668 = createSprite(1045, 460, 15, 15);
var trap669 = createSprite(1060, 460, 15, 15);
var trap670 = createSprite(1075, 460, 15, 15);
var trap671 = createSprite(1090, 460, 15, 15);
var trap672 = createSprite(1105, 460, 15, 15);
var trap673 = createSprite(1120, 460, 15, 15);
var trap674 = createSprite(1135, 460, 15, 15);
var trap675 = createSprite(1150, 460, 15, 15);
var trap676 = createSprite(1165, 460, 15, 15);
var trap677 = createSprite(1180, 460, 15, 15);
var trap678 = createSprite(1195, 460, 15, 15);
var trap679 = createSprite(1210, 460, 15, 15);
var trap680 = createSprite(1225, 460, 15, 15);
var trap681 = createSprite(1240, 460, 15, 15);
var trap682 = createSprite(1255, 460, 15, 15);
var trap683 = createSprite(525, 475, 15, 15);
var trap684 = createSprite(535, 475, 15, 15);
var trap685 = createSprite(550, 475, 15, 15);
var trap686 = createSprite(565, 475, 15, 15);
var trap687 = createSprite(580, 475, 15, 15);
var trap688 = createSprite(595, 475, 15, 15);
var trap689 = createSprite(610, 475, 15, 15);
var trap690 = createSprite(625, 475, 15, 15);
var trap691 = createSprite(640, 475, 15, 15);
var trap692 = createSprite(655, 475, 15, 15);
var trap693 = createSprite(670, 475, 15, 15);
var trap694 = createSprite(685, 475, 15, 15);
var trap695 = createSprite(700, 475, 15, 15);
var trap696 = createSprite(715, 475, 15, 15);
var trap697 = createSprite(730, 475, 15, 15);
var trap698 = createSprite(745, 475, 15, 15);
var trap699 = createSprite(760, 475, 15, 15);
var trap700 = createSprite(775, 475, 15, 15);
var trap701 = createSprite(790, 475, 15, 15);
var trap702 = createSprite(805, 475, 15, 15);
var trap703 = createSprite(820, 475, 15, 15);
var trap704 = createSprite(835, 475, 15, 15);
var trap705 = createSprite(850, 475, 15, 15);
var trap706 = createSprite(865, 475, 15, 15);
var trap707 = createSprite(880, 475, 15, 15);
var trap708 = createSprite(895, 475, 15, 15);
var trap709 = createSprite(910, 475, 15, 15);
var trap711 = createSprite(925, 475, 15, 15);
var trap712 = createSprite(940, 475, 15, 15);
var trap713 = createSprite(955, 475, 15, 15);
var trap714 = createSprite(970, 475, 15, 15);
var trap715 = createSprite(985, 475, 15, 15);
var trap716 = createSprite(1000, 475, 15, 15);
var trap717 = createSprite(1015, 475, 15, 15);
var trap718 = createSprite(1030, 475, 15, 15);
var trap719 = createSprite(1045, 475, 15, 15);
var trap720 = createSprite(1060, 475, 15, 15);
var trap721 = createSprite(1075, 475, 15, 15);
var trap722 = createSprite(1090, 475, 15, 15);
var trap723 = createSprite(1105, 475, 15, 15);
var trap724 = createSprite(1120, 475, 15, 15);
var trap725 = createSprite(1135, 475, 15, 15);
var trap726 = createSprite(1150, 475, 15, 15);
var trap727 = createSprite(1165, 475, 15, 15);
var trap728 = createSprite(1180, 475, 15, 15);
var trap729 = createSprite(1195, 475, 15, 15);
var trap730 = createSprite(1210, 475, 15, 15);
var trap731 = createSprite(1225, 475, 15, 15);
var trap732 = createSprite(1240, 475, 15, 15);
var trap733 = createSprite(1255, 475, 15, 15);
var trap734 = createSprite(525, 490, 15, 15);
var trap735 = createSprite(540, 490, 15, 15);
var trap736 = createSprite(555, 490, 15, 15);
var trap737 = createSprite(570, 490, 15, 15);
var trap738 = createSprite(585, 490, 15, 15);
var trap739 = createSprite(600, 490, 15, 15);
var trap740 = createSprite(610, 490, 15, 15);
var trap741 = createSprite(625, 490, 15, 15);
var trap742 = createSprite(640, 490, 15, 15);
var trap743 = createSprite(655, 490, 15, 15);
var trap744 = createSprite(670, 490, 15, 15);
var trap745 = createSprite(685, 490, 15, 15);
var trap746 = createSprite(700, 490, 15, 15);
var trap747 = createSprite(715, 490, 15, 15);
var trap748 = createSprite(730, 490, 15, 15);
var trap749 = createSprite(745, 490, 15, 15);
var trap750 = createSprite(760, 490, 15, 15);
var trap751 = createSprite(775, 490, 15, 15);
var trap752 = createSprite(790, 490, 15, 15);
var trap753 = createSprite(805, 490, 15, 15);
var trap754 = createSprite(820, 490, 15, 15);
var trap755 = createSprite(835, 490, 15, 15);
var trap756 = createSprite(850, 490, 15, 15);
var trap757 = createSprite(865, 490, 15, 15);
var trap758 = createSprite(880, 490, 15, 15);
var trap759 = createSprite(895, 490, 15, 15);
var trap760 = createSprite(910, 490, 15, 15);
var trap761 = createSprite(925, 490, 15, 15);
var trap762 = createSprite(940, 490, 15, 15);
var trap763 = createSprite(955, 490, 15, 15);
var trap764 = createSprite(970, 490, 15, 15);
var trap765 = createSprite(985, 490, 15, 15);
var trap766 = createSprite(1000, 490, 15, 15);
var trap767 = createSprite(1015, 490, 15, 15);
var trap768 = createSprite(1030, 490, 15, 15);
var trap769 = createSprite(1045, 490, 15, 15);
var trap770 = createSprite(1060, 490, 15, 15);
var trap771 = createSprite(1075, 490, 15, 15);
var trap772 = createSprite(1090, 490, 15, 15);
var trap773 = createSprite(1105, 490, 15, 15);
var trap774 = createSprite(1120, 490, 15, 15);
var trap775 = createSprite(1135, 490, 15, 15);
var trap776 = createSprite(1150, 490, 15, 15);
var trap777 = createSprite(1165, 490, 15, 15);
var trap778 = createSprite(1180, 490, 15, 15);
var trap779 = createSprite(1195, 490, 15, 15);
var trap780 = createSprite(1210, 490, 15, 15);
var trap781 = createSprite(1225, 490, 15, 15);
var trap782 = createSprite(1240, 490, 15, 15);
var trap783 = createSprite(1255, 490, 15, 15);
var trap784 = createSprite(525, 505, 15, 15);
var trap785 = createSprite(540, 505, 15, 15);
var trap786 = createSprite(555, 505, 15, 15);
var trap787 = createSprite(570, 505, 15, 15);
var trap788 = createSprite(585, 505, 15, 15);
var trap789 = createSprite(600, 505, 15, 15);
var trap790 = createSprite(615, 505, 15, 15);
var trap791 = createSprite(630, 505, 15, 15);
var trap792 = createSprite(645, 505, 15, 15);
var trap793 = createSprite(660, 505, 15, 15);
var trap794 = createSprite(675, 505, 15, 15);
var trap795 = createSprite(690, 505, 15, 15);
var trap796 = createSprite(705, 505, 15, 15);
var trap797 = createSprite(720, 505, 15, 15);
var trap798 = createSprite(735, 505, 15, 15);
var trap799 = createSprite(750, 505, 15, 15);
var trap801 = createSprite(765, 505, 15, 15);
var trap802 = createSprite(780, 505, 15, 15);
var trap803 = createSprite(795, 505, 15, 15);
var trap804 = createSprite(810, 505, 15, 15);
var trap805 = createSprite(825, 505, 15, 15);
var trap806 = createSprite(840, 505, 15, 15);
var trap807 = createSprite(855, 505, 15, 15);
var trap808 = createSprite(870, 505, 15, 15);
var trap809 = createSprite(885, 505, 15, 15);
var trap820 = createSprite(900, 505, 15, 15);
var trap821 = createSprite(915, 505, 15, 15);
var trap822 = createSprite(930, 505, 15, 15);
var trap823 = createSprite(945, 505, 15, 15);
var trap824 = createSprite(960, 505, 15, 15);
var trap825 = createSprite(975, 505, 15, 15);
var trap826 = createSprite(990, 505, 15, 15);
var trap827 = createSprite(1005, 505, 15, 15);
var trap828 = createSprite(1020, 505, 15, 15);
var trap829 = createSprite(1035, 505, 15, 15);
var trap830 = createSprite(1050, 505, 15, 15);
var trap831 = createSprite(1065, 505, 15, 15);
var trap832 = createSprite(1080, 505, 15, 15);
var trap833 = createSprite(1095, 505, 15, 15);
var trap834 = createSprite(1110, 505, 15, 15);
var trap835 = createSprite(1125, 505, 15, 15);
var trap836 = createSprite(1140, 505, 15, 15);
var trap837 = createSprite(1155, 505, 15, 15);
var trap838 = createSprite(1170, 505, 15, 15);
var trap839 = createSprite(1185, 505, 15, 15);
var trap840 = createSprite(1200, 505, 15, 15);
var trap841 = createSprite(1215, 505, 15, 15);
var trap842 = createSprite(1230, 505, 15, 15);
var trap843 = createSprite(1245, 505, 15, 15);
var trap844 = createSprite(1255, 505, 15, 15);
var trap845 = createSprite(525, 520, 15, 15);
var trap846 = createSprite(540, 520, 15, 15);
var trap847 = createSprite(555, 520, 15, 15);
var trap848 = createSprite(570, 520, 15, 15);
var trap849 = createSprite(585, 520, 15, 15);
var trap850 = createSprite(600, 520, 15, 15);
var trap851 = createSprite(615, 520, 15, 15);
var trap852 = createSprite(630, 520, 15, 15);
var trap853 = createSprite(645, 520, 15, 15);
var trap854 = createSprite(660, 520, 15, 15);
var trap855 = createSprite(675, 520, 15, 15);
var trap856 = createSprite(690, 520, 15, 15);
var trap857 = createSprite(705, 520, 15, 15);
var trap858 = createSprite(720, 520, 15, 15);
var trap859 = createSprite(735, 520, 15, 15);
var trap860 = createSprite(750, 520, 15, 15);
var trap861 = createSprite(765, 520, 15, 15);
var trap862 = createSprite(780, 520, 15, 15);
var trap863 = createSprite(795, 520, 15, 15);
var trap864 = createSprite(810, 520, 15, 15);
var trap865 = createSprite(825, 520, 15, 15);
var trap866 = createSprite(840, 520, 15, 15);
var trap867 = createSprite(855, 520, 15, 15);
var trap867 = createSprite(870, 520, 15, 15);
var trap868 = createSprite(885, 520, 15, 15);
var trap869 = createSprite(900, 520, 15, 15);
var trap870 = createSprite(915, 520, 15, 15);
var trap871 = createSprite(930, 520, 15, 15);
var trap872 = createSprite(945, 520, 15, 15);
var trap873 = createSprite(960, 520, 15, 15);
var trap874 = createSprite(975, 520, 15, 15);
var trap875 = createSprite(990, 520, 15, 15);
var trap876 = createSprite(1005, 520, 15, 15);
var trap877 = createSprite(1020, 520, 15, 15);
var trap878 = createSprite(1035, 520, 15, 15);
var trap879 = createSprite(1065, 540, 15, 15);
var trap880 = createSprite(1080, 540, 15, 15);
var trap881 = createSprite(1095, 540, 15, 15);
var trap882 = createSprite(1110, 540, 15, 15);
var trap883 = createSprite(1125, 540, 15, 15);
var trap884 = createSprite(1140, 540, 15, 15);
var trap885 = createSprite(1155, 540, 15, 15);
var trap886 = createSprite(1170, 540, 15, 15);
var trap887 = createSprite(1185, 540, 15, 15);
var trap888 = createSprite(1200, 540, 15, 15);
var trap889 = createSprite(1215, 540, 15, 15);
var trap890 = createSprite(1230, 540, 15, 15);
var trap891 = createSprite(1245, 540, 15, 15);
var trap892 = createSprite(1255, 540, 15, 15);
var trap893 = createSprite(525, 535, 15, 15);
var trap894 = createSprite(540, 535, 15, 15);
var trap895 = createSprite(555, 535, 15, 15);
var trap896 = createSprite(570, 535, 15, 15);
var trap897 = createSprite(585, 535, 15, 15);
var trap898 = createSprite(600, 535, 15, 15);
var trap899 = createSprite(615, 535, 15, 15);
var trap900 = createSprite(630, 535, 15, 15);
var trap901 = createSprite(645, 535, 15, 15);
var trap902 = createSprite(660, 535, 15, 15);
var trap903 = createSprite(675, 535, 15, 15);
var trap904 = createSprite(690, 535, 15, 15);
var trap905 = createSprite(705, 535, 15, 15);
var trap906 = createSprite(720, 535, 15, 15);
var trap907 = createSprite(735, 535, 15, 15);
var trap908 = createSprite(750, 535, 15, 15);
var trap909 = createSprite(765, 535, 15, 15);
var trap910 = createSprite(780, 535, 15, 15);
var trap911 = createSprite(795, 535, 15, 15);
var trap912 = createSprite(810, 535, 15, 15);
var trap913 = createSprite(825, 535, 15, 15);
var trap914 = createSprite(840, 535, 15, 15);
var trap915 = createSprite(855, 535, 15, 15);
var trap916 = createSprite(870, 535, 15, 15);
var trap917 = createSprite(885, 535, 15, 15);
var trap918 = createSprite(900, 535, 15, 15);
var trap919 = createSprite(915, 535, 15, 15);
var trap920 = createSprite(930, 535, 15, 15);
var trap921 = createSprite(945, 535, 15, 15);
var trap922 = createSprite(960, 535, 15, 15);
var trap923 = createSprite(975, 535, 15, 15);
var trap924 = createSprite(990, 535, 15, 15);
var trap925 = createSprite(1005, 535, 15, 15);
var trap926 = createSprite(1020, 535, 15, 15);
var trap927 = createSprite(1035, 535, 15, 15);
var trap928 = createSprite(1065, 555, 15, 15);
var trap929 = createSprite(1080, 555, 15, 15);
var trap930 = createSprite(1095, 555, 15, 15);
var trap931 = createSprite(1110, 555, 15, 15);
var trap932 = createSprite(1125, 555, 15, 15);
var trap933 = createSprite(1140, 555, 15, 15);
var trap934 = createSprite(1155, 555, 15, 15);
var trap935 = createSprite(1170, 555, 15, 15);
var trap936 = createSprite(1185, 555, 15, 15);
var trap937 = createSprite(1200, 555, 15, 15);
var trap938 = createSprite(1215, 555, 15, 15);
var trap939 = createSprite(1230, 555, 15, 15);
var trap940 = createSprite(1245, 555, 15, 15);
var trap941 = createSprite(1255, 555, 15, 15);
var trap942 = createSprite(505, 570, 15, 15);
var trap943 = createSprite(520, 570, 15, 15);
var trap944 = createSprite(535, 570, 15, 15);
var trap945 = createSprite(550, 570, 15, 15);
var trap946 = createSprite(565, 570, 15, 15);
var trap947 = createSprite(580, 570, 15, 15);
var trap948 = createSprite(595, 570, 15, 15);
var trap949 = createSprite(610, 570, 15, 15);
var trap950 = createSprite(625, 570, 15, 15);
var trap951 = createSprite(640, 570, 15, 15);
var trap952 = createSprite(655, 570, 15, 15);
var trap953 = createSprite(670, 570, 15, 15);
var trap954 = createSprite(685, 570, 15, 15);
var trap955 = createSprite(700, 570, 15, 15);
var trap956 = createSprite(715, 570, 15, 15);
var trap957 = createSprite(730, 570, 15, 15);
var trap958 = createSprite(745, 570, 15, 15);
var trap959 = createSprite(760, 570, 15, 15);
var trap960 = createSprite(775, 570, 15, 15);
var trap961 = createSprite(790, 570, 15, 15);
var trap962 = createSprite(805, 570, 15, 15);
var trap963 = createSprite(820, 570, 15, 15);
var trap964 = createSprite(835, 570, 15, 15);
var trap965 = createSprite(850, 570, 15, 15);
var trap966 = createSprite(865, 570, 15, 15);
var trap967 = createSprite(880, 570, 15, 15);
var trap968 = createSprite(895, 570, 15, 15);
var trap969 = createSprite(910, 570, 15, 15);
var trap970 = createSprite(925, 570, 15, 15);
var trap971 = createSprite(940, 570, 15, 15);
var trap972 = createSprite(955, 570, 15, 15);
var trap973 = createSprite(970, 570, 15, 15);
var trap974 = createSprite(985, 570, 15, 15);
var trap975 = createSprite(1000, 570, 15, 15);
var trap976 = createSprite(1015, 570, 15, 15);
var trap977 = createSprite(1030, 570, 15, 15);
var trap978 = createSprite(1045, 570, 15, 15);
var trap979 = createSprite(1060, 570, 15, 15);
var trap980 = createSprite(1075, 570, 15, 15);
var trap981 = createSprite(1090, 570, 15, 15);
var trap982 = createSprite(1105, 570, 15, 15);
var trap983 = createSprite(1120, 570, 15, 15);
var trap984 = createSprite(1135, 570, 15, 15);
var trap985 = createSprite(1150, 570, 15, 15);
var trap986 = createSprite(1165, 570, 15, 15);
var trap987 = createSprite(1180, 570, 15, 15);
var trap988 = createSprite(1195, 570, 15, 15);
var trap989 = createSprite(1210, 570, 15, 15);
var trap990 = createSprite(1225, 570, 15, 15);
var trap991 = createSprite(1240, 570, 15, 15);
var trap992 = createSprite(1255, 570, 15, 15);
var trap993 = createSprite(505, 585, 15, 15);
var trap994 = createSprite(520, 585, 15, 15);
var trap995 = createSprite(535, 585, 15, 15);
var trap996 = createSprite(550, 585, 15, 15);
var trap997 = createSprite(565, 585, 15, 15);
var trap998 = createSprite(580, 585, 15, 15);
var trap999 = createSprite(595, 585, 15, 15);
var trap1000 = createSprite(610, 585, 15, 15);
var trap1001 = createSprite(625, 585, 15, 15);
var trap1002 = createSprite(640, 585, 15, 15);
var trap1003 = createSprite(655, 585, 15, 15);
var trap1004 = createSprite(670, 585, 15, 15);
var trap1005 = createSprite(685, 585, 15, 15);
var trap1006 = createSprite(700, 585, 15, 15);
var trap1007 = createSprite(715, 585, 15, 15);
var trap1008 = createSprite(730, 585, 15, 15);
var trap1009 = createSprite(745, 585, 15, 15);
var trap1010 = createSprite(760, 585, 15, 15);
var trap1011 = createSprite(775, 585, 15, 15);
var trap1012 = createSprite(790, 585, 15, 15);
var trap1013 = createSprite(805, 585, 15, 15);
var trap1014 = createSprite(820, 585, 15, 15);
var trap1015 = createSprite(835, 585, 15, 15);
var trap1016 = createSprite(850, 585, 15, 15);
var trap1017 = createSprite(865, 585, 15, 15);
var trap1018 = createSprite(880, 585, 15, 15);
var trap1019= createSprite(895, 585, 15, 15);
var trap1020= createSprite(910, 585, 15, 15);
var trap1021= createSprite(925, 585, 15, 15);
var trap1022= createSprite(940, 585, 15, 15);
var trap1023= createSprite(955, 585, 15, 15);
var trap1024= createSprite(970, 585, 15, 15);
var trap1025= createSprite(985, 585, 15, 15);
var trap1026= createSprite(1000, 585, 15, 15);
var trap1027= createSprite(1015, 585, 15, 15);
var trap1028= createSprite(1030, 585, 15, 15);
var trap1029= createSprite(1045, 585, 15, 15);
var trap1030= createSprite(1060, 585, 15, 15);
var trap1031= createSprite(1075, 585, 15, 15);
var trap1032= createSprite(1090, 585, 15, 15);
var trap1033= createSprite(1105, 585, 15, 15);
var trap1034= createSprite(1120, 585, 15, 15);
var trap1035= createSprite(1135, 585, 15, 15);
var trap1036= createSprite(1150, 585, 15, 15);
var trap1037= createSprite(1165, 585, 15, 15);
var trap1038= createSprite(1180, 585, 15, 15);
var trap1039= createSprite(1195, 585, 15, 15);
var trap1040= createSprite(1210, 585, 15, 15);
var trap1041= createSprite(1225, 585, 15, 15);
var trap1042= createSprite(1240, 585, 15, 15);
var trap1043= createSprite(1255, 585, 15, 15);
//
var trap1044= createSprite(1105, 765, 15, 15);
var trap1045= createSprite(1285, 655, 15, 15);
var trap1046= createSprite(1140, 630, 15, 15);
var trap1047= createSprite(1250, 790, 15, 15);
//
var trap1048= createSprite(1030, 790, 15, 15);
var trap1049= createSprite(980, 630, 15, 15);
var trap1050= createSprite(930, 790, 15, 15);
var trap1051= createSprite(880, 630, 15, 15);
var trap1052= createSprite(830, 790, 15, 15);
var trap1053= createSprite(780, 630, 15, 15);
var trap1054= createSprite(730, 790, 15, 15);
//
var trap1055= createSprite(630, 790, 15, 15);
var trap1056= createSprite(580, 630, 15, 15);
var trap1057= createSprite(530, 790, 15, 15);
var trap1058= createSprite(480, 630, 15, 15);
var trap1059= createSprite(430, 790, 15, 15);
var trap1060= createSprite(380, 630, 15, 15);
var trap1061= createSprite(330, 790, 15, 15);





  trapGroups.add(trap1)
  trapGroups2.add(trap2);
  trapGroups.add(trap3);
  trapGroups2.add(trap4);
  trapGroups.add(trap5);
  trapGroups2.add(trap6);
  trapGroups.add(trap7);
  trapGroups2.add(trap8);
  trapGroups.add(trap9);
  trapGroups2.add(trap10);
  trapGroups.add(trap11);
  trapGroups2.add(trap12);
  trapGroups.add(trap13);
  trapGroups2.add(trap14);
  trapGroups.add(trap15);
  trapGroups2.add(trap16);
  trapGroups.add(trap17);
  trapGroups2.add(trap18);
  trapGroups.add(trap19);
  trapGroups2.add(trap20);
  trapGroups.add(trap21);
  trapGroups2.add(trap22);
  trapGroups.add(trap23);
  trapGroups2.add(trap24);
  trapGroups.add(trap25);
  trapGroups2.add(trap26);
  trapGroups.add(trap27);
  trapGroups2.add(trap28);
  trapGroups.add(trap29);

  trapGroups3.add(trap30);
  trapGroups3.add(trap31);
  trapGroups3.add(trap32);
  trapGroups3.add(trap33);
  trapGroups3.add(trap34);
  trapGroups3.add(trap35);
  trapGroups3.add(trap36);
  trapGroups3.add(trap37);

  //trapGroups4.add(trap162)
  //trapGroups4.add(trap163)
  //trapGroups4.add(trap164)
  //trapGroups4.add(trap165)
  //trapGroups4.add(trap166)
  //trapGroups4.add(trap167)
  //trapGroups4.add(trap168)
  //trapGroups4.add(trap169)
  //trapGroups4.add(trap169)
  //trapGroups4.add(trap170)
  //trapGroups4.add(trap171)
  //trapGroups4.add(trap172)
  //trapGroups4.add(trap173)
  //trapGroups4.add(trap174)
  //trapGroups4.add(trap175)
  //trapGroups4.add(trap176)
  //trapGroups4.add(trap177)
  //trapGroups4.add(trap178)
  //trapGroups4.add(trap179)
  //trapGroups4.add(trap180)
  //trapGroups4.add(trap181)
  //trapGroups4.add(trap182)
  //trapGroups4.add(trap183)
  //trapGroups4.add(trap184)
  //trapGroups4.add(trap185)
  //trapGroups4.add(trap186)
  //trapGroups4.add(trap187)
  //trapGroups4.add(trap188)
  //trapGroups4.add(trap189)
  //trapGroups4.add(trap190)
  //trapGroups4.add(trap191)
  //trapGroups4.add(trap192)
  //trapGroups4.add(trap193)
  //trapGroups4.add(trap194)
  //trapGroups4.add(trap195)
  //trapGroups4.add(trap196)
  //trapGroups4.add(trap197)
  //trapGroups4.add(trap198)
  //trapGroups4.add(trap199)
  //trapGroups4.add(trap200)
  //trapGroups4.add(trap201)
  //trapGroups4.add(trap202)
  //trapGroups4.add(trap203)
  //trapGroups4.add(trap204)
  //trapGroups4.add(trap205)
  //trapGroups4.add(trap206)
  //trapGroups4.add(trap207)
  //trapGroups4.add(trap208)
  //trapGroups4.add(trap209)
  //trapGroups4.add(trap210)
  //trapGroups4.add(trap211)
  //trapGroups4.add(trap212)
  //trapGroups4.add(trap212)
  //trapGroups4.add(trap213)
  //trapGroups4.add(trap214)
  //trapGroups4.add(trap215)
  //trapGroups4.add(trap216)
  //trapGroups4.add(trap217)
  //trapGroups4.add(trap218)
  //trapGroups4.add(trap219)
  //trapGroups4.add(trap220)
  //trapGroups4.add(trap221)
  //trapGroups4.add(trap222)
  //trapGroups4.add(trap223)
  //trapGroups4.add(trap224)
  //trapGroups4.add(trap225)
  //trapGroups4.add(trap226)
  //trapGroups4.add(trap227)
  //trapGroups4.add(trap228)
  //trapGroups4.add(trap229)
  //trapGroups4.add(trap230)
  //trapGroups4.add(trap231)
  //trapGroups4.add(trap232)
  //trapGroups4.add(trap233)
  //trapGroups4.add(trap234)
  //trapGroups4.add(trap235)
  //trapGroups4.add(trap236)
  //trapGroups4.add(trap237)
  //trapGroups4.add(trap238)
  //trapGroups4.add(trap239)
  //trapGroups4.add(trap240)
  //trapGroups4.add(trap241)
  //trapGroups4.add(trap242)
  //trapGroups4.add(trap243)
  //trapGroups4.add(trap244)
  //trapGroups4.add(trap245)
  //trapGroups4.add(trap246)
  //trapGroups4.add(trap247)
  //trapGroups4.add(trap248)
  //trapGroups4.add(trap249)
  //trapGroups4.add(trap250)
  //trapGroups4.add(trap251)
  //trapGroups4.add(trap252)
  //trapGroups4.add(trap253)
  //trapGroups4.add(trap254)
  //trapGroups4.add(trap255)
  //trapGroups4.add(trap256)
  //trapGroups4.add(trap257)
  //trapGroups4.add(trap258)
  //trapGroups4.add(trap259)
  //trapGroups4.add(trap260)
  //trapGroups4.add(trap261)
  //trapGroups4.add(trap262)
  //trapGroups4.add(trap263)
  //trapGroups4.add(trap264)
  //trapGroups4.add(trap265)
  //trapGroups4.add(trap266)
  //trapGroups4.add(trap267)
  //trapGroups4.add(trap268)
  //trapGroups4.add(trap269)
  //trapGroups4.add(trap270)
  //trapGroups4.add(trap271)
  //trapGroups4.add(trap272)
  //trapGroups4.add(trap273)
  //trapGroups4.add(trap274)
  //trapGroups4.add(trap275)
  //trapGroups4.add(trap276)
  //trapGroups4.add(trap277)
  //trapGroups4.add(trap278)
  //trapGroups4.add(trap279)
  //trapGroups4.add(trap280)
  //trapGroups4.add(trap281)
  //trapGroups4.add(trap282)
  //trapGroups4.add(trap283)
  //trapGroups4.add(trap284)
  //trapGroups4.add(trap285)
  //trapGroups4.add(trap286)
  //trapGroups4.add(trap287)
  //trapGroups4.add(trap288)
  //trapGroups4.add(trap289)
  //trapGroups4.add(trap290)
  //trapGroups4.add(trap291)
  //trapGroups4.add(trap292)
  //trapGroups4.add(trap293)
  //trapGroups4.add(trap294)
  //trapGroups4.add(trap295)
  //trapGroups4.add(trap296)
  //trapGroups4.add(trap297)
  //trapGroups4.add(trap298)
  //trapGroups4.add(trap299)
  //trapGroups4.add(trap300)
  //trapGroups4.add(trap301)
  //trapGroups4.add(trap302)
  //trapGroups4.add(trap303)
  //trapGroups4.add(trap304)
  //trapGroups4.add(trap305)
  //trapGroups4.add(trap306)
  //trapGroups4.add(trap307)
  //trapGroups4.add(trap308)
  //trapGroups4.add(trap309)
  //trapGroups4.add(trap310)
  //trapGroups4.add(trap311)
  //trapGroups4.add(trap312)
  //trapGroups4.add(trap313)
  //trapGroups4.add(trap314)
  //trapGroups4.add(trap315)
  //trapGroups4.add(trap316)
  //trapGroups4.add(trap317)
  //trapGroups4.add(trap318)
  //trapGroups4.add(trap319)
  //trapGroups4.add(trap320)
  //trapGroups4.add(trap321)
  //trapGroups4.add(trap322)
  //trapGroups4.add(trap323)
  //trapGroups4.add(trap324)
  //trapGroups4.add(trap325)
  //trapGroups4.add(trap326)
  //trapGroups4.add(trap327)
  //trapGroups4.add(trap328)
  //trapGroups4.add(trap329)
  //trapGroups4.add(trap330)
  //trapGroups4.add(trap331)
  //trapGroups4.add(trap332)
  //trapGroups4.add(trap333)
  //trapGroups4.add(trap334)
  //trapGroups4.add(trap335)
  //trapGroups4.add(trap336)
  //trapGroups4.add(trap337)
  //trapGroups4.add(trap338)
  //trapGroups4.add(trap339)
  //trapGroups4.add(trap340)
  //trapGroups4.add(trap341)
  //trapGroups4.add(trap342)
  //trapGroups4.add(trap343)
  //trapGroups4.add(trap344)
  //trapGroups4.add(trap345)
  //trapGroups4.add(trap346)
  //trapGroups4.add(trap347)
  //trapGroups4.add(trap348)
  //trapGroups4.add(trap349)
  //trapGroups4.add(trap350)
  //trapGroups4.add(trap351)
  //trapGroups4.add(trap352)
  //trapGroups4.add(trap353)
  //trapGroups4.add(trap354)
  //trapGroups4.add(trap355)
  //trapGroups4.add(trap356)
  //trapGroups4.add(trap357)
  //trapGroups4.add(trap358)
  //trapGroups4.add(trap359)
  //trapGroups4.add(trap360)
  //trapGroups4.add(trap361)
  //trapGroups4.add(trap362)
  //trapGroups4.add(trap363)
  //trapGroups4.add(trap364)
  //trapGroups4.add(trap365)
  //trapGroups4.add(trap365) 
  //trapGroups4.add(trap366) 
  //trapGroups4.add(trap367)
  //trapGroups4.add(trap368)
  //trapGroups4.add(trap369)
  //trapGroups4.add(trap370) 
  //trapGroups4.add(trap371) 
  //trapGroups4.add(trap372) 
  //trapGroups4.add(trap373) 
  //trapGroups4.add(trap374) 
  //trapGroups4.add(trap375) 
  //trapGroups4.add(trap376) 
  //trapGroups4.add(trap377) 
  //trapGroups4.add(trap378) 
  //trapGroups4.add(trap379) 
  //trapGroups4.add(trap380) 
  //trapGroups4.add(trap381) 
  //trapGroups4.add(trap382) 
  //trapGroups4.add(trap383) 
  //trapGroups4.add(trap384) 
  //trapGroups4.add(trap385) 
  //trapGroups4.add(trap386) 
  //trapGroups4.add(trap387) 
  //trapGroups4.add(trap388) 
  //trapGroups4.add(trap389) 
  //trapGroups4.add(trap390) 
  //trapGroups4.add(trap391) 
  //trapGroups4.add(trap392) 
  //trapGroups4.add(trap393) 
  //trapGroups4.add(trap394) 
  //trapGroups4.add(trap395)
  //trapGroups4.add(trap396)
  //trapGroups4.add(trap397)
  //trapGroups4.add(trap398)
  //trapGroups4.add(trap399) 
  //trapGroups4.add(trap400) 
  //trapGroups4.add(trap401) 
  //trapGroups4.add(trap402) 
  //trapGroups4.add(trap403) 
  //trapGroups4.add(trap404) 
  //trapGroups4.add(trap405) 
  //trapGroups4.add(trap406) 
  //trapGroups4.add(trap407) 
  //trapGroups4.add(trap408) 
  //trapGroups4.add(trap409) 
  //trapGroups4.add(trap410) 
  //trapGroups4.add(trap411) 
  //trapGroups4.add(trap412) 
  //trapGroups4.add(trap413) 
  //trapGroups4.add(trap414) 
  //trapGroups4.add(trap415) 
  //trapGroups4.add(trap416) 
  //trapGroups4.add(trap417) 
  //trapGroups4.add(trap418) 
  //trapGroups4.add(trap419) 
  //trapGroups4.add(trap420) 
  //trapGroups4.add(trap421) 
  //trapGroups4.add(trap422) 
  //trapGroups4.add(trap423) 
  //trapGroups4.add(trap424)
  //trapGroups4.add(trap425)
  //trapGroups4.add(trap426)
  //trapGroups4.add(trap427)
  //trapGroups4.add(trap428) 
  //trapGroups4.add(trap429) 
  //trapGroups4.add(trap430) 
  //trapGroups4.add(trap431) 
  //trapGroups4.add(trap432) 
  //trapGroups4.add(trap433) 
  //trapGroups4.add(trap434) 
  //trapGroups4.add(trap435) 
  //trapGroups4.add(trap436) 
  //trapGroups4.add(trap437) 
  //trapGroups4.add(trap438) 
  //trapGroups4.add(trap439) 
  //trapGroups4.add(trap440) 
  //trapGroups4.add(trap441) 
  //trapGroups4.add(trap442) 
  //trapGroups4.add(trap443) 
  //trapGroups4.add(trap444) 
  //trapGroups4.add(trap445) 
  //trapGroups4.add(trap446) 
  //trapGroups4.add(trap447) 
  //trapGroups4.add(trap448) 
  //trapGroups4.add(trap449) 
  //trapGroups4.add(trap450) 
  //trapGroups4.add(trap451) 
  //trapGroups4.add(trap452) 
  //trapGroups4.add(trap453)
  //trapGroups4.add(trap454)
  //trapGroups4.add(trap455)
  //trapGroups4.add(trap456) 
  //trapGroups4.add(trap457)  
  //trapGroups4.add(trap458)  
  //trapGroups4.add(trap459)  
  //trapGroups4.add(trap460)  
  //trapGroups4.add(trap461)  
  //trapGroups4.add(trap462)  
  //trapGroups4.add(trap463)  
  //trapGroups4.add(trap464)  
  //trapGroups4.add(trap465)  
  //trapGroups4.add(trap466)  
  //trapGroups4.add(trap467)  
  //trapGroups4.add(trap468)  
  //trapGroups4.add(trap469)  
  //trapGroups4.add(trap470)  
  //trapGroups4.add(trap471)  
  //trapGroups4.add(trap472)  
  //trapGroups4.add(trap473)  
  //trapGroups4.add(trap474)  
  //trapGroups4.add(trap475)  
  //trapGroups4.add(trap476)  
  //trapGroups4.add(trap477)  
  //trapGroups4.add(trap478)  
  //trapGroups4.add(trap479)  
  //trapGroups4.add(trap480)  
  //trapGroups4.add(trap481)  
  //trapGroups4.add(trap482)  
  //trapGroups4.add(trap483)  
  //trapGroups4.add(trap484)  
  //trapGroups4.add(trap485)  
  //trapGroups4.add(trap486)  
  //trapGroups4.add(trap487)  
  //trapGroups4.add(trap488)  
  //trapGroups4.add(trap489)
  //trapGroups4.add(trap490)
  //trapGroups4.add(trap491)  
  //trapGroups4.add(trap492)  
  //trapGroups4.add(trap493)  
  //trapGroups4.add(trap494)  
  //trapGroups4.add(trap495)  
  //trapGroups4.add(trap496)  
  //trapGroups4.add(trap497)  
  //trapGroups4.add(trap498)  
  //trapGroups4.add(trap499)  
  //trapGroups4.add(trap500)  
  //trapGroups4.add(trap501)  
  //trapGroups4.add(trap502)  
  //trapGroups4.add(trap503)  
  //trapGroups4.add(trap504)  
  //trapGroups4.add(trap505)  
  //trapGroups4.add(trap506)  
  //trapGroups4.add(trap507)  
  //trapGroups4.add(trap508)  
  //trapGroups4.add(trap509)  
  //trapGroups4.add(trap510)  
  //trapGroups4.add(trap511)  
  //trapGroups4.add(trap512)  
  //trapGroups4.add(trap513)  
  //trapGroups4.add(trap514)  
  //trapGroups4.add(trap515)  
  //trapGroups4.add(trap516) 
  //trapGroups4.add(trap517) 
  //trapGroups4.add(trap518) 
  //trapGroups4.add(trap519) 
  //trapGroups4.add(trap520) 
  //trapGroups4.add(trap521) 
  //trapGroups4.add(trap522) 
  //trapGroups4.add(trap523) 
  //trapGroups4.add(trap524) 
  //trapGroups4.add(trap525) 
  //trapGroups4.add(trap526) 
  //trapGroups4.add(trap527) 
  //trapGroups4.add(trap528) 
  //trapGroups4.add(trap529) 
  //trapGroups4.add(trap530) 
  //trapGroups4.add(trap531) 
  //trapGroups4.add(trap532) 
  //trapGroups4.add(trap533) 
  //trapGroups4.add(trap534)  
  //trapGroups4.add(trap535)  
  //trapGroups4.add(trap536)  
  //trapGroups4.add(trap537)  
  //trapGroups4.add(trap538)  
  //trapGroups4.add(trap539)  
  //trapGroups4.add(trap540)  
  //trapGroups4.add(trap541)  
  //trapGroups4.add(trap542)  
  //trapGroups4.add(trap543)  
  //trapGroups4.add(trap544)  
  //trapGroups4.add(trap545)  
  //trapGroups4.add(trap546)  
  //trapGroups4.add(trap547)  
  //trapGroups4.add(trap548)  
  //trapGroups4.add(trap549)  
  //trapGroups4.add(trap550)  
  //trapGroups4.add(trap551)  
  //trapGroups4.add(trap552)  
  //trapGroups4.add(trap553)  
  //trapGroups4.add(trap554)  
  //trapGroups4.add(trap555)  
  //trapGroups4.add(trap556)  
  //trapGroups4.add(trap557)  
  //trapGroups4.add(trap558)  
  //trapGroups4.add(trap559)  
  //trapGroups4.add(trap560)  
  //trapGroups4.add(trap561)  
  //trapGroups4.add(trap562)  
  //trapGroups4.add(trap563)  
  //trapGroups4.add(trap564)  
  //trapGroups4.add(trap565)  
  //trapGroups4.add(trap566) 
  //trapGroups4.add(trap567) 
  //trapGroups4.add(trap568) 
  //trapGroups4.add(trap569) 
  //trapGroups4.add(trap570) 
  //trapGroups4.add(trap571) 
  //trapGroups4.add(trap572) 
  //trapGroups4.add(trap573) 
  //trapGroups4.add(trap574) 
  //trapGroups4.add(trap575) 
  //trapGroups4.add(trap576) 
  //trapGroups4.add(trap577) 
  //trapGroups4.add(trap578) 
  //trapGroups4.add(trap579) 
  //trapGroups4.add(trap580) 
  //trapGroups4.add(trap581) 
  //trapGroups4.add(trap582) 
  //trapGroups4.add(trap583) 
  //trapGroups4.add(trap584)  
  //trapGroups4.add(trap585)  
  //trapGroups4.add(trap586)  
  //trapGroups4.add(trap587)  
  //trapGroups4.add(trap588)  
  //trapGroups4.add(trap589)  
  //trapGroups4.add(trap590)  
  //trapGroups4.add(trap591)  
  //trapGroups4.add(trap592)  
  //trapGroups4.add(trap593)  
  //trapGroups4.add(trap594)  
  //trapGroups4.add(trap595)  
  //trapGroups4.add(trap596)  
  //trapGroups4.add(trap597)  
  //trapGroups4.add(trap598)  
  //trapGroups4.add(trap599)  
  //trapGroups4.add(trap600)  
  //trapGroups4.add(trap601)  
  //trapGroups4.add(trap602)  
  //trapGroups4.add(trap603)  
  //trapGroups4.add(trap604)  
  //trapGroups4.add(trap605)  
  //trapGroups4.add(trap606)  
  //trapGroups4.add(trap607)  
  //trapGroups4.add(trap608)  
  //trapGroups4.add(trap609)  
  //trapGroups4.add(trap610)  
  //trapGroups4.add(trap611)  
  //trapGroups4.add(trap612)  
  //trapGroups4.add(trap613)  
  //trapGroups4.add(trap614)  
  //trapGroups4.add(trap615)  
  //trapGroups4.add(trap616) 
  //trapGroups4.add(trap617) 
  //trapGroups4.add(trap618) 
  //trapGroups4.add(trap619) 
  //trapGroups4.add(trap620) 
  //trapGroups4.add(trap621) 
  //trapGroups4.add(trap622) 
  //trapGroups4.add(trap623) 
  //trapGroups4.add(trap624) 
  //trapGroups4.add(trap625) 
  //trapGroups4.add(trap626) 
  //trapGroups4.add(trap627) 
  //trapGroups4.add(trap628) 
  //trapGroups4.add(trap629) 
  //trapGroups4.add(trap630) 
  //trapGroups4.add(trap631) 
  //trapGroups4.add(trap632) 
  //trapGroups4.add(trap633) 
  //trapGroups4.add(trap634)  
  //trapGroups4.add(trap635)  
  //trapGroups4.add(trap636)  
  //trapGroups4.add(trap637)  
  //trapGroups4.add(trap638)  
  //trapGroups4.add(trap639)  
  //trapGroups4.add(trap640)  
  //trapGroups4.add(trap641)  
  //trapGroups4.add(trap642)  
  //trapGroups4.add(trap643)
  //trapGroups4.add(trap644)  
  //trapGroups4.add(trap645)  
  //trapGroups4.add(trap646)  
  //trapGroups4.add(trap647)  
  //trapGroups4.add(trap648)  
  //trapGroups4.add(trap649)  
  //trapGroups4.add(trap650)  
  //trapGroups4.add(trap651)  
  //trapGroups4.add(trap652)  
  //trapGroups4.add(trap653)  
  //trapGroups4.add(trap654)  
  //trapGroups4.add(trap655)  
  //trapGroups4.add(trap656)  
  //trapGroups4.add(trap657)  
  //trapGroups4.add(trap658)  
  //trapGroups4.add(trap659)  
  //trapGroups4.add(trap660)  
  //trapGroups4.add(trap661)  
  //trapGroups4.add(trap662)  
  //trapGroups4.add(trap663)  
  //trapGroups4.add(trap664)  
  //trapGroups4.add(trap665) 
  //trapGroups4.add(trap666) 
  //trapGroups4.add(trap667) 
  //trapGroups4.add(trap668) 
  //trapGroups4.add(trap669) 
  //trapGroups4.add(trap670) 
  //trapGroups4.add(trap671) 
  //trapGroups4.add(trap672) 
  //trapGroups4.add(trap673) 
  //trapGroups4.add(trap674) 
  //trapGroups4.add(trap675) 
  //trapGroups4.add(trap676) 
  //trapGroups4.add(trap677) 
  //trapGroups4.add(trap678) 
  //trapGroups4.add(trap679) 
  //trapGroups4.add(trap680) 
  //trapGroups4.add(trap681) 
  //trapGroups4.add(trap682) 
  //trapGroups4.add(trap683)  
  //trapGroups4.add(trap684)  
  //trapGroups4.add(trap685)  
  //trapGroups4.add(trap686)  
  //trapGroups4.add(trap687)  
  //trapGroups4.add(trap688)  
  //trapGroups4.add(trap689)  
  //trapGroups4.add(trap690)  
  //trapGroups4.add(trap691)  
  //trapGroups4.add(trap692)  
  //trapGroups4.add(trap693)  
  //trapGroups4.add(trap694)  
  //trapGroups4.add(trap695)  
  //trapGroups4.add(trap696)  
  //trapGroups4.add(trap697)  
  //trapGroups4.add(trap698)  
  //trapGroups4.add(trap699)  
  //trapGroups4.add(trap700)  
  //trapGroups4.add(trap701)  
  //trapGroups4.add(trap702)  
  //trapGroups4.add(trap703)  
  //trapGroups4.add(trap704)  
  //trapGroups4.add(trap705)  
  //trapGroups4.add(trap706)  
  //trapGroups4.add(trap707)  
  //trapGroups4.add(trap708)  
  //trapGroups4.add(trap709)  
  //trapGroups4.add(trap711)  
  //trapGroups4.add(trap712)  
  //trapGroups4.add(trap713)  
  //trapGroups4.add(trap714)  
  //trapGroups4.add(trap715)  
  //trapGroups4.add(trap716) 
  //trapGroups4.add(trap717) 
  //trapGroups4.add(trap718) 
  //trapGroups4.add(trap719) 
  //trapGroups4.add(trap720) 
  //trapGroups4.add(trap721) 
  //trapGroups4.add(trap722) 
  //trapGroups4.add(trap723) 
  //trapGroups4.add(trap724) 
  //trapGroups4.add(trap725) 
  //trapGroups4.add(trap726) 
  //trapGroups4.add(trap727) 
  //trapGroups4.add(trap728) 
  //trapGroups4.add(trap729) 
  //trapGroups4.add(trap730) 
  //trapGroups4.add(trap731) 
  //trapGroups4.add(trap732) 
  //trapGroups4.add(trap733) 
  //trapGroups4.add(trap734)  
  //trapGroups4.add(trap735)  
  //trapGroups4.add(trap736)  
  //trapGroups4.add(trap737)  
  //trapGroups4.add(trap738)  
  //trapGroups4.add(trap739)  
  //trapGroups4.add(trap740)  
  //trapGroups4.add(trap741)  
  //trapGroups4.add(trap742)  
  //trapGroups4.add(trap743)  
  //trapGroups4.add(trap744)  
  //trapGroups4.add(trap745)  
  //trapGroups4.add(trap746)  
  //trapGroups4.add(trap747)  
  //trapGroups4.add(trap748)  
  //trapGroups4.add(trap749)  
  //trapGroups4.add(trap750)  
  //trapGroups4.add(trap751)  
  //trapGroups4.add(trap752)  
  //trapGroups4.add(trap753)  
  //trapGroups4.add(trap754)  
  //trapGroups4.add(trap755)  
  //trapGroups4.add(trap756)  
  //trapGroups4.add(trap757)  
  //trapGroups4.add(trap758)  
  //trapGroups4.add(trap759)  
  //trapGroups4.add(trap760)  
  //trapGroups4.add(trap761)  
  //trapGroups4.add(trap762)  
  //trapGroups4.add(trap763)  
  //trapGroups4.add(trap764)  
  //trapGroups4.add(trap765)  
  //trapGroups4.add(trap766) 
  //trapGroups4.add(trap767) 
  //trapGroups4.add(trap768) 
  //trapGroups4.add(trap769) 
  //trapGroups4.add(trap770) 
  //trapGroups4.add(trap771) 
  //trapGroups4.add(trap772) 
  //trapGroups4.add(trap773) 
  //trapGroups4.add(trap774) 
  //trapGroups4.add(trap775) 
  //trapGroups4.add(trap776) 
  //trapGroups4.add(trap777) 
  //trapGroups4.add(trap778) 
  //trapGroups4.add(trap779) 
  //trapGroups4.add(trap780) 
  //trapGroups4.add(trap781) 
  //trapGroups4.add(trap782) 
  //trapGroups4.add(trap783) 
  //trapGroups4.add(trap784)  
  //trapGroups4.add(trap785)  
  //trapGroups4.add(trap786)  
  //trapGroups4.add(trap787)  
  //trapGroups4.add(trap788)  
  //trapGroups4.add(trap789)  
  //trapGroups4.add(trap790)  
  //trapGroups4.add(trap791)  
  //trapGroups4.add(trap792)  
  //trapGroups4.add(trap793)  
  //trapGroups4.add(trap794)  
  //trapGroups4.add(trap795)  
  //trapGroups4.add(trap796)  
  //trapGroups4.add(trap797)  
  //trapGroups4.add(trap798)  
  //trapGroups4.add(trap799)  
  //trapGroups4.add(trap801)  
  //trapGroups4.add(trap802)  
  //trapGroups4.add(trap803)  
  //trapGroups4.add(trap804)  
  //trapGroups4.add(trap805)  
  //trapGroups4.add(trap806)  
  //trapGroups4.add(trap807)  
  //trapGroups4.add(trap808)  
  //trapGroups4.add(trap809)  
  //trapGroups4.add(trap820)  
  //trapGroups4.add(trap821)  
  //trapGroups4.add(trap822)  
  //trapGroups4.add(trap823)  
  //trapGroups4.add(trap824)  
  //trapGroups4.add(trap825)  
  //trapGroups4.add(trap826)  
  //trapGroups4.add(trap827) 
  //trapGroups4.add(trap828) 
  //trapGroups4.add(trap829) 
  //trapGroups4.add(trap830) 
  //trapGroups4.add(trap831) 
  //trapGroups4.add(trap832) 
  //trapGroups4.add(trap833) 
  //trapGroups4.add(trap834) 
  //trapGroups4.add(trap835) 
  //trapGroups4.add(trap836) 
  //trapGroups4.add(trap837) 
  //trapGroups4.add(trap838) 
  //trapGroups4.add(trap839) 
  //trapGroups4.add(trap840) 
  //trapGroups4.add(trap841) 
  //trapGroups4.add(trap842) 
  //trapGroups4.add(trap843) 
  //trapGroups4.add(trap844) 
  //trapGroups4.add(trap845)  
  //trapGroups4.add(trap846)  
  //trapGroups4.add(trap847)  
  //trapGroups4.add(trap848)  
  //trapGroups4.add(trap849)  
  //trapGroups4.add(trap850)  
  //trapGroups4.add(trap851)  
  //trapGroups4.add(trap852)
  //trapGroups4.add(trap853)
  //trapGroups4.add(trap854)
  //trapGroups4.add(trap855)
  //trapGroups4.add(trap856)
  //trapGroups4.add(trap857)
  //trapGroups4.add(trap858)
  //trapGroups4.add(trap859)
  //trapGroups4.add(trap860)
  //trapGroups4.add(trap861)
  //trapGroups4.add(trap862)
  //trapGroups4.add(trap863)
  //trapGroups4.add(trap864)
  //trapGroups4.add(trap865)
  //trapGroups4.add(trap866)
  //trapGroups4.add(trap867)
  //trapGroups4.add(trap867)
  //trapGroups4.add(trap868)
  //trapGroups4.add(trap869)
  //trapGroups4.add(trap870)
  //trapGroups4.add(trap871)
  //trapGroups4.add(trap872)
  //trapGroups4.add(trap873)
  //trapGroups4.add(trap874)
  //trapGroups4.add(trap875)
  //trapGroups4.add(trap876)
  //trapGroups4.add(trap877) 
  //trapGroups4.add(trap878) 
  //trapGroups4.add(trap879) 
  //trapGroups4.add(trap880) 
  //trapGroups4.add(trap881) 
  //trapGroups4.add(trap882) 
  //trapGroups4.add(trap883) 
  //trapGroups4.add(trap884) 
  //trapGroups4.add(trap885) 
  //trapGroups4.add(trap886) 
  //trapGroups4.add(trap887) 
  //trapGroups4.add(trap888) 
  //trapGroups4.add(trap889) 
  //trapGroups4.add(trap890) 
  //trapGroups4.add(trap891) 
  //trapGroups4.add(trap892) 
  //trapGroups4.add(trap893)  
  //trapGroups4.add(trap894)  
  //trapGroups4.add(trap895)  
  //trapGroups4.add(trap896)  
  //trapGroups4.add(trap897)  
  //trapGroups4.add(trap898)  
  //trapGroups4.add(trap899)  
  //trapGroups4.add(trap900)  
  //trapGroups4.add(trap901)  
  //trapGroups4.add(trap902)  
  //trapGroups4.add(trap903)  
  //trapGroups4.add(trap904)  
  //trapGroups4.add(trap905)  
  //trapGroups4.add(trap906)  
  //trapGroups4.add(trap907)  
  //trapGroups4.add(trap908)  
  //trapGroups4.add(trap909)  
  //trapGroups4.add(trap910)  
  //trapGroups4.add(trap911)  
  //trapGroups4.add(trap912)  
  //trapGroups4.add(trap913)  
  //trapGroups4.add(trap914)  
  //trapGroups4.add(trap915)  
  //trapGroups4.add(trap916)  
  //trapGroups4.add(trap917)  
  //trapGroups4.add(trap918)  
  //trapGroups4.add(trap919)  
  //trapGroups4.add(trap920)  
  //trapGroups4.add(trap921)  
  //trapGroups4.add(trap922)  
  //trapGroups4.add(trap923)  
  //trapGroups4.add(trap924)  
  //trapGroups4.add(trap925) 
  //trapGroups4.add(trap926) 
  //trapGroups4.add(trap927) 
  //trapGroups4.add(trap928) 
  //trapGroups4.add(trap929) 
  //trapGroups4.add(trap930) 
  //trapGroups4.add(trap931) 
  //trapGroups4.add(trap932) 
  //trapGroups4.add(trap933) 
  //trapGroups4.add(trap934) 
  //trapGroups4.add(trap935) 
  //trapGroups4.add(trap936) 
  //trapGroups4.add(trap937) 
  //trapGroups4.add(trap938) 
  //trapGroups4.add(trap939) 
  //trapGroups4.add(trap940) 
  //trapGroups4.add(trap941) 
  //trapGroups4.add(trap942)  
  //trapGroups4.add(trap943)  
  //trapGroups4.add(trap944)  
  //trapGroups4.add(trap945)  
  //trapGroups4.add(trap946)  
  //trapGroups4.add(trap947)  
  //trapGroups4.add(trap948)  
  //trapGroups4.add(trap949)  
  //trapGroups4.add(trap950)  
  //trapGroups4.add(trap951)  
  //trapGroups4.add(trap952)  
  //trapGroups4.add(trap953)  
  //trapGroups4.add(trap954)  
  //trapGroups4.add(trap955)  
  //trapGroups4.add(trap956)  
  //trapGroups4.add(trap957)  
  //trapGroups4.add(trap958)  
  //trapGroups4.add(trap959)  
  //trapGroups4.add(trap960)  
  //trapGroups4.add(trap961)  
  //trapGroups4.add(trap962)  
  //trapGroups4.add(trap963)  
  //trapGroups4.add(trap964)  
  //trapGroups4.add(trap965)  
  //trapGroups4.add(trap966)  
  //trapGroups4.add(trap967)  
  //trapGroups4.add(trap968)  
  //trapGroups4.add(trap969)  
  //trapGroups4.add(trap970)  
  //trapGroups4.add(trap971)  
  //trapGroups4.add(trap972)  
  //trapGroups4.add(trap973)  
  //trapGroups4.add(trap974)  
  //trapGroups4.add(trap975) 
  //trapGroups4.add(trap976) 
  //trapGroups4.add(trap977) 
  //trapGroups4.add(trap978) 
  //trapGroups4.add(trap979) 
  //trapGroups4.add(trap980) 
  //trapGroups4.add(trap981) 
  //trapGroups4.add(trap982) 
  //trapGroups4.add(trap983) 
  //trapGroups4.add(trap984) 
  //trapGroups4.add(trap985) 
  //trapGroups4.add(trap986) 
  //trapGroups4.add(trap987) 
  //trapGroups4.add(trap988) 
  //trapGroups4.add(trap989) 
  //trapGroups4.add(trap990) 
  //trapGroups4.add(trap991) 
  //trapGroups4.add(trap992) 
  //trapGroups4.add(trap993)  
  //trapGroups4.add(trap994)  
  //trapGroups4.add(trap995)  
  //trapGroups4.add(trap996)  
  //trapGroups4.add(trap997)  
  //trapGroups4.add(trap998)  
  //trapGroups4.add(trap999)  
  //trapGroups4.add(trap1000)
  //trapGroups4.add(trap1001)
  //trapGroups4.add(trap1002)
  //trapGroups4.add(trap1003)
  //trapGroups4.add(trap1004)
  //trapGroups4.add(trap1005)
  //trapGroups4.add(trap1006)
  //trapGroups4.add(trap1007)
  //trapGroups4.add(trap1008)
  //trapGroups4.add(trap1009)
  //trapGroups4.add(trap1010)
  //trapGroups4.add(trap1011)
  //trapGroups4.add(trap1012)
  //trapGroups4.add(trap1013)
  //trapGroups4.add(trap1014)
  //trapGroups4.add(trap1015)
  //trapGroups4.add(trap1016)
  //trapGroups4.add(trap1017)
  //trapGroups4.add(trap1018)
  //trapGroups4.add(trap1019) 
  //trapGroups4.add(trap1020) 
  //trapGroups4.add(trap1021) 
  //trapGroups4.add(trap1022) 
  //trapGroups4.add(trap1023) 
  //trapGroups4.add(trap1024) 
  //trapGroups4.add(trap1025) 
  //trapGroups4.add(trap1026)
  //trapGroups4.add(trap1027)
  //trapGroups4.add(trap1028)
  //trapGroups4.add(trap1029)
  //trapGroups4.add(trap1030)
  //trapGroups4.add(trap1031)
  //trapGroups4.add(trap1032)
  //trapGroups4.add(trap1033)
  //trapGroups4.add(trap1034)
  //trapGroups4.add(trap1035)
  //trapGroups4.add(trap1036)
  //trapGroups4.add(trap1037)
  //trapGroups4.add(trap1038)
  //trapGroups4.add(trap1039)
  //trapGroups4.add(trap1040)
  //trapGroups4.add(trap1041)
  //trapGroups4.add(trap1042)
  //trapGroups4.add(trap1043)

  trapGroups5.add(trap1044)
  trapGroups6.add(trap1045)
  trapGroups7.add(trap1046)
  trapGroups8.add(trap1047)

  trapGroups9.add(trap1048)
  trapGroups10.add(trap1049)
  trapGroups9.add(trap1050)
  trapGroups10.add(trap1051)
  trapGroups9.add(trap1052)
  trapGroups10.add(trap1053)
  trapGroups9.add(trap1054)

  trapGroups11.add(trap1055)
  trapGroups12.add(trap1056)
  trapGroups11.add(trap1057)
  trapGroups12.add(trap1058)
  trapGroups11.add(trap1059)
  trapGroups12.add(trap1060)
  trapGroups11.add(trap1061)

  
}