let mic;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  micLevel = mic.getLevel();

  mov = map(micLevel, 0, 1, 2, 1000);


  var boca_w = width/1.75;

  noStroke();
  push();

  translate(width/2,height/2);
  rectMode(CENTER);

  //fons boca
  fill('red');
  rect(0,100,boca_w,200+mov);

  //llengua
  fill(255,204,0);
  rect(0,150,boca_w-mov/2,100,10+mov);

  //dents
  fill(255);
  rect (0/mov,20,boca_w,50+mov*3,10+mov*2);

  //barbeta
  fill('purple');
  rect(0,180,boca_w,100+mov);

  pop();

  //front 
  fill('purple');
  rect(0,0,width,height/1.8+mov*0.75);

  //ull esquerre
  fill(255);
  ellipse(width*0.25,height/2.5-mov,40+mov);
  fill('black');
  ellipse(width*0.25,height/2.5-mov,10-mov);

  //ull dret
  fill(255);
  ellipse(width*0.75,height/2.5-mov,40+mov);
  fill('black');
  ellipse(width*0.75,height/2.5-mov,10+mov);


  //nas
  noFill();
  stroke(255);
  strokeWeight(10);
  arc(width*0.5,height/1.85,60,80-mov, radians(230), radians(310));
}

function touchStarted() {
    getAudioContext().resume();
} 