
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside;

function preload(){
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.8,
		
	}

	ball = Bodies.circle (100,10,20,ball_options)
	World.add(world,ball);

	
	ground = new Ground(400,350,800,20)
	leftside = new Ground(500,300,10,100)
	rightside = new Ground(700,300,10,100)


	Engine.run(engine);
    ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  Engine.update(engine)
  leftside.display();
  rightside.display();
  ellipse(ball.position.x,ball.position.y,20)
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
       Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0.02} )
	}
}


