
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  treeObg , stoneObg , groundObject , launcherObject ;

var  mango1 , mango2 , mango3 , mango4 , mango5 , mango6 , mango7 , mango8 , mango9 , mango10 , mango11 ;

var  world , boy ;

var launchingForce=120;

function preload()
{

	boy = loadImage("images/boy.png");

	tree = loadImage("images/tree.png");
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stoneObj=new stone(235,420,30); 

	
	mango1=new mango(1100,100,30);
    mango2=new mango(1170,130,30);
    mango3=new mango(1010,140,30);
	
	mango4=new mango(1200,150,30);
    mango5=new mango(1155,105,30);
    mango6=new mango(1019,141,30);
  
	mango7=new mango(1220,100,30);
    mango8=new mango(1180,130,30);
    mango9=new mango(1000,140,30);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



