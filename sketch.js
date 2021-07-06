
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper1,rightdustbin,leftdustbin,bottomdustbin,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,5,20);
	ground = new Ground(400,650,800,20);

	
	rightdustbin = new Dustbin(729,564,10,150)
	leftdustbin = new Dustbin(578,565,10,150)
	bottomdustbin = new Dustbin(650,635,150,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  drawSprites();

  paper1.display();
  bottomdustbin.display();
  rightdustbin.display();
  leftdustbin.display();

  ground.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:65,y:-65});
	}
}

