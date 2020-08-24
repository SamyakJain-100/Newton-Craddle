
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine ;
var  roof1;
var bobObject1 , bobObject2 , bobObject3 ,bobObject4 , bobObject5;
var rope ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	
	roof1= new Roof (200,200,200,20);
	

	bobObject1=  new Bob (500,630,100, PI/2);
	bobObject2=  new Bob (680,630,100, PI/2);
	bobObject3 =  new Bob (590,680,10, PI/2);
	bobObject4 = new Bob (500,630,100, PI/2); 
	bobObject5 = new Bob (500,630,100, PI/2);



  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
   roof1.display();
  
 
}



