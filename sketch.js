
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;


var ground;
var dustbin1;
var obj1;
var obj2;
var obj3;
var ball;
var slingShot;

function preload()
{
	//ball=loadImage("paper.png")
}

function setup() {
	createCanvas(1200, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
	ground=new Ground(600,690,1200,30);
	dustbin1=new Dustbin(900,600,20,100);
	obj1=new Obj(830,630,10,150);
	obj2=new Obj(900,670,150,10);
	obj3=new Obj(970,630,10,150);
	Engine.run(engine);
	ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:500});
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
 
  stroke(15);
   fill("white");
  slingShot.display();
  ellipse(ball.position.x,ball.position.y,30);
  textSize(35);
  fill("blue");
  text("DRAG AND RELEASE TO THROW THE PAPER INTO DUSTBIN", 50, 100)
  obj3.display();
  obj2.display();
  obj1.display();
  dustbin1.display();
  ground.display();
  drawSprites();
  
}
function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	slingShot.fly();
  }
  



