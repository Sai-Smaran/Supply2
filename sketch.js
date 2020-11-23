var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var mark1, mark2, mark3;
var markbody1, markbody2, markbody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	mark1=createSprite(400, 670, 200, 20);
	mark2=createSprite(310, 610, 20, 100);
	mark3=createSprite(490, 610, 20, 100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0 ,isStatic:true});
	World.add(world, packageBody);

	mark1 = Bodies.rectangle(400, 650, 200, 20, {isStatic:true});	
	mark2 = Bodies.rectangle(310, 600, 20, 100, {isStatic:true});
	mark3 = Bodies.rectangle(490, 600, 20, 100, {isStatic:true});

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



