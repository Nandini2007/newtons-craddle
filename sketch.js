
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

//rope1 = new Chain(bob1.body,bob2.body)	
	 bob1 = new Bob(400,400,40);
	 bob2 = new Bob(400 - 62,400,40);
	 bob3 = new Bob(400 - 124,400,40);
	 bob4 = new Bob(400 + 62,560,40);
	 bob5 = new Bob(400 + 124,400,40);
//	 g2 = new Ground(mouseX,mouseY,40,10);

	 ground = new Ground(400,300,300,40)
	 rope1 = new Rope(bob1.body,{x:ground.body.position.x, y:ground.body.position.y});
	 rope2 = new Rope(bob2.body,{x:ground.body.position.x - 40 , y:ground.body.position.y});
	 rope3 = new Rope(bob3.body,{x:ground.body.position.x - 80, y:ground.body.position.y});
	 rope4 = new Rope(bob4.body,{x:ground.body.position.x + 40, y:ground.body.position.y});
	 rope5 = new Rope(bob5.body,{x:ground.body.position.x +80, y:ground.body.position.y});


//	rope1 = new Rope(bob1.body,bob2.body,40,0);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("PINK");
  bob1.display();
  fill("blue")
  bob2.display();
 // g2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
circle(mouseX,mouseY,4);
  drawSprites();
  textSize(25)
  fill("blue")
 text("Press right key to move right bob",200,150);
 text("and press left key to move left bob",200,190)
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-0.05,y :-0.00})
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:0.05,y :0.00})
	}	
}



