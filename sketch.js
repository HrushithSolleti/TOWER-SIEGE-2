const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6;
var polygon, polygonImg;
var slingshot1;

function preload()
{
  polygonImg=loadImage("polygon.png")
}

function setup()
{

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(600,390,1200,10);
  ground2=new Ground(500,300,300,10);
  ground3=new Ground(900,150,200,10);

  //stand1
  //level1
  block1=new Block(600,295,50,50);
  block2=new Block(550,295,50,50);
  block3=new Block(500,295,50,50);
  block4=new Block(450,295,50,50);
  block5=new Block(400,295,50,50);

  //level2
  block6=new Block(570,260,50,50);
  block7=new Block(520,260,50,50);
  block8=new Block(470,260,50,50);
  block9=new Block(420,260,50,50);

  //level3
  block10=new Block(540,220,50,50);
  block11=new Block(490,220,50,50);
  block12=new Block(440,220,50,50);

  //level4
  block13=new Block(520,180,50,50);
  block14=new Block(470,180,50,50);

  //level5
  block15=new Block(495,140,50,50);

  //stand2
  //level1
  blocks1=new Block(930,130,30,30);
  blocks2=new Block(900,130,30,30);
  blocks3=new Block(870,130,30,30);

  blocks4=new Block(915,100,30,30);
  blocks5=new Block(885,100,30,30);

  blocks6=new Block(900,70,30,30);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingshot1=new Slingshot(this.polygon,{x:100,y:200})

}

function draw()
{
  background("black");
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  
  //stand1

  fill("blue"); 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("pink");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightgreen");
  block10.display();
  block11.display();
  block12.display();

  fill("red")
  block13.display();
  block14.display();

  fill("orange")
  block15.display();

  //stand2

  fill("blue")
  blocks1.display();
  blocks2.display();
  blocks3.display();

  fill("lightgreen")
  blocks4.display();
  blocks5.display();

  fill("red")
  blocks6.display();

  slingshot1.display();

  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,60,60);

  textSize(24);
  fill("white")
  text("Drag hexagonal stone and release to destroy blocks", 250, 20);

  textSize(12);
  fill("white");
  text("Press Space to get a second chance to Play!!!", 900,380);

}

function mouseDragged()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  slingshot1.fly()
}

function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot1.attach(this.polygon);
  }
}