const Engine = Matter.Engine;//engine is like universe
const World = Matter.World;//world like the Earth inside universe
const Bodies = Matter.Bodies;// bodies are objects on the Earth
var engine1, world1;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird, ground;



function setup() {
  createCanvas(1200,400);
  engine1 = Engine.create();//create engine1
  world1 = engine1.world;//create world1 inside engine1
  ground = new Ground(600, 400, 1200, 20);
  box1 = new Box(700, 320, 70, 70);
  pig1 = new Pig(810, 350);
  box2 = new Box(920, 320, 70, 70);
  log1 = new Log(810, 260, 300, 90);
  box3 = new Box(700, 240, 70, 70);
  pig2 = new Pig(810, 220);
  box4 = new Box(920, 240, 70, 70);
  log2 = new Log(810, 180, 300, 90);
  box5 = new Box(810, 160, 70, 70);
  log3 = new Log(760, 120, 150, 25.71);
  log4 = new Log(870, 120, 150, -25.71);
  bird = new Bird(100, 100);
}

function draw() {
  background(255,255,255); 
 Engine.update(engine1);//start the engine1
 ground.display();
 box1.display();
 pig1.display();
 box2.display();
 log1.display();
 box3.display();
 pig2.display();
 box4.display();
 log2.display();
 box5.display();
 log3.display();
 log4.display();
 bird.display();

  drawSprites();
}