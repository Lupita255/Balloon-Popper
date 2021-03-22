const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var boy, boyImage;
var backgroundImage;
var balloon,balloon1Img;
var attach;


function preload(){
  boyImage = loadImage("images/boy.png");
  backgroundImage = loadImage("images/download.jpeg");
}

function setup() {
  createCanvas(900,500);

  engine=Engine.create();
  world=engine.world;

  boy = createSprite(150, 350, 50, 50);
  boy.addImage("boy",boyImage);
  boy.scale = 0.07;

  blueBalloon1 = new Blue(370,350,40,55);
  blueBalloon2 = new Blue(510,200,40,55);
  blueBalloon3 = new Blue(650,280,40,55);
  blueBalloon4 = new Blue(650,120,40,55);

  redBalloon1 = new Red(370,280,40,55);
  redBalloon2 = new Red(580,200,40,55)
  redBalloon3 = new Red(510,350,40,55);
  redBalloon4 = new Red(440,120,40,55);

  orangeBalloon1 = new Orange(370,200,40,55);
  orangeBalloon2 = new Orange(440,350,44,55);
  orangeBalloon3 = new Orange(580,280,40,55);
  orangeBalloon4 = new Orange(510,120,40,55);

  greenBalloon1 = new Green(580,350,40,55);
  greenBalloon2 = new Green(650,200,40,55);
  greenBalloon3 = new Green(440,280,40,55);
  greenBalloon4 = new Green(370,120,40,55);

  purpleBalloon1 = new Purple(650,350,40,55);
  purpleBalloon2 = new Purple(440,200,40,55);
  purpleBalloon3 = new Purple(510,280,40,55);
  purpleBalloon4 = new Purple(580,120,40,55);

  dart = new Dart(215,320,30,30);

  attach=new chain(dart.body,{x:215, y:320});
  
  console.log(blueBalloon1.width);
}

function draw() {
  background(backgroundImage); 
  Engine.update(engine);

  blueBalloon1.display();
  blueBalloon2.display();
  blueBalloon3.display();
  blueBalloon4.display();
  detectCollision(dart,blueBalloon1);
  detectCollision(dart,blueBalloon2);
  detectCollision(dart,blueBalloon3);
  detectCollision(dart,blueBalloon4);

  redBalloon1.display();
  redBalloon2.display();
  redBalloon3.display();
  redBalloon4.display();
  detectCollision(dart,redBalloon1);
  detectCollision(dart,redBalloon2);
  detectCollision(dart,redBalloon3);
  detectCollision(dart,redBalloon4);

  orangeBalloon1.display();
  orangeBalloon2.display();
  orangeBalloon3.display();
  orangeBalloon4.display();
  detectCollision(dart,orangeBalloon1);
  detectCollision(dart,orangeBalloon2);
  detectCollision(dart,orangeBalloon3);
  detectCollision(dart,orangeBalloon4);

  greenBalloon1.display();
  greenBalloon2.display();
  greenBalloon3.display();
  greenBalloon4.display();
  detectCollision(dart,greenBalloon1);
  detectCollision(dart,greenBalloon2);
 detectCollision(dart,greenBalloon3);
 detectCollision(dart,greenBalloon4);

  purpleBalloon1.display();
  purpleBalloon2.display();
  purpleBalloon3.display();
  purpleBalloon4.display();
 detectCollision(dart,purpleBalloon1);
 detectCollision(dart,purpleBalloon2);
 detectCollision(dart,purpleBalloon3);
 detectCollision(dart,purpleBalloon4);

  dart.display();

  drawSprites();
}

function mouseDragged(){
	dart.body.position.x = mouseX;
  dart.body.position.y = mouseY;
}

function mouseReleased(){
	attach.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(dart.body,{x:235, y:420});
    attach.attach(dart.body);
  }
}

function detectCollision(obj1,obj2){
    obj1Pos = obj1.body.position
    obj2Pos = obj2.body.position


    //var distance= dist(obj1Pos.x,obj1Pos.y,obj2Pos.x,obj2Pos.y)
    if (obj1Pos.x - obj2Pos.x < obj2.width/2 + obj1.width/2
      && obj2Pos.x - obj1Pos.x < obj2.width/2 + obj1.width/2
      && objt2.yPos - obj1Pos.y < obj2.height/2 + obj1.height/2
      && obj1Pos.y - obj2Pos.y< obj2.height/2 + obj1.height/2) {
      Matter.Body.setStatic(obj1.body,false);
      console.log("hello")
    }
   
}