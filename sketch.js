const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100, 600, 20);
  ground = new Ground(600, 650, 1200, 10);
  R1 = new Dustbin(1150, 600, 15, 80);
  R2 = new Dustbin(1100, 640, 120, 15);
  R3 = new Dustbin(1050, 600, 15, 80);
	Engine.run(engine); 
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  R1.display();
  R2.display();
  R3.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: -85})
  }
}